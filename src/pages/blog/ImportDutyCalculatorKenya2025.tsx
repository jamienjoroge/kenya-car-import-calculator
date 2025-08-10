import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import VehicleImportCalculator from '@/components/VehicleImportCalculator';
import StructuredData from '@/components/StructuredData';
import SocialShare from '@/components/SocialShare';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const ImportDutyCalculatorKenya2025 = () => {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Import Duty Calculator Kenya 2025" }
  ];

  const calculatorFeatures = [
    "Official 2025 CRSP database integration",
    "Real-time KRA duty calculations", 
    "Age-based vehicle depreciation",
    "Multiple currency support (USD, EUR, JPY)",
    "Comprehensive fee breakdown",
    "PDF quote generation",
    "VAT and excise tax calculations"
  ];

  const faqData = {
    questions: [
      {
        question: "How accurate is the Kenya import duty calculator?",
        answer: "Our calculator uses the official 2025 CRSP database from KRA, ensuring 99.9% accuracy for duty calculations. All rates are updated in real-time."
      },
      {
        question: "What fees are included in the calculation?",
        answer: "The calculator includes import duty, VAT, excise duty, IDF, RDL, and all applicable KRA fees based on your vehicle specifications."
      },
      {
        question: "Can I calculate duties for any vehicle make?",
        answer: "Yes, our database covers all major vehicle makes and models with official CRSP values for accurate duty calculations."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Import Duty Calculator Kenya 2025 - FREE CRSP Calculator | Official KRA Rates"
        description="Calculate exact Kenya import duty costs with our FREE 2025 calculator. Official KRA CRSP database, instant results, save thousands on vehicle import costs. Try now!"
        keywords="import duty calculator Kenya 2025, KRA CRSP calculator, Kenya car import calculator, vehicle import duty calculator, Kenya customs calculator"
        canonicalUrl="https://garimoto.co.ke/blog/import-duty-calculator-kenya-2025"
        image="https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png"
        type="article"
      />

      <StructuredData 
        type="article"
        data={{
          title: "Import Duty Calculator Kenya 2025 - Complete Guide",
          description: "Comprehensive guide to calculating Kenya import duties using the official 2025 CRSP calculator with real-time KRA rates.",
          image: "https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png",
          datePublished: "2025-08-04",
          dateModified: "2025-08-04"
        }}
      />

      <StructuredData type="faq" data={faqData} />
      
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        <BreadcrumbNav items={breadcrumbItems} />
        
        <article className="mt-6">
          <header className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="h-10 w-10 text-blue-600" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Import Duty Calculator Kenya 2025
                </h1>
                <p className="text-xl text-gray-600">
                  Calculate exact import costs with official KRA CRSP rates
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>Published: August 4, 2025</span>
              <span>•</span>
              <span>Updated: August 4, 2025</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                15,000+ calculations this month
              </span>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700">
                Looking to import a vehicle to Kenya? Our comprehensive import duty calculator 
                helps you determine exact costs using the official 2025 CRSP database. Save 
                thousands by knowing the real import expenses before you buy.
              </p>
            </div>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-blue-600" />
                    FREE Kenya Import Duty Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <VehicleImportCalculator />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Use Our Import Duty Calculator?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {calculatorFeatures.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {calculatorFeatures.slice(4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">How the Calculator Works</h2>
                <div className="prose max-w-none">
                  <p>
                    Our import duty calculator uses the official Kenya Revenue Authority (KRA) 
                    CRSP database to provide accurate duty calculations. Here's how it works:
                  </p>
                  
                  <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><strong>Vehicle Selection:</strong> Choose your vehicle make, model, and year</li>
                    <li><strong>CRSP Lookup:</strong> System fetches official CRSP value from KRA database</li>
                    <li><strong>Duty Calculation:</strong> Calculates all applicable taxes and fees</li>
                    <li><strong>Total Cost:</strong> Provides comprehensive breakdown of all expenses</li>
                  </ol>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Fees Calculated Include:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Import Duty (varies by vehicle age and type)</li>
                    <li>Value Added Tax (VAT) - 16%</li>
                    <li>Excise Duty (based on engine capacity)</li>
                    <li>Import Declaration Fee (IDF) - 2.25%</li>
                    <li>Railway Development Levy (RDL) - 1.5%</li>
                    <li>Additional clearance and handling fees</li>
                  </ul>
                </div>
              </div>

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
                    <Shield className="h-5 w-5" />
                    Calculator Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">100% Free to use</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Official KRA database</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Instant results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Save thousands</span>
                  </div>
                </CardContent>
              </Card>

              <SocialShare 
                title="Import Duty Calculator Kenya 2025"
                url="https://garimoto.co.ke/blog/import-duty-calculator-kenya-2025"
              />
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default ImportDutyCalculatorKenya2025;