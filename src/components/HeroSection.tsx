
import React from "react";
import Logo from "@/components/Logo";
import { Calculator, Clock, DollarSign, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-12 pb-10">
      <div className="flex justify-center mb-6">
        <Logo size="lg" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-primary">
        FREE Kenya Car Import Calculator 2025
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 text-gray-700">
        💰 Save Money with Instant CRSP Duty Estimates
      </h2>
      
      {/* Value Proposition */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span className="font-semibold">100% FREE</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <Clock className="h-4 w-4" />
            <span className="font-semibold">Instant Results</span>
          </div>
          <div className="flex items-center gap-2 text-orange-600">
            <DollarSign className="h-4 w-4" />
            <span className="font-semibold">Save Thousands</span>
          </div>
          <div className="flex items-center gap-2 text-purple-600">
            <Calculator className="h-4 w-4" />
            <span className="font-semibold">2025 CRSP Rates</span>
          </div>
        </div>
      </div>

      <p className="text-center text-lg text-muted-foreground mb-6 max-w-4xl mx-auto px-4">
        Get exact import costs for your vehicle in Kenya with our FREE calculator. Uses official 2025 CRSP schedule for accurate KRA duties, VAT (16%), excise duty, IDF (2.25%), and RDL (2%) calculations. No hidden fees, no registration required!
      </p>
      
      {/* CTA Section */}
      <div className="text-center mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg inline-block mb-4">
          <p className="font-bold text-lg">🚗 Calculate Your Import Costs NOW!</p>
          <p className="text-sm">Scroll down to start your FREE calculation</p>
        </div>
      </div>
      
      {/* Urgency Alert */}
      <div className="text-center text-sm text-gray-600 mb-8 max-w-3xl mx-auto px-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          🚨 <strong>IMPORTANT:</strong> New CRSP Schedule effective July 2025! Get updated calculations with the latest KRA-approved rates. Don't use outdated calculators!
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
