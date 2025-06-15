
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us when using our Kenya Car Import Duty Calculator, 
              such as vehicle details for import cost calculations.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Vehicle make, model, and year information</li>
              <li>Usage data and analytics</li>
              <li>Technical information about your device and browser</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To provide accurate import duty calculations</li>
              <li>To improve our service and user experience</li>
              <li>To analyze usage patterns and optimize our calculator</li>
              <li>To display relevant advertisements through Google AdSense</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Google AdSense and Advertising</h2>
            <p className="text-gray-700 mb-4">
              This website uses Google AdSense to display advertisements. Google AdSense uses cookies and similar 
              technologies to serve ads based on your prior visits to our website or other websites.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Google may use data about your visits to serve targeted advertisements</li>
              <li>You can opt out of personalized advertising by visiting Google's Ads Settings</li>
              <li>Third-party vendors may show our ads on other sites across the internet</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to improve your experience on our website. 
              This includes cookies from Google AdSense for advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your personal information. However, 
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our service may contain links to third-party websites. We are not responsible for the 
              privacy practices of these external sites.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Google AdSense</li>
              <li>Google Analytics (if implemented)</li>
              <li>Supabase (for data storage)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
