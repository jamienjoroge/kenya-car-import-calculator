
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

    if (!make || !model) {
      return new Response(JSON.stringify({ error: 'Make and model parameters are required' }), {
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
      .select('year')
      .eq('make_name', make)
      .eq('model_name', model)
      .order('year', { ascending: false });

    if (error) {
      console.error('Error fetching years:', error);
      throw error;
    }

    // Extract unique years and convert to strings
    const uniqueYears = [...new Set(data.map(item => item.year.toString()))];

    return new Response(JSON.stringify(uniqueYears), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in crsp-years function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
