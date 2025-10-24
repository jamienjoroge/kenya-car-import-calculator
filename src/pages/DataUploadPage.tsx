import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import DataUpload from '@/components/DataUpload';

export default function DataUploadPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth !== 'true') {
      navigate('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

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
