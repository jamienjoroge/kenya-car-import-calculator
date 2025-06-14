
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Upload, FileSpreadsheet } from 'lucide-react';
import * as XLSX from 'xlsx';

interface ExcelRow {
  make_name: string;
  model_name: string;
  year: number;
  crsp_value: number;
  engine_capacity: number;
  fuel_type?: string;
  body_type?: string;
  transmission_type?: string;
  country_of_origin?: string;
  notes?: string;
}

export default function DataUpload() {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const processExcelFile = (file: File): Promise<ExcelRow[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          
          const processedData: ExcelRow[] = jsonData.map((row: any) => ({
            make_name: String(row.make_name || row['Make Name'] || '').trim(),
            model_name: String(row.model_name || row['Model Name'] || '').trim(),
            year: parseInt(row.year || row.Year || '0'),
            crsp_value: parseFloat(row.crsp_value || row['CRSP Value'] || '0'),
            engine_capacity: parseInt(row.engine_capacity || row['Engine Capacity'] || '0'),
            fuel_type: String(row.fuel_type || row['Fuel Type'] || '').trim() || null,
            body_type: String(row.body_type || row['Body Type'] || '').trim() || null,
            transmission_type: String(row.transmission_type || row['Transmission Type'] || '').trim() || null,
            country_of_origin: String(row.country_of_origin || row['Country of Origin'] || '').trim() || null,
            notes: String(row.notes || row.Notes || '').trim() || null,
          }));

          resolve(processedData);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsArrayBuffer(file);
    });
  };

  const uploadData = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select an Excel file to upload.",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);

    try {
      const excelData = await processExcelFile(file);
      
      if (excelData.length === 0) {
        toast({
          title: "No data found",
          description: "The Excel file appears to be empty or has no valid data.",
          variant: "destructive"
        });
        return;
      }

      // Validate required fields
      const invalidRows = excelData.filter(row => 
        !row.make_name || !row.model_name || !row.year || !row.crsp_value || !row.engine_capacity
      );

      if (invalidRows.length > 0) {
        toast({
          title: "Invalid data",
          description: `${invalidRows.length} rows have missing required fields (make_name, model_name, year, crsp_value, engine_capacity).`,
          variant: "destructive"
        });
        return;
      }

      const response = await fetch('https://tapmpahlwxsckbamdrms.supabase.co/functions/v1/upload-crsp-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhcG1wYWhsd3hzY2tiYW1kcm1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxODg1NDUsImV4cCI6MjA2NDc2NDU0NX0.oFYonOMWn_ue-pQMvJMJOF9FKRr491Cx5R3thOM-wZQ`
        },
        body: JSON.stringify({ data: excelData }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
      }

      const result = await response.json();

      toast({
        title: "Upload successful",
        description: `Successfully uploaded ${result.count} records to the database.`,
      });

      setFile(null);
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5" />
          Upload CRSP Data
        </CardTitle>
        <CardDescription>
          Upload an Excel file (.xlsx, .xls) containing vehicle CRSP data. 
          Required columns: make_name, model_name, year, crsp_value, engine_capacity
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Input
            id="file-input"
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </div>
        
        {file && (
          <div className="text-sm text-muted-foreground">
            Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
          </div>
        )}

        <Button 
          onClick={uploadData} 
          disabled={!file || uploading}
          className="w-full"
        >
          <Upload className="h-4 w-4 mr-2" />
          {uploading ? 'Uploading...' : 'Upload Data'}
        </Button>

        <div className="text-xs text-muted-foreground">
          <p><strong>Expected column names:</strong></p>
          <ul className="list-disc list-inside mt-1">
            <li>make_name (required)</li>
            <li>model_name (required)</li>
            <li>year (required)</li>
            <li>crsp_value (required)</li>
            <li>engine_capacity (required)</li>
            <li>fuel_type (optional)</li>
            <li>body_type (optional)</li>
            <li>transmission_type (optional)</li>
            <li>country_of_origin (optional)</li>
            <li>notes (optional)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
