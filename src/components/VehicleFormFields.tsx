
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

  const handleMakeChange = (value: string) => {
    try {
      console.log('Make changing to:', value);
      form.setValue("make", value);
      // Clear dependent fields when make changes
      form.setValue("model", "");
      form.setValue("year", "");
    } catch (error) {
      console.error('Error in handleMakeChange:', error);
    }
  };

  const handleModelChange = (value: string) => {
    try {
      console.log('Model changing to:', value);
      form.setValue("model", value);
      // Clear year when model changes but don't reset if it's already valid
      if (!selectedYear || !years.includes(selectedYear)) {
        form.setValue("year", "");
      }
    } catch (error) {
      console.error('Error in handleModelChange:', error);
    }
  };

  const handleYearChange = (value: string) => {
    try {
      console.log('Year changing to:', value);
      form.setValue("year", value);
    } catch (error) {
      console.error('Error in handleYearChange:', error);
    }
  };

  // Ensure arrays are always defined
  const safeMakes = Array.isArray(makes) ? makes : [];
  const safeModels = Array.isArray(models) ? models : [];
  const safeYears = Array.isArray(years) ? years : [];

  // Check if form is valid for calculation
  const isFormValid = selectedMake && selectedModel && selectedYear && !loadingCrsp;
  const hasFormErrors = Object.keys(form.formState.errors).length > 0;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      autoComplete="off"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AutoCompleteSelect
          label="Car Make"
          options={safeMakes}
          value={selectedMake}
          placeholder="Start typing make…"
          onChange={handleMakeChange}
          disabled={loadingMakes}
        />
        <AutoCompleteSelect
          label="Car Model"
          options={safeModels}
          value={selectedModel}
          placeholder="Model…"
          onChange={handleModelChange}
          disabled={!selectedMake || loadingModels}
        />
        <AutoCompleteSelect
          label="Year"
          options={safeYears}
          value={selectedYear}
          placeholder="Year…"
          onChange={handleYearChange}
          disabled={!selectedModel || loadingYears}
        />
      </div>

      {/* Display year validation error */}
      {form.formState.errors.year && (
        <div className="text-sm text-red-600 font-medium">
          {form.formState.errors.year.message}
        </div>
      )}

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
          disabled={!isFormValid || hasFormErrors}
        >
          <Search size={18} />
          Calculate
        </Button>
      </div>
    </form>
  );
}
