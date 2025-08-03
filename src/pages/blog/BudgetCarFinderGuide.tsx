import React from "react";
import { ArrowLeft, DollarSign, Search, TrendingUp, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";

const BudgetCarFinderGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="What Car Can I Afford in Kenya 2025? Budget Calculator & Vehicle Finder Guide"
        description="Find cars within your budget in Kenya with our complete guide. Calculate total ownership costs, find affordable vehicles, and make smart purchasing decisions with our budget calculator."
        keywords="what car can I afford Kenya, vehicle budget calculator, affordable cars Kenya, car financing Kenya, budget vehicle finder"
      />
      
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="prose prose-lg max-w-none">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              What Car Can I Afford in Kenya 2025? Budget Calculator & Vehicle Finder Guide
            </h1>
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="secondary">
                <DollarSign className="h-4 w-4 mr-1" />
                Budget Calculator
              </Badge>
              <Badge variant="secondary">
                <Search className="h-4 w-4 mr-1" />
                Vehicle Finder
              </Badge>
              <Badge variant="secondary">
                <Calculator className="h-4 w-4 mr-1" />
                Total Cost Analysis
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Discover which vehicles fit your budget with our comprehensive guide to car affordability in Kenya. Calculate true ownership costs and find your perfect vehicle match.
            </p>
          </header>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Understanding True Car Affordability in Kenya
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Many Kenyans focus only on the vehicle purchase price, but true affordability includes all ownership costs. Our budget calculator helps you see the complete financial picture before making a decision.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Upfront Costs:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Vehicle purchase price (CRSP value)</li>
                      <li>• Import duties and taxes</li>
                      <li>• Shipping and clearing costs</li>
                      <li>• Initial registration and licensing</li>
                      <li>• Immediate repairs and inspection</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Ongoing Costs:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Insurance premiums</li>
                      <li>• Fuel consumption</li>
                      <li>• Regular maintenance</li>
                      <li>• Unexpected repairs</li>
                      <li>• Depreciation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 font-medium">💡 The 3-2-1 Rule for Kenya:</p>
                  <p className="text-yellow-700 text-sm">
                    Budget 3x the monthly payment for total monthly costs (including fuel, insurance, maintenance). Save 2x the vehicle value for emergencies. Plan for 1 major repair per year.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How Our Budget Calculator Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Smart Vehicle Matching Process:</h3>
                <ol className="list-decimal ml-6 space-y-3">
                  <li>
                    <strong>Set Your Budget Range:</strong>
                    <ul className="list-disc ml-6 mt-1 text-sm">
                      <li>Minimum budget (optional, helps narrow results)</li>
                      <li>Maximum budget (total amount you can spend)</li>
                      <li>Preferred vehicle year for import eligibility</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Comprehensive Cost Calculation:</strong>
                    <ul className="list-disc ml-6 mt-1 text-sm">
                      <li>Vehicle purchase price (CRSP value)</li>
                      <li>Import duty (25% of depreciated CRSP)</li>
                      <li>Excise duty (25% of duty-paid value)</li>
                      <li>VAT (16% of all applicable values)</li>
                      <li>IDF (2.25%) and RDL (2%) fees</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Real-Time Vehicle Search:</strong>
                    <ul className="list-disc ml-6 mt-1 text-sm">
                      <li>Search through thousands of vehicles in our database</li>
                      <li>Filter by your exact year preference</li>
                      <li>Sort by total cost (lowest to highest)</li>
                      <li>See budget utilization percentage</li>
                    </ul>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Budget Categories & Vehicle Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Based on Kenya market analysis, here are realistic budget ranges and what you can expect:</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800">Entry Level: KES 800,000 - 1,500,000</h4>
                    <div className="text-green-700 text-sm mt-2 space-y-2">
                      <p><strong>Typical Options:</strong> Older Japanese compacts, small sedans, basic hatchbacks</p>
                      <p><strong>Engine Size:</strong> 1,000cc - 1,500cc</p>
                      <p><strong>Age Range:</strong> 7-8 years old</p>
                      <p><strong>Examples:</strong> Toyota Vitz, Nissan March, Mazda Demio</p>
                      <p><strong>Pros:</strong> Low running costs, affordable parts, good fuel economy</p>
                      <p><strong>Cons:</strong> Limited space, basic features, higher maintenance frequency</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800">Mid-Range: KES 1,500,000 - 3,000,000</h4>
                    <div className="text-blue-700 text-sm mt-2 space-y-2">
                      <p><strong>Typical Options:</strong> Compact SUVs, mid-size sedans, family cars</p>
                      <p><strong>Engine Size:</strong> 1,500cc - 2,000cc</p>
                      <p><strong>Age Range:</strong> 5-7 years old</p>
                      <p><strong>Examples:</strong> Toyota Fielder, Nissan X-Trail, Honda Fit</p>
                      <p><strong>Pros:</strong> Good balance of features and cost, reliable, versatile</p>
                      <p><strong>Cons:</strong> Higher insurance costs, moderate fuel consumption</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800">Premium: KES 3,000,000 - 5,000,000</h4>
                    <div className="text-purple-700 text-sm mt-2 space-y-2">
                      <p><strong>Typical Options:</strong> Luxury sedans, SUVs, premium features</p>
                      <p><strong>Engine Size:</strong> 2,000cc - 3,000cc</p>
                      <p><strong>Age Range:</strong> 3-5 years old</p>
                      <p><strong>Examples:</strong> Toyota Harrier, Mercedes C-Class, BMW 3 Series</p>
                      <p><strong>Pros:</strong> Latest features, comfort, status symbol</p>
                      <p><strong>Cons:</strong> High running costs, expensive repairs, rapid depreciation</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800">Luxury: KES 5,000,000+</h4>
                    <div className="text-orange-700 text-sm mt-2 space-y-2">
                      <p><strong>Typical Options:</strong> High-end luxury vehicles, sports cars, large SUVs</p>
                      <p><strong>Engine Size:</strong> 3,000cc+</p>
                      <p><strong>Age Range:</strong> 1-3 years old</p>
                      <p><strong>Examples:</strong> Land Cruiser, BMW X5, Mercedes E-Class</p>
                      <p><strong>Pros:</strong> Top-tier comfort, latest technology, prestige</p>
                      <p><strong>Cons:</strong> Very high running costs, limited service centers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hidden Costs to Consider</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Don't let these surprise costs derail your budget:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">First Year Costs:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Pre-shipment inspection:</strong> $200-500</li>
                      <li>• <strong>Shipping insurance:</strong> KES 30,000-80,000</li>
                      <li>• <strong>Port charges:</strong> KES 50,000-100,000</li>
                      <li>• <strong>Clearing agent fees:</strong> KES 25,000-50,000</li>
                      <li>• <strong>Initial repairs:</strong> KES 50,000-200,000</li>
                      <li>• <strong>New tires:</strong> KES 40,000-80,000</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Annual Costs:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Comprehensive insurance:</strong> 3-5% of vehicle value</li>
                      <li>• <strong>Regular maintenance:</strong> KES 80,000-150,000</li>
                      <li>• <strong>Fuel (15,000 km/year):</strong> KES 200,000-400,000</li>
                      <li>• <strong>Parking fees:</strong> KES 36,000-120,000</li>
                      <li>• <strong>Emergency repairs:</strong> KES 50,000-150,000</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800">Emergency Fund Recommendation:</h4>
                  <p className="text-red-700 text-sm mt-2">
                    Keep 15-20% of your vehicle's value as an emergency fund for unexpected repairs, especially for vehicles over 5 years old. Kenya's road conditions can lead to sudden maintenance needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Smart Budgeting Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Maximizing Your Budget:</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">The 50-30-20 Vehicle Rule</h4>
                    <ul className="text-blue-700 text-sm mt-2 space-y-1">
                      <li>• <strong>50%:</strong> Purchase price and import duties</li>
                      <li>• <strong>30%:</strong> First-year setup costs (repairs, registration, accessories)</li>
                      <li>• <strong>20%:</strong> Emergency fund for unexpected issues</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Age vs. Value Sweet Spot</h4>
                    <p className="text-green-700 text-sm mt-2">
                      For Kenya, 4-6 year old vehicles often provide the best balance of modern features, reliability, and affordability. Avoid vehicles over 8 years for import.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Engine Size Optimization</h4>
                    <p className="text-yellow-700 text-sm mt-2">
                      1,300cc-1,800cc engines typically offer the best balance of power and running costs for Kenya. Smaller engines struggle with highways, larger engines cost more to run.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financing Options in Kenya</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Understanding your financing options can expand your budget effectively:</p>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold">Bank Auto Loans</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• <strong>Interest:</strong> 12-18% per annum</li>
                        <li>• <strong>Term:</strong> 1-7 years</li>
                        <li>• <strong>Down payment:</strong> 20-30%</li>
                        <li>• <strong>Pros:</strong> Lower rates, longer terms</li>
                        <li>• <strong>Cons:</strong> Strict requirements, collateral needed</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold">SACCO Financing</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• <strong>Interest:</strong> 10-15% per annum</li>
                        <li>• <strong>Term:</strong> 1-5 years</li>
                        <li>• <strong>Down payment:</strong> 10-20%</li>
                        <li>• <strong>Pros:</strong> Member benefits, flexible terms</li>
                        <li>• <strong>Cons:</strong> Membership required, limited amounts</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Lease-to-Own Options</h4>
                    <p className="text-blue-700 text-sm mt-2">
                      Some dealers offer lease-to-own arrangements with 20-25% down payment and monthly payments for 2-3 years. Good for newer vehicles but typically more expensive overall.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Making the Final Decision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Decision Framework:</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">✅ You're Ready to Buy When:</h4>
                    <ul className="text-green-700 text-sm mt-2 space-y-1">
                      <li>• Total monthly costs are under 25% of your income</li>
                      <li>• You have 6 months of payments in emergency fund</li>
                      <li>• You've researched maintenance costs for your chosen model</li>
                      <li>• Insurance quotes fit your budget</li>
                      <li>• You have reliable income for 3+ years</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">❌ Wait if:</h4>
                    <ul className="text-red-700 text-sm mt-2 space-y-1">
                      <li>• Vehicle costs exceed 30% of monthly income</li>
                      <li>• You have no emergency fund</li>
                      <li>• You're considering maximum loan amounts</li>
                      <li>• You haven't researched total ownership costs</li>
                      <li>• Your income is unstable or temporary</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">Pro Tip: Total Cost of Ownership</h4>
                  <p className="text-yellow-700 text-sm mt-2">
                    Calculate the total 5-year cost (purchase + financing + insurance + fuel + maintenance + repairs). Divide by 60 months to get your true monthly cost. This reveals the real affordability picture.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4">Find Your Perfect Vehicle Match</h3>
              <p className="text-muted-foreground mb-6">
                Use our budget calculator to discover which vehicles fit your financial situation perfectly.
              </p>
              <Button asChild size="lg">
                <Link to="/afford">
                  <Search className="h-5 w-5 mr-2" />
                  Find Cars I Can Afford
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default BudgetCarFinderGuide;