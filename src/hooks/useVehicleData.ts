
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMakes, fetchModelsForMake, fetchYearsForMakeModel, fetchCrspRecord } from "@/api/crspApi";
import { logMakesData } from "@/utils/vehicleDataDebug";

export function useVehicleData(selectedMake: string, selectedModel: string, selectedYear: string) {
  const { data: makes = [], isLoading: loadingMakes, error: makesError } = useQuery({
    queryKey: ["makes"],
    queryFn: fetchMakes,
    staleTime: 24 * 60 * 60 * 1000,
  });

  // Log makes data when it changes
  React.useEffect(() => {
    logMakesData(makes, makesError);
  }, [makes, makesError]);

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
    makes: makes as string[],
    models: models as string[],
    years: years as string[],
    crspRecord,
    loadingMakes,
    loadingModels,
    loadingYears,
    loadingCrsp,
    crspError,
    refetchCrsp,
  };
}
