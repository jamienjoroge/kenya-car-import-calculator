import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Upload, FileSpreadsheet, Settings } from 'lucide-react';
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
}

interface ColumnMapping {
  make_name: string;
  model_name: string;
  year: string;
  crsp_value: string;
  engine_capacity: string;
  fuel_type: string;
  body_type: string;
  transmission_type: string;
}

export default function DataUpload() {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [showMapping, setShowMapping] = useState(false);
  const [availableColumns, setAvailableColumns] = useState<string[]>([]);
  const [columnMapping, setColumnMapping] = useState<ColumnMapping>({
    make_name: '',
    model_name: '',
    year: '',
    crsp_value: '',
    engine_capacity: '',
    fuel_type: '',
    body_type: '',
    transmission_type: '',
  });

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      
      // Read the first row to get available columns
      try {
        const columns = await getExcelColumns(selectedFile);
        setAvailableColumns(columns);
        setShowMapping(true);
        
        // Improved auto-mapping for your specific column structure
        const autoMapping: ColumnMapping = { ...columnMapping };
        columns.forEach(col => {
          const normalized = col.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
          const original = col.toLowerCase().trim();
          
          // Map Make
          if (normalized === 'make' || original === 'make') {
            autoMapping.make_name = col;
          }
          
          // Map Model (prioritize simple "Model" over "Model number")
          if (normalized === 'model' && !original.includes('number')) {
            autoMapping.model_name = col;
          }
          
          // Map Year (look for year-like patterns)
          if (normalized.includes('year') || /^\d{4}$/.test(normalized)) {
            autoMapping.year = col;
          }
          
          // Map CRSP value
          if (normalized.includes('crsp') || (normalized.includes('crsp') && normalized.includes('kes'))) {
            autoMapping.crsp_value = col;
          }
          
          // Map Engine Capacity
          if (normalized.includes('engine') && normalized.includes('capacity')) {
            autoMapping.engine_capacity = col;
          }
          
          // Map Fuel Type
          if (normalized === 'fuel' || normalized.includes('fuel')) {
            autoMapping.fuel_type = col;
          }
          
          // Map Body Type
          if ((normalized.includes('body') && normalized.includes('type')) || normalized === 'bodytype') {
            autoMapping.body_type = col;
          }
          
          // Map Transmission
          if (normalized === 'transmission' || normalized.includes('transmission')) {
            autoMapping.transmission_type = col;
          }
        });
        
        setColumnMapping(autoMapping);
        
        toast({
          title: "File loaded",
          description: `Found ${columns.length} columns. Auto-mapped where possible.`,
        });
        
      } catch (error) {
        toast({
          title: "Error reading file",
          description: "Could not read the Excel file columns.",
          variant: "destructive"
        });
      }
    }
  };

  const getExcelColumns = (file: File): Promise<string[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          const headers = (jsonData[0] as string[]) || [];
          resolve(headers);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsArrayBuffer(file);
    });
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
          
          const processedData: ExcelRow[] = jsonData.map((row: any) => {
            // Extract year from model name if year column is mapped to model
            let yearValue = row[columnMapping.year];
            let modelValue = row[columnMapping.model_name];
            
            // If year is not found, try to extract from model name
            if (!yearValue && modelValue) {
              const yearMatch = String(modelValue).match(/\b(19|20)\d{2}\b/);
              if (yearMatch) {
                yearValue = yearMatch[0];
                // Optionally clean the model name by removing the year
                modelValue = String(modelValue).replace(yearMatch[0], '').trim();
              }
            }
            
            return {
              make_name: String(row[columnMapping.make_name] || '').trim(),
              model_name: String(modelValue || '').trim(),
              year: parseInt(yearValue || '0'),
              crsp_value: parseFloat(String(row[columnMapping.crsp_value] || '0').replace(/[^\d.-]/g, '')),
              engine_capacity: parseInt(String(row[columnMapping.engine_capacity] || '0').replace(/[^\d]/g, '')),
              fuel_type: columnMapping.fuel_type ? String(row[columnMapping.fuel_type] || '').trim() || null : null,
              body_type: columnMapping.body_type ? String(row[columnMapping.body_type] || '').trim() || null : null,
              transmission_type: columnMapping.transmission_type ? String(row[columnMapping.transmission_type] || '').trim() || null : null,
            };
          });

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

    // Check required mappings
    const requiredFields = ['make_name', 'model_name', 'crsp_value', 'engine_capacity'];
    const missingMappings = requiredFields.filter(field => !columnMapping[field as keyof ColumnMapping]);
    
    if (missingMappings.length > 0) {
      toast({
        title: "Missing column mappings",
        description: `Please map the following required columns: ${missingMappings.join(', ')}`,
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
        !row.make_name || !row.model_name || !row.crsp_value || !row.engine_capacity
      );

      if (invalidRows.length > 0) {
        toast({
          title: "Invalid data",
          description: `${invalidRows.length} rows have missing required fields after mapping.`,
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
      setShowMapping(false);
      setAvailableColumns([]);
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

  const requiredFields = ['make_name', 'model_name', 'crsp_value', 'engine_capacity'];
  const optionalFields = ['fuel_type', 'body_type', 'transmission_type'];

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5" />
          Upload CRSP Data
        </CardTitle>
        <CardDescription>
          Upload an Excel file (.xlsx, .xls) containing vehicle CRSP data. 
          The system will auto-detect and map your columns where possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
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

        {showMapping && availableColumns.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <h3 className="text-lg font-semibold">Column Mapping</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-sm mb-3 text-red-600">Required Fields</h4>
                {requiredFields.map(field => (
                  <div key={field} className="mb-3">
                    <Label htmlFor={field} className="text-sm font-medium">
                      {field.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())} *
                    </Label>
                    <select
                      id={field}
                      value={columnMapping[field as keyof ColumnMapping]}
                      onChange={(e) => setColumnMapping(prev => ({
                        ...prev,
                        [field]: e.target.value
                      }))}
                      className="w-full mt-1 p-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select column...</option>
                      {availableColumns.map(col => (
                        <option key={col} value={col}>{col}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-medium text-sm mb-3 text-gray-600">Optional Fields</h4>
                {optionalFields.map(field => (
                  <div key={field} className="mb-3">
                    <Label htmlFor={field} className="text-sm font-medium">
                      {field.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Label>
                    <select
                      id={field}
                      value={columnMapping[field as keyof ColumnMapping]}
                      onChange={(e) => setColumnMapping(prev => ({
                        ...prev,
                        [field]: e.target.value
                      }))}
                      className="w-full mt-1 p-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select column (optional)...</option>
                      {availableColumns.map(col => (
                        <option key={col} value={col}>{col}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <Button 
          onClick={uploadData} 
          disabled={!file || uploading || !showMapping}
          className="w-full"
        >
          <Upload className="h-4 w-4 mr-2" />
          {uploading ? 'Uploading...' : 'Upload Data'}
        </Button>

        <div className="text-xs text-muted-foreground">
          <p><strong>Available columns will be detected from your Excel file.</strong></p>
          <p>The system will auto-map columns where possible. Review and adjust mappings before uploading.</p>
          <p><strong>Note:</strong> Year field is optional as it can be extracted from the model name if needed.</p>
        </div>
      </CardContent>
    </Card>
  );
}
