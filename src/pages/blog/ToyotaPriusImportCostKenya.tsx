
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, DollarSign, Zap, Leaf } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const ToyotaPriusImportCostKenya = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
      <Navigation />
      
      {/* Header Ad */}
      <div className="w-full py-2 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <AdSpace slot="blog-header" format="horizontal" style={{ height: "90px" }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="bg-white rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Toyota Prius Import Cost Kenya 2025: Complete Duty Calculator Guide
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>📅 December 20, 2024</span>
              <span>⏱️ 10 min read</span>
              <span>🏷️ Toyota, Prius, Import Costs</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Complete breakdown of Toyota Prius import costs to Kenya including exact duty calculations, 
              CRSP values, and money-saving tips for 2018-2024 models.
            </p>
          </header>

          <div className="prose max-w-none">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <Calculator className="h-6 w-6" />
                Quick Prius Import Cost Estimates (2025 CRSP)
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-green-700 mb-2">2024 Toyota Prius</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• CRSP Value: KES 4,500,000</li>
                    <li>• Depreciated Value: KES 3,825,000 (15% off)</li>
                    <li>• <strong>Total Import Duty: KES 2,678,250</strong></li>
                    <li>• Plus shipping & clearance fees</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-700 mb-2">2020 Toyota Prius</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• CRSP Value: KES 3,800,000</li>
                    <li>• Depreciated Value: KES 2,660,000 (30% off)</li>
                    <li>• <strong>Total Import Duty: KES 1,862,000</strong></li>
                    <li>• Plus shipping & clearance fees</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Why Import a Toyota Prius to Kenya?</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <Leaf className="h-5 w-5" />
                    Fuel Efficiency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get 20-25 km/L fuel efficiency, saving thousands monthly on petrol costs in Kenya.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <DollarSign className="h-5 w-5" />
                    Lower Duties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Hybrid vehicles qualify for reduced excise duty rates under Kenya's green vehicle policy.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-600">
                    <Zap className="h-5 w-5" />
                    Reliability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Toyota's proven hybrid technology with lower maintenance costs and excellent resale value.</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Toyota Prius Import Duty Breakdown by Year</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Model Year</th>
                    <th className="border border-gray-300 p-3 text-left">CRSP Value</th>
                    <th className="border border-gray-300 p-3 text-left">Depreciation</th>
                    <th className="border border-gray-300 p-3 text-left">Total Duty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">2024 Prius</td>
                    <td className="border border-gray-300 p-3">KES 4,500,000</td>
                    <td className="border border-gray-300 p-3">15%</td>
                    <td className="border border-gray-300 p-3 font-semibold text-green-600">KES 2,678,250</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">2023 Prius</td>
                    <td className="border border-gray-300 p-3">KES 4,200,000</td>
                    <td className="border border-gray-300 p-3">20%</td>
                    <td className="border border-gray-300 p-3 font-semibold text-green-600">KES 2,352,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">2022 Prius</td>
                    <td className="border border-gray-300 p-3">KES 4,000,000</td>
                    <td className="border border-gray-300 p-3">20%</td>
                    <td className="border border-gray-300 p-3 font-semibold text-green-600">KES 2,240,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">2021 Prius</td>
                    <td className="border border-gray-300 p-3">KES 3,900,000</td>
                    <td className="border border-gray-300 p-3">30%</td>
                    <td className="border border-gray-300 p-3 font-semibold text-green-600">KES 1,911,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">2020 Prius</td>
                    <td className="border border-gray-300 p-3">KES 3,800,000</td>
                    <td className="border border-gray-300 p-3">30%</td>
                    <td className="border border-gray-300 p-3 font-semibold text-green-600">KES 1,862,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">2019 Prius</td>
                    <td className="border border-gray-300 p-3">KES 3,600,000</td>
                    <td className="border border-gray-300 p-3">40%</td>
                    <td className="border border-gray-300 p-3 font-semibold text-green-600">KES 1,512,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">2018 Prius</td>
                    <td className="border border-gray-300 p-3">KES 3,400,000</td>
                    <td className="border border-gray-300 p-3">50%</td>
                    <td className="border border-gray-300 p-3 font-semibold text-green-600">KES 1,190,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">💡 Money-Saving Tips for Prius Import</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• <strong>Choose 2018-2019 models:</strong> Maximum depreciation (50-40%) significantly reduces duties</li>
                <li>• <strong>Avoid accident-damaged vehicles:</strong> KRA may assess higher values for damaged cars</li>
                <li>• <strong>Consider shipping costs:</strong> Consolidate with other importers to reduce per-vehicle shipping</li>
                <li>• <strong>Hybrid incentives:</strong> Kenya offers reduced excise rates for environmentally friendly vehicles</li>
                <li>• <strong>Timing matters:</strong> Import before CRSP schedule updates to lock in current rates</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Complete Prius Import Process</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-600">Step 1: Pre-Purchase</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Use our FREE calculator for exact costs</li>
                  <li>• Verify vehicle age (max 8 years)</li>
                  <li>• Check CRSP database for your model</li>
                  <li>• Budget for total landed cost</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Step 2: Documentation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bill of Sale from Japan</li>
                  <li>• Export Certificate</li>
                  <li>• Insurance documents</li>
                  <li>• Shipping Bill of Lading</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-600">Step 3: Shipping</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Choose RoRo or Container shipping</li>
                  <li>• Budget $800-1500 for shipping</li>
                  <li>• Transit time: 4-6 weeks to Mombasa</li>
                  <li>• Track shipment progress</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-600">Step 4: Clearance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hire clearing agent (KES 60,000-80,000)</li>
                  <li>• Pay calculated duties at KRA</li>
                  <li>• NTSA inspection and registration</li>
                  <li>• Get number plates and logbook</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-4">⚠️ Common Prius Import Mistakes to Avoid</h3>
              <ul className="text-red-700 space-y-2">
                <li>• <strong>Buying flood-damaged cars:</strong> KRA will assess full CRSP value regardless of condition</li>
                <li>• <strong>Ignoring battery condition:</strong> Prius battery replacement costs KES 200,000-400,000</li>
                <li>• <strong>Wrong model year calculation:</strong> Use manufacture date, not registration date</li>
                <li>• <strong>Underestimating total costs:</strong> Add 30% buffer for unexpected fees</li>
                <li>• <strong>Skipping pre-shipment inspection:</strong> Could lead to rejection at Mombasa port</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-center">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Ready to Calculate Your Prius Import Cost?</h3>
              <p className="text-green-700 mb-4">
                Get exact import duty calculations for any Toyota Prius model with our FREE calculator
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/#calculator">
                  Calculate Prius Import Cost FREE →
                </Link>
              </Button>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Is the Toyota Prius worth importing to Kenya?</h4>
                <p className="text-gray-700">
                  Yes, especially for city driving. The fuel savings alone can recover import costs within 2-3 years. 
                  Prius models also have excellent resale value in Kenya.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">What's the best Prius model year to import?</h4>
                <p className="text-gray-700">
                  2018-2019 models offer the best value due to maximum depreciation (40-50% off CRSP) while still 
                  being reliable and having modern features.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">How much does Prius battery replacement cost in Kenya?</h4>
                <p className="text-gray-700">
                  Hybrid battery replacement costs KES 200,000-400,000. However, Toyota Prius batteries typically 
                  last 8-10 years with proper maintenance.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link to="/blog/how-to-import-car-kenya" className="hover:text-primary">
                    How to Import a Car in Kenya: Complete Guide
                  </Link>
                </CardTitle>
                <CardDescription>
                  Step-by-step process for importing any vehicle to Kenya
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link to="/blog/what-is-crsp" className="hover:text-primary">
                    What is CRSP and How Does it Affect Import Costs?
                  </Link>
                </CardTitle>
                <CardDescription>
                  Understanding the Current Retail Selling Price system
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Bottom Ad */}
        <div className="mt-8">
          <AdSpace slot="blog-bottom" format="horizontal" style={{ height: "90px" }} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ToyotaPriusImportCostKenya;
