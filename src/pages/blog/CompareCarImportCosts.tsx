import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GitCompare } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SEOPermalinks from "@/components/SEOPermalinks";

const CompareCarImportCosts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="How to Compare Car Import Costs Kenya 2025: Toyota vs Honda | GariMoto"
        description="Compare import costs for 3 vehicles side-by-side. Toyota vs Honda vs Nissan with October 2025 CRSP rates."
        keywords="compare car import costs Kenya, Toyota vs Honda import duty, car comparison calculator"
        canonicalUrl="https://garimoto.co.ke/blog/compare-car-import-costs"
      />
      
      <Navigation />
      <BreadcrumbNav 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Compare Car Import Costs", href: "/blog/compare-car-import-costs" }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog"><ArrowLeft className="h-4 w-4 mr-2" />Back to Blog</Link>
        </Button>

        <h1 className="text-4xl font-bold mb-4 text-primary">How to Compare Car Import Costs Kenya 2025</h1>
        <p className="text-lg mb-6">Step-by-step guide to comparing multiple vehicle import costs side-by-side.</p>

        <Card className="p-6 mb-8 bg-blue-50">
          <Button asChild size="lg">
            <Link to="/compare"><GitCompare className="h-5 w-5 mr-2" />Compare Cars Now →</Link>
          </Button>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">Why Compare Import Costs?</h2>
          <p className="mb-4">
            When importing a vehicle to Kenya, the total cost can vary significantly between different makes and models. 
            Our comparison tool helps you make informed decisions by showing side-by-side breakdowns of all import duties and taxes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How to Use the Comparison Tool</h2>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>Select Your First Vehicle:</strong> Choose the make, model, and year of the first car you're considering.</li>
            <li><strong>Add Second Vehicle:</strong> Select a second vehicle to compare against the first.</li>
            <li><strong>Optional Third Vehicle:</strong> Add a third vehicle if you want to compare more options.</li>
            <li><strong>Review Results:</strong> See detailed breakdowns of CRSP, duties, VAT, and total costs for each vehicle.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Popular Comparisons</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Toyota Fielder vs Honda Fit vs Nissan Note</li>
            <li>Toyota Prado vs Nissan Patrol vs Land Cruiser</li>
            <li>Subaru Impreza vs Mazda Axela vs Toyota Allion</li>
            <li>Honda CR-V vs Toyota RAV4 vs Nissan X-Trail</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Understanding the Cost Breakdown</h2>
          <p className="mb-4">Each comparison shows:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Original CRSP:</strong> The base value set by KRA</li>
            <li><strong>Depreciated CRSP:</strong> Value after age-based depreciation</li>
            <li><strong>Import Duty (25%):</strong> Calculated on depreciated CRSP</li>
            <li><strong>Excise Duty (25%):</strong> Based on CRSP + Import Duty</li>
            <li><strong>VAT (16%):</strong> Applied to total of above</li>
            <li><strong>IDF (2.25%):</strong> Import Declaration Fee</li>
            <li><strong>RDL (2%):</strong> Railway Development Levy</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Tips for Making Your Decision</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Consider not just import costs but also maintenance and fuel efficiency</li>
            <li>Check spare parts availability in Kenya for each model</li>
            <li>Factor in resale value - some brands hold value better</li>
            <li>Consider insurance costs which vary by vehicle type</li>
            <li>Think about your actual needs - don't overspend on features you won't use</li>
          </ul>

          <Card className="p-6 mt-8 bg-green-50">
            <h3 className="text-xl font-bold mb-3">Ready to Compare?</h3>
            <p className="mb-4">Use our free comparison tool to see exact costs for up to 3 vehicles side-by-side.</p>
            <Button asChild>
              <Link to="/compare"><GitCompare className="h-5 w-5 mr-2" />Start Comparing →</Link>
            </Button>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CompareCarImportCosts;
