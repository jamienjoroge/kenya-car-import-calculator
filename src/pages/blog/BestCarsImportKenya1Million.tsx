import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Fuel, Shield, TrendingUp, Calculator } from 'lucide-react';

const BestCarsImportKenya1Million = () => {
  const cars = [
    {
      make: "Toyota Vitz",
      year: "2012-2014",
      engine: "1.0L - 1.3L",
      estimatedDuty: "KES 180,000 - 280,000",
      totalCost: "KES 650,000 - 850,000",
      fuelConsumption: "20-25 km/l",
      reliability: 5,
      features: ["Compact & Economic", "Easy to maintain", "High resale value", "Parts readily available"],
      pros: ["Excellent fuel economy", "Low maintenance costs", "Perfect for city driving"],
      cons: ["Limited space", "Not ideal for long trips"]
    },
    {
      make: "Honda Fit",
      year: "2010-2013",
      engine: "1.3L - 1.5L",
      estimatedDuty: "KES 200,000 - 320,000",
      totalCost: "KES 700,000 - 950,000",
      fuelConsumption: "18-22 km/l",
      reliability: 5,
      features: ["Spacious interior", "Hybrid option available", "Magic seats", "CVT transmission"],
      pros: ["Versatile seating", "Good fuel economy", "Reliable engine"],
      cons: ["CVT maintenance can be costly", "Higher initial cost"]
    },
    {
      make: "Nissan Note",
      year: "2012-2015",
      engine: "1.2L",
      estimatedDuty: "KES 190,000 - 300,000",
      totalCost: "KES 680,000 - 900,000",
      fuelConsumption: "19-23 km/l",
      reliability: 4,
      features: ["Roomy cabin", "Around View Monitor", "CVT transmission", "Eco mode"],
      pros: ["Comfortable ride", "Advanced safety features", "Good interior space"],
      cons: ["Parts availability", "CVT concerns"]
    },
    {
      make: "Toyota Passo",
      year: "2010-2014",
      engine: "1.0L",
      estimatedDuty: "KES 170,000 - 260,000",
      totalCost: "KES 600,000 - 800,000",
      fuelConsumption: "22-26 km/l",
      reliability: 5,
      features: ["Ultra-compact", "Excellent fuel economy", "Easy parking", "Low running costs"],
      pros: ["Cheapest to run", "Perfect for beginners", "Easy to park"],
      cons: ["Very limited space", "Basic features"]
    },
    {
      make: "Mazda Demio",
      year: "2011-2014",
      engine: "1.3L - 1.5L",
      estimatedDuty: "KES 200,000 - 310,000",
      totalCost: "KES 720,000 - 920,000",
      fuelConsumption: "18-21 km/l",
      reliability: 4,
      features: ["Sporty design", "SkyActiv technology", "Premium interior", "6-speed manual/auto"],
      pros: ["Fun to drive", "Stylish appearance", "Good build quality"],
      cons: ["Parts more expensive", "Lower fuel economy vs competitors"]
    },
    {
      make: "Suzuki Swift",
      year: "2011-2015",
      engine: "1.2L - 1.4L",
      estimatedDuty: "KES 185,000 - 290,000",
      totalCost: "KES 670,000 - 870,000",
      fuelConsumption: "19-24 km/l",
      reliability: 4,
      features: ["Lightweight design", "Agile handling", "Compact size", "Manual/CVT options"],
      pros: ["Great handling", "Affordable maintenance", "Good fuel economy"],
      cons: ["Limited rear space", "Basic interior"]
    }
  ];

  const budgetTips = [
    {
      title: "FOB Price Research",
      description: "Check multiple Japanese auction sites like USS, TAA, and SBT for realistic FOB prices",
      amount: "Save 10-15%"
    },
    {
      title: "Shipping Optimization",
      description: "Choose shared container shipping during off-peak seasons",
      amount: "Save $200-400"
    },
    {
      title: "Clearing Agent Selection",
      description: "Compare at least 3 clearing agents for the best rates and service",
      amount: "Save KES 5,000-10,000"
    },
    {
      title: "Insurance Shopping",
      description: "Get quotes from multiple insurance companies before clearing",
      amount: "Save KES 3,000-8,000"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOPermalinks 
        title="Best Cars to Import to Kenya Under 1 Million KES (2025 Guide) | GariMoto"
        description="🚗 Discover the top 6 cars to import to Kenya under KES 1 million in 2025. Complete cost breakdown, fuel economy, reliability ratings & money-saving tips included."
        keywords="best cars import Kenya under 1 million, cheap cars import Kenya 2025, Toyota Vitz import cost, Honda Fit Kenya, budget car import Kenya"
        canonicalUrl="https://garimoto.co.ke/blog/best-cars-import-kenya-1-million"
        type="article"
      />
      
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Budget Guide</Badge>
              <Badge variant="outline">Under 1M</Badge>
              <Badge variant="outline">2025 Update</Badge>
            </div>
            <CardTitle className="text-3xl font-bold">
              Best Cars to Import to Kenya Under KES 1 Million (2025)
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Published: August 4, 2025</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>By GariMoto Team</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3 text-green-800">💰 Budget-Friendly Import Guide</h2>
              <p className="text-green-700">
                With careful selection and smart importing strategies, you can own a reliable imported car for under KES 1 million total cost. This guide covers the best options considering import duties, fuel economy, maintenance costs, and resale value.
              </p>
            </div>

            {/* Quick Calculator CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Calculator className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-800">Calculate Before You Buy</h3>
              </div>
              <p className="text-blue-700 mb-4">
                Use our calculator to get exact costs for any specific vehicle before making your decision.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/">Calculate Import Costs →</Link>
              </Button>
            </div>

            {/* Top Cars List */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Top 6 Cars Under KES 1 Million</h2>
              <div className="grid gap-6">
                {cars.map((car, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl flex items-center gap-2">
                            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </span>
                            {car.make}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline">{car.year}</Badge>
                            <Badge variant="outline">{car.engine}</Badge>
                            <div className="flex items-center gap-1">
                              {[...Array(car.reliability)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">{car.totalCost}</div>
                          <div className="text-sm text-muted-foreground">Total Cost</div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-blue-500" />
                          <div>
                            <div className="text-sm font-medium">Import Duty</div>
                            <div className="text-sm text-muted-foreground">{car.estimatedDuty}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="h-4 w-4 text-green-500" />
                          <div>
                            <div className="text-sm font-medium">Fuel Economy</div>
                            <div className="text-sm text-muted-foreground">{car.fuelConsumption}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-purple-500" />
                          <div>
                            <div className="text-sm font-medium">Reliability</div>
                            <div className="text-sm text-muted-foreground">{car.reliability}/5 stars</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {car.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-green-600 mb-1">Pros:</h5>
                          <ul className="text-sm space-y-1">
                            {car.pros.map((pro, proIndex) => (
                              <li key={proIndex}>• {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-600 mb-1">Cons:</h5>
                          <ul className="text-sm space-y-1">
                            {car.cons.map((con, conIndex) => (
                              <li key={conIndex}>• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Money-Saving Tips */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Money-Saving Tips for Budget Imports</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {budgetTips.map((tip, index) => (
                  <Card key={index} className="border-green-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{tip.title}</h4>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {tip.amount}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cost Breakdown Example */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Example: Toyota Vitz 2013 (1.0L) Cost Breakdown</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Purchase & Shipping</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>FOB Price (Japan)</span>
                      <span>$3,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping to Mombasa</span>
                      <span>$800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insurance</span>
                      <span>$150</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-2">
                      <span>CIF Value</span>
                      <span>$4,450 (KES 667,500)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Kenya Duties & Fees</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Import Duty (25%)</span>
                      <span>KES 166,875</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Excise Duty (20%)</span>
                      <span>KES 133,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>VAT (16%)</span>
                      <span>KES 155,100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Other Fees</span>
                      <span>KES 25,000</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-2 text-green-600">
                      <span>Total Cost</span>
                      <span>KES 1,147,975</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> This example exceeds 1M due to current exchange rates. Consider older models or smaller engines to stay within budget.
                </p>
              </div>
            </div>

            {/* Related Tools */}
            <div className="grid md:grid-cols-3 gap-4 pt-8 border-t">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Calculator className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <h4 className="font-semibold mb-2">Budget Calculator</h4>
                  <p className="text-sm text-muted-foreground mb-3">Find cars in your budget</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/afford">Find Cars</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-green-600" />
                  <h4 className="font-semibold mb-2">Compare Costs</h4>
                  <p className="text-sm text-muted-foreground mb-3">Side-by-side comparison</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/compare">Compare Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                  <h4 className="font-semibold mb-2">Popular Cars</h4>
                  <p className="text-sm text-muted-foreground mb-3">Trending imports</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/popular">View Trends</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default BestCarsImportKenya1Million;