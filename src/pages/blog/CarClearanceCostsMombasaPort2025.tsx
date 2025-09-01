import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import VehicleImportCalculator from '@/components/VehicleImportCalculator';
import StructuredData from '@/components/StructuredData';
import SocialShare from '@/components/SocialShare';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Anchor, DollarSign, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const CarClearanceCostsMombasaPort2025 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Car Clearance Costs Mombasa Port 2025" }
  ];

  const clearanceCosts = [
    { service: "Port Handling Fee", cost: "KES 15,000 - 25,000", required: true },
    { service: "Storage (per day)", cost: "KES 500 - 800", required: true },
    { service: "Security Fee", cost: "KES 2,000 - 3,000", required: true },
    { service: "Documentation", cost: "KES 5,000 - 8,000", required: true },
    { service: "Clearing Agent Fee", cost: "KES 25,000 - 50,000", required: false },
    { service: "Transport to Nairobi", cost: "KES 15,000 - 25,000", required: false }
  ];

  const faqData = {
    questions: [
      {
        question: "How much does it cost to clear a car at Mombasa port?",
        answer: "Total clearance costs at Mombasa port range from KES 50,000 to KES 120,000 depending on vehicle size, storage time, and additional services required."
      },
      {
        question: "How long does clearance take at Mombasa port?",
        answer: "Typical clearance takes 3-7 days, but can extend to 2 weeks if documentation issues arise or if you're using a new clearing agent."
      },
      {
        question: "Can I clear my car myself at Mombasa port?",
        answer: "Yes, you can self-clear, but it requires extensive paperwork knowledge and multiple visits. Most importers use clearing agents to save time and avoid complications."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Car Clearance Costs Mombasa Port 2025 - Complete Fee Breakdown"
        description="Complete breakdown of car clearance costs at Mombasa port Kenya 2025. Port fees, storage costs, clearing agent charges, and money-saving tips for vehicle imports."
        keywords="Mombasa port car clearance costs 2025, Kenya port fees, vehicle clearance Mombasa, car import costs Mombasa port, clearing agent fees"
        canonicalUrl="https://garimoto.co.ke/blog/car-clearance-costs-mombasa-port-2025"
        image="https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png"
        type="article"
      />

      <StructuredData 
        type="article"
        data={{
          title: "Car Clearance Costs Mombasa Port 2025 - Complete Fee Breakdown",
          description: "Comprehensive guide to all costs involved in clearing imported vehicles at Mombasa port including port fees, storage, and clearing agent charges.",
          image: "https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png",
          datePublished: "2025-01-05",
    dateModified: "2025-01-05"
        }}
      />

      <StructuredData type="faq" data={faqData} />
      
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        <BreadcrumbNav items={breadcrumbItems} />
        
        <article className="mt-6">
          <header className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="h-10 w-10 text-blue-600" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Car Clearance Costs Mombasa Port 2025
                </h1>
                <p className="text-xl text-gray-600">
                  Complete breakdown of all port clearance fees and charges
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>Published: January 5, 2025</span>
              <span>•</span>
              <span>Updated: January 5, 2025</span>
              <span>•</span>
              <span>8 min read</span>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700">
                Planning to clear your imported vehicle at Mombasa port? Understanding 
                all the costs involved helps you budget accurately and avoid surprises. 
                Here's a complete breakdown of 2025 clearance costs and fees.
              </p>
            </div>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-green-600" />
                    Mombasa Port Clearance Costs Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {clearanceCosts.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${item.required ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                          <div>
                            <div className="font-medium">{item.service}</div>
                            <div className="text-xs text-gray-500">
                              {item.required ? 'Required' : 'Optional'}
                            </div>
                          </div>
                        </div>
                        <div className="font-semibold text-gray-900">
                          {item.cost}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Total estimated costs:</strong> KES 50,000 - 120,000 depending on your choices
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Calculate Your Total Import + Clearance Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <VehicleImportCalculator />
                </CardContent>
              </Card>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">Understanding Port Clearance Process</h2>
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-3">Step-by-Step Clearance Process:</h3>
                  
                  <ol className="list-decimal list-inside space-y-3 mb-6">
                    <li><strong>Vessel Arrival:</strong> Your vehicle arrives at Mombasa port</li>
                    <li><strong>Document Submission:</strong> Submit import documents to KRA</li>
                    <li><strong>Duty Payment:</strong> Pay calculated import duties and taxes</li>
                    <li><strong>Physical Inspection:</strong> Vehicle inspection by port authorities</li>
                    <li><strong>Release Authorization:</strong> Get clearance certificate</li>
                    <li><strong>Port Exit:</strong> Drive out or arrange transportation</li>
                  </ol>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      <AlertTriangle className="inline h-5 w-5 mr-2" />
                      Important Storage Cost Warning
                    </h4>
                    <p className="text-yellow-700">
                      Storage costs accumulate daily from vessel arrival. Quick clearance 
                      can save you thousands in storage fees. Prepare all documents in advance.
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold mb-3">Money-Saving Tips:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Have all documents ready before vessel arrival</li>
                    <li>Use experienced clearing agents to avoid delays</li>
                    <li>Pay duties promptly to minimize storage costs</li>
                    <li>Consider self-clearance if you have time and expertise</li>
                    <li>Negotiate transport costs with multiple providers</li>
                  </ul>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Required Documents for Clearance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">From Exporter:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Original Export Certificate
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Bill of Lading
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Commercial Invoice
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Insurance Certificate
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">From You:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Copy of ID/Passport
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          KRA PIN Certificate
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          IDF Form
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Letter of Credit (if applicable)
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqData.questions.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-700 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Clearance Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Document preparation:</span>
                    <span className="text-sm font-medium">1-2 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">KRA processing:</span>
                    <span className="text-sm font-medium">2-3 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Physical inspection:</span>
                    <span className="text-sm font-medium">1 day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Final release:</span>
                    <span className="text-sm font-medium">1 day</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold">
                      <span className="text-sm">Total time:</span>
                      <span className="text-sm">5-7 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800">Avoid Extra Costs</CardTitle>
                </CardHeader>
                <CardContent className="text-red-800 space-y-2 text-sm">
                  <p>• Demurrage charges for delayed clearance</p>
                  <p>• Penalty fees for incorrect documentation</p>
                  <p>• Extra storage for processing delays</p>
                  <p>• Re-inspection fees for failed checks</p>
                </CardContent>
              </Card>

              <SocialShare 
                title="Car Clearance Costs Mombasa Port 2025"
                url="https://garimoto.co.ke/blog/car-clearance-costs-mombasa-port-2025"
              />
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default CarClearanceCostsMombasaPort2025;