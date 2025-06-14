
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AutoCompleteSelect } from "./AutoCompleteSelect";
import { VehicleFormValues } from "@/lib/vehicleFormSchema";
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
  onSubmit,
}: VehicleFormFieldsProps) {
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      autoComplete="off"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AutoCompleteSelect
          label="Car Make"
          options={makes}
          value={selectedMake}
          placeholder="Start typing make…"
          onChange={(val) => form.setValue("make", val)}
          disabled={loadingMakes}
        />
        <AutoCompleteSelect
          label="Car Model"
          options={models}
          value={selectedModel}
          placeholder="Model…"
          onChange={(val) => form.setValue("model", val)}
          disabled={!selectedMake || loadingModels}
        />
        <AutoCompleteSelect
          label="Year"
          options={years}
          value={selectedYear}
          placeholder="Year…"
          onChange={(val) => form.setValue("year", val)}
          disabled={!selectedModel || loadingYears}
        />
      </div>

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
  );
}
