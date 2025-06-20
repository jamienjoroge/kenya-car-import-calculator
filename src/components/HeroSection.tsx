
import React from "react";
import Logo from "@/components/Logo";
import { Calculator, Clock, DollarSign, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pb-6">
      <div className="flex justify-center mb-4">
        <Logo size="md" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-primary">
        FREE Kenya Car Import Calculator 2025
      </h1>
      <h2 className="text-lg md:text-xl font-semibold text-center mb-3 text-gray-700">
        💰 Save Money with Instant CRSP Duty Estimates
      </h2>
      
      {/* Value Proposition - Compact */}
      <div className="flex justify-center mb-4">
        <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="h-3 w-3 md:h-4 md:w-4" />
            <span className="font-semibold">100% FREE</span>
          </div>
          <div className="flex items-center gap-1 text-blue-600">
            <Clock className="h-3 w-3 md:h-4 md:w-4" />
            <span className="font-semibold">Instant Results</span>
          </div>
          <div className="flex items-center gap-1 text-orange-600">
            <DollarSign className="h-3 w-3 md:h-4 md:w-4" />
            <span className="font-semibold">Save Thousands</span>
          </div>
          <div className="flex items-center gap-1 text-purple-600">
            <Calculator className="h-3 w-3 md:h-4 md:w-4" />
            <span className="font-semibold">2025 CRSP Rates</span>
          </div>
        </div>
      </div>

      <p className="text-center text-sm md:text-base text-muted-foreground mb-4 max-w-3xl mx-auto px-4">
        Get exact import costs for your vehicle in Kenya with our FREE calculator. Uses official 2025 CRSP schedule for accurate KRA duties, VAT (16%), excise duty, IDF (2.25%), and RDL (2%) calculations.
      </p>
      
      {/* CTA Section - More Compact */}
      <div className="text-center mb-4">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg inline-block">
          <p className="font-bold text-base md:text-lg">🚗 Start Your FREE Calculation Below!</p>
        </div>
      </div>
      
      {/* Urgency Alert - Compact */}
      <div className="text-center text-xs md:text-sm text-gray-600 max-w-2xl mx-auto px-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-800">
          🚨 <strong>IMPORTANT:</strong> New CRSP Schedule effective July 2025! Get updated calculations with the latest KRA-approved rates.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
