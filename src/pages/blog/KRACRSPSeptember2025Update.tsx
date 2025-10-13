import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";
import FAQSchema from "@/components/FAQSchema";
import InternalLinkCTA from "@/components/InternalLinkCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const KRACRSPSeptember2025Update = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="KRA CRSP September 2025 Update – Import Duty Changes Kenya"
        description="Latest KRA CRSP updates September 2025. New import duty rates, court rulings impact, and what it means for car importers in Kenya."
        keywords="kra crsp september 2025, kra duty calculator 2025, kenya import duty update, crsp rates september 2025"
        canonicalUrl="https://garimoto.co.ke/blog/kra-crsp-september-2025-update"
        type="article"
      />

      <FAQSchema faqs={[
        {
          question: "What changed in KRA CRSP rates in September 2025?",
          answer: "KRA made minor adjustments to CRSP values for select vehicle models in September 2025, primarily affecting luxury vehicles and commercial trucks. The 8-year rule and depreciation schedule remain unchanged."
        },
        {
          question: "How do September 2025 CRSP updates affect my import costs?",
          answer: "Most passenger vehicles see minimal impact (0-5% change). However, importers should recalculate costs using the updated CRSP calculator to ensure accurate duty estimates."
        },
        {
          question: "When did the September 2025 KRA CRSP changes take effect?",
          answer: "The updated CRSP rates became effective September 15, 2025, for all vehicles cleared through Kenya ports from that date forward."
        }
      ]} />

      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              September 2025 Update
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            KRA CRSP September 2025 Update
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Latest changes to Kenya Revenue Authority CRSP rates and their impact on car import costs
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              September 23, 2025
            </div>
            <span>•</span>
            <span>Updated CRSP Rates</span>
          </div>
        </div>

        {/* Key Changes Summary */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <CheckCircle className="h-6 w-6" />
              September 2025 Key Changes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white p-3 rounded mb-3">
              <p className="text-sm text-green-700">
                <strong>Last Updated:</strong> September 23, 2025 • <strong>Status:</strong> Active rates in use
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-800">What Changed:</h4>
                <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                  <li>Minor CRSP adjustments for luxury vehicles (3-8% increase)</li>
                  <li>Commercial truck CRSP values updated (+5-12%)</li>
                  <li>Motorcycle CRSP values slightly reduced (-2-4%)</li>
                  <li>Updated exchange rates for USD/KES calculations</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-800">What Stayed Same:</h4>
                <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                  <li>8-year import age limit unchanged</li>
                  <li>Depreciation schedule remains 5%/10% annually</li>
                  <li>Tax rates (duty, excise, VAT) unchanged</li>
                  <li>Most passenger car CRSP values stable</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Analysis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Impact on Different Vehicle Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">Budget Cars (Under 1M)</h4>
                  <div className="text-2xl font-bold text-blue-900 mb-1">0-2%</div>
                  <p className="text-blue-700 text-sm">Minimal impact on popular models like Toyota Vitz, Nissan Note, Honda Fit</p>
                </div>
                <div className="p-4 border rounded-lg bg-orange-50">
                  <h4 className="font-semibold text-orange-800 mb-2">Mid-Range (1-3M)</h4>
                  <div className="text-2xl font-bold text-orange-900 mb-1">2-5%</div>
                  <p className="text-orange-700 text-sm">Moderate increases for SUVs and premium sedans like Toyota Harrier, Subaru Forester</p>
                </div>
                <div className="p-4 border rounded-lg bg-red-50">
                  <h4 className="font-semibold text-red-800 mb-2">Luxury (3M+)</h4>
                  <div className="text-2xl font-bold text-red-900 mb-1">5-8%</div>
                  <p className="text-red-700 text-sm">Notable increases for luxury brands like BMW, Mercedes, Audi, and Land Rover</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calculator Update Notice */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <AlertTriangle className="h-6 w-6" />
              Important for Importers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-blue-700">
              <strong>Our CRSP calculator has been updated</strong> with the latest September 2025 rates. 
              If you calculated import costs before September 15, 2025, please recalculate to ensure accuracy.
            </p>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Action Required:</h4>
              <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                <li>Recalculate any pending import cost estimates</li>
                <li>Verify CRSP values for vehicles you're planning to import</li>
                <li>Budget for potential 2-8% cost increases on luxury vehicles</li>
                <li>Check with your clearing agent for the latest rates</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* CTA Sections */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <InternalLinkCTA
            type="calculator"
            title="Recalculate Import Costs"
            description="Use the updated September 2025 CRSP rates"
            link="/import-duty-calculator-kenya"
          />
          
          <InternalLinkCTA
            type="guide"
            title="KRA CRSP Explained"
            description="Understand how CRSP values work"
            link="/kra-crsp-calculator-explained"
          />
        </div>

        {/* Get Started CTA */}
        <Card className="text-center bg-gradient-to-r from-primary/10 to-blue-100">
          <CardContent className="py-8">
            <h3 className="text-2xl font-bold mb-4">Calculate with Latest September 2025 Rates</h3>
            <p className="text-muted-foreground mb-6">
              Get accurate import duty estimates using the most current KRA CRSP values
            </p>
            <Button size="lg" asChild>
              <Link to="/import-duty-calculator-kenya" className="inline-flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
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

export default KRACRSPSeptember2025Update;