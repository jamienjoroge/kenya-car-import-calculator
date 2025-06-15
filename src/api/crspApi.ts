
import { supabase } from "@/integrations/supabase/client";

export const fetchMakes = async (): Promise<string[]> => {
  console.log('🚀 Starting fetchMakes function...');
  
  // First, let's get the total count of all records
  console.log('📊 Counting total records...');
  const { count, error: countError } = await supabase
    .from('crsp_data')
    .select('*', { count: 'exact', head: true });
    
  if (countError) {
    console.error('❌ Error getting count:', countError);
    throw countError;
  } else {
    console.log('🔢 TOTAL ROWS IN CRSP_DATA TABLE:', count);
  }
  
  // Now let's fetch ALL make_name records without any filtering
  console.log('📥 Fetching ALL make_name records...');
  const { data: allMakeData, error: allMakeError } = await supabase
    .from('crsp_data')
    .select('make_name');

  if (allMakeError) {
    console.error('❌ Error fetching all makes (no order):', allMakeError);
    throw allMakeError;
  }

  console.log('📋 ALL make_name records (no order):', allMakeData?.length || 0, 'total records');
  console.log('📋 First 10 make_name records (no order):', allMakeData?.slice(0, 10));

  // Check for Toyota in the unordered data
  const allToyotaRecords = allMakeData?.filter(item => 
    item.make_name && item.make_name.toLowerCase().includes('toyota')
  );
  console.log('🚗 Toyota records in ALL data (no order):', allToyotaRecords?.length || 0);
  console.log('🚗 Toyota samples from ALL data:', allToyotaRecords?.slice(0, 3));

  // Now try with ordering
  console.log('📥 Fetching make_name records WITH ordering...');
  const { data, error } = await supabase
    .from('crsp_data')
    .select('make_name')
    .order('make_name');

  if (error) {
    console.error('❌ Error fetching makes with order:', error);
    throw error;
  }

  console.log('📋 Ordered make_name data from DB:', data?.length || 0, 'total records');
  console.log('📋 First 20 ordered make records:', data?.slice(0, 20));
  console.log('📋 Last 20 ordered make records:', data?.slice(-20));

  // Check for Toyota specifically in the ordered data
  const rawToyotaRecords = data?.filter(item => 
    item.make_name && item.make_name.toLowerCase().includes('toyota')
  );
  console.log('🚗 RAW Toyota records found (ordered):', rawToyotaRecords?.length || 0);
  console.log('🚗 RAW Toyota records (ordered):', rawToyotaRecords?.slice(0, 5));

  // Log some statistics about the data
  const nullMakes = data?.filter(item => !item.make_name || item.make_name.trim() === '');
  console.log('🔍 Records with null/empty make_name:', nullMakes?.length || 0);

  // Extract unique make names and ensure they're all strings
  console.log('🔄 Processing unique makes...');
  const uniqueMakes = [...new Set(data.map(item => item.make_name).filter(make => make && make.trim() !== ''))];
  
  console.log('✅ Processed unique makes:', uniqueMakes.length, 'unique makes');
  console.log('✅ All unique makes:', uniqueMakes);
  
  // Check if Toyota is in the final list - log all makes that contain 'toyota' (case insensitive)
  const toyotaVariants = uniqueMakes.filter(make => 
    make.toLowerCase().includes('toyota')
  );
  console.log('🚗 Toyota variants in final list:', toyotaVariants);

  // Log all makes that start with 'T' to see if there are similar names
  const tMakes = uniqueMakes.filter(make => 
    make.toLowerCase().startsWith('t')
  );
  console.log('🔤 Makes starting with T:', tMakes);

  // Log a sample of all makes to see what we have
  console.log('📝 Sample of all makes (first 30):', uniqueMakes.slice(0, 30));

  console.log('🏁 fetchMakes completed, returning', uniqueMakes.length, 'makes');
  return uniqueMakes;
};

export const fetchModelsForMake = async (make: string): Promise<string[]> => {
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

export const fetchYearsForMakeModel = async (make: string, model: string): Promise<string[]> => {
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

export const fetchCrspRecord = async ({
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
