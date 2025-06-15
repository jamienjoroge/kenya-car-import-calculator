
import React from "react";
import AdSpace from "./AdSpace";

const SEOContent = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">About Kenya Car Import Duties</h3>
          <p className="text-gray-700 mb-4">
            Kenya's car import duty system uses the CRSP (Current Retail Selling Price) to determine import costs. 
            The new schedule effective July 2025 brings updated rates for vehicle valuation and customs calculations.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Import Duty:</strong> 25% of depreciated CRSP value</li>
            <li>• <strong>Excise Duty:</strong> 25% of depreciated CRSP value</li>
            <li>• <strong>VAT:</strong> 16% of depreciated CRSP value</li>
            <li>• <strong>IDF:</strong> 2.25% of depreciated CRSP value</li>
            <li>• <strong>RDL:</strong> 2% of depreciated CRSP value</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Vehicle Age Restrictions</h3>
          <p className="text-gray-700 mb-4">
            Kenya restricts vehicle imports to cars not older than 8 years from the date of manufacture. 
            Our calculator automatically validates vehicle age compliance with KRA regulations.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Depreciation Schedule:</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• 0-6 months: 5% depreciation</li>
              <li>• 6 months-1 year: 10% depreciation</li>
              <li>• 1-2 years: 15% depreciation</li>
              <li>• 2-3 years: 20% depreciation</li>
              <li>• 3-4 years: 30% depreciation</li>
              <li>• 4-5 years: 40% depreciation</li>
              <li>• 5-6 years: 50% depreciation</li>
              <li>• 7+ years: 70% depreciation</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-primary">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">What is CRSP in Kenya?</h4>
            <p className="text-gray-700 text-sm mb-4">
              CRSP (Current Retail Selling Price) is the value used by Kenya Revenue Authority to determine import duties on vehicles. It represents the market value of a vehicle in Kenya.
            </p>
            
            <h4 className="font-semibold mb-2">When does the new CRSP schedule take effect?</h4>
            <p className="text-gray-700 text-sm">
              The new CRSP schedule becomes effective in July 2025, with updated valuation rates for various vehicle makes and models.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">How accurate is this calculator?</h4>
            <p className="text-gray-700 text-sm mb-4">
              Our calculator uses official KRA rates and the latest CRSP values to provide accurate estimates. However, final duties may vary based on specific vehicle conditions and KRA assessment.
            </p>
            
            <h4 className="font-semibold mb-2">What additional costs should I consider?</h4>
            <p className="text-gray-700 text-sm">
              Consider shipping costs, insurance, clearing agent fees, port handling charges, and inspection fees when budgeting for vehicle imports.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Ad Space */}
      <div className="mt-8">
        <AdSpace slot="bottom-content" format="horizontal" style={{ height: "90px" }} />
      </div>
    </section>
  );
};

export default SEOContent;
