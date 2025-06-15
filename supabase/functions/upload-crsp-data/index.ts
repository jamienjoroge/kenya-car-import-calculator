
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CrspDataRow {
  make_name: string;
  model_name: string;
  year: number;
  crsp_value: number;
  engine_capacity: number;
  fuel_type?: string;
  body_type?: string;
  transmission_type?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Use service role key to bypass RLS for bulk data uploads
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const requestData = await req.json();
    console.log('Received request data:', requestData);
    
    // Handle both formats: { data: [...] } and direct array [...]
    const crspData: CrspDataRow[] = requestData.data || requestData;

    console.log('Extracted CRSP data:', crspData);
    console.log('Data type:', Array.isArray(crspData));
    console.log('Data length:', crspData.length);

    if (!Array.isArray(crspData) || crspData.length === 0) {
      console.log('Invalid data format or empty array');
      return new Response(JSON.stringify({ error: 'No valid data provided' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log(`Processing ${crspData.length} records for upload`);

    // Server-side validation - more lenient to match what frontend sends
    const validatedData = crspData.filter((row, index) => {
      const isValid = row.make_name && 
                     typeof row.make_name === 'string' && 
                     row.make_name.trim() !== '' &&
                     row.model_name && 
                     typeof row.model_name === 'string' && 
                     row.model_name.trim() !== '' &&
                     row.crsp_value && 
                     typeof row.crsp_value === 'number' && 
                     row.crsp_value > 0 &&
                     row.engine_capacity && 
                     typeof row.engine_capacity === 'number' && 
                     row.engine_capacity > 0;
      
      if (!isValid && index < 5) {
        console.log(`Row ${index} validation failed:`, {
          make_name: row.make_name,
          model_name: row.model_name,
          crsp_value: row.crsp_value,
          engine_capacity: row.engine_capacity,
          make_valid: !!(row.make_name && typeof row.make_name === 'string' && row.make_name.trim() !== ''),
          model_valid: !!(row.model_name && typeof row.model_name === 'string' && row.model_name.trim() !== ''),
          crsp_valid: !!(row.crsp_value && typeof row.crsp_value === 'number' && row.crsp_value > 0),
          engine_valid: !!(row.engine_capacity && typeof row.engine_capacity === 'number' && row.engine_capacity > 0)
        });
      }
      
      return isValid;
    });

    console.log(`${validatedData.length} records passed server-side validation`);

    if (validatedData.length === 0) {
      return new Response(JSON.stringify({ 
        error: 'No rows passed server-side validation',
        debug: 'Check console logs for validation details'
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Process data in batches to avoid timeout
    const batchSize = 100;
    let totalInserted = 0;

    for (let i = 0; i < validatedData.length; i += batchSize) {
      const batch = validatedData.slice(i, i + batchSize);
      
      console.log(`Inserting batch ${i / batchSize + 1} with ${batch.length} records`);
      
      const { data, error } = await supabase
        .from('crsp_data')
        .insert(batch)
        .select('id');

      if (error) {
        console.error(`Error inserting batch ${i / batchSize + 1}:`, error);
        return new Response(JSON.stringify({ 
          error: `Database error: ${error.message}`,
          insertedSoFar: totalInserted 
        }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      totalInserted += data?.length || 0;
      console.log(`Batch ${i / batchSize + 1} completed: ${data?.length} records inserted`);
    }

    console.log(`Upload completed: ${totalInserted} total records inserted`);

    return new Response(JSON.stringify({ 
      success: true, 
      count: totalInserted,
      message: `Successfully uploaded ${totalInserted} records`
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in upload-crsp-data function:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      stack: error instanceof Error ? error.stack : undefined
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
