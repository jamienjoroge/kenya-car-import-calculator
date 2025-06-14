
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import CurrencyToggle from "./CurrencyToggle";
import ImportBreakdownPanel from "./ImportBreakdownPanel";
import { AutoCompleteSelect } from "./AutoCompleteSelect";
import { QuotePDFButton } from "./QuotePDFButton";
import { calculateDuties } from "@/lib/calculation";
import { Search } from "lucide-react";

const schema = z.object({
  make: z.string().min(1, "Select a make"),
  model: z.string().min(1, "Select a model"),
  year: z.string().min(1, "Select a year"),
  shipping: z
    .string()
    .optional()
    .transform((v) => (v === "" ? undefined : Number(v)))
    .refine((v) => v === undefined || (!isNaN(v) && v >= 0), {
      message: "Shipping must be a positive number",
    }),
});

type FormValues = z.infer<typeof schema>;

const exchangeRateDefault = 135.0;
const fetchExchangeRate = async () => {
  // Could use a live API, but for now static value, could be fetched from Supabase in the future
  return exchangeRateDefault;
};

const fetchMakes = async () => {
  // Query Distinct Makes from Supabase CRSP Table
  const resp = await fetch("/api/supabase/crsp-makes");
  if (!resp.ok) throw new Error("Could not load makes");
  return await resp.json();
};

const fetchModelsForMake = async (make: string) => {
  if (!make) return [];
  const resp = await fetch(`/api/supabase/crsp-models?make=${encodeURIComponent(make)}`);
  if (!resp.ok) throw new Error("Error loading models");
  return await resp.json();
};

const fetchYearsForMakeModel = async (make: string, model: string) => {
  if (!make || !model) return [];
  const resp = await fetch(
    `/api/supabase/crsp-years?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`
  );
  if (!resp.ok) throw new Error("Error loading years");
  return await resp.json();
};

const fetchCrspRecord = async ({
  make,
  model,
  year,
}: {
  make: string;
  model: string;
  year: string;
}) => {
  const resp = await fetch(
    `/api/supabase/crsp-record?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&year=${encodeURIComponent(year)}`
  );
  if (!resp.ok) throw new Error("No CRSP record found");
  return await resp.json();
};

export default function VehicleImportCalculator() {
  const [currency, setCurrency] = useState<"KES" | "USD">("KES");
  const [exchangeRate, setExchangeRate] = useState(exchangeRateDefault);

  // Form logic with react-hook-form + zod
  const { register, handleSubmit, setValue, watch, formState, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      make: "",
      model: "",
      year: "",
      shipping: "",
    },
  });

  const selectedMake = watch("make");
  const selectedModel = watch("model");
  const selectedYear = watch("year");
  const shippingCostInput = watch("shipping");

  // Fetch list of makes
  const { data: makes = [], isLoading: loadingMakes } = useQuery({
    queryKey: ["makes"],
    queryFn: fetchMakes,
    staleTime: 24 * 60 * 60 * 1000,
  });

  // Fetch models based on make
  const { data: models = [], isLoading: loadingModels } = useQuery({
    queryKey: ["models", selectedMake],
    queryFn: () => fetchModelsForMake(selectedMake),
    enabled: !!selectedMake,
    staleTime: 24 * 60 * 60 * 1000,
  });

  // Fetch years based on make + model
  const { data: years = [], isLoading: loadingYears } = useQuery({
    queryKey: ["years", selectedMake, selectedModel],
    queryFn: () => fetchYearsForMakeModel(selectedMake, selectedModel),
    enabled: !!selectedMake && !!selectedModel,
    staleTime: 24 * 60 * 60 * 1000,
  });

  // Fetch CRSP Record
  const {
    data: crspRecord,
    refetch: refetchCrsp,
    isFetching: loadingCrsp,
    error: crspError,
  } = useQuery({
    queryKey: ["crsp", selectedMake, selectedModel, selectedYear],
    queryFn: () =>
      fetchCrspRecord({
        make: selectedMake,
        model: selectedModel,
        year: selectedYear,
      }),
    enabled: !!selectedMake && !!selectedModel && !!selectedYear,
    staleTime: 10 * 60 * 1000,
    retry: false,
  });

  // On mount, fetch live exchange rate (stub + swap in real API later)
  useEffect(() => {
    fetchExchangeRate().then(setExchangeRate);
  }, []);

  // Depreciation/duties/cost breakdown
  const [breakdown, setBreakdown] = useState<ReturnType<typeof calculateDuties> | null>(null);
  useEffect(() => {
    if (
      crspRecord &&
      !crspError &&
      selectedMake &&
      selectedModel &&
      selectedYear
    ) {
      const res = calculateDuties({
        crsp: crspRecord.crsp,
        year: Number(selectedYear),
        engineCapacity: crspRecord.engine_capacity,
        fuelType: crspRecord.fuel_type,
        shipping: shippingCostInput ? Number(shippingCostInput) : 0,
      });
      setBreakdown(res);
    } else {
      setBreakdown(null);
    }
  }, [
    crspRecord,
    crspError,
    selectedMake,
    selectedModel,
    selectedYear,
    shippingCostInput,
  ]);

  function onCalculate(data: FormValues) {
    if (!crspRecord) {
      toast({
        title: "No record found",
        description: "No CRSP record found for this vehicle. Please check your selection.",
      });
      return;
    }
    const res = calculateDuties({
      crsp: crspRecord.crsp,
      year: Number(data.year),
      engineCapacity: crspRecord.engine_capacity,
      fuelType: crspRecord.fuel_type,
      shipping: data.shipping || 0,
    });
    setBreakdown(res);
    toast({
      title: "Success",
      description: "Calculation completed.",
    });
  }

  // Display logic
  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-md mt-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Kenya Car Import Duty Calculator</h2>
        <p className="text-muted-foreground text-base mb-2">
          Calculate total importation costs using KRA rules and the current CRSP database.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onCalculate)}
        className="flex flex-col gap-4"
        autoComplete="off"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AutoCompleteSelect
            label="Car Make"
            options={makes}
            value={selectedMake}
            placeholder="Start typing make…"
            onChange={(val) => setValue("make", val)}
            disabled={loadingMakes}
          />
          <AutoCompleteSelect
            label="Car Model"
            options={models}
            value={selectedModel}
            placeholder="Model…"
            onChange={(val) => setValue("model", val)}
            disabled={!selectedMake || loadingModels}
          />
          <AutoCompleteSelect
            label="Year"
            options={years}
            value={selectedYear}
            placeholder="Year…"
            onChange={(val) => setValue("year", val)}
            disabled={!selectedModel || loadingYears}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <Input
            className="max-w-xs"
            type="number"
            min={0}
            step={100}
            {...register("shipping")}
            placeholder="Shipping Cost (optional, KES)"
          />
          <CurrencyToggle
            value={currency}
            onToggle={setCurrency}
            disabled={false}
          />
          <Button
            className="flex gap-2 md:ml-auto"
            type="submit"
            disabled={
              !selectedMake ||
              !selectedModel ||
              !selectedYear ||
              loadingCrsp
            }
          >
            <Search size={18} />
            Calculate
          </Button>
        </div>
      </form>
      {breakdown && (
        <>
          <ImportBreakdownPanel
            crsp={breakdown.crsp}
            depreciatedCrsp={breakdown.depreciatedCrsp}
            importDuty={breakdown.importDuty}
            excise={breakdown.excise}
            vat={breakdown.vat}
            idf={breakdown.idf}
            rdl={breakdown.rdl}
            shipping={Number(shippingCostInput)}
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
                shipping: Number(shippingCostInput),
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
