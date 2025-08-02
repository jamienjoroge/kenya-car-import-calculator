
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home, Calculator, GitCompare, DollarSign, TrendingUp, Info, Mail, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SEOPermalinks from "@/components/SEOPermalinks";

const Sitemap = () => {
  const sections = [
    {
      title: "Main Pages",
      icon: Home,
      pages: [
        { name: "Home", path: "/", description: "Kenya Car Import Duty Calculator with CRSP 2025 schedule", icon: Home },
        { name: "Compare Cars", path: "/compare", description: "Compare import costs between different vehicles", icon: GitCompare },
        { name: "What Can I Afford?", path: "/afford", description: "Find cars within your budget range", icon: DollarSign },
        { name: "Popular Cars by Year", path: "/popular", description: "Trending vehicles and their import costs", icon: TrendingUp },
      ]
    },
    {
      title: "Vehicle Tools",
      icon: FileText,
      pages: [
        { name: "Vehicle Inspection", path: "/vehicle-inspection", description: "Pre-purchase inspection checklist with scoring", icon: FileText },
        { name: "Maintenance Schedule", path: "/maintenance-schedule", description: "Track your vehicle's service history", icon: FileText },
        { name: "Fuel Calculator", path: "/fuel-calculator", description: "Calculate fuel costs and efficiency", icon: FileText },
      ]
    },
    {
      title: "Blog & Articles",
      icon: FileText,
      pages: [
        { name: "Blog Home", path: "/blog", description: "Latest news and guides on car imports", icon: FileText },
        { name: "BREAKING: Court Halts CRSP Schedule", path: "/blog/crsp-schedule-halted-by-court-2025", description: "Court victory halts KRA's controversial CRSP increases", icon: FileText },
        { name: "BREAKING: Car Dealers Sue KRA", path: "/blog/ciak-vs-kra-lawsuit-2025", description: "Legal action against new CRSP schedule", icon: FileText },
        { name: "Toyota Prius Import Guide", path: "/blog/toyota-prius-import-cost-kenya", description: "Complete cost breakdown and calculator", icon: FileText },
        { name: "How to Import a Car", path: "/blog/how-to-import-car-kenya", description: "Step-by-step import process guide", icon: FileText },
        { name: "What is CRSP?", path: "/blog/what-is-crsp", description: "Understanding vehicle valuation system", icon: FileText },
        { name: "What Determines Duty?", path: "/blog/what-determines-duty-kenya", description: "Factors affecting import duties", icon: FileText },
        { name: "Most Imported Cars 2025", path: "/blog/most-imported-cars-2025", description: "Popular vehicle import trends", icon: FileText },
        { name: "CRSP Schedule Changes", path: "/blog/crsp-schedule-2025-changes", description: "2025 schedule updates and impacts", icon: FileText },
      ]
    },
    {
      title: "Information Pages",
      icon: Info,
      pages: [
        { name: "About Us", path: "/about", description: "Learn about our mission and services", icon: Info },
        { name: "Contact", path: "/contact", description: "Get in touch with our support team", icon: Mail },
        { name: "Sitemap", path: "/sitemap", description: "Complete site navigation overview", icon: FileText },
      ]
    },
    {
      title: "Legal Pages",
      icon: Shield,
      pages: [
        { name: "Privacy Policy", path: "/privacy", description: "How we collect and use your information", icon: Shield },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions for using our calculator", icon: FileText },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Site Map - All Pages | GariMoto Kenya Car Import Calculator"
        description="Complete sitemap of GariMoto.co.ke - Find all pages, tools, and resources for calculating Kenya car import duties and CRSP rates."
        keywords="GariMoto sitemap, Kenya car import pages, CRSP calculator tools, vehicle import resources"
        canonicalUrl="https://garimoto.co.ke/sitemap"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Calculator
          </Link>
        </Button>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6 text-primary">Site Map</h1>
          <p className="text-gray-700 mb-8">
            Navigate through all pages and features of the Kenya Car Import Duty Calculator. 
            Find everything you need to calculate accurate import costs for vehicles in Kenya using official KRA CRSP rates 2025.
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <section.icon className="h-6 w-6 text-primary" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.pages.map((page) => (
                      <div key={page.path} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <page.icon className="h-5 w-5 text-primary mt-1" />
                          <div className="flex-1">
                            <Link to={page.path} className="font-semibold text-primary hover:underline">
                              {page.name}
                            </Link>
                            <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                            <p className="text-xs text-gray-400 mt-2 font-mono">https://garimoto.co.ke{page.path}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Quick Access with SEO benefits */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🚀 Popular Tools - Quick Access</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <Link to="/">
                  <Calculator className="h-6 w-6 mb-2" />
                  <span className="text-sm font-semibold">CRSP Calculator 2025</span>
                  <span className="text-xs text-gray-600">Calculate import duties</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <Link to="/compare">
                  <GitCompare className="h-6 w-6 mb-2" />
                  <span className="text-sm font-semibold">Compare Vehicles</span>
                  <span className="text-xs text-gray-600">Side-by-side comparison</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <Link to="/afford">
                  <DollarSign className="h-6 w-6 mb-2" />
                  <span className="text-sm font-semibold">Budget Planning</span>
                  <span className="text-xs text-gray-600">Find affordable cars</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* SEO-Enhanced Help Section */}
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold mb-3">Need Help with Car Import Calculations?</h3>
            <p className="text-gray-700 mb-4">
              Can't find what you're looking for? Visit our contact page for support or start with our main CRSP calculator to get instant import duty estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="outline">
                <Link to="/contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Support Team
                </Link>
              </Button>
              <Button asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Start Calculating Duties
                </Link>
              </Button>
            </div>
          </div>

          {/* Internal Linking for SEO */}
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">📚 Popular Guides & Resources</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Latest Updates</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link to="/blog/crsp-schedule-halted-by-court-2025" className="text-green-700 hover:underline">Court Halts CRSP Schedule 2025</Link></li>
                  <li><Link to="/blog/ciak-vs-kra-lawsuit-2025" className="text-green-700 hover:underline">CIAK vs KRA Lawsuit Updates</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Import Guides</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link to="/blog/how-to-import-car-kenya" className="text-green-700 hover:underline">How to Import Cars to Kenya</Link></li>
                  <li><Link to="/blog/toyota-prius-import-cost-kenya" className="text-green-700 hover:underline">Toyota Prius Import Guide</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
