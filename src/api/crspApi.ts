
import { supabase } from "@/integrations/supabase/client";

export const fetchMakes = async (): Promise<string[]> => {
  const { data, error } = await supabase
    .from('crsp_data')
    .select('make_name')
    .order('make_name');

  if (error) {
    console.error('Error fetching makes:', error);
    throw error;
  }

  // Extract unique make names and filter out empty values
  const uniqueMakes = [...new Set(
    data
      .map(item => item.make_name)
      .filter(make => make && make.trim() !== '')
  )];
  
  return uniqueMakes;
};

export const fetchModelsForMake = async (make: string): Promise<string[]> => {
  if (!make) return [];
  
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
  const uniqueModels = [...new Set(
    data
      .map(item => item.model_name)
      .filter(model => model && model.trim() !== '')
  )];
  
  return uniqueModels;
};

export const fetchCrspRecord = async ({
  make,
  model,
}: {
  make: string;
  model: string;
}) => {
  const { data, error } = await supabase
    .from('crsp_data')
    .select('*')
    .eq('make_name', make)
    .eq('model_name', model)
    .limit(1)
    .single();

  if (error) {
    console.error('Error fetching CRSP record:', error);
    throw error;
  }

  if (!data) {
    throw new Error(`No CRSP record found for ${make} ${model}`);
  }

  return {
    crsp: data.crsp_value,
    engine_capacity: data.engine_capacity,
    fuel_type: data.fuel_type
  };
};
