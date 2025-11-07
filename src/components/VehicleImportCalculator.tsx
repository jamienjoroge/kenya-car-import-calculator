
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { InfoIcon, GitCompare } from "lucide-react";
import CurrencyToggle from "./CurrencyToggle";
import ImportBreakdownPanel from "./ImportBreakdownPanel";
import ComparisonBreakdownPanel from "./ComparisonBreakdownPanel";
import { QuotePDFButton } from "./QuotePDFButton";
import { calculateDuties, calculateDepreciationRate } from "@/lib/calculation";
import VehicleFormFields from "./VehicleFormFields";
import { useVehicleForm } from "@/hooks/useVehicleForm";
import { useVehicleData } from "@/hooks/useVehicleData";
import { useDutyCalculation } from "@/hooks/useDutyCalculation";
import { VehicleFormValues } from "@/lib/vehicleFormSchema";
import { fetchCrspRecord } from "@/api/crspApi";

const exchangeRateDefault = 135.0;
const fetchExchangeRate = async () => {
  return exchangeRateDefault;
};

export default function VehicleImportCalculator() {
  const [currency, setCurrency] = useState<"KES" | "USD">("KES");
  const [exchangeRate, setExchangeRate] = useState(exchangeRateDefault);
  const [showComparison, setShowComparison] = useState(false);
  const [comparison2018Data, setComparison2018Data] = useState<any>(null);
  const [comparison2025Data, setComparison2025Data] = useState<any>(null);

  const { 
    form, 
    selectedMake, 
    selectedModel, 
    selectedYear, 
    shippingCostInput,
    handleMakeChange,
    handleModelChange,
    handleYearChange,
    crspVersion,
    setCrspVersion
  } = useVehicleForm();

  const {
    makes,
    models,
    crspRecord,
    loadingMakes,
    loadingModels,
    loadingCrsp,
    crspError,
  } = useVehicleData(selectedMake, selectedModel, crspVersion);

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

  async function onCalculate(data: VehicleFormValues) {
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

    // If comparison mode, fetch and calculate both versions
    if (showComparison) {
      try {
        // Fetch 2018 CRSP data
        const crsp2018 = await fetchCrspRecord({
          make: selectedMake,
          model: selectedModel,
          crspVersion: '2018',
        });
        const calc2018 = calculateDuties({
          crsp: crsp2018.crsp,
          year: Number(data.year),
          engineCapacity: crsp2018.engine_capacity,
          fuelType: crsp2018.fuel_type,
          shipping: shippingNumber,
        });
        setComparison2018Data(calc2018);

        // Fetch 2025 CRSP data
        const crsp2025 = await fetchCrspRecord({
          make: selectedMake,
          model: selectedModel,
          crspVersion: '2025',
        });
        const calc2025 = calculateDuties({
          crsp: crsp2025.crsp,
          year: Number(data.year),
          engineCapacity: crsp2025.engine_capacity,
          fuelType: crsp2025.fuel_type,
          shipping: shippingNumber,
        });
        setComparison2025Data(calc2025);
      } catch (error) {
        console.error('Error fetching comparison data:', error);
        toast({
          title: "Comparison unavailable",
          description: "Could not load data for comparison. One of the CRSP versions may not have this vehicle.",
          variant: "destructive",
        });
        setShowComparison(false);
      }
    }

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
            Calculate exact import costs using official KRA rules and CRSP database
          </p>
        </div>

        {/* CRSP Version Toggle */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">CRSP Version:</span>
              <Badge variant={crspVersion === '2025' ? 'default' : 'secondary'} className="text-xs">
                {crspVersion === '2025' ? 'July 2025 (Latest)' : '2018 (Old)'}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={crspVersion === '2018' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setCrspVersion('2018');
                  form.setValue("make", "");
                  form.setValue("model", "");
                  setBreakdown(null);
                }}
              >
                2018 CRSP
              </Button>
              <Button 
                variant={crspVersion === '2025' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setCrspVersion('2025');
                  form.setValue("make", "");
                  form.setValue("model", "");
                  setBreakdown(null);
                }}
              >
                July 2025 CRSP
              </Button>
            </div>
          </div>
          {crspVersion === '2025' && (
            <p className="text-xs text-muted-foreground mt-2 text-center">
              ⚠️ Using July 2025 CRSP - Latest official KRA values (200-400% higher than 2018)
            </p>
          )}
        </div>
        
        {/* Trust Indicators */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex justify-center gap-6 text-sm">
            <span className="text-blue-700">✅ Official KRA CRSP Values</span>
            <span className="text-blue-700">✅ KRA Approved Calculations</span>
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

        {/* Alert when using 2025 CRSP with older vehicles */}
        {crspVersion === '2025' && selectedYear && parseInt(selectedYear) < 2025 && (
          <Alert className="bg-blue-50 border-blue-200">
            <InfoIcon className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-900">Using July 2025 CRSP Values</AlertTitle>
            <AlertDescription className="text-blue-800">
              Calculating duties based on the July 2025 CRSP schedule. 
              The 2025 market value will be depreciated by {Math.round(calculateDepreciationRate(parseInt(selectedYear)) * 100)}% 
              for a {new Date().getFullYear() - parseInt(selectedYear)}-year-old vehicle.
            </AlertDescription>
          </Alert>
        )}

        <div className="flex items-center justify-between">
          <Button
            variant={showComparison ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setShowComparison(!showComparison);
              if (!showComparison && breakdown) {
                // Re-trigger calculation with comparison mode
                onCalculate({
                  make: selectedMake,
                  model: selectedModel,
                  year: selectedYear,
                  shipping: shippingCostInput,
                });
              }
            }}
            className="gap-2"
          >
            <GitCompare className="h-4 w-4" />
            {showComparison ? "Hide Comparison" : "Compare 2018 vs 2025"}
          </Button>
          <CurrencyToggle
            value={currency}
            onToggle={setCurrency}
            disabled={false}
          />
        </div>
      </div>

      {breakdown && showComparison && comparison2018Data && comparison2025Data && (
        <ComparisonBreakdownPanel
          crsp2018={comparison2018Data}
          crsp2025={comparison2025Data}
          shipping={
            typeof shippingCostInput === "number"
              ? shippingCostInput
              : typeof shippingCostInput === "string"
              ? Number(shippingCostInput)
              : 0
          }
          currency={currency}
          exchangeRate={exchangeRate}
          selectedYear={selectedYear}
        />
      )}

      {breakdown && !showComparison && (
        <>
          <ImportBreakdownPanel
            crsp={breakdown.crsp}
            originalCrsp={breakdown.originalCrsp}
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
            crspVersion={crspVersion}
            selectedYear={selectedYear}
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
