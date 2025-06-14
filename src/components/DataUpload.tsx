import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Upload, FileSpreadsheet, Settings, AlertTriangle, CheckCircle } from 'lucide-react';
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

interface ValidationResult {
  validRows: ExcelRow[];
  invalidRows: Array<{ row: any; index: number; issues: string[] }>;
}

export default function DataUpload() {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [showMapping, setShowMapping] = useState(false);
  const [availableColumns, setAvailableColumns] = useState<string[]>([]);
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
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
          
          console.log(`Checking column: "${col}" -> normalized: "${normalized}"`);
          
          // Map Make - exact match
          if (original === 'make') {
            autoMapping.make_name = col;
            console.log(`Mapped make_name to: ${col}`);
          }
          
          // Map Model - exact match (not "Model number")
          if (original === 'model') {
            autoMapping.model_name = col;
            console.log(`Mapped model_name to: ${col}`);
          }
          
          // Map CRSP - look for "CRSP" in the column name
          if (original.includes('crsp')) {
            autoMapping.crsp_value = col;
            console.log(`Mapped crsp_value to: ${col}`);
          }
          
          // Map Engine Capacity - look for "engine" and "capacity"
          if (original.includes('engine') && original.includes('capacity')) {
            autoMapping.engine_capacity = col;
            console.log(`Mapped engine_capacity to: ${col}`);
          }
          
          // Map Fuel Type - exact match
          if (original === 'fuel') {
            autoMapping.fuel_type = col;
            console.log(`Mapped fuel_type to: ${col}`);
          }
          
          // Map Body Type - look for "body" and "type"
          if (original.includes('body') && original.includes('type')) {
            autoMapping.body_type = col;
            console.log(`Mapped body_type to: ${col}`);
          }
          
          // Map Transmission - exact match
          if (original === 'transmission') {
            autoMapping.transmission_type = col;
            console.log(`Mapped transmission_type to: ${col}`);
          }
        });
        
        setColumnMapping(autoMapping);
        
        console.log('Final mapping:', autoMapping);
        
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

  const validateAndProcessData = (rawData: ExcelRow[]): ValidationResult => {
    const validRows: ExcelRow[] = [];
    const invalidRows: Array<{ row: any; index: number; issues: string[] }> = [];

    rawData.forEach((row, index) => {
      const issues: string[] = [];

      // Check required fields
      if (!row.make_name || row.make_name.trim() === '') {
        issues.push('Missing make name');
      }
      if (!row.model_name || row.model_name.trim() === '') {
        issues.push('Missing model name');
      }
      if (!row.crsp_value || row.crsp_value <= 0) {
        issues.push('Missing or invalid CRSP value');
      }
      if (!row.engine_capacity || row.engine_capacity <= 0) {
        issues.push('Missing or invalid engine capacity');
      }

      if (issues.length === 0) {
        validRows.push(row);
      } else {
        invalidRows.push({ row, index: index + 1, issues });
      }
    });

    return { validRows, invalidRows };
  };

  const processExcelFile = (file: File): Promise<ValidationResult> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          
          console.log('Sample row from Excel:', jsonData[0]);
          console.log('Column mapping being used:', columnMapping);
          
          const processedData: ExcelRow[] = jsonData.map((row: any, index: number) => {
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
            
            const processedRow = {
              make_name: String(row[columnMapping.make_name] || '').trim(),
              model_name: String(modelValue || '').trim(),
              year: parseInt(yearValue || '0'),
              crsp_value: parseFloat(String(row[columnMapping.crsp_value] || '0').replace(/[^\d.-]/g, '')),
              engine_capacity: parseInt(String(row[columnMapping.engine_capacity] || '0').replace(/[^\d]/g, '')),
              fuel_type: columnMapping.fuel_type ? String(row[columnMapping.fuel_type] || '').trim() || null : null,
              body_type: columnMapping.body_type ? String(row[columnMapping.body_type] || '').trim() || null : null,
              transmission_type: columnMapping.transmission_type ? String(row[columnMapping.transmission_type] || '').trim() || null : null,
            };
            
            // Log first few rows for debugging
            if (index < 3) {
              console.log(`Row ${index + 1} processed:`, processedRow);
            }
            
            return processedRow;
          });

          const validationResult = validateAndProcessData(processedData);
          resolve(validationResult);
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
      const result = await processExcelFile(file);
      setValidationResult(result);
      
      if (result.validRows.length === 0) {
        toast({
          title: "No valid data found",
          description: "All rows have missing required fields. Please check your data and column mappings.",
          variant: "destructive"
        });
        setUploading(false);
        return;
      }

      // Show validation summary
      if (result.invalidRows.length > 0) {
        toast({
          title: "Data validation complete",
          description: `Found ${result.validRows.length} valid rows and ${result.invalidRows.length} invalid rows. Proceeding with valid data only.`,
        });
      }

      const response = await fetch('https://tapmpahlwxsckbamdrms.supabase.co/functions/v1/upload-crsp-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhcG1wYWhsd3hzY2tiYW1kcm1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxODg1NDUsImV4cCI6MjA2NDc2NDU0NX0.oFYonOMWn_ue-pQMvJMJOF9FKRr491Cx5R3thOM-wZQ`
        },
        body: JSON.stringify({ data: result.validRows }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
      }

      const uploadResult = await response.json();

      toast({
        title: "Upload successful",
        description: `Successfully uploaded ${uploadResult.count} valid records. ${result.invalidRows.length} invalid rows were skipped.`,
      });

      setFile(null);
      setShowMapping(false);
      setAvailableColumns([]);
      setValidationResult(null);
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
          Invalid rows will be automatically filtered out and only valid data will be uploaded.
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

        {validationResult && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-700 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-semibold">Valid Rows</span>
                </div>
                <p className="text-green-600">{validationResult.validRows.length} rows ready for upload</p>
              </div>
              
              {validationResult.invalidRows.length > 0 && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-orange-700 mb-2">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="font-semibold">Invalid Rows</span>
                  </div>
                  <p className="text-orange-600">{validationResult.invalidRows.length} rows will be skipped</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-orange-600 hover:text-orange-700">
                      View details
                    </summary>
                    <div className="mt-2 text-xs text-orange-600 max-h-32 overflow-y-auto">
                      {validationResult.invalidRows.slice(0, 10).map((invalid, idx) => (
                        <div key={idx} className="mb-1">
                          Row {invalid.index}: {invalid.issues.join(', ')}
                        </div>
                      ))}
                      {validationResult.invalidRows.length > 10 && (
                        <div className="text-orange-500">
                          ... and {validationResult.invalidRows.length - 10} more rows
                        </div>
                      )}
                    </div>
                  </details>
                </div>
              )}
            </div>
          </div>
        )}

        {showMapping && availableColumns.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <h3 className="text-lg font-semibold">Column Mapping</h3>
            </div>
            
            <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded">
              <strong>Available columns:</strong> {availableColumns.join(', ')}
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
                    {columnMapping[field as keyof ColumnMapping] && (
                      <div className="text-xs text-green-600 mt-1">
                        ✓ Mapped to: {columnMapping[field as keyof ColumnMapping]}
                      </div>
                    )}
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
                    {columnMapping[field as keyof ColumnMapping] && (
                      <div className="text-xs text-green-600 mt-1">
                        ✓ Mapped to: {columnMapping[field as keyof ColumnMapping]}
                      </div>
                    )}
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
          {uploading ? 'Processing & Uploading...' : 
           validationResult ? `Upload ${validationResult.validRows.length} Valid Rows` : 'Upload Data'}
        </Button>

        <div className="text-xs text-muted-foreground">
          <p><strong>Available columns will be detected from your Excel file.</strong></p>
          <p>The system will auto-map columns where possible and filter out invalid rows automatically.</p>
          <p><strong>Note:</strong> Rows with missing required fields (Make, Model, CRSP Value, Engine Capacity) will be skipped.</p>
        </div>
      </CardContent>
    </Card>
  );
}
