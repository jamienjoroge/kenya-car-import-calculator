
import VehicleImportCalculator from "@/components/VehicleImportCalculator";
import DataUpload from "@/components/DataUpload";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
      <div className="pt-12 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-primary">
          Kenya Car Import Duty Calculator
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-6">
          Instantly estimate your vehicle import costs for Kenya including KRA duties, VAT, IDF, RDL, and shipping. Powered by official CRSP values.
        </p>
        
        <div className="text-center mb-6">
          <Button 
            variant="outline" 
            onClick={() => setShowUpload(!showUpload)}
            className="mb-4"
          >
            {showUpload ? 'Hide Data Upload' : 'Upload CRSP Data'}
          </Button>
        </div>
      </div>
      
      {showUpload && (
        <div className="mb-8">
          <DataUpload />
        </div>
      )}
      
      <VehicleImportCalculator />
      
      <footer className="text-xs text-muted-foreground mt-16 text-center pb-6">
        &copy; {new Date().getFullYear()} Kenya Vehicle Import Estimator · Powered by Supabase &amp; Lovable.dev
      </footer>
    </div>
  );
};

export default Index;
