import { supabase } from "@/integrations/supabase/client";

export async function uploadCrspFilesToStorage() {
  try {
    // Fetch both Excel files from the public folder
    const files = [
      { name: 'CRSP-2018.xls', path: '/CRSP-2018.xls' },
      { name: 'CRSP-2025.xlsx', path: '/CRSP-2025.xlsx' }
    ];

    const results = [];

    for (const file of files) {
      console.log(`Uploading ${file.name} to storage...`);
      
      // Fetch the file from public folder
      const response = await fetch(file.path);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${file.name}: ${response.statusText}`);
      }

      const blob = await response.blob();

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('crsp-files')
        .upload(file.name, blob, {
          cacheControl: '3600',
          upsert: true // Overwrite if exists
        });

      if (error) {
        console.error(`Error uploading ${file.name}:`, error);
        results.push({ file: file.name, success: false, error: error.message });
      } else {
        console.log(`Successfully uploaded ${file.name}`);
        results.push({ file: file.name, success: true, data });
      }
    }

    return results;
  } catch (error) {
    console.error('Error in uploadCrspFilesToStorage:', error);
    throw error;
  }
}
