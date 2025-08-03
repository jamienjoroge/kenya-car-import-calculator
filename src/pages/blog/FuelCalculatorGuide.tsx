import React from "react";
import { ArrowLeft, Fuel, Calculator, MapPin, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";

const FuelCalculatorGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Free Fuel Calculator Kenya 2025: Track Your Car's Consumption & Trip Costs"
        description="Calculate your vehicle's fuel consumption and plan trip costs in Kenya. Free fuel efficiency calculator with real Kenya fuel prices. Optimize your car's fuel economy and save money."
        keywords="fuel calculator Kenya, fuel consumption calculator, car fuel efficiency, trip cost calculator, fuel prices Kenya, vehicle fuel economy"
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
              Free Fuel Calculator Kenya 2025: Track Your Car's Consumption & Trip Costs
            </h1>
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="secondary">
                <Fuel className="h-4 w-4 mr-1" />
                Fuel Efficiency
              </Badge>
              <Badge variant="secondary">
                <Calculator className="h-4 w-4 mr-1" />
                Free Calculator
              </Badge>
              <Badge variant="secondary">
                <MapPin className="h-4 w-4 mr-1" />
                Kenya Routes
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Master your vehicle's fuel consumption with our comprehensive guide to calculating fuel efficiency, planning trip costs, and optimizing your car's performance on Kenyan roads.
            </p>
          </header>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fuel className="h-5 w-5" />
                  Why Track Fuel Consumption in Kenya?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  With fuel prices in Kenya fluctuating and traffic conditions affecting consumption, tracking your vehicle's fuel efficiency is more important than ever. Here's why every Kenyan driver should monitor their fuel consumption:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Budget Planning:</strong> Fuel costs can represent 20-30% of vehicle ownership expenses</li>
                  <li><strong>Vehicle Health:</strong> Sudden changes in consumption indicate potential mechanical issues</li>
                  <li><strong>Route Optimization:</strong> Identify the most fuel-efficient routes for your daily commute</li>
                  <li><strong>Cost Comparison:</strong> Compare running costs between different vehicles</li>
                  <li><strong>Environmental Impact:</strong> Reduce your carbon footprint by optimizing fuel use</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Use Our Fuel Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Step-by-Step Process:</h3>
                <ol className="list-decimal ml-6 space-y-3">
                  <li>
                    <strong>Fill your tank completely</strong> and note your odometer reading
                  </li>
                  <li>
                    <strong>Drive normally</strong> until you need to refuel (ideally 200+ km for accuracy)
                  </li>
                  <li>
                    <strong>Refill completely</strong> and note the new odometer reading and fuel amount
                  </li>
                  <li>
                    <strong>Enter the data</strong> in our calculator:
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Distance traveled (new reading - old reading)</li>
                      <li>Fuel added (from your receipt)</li>
                      <li>Current fuel price per liter</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Get instant results</strong> including KM per liter and cost per KM
                  </li>
                </ol>
                
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-blue-800 font-medium">💡 Pro Tip:</p>
                  <p className="text-blue-700">For the most accurate results, calculate over several fill-ups and average the results. This accounts for variations in driving conditions.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Understanding Your Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Fuel Efficiency Ratings for Kenya:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                      <div className="font-semibold text-green-800">Excellent (15+ KM/L)</div>
                      <div className="text-green-700 text-sm">Very fuel efficient - Hybrid vehicles, small engines</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                      <div className="font-semibold text-blue-800">Good (12-15 KM/L)</div>
                      <div className="text-blue-700 text-sm">Above average - Modern compact cars</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                      <div className="font-semibold text-orange-800">Average (9-12 KM/L)</div>
                      <div className="text-orange-700 text-sm">Standard efficiency - Mid-size vehicles</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">Poor (6-9 KM/L)</div>
                      <div className="text-red-700 text-sm">Below average - Large engines, SUVs</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Popular Kenya Routes & Trip Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our calculator includes quick-select options for popular Kenyan routes:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Long Distance Routes:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Nairobi to Mombasa:</strong> 480 km</li>
                      <li>• <strong>Nairobi to Kisumu:</strong> 350 km</li>
                      <li>• <strong>Nairobi to Eldoret:</strong> 310 km</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Regional Routes:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Nairobi to Nakuru:</strong> 160 km</li>
                      <li>• <strong>Mombasa to Malindi:</strong> 120 km</li>
                      <li>• <strong>Nairobi to Machakos:</strong> 65 km</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Trip Planning Tips:</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Add 10-15% to calculated fuel costs for unexpected detours</li>
                    <li>• Factor in return journey costs</li>
                    <li>• Consider fuel price variations between cities</li>
                    <li>• Account for traffic delays that increase consumption</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fuel Saving Tips for Kenya</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Driving Techniques:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Maintain steady speeds (80-90 km/h optimal on highways)</li>
                      <li>• Avoid heavy traffic hours in Nairobi (7-9 AM, 5-7 PM)</li>
                      <li>• Use engine braking on downhills</li>
                      <li>• Anticipate traffic lights and stops</li>
                      <li>• Remove excess weight from your vehicle</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Vehicle Maintenance:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Keep tires properly inflated (check monthly)</li>
                      <li>• Regular engine servicing and oil changes</li>
                      <li>• Clean or replace air filters regularly (dust in Kenya)</li>
                      <li>• Use air conditioning wisely on highways</li>
                      <li>• Plan routes to avoid traffic congestion</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Fuel Budgeting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our calculator estimates monthly fuel costs based on 2,000 km average monthly driving. Here's how to budget effectively:</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Average Monthly Driving by Category:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>City Commuter:</strong> 1,500-2,000 km/month</li>
                      <li>• <strong>Business User:</strong> 2,500-3,500 km/month</li>
                      <li>• <strong>Weekend Driver:</strong> 800-1,200 km/month</li>
                      <li>• <strong>Taxi/Uber:</strong> 4,000-6,000 km/month</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Budgeting Formula:</h4>
                    <p className="text-blue-700 text-sm">
                      <strong>Monthly Fuel Cost = (Monthly KM ÷ Vehicle KM/L) × Current Fuel Price</strong>
                    </p>
                    <p className="text-blue-600 text-xs mt-2">
                      Example: (2,000 km ÷ 12 KM/L) × KES 180 = KES 30,000/month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Calculate Your Fuel Consumption?</h3>
              <p className="text-muted-foreground mb-6">
                Use our free fuel calculator to track your vehicle's efficiency and plan your travel costs.
              </p>
              <Button asChild size="lg">
                <Link to="/fuel-calculator">
                  <Calculator className="h-5 w-5 mr-2" />
                  Try the Fuel Calculator
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

export default FuelCalculatorGuide;