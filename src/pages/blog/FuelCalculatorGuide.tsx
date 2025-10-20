import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator, TrendingDown, MapPin, Fuel } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SEOPermalinks from "@/components/SEOPermalinks";
import { Badge } from "@/components/ui/badge";

const FuelCalculatorGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Fuel Prices Kenya October 2025: Best Routes for Fuel Efficiency | GariMoto"
        description="Current Kenya fuel prices by county (Oct 2025): Nairobi KES 180/L. Calculate your car's fuel consumption + save KES 10K/month with our efficiency guide."
        keywords="fuel prices Kenya October 2025, fuel consumption calculator, fuel efficiency Kenya"
        canonicalUrl="https://garimoto.co.ke/blog/fuel-calculator-guide"
      />
      
      <Navigation />
      <BreadcrumbNav 
        items={[
          { label: "Blog", path: "/blog" },
          { label: "Fuel Calculator Guide", path: "/blog/fuel-calculator-guide" }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog"><ArrowLeft className="h-4 w-4 mr-2" />Back to Blog</Link>
        </Button>

        <h1 className="text-4xl font-bold mb-4 text-primary">Fuel Prices Kenya October 2025: Complete Guide to Fuel Efficiency</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Current fuel prices by county and how to calculate your vehicle's fuel efficiency to save money.
        </p>

        <div className="flex gap-2 mb-8 flex-wrap">
          <Badge variant="secondary">Updated October 2025</Badge>
          <Badge variant="secondary">5 min read</Badge>
        </div>

        <Card className="p-6 mb-8 bg-blue-50 border-blue-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Calculate Your Fuel Consumption</h3>
              <p className="text-muted-foreground">Track your vehicle's efficiency and plan trip costs</p>
            </div>
            <Button asChild size="lg">
              <Link to="/fuel-calculator">
                <Calculator className="h-5 w-5 mr-2" />
                Open Fuel Calculator →
              </Link>
            </Button>
          </div>
        </Card>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Fuel className="h-6 w-6 text-primary" />
              Current Fuel Prices in Kenya (October 2025)
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Fuel Prices by County</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Major Cities</h4>
                    <ul className="space-y-2">
                      <li>🏙️ <strong>Nairobi:</strong> KES 180/litre</li>
                      <li>🌊 <strong>Mombasa:</strong> KES 178/litre</li>
                      <li>🌾 <strong>Kisumu:</strong> KES 182/litre</li>
                      <li>🏔️ <strong>Nakuru:</strong> KES 181/litre</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Other Regions</h4>
                    <ul className="space-y-2">
                      <li>🌳 <strong>Eldoret:</strong> KES 183/litre</li>
                      <li>🏖️ <strong>Malindi:</strong> KES 179/litre</li>
                      <li>⛰️ <strong>Nyeri:</strong> KES 182/litre</li>
                      <li>🌄 <strong>Kitale:</strong> KES 185/litre</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Prices vary by station and may change based on EPRA monthly reviews
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="h-6 w-6 text-primary" />
              How to Calculate Your Fuel Consumption
            </h2>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <ol className="space-y-4">
                  <li>
                    <strong>Step 1: Fill Your Tank</strong>
                    <p className="text-muted-foreground">Fill your tank completely and note the odometer reading</p>
                  </li>
                  <li>
                    <strong>Step 2: Drive Normally</strong>
                    <p className="text-muted-foreground">Drive as you normally would until you need to refuel</p>
                  </li>
                  <li>
                    <strong>Step 3: Refuel and Record</strong>
                    <p className="text-muted-foreground">Note the new odometer reading and litres added</p>
                  </li>
                  <li>
                    <strong>Step 4: Calculate</strong>
                    <p className="text-muted-foreground">Distance driven ÷ Litres used = KM per litre</p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingDown className="h-6 w-6 text-primary" />
              Top 10 Fuel-Saving Tips for Kenya
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Driving Habits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Maintain steady speed (80-90 km/h optimal)</li>
                    <li>✅ Avoid heavy traffic hours in Nairobi</li>
                    <li>✅ Anticipate stops to avoid hard braking</li>
                    <li>✅ Use cruise control on highways</li>
                    <li>✅ Avoid aggressive acceleration</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Vehicle Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Regular engine servicing</li>
                    <li>✅ Check tire pressure monthly</li>
                    <li>✅ Replace air filter regularly (dust)</li>
                    <li>✅ Remove excess weight</li>
                    <li>✅ Use recommended engine oil</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              Popular Routes Fuel Cost Estimates
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                    <div>
                      <strong>Nairobi to Mombasa</strong>
                      <p className="text-sm text-muted-foreground">480 km</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">KES 8,640</div>
                      <p className="text-xs text-muted-foreground">@ 10 km/L</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                    <div>
                      <strong>Nairobi to Kisumu</strong>
                      <p className="text-sm text-muted-foreground">350 km</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">KES 6,370</div>
                      <p className="text-xs text-muted-foreground">@ 10 km/L</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                    <div>
                      <strong>Nairobi to Nakuru</strong>
                      <p className="text-sm text-muted-foreground">160 km</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">KES 2,896</div>
                      <p className="text-xs text-muted-foreground">@ 10 km/L</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                    <div>
                      <strong>Nairobi to Eldoret</strong>
                      <p className="text-sm text-muted-foreground">310 km</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">KES 5,673</div>
                      <p className="text-xs text-muted-foreground">@ 10 km/L</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Calculations based on average fuel consumption of 10 km/L
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Understanding Fuel Efficiency Ratings</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded">
                    <strong className="text-green-700">Excellent (15+ km/L):</strong>
                    <p className="text-sm text-green-600">Hybrid vehicles, small efficient cars</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                    <strong className="text-blue-700">Good (12-15 km/L):</strong>
                    <p className="text-sm text-blue-600">Most modern sedans and compact SUVs</p>
                  </div>
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded">
                    <strong className="text-orange-700">Average (9-12 km/L):</strong>
                    <p className="text-sm text-orange-600">Larger sedans, mid-size SUVs</p>
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded">
                    <strong className="text-red-700">Poor (Below 9 km/L):</strong>
                    <p className="text-sm text-red-600">Large SUVs, old vehicles, performance cars</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Monthly Fuel Budget Planning</h2>
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="pt-6">
                <p className="mb-4">Based on average Kenyan driving patterns (2,000 km/month):</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded">
                    <div className="text-2xl font-bold text-purple-600">KES 24,000</div>
                    <div className="text-sm text-muted-foreground">@ 15 km/L (Efficient)</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded">
                    <div className="text-2xl font-bold text-purple-600">KES 30,000</div>
                    <div className="text-sm text-muted-foreground">@ 12 km/L (Average)</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded">
                    <div className="text-2xl font-bold text-purple-600">KES 40,000</div>
                    <div className="text-sm text-muted-foreground">@ 9 km/L (Poor)</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  💡 Improving from 9 to 12 km/L saves KES 10,000/month!
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is good fuel consumption in Kenya?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>For Kenya's driving conditions, 12+ km/L is considered good. City driving typically gets 8-10 km/L, while highway driving can achieve 12-15 km/L.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How often do fuel prices change in Kenya?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>EPRA reviews fuel prices monthly, typically announcing changes on the 14th of each month. Prices can go up or down based on global oil prices and exchange rates.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Which fuel stations are cheapest in Kenya?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Prices vary slightly between stations. Generally, stations in major cities like Nairobi and Mombasa are slightly cheaper than rural areas. Check our fuel calculator for current prices.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-center">Ready to Track Your Fuel Efficiency?</h3>
              <p className="text-center mb-6 text-muted-foreground">
                Use our free fuel calculator to track your vehicle's consumption and plan trip costs
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg">
                  <Link to="/fuel-calculator">
                    <Calculator className="h-5 w-5 mr-2" />
                    Calculate Fuel Consumption Now
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default FuelCalculatorGuide;
