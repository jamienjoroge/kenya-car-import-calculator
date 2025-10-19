import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Calculator, CheckCircle, AlertCircle, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOPermalinks from '@/components/SEOPermalinks';
import FAQSchema from '@/components/FAQSchema';
import HowToSchema from '@/components/HowToSchema';
import AdSpace from '@/components/AdSpace';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const KenyaEVImportGuide2025 = () => {
  const faqs = [
    {
      question: "Where can I charge my EV in Kenya?",
      answer: "Kenya has over 50 public charging stations in Nairobi, Mombasa, Nakuru, and along major highways. Companies like KenGen, Total Energies, and Rubis have installed fast-charging stations. You can also install a home charger (7kW AC charger costs ~KES 80,000)."
    },
    {
      question: "What if my EV battery degrades below 80% after import?",
      answer: "The 80% battery health requirement is only for import clearance. After your EV is in Kenya, there's no ongoing monitoring. However, maintaining battery health is crucial for resale value. Most modern EV batteries retain 80%+ capacity for 8-10 years."
    },
    {
      question: "Are EV parts and maintenance services available in Kenya?",
      answer: "Yes, several dealerships and independent mechanics now service EVs. Tesla has unofficial service centers in Nairobi. Nissan Leaf parts are widely available. Brake pads last longer on EVs due to regenerative braking, reducing maintenance costs by ~40% vs petrol cars."
    },
    {
      question: "Can I import a Tesla to Kenya?",
      answer: "Yes, you can import Tesla Model 3, Model Y, and Model S to Kenya. They must be 2018 or newer, meet the 7-year age limit, and have 80%+ battery health certification. Import duty is calculated on CRSP value, which is typically KES 4-7 million for Tesla models."
    },
    {
      question: "How long does it take to charge an EV in Kenya?",
      answer: "Home charging (7kW): 6-8 hours for full charge. Public AC charging (22kW): 2-4 hours. DC fast charging (50kW+): 30-45 minutes for 80% charge. Most EV owners charge overnight at home for convenience."
    },
    {
      question: "What is the actual cost savings with an EV vs petrol?",
      answer: "Assuming 1,500 km/month: Petrol car (10 km/L, KES 180/L) = KES 27,000/month. EV (5 km/kWh, KES 25/kWh) = KES 7,500/month. Savings: KES 19,500/month or KES 234,000/year. Over 5 years, you save ~KES 1.17 million on fuel alone."
    }
  ];

  const howToSteps = [
    {
      name: "Find an EV that meets Kenya's requirements",
      text: "Choose 2018 or newer models from Japan, China, or UAE. Verify battery health is 80%+ and vehicle is right-hand drive. Popular options: Nissan Leaf, Tesla Model 3, BYD Atto 3.",
      url: "https://crspkenya.com/"
    },
    {
      name: "Get battery health certification",
      text: "Request battery State of Health (SOH) report from seller. Must show 80%+ capacity. Japanese exporters provide this as standard. For Chinese/UAE imports, request DEKRA or TÜV certification."
    },
    {
      name: "Calculate import duty and total costs",
      text: "Use our calculator to estimate CRSP-based duty, VAT, and fees. EVs benefit from lower excise duty (10% vs 20-35% for petrol cars), saving KES 150,000-300,000.",
      url: "https://crspkenya.com/"
    },
    {
      name: "Complete import documentation",
      text: "Obtain Certificate of Origin, export certificate, battery health report, and bill of lading. Ship via Mombasa port (30-45 days from Japan, 21-30 days from China)."
    },
    {
      name: "Clear with KRA and NTSA inspection",
      text: "Present all documents at customs. KRA verifies battery health. NTSA conducts standard vehicle inspection. Register vehicle and obtain number plates within 14 days."
    }
  ];

  return (
    <>
      <SEOPermalinks
        title="Kenya EV Import Guide 2025: New Rules, Tax Breaks & How to Save KES 300K on Duty"
        description="🚗⚡ Complete guide to importing electric cars to Kenya in 2025. 8 new rules + battery standards + duty calculator. EVs now cost 40% less than petrol!"
        keywords="Kenya EV import 2025, electric car import Kenya, EV tax incentives, battery health certification, Tesla import Kenya, Nissan Leaf import, EV duty calculator"
        canonicalUrl="https://crspkenya.com/blog/kenya-ev-import-guide-2025"
      />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to Import an Electric Vehicle to Kenya in 2025"
        description="Step-by-step guide to importing EVs to Kenya with battery certification, duty savings, and compliance requirements"
        steps={howToSteps}
        totalTime="PT20M"
      />
      <Navigation />
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Kenya EV Import Guide 2025', href: '/blog/kenya-ev-import-guide-2025' }
        ]} 
      />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <Badge className="mb-4" variant="outline">
          <Zap className="h-3 w-3 mr-1" />
          Electric Vehicles
        </Badge>

        <h1 className="text-4xl font-bold mb-4">
          Kenya EV Import Guide 2025: New Rules, Tax Breaks & How to Save KES 300K
        </h1>
        
        <div className="flex items-center gap-4 text-muted-foreground mb-6">
          <span>October 19, 2025</span>
          <span>12 min read</span>
        </div>

        {/* Quick Win Section */}
        <Card className="p-6 mb-8 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
            Why Import an EV in 2025?
          </h2>
          <p className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
            Save up to <strong>KES 300,000</strong> on import duty vs petrol cars + <strong>KES 234,000/year</strong> on fuel!
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">🚗 Nissan Leaf 2019 (EV)</h3>
              <ul className="text-sm space-y-1">
                <li>CRSP: KES 1,800,000</li>
                <li>Import Duty: <strong>KES 450,000</strong></li>
                <li>Fuel Cost/Month: <strong>KES 7,500</strong></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">⛽ Toyota Axio 2019 (Petrol)</h3>
              <ul className="text-sm space-y-1">
                <li>CRSP: KES 1,850,000</li>
                <li>Import Duty: <strong>KES 750,000</strong></li>
                <li>Fuel Cost/Month: <strong>KES 27,000</strong></li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-green-700 dark:text-green-300 font-semibold">
            ✅ Save KES 300K on duty + KES 19,500/month on fuel = Total 5-year savings: <strong>KES 1.47 Million</strong>
          </p>

          <Link to="/">
            <Button className="mt-4 w-full">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate EV Import Duty Now →
            </Button>
          </Link>
        </Card>

        <AdSpace slot="top-article" />

        {/* 8 New EV Rules */}
        <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <h2>8 New EV Import Rules in Kenya (2025)</h2>

          <Card className="p-6 mb-6">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Battery Health Minimum 80%</h3>
                  <p className="text-muted-foreground">
                    All imported EVs must have State of Health (SOH) certification showing battery capacity 
                    of 80% or higher. This is verified during KRA customs clearance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Age Limit: 7 Years (from Jan 2026)</h3>
                  <p className="text-muted-foreground">
                    In 2025, EVs can be up to 8 years old (2017+ models). From January 1, 2026, only 
                    7-year-old EVs allowed (2018+ in 2025, 2019+ in 2026).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Pre-Shipment Battery Certification Required</h3>
                  <p className="text-muted-foreground">
                    Before shipping, obtain battery health report from DEKRA, TÜV, or manufacturer's 
                    official diagnostic tool. Japanese exporters provide this as standard.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Right-Hand Drive Preferred</h3>
                  <p className="text-muted-foreground">
                    While left-hand drive EVs can be imported, right-hand drive vehicles are easier to 
                    register and have higher resale value. Import from Japan or UK for RHD models.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Tax Incentives: Lower Excise Duty</h3>
                  <p className="text-muted-foreground">
                    EVs benefit from reduced excise duty: <strong>10% for EVs</strong> vs 20-35% for petrol cars. 
                    This saves KES 150,000-300,000 depending on vehicle value.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">6</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Charging Cable Must Be Included</h3>
                  <p className="text-muted-foreground">
                    Vehicle must ship with Type 2 or CHAdeMO charging cable. Kenya uses Type 2 AC charging 
                    (standard in Europe/Japan) and CHAdeMO DC fast charging (Nissan standard).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">7</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">NTSA Inspection Includes Battery Check</h3>
                  <p className="text-muted-foreground">
                    After clearing customs, NTSA inspection includes battery safety verification. 
                    Damaged or recalled battery packs will fail inspection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">8</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Registration Timeline: 14 Days</h3>
                  <p className="text-muted-foreground">
                    After NTSA inspection approval, you have 14 days to register the EV and obtain number 
                    plates. Late registration incurs penalties of KES 5,000/day.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <h2>EV vs Petrol: Total Cost Comparison (5 Years)</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Cost Item</th>
                  <th className="border p-3 text-right">Nissan Leaf (EV)</th>
                  <th className="border p-3 text-right">Toyota Axio (Petrol)</th>
                  <th className="border p-3 text-right">Savings (EV)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Purchase Price (FOB)</td>
                  <td className="border p-3 text-right">KES 1,200,000</td>
                  <td className="border p-3 text-right">KES 1,100,000</td>
                  <td className="border p-3 text-right text-red-600">-KES 100,000</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Import Duty</td>
                  <td className="border p-3 text-right">KES 450,000</td>
                  <td className="border p-3 text-right">KES 750,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">+KES 300,000</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Fuel/Electricity (5 years)</td>
                  <td className="border p-3 text-right">KES 450,000</td>
                  <td className="border p-3 text-right">KES 1,620,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">+KES 1,170,000</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Maintenance (5 years)</td>
                  <td className="border p-3 text-right">KES 150,000</td>
                  <td className="border p-3 text-right">KES 350,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">+KES 200,000</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Home Charger Install</td>
                  <td className="border p-3 text-right">KES 80,000</td>
                  <td className="border p-3 text-right">-</td>
                  <td className="border p-3 text-right text-red-600">-KES 80,000</td>
                </tr>
                <tr className="bg-muted font-bold">
                  <td className="border p-3">TOTAL 5-YEAR COST</td>
                  <td className="border p-3 text-right">KES 2,330,000</td>
                  <td className="border p-3 text-right">KES 3,820,000</td>
                  <td className="border p-3 text-right text-green-600 text-lg">+KES 1,490,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg font-semibold text-green-600 dark:text-green-400 my-4">
            ✅ Net savings with EV over 5 years: <strong>KES 1.49 Million</strong>
          </p>

          <AdSpace slot="mid-article" />

          <h2>How to Import an EV from China/Japan/UAE</h2>

          <h3>Step 1: Choose Your EV</h3>
          <p>Popular models for Kenya import:</p>
          <ul>
            <li><strong>Budget (KES 1.5-2.5M total cost):</strong> Nissan Leaf (2018-2020), BYD e6</li>
            <li><strong>Mid-Range (KES 2.5-4M):</strong> Tesla Model 3 Standard, MG ZS EV, BYD Atto 3</li>
            <li><strong>Premium (KES 4M+):</strong> Tesla Model Y, Audi e-tron, BMW iX3</li>
          </ul>

          <h3>Step 2: Verify Battery Health</h3>
          <p>Request battery State of Health (SOH) report showing:</p>
          <ul>
            <li>Current battery capacity vs original (must be 80%+)</li>
            <li>Number of charge cycles</li>
            <li>Battery degradation rate</li>
            <li>Certification from DEKRA, TÜV, or manufacturer</li>
          </ul>

          <h3>Step 3: Calculate Total Costs</h3>
          <p>Use our calculator to estimate:</p>
          <ul>
            <li>FOB (Free on Board) price</li>
            <li>CRSP-based import duty</li>
            <li>VAT (16%)</li>
            <li>Excise duty (10% for EVs)</li>
            <li>Shipping and insurance</li>
            <li>Clearing agent fees</li>
          </ul>

          <Link to="/">
            <Button variant="outline" className="my-4">
              Calculate EV Import Costs →
            </Button>
          </Link>

          <h3>Step 4: Documentation Checklist</h3>
          <ul>
            <li>✅ Certificate of Origin (mandatory from Oct 1, 2025)</li>
            <li>✅ Export Certificate from country of origin</li>
            <li>✅ Battery Health Certification (80%+ SOH)</li>
            <li>✅ Bill of Lading</li>
            <li>✅ Commercial Invoice</li>
            <li>✅ Insurance Certificate</li>
            <li>✅ Charging cable and adapter</li>
          </ul>

          <h3>Step 5: Shipping Timeline</h3>
          <ul>
            <li><strong>From Japan:</strong> 30-45 days to Mombasa</li>
            <li><strong>From China:</strong> 21-30 days to Mombasa</li>
            <li><strong>From UAE:</strong> 14-21 days to Mombasa</li>
            <li><strong>Customs Clearance:</strong> 5-10 days</li>
            <li><strong>NTSA Inspection:</strong> 3-7 days</li>
          </ul>

          <h2>Top 10 EVs to Import to Kenya (2025)</h2>

          <div className="space-y-4 my-6">
            {[
              { name: 'Nissan Leaf (2018-2020)', crsp: 'KES 1.8M', duty: 'KES 450K', range: '150-240 km', charge: '6-8 hrs AC' },
              { name: 'Tesla Model 3 Standard (2019+)', crsp: 'KES 4.5M', duty: 'KES 1.1M', range: '350-420 km', charge: '8-10 hrs AC / 30 min DC' },
              { name: 'BYD Atto 3 (2022+)', crsp: 'KES 3.2M', duty: 'KES 800K', range: '420 km', charge: '7-9 hrs AC / 35 min DC' },
              { name: 'MG ZS EV (2020+)', crsp: 'KES 2.8M', duty: 'KES 700K', range: '260-350 km', charge: '7-9 hrs AC' },
              { name: 'Nissan Ariya (2022+)', crsp: 'KES 5.5M', duty: 'KES 1.4M', range: '400-500 km', charge: '8 hrs AC / 40 min DC' },
            ].map((ev, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">{index + 1}. {ev.name}</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div><strong>CRSP:</strong> {ev.crsp}</div>
                      <div><strong>Import Duty:</strong> {ev.duty}</div>
                      <div><strong>Range:</strong> {ev.range}</div>
                      <div><strong>Charging:</strong> {ev.charge}</div>
                    </div>
                  </div>
                  <Battery className="h-8 w-8 text-green-500 shrink-0 ml-4" />
                </div>
              </Card>
            ))}
          </div>

          <h2>Charging Infrastructure in Kenya</h2>

          <h3>Public Charging Stations</h3>
          <ul>
            <li><strong>Nairobi:</strong> 30+ stations (KenGen, Total, Rubis, Garden City Mall, Junction Mall)</li>
            <li><strong>Mombasa:</strong> 8+ stations (Nyali, Diani, City Mall)</li>
            <li><strong>Nakuru:</strong> 5+ stations (along Nairobi-Nakuru highway)</li>
            <li><strong>Major Highways:</strong> Charging corridors on Nairobi-Mombasa, Nairobi-Nakuru routes</li>
          </ul>

          <h3>Home Charging</h3>
          <p>Most EV owners install a 7kW AC home charger (Type 2). Installation costs:</p>
          <ul>
            <li><strong>7kW AC Charger:</strong> KES 80,000-120,000 (installed)</li>
            <li><strong>22kW AC Charger:</strong> KES 150,000-200,000 (requires 3-phase power)</li>
            <li><strong>Electricity Cost:</strong> ~KES 25/kWh (KPLC residential rate)</li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <div className="space-y-4 my-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-4">
                <h4 className="font-semibold mb-2 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  {faq.question}
                </h4>
                <p className="text-muted-foreground ml-7">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <h2>Next Steps</h2>
          <ol>
            <li><strong>Calculate Import Costs:</strong> Use our free calculator to estimate EV import duty</li>
            <li><strong>Research Models:</strong> Compare Nissan Leaf vs Tesla vs BYD based on your budget</li>
            <li><strong>Find Suppliers:</strong> Contact Japanese exporters or Chinese EV dealers</li>
            <li><strong>Verify Battery Health:</strong> Request SOH report before purchasing</li>
            <li><strong>Plan Charging:</strong> Check public charger locations or budget for home installation</li>
          </ol>

          <Link to="/">
            <Button size="lg" className="my-6 w-full">
              <Calculator className="mr-2 h-5 w-5" />
              Calculate EV Import Duty Now
            </Button>
          </Link>
        </section>

        <AdSpace slot="bottom-article" />

        {/* Related Articles */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
          <div className="space-y-3">
            <Link to="/blog/7-year-age-limit-kenya-2025" className="block hover:underline text-primary">
              → BREAKING: Kenya Reduces Car Import Age Limit to 7 Years
            </Link>
            <Link to="/blog/calculate-car-import-duty-kenya-2025" className="block hover:underline text-primary">
              → How to Calculate Car Import Duty in Kenya 2025
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

export default KenyaEVImportGuide2025;