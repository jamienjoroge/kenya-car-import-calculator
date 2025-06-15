
import React from "react";
import { Calculator } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-12 pb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-primary">
        Kenya Car Import Duty Calculator 2025
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 text-gray-700">
        New CRSP Schedule Effective July 2025
      </h2>
      <p className="text-center text-lg text-muted-foreground mb-6 max-w-4xl mx-auto px-4">
        Calculate your vehicle import costs for Kenya with the latest CRSP schedule. Get instant estimates for KRA duties, VAT (16%), excise duty, IDF (2.25%), RDL (2%), and shipping costs. Updated with official Kenya Revenue Authority values for accurate import duty calculations.
      </p>
      
      {/* SEO-focused keywords section */}
      <div className="text-center text-sm text-gray-600 mb-8 max-w-3xl mx-auto px-4">
        <p className="mb-2">
          <strong>Keywords:</strong> Kenya car import calculator, CRSP schedule 2025, KRA import duty, vehicle import tax Kenya, customs duty calculator
        </p>
        <p className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-yellow-800">
          🚨 <strong>New CRSP Schedule Alert:</strong> Updated calculation rates effective July 2025. Calculate your import costs with the latest KRA-approved values.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
