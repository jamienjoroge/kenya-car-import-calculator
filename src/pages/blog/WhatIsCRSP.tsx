
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const WhatIsCRSP = () => {
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
            <h1 className="text-4xl font-bold mb-4 text-primary">What is CRSP?</h1>
            <div className="flex items-center gap-6 text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                5 min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                December 10, 2024
              </span>
            </div>
            <p className="text-lg text-gray-700">
              Understanding the Current Retail Selling Price system used by Kenya Revenue Authority for vehicle valuation.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-primary">What Does CRSP Stand For?</h2>
            <p className="mb-6">
              CRSP stands for <strong>Current Retail Selling Price</strong>. It's the standardized valuation system 
              used by the Kenya Revenue Authority (KRA) to determine the market value of imported vehicles for 
              customs duty calculation purposes.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">Key Point:</h3>
              <p className="text-blue-700">
                CRSP represents what a similar vehicle would sell for in the Kenyan market, 
                not necessarily what you paid for it in the country of origin.
              </p>
            </div>

            <AdSpace slot="blog-content-1" format="rectangle" style={{ width: "300px", height: "250px", margin: "20px auto" }} />

            <h2 className="text-2xl font-semibold mb-4 text-primary">How CRSP Works</h2>
            <p className="mb-4">
              The CRSP system assigns predetermined values to vehicles based on:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Make and Model:</strong> Different manufacturers have different base values</li>
              <li><strong>Year of Manufacture:</strong> Newer vehicles have higher CRSP values</li>
              <li><strong>Engine Capacity:</strong> Larger engines typically mean higher values</li>
              <li><strong>Vehicle Type:</strong> SUVs, sedans, hatchbacks are valued differently</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-primary">CRSP vs. Purchase Price</h2>
            <p className="mb-4">
              Many importers are surprised to learn that KRA doesn't use the actual purchase price 
              for duty calculation. Instead, they use the CRSP value, which can be:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <h3 className="font-semibold text-red-800 mb-2">Higher than purchase price</h3>
                <p className="text-red-700 text-sm">
                  Common when buying from auctions or getting good deals
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <h3 className="font-semibold text-green-800 mb-2">Lower than purchase price</h3>
                <p className="text-green-700 text-sm">
                  Less common, but can happen with premium or rare vehicles
                </p>
              </div>
            </div>

            <AdSpace slot="blog-content-2" format="horizontal" style={{ height: "90px", margin: "20px 0" }} />

            <h2 className="text-2xl font-semibold mb-4 text-primary">Depreciation in CRSP</h2>
            <p className="mb-4">
              CRSP values are adjusted downward based on vehicle age using this depreciation schedule:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6">
              <h3 className="font-semibold mb-3">Depreciation Rates:</h3>
              <ul className="space-y-1 text-sm">
                <li>• <strong>0-6 months:</strong> 5% depreciation</li>
                <li>• <strong>6 months-1 year:</strong> 10% depreciation</li>
                <li>• <strong>1-2 years:</strong> 15% depreciation</li>
                <li>• <strong>2-3 years:</strong> 20% depreciation</li>
                <li>• <strong>3-4 years:</strong> 30% depreciation</li>
                <li>• <strong>4-5 years:</strong> 40% depreciation</li>
                <li>• <strong>5-6 years:</strong> 50% depreciation</li>
                <li>• <strong>7+ years:</strong> 70% depreciation</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">CRSP Schedule Updates</h2>
            <p className="mb-6">
              KRA updates the CRSP schedule periodically to reflect market changes. The most recent 
              update became effective in July 2025, with adjusted values for many vehicle makes and models. 
              These updates can significantly impact your import costs.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Why CRSP Matters to You</h2>
            <p className="mb-4">
              Understanding CRSP is crucial because it directly affects:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Import duty (25% of depreciated CRSP value)</li>
              <li>Excise duty (25% of depreciated CRSP value)</li>
              <li>VAT (16% of depreciated CRSP value)</li>
              <li>Import Declaration Fee (2.25% of depreciated CRSP value)</li>
              <li>Railway Development Levy (2% of depreciated CRSP value)</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">💡 Calculate Your Costs:</h3>
              <p className="text-yellow-700">
                Use our <Link to="/" className="text-primary hover:underline">CRSP-based calculator</Link> to 
                get accurate import duty estimates before purchasing your vehicle. Our calculator uses the 
                latest July 2025 CRSP schedule for precise calculations.
              </p>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default WhatIsCRSP;
