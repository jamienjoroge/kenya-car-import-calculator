import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import * as XLSX from 'https://esm.sh/xlsx@0.18.5';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting 2025 CRSP upload...');

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Fetch the Excel file from public folder
    const response = await fetch(new URL('/CRSP-2025.xlsx', req.url).href);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log(`Parsed ${jsonData.length} rows from Excel`);

    // Helper function to normalize fuel type
    function normalizeFuelType(fuel: string): string {
      const fuelUpper = fuel?.toUpperCase() || '';
      if (fuelUpper.includes('PETROL') || fuelUpper.includes('GASOLINE')) return 'Petrol';
      if (fuelUpper.includes('DIESEL')) return 'Diesel';
      if (fuelUpper.includes('ELECTRIC')) return 'Electric';
      if (fuelUpper.includes('HYBRID') || fuelUpper.includes('PLUG')) return 'Hybrid';
      return fuel || 'Unknown';
    }

    // Parse and transform data
    const records = [];
    let skipped = 0;

    for (const row of jsonData as any[]) {
      try {
        const make = row['Make']?.toString().trim();
        const model = row['Model']?.toString().trim();
        const modelNumber = row['Model number']?.toString().trim();
        const transmission = row['Transmission']?.toString().trim();
        const driveConfig = row['Drive Configuration']?.toString().trim();
        const engineCapacityStr = row['Engine Capacity']?.toString().trim();
        const crspStr = row['CRSP (KES.)']?.toString().trim();
        const fuel = row['Fuel']?.toString().trim();
        const bodyType = row['Body Type']?.toString().trim();

        if (!make || !model || !engineCapacityStr || !crspStr) {
          skipped++;
          continue;
        }

        // Parse engine capacity
        let engineCapacity = 0;
        if (engineCapacityStr.toLowerCase().includes('kwh')) {
          // Electric vehicle: convert kWh to cc equivalent (1 kWh ≈ 1000 cc for storage)
          engineCapacity = parseInt(engineCapacityStr.replace(/[^\d]/g, '')) * 1000;
        } else {
          // Regular ICE vehicle: parse cc
          engineCapacity = parseInt(engineCapacityStr.replace(/[^\d]/g, ''));
        }

        if (isNaN(engineCapacity) || engineCapacity <= 0) {
          skipped++;
          continue;
        }

        // Parse CRSP value (remove commas, spaces)
        const crspValue = parseFloat(crspStr.replace(/[^\d.]/g, ''));
        if (isNaN(crspValue) || crspValue <= 0) {
          skipped++;
          continue;
        }

        records.push({
          make_name: make.toUpperCase(),
          model_name: model,
          year: 2025,
          engine_capacity: engineCapacity,
          fuel_type: normalizeFuelType(fuel),
          body_type: bodyType || null,
          crsp_value: crspValue,
          crsp_version: '2025',
          effective_date: '2025-07-01',
          transmission_type: transmission || null,
          country_of_origin: null,
          notes: modelNumber ? `Model: ${modelNumber}` : null
        });
      } catch (err) {
        console.error('Error parsing row:', err);
        skipped++;
      }
    }

    console.log(`Processed ${records.length} valid records, skipped ${skipped}`);

    // Delete existing 2025 CRSP data
    console.log('Deleting existing 2025 CRSP data...');
    const { error: deleteError } = await supabase
      .from('crsp_data')
      .delete()
      .eq('crsp_version', '2025');

    if (deleteError) {
      console.error('Error deleting old data:', deleteError);
      throw deleteError;
    }

    // Upload in batches
    const batchSize = 200;
    let uploaded = 0;
    let errors = 0;

    for (let i = 0; i < records.length; i += batchSize) {
      const batch = records.slice(i, i + batchSize);
      console.log(`Uploading batch ${i / batchSize + 1}...`);

      const { error } = await supabase
        .from('crsp_data')
        .insert(batch);

      if (error) {
        console.error('Batch upload error:', error);
        errors += batch.length;
      } else {
        uploaded += batch.length;
      }
    }

    console.log(`Upload complete: ${uploaded} uploaded, ${errors} errors`);

    return new Response(JSON.stringify({
      success: true,
      processed: jsonData.length,
      uploaded,
      errors,
      skipped
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in upload-crsp-2025:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
