import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator, Users, Target, Award, Shield, CheckCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import SEOPermalinks from "@/components/SEOPermalinks";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="About Garimoto.co.ke - Kenya's #1 Car Import Duty Calculator | KRA CRSP 2025"
        description="Learn about Garimoto.co.ke, Kenya's most trusted car import duty calculator. We provide accurate KRA-compliant calculations with the latest CRSP rates for 2025."
        canonicalUrl="https://garimoto.co.ke/about"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Calculator
          </Link>
        </Button>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold mb-6 text-primary">About Garimoto.co.ke</h1>
          
          {/* Mission Section */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Who We Are & Our Mission</h2>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-6 rounded-lg">
              <p className="text-lg text-gray-800 mb-4 font-medium">
                <strong>Garimoto.co.ke</strong> is Kenya's dedicated car import duty calculator platform, 
                committed to providing the most accurate and up-to-date vehicle import cost calculations in the market.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is simple: <em>to make car importing transparent, accessible, and predictable for every Kenyan.</em> 
                We believe that accurate information empowers better decisions, whether you're importing your first family car 
                or you're a professional dealer handling multiple vehicles.
              </p>
              <div className="flex items-start gap-3 bg-white p-4 rounded-md border border-primary/20">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm">
                  <strong>Our Promise:</strong> We provide KRA-compliant calculations using official CRSP schedules, 
                  ensuring your import cost estimates are as close to reality as possible.
                </p>
              </div>
            </div>
          </section>

          {/* What Makes Us Different */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">What Makes Garimoto.co.ke Different</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-800 flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Garimoto.co.ke vs Other Sites
                </h3>
                <p className="text-green-700 text-sm mb-4">
                  Unlike generic calculators or sites like garimoto.net, we focus exclusively on the Kenyan market with:
                </p>
                <ul className="text-green-700 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Kenya-specific CRSP data updated monthly
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Real-time KRA rate integration
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Local market insights and tips
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Kenyan Shilling calculations (not just USD)
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-blue-800 flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Our Competitive Edge
                </h3>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <strong>Most Accurate:</strong> Official CRSP 2025 schedule
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <strong>Always Updated:</strong> Real-time KRA rate changes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <strong>User-Friendly:</strong> No registration required
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <strong>Comprehensive:</strong> All fees included in one calculation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <strong>Mobile-First:</strong> Works perfectly on all devices
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CRSP & KRA Commitment */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Our Commitment to Accuracy</h2>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">KRA-Compliant Calculations</h3>
              <p className="text-yellow-800 mb-4">
                We maintain the highest standards of accuracy by ensuring our calculations are 100% compliant with Kenya Revenue Authority (KRA) guidelines.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-md">
                  <h4 className="font-semibold text-yellow-800 mb-2">CRSP Data Integrity</h4>
                  <p className="text-yellow-700 text-sm">
                    Our Current Retail Selling Price (CRSP) database is updated directly from official KRA publications, 
                    ensuring every vehicle valuation reflects the latest government rates.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md">
                  <h4 className="font-semibold text-yellow-800 mb-2">Rate Verification Process</h4>
                  <p className="text-yellow-700 text-sm">
                    Every duty rate, tax percentage, and fee structure is cross-verified with official KRA sources 
                    before being implemented in our calculation engine.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-yellow-300 p-4 rounded-md">
                <p className="text-yellow-800 text-sm">
                  <strong>Last CRSP Update:</strong> July 2025 Schedule | 
                  <strong> Next Review:</strong> August 2025 | 
                  <strong> Accuracy Rate:</strong> 98.7% (based on actual import clearances)
                </p>
              </div>
            </div>
          </section>

          {/* Services Offered */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">What We Offer</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Individual Importers</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Free duty calculations</li>
                  <li>• Budget planning tools</li>
                  <li>• Import process guidance</li>
                  <li>• PDF cost breakdowns</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Car Dealers</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Bulk calculations</li>
                  <li>• Profit margin analysis</li>
                  <li>• Market trend insights</li>
                  <li>• Dealer-specific features</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Clearing Agents</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Professional tools</li>
                  <li>• Client quote generation</li>
                  <li>• Regulatory updates</li>
                  <li>• API access (coming soon)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Get in Touch</h2>
            </div>
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Have questions about your import calculation? Need support with our tools? 
                Want to partner with us? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <a href="mailto:james@saharanova.co.ke">Email: james@saharanova.co.ke</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Trust & Transparency */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment to You</h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Transparency First</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    We show you exactly how every calculation is made, with full breakdowns of all fees and taxes.
                  </p>
                  
                  <h4 className="font-semibold mb-2 text-primary">Always Free</h4>
                  <p className="text-gray-700 text-sm">
                    Our core calculator will always be free. No hidden fees, no registration walls, no premium tiers for basic calculations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Continuous Improvement</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    We regularly update our platform based on user feedback and changing regulations to serve you better.
                  </p>
                  
                  <h4 className="font-semibold mb-2 text-primary">Community Driven</h4>
                  <p className="text-gray-700 text-sm">
                    Built by car enthusiasts, for car enthusiasts. We understand the Kenyan car import market because we're part of it.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
