import React from 'react';
import { Shield, Users, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TrustIndicators = () => {
  const indicators = [
    { icon: Users, count: "15,000+", label: "Users Trust Us", color: "text-blue-600" },
    { icon: Clock, count: "2M+", label: "Calculations Done", color: "text-green-600" },
    { icon: Shield, count: "100%", label: "KRA Compliant", color: "text-purple-600" },
    { icon: CheckCircle, count: "4.9/5", label: "User Rating", color: "text-orange-600" },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 mb-6">
      <h3 className="text-center text-sm font-semibold text-gray-700 mb-3">
        Trusted by Car Importers Across Kenya
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {indicators.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="text-center">
              <Icon className={`h-6 w-6 mx-auto mb-1 ${item.color}`} />
              <div className="font-bold text-lg text-gray-900">{item.count}</div>
              <div className="text-xs text-gray-600">{item.label}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500">
          ✓ Official 2025 CRSP Data • ✓ Real-time Updates • ✓ No Hidden Fees
        </p>
      </div>
    </div>
  );
};

export default TrustIndicators;