import React from "react";
import { ArrowLeft, FileCheck, AlertTriangle, CheckCircle, Car, Clock, MapPin, DollarSign, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";

const NTSAVehicleInspectionGuide2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="NTSA & Pre-Purchase Vehicle Inspections in Kenya (2025 Guide)"
        description="Learn about NTSA inspections and pre-purchase car checks in Kenya — costs, process, and why they save you money in 2025."
        keywords="NTSA inspection Kenya, pre-purchase car inspection, vehicle inspection cost Kenya, TIMS booking, roadworthy certificate, car inspection checklist"
        canonicalUrl="https://garimoto.co.ke/blog/ntsa-vehicle-inspection-guide-2025"
        type="article"
      />
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">Vehicle Inspections</Badge>
            <h1 className="text-4xl font-bold text-slate-800 leading-tight">
              NTSA & Pre-Purchase Vehicle Inspections in Kenya (2025 Guide)
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
              <span>•</span>
              <span>August 22, 2025</span>
              <span>•</span>
              <span>GariMoto Editorial</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-slate-700">
                Whether you're importing a car, buying locally, or selling your vehicle, inspections are now part of the process in Kenya. In 2025, two main types of inspections matter most: <strong>NTSA inspections</strong> and <strong>pre-purchase inspections</strong>.
              </p>
              <p className="mt-4 text-slate-600">
                In this guide, we'll break down what each inspection does, what they cost, and why they're worth your time and money.
              </p>
            </CardContent>
          </Card>

          {/* NTSA Inspection Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="h-6 w-6 text-blue-600" />
                NTSA Vehicle Inspection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-slate-700">
                The <strong>NTSA inspection</strong> is a government-mandated safety check to ensure your vehicle is roadworthy. If your car is imported or is being transferred between owners, it will likely need an NTSA inspection.
              </p>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Key Facts:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold">Cost:</div>
                      <div className="text-sm text-green-700">From KSh 1,050 for small vehicles</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold">Where:</div>
                      <div className="text-sm text-green-700">Book online via TIMS and visit approved NTSA centers</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold">Time:</div>
                      <div className="text-sm text-green-700">Usually takes 15–30 minutes per vehicle</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold">2024 Upgrade:</div>
                      <div className="text-sm text-green-700">Tablet-based inspection systems</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>📊 2024 Statistics:</strong> In 2024, NTSA upgraded to tablet-based inspection systems, reducing delays and improving accuracy. Over <strong>1.3 million vehicles</strong> were inspected last year, making the process faster and more reliable than before.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Pre-Purchase Inspection Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileCheck className="h-6 w-6 text-orange-600" />
                Pre-Purchase Vehicle Inspection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-slate-700">
                A <strong>pre-purchase inspection</strong> is done by a mechanic or inspection service before you buy a used car. It helps you avoid surprises like odometer tampering, hidden accident damage, or engine issues.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">Typical Cost in Nairobi:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="font-medium">Basic check:</span>
                    <Badge variant="outline">KSh 5,000–8,000</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="font-medium">Full inspection with diagnostic scan:</span>
                    <Badge variant="outline">KSh 10,000–13,800</Badge>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800">
                  <strong>🔍 What's Included:</strong> These inspections often include a <strong>50+ point checklist</strong> covering everything from brake pads to chassis rust — giving you peace of mind before you hand over your cash.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">NTSA vs. Pre-Purchase: Which Do You Need?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-300">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 p-3 text-left font-semibold">Feature</th>
                      <th className="border border-slate-300 p-3 text-left font-semibold">NTSA Inspection</th>
                      <th className="border border-slate-300 p-3 text-left font-semibold">Pre-Purchase Inspection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-3 font-medium">Purpose</td>
                      <td className="border border-slate-300 p-3">Legal compliance & road safety</td>
                      <td className="border border-slate-300 p-3">Buyer protection & value assurance</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-3 font-medium">Cost</td>
                      <td className="border border-slate-300 p-3">From KSh 1,050</td>
                      <td className="border border-slate-300 p-3">From KSh 5,000</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-medium">When Needed</td>
                      <td className="border border-slate-300 p-3">Importing, transfer of ownership, commercial use</td>
                      <td className="border border-slate-300 p-3">Before buying a used car</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-3 font-medium">Performed By</td>
                      <td className="border border-slate-300 p-3">NTSA</td>
                      <td className="border border-slate-300 p-3">Independent mechanic or service</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800">
                  <strong>💡 Pro Tip:</strong> If you're buying a used car locally or importing through a dealer, combining both inspections is the safest choice.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-slate-800">How much is NTSA inspection in Kenya?</h3>
                  <p className="text-slate-600 mt-2">
                    From <strong>KSh 1,050</strong> for small cars, more for buses and trucks. The exact cost depends on your vehicle category and weight.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-slate-800">How often should I inspect my car?</h3>
                  <p className="text-slate-600 mt-2">
                    <strong>Private cars:</strong> when imported or changing ownership. <strong>Commercial cars:</strong> annually. Regular inspections help maintain safety and legal compliance.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-slate-800">Is pre-purchase inspection worth it?</h3>
                  <p className="text-slate-600 mt-2">
                    Absolutely. Skipping it could cost you hundreds of thousands in hidden repairs. A KSh 10,000 inspection can save you from a KSh 200,000+ mistake.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Need a Vehicle Inspection?</h3>
              <p className="text-blue-100 mb-6">
                Use our comprehensive vehicle inspection checklist to evaluate any car before purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/vehicle-inspection">
                    <FileCheck className="h-5 w-5 mr-2" />
                    Start Vehicle Inspection
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600">
                  <Link to="/">
                    <Car className="h-5 w-5 mr-2" />
                    Calculate Import Duties
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Final Thoughts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Final Thoughts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-slate-700">
                Vehicle inspections are no longer just a formality. Whether you're importing a fresh unit or buying a used car in Nairobi, inspections can save you money, time, and headaches.
              </p>
              
              <p className="text-slate-600">
                If you haven't already, check <Link to="/vehicle-inspection" className="text-blue-600 hover:underline font-medium">GariMoto's inspection checklist</Link>. Our comprehensive tool helps you evaluate any vehicle with professional-grade accuracy.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-600">
                  <strong>Related Tools:</strong> Don't forget to calculate your <Link to="/" className="text-blue-600 hover:underline">import duties</Link> and <Link to="/compare" className="text-blue-600 hover:underline">compare different vehicles</Link> to make the best buying decision.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Image Suggestions */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-lg text-yellow-800">📸 Suggested Images (Royalty-Free)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-yellow-700">
                <p><strong>1. NTSA Inspection Process:</strong> A mechanic using a tablet to inspect a car at an official NTSA center, showing the modern digital inspection process.</p>
                <p><strong>2. Pre-Purchase Inspection:</strong> A professional mechanic examining a car engine with diagnostic tools, highlighting the thorough nature of pre-purchase checks.</p>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default NTSAVehicleInspectionGuide2025;