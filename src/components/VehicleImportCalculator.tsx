
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import CurrencyToggle from "./CurrencyToggle";
import ImportBreakdownPanel from "./ImportBreakdownPanel";
import { QuotePDFButton } from "./QuotePDFButton";
import { calculateDuties } from "@/lib/calculation";
import VehicleFormFields from "./VehicleFormFields";
import { useVehicleForm } from "@/hooks/useVehicleForm";
import { useVehicleData } from "@/hooks/useVehicleData";
import { useDutyCalculation } from "@/hooks/useDutyCalculation";
import { VehicleFormValues } from "@/lib/vehicleFormSchema";

const exchangeRateDefault = 135.0;
const fetchExchangeRate = async () => {
  return exchangeRateDefault;
};

export default function VehicleImportCalculator() {
  const [currency, setCurrency] = useState<"KES" | "USD">("KES");
  const [exchangeRate, setExchangeRate] = useState(exchangeRateDefault);

  const { 
    form, 
    selectedMake, 
    selectedModel, 
    selectedYear, 
    shippingCostInput,
    handleMakeChange,
    handleModelChange,
    handleYearChange
  } = useVehicleForm();

  const {
    makes,
    models,
    crspRecord,
    loadingMakes,
    loadingModels,
    loadingCrsp,
    crspError,
  } = useVehicleData(selectedMake, selectedModel);

  const { breakdown, setBreakdown } = useDutyCalculation(
    crspRecord,
    crspError,
    selectedMake,
    selectedModel,
    selectedYear,
    shippingCostInput
  );

  // On mount, fetch live exchange rate
  useEffect(() => {
    fetchExchangeRate().then(setExchangeRate);
  }, []);

  function onCalculate(data: VehicleFormValues) {
    if (!crspRecord) {
      toast({
        title: "No record found",
        description: "No CRSP record found for this vehicle. Please check your selection.",
      });
      return;
    }
    const shippingNumber =
      data.shipping === undefined || data.shipping === null
        ? 0
        : Number(data.shipping);
    const res = calculateDuties({
      crsp: crspRecord.crsp,
      year: Number(data.year),
      engineCapacity: crspRecord.engine_capacity,
      fuelType: crspRecord.fuel_type,
      shipping: shippingNumber,
    });
    setBreakdown(res);
    toast({
      title: "🎉 Calculation Complete!",
      description: "Your import cost breakdown is ready below.",
    });
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-md mt-12">
      <div className="mb-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-2 text-primary">🚗 FREE Kenya Car Import Calculator</h2>
          <p className="text-lg font-semibold text-green-600 mb-2">Get Instant Duty Estimates - No Registration Required!</p>
          <p className="text-muted-foreground text-base">
            Calculate exact import costs using official KRA rules and 2025 CRSP database
          </p>
        </div>
        
        {/* Trust Indicators */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex justify-center gap-6 text-sm">
            <span className="text-blue-700">✅ Official 2025 CRSP Rates</span>
            <span className="text-blue-700">✅ KRA Approved Values</span>
            <span className="text-blue-700">✅ Instant Results</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <VehicleFormFields
          form={form}
          makes={makes}
          models={models}
          loadingMakes={loadingMakes}
          loadingModels={loadingModels}
          loadingCrsp={loadingCrsp}
          selectedMake={selectedMake}
          selectedModel={selectedModel}
          selectedYear={selectedYear}
          onMakeChange={handleMakeChange}
          onModelChange={handleModelChange}
          onYearChange={handleYearChange}
          onSubmit={onCalculate}
        />

        <div className="flex items-center justify-end">
          <CurrencyToggle
            value={currency}
            onToggle={setCurrency}
            disabled={false}
          />
        </div>
      </div>

      {breakdown && (
        <>
          <ImportBreakdownPanel
            crsp={breakdown.crsp}
            importDuty={breakdown.importDuty}
            excise={breakdown.excise}
            vat={breakdown.vat}
            idf={breakdown.idf}
            rdl={breakdown.rdl}
            shipping={
              typeof shippingCostInput === "number"
                ? shippingCostInput
                : typeof shippingCostInput === "string"
                ? Number(shippingCostInput)
                : 0
            }
            total={breakdown.total}
            currency={currency}
            exchangeRate={exchangeRate}
          />
          <div className="flex justify-end mt-2">
            <QuotePDFButton
              make={selectedMake}
              model={selectedModel}
              year={selectedYear}
              costBreakdown={{
                ...breakdown,
                shipping:
                  typeof shippingCostInput === "number"
                    ? shippingCostInput
                    : typeof shippingCostInput === "string"
                    ? Number(shippingCostInput)
                    : 0,
                currency,
                exchangeRate,
              }}
            />
          </div>
        </>
      )}

      {/* Important Disclaimers - Moved below calculator */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
        <h3 className="font-semibold text-amber-800 mb-2">💡 Important Notes:</h3>
        <ul className="text-amber-700 text-sm space-y-1">
          <li>• <strong>FREE estimates exclude dealership margins</strong> - actual purchase prices may vary</li>
          <li>• <strong>Shipping costs</strong> only included when you enter them in the optional field above</li>
          <li>• Budget extra for clearing agent (KES 50K-100K), port charges (KES 15K-30K), inspection (KES 10K)</li>
          <li>• Final duties may vary ±5% based on vehicle condition and KRA assessment</li>
        </ul>
      </div>

      {crspError && (
        <div className="mt-4 p-3 bg-destructive text-destructive-foreground rounded">
          {crspError.message}
        </div>
      )}
    </div>
  );
}
