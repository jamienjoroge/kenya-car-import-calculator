
import { AutoCompleteSelect } from "./AutoCompleteSelect";

interface VehicleSelectorProps {
  makes: string[];
  models: string[];
  years: string[];
  selectedMake: string;
  selectedModel: string;
  selectedYear: string;
  loadingMakes: boolean;
  loadingModels: boolean;
  loadingYears: boolean;
  onMakeChange: (value: string) => void;
  onModelChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

export function VehicleSelector({
  makes,
  models,
  years,
  selectedMake,
  selectedModel,
  selectedYear,
  loadingMakes,
  loadingModels,
  loadingYears,
  onMakeChange,
  onModelChange,
  onYearChange,
}: VehicleSelectorProps) {
  // Ensure arrays are always defined
  const safeMakes = Array.isArray(makes) ? makes : [];
  const safeModels = Array.isArray(models) ? models : [];
  const safeYears = Array.isArray(years) ? years : [];

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
      <AutoCompleteSelect
        label="Year"
        options={safeYears}
        value={selectedYear}
        placeholder="Year…"
        onChange={onYearChange}
        disabled={!selectedModel || loadingYears}
      />
    </div>
  );
}
