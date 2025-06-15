
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { VehicleFormValues } from "@/lib/vehicleFormSchema";
import { VehicleSelector } from "./VehicleSelector";
import { Search } from "lucide-react";

interface VehicleFormFieldsProps {
  form: UseFormReturn<VehicleFormValues>;
  makes: string[];
  models: string[];
  years: string[];
  loadingMakes: boolean;
  loadingModels: boolean;
  loadingYears: boolean;
  loadingCrsp: boolean;
  selectedMake: string;
  selectedModel: string;
  selectedYear: string;
  onMakeChange: (value: string) => void;
  onModelChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onSubmit: (data: VehicleFormValues) => void;
}

export default function VehicleFormFields({
  form,
  makes,
  models,
  years,
  loadingMakes,
  loadingModels,
  loadingYears,
  loadingCrsp,
  selectedMake,
  selectedModel,
  selectedYear,
  onMakeChange,
  onModelChange,
  onYearChange,
  onSubmit,
}: VehicleFormFieldsProps) {
  const isFormValid = selectedMake && selectedModel && selectedYear;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      autoComplete="off"
    >
      <VehicleSelector
        makes={makes}
        models={models}
        years={years}
        selectedMake={selectedMake}
        selectedModel={selectedModel}
        selectedYear={selectedYear}
        loadingMakes={loadingMakes}
        loadingModels={loadingModels}
        loadingYears={loadingYears}
        onMakeChange={onMakeChange}
        onModelChange={onModelChange}
        onYearChange={onYearChange}
      />

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
        <Input
          className="max-w-xs"
          type="number"
          min={0}
          step={100}
          {...form.register("shipping")}
          placeholder="Shipping Cost (optional, KES)"
        />
        <Button
          className="flex gap-2 md:ml-auto"
          type="submit"
          disabled={!isFormValid || loadingCrsp}
        >
          <Search size={18} />
          Calculate
        </Button>
      </div>
    </form>
  );
}
