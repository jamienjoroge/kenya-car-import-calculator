
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMakes, fetchModelsForMake, fetchCrspRecord } from "@/api/crspApi";
import { logMakesData } from "@/utils/vehicleDataDebug";

export function useVehicleData(selectedMake: string, selectedModel: string) {
  const { data: makes = [], isLoading: loadingMakes, error: makesError } = useQuery({
    queryKey: ["makes", "v2"], // Updated cache key to force refresh
    queryFn: fetchMakes,
    staleTime: 5 * 60 * 1000, // Reduced to 5 minutes for testing
  });

  // Log makes data when it changes
  React.useEffect(() => {
    logMakesData(makes, makesError);
  }, [makes, makesError]);

  const { data: models = [], isLoading: loadingModels } = useQuery({
    queryKey: ["models", "v2", selectedMake], // Updated cache key to force refresh
    queryFn: () => fetchModelsForMake(selectedMake),
    enabled: !!selectedMake,
    staleTime: 5 * 60 * 1000, // Reduced to 5 minutes for testing
  });

  const {
    data: crspRecord,
    refetch: refetchCrsp,
    isFetching: loadingCrsp,
    error: crspError,
  } = useQuery({
    queryKey: ["crsp", selectedMake, selectedModel],
    queryFn: () =>
      fetchCrspRecord({
        make: selectedMake,
        model: selectedModel,
      }),
    enabled: !!selectedMake && !!selectedModel,
    staleTime: 10 * 60 * 1000,
    retry: false,
  });

  return {
    makes: makes as string[],
    models: models as string[],
    crspRecord,
    loadingMakes,
    loadingModels,
    loadingCrsp,
    crspError,
    refetchCrsp,
  };
}
