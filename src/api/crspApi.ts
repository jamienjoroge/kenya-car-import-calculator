
import { supabase } from '../integrations/supabase/client';

// Updated to use batch fetching for all records

export const fetchMakes = async (): Promise<string[]> => {
  const allMakes = new Set<string>();
  let from = 0;
  const batchSize = 1000;
  let hasMore = true;

  while (hasMore) {
    const { data, error } = await supabase
      .from('crsp_data')
      .select('make_name')
      .range(from, from + batchSize - 1)
      .order('make_name');

    if (error) {
      console.error('Error fetching makes:', error);
      throw error;
    }

    if (!data || data.length === 0) {
      break;
    }

    // Add unique make names to the set
    data.forEach(item => {
      if (item.make_name && item.make_name.trim() !== '') {
        allMakes.add(item.make_name);
      }
    });

    from += batchSize;
    hasMore = data.length === batchSize;
  }

  return Array.from(allMakes).sort();
};

export const fetchModelsForMake = async (make: string): Promise<string[]> => {
  if (!make) return [];
  
  const allModels = new Set<string>();
  let from = 0;
  const batchSize = 1000;
  let hasMore = true;

  while (hasMore) {
    const { data, error } = await supabase
      .from('crsp_data')
      .select('model_name')
      .eq('make_name', make)
      .range(from, from + batchSize - 1)
      .order('model_name');

    if (error) {
      console.error('Error fetching models:', error);
      throw error;
    }

    if (!data || data.length === 0) {
      break;
    }

    // Add unique model names to the set
    data.forEach(item => {
      if (item.model_name && item.model_name.trim() !== '') {
        allModels.add(item.model_name);
      }
    });

    from += batchSize;
    hasMore = data.length === batchSize;
  }

  return Array.from(allModels).sort();
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
