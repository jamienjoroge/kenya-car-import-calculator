import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CrspRow {
  make_name: string;
  model_name: string;
  year: number;
  engine_capacity: number;
  crsp_value: number;
  fuel_type: string | null;
  transmission_type: string | null;
  body_type: string | null;
  crsp_version: string;
  effective_date: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { csvText } = await req.json();

    if (!csvText) {
      return new Response(JSON.stringify({ error: 'CSV text is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Parse CSV
    const lines = csvText.split('\n');
    const rows: CrspRow[] = [];
    let processedCount = 0;
    let errorCount = 0;

    // Skip header lines (first 5 lines)
    for (let i = 5; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      try {
        const columns = parseCSVLine(line);
        if (columns.length < 11) continue;

        const [make, model, modelNum, transmission, driveConfig, engineCap, bodyType, gvw, seating, fuel, crsp] = columns;

        // Clean CRSP value (remove commas, spaces, quotes)
        const crspClean = crsp.replace(/[^0-9.-]/g, '');
        const crspValue = parseFloat(crspClean);
        
        if (!make || !model || !crspValue || isNaN(crspValue)) {
          continue;
        }

        // Parse engine capacity
        let engineCapacity = 0;
        if (engineCap.includes('kWh')) {
          // Electric vehicle - convert kWh to cc equivalent (multiply by 1000)
          const kWh = parseFloat(engineCap.replace(/[^0-9.]/g, ''));
          engineCapacity = Math.round(kWh * 1000);
        } else {
          engineCapacity = parseInt(engineCap.replace(/[^0-9]/g, '')) || 0;
        }

        // Map fuel type
        let fuelType = null;
        if (fuel) {
          const fuelUpper = fuel.toUpperCase();
          if (fuelUpper.includes('GASOLINE') || fuelUpper.includes('PETROL')) {
            fuelType = 'Petrol';
          } else if (fuelUpper.includes('DIESEL')) {
            fuelType = 'Diesel';
          } else if (fuelUpper.includes('ELECTRIC')) {
            fuelType = 'Electric';
          } else if (fuelUpper.includes('HYBRID')) {
            fuelType = 'Hybrid';
          }
        }

        rows.push({
          make_name: make.trim(),
          model_name: model.trim(),
          year: 2025,
          engine_capacity: engineCapacity,
          crsp_value: crspValue,
          fuel_type: fuelType,
          transmission_type: transmission?.trim() || null,
          body_type: bodyType?.trim() || null,
          crsp_version: '2025',
          effective_date: '2025-07-01',
        });

        processedCount++;
      } catch (e) {
        console.error(`Error processing line ${i}:`, e);
        errorCount++;
      }
    }

    console.log(`Processed ${processedCount} rows, ${errorCount} errors`);

    // Upload in batches of 100
    const batchSize = 100;
    let uploadedCount = 0;
    let uploadErrors = 0;

    for (let i = 0; i < rows.length; i += batchSize) {
      const batch = rows.slice(i, i + batchSize);
      
      const { error } = await supabase
        .from('crsp_data')
        .insert(batch);

      if (error) {
        console.error(`Error uploading batch ${i / batchSize}:`, error);
        uploadErrors++;
      } else {
        uploadedCount += batch.length;
      }
    }

    return new Response(JSON.stringify({
      success: true,
      processed: processedCount,
      uploaded: uploadedCount,
      errors: errorCount,
      uploadErrors: uploadErrors,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in upload-new-crsp function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

// Simple CSV parser that handles quoted fields
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}
