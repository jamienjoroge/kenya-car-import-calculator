
import { AutoCompleteSelect } from "./AutoCompleteSelect";
import { Input } from "@/components/ui/input";

interface VehicleSelectorProps {
  makes: string[];
  models: string[];
  selectedMake: string;
  selectedModel: string;
  selectedYear: string;
  loadingMakes: boolean;
  loadingModels: boolean;
  onMakeChange: (value: string) => void;
  onModelChange: (value: string) => void;
  onYearChange: (value: string) => void;
  form?: any; // Make form optional
}

export function VehicleSelector({
  makes,
  models,
  selectedMake,
  selectedModel,
  selectedYear,
  loadingMakes,
  loadingModels,
  onMakeChange,
  onModelChange,
  onYearChange,
  form,
}: VehicleSelectorProps) {
  // Ensure arrays are always defined
  const safeMakes = Array.isArray(makes) ? makes : [];
  const safeModels = Array.isArray(models) ? models : [];
  
  const currentYear = new Date().getFullYear();
  const minValidYear = currentYear - 8;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <AutoCompleteSelect
        label="Car Make"
        options={safeMakes}
        value={selectedMake}
        placeholder="Start typing make…"
        onChange={onMakeChange}
        disabled={loadingMakes}
      />
      <AutoCompleteSelect
        label="Car Model"
        options={safeModels}
        value={selectedModel}
        placeholder="Model…"
        onChange={onModelChange}
        disabled={!selectedMake || loadingModels}
      />
      <div className="w-full">
        <label className="block text-sm font-medium mb-1">Year</label>
        <Input
          type="number"
          min={minValidYear}
          max={currentYear}
          placeholder={`${minValidYear}-${currentYear}`}
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="h-10"
        />
        {form?.formState?.errors?.year && (
          <p className="text-sm text-red-500 mt-1">
            {form.formState.errors.year.message}
          </p>
        )}
      </div>
    </div>
  );
}
