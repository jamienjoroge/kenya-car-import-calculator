import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertTriangle, FileText, Calculator } from 'lucide-react';

const KenyaCarImportProcess2025 = () => {
  const steps = [
    {
      title: "1. Choose Your Vehicle",
      description: "Research and select a vehicle that meets Kenya's import regulations",
      requirements: ["Age limit: Not more than 8 years for commercial vehicles, no age limit for personal use", "Right-hand drive vehicles only", "Check banned models list"]
    },
    {
      title: "2. Find a Reliable Supplier",
      description: "Connect with verified dealers or auction houses",
      requirements: ["Japan: USS Auctions, SBT, BE FORWARD", "UK: AutoTrader, Motors.co.uk", "Dubai: Dubizzle, Cars24"]
    },
    {
      title: "3. Vehicle Purchase & Payment",
      description: "Secure payment and obtain necessary documents",
      requirements: ["Invoice/Receipt", "Export Certificate", "Insurance Certificate", "Bill of Lading"]
    },
    {
      title: "4. Shipping & Documentation",
      description: "Arrange shipping and prepare import documents",
      requirements: ["Shipping arrangement (CIF or FOB)", "Marine insurance", "Pre-shipment inspection (for some countries)"]
    },
    {
      title: "5. Customs Clearance in Kenya",
      description: "Clear your vehicle through KRA customs",
      requirements: ["Import Declaration Form (IDF)", "CRSP valuation certificate", "Pay import duty, VAT, and other charges"]
    },
    {
      title: "6. Final Registration",
      description: "Register your vehicle with NTSA",
      requirements: ["Vehicle inspection", "Number plate allocation", "Logbook issuance", "Motor vehicle insurance"]
    }
  ];

  const costs = [
    { item: "Import Duty", percentage: "25%", description: "Calculated on CRSP value" },
    { item: "VAT", percentage: "16%", description: "On CRSP + Import Duty + Excise" },
    { item: "Excise Duty", percentage: "20-35%", description: "Based on engine size" },
    { item: "IDF Fee", amount: "KES 2,500", description: "Import Declaration Form" },
    { item: "Railway Levy", percentage: "1.5%", description: "On CIF value" },
    { item: "Clearing Agent", amount: "KES 15,000-25,000", description: "Professional clearance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOPermalinks 
        title="Kenya Car Import Process 2025: Complete Step-by-Step Guide | GariMoto"
        description="🚗 Complete guide to importing cars to Kenya in 2025. Learn the 6-step process, required documents, costs, and avoid common mistakes. Updated for latest KRA regulations."
        keywords="Kenya car import process 2025, how to import car Kenya, KRA import procedure, car import documents Kenya, CRSP valuation process, NTSA registration"
        canonicalUrl="https://garimoto.co.ke/blog/kenya-car-import-process-2025"
        type="article"
      />
      
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">BREAKING</Badge>
              <Badge variant="outline">Import Guide</Badge>
              <Badge variant="outline">2025 Update</Badge>
            </div>
            <CardTitle className="text-3xl font-bold">
              Kenya Car Import Process 2025: Complete Step-by-Step Guide
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Published: January 12, 2025</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>By GariMoto Team</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-800">🎯 Why This Guide Matters</h2>
              <p className="text-blue-700">
                With recent court rulings affecting CRSP schedules and changing KRA regulations, importing a car to Kenya in 2025 requires up-to-date knowledge. This comprehensive guide walks you through every step, helping you avoid costly mistakes and save thousands on import duties.
              </p>
            </div>

            {/* Quick Calculator CTA */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Calculator className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800">Calculate Your Import Costs First</h3>
              </div>
              <p className="text-green-700 mb-4">
                Before starting the import process, use our free calculator to estimate your total costs and avoid surprises.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/">Calculate Import Duty →</Link>
              </Button>
            </div>

            {/* Step-by-Step Process */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Complete Import Process (6 Steps)</h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        {step.title}
                      </CardTitle>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {step.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✓</span>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cost Breakdown */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Import Cost Breakdown 2025</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">Recent Changes</span>
                </div>
                <p className="text-yellow-700 text-sm">
                  Following the court ruling on January 15, 2025, CRSP schedules remain unchanged. This provides continued savings for importers.
                </p>
              </div>
              
              <div className="grid gap-4">
                {costs.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{cost.item}</h4>
                      <p className="text-sm text-muted-foreground">{cost.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-lg text-primary">
                        {cost.percentage || cost.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Documents */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Required Documents Checklist</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      From Seller/Shipper
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Commercial Invoice
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Bill of Lading
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Export Certificate
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Insurance Certificate
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      In Kenya
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Import Declaration Form
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        CRSP Valuation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        KRA Tax Pin
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Valid ID/Passport
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">💡 Pro Tips for 2025</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Save Money</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Use our calculator before buying</li>
                    <li>• Consider hybrid vehicles for lower excise</li>
                    <li>• Import during low shipping seasons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Avoid Delays</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Prepare all documents in advance</li>
                    <li>• Use experienced clearing agents</li>
                    <li>• Track your shipment actively</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="grid md:grid-cols-3 gap-4 pt-8 border-t">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Calculator className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <h4 className="font-semibold mb-2">Import Calculator</h4>
                  <p className="text-sm text-muted-foreground mb-3">Calculate exact duties</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/">Calculate Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 mx-auto mb-3 text-green-600" />
                  <h4 className="font-semibold mb-2">What Is CRSP?</h4>
                  <p className="text-sm text-muted-foreground mb-3">Understand valuations</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/blog/what-is-crsp">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                  <h4 className="font-semibold mb-2">Budget Finder</h4>
                  <p className="text-sm text-muted-foreground mb-3">Cars in your budget</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/afford">Find Cars</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default KenyaCarImportProcess2025;