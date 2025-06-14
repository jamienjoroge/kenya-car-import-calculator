
import { useQuery } from "@tanstack/react-query";

const fetchMakes = async () => {
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

export function useVehicleData(selectedMake: string, selectedModel: string, selectedYear: string) {
  const { data: makes = [], isLoading: loadingMakes } = useQuery({
    queryKey: ["makes"],
    queryFn: fetchMakes,
    staleTime: 24 * 60 * 60 * 1000,
  });

  const { data: models = [], isLoading: loadingModels } = useQuery({
    queryKey: ["models", selectedMake],
    queryFn: () => fetchModelsForMake(selectedMake),
    enabled: !!selectedMake,
    staleTime: 24 * 60 * 60 * 1000,
  });

  const { data: years = [], isLoading: loadingYears } = useQuery({
    queryKey: ["years", selectedMake, selectedModel],
    queryFn: () => fetchYearsForMakeModel(selectedMake, selectedModel),
    enabled: !!selectedMake && !!selectedModel,
    staleTime: 24 * 60 * 60 * 1000,
  });

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

  return {
    makes,
    models,
    years,
    crspRecord,
    loadingMakes,
    loadingModels,
    loadingYears,
    loadingCrsp,
    crspError,
    refetchCrsp,
  };
}
