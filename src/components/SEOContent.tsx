
import React from "react";
import AdSpace from "./AdSpace";

const SEOContent = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">💰 How Much Does It Cost to Import a Car to Kenya?</h3>
          <p className="text-gray-700 mb-4">
            Import costs vary significantly based on your vehicle's CRSP value, age, and engine capacity. 
            Our FREE calculator gives you exact costs in seconds using the official 2025 CRSP schedule.
          </p>
          <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
            <h4 className="font-semibold text-green-800 mb-2">Typical Cost Breakdown:</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• <strong>Import Duty:</strong> 25% of depreciated CRSP</li>
              <li>• <strong>Excise Duty:</strong> 25% of depreciated CRSP</li>
              <li>• <strong>VAT:</strong> 16% of depreciated CRSP</li>
              <li>• <strong>IDF:</strong> 2.25% of depreciated CRSP</li>
              <li>• <strong>RDL:</strong> 2% of depreciated CRSP</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            <strong>Example:</strong> A 2020 Toyota Camry might cost KES 800,000-1,200,000 in total import duties and fees.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">🕐 Vehicle Age Limits & Restrictions</h3>
          <p className="text-gray-700 mb-4">
            Kenya allows vehicle imports up to 8 years from manufacture date. Our calculator automatically 
            checks age compliance and applies correct depreciation rates.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Age-Based Depreciation:</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• <strong>0-6 months:</strong> 5% off CRSP value</li>
              <li>• <strong>6-12 months:</strong> 10% off CRSP value</li>
              <li>• <strong>1-2 years:</strong> 15% off CRSP value</li>
              <li>• <strong>2-3 years:</strong> 20% off CRSP value</li>
              <li>• <strong>3-4 years:</strong> 30% off CRSP value</li>
              <li>• <strong>4-5 years:</strong> 40% off CRSP value</li>
              <li>• <strong>5-6 years:</strong> 50% off CRSP value</li>
              <li>• <strong>7+ years:</strong> 70% off CRSP value</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-primary">🤔 Frequently Asked Questions About Kenya Car Import Costs</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-green-600">How accurate is this FREE calculator?</h4>
            <p className="text-gray-700 text-sm mb-4">
              Our calculator uses official KRA rates and the 2025 CRSP database for 95%+ accuracy. 
              Results match what you'll pay at customs, though final costs may vary slightly based on vehicle condition.
            </p>
            
            <h4 className="font-semibold mb-2 text-green-600">Can I import any car to Kenya?</h4>
            <p className="text-gray-700 text-sm mb-4">
              No - vehicles must be 8 years or newer from manufacture date. Right-hand drive vehicles are preferred. 
              Some commercial vehicles have different restrictions.
            </p>
            
            <h4 className="font-semibold mb-2 text-green-600">What's the cheapest way to import a car?</h4>
            <p className="text-gray-700 text-sm">
              Choose vehicles with lower CRSP values, smaller engines (under 1500cc pay less excise), 
              and newer models with less depreciation. Hybrid vehicles may qualify for duty reductions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-blue-600">What additional costs should I budget for?</h4>
            <p className="text-gray-700 text-sm mb-4">
              Beyond duties: shipping ($800-2000), insurance (2-3% of car value), clearing agent fees (KES 50,000-100,000), 
              port charges (KES 15,000-30,000), and inspection fees (KES 10,000).
            </p>
            
            <h4 className="font-semibold mb-2 text-blue-600">How long does car import clearance take?</h4>
            <p className="text-gray-700 text-sm mb-4">
              Typically 3-7 days at Mombasa port if all documents are ready. Delays occur with missing paperwork 
              or inspection issues. Plan for 2-3 weeks total from shipping to driving.
            </p>
            
            <h4 className="font-semibold mb-2 text-blue-600">Is the 2025 CRSP schedule different?</h4>
            <p className="text-gray-700 text-sm">
              Yes! The July 2025 CRSP update includes new vehicle models and adjusted values for existing ones. 
              Using old calculators will give you incorrect estimates.
            </p>
          </div>
        </div>
      </div>

      {/* Popular Models Section */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-center text-primary">🚗 Popular Car Models & Their Import Costs</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded p-4">
            <h4 className="font-semibold text-blue-600 mb-2">Toyota Models</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Camry (2020): ~KES 900K duties</li>
              <li>• Corolla (2021): ~KES 600K duties</li>
              <li>• Prius (2019): ~KES 700K duties</li>
              <li>• Land Cruiser (2020): ~KES 2M+ duties</li>
            </ul>
          </div>
          <div className="bg-white rounded p-4">
            <h4 className="font-semibold text-green-600 mb-2">Honda Models</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Civic (2020): ~KES 700K duties</li>
              <li>• Accord (2021): ~KES 800K duties</li>
              <li>• CR-V (2019): ~KES 900K duties</li>
              <li>• Fit/Jazz (2020): ~KES 500K duties</li>
            </ul>
          </div>
          <div className="bg-white rounded p-4">
            <h4 className="font-semibold text-purple-600 mb-2">Other Popular Models</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Mazda CX-5 (2020): ~KES 850K</li>
              <li>• Nissan X-Trail (2019): ~KES 800K</li>
              <li>• BMW 3 Series (2020): ~KES 1.2M</li>
              <li>• Mercedes C-Class (2019): ~KES 1.4M</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-4">
          *Estimates based on average CRSP values and standard depreciation. Use our calculator for exact costs.
        </p>
      </div>

      {/* Bottom Ad Space */}
      <div className="mt-8">
        <AdSpace slot="bottom-content" format="horizontal" style={{ height: "90px" }} />
      </div>
    </section>
  );
};

export default SEOContent;
