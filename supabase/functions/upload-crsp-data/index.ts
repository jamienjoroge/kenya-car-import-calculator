
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
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { data: requestData } = await req.json();
    const crspData: CrspDataRow[] = requestData.data;

    if (!Array.isArray(crspData) || crspData.length === 0) {
      return new Response(JSON.stringify({ error: 'No data provided' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log(`Processing ${crspData.length} records for upload`);

    // Validate required fields
    const invalidRows = crspData.filter(row => 
      !row.make_name || !row.model_name || !row.year || !row.crsp_value || !row.engine_capacity
    );

    if (invalidRows.length > 0) {
      return new Response(JSON.stringify({ 
        error: `${invalidRows.length} rows have missing required fields` 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Process data in batches to avoid timeout
    const batchSize = 100;
    let totalInserted = 0;

    for (let i = 0; i < crspData.length; i += batchSize) {
      const batch = crspData.slice(i, i + batchSize);
      
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
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
