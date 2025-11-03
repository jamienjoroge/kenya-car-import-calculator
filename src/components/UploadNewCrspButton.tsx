import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function UploadNewCrspButton() {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!confirm('This will upload ~5,300 new CRSP records for July 2025. Continue?')) {
      return;
    }

    setUploading(true);
    try {
      // Fetch the CSV file
      const response = await fetch('/New-CRSP---July-2025.csv');
      const csvText = await response.text();

      toast({
        title: "Uploading...",
        description: "Processing CSV and uploading data. This may take a minute...",
      });

      // Call the edge function
      const { data, error } = await supabase.functions.invoke('upload-new-crsp', {
        body: { csvText }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "✅ Upload Complete!",
        description: `Processed: ${data.processed} rows, Uploaded: ${data.uploaded} records, Errors: ${data.errors}`,
      });

      console.log('Upload result:', data);
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "❌ Upload Failed",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-card">
      <h3 className="font-semibold mb-2">Upload July 2025 CRSP Data</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Upload the new CRSP values from the July 2025 KRA update (~5,300 records)
      </p>
      <Button 
        onClick={handleUpload} 
        disabled={uploading}
        variant="default"
      >
        {uploading ? "Uploading..." : "Upload New CRSP Data"}
      </Button>
    </div>
  );
}
