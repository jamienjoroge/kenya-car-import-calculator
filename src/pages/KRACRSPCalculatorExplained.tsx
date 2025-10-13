import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";
import FAQSchema from "@/components/FAQSchema";
import InternalLinkCTA from "@/components/InternalLinkCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, FileText, TrendingDown, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const KRACRSPCalculatorExplained = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="KRA CRSP Calculator Explained – Car Import Costs 2025"
        description="Updated daily with latest KRA values. Understand how KRA CRSP calculator works for car imports in Kenya. Learn CRSP values, depreciation rates, and duty calculation."
        keywords="kra crsp calculator, crsp calculator kenya, kra crsp values, car import crsp, kenya crsp calculator, september 2025"
        canonicalUrl="https://garimoto.co.ke/kra-crsp-calculator-explained"
        type="article"
      />

      {/* FAQ Schema for CRSP-specific questions */}
      <FAQSchema faqs={[
        {
          question: "What is KRA CRSP calculator?",
          answer: "KRA CRSP calculator is a tool that uses Current Retail Selling Price values published by Kenya Revenue Authority to calculate import duty for vehicles. It applies depreciation and all applicable taxes automatically."
        },
        {
          question: "How does CRSP depreciation work in Kenya?",
          answer: "CRSP depreciation in Kenya follows a fixed schedule: 5% per year for the first 8 years, then 10% per year thereafter, with a maximum depreciation of 70% based on the year of first registration."
        },
        {
          question: "Where does KRA get CRSP values?",
          answer: "KRA publishes official CRSP values annually in the Customs and Excise Tariff. These values are based on market research and represent the retail selling price of vehicles in Kenya."
        },
        {
          question: "Can CRSP values change during the year?",
          answer: "Yes, KRA can update CRSP values through gazette notices or court orders. Recent changes include the halted 2025 CRSP schedule due to court intervention."
        }
      ]} />

      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              ✅ Updated September 2025
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            KRA CRSP Calculator Explained
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Understanding how Kenya Revenue Authority uses CRSP values to calculate car import costs
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary">September 2025</Badge>
            <Badge variant="secondary">Official KRA Data</Badge>
            <Badge variant="secondary">Complete Guide</Badge>
          </div>
        </div>

        {/* What is CRSP Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6" />
              What is CRSP?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              <strong>CRSP (Current Retail Selling Price)</strong> is the foundation of Kenya's car import duty calculation system. 
              It represents the estimated retail selling price of a vehicle in the Kenyan market, as determined by the Kenya Revenue Authority.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Key CRSP Facts:</h4>
              <ul className="list-disc list-inside space-y-1 text-blue-700">
                <li>Published annually by KRA in the Customs and Excise Tariff</li>
                <li>Covers all major vehicle makes and models</li>
                <li>Used as the base value for calculating all import taxes</li>
                <li>Subject to age-based depreciation before tax calculation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How CRSP Calculator Works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              How the CRSP Calculator Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Step 1: CRSP Lookup</h4>
                  <p className="text-sm text-muted-foreground">
                    System finds the base CRSP value for your specific vehicle make, model, and engine size from KRA's official database.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold mb-2">Step 2: Apply Depreciation</h4>
                  <p className="text-sm text-muted-foreground">
                    Age-based depreciation is calculated using KRA's standard rates to reduce the taxable value.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold mb-2">Step 3: Calculate Taxes</h4>
                  <p className="text-sm text-muted-foreground">
                    All import taxes (duty, excise, VAT, IDF, RDL) are calculated in sequence using the depreciated CRSP value.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold mb-2">Step 4: Total Cost</h4>
                  <p className="text-sm text-muted-foreground">
                    Final import cost includes all taxes plus the depreciated CRSP value for your total landing cost.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CRSP Depreciation Explained */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-6 w-6" />
              CRSP Depreciation Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                KRA applies automatic depreciation to CRSP values based on the vehicle's age (calculated from year of first registration):
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Years 1-8:</h4>
                  <p className="text-green-700">5% depreciation per year</p>
                  <p className="text-sm text-green-600 mt-1">Maximum 40% depreciation</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Years 9+:</h4>
                  <p className="text-orange-700">10% depreciation per year</p>
                  <p className="text-sm text-orange-600 mt-1">Up to 70% total depreciation</p>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Important Note:</h4>
                    <p className="text-yellow-700 text-sm">
                      Depreciation is based on year of <strong>first registration</strong>, not year of manufacture. 
                      The 8-year import age limit also applies to first registration year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CRSP vs Market Value */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>CRSP vs Market Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Many importers wonder why CRSP values sometimes differ from actual market prices. Here's what you need to know:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    CRSP Advantages
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Standardized across all imports</li>
                    <li>Transparent and predictable</li>
                    <li>Updated regularly by KRA</li>
                    <li>Includes depreciation benefits</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    Market Considerations
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>May differ from auction prices</li>
                    <li>Doesn't reflect condition variations</li>
                    <li>Based on Kenyan market research</li>
                    <li>Subject to periodic updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <InternalLinkCTA
            type="calculator"
            title="Try the CRSP Calculator"
            description="Calculate your exact import duty using official KRA CRSP values"
            link="/import-duty-calculator-kenya"
          />
          
          <InternalLinkCTA
            type="guide"
            title="Complete Import Guide"
            description="Step-by-step guide to importing cars in Kenya"
            link="/blog/calculate-car-import-duty-kenya-2025"
          />
        </div>

        {/* Get Started CTA */}
        <Card className="text-center bg-gradient-to-r from-primary/10 to-blue-100">
          <CardContent className="py-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Calculate Your Import Duty?</h3>
            <p className="text-muted-foreground mb-6">
              Use our free CRSP calculator to get instant, accurate estimates for your vehicle import costs.
            </p>
            <Button size="lg" asChild>
              <Link to="/import-duty-calculator-kenya">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Import Duty Now
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default KRACRSPCalculatorExplained;