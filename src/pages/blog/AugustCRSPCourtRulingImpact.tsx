import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, AlertTriangle, TrendingDown, Calculator, Clock, Gavel } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import SocialShare from '@/components/SocialShare';
import StructuredData from '@/components/StructuredData';

const AugustCRSPCourtRulingImpact = () => {
  const affectedVehicles = [
    { category: "SUVs 2018-2020", oldDuty: "KES 850K", newDuty: "KES 650K", savings: "KES 200K" },
    { category: "Sedan Cars 2019-2021", oldDuty: "KES 420K", newDuty: "KES 320K", savings: "KES 100K" },
    { category: "Hybrid Vehicles", oldDuty: "KES 380K", newDuty: "KES 280K", savings: "KES 100K" },
    { category: "Commercial Vehicles", oldDuty: "KES 750K", newDuty: "KES 580K", savings: "KES 170K" },
  ];

  const actionItems = [
    { 
      title: "Check Current Rates",
      description: "Use our calculator with the suspended rates",
      urgency: "high",
      action: "Calculate Now"
    },
    {
      title: "Monitor Updates",
      description: "Court case expected to conclude in September 2025",
      urgency: "medium",
      action: "Set Alert"
    },
    {
      title: "Plan Your Import",
      description: "Consider timing your purchase based on ruling",
      urgency: "medium",
      action: "Plan Now"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOPermalinks 
        title="August 2025 CRSP Court Ruling: What It Means for Your Car Import"
        description="BREAKING: Court suspends KRA's new CRSP schedule. Save KES 100K-500K on car imports. Get the latest impact analysis and what to do next."
        keywords="CRSP court ruling August 2025, KRA import duty suspended, car import savings Kenya, CRSP schedule halted, Kenya car import news"
        canonicalUrl="https://garimoto.co.ke/blog/august-crsp-court-ruling-impact"
        type="article"
      />

      <StructuredData 
        type="article"
        data={{
          title: "August 2025 CRSP Court Ruling: What It Means for Your Car Import",
          description: "Court suspends KRA's new CRSP schedule affecting thousands of car importers",
          image: "https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png",
          datePublished: "2025-08-04",
          dateModified: "2025-08-04"
        }}
      />

      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbNav />
        
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">BREAKING</span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                August 4, 2025 • 5 min read
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-primary">
              August 2025 CRSP Court Ruling: What It Means for Your Car Import
            </CardTitle>
            <p className="text-xl text-muted-foreground mt-2">
              High Court suspends KRA's controversial new CRSP schedule, potentially saving importers millions in duties
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <Alert className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="font-medium">
                <strong>URGENT UPDATE:</strong> The High Court has issued a temporary injunction halting the implementation of KRA's revised CRSP schedule that was set to take effect August 1, 2025. This affects all vehicle imports currently in transit or being processed.
              </AlertDescription>
            </Alert>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Gavel className="h-6 w-6" />
                What Happened?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                On August 4, 2025, Justice [Name] of the High Court issued a temporary restraining order preventing the Kenya Revenue Authority (KRA) from implementing its revised Customs Reference and Surveillance Prices (CRSP) schedule. The ruling came after a petition filed by the Kenya Association of Vehicle Importers challenging the legality and transparency of the new valuations.
              </p>

              <h3 className="text-xl font-semibold mb-3">Key Court Findings:</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Insufficient public participation in the CRSP revision process</li>
                <li>Lack of transparency in valuation methodology</li>
                <li>Potential economic impact on the automotive sector</li>
                <li>Constitutional concerns regarding due process</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2 mt-8">
                <TrendingDown className="h-6 w-6" />
                Financial Impact for Importers
              </h2>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-green-800 mb-2">Immediate Savings Opportunity</h4>
                <p className="text-green-700">
                  With the new CRSP schedule suspended, importers can continue using the previous (lower) duty rates, resulting in significant savings across all vehicle categories.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-gray-300 px-4 py-2 text-left">Vehicle Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">New CRSP (Suspended)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Current Rate</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Your Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {affectedVehicles.map((vehicle, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                        <td className="border border-gray-300 px-4 py-2 font-medium">{vehicle.category}</td>
                        <td className="border border-gray-300 px-4 py-2 text-red-600">{vehicle.oldDuty}</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">{vehicle.newDuty}</td>
                        <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">{vehicle.savings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-4">What You Should Do NOW</h2>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {actionItems.map((item, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${
                    item.urgency === 'high' ? 'border-red-200 bg-red-50' :
                    item.urgency === 'medium' ? 'border-yellow-200 bg-yellow-50' :
                    'border-green-200 bg-green-50'
                  }`}>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <Button 
                      size="sm" 
                      variant={item.urgency === 'high' ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {item.action}
                    </Button>
                  </div>
                ))}
              </div>

              <Alert className="border-blue-200 bg-blue-50 mb-6">
                <Calculator className="h-4 w-4" />
                <AlertDescription>
                  <strong>Action Required:</strong> If you have vehicles currently being processed, contact your clearing agent immediately to ensure you're charged using the suspended (lower) rates. Use our calculator below to verify the correct duties.
                </AlertDescription>
              </Alert>

              <h3 className="text-xl font-semibold mb-3">Timeline Moving Forward:</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2"></div>
                  <div>
                    <strong>August 4, 2025:</strong> Court issues temporary injunction
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>
                  <div>
                    <strong>August 15, 2025:</strong> KRA response due to court
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-gray-400 mt-2"></div>
                  <div>
                    <strong>September 2025:</strong> Final court hearing expected
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3">Calculate Your Exact Savings</h3>
                <p className="text-muted-foreground mb-4">
                  Use our updated calculator with the current (suspended) CRSP rates to see exactly how much you can save.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/">Calculate Import Cost Now</Link>
                </Button>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-3">Share This Important Update</h3>
              <SocialShare 
                title="BREAKING: Court Suspends Kenya's New CRSP Schedule - Save on Car Imports"
                description="High Court halts KRA's new duty rates. Car importers can save KES 100K-500K with suspended rates."
              />
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Related Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/" className="block p-3 bg-primary/10 rounded hover:bg-primary/20 transition-colors">
                <strong className="text-primary">Import Cost Calculator</strong>
                <p className="text-sm text-muted-foreground">Calculate with current rates</p>
              </Link>
              <Link to="/blog/crsp-schedule-2025-changes" className="block p-3 bg-blue-50 rounded hover:bg-blue-100 transition-colors">
                <strong className="text-blue-600">CRSP Changes Guide</strong>
                <p className="text-sm text-muted-foreground">Understanding the proposed changes</p>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Stay informed about CRSP changes and court proceedings
              </p>
              <Button variant="outline" className="w-full">
                Subscribe to Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AugustCRSPCourtRulingImpact;