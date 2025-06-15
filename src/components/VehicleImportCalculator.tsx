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
      title: "Success",
      description: "Calculation completed.",
    });
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-md mt-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Kenya Car Import Duty Calculator</h2>
        <p className="text-muted-foreground text-base mb-4">
          Calculate total importation costs using KRA rules and the current CRSP database.
        </p>
        
        {/* Important Disclaimers */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-amber-800 mb-2">Important Notes:</h3>
          <ul className="text-amber-700 text-sm space-y-1">
            <li>• <strong>Estimates are exclusive of dealership profit margins</strong> - actual vehicle purchase prices may vary</li>
            <li>• <strong>Shipping costs</strong> are only included when specified in the optional shipping field</li>
            <li>• Additional costs may include clearing agent fees, port handling charges, and inspection fees</li>
            <li>• Final duties may vary based on actual vehicle condition and KRA assessment</li>
          </ul>
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
            depreciatedCrsp={breakdown.depreciatedCrsp}
            depreciationRate={breakdown.depreciationRate}
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
      {crspError && (
        <div className="mt-4 p-3 bg-destructive text-destructive-foreground rounded">
          {crspError.message}
        </div>
      )}
    </div>
  );
}
