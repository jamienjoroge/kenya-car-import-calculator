
import VehicleImportCalculator from "@/components/VehicleImportCalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, GitCompare, DollarSign, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
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

        {/* Feature Navigation Cards */}
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="border-2 border-primary bg-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Calculator className="h-4 w-4" />
                  Import Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs mb-3">
                  Calculate import duties for any vehicle
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="#calculator">Use Calculator</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <GitCompare className="h-4 w-4" />
                  Compare Cars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs mb-3">
                  Compare import costs between vehicles
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/compare">Compare Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4" />
                  What Can I Afford?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs mb-3">
                  Find cars within your budget
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/afford">Check Budget</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4" />
                  Popular by Year
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs mb-3">
                  See trending vehicles by year
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/popular">View Trends</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div id="calculator">
        <VehicleImportCalculator />
      </div>
      
      {/* SEO Content Section */}
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
      </section>
      
      <footer className="text-xs text-muted-foreground mt-16 text-center pb-6">
        &copy; {new Date().getFullYear()} Kenya Vehicle Import Calculator · Updated for July 2025 CRSP Schedule · Powered by Supabase &amp; Lovable.dev
      </footer>
    </div>
  );
};

export default Index;
