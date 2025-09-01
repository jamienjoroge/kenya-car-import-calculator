import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, TrendingUp, DollarSign, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const BuyingLocallyVsImportingKenya2025 = () => {
  const comparisonData = [
    {
      car: "Toyota Axio 1500cc (2018)",
      localPrice: "KSh 1,950,000",
      importCost: "~KSh 1,550,000",
      savings: "~KSh 400,000",
      percentage: "21%"
    },
    {
      car: "Mazda Demio 1300cc (2018)",
      localPrice: "KSh 1,400,000",
      importCost: "~KSh 1,100,000",
      savings: "~KSh 300,000",
      percentage: "21%"
    },
    {
      car: "Toyota Harrier 2000cc (2018)",
      localPrice: "KSh 4,800,000",
      importCost: "~KSh 4,200,000",
      savings: "~KSh 600,000",
      percentage: "13%"
    },
    {
      car: "Honda Fit 1300cc (2017)",
      localPrice: "KSh 1,300,000",
      importCost: "~KSh 1,000,000",
      savings: "~KSh 300,000",
      percentage: "23%"
    }
  ];

  const importBenefits = [
    {
      title: "Better Selection",
      description: "Access thousands of cars in Japanese auctions, not just what local dealers have in stock",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Lower Mileage",
      description: "Direct imports often have less wear and tear compared to local yard cars",
      icon: <CheckCircle className="h-6 w-6 text-green-600" />
    },
    {
      title: "Verified History",
      description: "Access to auction sheets and inspection reports for complete transparency",
      icon: <AlertTriangle className="h-6 w-6 text-orange-600" />
    }
  ];

  const localBuyingReasons = [
    "You need the car immediately (no 6–8 week shipping wait)",
    "You want financing options (banks and SACCOs sometimes prefer local dealers)",
    "You aren't comfortable handling import paperwork or dealing with clearing agents",
    "You prefer having a local warranty and after-sales support",
    "You want to physically inspect the car before purchase"
  ];

  const faqData = [
    {
      question: "Is it cheaper to import a car in 2025?",
      answer: "Yes, importing a car directly can save you KSh 300,000–500,000 on average compared to buying from local dealers. However, you need to factor in the 6-8 week wait time and handle import paperwork yourself."
    },
    {
      question: "How much is duty for a Toyota Axio 2018?",
      answer: "Import duty for a Toyota Axio 2018 1500cc typically ranges from KSh 350,000 to KSh 450,000, depending on the CRSP value. Use our import duty calculator Kenya tool for exact calculations based on current rates."
    },
    {
      question: "How do I calculate import duty in Kenya?",
      answer: "Import duty in Kenya is calculated using the CRSP (Common Roll Schedule of Prices) value. The total includes Import Duty (25%), Excise Duty (25%), VAT (16%), plus clearing and registration fees. Our calculator provides accurate estimates."
    },
    {
      question: "What are the hidden costs of buying locally vs importing?",
      answer: "Local dealers add markups of KSh 200,000-500,000+, yard fees, and broker commissions. Importing involves shipping costs, clearing fees, and potential delays, but typically results in significant savings."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOPermalinks 
        title="Buying Locally vs Importing Cars Kenya 2025: Save KSh 400,000+ | GariMoto"
        description="🚗 Discover how much you can save importing vs buying locally in Kenya 2025. Complete cost comparison, Toyota Axio duty calculator & expert tips included."
        keywords="import duty calculator Kenya, cost of importing a car to Kenya 2025, buying a car locally vs importing Kenya, Toyota Axio duty Kenya 2018, car import savings Kenya"
        canonicalUrl="https://garimoto.co.ke/blog/buying-locally-vs-importing-kenya-2025"
        type="article"
      />
      
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
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
              <Badge variant="secondary">Cost Comparison</Badge>
              <Badge variant="outline">2025 Guide</Badge>
              <Badge variant="outline">Money Saving</Badge>
            </div>
            <CardTitle className="text-3xl font-bold">
              Buying Locally vs Importing a Car in Kenya: How Much Can You Save in 2025?
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Published: January 20, 2025</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>By GariMoto Editorial Team</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3 text-green-800">💰 The Smart Buyer's Guide to Car Purchasing in Kenya</h2>
              <p className="text-green-700">
                The Kenyan car market keeps getting more competitive, but importing a car yourself often saves you serious money — sometimes hundreds of thousands of shillings compared to buying from a local dealer. In this comprehensive guide, we break down real <strong>cost of importing a car to Kenya 2025</strong> comparisons and help you make the smartest financial decision.
              </p>
            </div>

            {/* Quick Calculator CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Calculator className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-800">Use Our Import Duty Calculator Kenya Tool</h3>
              </div>
              <p className="text-blue-700 mb-4">
                Get exact import costs for any vehicle before making your decision. Our <Link to="/" className="text-blue-800 font-semibold underline">import duty calculator Kenya</Link> uses current CRSP values for accurate estimates.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/">Calculate Import Costs →</Link>
              </Button>
            </div>

            {/* Why Imported Cars Are Cheaper */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Imported Cars Are Usually Cheaper in 2025</h2>
              <p className="text-gray-700 mb-4">
                When you import a car directly, you avoid the extra costs that local dealers add to maximize their profits. Here's what you skip:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-red-700 mb-2">Local Dealer Markups</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Dealer markups: KSh 200,000 to 500,000+</li>
                      <li>• Yard fees & financing charges</li>
                      <li>• Hidden commissions to brokers</li>
                      <li>• "Agent" fees and middleman costs</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-green-700 mb-2">Direct Import Costs Only</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Car auction price (FOB)</li>
                      <li>• Shipping costs</li>
                      <li>• KRA import duties (CRSP-based)</li>
                      <li>• Clearing and registration fees</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Cost Comparison Table */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Real Cost Comparison: Local Dealer vs DIY Import (2025)</h2>
              <p className="text-gray-700 mb-4">
                Here's how <strong>buying a car locally vs importing Kenya</strong> compares for popular models:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Car Model</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Local Yard Price</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DIY Import Cost</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Potential Savings</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">% Saved</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-300 px-4 py-3 font-medium">{row.car}</td>
                        <td className="border border-gray-300 px-4 py-3">{row.localPrice}</td>
                        <td className="border border-gray-300 px-4 py-3 text-blue-600 font-semibold">{row.importCost}</td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">{row.savings}</td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">{row.percentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Pro Tip:</strong> Use the <Link to="/" className="font-semibold underline">GariMoto Import Duty Calculator</Link> to get exact KRA duty estimates for your preferred car, including <strong>Toyota Axio duty Kenya 2018</strong> calculations.
                </p>
              </div>
            </div>

            {/* Benefits of Importing */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Additional Benefits of Importing Cars to Kenya</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {importBenefits.map((benefit, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-3">{benefit.icon}</div>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* When Local Makes Sense */}
            <div>
              <h2 className="text-2xl font-bold mb-4">When Buying Locally Still Makes Sense</h2>
              <p className="text-gray-700 mb-4">
                While importing usually saves money, there are situations where buying locally is the better choice:
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <ul className="space-y-3">
                  {localBuyingReasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-yellow-800">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Decision Framework */}
            <div>
              <h2 className="text-2xl font-bold mb-4">How to Make Your Decision: 3-Step Process</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                      <h4 className="font-semibold">Calculate Import Costs</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Use our <Link to="/" className="text-blue-600 underline">import duty calculator Kenya</Link> to get exact costs including duties, shipping, and clearing fees.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                      <h4 className="font-semibold">Check Local Prices</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Research current yard prices on Jiji, Cheki, or visit local dealers for the same model and year.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                      <h4 className="font-semibold">Compare & Decide</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Factor in your timeline, comfort with paperwork, and whether the savings justify the extra effort.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-green-800">Key Takeaway for 2025</h2>
              <p className="text-green-700 text-lg mb-4">
                Direct importation remains the smartest financial choice for many Kenyans in 2025. On average, you can save <strong>KSh 300,000–500,000</strong> on most 2017–2019 cars compared to buying locally — money you could use for insurance, servicing, or even an upgrade to a newer model.
              </p>
              <div className="bg-white rounded-lg p-4 border border-green-300">
                <h4 className="font-semibold text-green-800 mb-2">💡 Smart Money Tip:</h4>
                <p className="text-green-700 text-sm">
                  The savings from importing one car could cover your insurance for 3-4 years or fund major maintenance for the vehicle's lifetime.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-blue-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Calculate Your Savings?</h3>
              <p className="mb-6 text-blue-100">
                Before you make your decision, run your numbers using the GariMoto Import Duty Calculator — and see how much you could save today.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/">Calculate Import Costs Now →</Link>
              </Button>
            </div>

            {/* Related Tools */}
            <div className="grid md:grid-cols-3 gap-4 pt-8 border-t">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Calculator className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <h4 className="font-semibold mb-2">Budget Calculator</h4>
                  <p className="text-sm text-muted-foreground mb-3">Find cars within your budget</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/afford">Find Cars</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-green-600" />
                  <h4 className="font-semibold mb-2">Compare Costs</h4>
                  <p className="text-sm text-muted-foreground mb-3">Side-by-side comparison</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/compare">Compare Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                  <h4 className="font-semibold mb-2">Popular Cars</h4>
                  <p className="text-sm text-muted-foreground mb-3">Trending imports</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/popular">View Trends</Link>
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

export default BuyingLocallyVsImportingKenya2025;