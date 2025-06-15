
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Calculator
          </Link>
        </Button>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6 text-primary">About Kenya Car Import Calculator</h1>
          
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We provide accurate, up-to-date car import duty calculations for Kenya, helping individuals 
              and businesses make informed decisions when importing vehicles. Our calculator uses the latest 
              CRSP (Current Retail Selling Price) schedule effective July 2025 and official KRA rates.
            </p>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">What We Offer</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Accurate Calculations</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Latest CRSP values for July 2025</li>
                  <li>• Official KRA duty rates</li>
                  <li>• Real-time currency conversion</li>
                  <li>• Comprehensive cost breakdown</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Additional Tools</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Vehicle comparison tool</li>
                  <li>• Budget planning calculator</li>
                  <li>• Popular cars by year analysis</li>
                  <li>• PDF quote generation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Who We Serve</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Individual Importers</h4>
                <p className="text-blue-700 text-sm">
                  Personal vehicle imports for family or business use
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Car Dealers</h4>
                <p className="text-green-700 text-sm">
                  Professional importers and automotive businesses
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Clearing Agents</h4>
                <p className="text-purple-700 text-sm">
                  Customs clearing professionals and consultants
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Why Choose Our Calculator</h2>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Always Up-to-Date</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    We regularly update our database with the latest CRSP values and KRA regulations 
                    to ensure accuracy.
                  </p>
                  
                  <h4 className="font-semibold mb-2">User-Friendly Interface</h4>
                  <p className="text-gray-700 text-sm">
                    Simple, intuitive design that makes complex calculations easy to understand.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Comprehensive Coverage</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Support for all vehicle types with detailed breakdown of all import costs.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Free to Use</h4>
                  <p className="text-gray-700 text-sm">
                    No registration required. Calculate as many vehicles as you need, completely free.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 text-sm">
                <strong>Important:</strong> This calculator provides estimates based on official KRA rates 
                and CRSP values. Final duty amounts may vary based on vehicle condition, KRA assessment, 
                and other factors. Always verify calculations with official KRA sources before making 
                import decisions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
            <p className="text-gray-700 mb-4">
              Ready to calculate your vehicle import costs? Use our free calculator to get instant 
              estimates for any vehicle.
            </p>
            <Button asChild className="w-full md:w-auto">
              <Link to="/">Start Calculating</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
