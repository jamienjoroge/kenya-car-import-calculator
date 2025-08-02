
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calculator, CheckCircle, TrendingUp, Clock, Shield, Users, ArrowRight, Car, DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Kenya Import Duty Calculator 2025 – CRSP Rates & Car Import Costs"
        description="Calculate Kenya car import duty instantly using official KRA CRSP values. Get updated 2025 rates for any make or model and estimate your total landing cost today."
        keywords="Kenya import duty calculator, KRA CRSP rates 2025, car import costs Kenya, vehicle import tax calculator, Kenya customs duty, import duty rates"
        canonicalUrl="https://garimoto.co.ke/landing"
      />
      
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            🚗 Kenya Import Duty Calculator 2025 – Updated CRSP Rates
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Get accurate, real-time estimates of your car import costs using the official KRA Customs Retail Selling Price (CRSP) schedule.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Official KRA Data
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              Instant Results
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              100% FREE
            </Badge>
          </div>

          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link to="/">
              🔹 Calculate Your Duty Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Section 1: How KRA Calculates Import Duty */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">How KRA Calculates Import Duty</CardTitle>
            <CardDescription className="text-lg">
              Importing a car into Kenya involves several taxes and fees determined by the Kenya Revenue Authority (KRA). 
              The main factor is the Customs Retail Selling Price (CRSP) – a value published annually by KRA for all vehicle makes and models.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-bold mb-6 text-center">Components of Car Import Duty:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">Import Duty (25%)</h4>
                <p className="text-blue-700">Charged on the CRSP value</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Excise Duty (20%)</h4>
                <p className="text-green-700">Based on engine capacity and CRSP</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-2">VAT (16%)</h4>
                <p className="text-orange-700">Applied on CRSP + Import + Excise</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-2">IDF Fee (3.5%)</h4>
                <p className="text-purple-700">Import Declaration Fee</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="font-bold text-pink-800 mb-2">RDL Fee (2%)</h4>
                <p className="text-pink-700">Railway Development Levy</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-800 mb-2">Depreciation</h4>
                <p className="text-yellow-700">Reduces value based on age</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-medium">
                ✅ Note: Depreciation is factored in based on the vehicle's age, lowering its taxable value.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 2: Step-by-Step Guide */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Step-by-Step Guide to Estimating Costs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold mb-2">Find your car's CRSP value</h4>
                    <p className="text-muted-foreground">Garimoto pulls the latest KRA list automatically</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold mb-2">Enter the year of manufacture</h4>
                    <p className="text-muted-foreground">Adjust for depreciation based on age</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold mb-2">Input engine size and fuel type</h4>
                    <p className="text-muted-foreground">For accurate excise duty calculation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold mb-2">Get your estimated total</h4>
                    <p className="text-muted-foreground">Duty, fees, and overall import cost to Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 3: Why Use Garimoto.co.ke */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-green-50">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Why Use Garimoto.co.ke?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2 text-green-800">Up-to-date CRSP Data</h4>
                <p className="text-green-700">Matches the latest KRA publication</p>
              </div>
              <div className="text-center">
                <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2 text-blue-800">Accurate Tax Formula</h4>
                <p className="text-blue-700">Reflects current regulations</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2 text-orange-800">Instant Results</h4>
                <p className="text-orange-700">No waiting, no manual calculations</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2 text-purple-800">Kenya-Focused</h4>
                <p className="text-purple-700">Built for local car buyers and importers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 4: FAQ */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Frequently Asked Questions (FAQ)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-bold text-lg mb-2">Q1: How much is import tax on cars in Kenya?</h4>
                <p className="text-muted-foreground">Import tax is typically 25% of the CRSP, but you must also add excise duty, VAT, IDF, and RDL fees for the final cost.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-bold text-lg mb-2">Q2: What is CRSP value?</h4>
                <p className="text-muted-foreground">CRSP (Customs Retail Selling Price) is the base price set by KRA for every make and model of car, used to calculate tax.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="font-bold text-lg mb-2">Q3: How does depreciation affect car tax in Kenya?</h4>
                <p className="text-muted-foreground">The older the car, the lower the CRSP value after depreciation deductions, resulting in lower tax.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="font-bold text-lg mb-2">Q4: Can I import cars older than 8 years?</h4>
                <p className="text-muted-foreground">No. Kenyan law prohibits the import of vehicles older than 8 years from the year of registration.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 5: Final CTA */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Card className="text-center bg-gradient-to-r from-primary/10 to-blue-100">
          <CardContent className="py-12">
            <Car className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Try the Calculator Now</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop guessing your import costs – get an accurate estimate in seconds.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/">
                🔹 Launch Import Duty Calculator
                <Calculator className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <div className="mt-8 p-4 bg-white/50 rounded-lg max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-2">📱 Share with friends:</p>
              <p className="text-sm bg-green-100 p-3 rounded italic">
                "Just found this free tool to calculate Kenya car import duty for 2025 🚗 → garimoto.co.ke – check your costs instantly!"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
