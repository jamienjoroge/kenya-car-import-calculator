import { supabase } from '@/integrations/supabase/client';

export async function uploadNewCrspData(csvText: string) {
  try {
    const { data, error } = await supabase.functions.invoke('upload-new-crsp', {
      body: { csvText }
    });

    if (error) {
      console.error('Error uploading CRSP data:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to upload CRSP data:', error);
    throw error;
  }
}

// Function to read the CSV file from user-uploads
export async function readCsvFile(filePath: string): Promise<string> {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV file: ${response.statusText}`);
    }
    const csvText = await response.text();
    return csvText;
  } catch (error) {
    console.error('Error reading CSV file:', error);
    throw error;
  }
}
