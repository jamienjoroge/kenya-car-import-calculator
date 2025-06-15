
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
          <h1 className="text-3xl font-bold mb-6 text-primary">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using the Kenya Car Import Duty Calculator, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
            <p className="text-gray-700 mb-4">
              Our calculator provides estimates for vehicle import duties in Kenya based on CRSP values and 
              current KRA regulations. This service is for informational purposes only.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Calculations are estimates and may not reflect final KRA assessments</li>
              <li>CRSP values are updated regularly but may not always be current</li>
              <li>Users should verify all calculations with official KRA sources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              The information provided by our calculator is on an "as is" basis. We make no representations 
              or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
              or availability of the information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-700">
              In no event will we be liable for any loss or damage including without limitation, indirect or 
              consequential loss or damage arising from the use of this calculator.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Advertising</h2>
            <p className="text-gray-700">
              This website displays advertisements through Google AdSense. We are not responsible for the 
              content of advertisements or products/services advertised.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Continued use of the service constitutes 
              acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700">
              For questions about these Terms of Service, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
