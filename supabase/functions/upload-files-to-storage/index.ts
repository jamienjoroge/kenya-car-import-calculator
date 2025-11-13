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
    console.log('Starting file upload to storage...');

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get the base URL from the request
    const url = new URL(req.url);
    const baseUrl = `${url.protocol}//${url.host}`;

    const files = [
      { name: 'CRSP-2018.xls', path: `${baseUrl}/CRSP-2018.xls` },
      { name: 'CRSP-2025.xlsx', path: `${baseUrl}/CRSP-2025.xlsx` }
    ];

    const results = [];

    for (const file of files) {
      console.log(`Fetching ${file.name} from ${file.path}...`);
      
      // Fetch the file from public folder
      const response = await fetch(file.path);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${file.name}: ${response.statusText}`);
      }

      const blob = await response.blob();
      const arrayBuffer = await blob.arrayBuffer();

      console.log(`Uploading ${file.name} to storage (${arrayBuffer.byteLength} bytes)...`);

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('crsp-files')
        .upload(file.name, arrayBuffer, {
          cacheControl: '3600',
          upsert: true,
          contentType: file.name.endsWith('.xlsx') ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 'application/vnd.ms-excel'
        });

      if (error) {
        console.error(`Error uploading ${file.name}:`, error);
        results.push({ file: file.name, success: false, error: error.message });
      } else {
        console.log(`Successfully uploaded ${file.name}`);
        results.push({ file: file.name, success: true, data });
      }
    }

    const allSuccess = results.every(r => r.success);

    return new Response(JSON.stringify({
      success: allSuccess,
      results,
      message: allSuccess ? 'All files uploaded successfully' : 'Some files failed to upload'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: allSuccess ? 200 : 500
    });

  } catch (error) {
    console.error('Error in upload-files-to-storage:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
