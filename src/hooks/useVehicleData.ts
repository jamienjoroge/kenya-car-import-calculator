
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMakes, fetchModelsForMake, fetchCrspRecord } from "@/api/crspApi";
import { logMakesData } from "@/utils/vehicleDataDebug";

export function useVehicleData(selectedMake: string, selectedModel: string, crspVersion: string = '2025') {
  const { data: makes = [], isLoading: loadingMakes, error: makesError } = useQuery({
    queryKey: ["makes", "v2", crspVersion],
    queryFn: () => fetchMakes(crspVersion),
    staleTime: 5 * 60 * 1000,
  });

  // Log makes data when it changes
  React.useEffect(() => {
    logMakesData(makes, makesError);
  }, [makes, makesError]);

  const { data: models = [], isLoading: loadingModels } = useQuery({
    queryKey: ["models", "v2", selectedMake, crspVersion],
    queryFn: () => fetchModelsForMake(selectedMake, crspVersion),
    enabled: !!selectedMake,
    staleTime: 5 * 60 * 1000,
  });

  const {
    data: crspRecord,
    refetch: refetchCrsp,
    isFetching: loadingCrsp,
    error: crspError,
  } = useQuery({
    queryKey: ["crsp", selectedMake, selectedModel, crspVersion],
    queryFn: () =>
      fetchCrspRecord({
        make: selectedMake,
        model: selectedModel,
        crspVersion,
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
