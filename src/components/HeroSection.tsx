
import React from "react";
import Logo from "@/components/Logo";
import { Calculator, Clock, DollarSign, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pb-2">
      <div className="flex justify-center mb-2">
        <Logo size="sm" />
      </div>
      
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-1 text-primary">
        FREE Kenya Car Import Calculator 2025
      </h1>
      
      {/* Ultra-Compact Value Proposition */}
      <div className="flex justify-center mb-2">
        <div className="flex flex-wrap justify-center gap-3 text-xs">
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="h-3 w-3" />
            <span className="font-semibold">100% FREE</span>
          </div>
          <div className="flex items-center gap-1 text-blue-600">
            <Clock className="h-3 w-3" />
            <span className="font-semibold">Instant Results</span>
          </div>
          <div className="flex items-center gap-1 text-orange-600">
            <DollarSign className="h-3 w-3" />
            <span className="font-semibold">Save Thousands</span>
          </div>
          <div className="flex items-center gap-1 text-purple-600">
            <Calculator className="h-3 w-3" />
            <span className="font-semibold">2025 CRSP Rates</span>
          </div>
        </div>
      </div>

      {/* Compact CTA */}
      <div className="text-center mb-2">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-1 px-3 rounded text-sm inline-block">
          <p className="font-bold">🚗 Calculate Your Import Costs Below!</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
