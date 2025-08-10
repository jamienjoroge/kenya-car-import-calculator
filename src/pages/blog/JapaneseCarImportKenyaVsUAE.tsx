import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import StructuredData from '@/components/StructuredData';
import SocialShare from '@/components/SocialShare';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, DollarSign, Clock, TrendingDown, AlertTriangle } from 'lucide-react';

const JapaneseCarImportKenyaVsUAE = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Japanese Car Import: Kenya vs UAE" }
  ];

  const comparisonData = [
    {
      aspect: "Purchase Price",
      kenya: "Generally higher",
      uae: "Often 10-15% lower",
      winner: "UAE"
    },
    {
      aspect: "Shipping Costs",
      kenya: "USD 1,200-1,800",
      uae: "USD 800-1,200",
      winner: "UAE"
    },
    {
      aspect: "Import Duties",
      kenya: "Same CRSP rates",
      uae: "Same CRSP rates",
      winner: "Tie"
    },
    {
      aspect: "Documentation",
      kenya: "Simpler process",
      uae: "More complex",
      winner: "Kenya"
    },
    {
      aspect: "Vehicle Condition",
      kenya: "Generally better",
      uae: "Variable quality",
      winner: "Kenya"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Japanese Car Import Kenya vs UAE 2025 - Which is Cheaper?"
        description="Compare costs of importing Japanese cars from Kenya vs UAE. Detailed analysis of prices, shipping, duties, and total costs. Save money on your import decision."
        keywords="Japanese car import Kenya vs UAE, Kenya Japan car import, UAE Japan car import, import cost comparison, Japanese car import 2025"
        canonicalUrl="https://garimoto.co.ke/blog/japanese-car-import-kenya-vs-uae"
        image="https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png"
        type="article"
      />

      <StructuredData 
        type="article"
        data={{
          title: "Japanese Car Import Kenya vs UAE - Complete Cost Comparison",
          description: "Comprehensive analysis comparing costs of importing Japanese cars from Kenya vs UAE including prices, shipping, and total expenses.",
          image: "https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png",
          datePublished: "2025-08-04",
          dateModified: "2025-08-04"
        }}
      />
      
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        <BreadcrumbNav items={breadcrumbItems} />
        
        <article className="mt-6">
          <header className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Plane className="h-10 w-10 text-blue-600" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Japanese Car Import: Kenya vs UAE
                </h1>
                <p className="text-xl text-gray-600">
                  Which route offers better value for money in 2025?
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>Published: August 4, 2025</span>
              <span>•</span>
              <span>Updated: August 4, 2025</span>
              <span>•</span>
              <span>7 min read</span>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700">
                Thinking of importing a Japanese car but unsure whether to source from 
                Kenya or UAE? This comprehensive comparison analyzes costs, benefits, 
                and considerations for both routes to help you make an informed decision.
              </p>
            </div>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-green-600" />
                    Cost Comparison Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 p-3 text-left">Aspect</th>
                          <th className="border border-gray-200 p-3 text-left">From Kenya</th>
                          <th className="border border-gray-200 p-3 text-left">From UAE</th>
                          <th className="border border-gray-200 p-3 text-left">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-200 p-3 font-medium">{row.aspect}</td>
                            <td className="border border-gray-200 p-3">{row.kenya}</td>
                            <td className="border border-gray-200 p-3">{row.uae}</td>
                            <td className="border border-gray-200 p-3">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                row.winner === 'Kenya' ? 'bg-blue-100 text-blue-800' :
                                row.winner === 'UAE' ? 'bg-green-100 text-green-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {row.winner}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">Importing from Kenya (Direct)</h2>
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">Advantages:</h3>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Better vehicle condition and maintenance history</li>
                    <li>Simpler documentation process</li>
                    <li>Established dealer relationships</li>
                    <li>Right-hand drive vehicles (suitable for Kenya)</li>
                    <li>No language barriers</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-red-600 mb-2">Disadvantages:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Higher initial purchase prices</li>
                    <li>Limited inventory compared to Japan</li>
                    <li>Longer shipping distance and costs</li>
                    <li>Potential markup by local dealers</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">Importing via UAE</h2>
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">Advantages:</h3>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Lower purchase prices (10-15% savings possible)</li>
                    <li>Shorter shipping distance to Kenya</li>
                    <li>Lower shipping costs</li>
                    <li>Larger inventory selection</li>
                    <li>Competitive market pricing</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-red-600 mb-2">Disadvantages:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>More complex documentation</li>
                    <li>Potential quality concerns</li>
                    <li>Risk of accident-damaged vehicles</li>
                    <li>Cultural and language barriers</li>
                    <li>Additional verification steps needed</li>
                  </ul>
                </div>
              </div>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-800">
                    <AlertTriangle className="h-6 w-6" />
                    Key Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-orange-800">
                    <p><strong>Vehicle History:</strong> UAE vehicles may have been exposed to harsh desert conditions or flood damage. Always request detailed inspection reports.</p>
                    <p><strong>Total Cost Analysis:</strong> While UAE prices may be lower, factor in verification costs, additional inspections, and potential repairs.</p>
                    <p><strong>Warranty:</strong> Vehicles imported from Kenya often come with better warranty terms and after-sales support.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">Real Cost Example: Toyota Prius 2018</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-4">
                    <h3 className="font-bold text-blue-600 mb-3">From Kenya</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Purchase Price:</span>
                        <span>USD 18,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span>USD 1,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Import Duties:</span>
                        <span>KES 580,000</span>
                      </div>
                      <div className="flex justify-between font-bold border-t pt-2">
                        <span>Total Cost:</span>
                        <span>~KES 3,150,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-green-200 rounded-lg p-4">
                    <h3 className="font-bold text-green-600 mb-3">From UAE</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Purchase Price:</span>
                        <span>USD 15,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span>USD 1,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Import Duties:</span>
                        <span>KES 500,000</span>
                      </div>
                      <div className="flex justify-between font-bold border-t pt-2">
                        <span>Total Cost:</span>
                        <span>~KES 2,900,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 text-green-600 font-medium">
                  Potential savings: KES 250,000 (UAE route)
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Timeline Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-blue-600">From Kenya</h4>
                    <p className="text-sm text-gray-600">4-6 weeks total</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">From UAE</h4>
                    <p className="text-sm text-gray-600">3-5 weeks total</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    Money-Saving Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Always get pre-purchase inspections</p>
                  <p>• Compare multiple dealers/sources</p>
                  <p>• Factor in all hidden costs</p>
                  <p>• Consider vehicle age vs condition</p>
                  <p>• Verify import documentation</p>
                </CardContent>
              </Card>

              <SocialShare 
                title="Japanese Car Import Kenya vs UAE"
                url="https://garimoto.co.ke/blog/japanese-car-import-kenya-vs-uae"
              />
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default JapaneseCarImportKenyaVsUAE;