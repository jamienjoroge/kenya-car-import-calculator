import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Upload, Database, CheckCircle, Loader2 } from 'lucide-react';
import DataUpload from '@/components/DataUpload';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { uploadCrspFilesToStorage } from '@/utils/uploadFilesToStorage';

export default function DataUploadPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [uploading2018, setUploading2018] = useState(false);
  const [uploading2025, setUploading2025] = useState(false);
  const [uploadingToStorage, setUploadingToStorage] = useState(false);
  const [filesInStorage, setFilesInStorage] = useState(false);
  const [recordCounts, setRecordCounts] = useState({ crsp2018: 0, crsp2025: 0 });

  const checkStorageFiles = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('crsp-files')
        .list();

      if (!error && data) {
        const has2018 = data.some(f => f.name === 'CRSP-2018.xls');
        const has2025 = data.some(f => f.name === 'CRSP-2025.xlsx');
        setFilesInStorage(has2018 && has2025);
      }
    } catch (error) {
      console.error('Error checking storage:', error);
    }
  };

  const handleUploadToStorage = async () => {
    setUploadingToStorage(true);
    try {
      toast({
        title: "Uploading files...",
        description: "Copying Excel files to Supabase Storage...",
      });

      const results = await uploadCrspFilesToStorage();
      
      const allSuccess = results.every(r => r.success);
      if (allSuccess) {
        toast({
          title: "✅ Files Uploaded!",
          description: "Excel files are now in storage and ready to process.",
        });
        setFilesInStorage(true);
      } else {
        const failed = results.filter(r => !r.success);
        throw new Error(`Failed to upload: ${failed.map(f => f.file).join(', ')}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "❌ Upload Failed",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setUploadingToStorage(false);
    }
  };

  const fetchRecordCounts = async () => {
    try {
      const { count: count2018 } = await supabase
        .from('crsp_data')
        .select('*', { count: 'exact', head: true })
        .eq('crsp_version', '2018');

      const { count: count2025 } = await supabase
        .from('crsp_data')
        .select('*', { count: 'exact', head: true })
        .eq('crsp_version', '2025');

      setRecordCounts({
        crsp2018: count2018 || 0,
        crsp2025: count2025 || 0
      });
    } catch (error) {
      console.error('Error fetching record counts:', error);
    }
  };

  const handleUpload2018 = async () => {
    if (!confirm('This will replace ALL existing 2018 CRSP data. Continue?')) {
      return;
    }

    setUploading2018(true);
    try {
      toast({
        title: "Processing 2018 CRSP...",
        description: "Reading Excel file and uploading data. This may take 1-2 minutes...",
      });

      const { data, error } = await supabase.functions.invoke('upload-crsp-2018');

      if (error) throw error;

      if (data.success) {
        toast({
          title: "✅ 2018 CRSP Upload Complete!",
          description: `Processed: ${data.processed} rows, Uploaded: ${data.uploaded} records, Skipped: ${data.skipped}, Errors: ${data.errors}`,
        });
        await fetchRecordCounts();
      } else {
        throw new Error(data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "❌ Upload Failed",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setUploading2018(false);
    }
  };

  const handleUpload2025 = async () => {
    if (!confirm('This will replace ALL existing July 2025 CRSP data. Continue?')) {
      return;
    }

    setUploading2025(true);
    try {
      toast({
        title: "Processing July 2025 CRSP...",
        description: "Reading Excel file and uploading data. This may take 1-2 minutes...",
      });

      const { data, error } = await supabase.functions.invoke('upload-crsp-2025');

      if (error) throw error;

      if (data.success) {
        toast({
          title: "✅ July 2025 CRSP Upload Complete!",
          description: `Processed: ${data.processed} rows, Uploaded: ${data.uploaded} records, Skipped: ${data.skipped}, Errors: ${data.errors}`,
        });
        await fetchRecordCounts();
      } else {
        throw new Error(data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "❌ Upload Failed",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setUploading2025(false);
    }
  };

  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth !== 'true') {
      navigate('/admin');
    } else {
      setIsAuthenticated(true);
      const initializeStorage = async () => {
        await checkStorageFiles();
        await fetchRecordCounts();
      };
      initializeStorage();
    }
  }, [navigate]);

  // Auto-upload files to storage if not present
  useEffect(() => {
    if (isAuthenticated && filesInStorage === false && !uploadingToStorage) {
      handleUploadToStorage();
    }
  }, [isAuthenticated, filesInStorage]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => navigate('/admin')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin Dashboard
          </Button>
          <h1 className="text-3xl font-bold">Bulk Data Upload</h1>
          <p className="text-muted-foreground mt-2">
            Upload Excel files to bulk update your CRSP database records. The system will automatically validate and import your data.
          </p>
        </div>
        
        {/* Step 1: Upload to Storage */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</span>
                <h2 className="text-xl font-semibold">Upload Files to Storage</h2>
                {filesInStorage && <CheckCircle className="h-5 w-5 text-green-600" />}
              </div>
              <p className="text-sm text-muted-foreground ml-8">
                First, copy the Excel files (CRSP-2018.xls and CRSP-2025.xlsx) from the public folder to Supabase Storage
              </p>
            </div>
            <Button 
              onClick={handleUploadToStorage}
              disabled={uploadingToStorage || filesInStorage}
              variant={filesInStorage ? "outline" : "default"}
            >
              {uploadingToStorage ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : filesInStorage ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Files Ready
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload to Storage
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Step 2: Process CRSP Data */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</span>
            <h2 className="text-xl font-semibold">Process CRSP Data</h2>
          </div>
          <p className="text-sm text-muted-foreground ml-8 mb-4">
            {filesInStorage 
              ? "Files are ready! Click the buttons below to parse and upload data to the database." 
              : "Complete Step 1 first to enable data processing."}
          </p>
        </div>

        {/* Official CRSP Upload Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8" style={{ opacity: filesInStorage ? 1 : 0.5 }}>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">2018 CRSP Schedule</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Upload the official 2018 CRSP data (effective February 5, 2018). This will replace all existing 2018 CRSP records.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Current records:</span>
                <span className="font-semibold">{recordCounts.crsp2018.toLocaleString()}</span>
              </div>
              <Button 
                onClick={handleUpload2018}
                disabled={uploading2018 || !filesInStorage}
                className="w-full"
                variant="default"
              >
                <Upload className="h-4 w-4 mr-2" />
                {uploading2018 ? "Uploading..." : "Upload 2018 CRSP Data"}
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">July 2025 CRSP Schedule</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Upload the official July 2025 CRSP data (effective July 2025). This will replace all existing 2025 CRSP records.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Current records:</span>
                <span className="font-semibold">{recordCounts.crsp2025.toLocaleString()}</span>
              </div>
              <Button 
                onClick={handleUpload2025}
                disabled={uploading2025 || !filesInStorage}
                className="w-full"
                variant="default"
              >
                <Upload className="h-4 w-4 mr-2" />
                {uploading2025 ? "Uploading..." : "Upload July 2025 CRSP Data"}
              </Button>
            </div>
          </Card>
        </div>

        <DataUpload />
        
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h2 className="font-semibold mb-2">Excel/CSV Format Requirements:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li><strong>Required columns:</strong> Make, Model, CRSP Value, Engine Capacity</li>
            <li><strong>Optional columns:</strong> Year, Fuel Type, Body Type, Transmission</li>
            <li><strong>File formats:</strong> .xlsx, .xls, or .csv</li>
            <li>If Year is not in the file, you can set a default year (e.g., 2025 for new vehicles)</li>
            <li>CRSP values with commas and spaces will be automatically cleaned</li>
            <li>Electric vehicles: Engine capacity can be in kWh (e.g., "63 kWh")</li>
            <li>Invalid rows will be automatically filtered out</li>
            <li>You'll see a validation summary before upload</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
