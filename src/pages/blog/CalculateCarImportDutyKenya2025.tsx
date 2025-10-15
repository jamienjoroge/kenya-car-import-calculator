import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import StructuredData from '@/components/StructuredData';
import HowToSchema from '@/components/HowToSchema';
import SocialShare from '@/components/SocialShare';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, CheckCircle, AlertTriangle, FileText, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';

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
      title: "Apply Age-Based Depreciation",
      description: "KRA applies depreciation to CRSP based on vehicle age: 5% per year for first 8 years, then 10% per year (maximum 70%).",
      formula: "Depreciated CRSP = Original CRSP × (1 - Depreciation Rate)"
    },
    {
      step: "3", 
      title: "Understanding CIF & Import Duty (ID)",
      description: "CIF (Cost, Insurance, Freight) represents your vehicle's landed value at Mombasa port. For KRA duty purposes, the Depreciated CRSP serves as the customs value. Import Duty rate is typically 25% of this value.",
      formula: "Import Duty = 25% × Depreciated CRSP (Customs Value)"
    },
    {
      step: "4",
      title: "Excise Duty (ED)", 
      description: "Base: Depreciated CRSP + Import Duty. Rates vary by engine size and fuel type.",
      formula: "Excise = (Depreciated CRSP + Import Duty) × Excise Rate"
    },
    {
      step: "5",
      title: "IDF & RDL",
      description: "Import Declaration Fee (2.25%) and Railway Development Levy (2%) of Depreciated CRSP.",
      formula: "IDF = 2.25% × Depreciated CRSP, RDL = 2% × Depreciated CRSP"
    },
    {
      step: "6",
      title: "VAT (16%)",
      description: "Applied on the total of Depreciated CRSP + Import Duty + Excise + IDF + RDL.",
      formula: "VAT = 16% × (Depreciated CRSP + ID + ED + IDF + RDL)"
    },
    {
      step: "7",
      title: "Total Taxes & Landed Cost",
      description: "Sum all taxes and add port/clearing/registration fees.",
      formula: "Landed Cost = Depreciated CRSP + Total Taxes + Port/Clearing Fees"
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
      mistake: "Ignoring age-based depreciation",
      solution: "Apply KRA's depreciation schedule: 5% per year for first 8 years, then 10% per year (max 70%)."
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
      },
      {
        question: "How does vehicle age affect import duty?",
        answer: "KRA applies age-based depreciation to CRSP values. Vehicles depreciate 5% per year for the first 8 years, then 10% per year thereafter, with a maximum depreciation of 70%."
      },
      {
        question: "What's the role of NTSA in the import process?",
        answer: "After clearing with KRA at Mombasa port, your vehicle must pass NTSA (National Transport and Safety Authority) inspection before registration. This costs around KSh 15,000 and verifies roadworthiness and compliance with Kenyan standards."
      },
      {
        question: "How much lower are hybrid car duties?",
        answer: "Hybrid vehicles benefit from reduced excise duty (typically 10% vs 20-25% for petrol). This can save KSh 100,000+ depending on vehicle value. However, you must prove hybrid status with manufacturer documentation during clearance at Mombasa."
      },
      {
        question: "Can I use the Garimoto calculator for Mombasa port clearance estimates?",
        answer: "Yes! The Garimoto calculator provides comprehensive estimates including KRA taxes, Mombasa port clearing fees, NTSA inspection, and registration costs—giving you the full landed cost picture before importing."
      }
    ]
  };

  const structuredDataSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Car Import Duty Calculator Kenya (2025) – KRA Guide by Garimoto",
    "description": "Learn how to calculate car import duty in Kenya for 2025. Step-by-step breakdown with CRSP, depreciation, and KRA tax formula. Try the Garimoto duty calculator today.",
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
    "datePublished": "2025-09-23",
    "dateModified": "2025-09-23",
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
        title="[2025 Guide] How to Calculate Car Import Duty Kenya | Save KES 200K+"
        description="⚡ Updated Sept 23, 2025 | Step-by-step formula to calculate exact KRA import duty + VAT + IDF. Includes worked examples, depreciation tables & common mistakes. Read the full guide →"
        keywords="calculate car import duty kenya, kenya import duty calculation, crsp calculator kenya, kra duty calculator, vehicle import tax kenya, how to calculate import duty, kenya customs duty calculation, sept 2025"
        canonicalUrl="https://garimoto.co.ke/blog/calculate-car-import-duty-kenya-2025"
        type="article"
      />
      
      <HowToSchema 
        name="How to Calculate Car Import Duty in Kenya"
        description="Complete step-by-step guide to calculating car import duty in Kenya using KRA CRSP rates, including all taxes and fees."
        totalTime="PT5M"
        steps={[
          {
            name: "Determine the CRSP Value",
            text: "Find your vehicle's Current Retail Selling Price (CRSP) from the official KRA database based on make, model, year, and engine capacity.",
            url: "https://garimoto.co.ke/import-duty-calculator-kenya"
          },
          {
            name: "Calculate Depreciation",
            text: "Apply KRA's depreciation schedule: Year 1 = 25%, Year 2 = 37.5%, Year 3 = 50%, Year 4+ = 62.5% depreciation from CRSP."
          },
          {
            name: "Calculate Import Duty",
            text: "Multiply depreciated CRSP by 35% (standard rate) or 25% (EAC rate) for import duty amount."
          },
          {
            name: "Calculate Excise Duty",
            text: "Apply excise duty rate based on vehicle category: 20% for standard, 25% for mid-range, 30% for luxury, 35% for pick-ups."
          },
          {
            name: "Calculate VAT",
            text: "Add 16% VAT on the total of CRSP + Import Duty + Excise Duty."
          },
          {
            name: "Add Fixed Fees",
            text: "Include IDF (KES 3.5%), Railway Development Levy (KES 2%), and fixed fees (IDF: KES 60,000, RDL: KES 45,000)."
          },
          {
            name: "Get Total Landing Cost",
            text: "Sum all amounts for total import cost including customs, taxes, and fees."
          }
        ]}
      />
      
      <StructuredData type="article" data={structuredDataSchema} dateModified="2025-09-23" />
      <StructuredData type="faq" data={faqData} />
      
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
              <Badge variant="secondary" className="bg-green-100 text-green-800">✅ Updated September 2025</Badge>
              <Badge variant="outline">Import Guide</Badge>
              <Badge variant="outline">KRA Duty</Badge>
            </div>
            <CardTitle className="text-3xl font-bold">
              Car Import Duty Calculator Kenya (2025) – Complete KRA Guide
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Published: September 23, 2025</span>
              <span>•</span>
              <span>Last Updated: September 23, 2025</span>
              <span>•</span>
              <span>14 min read</span>
              <span>•</span>
              <span>By GariMoto Team</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-800">🎯 Why This Guide Matters in 2025</h2>
              <p className="text-blue-700 mb-3">
                If you're importing a car into Kenya through Mombasa port, your final landing cost depends on a clear sequence of taxes anchored on the CRSP (Current Retail Selling Price) published by KRA. With inflation, CRSP updates, and changing KRA regulations, understanding these calculations is critical before you bid at auction or negotiate with a dealer.
              </p>
              <p className="text-blue-700">
                This comprehensive guide walks you through the exact order of calculations, what each tax means, how CIF values work, and includes a real worked example (Toyota Axio 2018) so you can replicate the process for any vehicle clearing through Kenyan customs.
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
                <li>• Apply age-based depreciation to CRSP (5% per year for first 8 years, then 10% per year, max 70%).</li>
                <li>• Compute Import Duty (25%) on the depreciated CRSP value.</li>
                <li>• Compute Excise Duty on (Depreciated CRSP + Import Duty) — rate depends on engine/vehicle type.</li>
                <li>• Add IDF (2.25%) and RDL (2%) on Depreciated CRSP.</li>
                <li>• Compute VAT (16%) on everything above: (Depreciated CRSP + Import Duty + Excise + IDF + RDL).</li>
                <li>• Total Taxes = Import Duty + Excise + IDF + RDL + VAT.</li>
                <li>• Landed Cost (ex-Mombasa) = Depreciated CRSP + Total Taxes + port/clearing/number plates/registration (cash items).</li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded">
                <p className="text-yellow-800 text-sm">
                  💡 <strong>Depreciation:</strong> KRA applies age-based depreciation to CRSP values. Vehicles depreciate 5% per year for the first 8 years, then 10% per year thereafter, with a maximum depreciation of 70%.
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
                Real-World Example: Toyota Axio 2018 (1.5L Petrol)
              </h2>
              <p className="mb-2"><strong>Vehicle Details:</strong></p>
              <ul className="mb-4 text-sm space-y-1">
                <li>• <strong>Make/Model:</strong> Toyota Axio 2018</li>
                <li>• <strong>Engine:</strong> 1.5L Petrol (1496cc)</li>
                <li>• <strong>Age:</strong> 7 years old (as of 2025)</li>
                <li>• <strong>CRSP (2018):</strong> KSh 1,800,000</li>
                <li>• <strong>Excise Rate:</strong> 20% (≤1500cc petrol)</li>
                <li>• <strong>Port:</strong> Mombasa</li>
              </ul>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">1. Apply Age-Based Depreciation (7 years × 5% = 35%)</h4>
                  <p className="font-mono text-sm">Depreciated CRSP = 1,800,000 × (1 - 0.35) = KSh 1,170,000</p>
                  <p className="text-xs text-gray-600 mt-1">Note: First 8 years depreciate at 5% per year</p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">2. Import Duty (25% of Customs Value)</h4>
                  <p className="font-mono text-sm">Import Duty = 0.25 × 1,170,000 = KSh 292,500</p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">3. Excise Duty (20% for ≤1500cc petrol)</h4>
                  <p className="font-mono text-sm">Excise Base = 1,170,000 + 292,500 = 1,462,500</p>
                  <p className="font-mono text-sm">Excise Duty = 0.20 × 1,462,500 = KSh 292,500</p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">4. IDF (2.25% of Depreciated CRSP)</h4>
                  <p className="font-mono text-sm">IDF = 0.0225 × 1,170,000 = KSh 26,325</p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">5. RDL (2% of Depreciated CRSP)</h4>
                  <p className="font-mono text-sm">RDL = 0.02 × 1,170,000 = KSh 23,400</p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">6. VAT (16% on Total)</h4>
                  <p className="font-mono text-sm">VAT Base = 1,170,000 + 292,500 + 292,500 + 26,325 + 23,400 = 1,804,725</p>
                  <p className="font-mono text-sm">VAT = 0.16 × 1,804,725 = KSh 288,756</p>
                </div>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <h4 className="font-semibold mb-2 text-blue-800">Total Import Taxes</h4>
                  <p className="font-mono text-sm mb-2">Total KRA Taxes = 292,500 + 292,500 + 26,325 + 23,400 + 288,756</p>
                  <p className="font-mono text-lg font-bold text-blue-800 mb-3">= KSh 923,481</p>
                  
                  <h4 className="font-semibold mb-2 text-blue-800">Landed Cost at Mombasa Port</h4>
                  <p className="font-mono text-sm">Depreciated CRSP: KSh 1,170,000</p>
                  <p className="font-mono text-sm">Total Taxes: KSh 923,481</p>
                  <p className="font-mono text-sm">Clearing Fees: ~KSh 80,000</p>
                  <p className="font-mono text-sm">NTSA Inspection: ~KSh 15,000</p>
                  <p className="font-mono text-sm">Number Plates: ~KSh 5,000</p>
                  <p className="font-mono text-sm border-t border-blue-300 mt-2 pt-2">Transport to Nairobi: ~KSh 20,000</p>
                  <p className="font-mono text-xl font-bold text-blue-800 mt-2">≈ KSh 2,213,481</p>
                  <p className="text-sm text-green-700 mt-3">💰 Age depreciation saved you KSh 630,000 compared to 2018 CRSP value!</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded">
                <p className="text-sm text-yellow-800 mb-2">
                  <strong>💡 Pro Tip:</strong> This Toyota Axio 2018 calculation assumes you're clearing at Mombasa port. Timeline from winning auction to Nairobi delivery: typically 6-8 weeks.
                </p>
                <p className="text-sm text-yellow-800">
                  Want instant calculations for your specific vehicle? Use our <Link to="/" className="text-blue-600 hover:underline font-semibold">Garimoto Import Duty Calculator</Link> — just select make, model, and year for accurate duty estimates.
                </p>
              </div>
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
                <li>• <Link to="/blog/what-is-crsp" className="text-blue-600 hover:underline">CRSP reference</Link> (model, trim, year) from KRA</li>
                <li>• <Link to="/blog/japanese-auction-sheet-guide-2025" className="text-blue-600 hover:underline">Auction sheet guide</Link> (for Japanese imports via Mombasa)</li>
                <li>• IDF (Import Declaration Form) application & pre-inspection certificate</li>
                <li>• Bill of Lading (shipping document for Mombasa port arrival)</li>
                <li>• Original ownership/export certificate from country of origin</li>
                <li>• TIMS account (for registration and ownership transfer)</li>
                <li>• NTSA inspection booking (post-clearance requirement)</li>
                <li>• Budget cushion for exchange-rate fluctuations and port storage charges</li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-100 rounded border border-yellow-400">
                <p className="text-sm text-yellow-900 mb-2">
                  <strong>⏱️ Mombasa Port Timeline:</strong>
                </p>
                <ul className="text-sm text-yellow-900 space-y-1">
                  <li>• Shipping from Japan: 3-4 weeks</li>
                  <li>• Port clearance (KRA processing): 3-7 days</li>
                  <li>• NTSA inspection: 1-2 days</li>
                  <li>• Transport Mombasa → Nairobi: 1 day</li>
                  <li>• <strong>Total typical time:</strong> 6-8 weeks from auction to your hands</li>
                </ul>
              </div>
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

            {/* Step 4: Using Garimoto Calculator */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-green-800">Step 4: Using the Garimoto Import Duty Calculator</h2>
              <p className="mb-4 text-gray-700">
                Manual calculations are complex and time-consuming. The <strong>Garimoto Import Duty Calculator</strong> automates the entire process:
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Instant CRSP lookup:</strong> Select your exact make, model, year, and trim—our database has 10,000+ vehicles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Automatic depreciation:</strong> Age-based calculations applied correctly (5% for first 8 years, 10% thereafter)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>All KRA taxes included:</strong> Import Duty, Excise, IDF, RDL, VAT calculated in correct sequence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mombasa clearing costs:</strong> Port fees, NTSA inspection, number plates, transport to Nairobi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Updated for 2025:</strong> Latest KRA rates and CRSP values (including September 2025 changes)</span>
                </li>
              </ul>
              <div className="bg-white p-4 rounded-lg border-2 border-green-400 mb-4">
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Example:</strong> For the Toyota Axio 2018 above, instead of 30 minutes of calculations, get your answer in 10 seconds:
                </p>
                <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                  <li>Select "Toyota" → "Axio" → "2018"</li>
                  <li>Choose "1.5L Petrol" variant</li>
                  <li>Get instant breakdown: Taxes KSh 923,481 + Total Landed Cost KSh 2,213,481</li>
                </ol>
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                  <Link to="/">
                    <Calculator className="h-6 w-6 mr-2" />
                    Calculate Your Import Duty Now (Free)
                  </Link>
                </Button>
                <p className="text-xs text-gray-600 mt-2">No registration required • Instant results • 100% accurate KRA calculations</p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">How Garimoto Simplifies the Entire Process</h2>
              <p className="mb-4 text-gray-700">
                Importing a car into Kenya through Mombasa port doesn't have to be overwhelming. While the KRA duty calculation involves multiple steps—CRSP lookup, depreciation, Import Duty, Excise, IDF, RDL, and VAT—<strong>Garimoto automates everything</strong> so you can focus on finding the right vehicle.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2 text-red-600">❌ Without Garimoto:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Manual CRSP lookup from KRA PDFs</li>
                    <li>• Risk of calculation errors</li>
                    <li>• Uncertainty about total landing cost</li>
                    <li>• Surprise fees at Mombasa port</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border border-green-400">
                  <h4 className="font-semibold mb-2 text-green-600">✅ With Garimoto:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 10-second accurate calculations</li>
                    <li>• All costs included (KRA + Mombasa + NTSA)</li>
                    <li>• Budget confidently before bidding</li>
                    <li>• Updated with latest 2025 rates</li>
                  </ul>
                </div>
              </div>
              <div className="text-center bg-blue-600 text-white p-6 rounded-lg">
                <p className="text-lg mb-4">
                  <strong>Ready to import your dream car?</strong> Get started with Kenya's most trusted import duty calculator.
                </p>
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  <Link to="/">
                    <Calculator className="h-6 w-6 mr-2" />
                    Estimate Your Import Duty Instantly
                  </Link>
                </Button>
              </div>
            </div>

            {/* Social Share */}
            <SocialShare 
              title="Car Import Duty Calculator Kenya (2025) – KRA Guide by Garimoto"
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