
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const make = url.searchParams.get('make');
    const model = url.searchParams.get('model');
    const year = url.searchParams.get('year');

    if (!make || !model || !year) {
      return new Response(JSON.stringify({ error: 'Make, model, and year parameters are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

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

    // Return the record with the expected field names
    const record = {
      crsp: data.crsp_value,
      engine_capacity: data.engine_capacity,
      fuel_type: data.fuel_type,
      make_name: data.make_name,
      model_name: data.model_name,
      year: data.year
    };

    return new Response(JSON.stringify(record), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in crsp-record function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
