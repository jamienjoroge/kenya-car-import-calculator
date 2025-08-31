import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import StructuredData from '@/components/StructuredData';
import SocialShare from '@/components/SocialShare';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, CheckCircle, AlertTriangle, FileText, TrendingUp } from 'lucide-react';

const CalculateCarImportDutyKenya2025 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Calculate Car Import Duty Kenya 2025" }
  ];

  const calculationSteps = [
    {
      step: "1",
      title: "Confirm the CRSP",
      description: "Use the latest KRA CRSP table for your exact variant (year, engine size, trim, transmission, fuel).",
      tips: ["Save the CRSP reference code/screenshot for your records", "If your trim isn't listed, use the closest match"]
    },
    {
      step: "2", 
      title: "Import Duty (ID)",
      description: "Rate: Typically 25%. Base: CRSP (value for duty).",
      formula: "Import Duty = 25% × CRSP"
    },
    {
      step: "3",
      title: "Excise Duty (ED)", 
      description: "Base: CRSP + Import Duty. Rates vary by engine size and fuel type.",
      formula: "Excise = (CRSP + Import Duty) × Excise Rate"
    },
    {
      step: "4",
      title: "IDF & RDL",
      description: "Import Declaration Fee (3.5%) and Railway Development Levy (2%) of CRSP.",
      formula: "IDF = 3.5% × CRSP, RDL = 2% × CRSP"
    },
    {
      step: "5",
      title: "VAT (16%)",
      description: "Applied on the total of CRSP + Import Duty + Excise + IDF + RDL.",
      formula: "VAT = 16% × (CRSP + ID + ED + IDF + RDL)"
    },
    {
      step: "6",
      title: "Total Taxes & Landed Cost",
      description: "Sum all taxes and add port/clearing/registration fees.",
      formula: "Landed Cost = CRSP + Total Taxes + Port/Clearing Fees"
    }
  ];

  const exciseRates = [
    { category: "≤ 1500 cc petrol", rate: "20%" },
    { category: "> 1500 cc petrol/diesel", rate: "25%" },
    { category: "Hybrids", rate: "10%" },
    { category: "EVs", rate: "0-10%" }
  ];

  const commonMistakes = [
    {
      mistake: "Adding extra depreciation",
      solution: "Not needed. CRSP already includes age adjustments."
    },
    {
      mistake: "Wrong excise bracket", 
      solution: "Check engine cc, body type, and fuel type (hybrid/EV)."
    },
    {
      mistake: "Missing IDF/RDL in VAT base",
      solution: "VAT applies after adding IDF & RDL."
    },
    {
      mistake: "Using catalogue/FOB instead of CRSP",
      solution: "KRA uses CRSP, not your auction price."
    },
    {
      mistake: "Ignoring cash items",
      solution: "Clearing, registration, and agent fees affect your real landing cost."
    }
  ];

  const faqData = {
    questions: [
      {
        question: "Is duty based on year of manufacture or registration?",
        answer: "Duty is based on CRSP for that year/variant. The 8-year rule uses first registration year for eligibility."
      },
      {
        question: "What excise rate applies to my car?",
        answer: "Passenger vehicles are commonly 20% (≤1500 cc) or 25% (>1500 cc). Hybrids/EVs may differ—confirm current Finance Act rates."
      },
      {
        question: "Do I pay VAT on IDF and RDL?",
        answer: "Yes. VAT is applied on CRSP + Import Duty + Excise + IDF + RDL."
      },
      {
        question: "Can I estimate using my auction price instead of CRSP?",
        answer: "No. KRA taxes are anchored on CRSP, not the auction price."
      }
    ]
  };

  const structuredDataSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Step-by-Step: Calculate Car Import Duty in Kenya (2025)",
    "description": "Learn the exact steps to calculate KRA car import duty in Kenya using CRSP, excise, VAT, IDF & RDL—plus a worked example and common mistakes.",
    "author": {
      "@type": "Organization",
      "name": "GariMoto"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "GariMoto",
      "logo": {
        "@type": "ImageObject",
        "url": "https://garimoto.co.ke/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://garimoto.co.ke/blog/calculate-car-import-duty-kenya-2025"
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": faqData.questions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Step-by-Step: Calculate Car Import Duty in Kenya (2025)"
        description="Learn the exact steps to calculate KRA car import duty in Kenya using CRSP, excise, VAT, IDF & RDL—plus a worked example and common mistakes."
        keywords="calculate car import duty kenya, import duty calculator kenya, kra duty 2025, crsp kenya, how to calculate duty kenya, excise duty cars kenya, vat on imported cars kenya"
        canonicalUrl="https://garimoto.co.ke/blog/calculate-car-import-duty-kenya-2025"
        type="article"
      />
      
      <StructuredData schema={structuredDataSchema} />
      
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbNav items={breadcrumbItems} />
        
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
              <Badge variant="secondary">Updated for 2025</Badge>
              <Badge variant="outline">Import Guide</Badge>
              <Badge variant="outline">KRA Duty</Badge>
            </div>
            <CardTitle className="text-3xl font-bold">
              Step-by-Step: Calculating Car Import Duty in Kenya (2025)
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Published: January 1, 2025</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>By GariMoto Team</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-800">🎯 Updated for 2025</h2>
              <p className="text-blue-700">
                If you're importing a car into Kenya, your final landing cost depends on a clear sequence of taxes anchored on the CRSP (Current Retail Selling Price) published by KRA. This guide walks you through the exact order of calculations, what each tax means, and a worked example you can copy.
              </p>
            </div>

            {/* Quick Summary */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Quick Summary (TL;DR)
              </h2>
              <ul className="space-y-2 text-green-700">
                <li>• Start with <Link to="/blog/what-is-crsp" className="text-blue-600 hover:underline">CRSP</Link> for your exact make, model, year, and trim.</li>
                <li>• Compute Import Duty (25%) on the value for duty (CRSP basis).</li>
                <li>• Compute Excise Duty on (CRSP + Import Duty) — rate depends on engine/vehicle type.</li>
                <li>• Add IDF (3.5%) and RDL (2%) on CRSP (or value for duty).</li>
                <li>• Compute VAT (16%) on everything above: (CRSP + Import Duty + Excise + IDF + RDL).</li>
                <li>• Total Taxes = Import Duty + Excise + IDF + RDL + VAT.</li>
                <li>• Landed Cost (ex-Mombasa) = Car price basis (CRSP proxy) + Total Taxes + port/clearing/number plates/registration (cash items).</li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded">
                <p className="text-yellow-800 text-sm">
                  💡 <strong>Depreciation:</strong> You don't apply extra depreciation manually. The CRSP already reflects age and market value for that model/year as per KRA's schedule.
                </p>
              </div>
            </div>

            {/* Calculation Steps */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Step-by-Step Calculation Process</h2>
              <div className="grid gap-6">
                {calculationSteps.map((step, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                          {step.step}
                        </span>
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3">{step.description}</p>
                      {step.formula && (
                        <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-3">
                          {step.formula}
                        </div>
                      )}
                      {step.tips && (
                        <ul className="text-sm text-gray-600 space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex}>• {tip}</li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Excise Rates Table */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Typical Excise Rates (Passenger Vehicles)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Vehicle Category</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Excise Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exciseRates.map((rate, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">{rate.category}</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">{rate.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Note: Special body types (e.g., double-cab pickups) may attract different excise. Always confirm the current rate for your vehicle category.
              </p>
            </div>

            {/* Worked Example */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Calculator className="h-5 w-5 mr-2" />
                Worked Example (Illustrative)
              </h2>
              <p className="mb-4">Assume a 1.5L petrol sedan (≤1500 cc) with CRSP of KSh 1,000,000 and excise at 20%.</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">1. Import Duty (25%)</h4>
                  <p className="font-mono text-sm">ID = 0.25 × 1,000,000 = KSh 250,000</p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">2. Excise Duty (20% on CRSP + ID)</h4>
                  <p className="font-mono text-sm">Base = 1,000,000 + 250,000 = 1,250,000</p>
                  <p className="font-mono text-sm">ED = 0.20 × 1,250,000 = KSh 250,000</p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">3. IDF (3.5% of CRSP)</h4>
                  <p className="font-mono text-sm">IDF = 0.035 × 1,000,000 = KSh 35,000</p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">4. RDL (2% of CRSP)</h4>
                  <p className="font-mono text-sm">RDL = 0.02 × 1,000,000 = KSh 20,000</p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">5. VAT (16% on CRSP + ID + ED + IDF + RDL)</h4>
                  <p className="font-mono text-sm">VAT Base = 1,000,000 + 250,000 + 250,000 + 35,000 + 20,000 = 1,555,000</p>
                  <p className="font-mono text-sm">VAT = 0.16 × 1,555,000 = KSh 248,800</p>
                </div>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <h4 className="font-semibold mb-2 text-blue-800">Total Calculation</h4>
                  <p className="font-mono text-sm">Total Taxes = 250,000 + 250,000 + 35,000 + 20,000 + 248,800 = KSh 803,800</p>
                  <p className="font-semibold mt-2">Indicative Landed Cost (ex-Mombasa)</p>
                  <p className="font-mono text-sm">= CRSP 1,000,000 + Taxes 803,800 + Fees ~100,000</p>
                  <p className="font-mono text-lg font-bold text-blue-800">≈ KSh 1,903,800</p>
                </div>
              </div>
              
              <p className="mt-4 text-sm text-gray-600">
                Replace the CRSP and excise rate with your vehicle's exact values, or run it in our <Link to="/" className="text-blue-600 hover:underline">Import Duty Calculator</Link> for instant results.
              </p>
            </div>

            {/* Common Mistakes */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2 text-red-500" />
                Common Mistakes (and How to Avoid Them)
              </h2>
              <div className="grid gap-4">
                {commonMistakes.map((item, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">❌ {item.mistake}</h4>
                    <p className="text-red-700">✅ {item.solution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Checklist */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-yellow-800 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Documents & Timing Checklist
              </h2>
              <ul className="space-y-2 text-yellow-700">
                <li>• <Link to="/blog/what-is-crsp" className="text-blue-600 hover:underline">CRSP reference</Link> (model, trim, year)</li>
                <li>• <Link to="/blog/japanese-auction-sheet-guide-2025" className="text-blue-600 hover:underline">Auction sheet guide</Link> (for Japanese imports)</li>
                <li>• IDF application & pre-inspection certificate</li>
                <li>• Ownership/export docs from origin</li>
                <li>• TIMS account (for registration and ownership transfer)</li>
                <li>• Budget cushion for exchange-rate moves and port charges</li>
              </ul>
              <p className="mt-4 text-sm text-yellow-800">
                <strong>Typical shipping + clearing time:</strong> 6–8 weeks (varies by line/season).
              </p>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqData.questions.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Next Step CTA */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Next Step</h2>
              <p className="mb-6 text-blue-100">
                Get your precise number in seconds with the Garimoto Import Duty Calculator. It applies the latest CRSP and tax sequence so you can budget confidently before you bid or buy.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate Import Duty Now
                </Link>
              </Button>
            </div>

            {/* Social Share */}
            <SocialShare 
              title="Step-by-Step: Calculate Car Import Duty in Kenya (2025)"
              url="https://garimoto.co.ke/blog/calculate-car-import-duty-kenya-2025"
            />
          </CardContent>
        </Card>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default CalculateCarImportDutyKenya2025;