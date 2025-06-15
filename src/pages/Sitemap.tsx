
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home, Calculator, GitCompare, DollarSign, TrendingUp, Info, Mail, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

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
            Find everything you need to calculate accurate import costs for vehicles in Kenya.
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
                            <p className="text-xs text-gray-400 mt-2 font-mono">{page.path}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Quick Access</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <Link to="/">
                  <Calculator className="h-6 w-6 mb-2" />
                  <span className="text-sm">Start Calculating</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <Link to="/compare">
                  <GitCompare className="h-6 w-6 mb-2" />
                  <span className="text-sm">Compare Vehicles</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <Link to="/afford">
                  <DollarSign className="h-6 w-6 mb-2" />
                  <span className="text-sm">Budget Planning</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
            <p className="text-gray-700 mb-4">
              Can't find what you're looking for? Visit our contact page or start with the main calculator.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="outline">
                <Link to="/contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
              <Button asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
