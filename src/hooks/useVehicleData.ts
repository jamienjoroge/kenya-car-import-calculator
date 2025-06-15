
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMakes, fetchModelsForMake, fetchCrspRecord } from "@/api/crspApi";
import { logMakesData } from "@/utils/vehicleDataDebug";

export function useVehicleData(selectedMake: string, selectedModel: string) {
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
