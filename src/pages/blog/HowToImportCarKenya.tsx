
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const HowToImportCarKenya = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="bg-white rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">How to Import a Car in Kenya</h1>
            <div className="flex items-center gap-6 text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                December 15, 2024
              </span>
            </div>
            <p className="text-lg text-gray-700">
              Complete step-by-step guide to importing vehicles into Kenya, from purchase to clearance at the port.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Pre-Import Requirements</h2>
            <p className="mb-4">
              Before purchasing a vehicle for import to Kenya, ensure you understand the basic requirements:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Vehicle must not be older than 8 years from date of manufacture</li>
              <li>Must be right-hand drive (RHD) for Kenya roads</li>
              <li>Engine capacity determines duty rates</li>
              <li>Ensure the vehicle has a clean title/logbook</li>
            </ul>

            <AdSpace slot="blog-content-1" format="rectangle" style={{ width: "300px", height: "250px", margin: "20px auto" }} />

            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Vehicle Purchase Documentation</h2>
            <p className="mb-4">
              When purchasing your vehicle, ensure you receive:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Original Title/Certificate of Title:</strong> Proof of ownership</li>
              <li><strong>Export Certificate:</strong> Required from country of origin</li>
              <li><strong>Bill of Sale:</strong> Purchase agreement and price paid</li>
              <li><strong>Deregistration Certificate:</strong> Shows vehicle is deregistered in origin country</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Shipping Process</h2>
            <p className="mb-4">
              Choose between different shipping methods based on your budget and timeline:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">Shipping Options:</h3>
              <ul className="text-blue-700 space-y-1">
                <li><strong>Container Shipping:</strong> Most secure, higher cost</li>
                <li><strong>RORO (Roll-on/Roll-off):</strong> Cost-effective, slightly higher risk</li>
                <li><strong>Consolidated Container:</strong> Share container space, medium cost</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Pre-Arrival Preparations</h2>
            <p className="mb-4">
              While your vehicle is in transit, prepare the following:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Engage a clearing agent at the port of destination</li>
              <li>Obtain import duty calculation estimates</li>
              <li>Prepare funds for duties and port charges</li>
              <li>Get pre-shipment inspection certificate if required</li>
            </ul>

            <AdSpace slot="blog-content-2" format="horizontal" style={{ height: "90px", margin: "20px 0" }} />

            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Port Clearance Process</h2>
            <p className="mb-4">
              Once your vehicle arrives at Mombasa port:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Present original shipping documents to your clearing agent</li>
              <li>Complete customs declaration forms</li>
              <li>Pay import duties calculated using CRSP values</li>
              <li>Undergo mandatory vehicle inspection</li>
              <li>Obtain clearance certificate</li>
              <li>Register with NTSA for Kenyan number plates</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Cost Breakdown</h2>
            <p className="mb-4">
              Budget for these main cost categories:
            </p>
            <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
              <h3 className="font-semibold text-green-800 mb-2">Typical Costs Include:</h3>
              <ul className="text-green-700 space-y-1">
                <li>Vehicle purchase price</li>
                <li>Shipping costs (varies by route and method)</li>
                <li>Import duty (25% of CRSP value)</li>
                <li>Excise duty (25% of CRSP value)</li>
                <li>VAT (16% of CRSP value)</li>
                <li>Port handling charges</li>
                <li>Clearing agent fees</li>
                <li>NTSA registration fees</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Final Registration</h2>
            <p className="mb-6">
              After clearing customs, register your vehicle with NTSA within 14 days. 
              You'll need the clearance certificate, passport, and proof of residence. 
              Your vehicle will be assigned Kenyan number plates and you'll receive 
              a logbook as proof of ownership.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">💡 Pro Tip:</h3>
              <p className="text-yellow-700">
                Use our <Link to="/" className="text-primary hover:underline">car import calculator</Link> to 
                estimate your total import costs before making a purchase. This helps you budget accurately 
                and avoid surprises during the clearance process.
              </p>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default HowToImportCarKenya;
