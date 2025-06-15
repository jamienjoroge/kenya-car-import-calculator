
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const fetchMakes = async (): Promise<string[]> => {
  console.log('Fetching makes from database...');
  
  const { data, error } = await supabase
    .from('crsp_data')
    .select('make_name')
    .order('make_name');

  if (error) {
    console.error('Error fetching makes:', error);
    throw error;
  }

  console.log('Raw makes data from DB:', data);
  console.log('Total records returned:', data?.length || 0);

  // Extract unique make names and ensure they're all strings
  const uniqueMakes = [...new Set(data.map(item => item.make_name).filter(make => make && make.trim() !== ''))];
  
  console.log('Processed unique makes:', uniqueMakes);
  console.log('Total unique makes count:', uniqueMakes.length);
  
  // Check if Toyota is in the list
  const toyotaVariants = uniqueMakes.filter(make => 
    make.toLowerCase().includes('toyota')
  );
  console.log('Toyota variants found:', toyotaVariants);

  return uniqueMakes;
};

const fetchModelsForMake = async (make: string): Promise<string[]> => {
  if (!make) return [];
  
  console.log('Fetching models for make:', make);
  
  const { data, error } = await supabase
    .from('crsp_data')
    .select('model_name')
    .eq('make_name', make)
    .order('model_name');

  if (error) {
    console.error('Error fetching models:', error);
    throw error;
  }

  // Extract unique model names
  const uniqueModels = [...new Set(data.map(item => item.model_name).filter(model => model && model.trim() !== ''))];
  console.log('Models for', make, ':', uniqueModels);
  return uniqueModels;
};

const fetchYearsForMakeModel = async (make: string, model: string): Promise<string[]> => {
  if (!make || !model) return [];
  
  console.log('Fetching years for make:', make, 'model:', model);
  
  const { data, error } = await supabase
    .from('crsp_data')
    .select('year')
    .eq('make_name', make)
    .eq('model_name', model)
    .order('year', { ascending: false });

  if (error) {
    console.error('Error fetching years:', error);
    throw error;
  }

  // Extract unique years and convert to strings
  const uniqueYears = [...new Set(data.map(item => item.year.toString()).filter(year => year && year.trim() !== ''))];
  console.log('Years for', make, model, ':', uniqueYears);
  return uniqueYears;
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
  const { data, error } = await supabase
    .from('crsp_data')
    .select('*')
    .eq('make_name', make)
    .eq('model_name', model)
    .eq('year', parseInt(year))
    .single();

  if (error) {
    console.error('Error fetching CRSP record:', error);
    throw error;
  }

  return {
    crsp: data.crsp_value,
    engine_capacity: data.engine_capacity,
    fuel_type: data.fuel_type
  };
};

export function useVehicleData(selectedMake: string, selectedModel: string, selectedYear: string) {
  const { data: makes = [], isLoading: loadingMakes, error: makesError } = useQuery({
    queryKey: ["makes"],
    queryFn: fetchMakes,
    staleTime: 24 * 60 * 60 * 1000,
  });

  // Log makes data when it changes
  React.useEffect(() => {
    if (makes.length > 0) {
      console.log('Makes loaded in component:', makes.length, 'total makes');
      const toyotaInMakes = makes.filter(make => 
        make.toLowerCase().includes('toyota')
      );
      console.log('Toyota makes available:', toyotaInMakes);
    }
    if (makesError) {
      console.error('Makes loading error:', makesError);
    }
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
