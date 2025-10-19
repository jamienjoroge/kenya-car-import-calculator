import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Calendar, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOPermalinks from '@/components/SEOPermalinks';
import FAQSchema from '@/components/FAQSchema';
import HowToSchema from '@/components/HowToSchema';
import AdSpace from '@/components/AdSpace';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const CertificateOfOriginOct2025 = () => {
  const faqs = [
    {
      question: "What is a Certificate of Origin?",
      answer: "A Certificate of Origin (COO) is an official document that declares which country a product was manufactured in. For vehicle imports to Kenya, it verifies where your car was originally made, not just where you bought it from."
    },
    {
      question: "My car is already at Mombasa port without COO. What do I do?",
      answer: "Contact your supplier immediately to obtain the Certificate of Origin retroactively. You'll need to pay penalties ranging from KES 50,000-200,000 depending on vehicle value. Your car may be held at port until documentation is complete, incurring storage fees of KES 5,000-10,000/day."
    },
    {
      question: "How do I get a Certificate of Origin from Japan?",
      answer: "For Japanese vehicles, contact the Japan Automobile Manufacturers Association (JAMA) or your exporter. They can issue a COO within 3-7 business days. Cost: ~JPY 5,000-10,000 (~KES 4,000-8,000). Most reputable Japanese exporters provide this automatically now."
    },
    {
      question: "Does COO apply to all vehicles or just new ones?",
      answer: "The Certificate of Origin requirement applies to ALL vehicle imports - new and used. Even 8-year-old cars must have a COO showing where they were originally manufactured."
    },
    {
      question: "Can I use a Bill of Sale instead of Certificate of Origin?",
      answer: "No, a Bill of Sale only proves purchase. A Certificate of Origin proves manufacturing country. KRA will reject Bill of Sale as a substitute for COO. Both documents are required but serve different purposes."
    }
  ];

  const howToSteps = [
    {
      name: "Contact your vehicle supplier immediately",
      text: "If you already purchased a vehicle, contact your exporter or dealer to request a Certificate of Origin. Explain that Kenya now requires COO for all vehicle imports as of October 1, 2025."
    },
    {
      name: "Identify the vehicle's country of manufacture",
      text: "Verify where your car was originally made (not where you bought it). Japanese cars made in Japan get COO from JAMA. Cars made in UK need COO from British Chamber of Commerce. UAE-sourced vehicles need origin country documentation."
    },
    {
      name: "Obtain COO from official authority",
      text: "Japan: JAMA or exporter. UK: British Chamber. UAE: Ministry of Economy. China: CCPIT. Processing time: 3-10 business days. Cost: ~KES 4,000-15,000 depending on country.",
      url: "https://crspkenya.com/blog/certificate-of-origin-october-2025"
    },
    {
      name: "Submit COO with other import documents to KRA",
      text: "Present COO along with Bill of Lading, Export Certificate, Commercial Invoice, and Insurance. KRA customs will verify authenticity. Without COO, clearance will be denied and penalties applied."
    }
  ];

  return (
    <>
      <SEOPermalinks
        title="KRA October 1 Deadline: Certificate of Origin Now Mandatory - What Importers Must Know"
        description="⚠️ 18 days after deadline: What happens if you imported without Certificate of Origin? Penalties, compliance steps & how to fix it. Updated Oct 19, 2025"
        keywords="Certificate of Origin Kenya, KRA October 1 deadline, COO vehicle import, import documentation Kenya 2025, KRA penalties, car stuck at port"
        canonicalUrl="https://crspkenya.com/blog/certificate-of-origin-october-2025"
      />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to Obtain Certificate of Origin for Vehicle Import to Kenya"
        description="Step-by-step guide to getting COO after KRA's October 1, 2025 mandate"
        steps={howToSteps}
        totalTime="PT15M"
      />
      <Navigation />
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Certificate of Origin Oct 2025', href: '/blog/certificate-of-origin-october-2025' }
        ]} 
      />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Deadline Status Alert */}
        <Alert className="mb-6 border-orange-500 bg-orange-50 dark:bg-orange-950">
          <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
          <AlertDescription className="text-orange-800 dark:text-orange-300">
            <strong>⚠️ DEADLINE PASSED:</strong> Certificate of Origin has been mandatory since October 1, 2025 (18 days ago). 
            Vehicles without COO are being held at port. Read below for compliance steps.
          </AlertDescription>
        </Alert>

        <h1 className="text-4xl font-bold mb-4">
          KRA October 1 Deadline Explained: Certificate of Origin Now Mandatory
        </h1>
        
        <div className="flex items-center gap-4 text-muted-foreground mb-6">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            October 19, 2025
          </span>
          <span>10 min read</span>
        </div>

        <AdSpace slot="top-article" />

        {/* Quick Summary */}
        <Card className="p-6 mb-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            What You Need to Know
          </h2>
          <ul className="space-y-2 text-foreground">
            <li>📅 <strong>Deadline:</strong> October 1, 2025 (18 days ago)</li>
            <li>📋 <strong>Requirement:</strong> Certificate of Origin (COO) now mandatory for ALL vehicle imports</li>
            <li>🚨 <strong>Impact:</strong> Vehicles without COO are being held at Mombasa/Nairobi ports</li>
            <li>💰 <strong>Penalties:</strong> KES 50,000-200,000 + storage fees (KES 5,000-10,000/day)</li>
            <li>✅ <strong>Solution:</strong> Contact supplier to obtain COO retroactively (3-10 days)</li>
          </ul>
        </Card>

        {/* Main Content */}
        <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <h2>What is a Certificate of Origin?</h2>
          
          <p>
            A Certificate of Origin (COO) is an official document that declares which country a product 
            was manufactured in. For vehicle imports, it verifies where your car was originally made, 
            not just where you purchased it from.
          </p>

          <div className="bg-muted p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-3">Example Scenario</h3>
            <p className="mb-2">
              <strong>You buy:</strong> Toyota Axio from a dealer in Dubai (UAE)
            </p>
            <p className="mb-2">
              <strong>But car was made in:</strong> Japan (original manufacturing country)
            </p>
            <p className="font-semibold text-primary">
              <strong>COO must show:</strong> Japan (not UAE)
            </p>
          </div>

          <h2>Why Did KRA Make This Change?</h2>
          
          <p>According to KRA officials, the Certificate of Origin requirement was implemented to:</p>
          
          <ol>
            <li><strong>Combat Tax Evasion:</strong> Some importers were misrepresenting vehicle origin to claim false duty exemptions</li>
            <li><strong>Align with EAC Standards:</strong> East African Community trade agreements require COO for all goods</li>
            <li><strong>Track Import Sources:</strong> Better data on where Kenya's vehicles are coming from</li>
            <li><strong>Verify Authenticity:</strong> Reduce import of stolen or illegally exported vehicles</li>
          </ol>

          <h2>Timeline: What Happened</h2>

          <div className="space-y-4 my-6">
            <Card className="p-4 border-l-4 border-l-yellow-500">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-yellow-600" />
                <strong>August 15, 2025</strong>
              </div>
              <p className="text-muted-foreground">
                KRA announces new COO requirement via press release. Gives 45-day notice period.
              </p>
            </Card>

            <Card className="p-4 border-l-4 border-l-orange-500">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <strong>September 1-30, 2025</strong>
              </div>
              <p className="text-muted-foreground">
                Grace period. KRA accepts vehicles without COO but issues warnings. Many importers 
                ignore the requirement, thinking it's optional.
              </p>
            </Card>

            <Card className="p-4 border-l-4 border-l-red-500">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-red-600" />
                <strong>October 1, 2025</strong>
              </div>
              <p className="text-muted-foreground font-semibold">
                DEADLINE EFFECTIVE. KRA begins strict enforcement. Vehicles without COO are held at port.
              </p>
            </Card>

            <Card className="p-4 border-l-4 border-l-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <strong>October 2-19, 2025 (NOW)</strong>
              </div>
              <p className="text-muted-foreground">
                Hundreds of vehicles stuck at Mombasa port. Estimated value: over KES 5 billion. 
                Importers scrambling to obtain retroactive COO documentation.
              </p>
            </Card>
          </div>

          <h2>If You Imported BEFORE October 1 (Without COO)</h2>

          <Alert className="my-6">
            <AlertTriangle className="h-5 w-5" />
            <AlertDescription>
              <strong>Your vehicle may be held at port.</strong> Here's what to do immediately:
            </AlertDescription>
          </Alert>

          <h3>Step 1: Contact Your Supplier Immediately</h3>
          <ul>
            <li>Call or email your car exporter/dealer</li>
            <li>Request Certificate of Origin for your specific vehicle (include VIN/chassis number)</li>
            <li>Emphasize urgency - explain Kenya requires it for customs clearance</li>
          </ul>

          <h3>Step 2: Understand the Penalties</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Vehicle Value</th>
                  <th className="border p-3 text-right">COO Penalty</th>
                  <th className="border p-3 text-right">Daily Storage Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Under KES 1M</td>
                  <td className="border p-3 text-right">KES 50,000</td>
                  <td className="border p-3 text-right">KES 5,000/day</td>
                </tr>
                <tr>
                  <td className="border p-3">KES 1M - 3M</td>
                  <td className="border p-3 text-right">KES 100,000</td>
                  <td className="border p-3 text-right">KES 7,500/day</td>
                </tr>
                <tr>
                  <td className="border p-3">Over KES 3M</td>
                  <td className="border p-3 text-right">KES 200,000</td>
                  <td className="border p-3 text-right">KES 10,000/day</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-red-600 dark:text-red-400 font-semibold">
            ⚠️ Storage fees accumulate DAILY. A vehicle held for 20 days could cost KES 100,000-200,000 in storage alone!
          </p>

          <h3>Step 3: Processing Time by Country</h3>
          <ul>
            <li><strong>Japan:</strong> 3-7 business days (JAMA can expedite for extra fee)</li>
            <li><strong>UK:</strong> 5-10 business days (British Chamber of Commerce)</li>
            <li><strong>UAE:</strong> 7-14 days (Ministry of Economy, slower bureaucracy)</li>
            <li><strong>China:</strong> 5-10 days (CCPIT - China Council for Promotion of International Trade)</li>
          </ul>

          <AdSpace slot="mid-article" />

          <h2>If You're Importing AFTER October 1</h2>

          <h3>Mandatory Documentation Checklist</h3>
          <div className="space-y-2 my-4">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span><strong>Certificate of Origin (COO)</strong> - Shows manufacturing country</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span><strong>Export Certificate</strong> - From country of export</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span><strong>Bill of Lading</strong> - Shipping document</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span><strong>Commercial Invoice</strong> - Purchase proof</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span><strong>Insurance Certificate</strong> - Marine insurance</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span><strong>Import Declaration Form (IDF)</strong> - Filed via KRA iTax</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span><strong>Battery Health Certificate</strong> - If importing EV (80%+ SOH)</span>
            </div>
          </div>

          <h3>How to Request COO from Your Supplier</h3>
          
          <Card className="p-6 my-6 bg-muted">
            <h4 className="font-semibold mb-3">Email Template:</h4>
            <div className="bg-background p-4 rounded border text-sm font-mono">
              <p>Subject: URGENT - Certificate of Origin Required for Kenya Import</p>
              <br />
              <p>Dear [Supplier Name],</p>
              <br />
              <p>I am writing to request a Certificate of Origin for the following vehicle:</p>
              <p>- VIN/Chassis: [Your Vehicle VIN]</p>
              <p>- Make/Model: [e.g., Toyota Axio 2018]</p>
              <p>- Purchase Date: [Date]</p>
              <br />
              <p>As of October 1, 2025, Kenya Revenue Authority (KRA) requires a Certificate of Origin for all vehicle imports. Without this document, my vehicle cannot clear customs.</p>
              <br />
              <p>Please expedite this request. I need the COO within [X] days to avoid storage penalties at Mombasa port.</p>
              <br />
              <p>Thank you,</p>
              <p>[Your Name]</p>
            </div>
          </Card>

          <h2>Country-Specific COO Guides</h2>

          <h3>🇯🇵 Japan: How to Get Certificate of Origin</h3>
          <ul>
            <li><strong>Authority:</strong> Japan Automobile Manufacturers Association (JAMA) or exporter</li>
            <li><strong>Cost:</strong> JPY 5,000-10,000 (~KES 4,000-8,000)</li>
            <li><strong>Processing:</strong> 3-7 business days (expedited available)</li>
            <li><strong>Required Info:</strong> VIN, export certificate, Bill of Lading</li>
            <li><strong>Note:</strong> Most reputable Japanese exporters now provide COO automatically</li>
          </ul>

          <h3>🇦🇪 UAE: Documentation Process</h3>
          <ul>
            <li><strong>Authority:</strong> Ministry of Economy (if car made in UAE) OR origin country embassy</li>
            <li><strong>Important:</strong> Most UAE dealers sell cars made elsewhere (Japan, Korea, Germany)</li>
            <li><strong>Processing:</strong> 7-14 days (bureaucracy can be slow)</li>
            <li><strong>Cost:</strong> AED 200-500 (~KES 7,000-18,000)</li>
            <li><strong>Tip:</strong> Ask dealer to trace vehicle to original manufacturer for correct COO</li>
          </ul>

          <h3>🇬🇧 UK: Brexit Impact on Certificates</h3>
          <ul>
            <li><strong>Authority:</strong> British Chamber of Commerce</li>
            <li><strong>Post-Brexit Change:</strong> UK COO separate from EU now</li>
            <li><strong>Processing:</strong> 5-10 business days</li>
            <li><strong>Cost:</strong> £50-100 (~KES 8,000-16,000)</li>
            <li><strong>Note:</strong> Many UK cars were originally imported from Japan - verify manufacturing country</li>
          </ul>

          <h2>Case Study: Real Importer Experience</h2>

          <Card className="p-6 my-6 border-l-4 border-l-primary">
            <h3 className="font-semibold text-lg mb-3">James from Nairobi - Toyota Fielder 2018</h3>
            <p className="mb-4">
              <strong>Problem:</strong> James purchased a Toyota Fielder from a UAE dealer in September 2025. 
              Car arrived at Mombasa on October 5, but he didn't have Certificate of Origin.
            </p>
            <p className="mb-4">
              <strong>What Happened:</strong> KRA held the vehicle at port. Storage fees: KES 7,500/day.
            </p>
            <p className="mb-4">
              <strong>Solution:</strong> James contacted the UAE dealer who traced the car back to its 
              original manufacturer (Japan). The dealer obtained a COO from JAMA within 8 days.
            </p>
            <p className="font-semibold text-primary">
              <strong>Total Costs:</strong> COO fee: KES 6,000 | Storage fees (8 days): KES 60,000 | 
              Penalty: KES 100,000 | <span className="text-red-600">Total: KES 166,000 extra</span>
            </p>
            <p className="mt-4 italic">
              "If I'd known about the October 1 deadline, I would have requested COO before shipping. 
              Would have saved me KES 160,000+ in penalties and storage."
            </p>
          </Card>

          <h2>Frequently Asked Questions</h2>

          <div className="space-y-4 my-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-4">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <h2>What KRA Says</h2>
          
          <blockquote className="border-l-4 border-primary pl-4 italic my-6">
            "The Certificate of Origin requirement is non-negotiable. Importers who fail to provide 
            COO will have their vehicles held indefinitely until documentation is complete. We urge 
            all importers to work with their suppliers to obtain proper certification."
            <footer className="mt-2 text-sm">- KRA Customs Department, October 2025</footer>
          </blockquote>

          <h2>Next Steps</h2>
          
          <ol>
            <li><strong>Check Your Current Status:</strong> If you have a car in transit, verify you have COO</li>
            <li><strong>Contact Supplier Immediately:</strong> Don't wait - request COO now if you don't have it</li>
            <li><strong>Budget for Potential Penalties:</strong> Set aside KES 50,000-200,000 if your car is already at port</li>
            <li><strong>For Future Imports:</strong> Always request COO BEFORE shipping vehicle</li>
            <li><strong>Calculate Your Import Duty:</strong> Use our calculator to plan total costs including documentation</li>
          </ol>

          <Link to="/">
            <Button size="lg" className="my-6 w-full">
              Calculate Your Import Duty & Costs
            </Button>
          </Link>
        </section>

        <AdSpace slot="bottom-article" />

        {/* Related Articles */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
          <div className="space-y-3">
            <Link to="/blog/how-to-import-car-kenya" className="block hover:underline text-primary">
              → Complete Guide: How to Import a Car to Kenya 2025
            </Link>
            <Link to="/blog/car-clearance-costs-mombasa-port-2025" className="block hover:underline text-primary">
              → Car Clearance Costs at Mombasa Port 2025
            </Link>
            <Link to="/blog/7-year-age-limit-kenya-2025" className="block hover:underline text-primary">
              → BREAKING: Kenya Reduces Age Limit to 7 Years
            </Link>
            <Link to="/" className="block hover:underline text-primary">
              → Free Import Duty Calculator
            </Link>
          </div>
        </Card>
      </article>

      <Footer />
    </>
  );
};

export default CertificateOfOriginOct2025;