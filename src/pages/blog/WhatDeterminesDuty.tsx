
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const WhatDeterminesDuty = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="bg-white rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">What Determines Duty in Kenya?</h1>
            <div className="flex items-center gap-6 text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                6 min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                December 8, 2024
              </span>
            </div>
            <p className="text-lg text-gray-700">
              Factors that influence import duty calculations for vehicles in Kenya including age, engine size, and value.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Primary Duty Determinants</h2>
            <p className="mb-6">
              Several key factors determine how much import duty you'll pay when bringing a vehicle into Kenya. 
              Understanding these factors helps you make informed decisions and budget accurately.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary">1. Vehicle Value (CRSP)</h3>
            <p className="mb-4">
              The most significant factor is the Current Retail Selling Price (CRSP) value assigned to your vehicle. 
              This standardized value system determines the base amount for all duty calculations.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
              <h4 className="font-semibold text-blue-800 mb-2">CRSP Impact:</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Higher CRSP = Higher duties across all categories</li>
                <li>• CRSP varies by make, model, and year</li>
                <li>• Updated periodically by KRA</li>
              </ul>
            </div>

            <AdSpace slot="blog-content-1" format="rectangle" style={{ width: "300px", height: "250px", margin: "20px auto" }} />

            <h3 className="text-xl font-semibold mb-3 text-primary">2. Vehicle Age</h3>
            <p className="mb-4">
              Age significantly affects your duty calculation through depreciation rates:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <h4 className="font-semibold text-green-800 mb-2">Newer Vehicles (0-2 years)</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• 5-15% depreciation</li>
                  <li>• Higher absolute duty amounts</li>
                  <li>• Lower percentage of CRSP value</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Older Vehicles (5+ years)</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• 50-70% depreciation</li>
                  <li>• Lower absolute duty amounts</li>
                  <li>• Higher percentage of vehicle value</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-primary">3. Engine Capacity</h3>
            <p className="mb-4">
              Engine size affects both CRSP values and some specific duty rates:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Below 1500cc:</strong> Generally lower CRSP values and duties</li>
              <li><strong>1500cc - 3000cc:</strong> Standard duty rates apply</li>
              <li><strong>Above 3000cc:</strong> Higher CRSP values, considered luxury vehicles</li>
              <li><strong>Diesel engines:</strong> Sometimes have different valuations than petrol</li>
            </ul>

            <AdSpace slot="blog-content-2" format="horizontal" style={{ height: "90px", margin: "20px 0" }} />

            <h3 className="text-xl font-semibold mb-3 text-primary">4. Vehicle Type and Category</h3>
            <p className="mb-4">
              Different vehicle categories have varying CRSP valuations:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6">
              <h4 className="font-semibold mb-3">Vehicle Category Impact:</h4>
              <ul className="space-y-2">
                <li><strong>Sedans:</strong> Standard CRSP values</li>
                <li><strong>SUVs/4WDs:</strong> Higher CRSP values due to popularity</li>
                <li><strong>Hatchbacks:</strong> Generally lower CRSP values</li>
                <li><strong>Commercial vehicles:</strong> Different duty structure entirely</li>
                <li><strong>Luxury brands:</strong> Premium CRSP valuations</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Duty Components Breakdown</h2>
            <p className="mb-4">
              Understanding what makes up your total duty helps you see how each factor contributes:
            </p>

            <div className="grid gap-4 mb-6">
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-semibold mb-2">Import Duty (25%)</h4>
                <p className="text-sm text-gray-600">
                  Applied to depreciated CRSP value. This is your largest single duty component.
                </p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-semibold mb-2">Excise Duty (25%)</h4>
                <p className="text-sm text-gray-600">
                  Also applied to depreciated CRSP value. Combined with import duty, represents 50% of vehicle value.
                </p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-semibold mb-2">VAT (16%)</h4>
                <p className="text-sm text-gray-600">
                  Applied to depreciated CRSP value. Value Added Tax on the importation.
                </p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-semibold mb-2">Additional Fees (4.25%)</h4>
                <p className="text-sm text-gray-600">
                  IDF (2.25%) and RDL (2%) applied to depreciated CRSP value.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Factors That Don't Directly Affect Duty</h2>
            <p className="mb-4">
              Some factors importers think matter but actually don't affect KRA duty calculations:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Actual purchase price:</strong> KRA uses CRSP, not what you paid</li>
              <li><strong>Vehicle condition:</strong> CRSP doesn't account for wear and tear</li>
              <li><strong>Mileage:</strong> High or low mileage doesn't affect CRSP valuation</li>
              <li><strong>Country of origin:</strong> A Toyota from Japan has same CRSP as one from UAE</li>
              <li><strong>Currency fluctuations:</strong> CRSP is set in KES, not foreign currency</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Practical Example</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">2020 Toyota Harrier (2000cc)</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• CRSP Value: KES 2,800,000</li>
                <li>• Age: 5 years (40% depreciation)</li>
                <li>• Depreciated Value: KES 1,680,000</li>
                <li>• Total Duties: ~KES 1,193,600 (71% of depreciated value)</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-800 mb-2">💡 Plan Your Import:</h3>
              <p className="text-green-700">
                Use our <Link to="/" className="text-primary hover:underline">import calculator</Link> to 
                see exactly how these factors affect your specific vehicle. Input your make, model, 
                and year to get precise duty estimates based on current CRSP values.
              </p>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default WhatDeterminesDuty;
