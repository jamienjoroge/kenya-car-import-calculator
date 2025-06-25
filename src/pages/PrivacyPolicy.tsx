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
              <li>To display relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ezoic Services</h2>
            <p className="text-gray-700 mb-4">
              This website uses the services of Ezoic Inc. (“Ezoic”), including to manage third-party interest-based advertising. Ezoic may employ a variety of technologies on this website, including tools to serve content, display advertisements and enable advertising to visitors of this website, which may utilize first and third-party cookies.
            </p>
            <p className="text-gray-700 mb-4">
              A cookie is a small text file sent to your device by a web server that enables the website to remember information about your browsing activity. First-party cookies are created by the site you are visiting, while third-party cookies are set by domains other than the one you're visiting. Ezoic and our partners may place third-party cookies, tags, beacons, pixels, and similar technologies to monitor interactions with advertisements and optimize ad targeting. Please note that disabling cookies may limit access to certain content and features on the website, and rejecting cookies does not eliminate advertisements but will result in non-personalized advertising. You can find more information about cookies and how to manage them <a href="https://www.aboutcookies.org.uk/managing-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.
            </p>
            <p className="text-gray-700 mb-4">
              The following information may be collected, used, and stored in a cookie when serving personalized ads:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>IP address</li>
              <li>Operating system type and version</li>
              <li>Device type</li>
              <li>Language preferences</li>
              <li>Web browser type</li>
              <li>Email (in a hashed or encrypted form)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Ezoic and its partners may use this data in combination with information that has been independently collected to deliver targeted advertisements across various platforms and websites. Ezoic’s partners may also gather additional data, such as unique IDs, advertising IDs, geolocation data, usage data, device information, traffic data, referral sources, and interactions between users and websites or advertisements, to create audience segments for targeted advertising across different devices, browsers, and apps. You can find more information about interest-based advertising and how to manage them <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.
            </p>
            <p className="text-gray-700">
              You can view Ezoic’s privacy policy <a href="https://www.ezoic.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>, or for additional information about Ezoic’s advertising and other partners, you can view Ezoic’s advertising partners <a href="https://www.ezoic.com/ad-partners" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.
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
              <li>Ezoic</li>
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
