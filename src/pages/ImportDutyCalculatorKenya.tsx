import React from 'react';
import VehicleImportCalculator from "@/components/VehicleImportCalculator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";
import FAQSchema from "@/components/FAQSchema";
import InternalLinkCTA from "@/components/InternalLinkCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, BookOpen, TrendingUp } from "lucide-react";

const ImportDutyCalculatorKenya = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Import Duty Calculator Kenya - Calculate KRA Car Tax (2025)"
        description="Calculate import duty in Kenya using our free KRA calculator. Get instant estimates for car import costs, VAT, excise duty and CRSP values."
        keywords="import duty calculator kenya, kra calculator, car import duty kenya, kenya customs calculator, crsp calculator"
        canonicalUrl="https://garimoto.co.ke/import-duty-calculator-kenya"
        type="website"
      />

      {/* Enhanced FAQ Schema for this specific page */}
      <FAQSchema faqs={[
        {
          question: "How do I calculate import duty in Kenya?",
          answer: "Import duty in Kenya is calculated using CRSP (Current Retail Selling Price) with age-based depreciation. Apply Import Duty (25%), Excise Duty (varies by engine), IDF (2.25%), RDL (2%), and VAT (16%) in sequence."
        },
        {
          question: "What is CRSP in Kenya import duty calculation?",
          answer: "CRSP (Current Retail Selling Price) is the base value set by KRA for each vehicle make and model. It's used as the foundation for calculating all import taxes and duties."
        },
        {
          question: "Is depreciation applied to CRSP automatically?",
          answer: "Yes, KRA applies automatic age-based depreciation: 5% per year for first 8 years, then 10% per year thereafter, with maximum 70% depreciation based on first registration year."
        },
        {
          question: "Can I calculate import duty for any car model?",
          answer: "Yes, our calculator covers all vehicle makes and models in the KRA CRSP database, from Toyota and Nissan to luxury brands like BMW and Mercedes."
        }
      ]} />

      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Import Duty Calculator Kenya
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Calculate your car import duty in Kenya instantly using official KRA CRSP values. Get accurate estimates for import duty, VAT, excise tax, and total landing costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Calculator */}
          <div className="lg:col-span-3">
            <VehicleImportCalculator />
          </div>

          {/* Sidebar with Related Links */}
          <div className="lg:col-span-1 space-y-4">
            <InternalLinkCTA
              type="guide"
              title="How Import Duty Works"
              description="Learn the step-by-step process of calculating KRA import duty"
              link="/blog/calculate-car-import-duty-kenya-2025"
            />
            
            <InternalLinkCTA
              type="blog"
              title="Understanding CRSP"
              description="What is CRSP and how KRA uses it to value your car"
              link="/blog/what-is-crsp"
            />

            <InternalLinkCTA
              type="calculator"
              title="Compare Import Costs"
              description="Compare duty costs between multiple vehicles"
              link="/compare"
            />

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Import Duty Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Import Duty Rate:</span>
                  <span className="font-semibold">25%</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT Rate:</span>
                  <span className="font-semibold">16%</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Depreciation:</span>
                  <span className="font-semibold">70%</span>
                </div>
                <div className="flex justify-between">
                  <span>Age Limit:</span>
                  <span className="font-semibold">8 years</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">How Our Import Duty Calculator Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Select Vehicle</h4>
                  <p className="text-sm text-muted-foreground">Choose make, model, and year from KRA CRSP database</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Enter Details</h4>
                  <p className="text-sm text-muted-foreground">Add engine size, fuel type, and registration year</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Auto Calculate</h4>
                  <p className="text-sm text-muted-foreground">System applies CRSP, depreciation, and all taxes</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Get Results</h4>
                  <p className="text-sm text-muted-foreground">View detailed breakdown and total import cost</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ImportDutyCalculatorKenya;