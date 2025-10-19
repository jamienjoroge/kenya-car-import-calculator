import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOPermalinks from '@/components/SEOPermalinks';
import FAQSchema from '@/components/FAQSchema';
import AdSpace from '@/components/AdSpace';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const CRSPWinnersLosers2025 = () => {
  const faqs = [
    {
      question: "Why did Toyota Vitz duty increase so much?",
      answer: "The Toyota Vitz Hybrid saw a 59% duty increase because KRA's new CRSP methodology better reflects market value. Hybrid variants were significantly undervalued in the old system. The new CRSP aligns with actual auction prices in Japan and UAE."
    },
    {
      question: "Will CRSP values change again in 2026?",
      answer: "KRA typically reviews CRSP values quarterly. Major changes like September 2025's schedule are rare, but expect minor adjustments every 3-6 months based on market trends and currency fluctuations."
    },
    {
      question: "Should I buy a 'winner' car that got cheaper?",
      answer: "Not necessarily. Lower duty doesn't mean better value. Consider: Why did duty drop? (Maybe car depreciated heavily). Total cost of ownership (fuel, maintenance, parts). Resale value in Kenya. Use our calculator to compare total costs before deciding."
    },
    {
      question: "Can I appeal my import duty if my car is now a 'loser'?",
      answer: "No, CRSP values are non-negotiable. KRA sets values based on market data. If you imported before September 2025, you paid old rates. If importing now, you pay current rates. No appeals are accepted for CRSP-based duty calculations."
    }
  ];

  const winners = [
    { car: 'Mercedes-Benz C-Class 2018', oldCRSP: 'KES 3.5M', newCRSP: 'KES 2.8M', oldDuty: 'KES 1.23M', newDuty: 'KES 980K', savings: 'KES 250K', change: '-20%' },
    { car: 'BMW 3 Series 2019', oldCRSP: 'KES 4.2M', newCRSP: 'KES 3.5M', oldDuty: 'KES 1.47M', newDuty: 'KES 1.23M', savings: 'KES 240K', change: '-17%' },
    { car: 'Nissan X-Trail 2017', oldCRSP: 'KES 2.1M', newCRSP: 'KES 1.8M', oldDuty: 'KES 735K', newDuty: 'KES 630K', savings: 'KES 105K', change: '-14%' },
    { car: 'Mazda CX-5 2018', oldCRSP: 'KES 2.5M', newCRSP: 'KES 2.2M', oldDuty: 'KES 875K', newDuty: 'KES 770K', savings: 'KES 105K', change: '-12%' },
    { car: 'Subaru Outback 2019', oldCRSP: 'KES 3.0M', newCRSP: 'KES 2.7M', oldDuty: 'KES 1.05M', newDuty: 'KES 945K', savings: 'KES 105K', change: '-10%' },
    { car: 'Honda CR-V 2018', oldCRSP: 'KES 2.4M', newCRSP: 'KES 2.2M', oldDuty: 'KES 840K', newDuty: 'KES 770K', savings: 'KES 70K', change: '-8%' },
    { car: 'Audi A4 2018', oldCRSP: 'KES 3.8M', newCRSP: 'KES 3.5M', oldDuty: 'KES 1.33M', newDuty: 'KES 1.23M', savings: 'KES 100K', change: '-8%' },
    { car: 'Volkswagen Tiguan 2019', oldCRSP: 'KES 3.2M', newCRSP: 'KES 3.0M', oldDuty: 'KES 1.12M', newDuty: 'KES 1.05M', savings: 'KES 70K', change: '-6%' },
    { car: 'Toyota Land Cruiser Prado 2017', oldCRSP: 'KES 5.5M', newCRSP: 'KES 5.2M', oldDuty: 'KES 1.93M', newDuty: 'KES 1.82M', savings: 'KES 110K', change: '-5%' },
    { car: 'Subaru Forester 2018', oldCRSP: 'KES 2.3M', newCRSP: 'KES 2.2M', oldDuty: 'KES 805K', newDuty: 'KES 770K', savings: 'KES 35K', change: '-4%' },
  ];

  const losers = [
    { car: 'Toyota Vitz Hybrid 2018', oldCRSP: 'KES 800K', newCRSP: 'KES 1.27M', oldDuty: 'KES 280K', newDuty: 'KES 445K', increase: 'KES 165K', change: '+59%' },
    { car: 'Honda Fit Hybrid 2018', oldCRSP: 'KES 950K', newCRSP: 'KES 1.38M', oldDuty: 'KES 333K', newDuty: 'KES 483K', increase: 'KES 150K', change: '+45%' },
    { car: 'Nissan Note e-Power 2019', oldCRSP: 'KES 950K', newCRSP: 'KES 1.35M', oldDuty: 'KES 333K', newDuty: 'KES 473K', increase: 'KES 140K', change: '+42%' },
    { car: 'Toyota Aqua 2018', oldCRSP: 'KES 780K', newCRSP: 'KES 1.1M', oldDuty: 'KES 273K', newDuty: 'KES 385K', increase: 'KES 112K', change: '+41%' },
    { car: 'Toyota Prius 2018', oldCRSP: 'KES 1.1M', newCRSP: 'KES 1.45M', oldDuty: 'KES 385K', newDuty: 'KES 508K', increase: 'KES 123K', change: '+32%' },
    { car: 'Mazda Demio 2018', oldCRSP: 'KES 750K', newCRSP: 'KES 920K', oldDuty: 'KES 263K', newDuty: 'KES 322K', increase: 'KES 59K', change: '+23%' },
    { car: 'Honda Fit 2017 (Petrol)', oldCRSP: 'KES 880K', newCRSP: 'KES 1.05M', oldDuty: 'KES 308K', newDuty: 'KES 368K', increase: 'KES 60K', change: '+19%' },
    { car: 'Toyota Fielder 2017', oldCRSP: 'KES 850K', newCRSP: 'KES 980K', oldDuty: 'KES 298K', newDuty: 'KES 343K', increase: 'KES 45K', change: '+15%' },
    { car: 'Nissan Wingroad 2017', oldCRSP: 'KES 700K', newCRSP: 'KES 800K', oldDuty: 'KES 245K', newDuty: 'KES 280K', increase: 'KES 35K', change: '+14%' },
    { car: 'Honda Shuttle Hybrid 2018', oldCRSP: 'KES 1.15M', newCRSP: 'KES 1.3M', oldDuty: 'KES 403K', newDuty: 'KES 455K', increase: 'KES 52K', change: '+13%' },
  ];

  return (
    <>
      <SEOPermalinks
        title="New CRSP 2025: 10 Cars That Got Cheaper vs 10 That Doubled in Price - Kenya Import Duty"
        description="🏆 Which cars won with new CRSP? Toyota Vitz duty up 59%! See all winners/losers + best bargains to import in Oct 2025. Interactive comparison tool."
        keywords="CRSP winners losers 2025, Kenya import duty changes, Toyota Vitz duty increase, best cars to import Kenya, CRSP comparison 2025"
        canonicalUrl="https://crspkenya.com/blog/crsp-winners-losers-2025"
      />
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'CRSP Winners & Losers 2025', href: '/blog/crsp-winners-losers-2025' }
        ]} 
      />
      
      <article className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">
          New CRSP 2025: 10 Cars That Got Cheaper vs 10 That Doubled
        </h1>
        
        <div className="flex items-center gap-4 text-muted-foreground mb-6">
          <span>October 19, 2025</span>
          <span>10 min read</span>
        </div>

        <Card className="p-6 mb-8 bg-primary/5">
          <h2 className="text-xl font-semibold mb-3">🏆 Biggest Changes Summary</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-red-600 dark:text-red-400" />
                <strong className="text-red-700 dark:text-red-300">Biggest Loser</strong>
              </div>
              <p className="text-sm">Toyota Vitz Hybrid: +59% duty increase</p>
              <p className="text-xs text-muted-foreground">Was: KES 280K → Now: KES 445K (+KES 165K)</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="h-5 w-5 text-green-600 dark:text-green-400" />
                <strong className="text-green-700 dark:text-green-300">Biggest Winner</strong>
              </div>
              <p className="text-sm">Mercedes C-Class: -20% duty reduction</p>
              <p className="text-xs text-muted-foreground">Was: KES 1.23M → Now: KES 980K (Save KES 250K)</p>
            </div>
          </div>
          <Link to="/">
            <Button className="mt-4 w-full">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Your Car's Exact Duty →
            </Button>
          </Link>
        </Card>

        <AdSpace slot="top-article" />

        {/* Top 10 Winners */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-green-500 text-white">
              <TrendingDown className="h-4 w-4 mr-1" />
              Winners
            </Badge>
            <h2 className="text-3xl font-bold">Top 10 Cars That Got CHEAPER</h2>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            These vehicles saw import duty reductions with the new CRSP schedule. Perfect time to import if you've been eyeing these models!
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-50 dark:bg-green-950">
                  <th className="border p-3 text-left">#</th>
                  <th className="border p-3 text-left">Car Model</th>
                  <th className="border p-3 text-right">Old Duty</th>
                  <th className="border p-3 text-right">New Duty</th>
                  <th className="border p-3 text-right">Savings</th>
                  <th className="border p-3 text-center">Change</th>
                </tr>
              </thead>
              <tbody>
                {winners.map((car, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                    <td className="border p-3 font-semibold">{index + 1}</td>
                    <td className="border p-3">{car.car}</td>
                    <td className="border p-3 text-right line-through text-muted-foreground">{car.oldDuty}</td>
                    <td className="border p-3 text-right font-semibold text-green-600 dark:text-green-400">{car.newDuty}</td>
                    <td className="border p-3 text-right font-bold text-green-600 dark:text-green-400">{car.savings}</td>
                    <td className="border p-3 text-center">
                      <Badge variant="outline" className="bg-green-50 dark:bg-green-950 border-green-500 text-green-700 dark:text-green-300">
                        {car.change}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Card className="p-4 mt-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>💡 Smart Buy:</strong> Mercedes C-Class and BMW 3 Series are now 17-20% cheaper to import. 
              If you've been waiting to buy a premium sedan, this is your opportunity!
            </p>
          </Card>
        </section>

        <AdSpace slot="mid-article" />

        {/* Top 10 Losers */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-red-500 text-white">
              <TrendingUp className="h-4 w-4 mr-1" />
              Losers
            </Badge>
            <h2 className="text-3xl font-bold">Top 10 Cars That Got MORE EXPENSIVE</h2>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            These vehicles saw significant duty increases. Hybrid models were hit hardest due to CRSP realignment with market values.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-red-50 dark:bg-red-950">
                  <th className="border p-3 text-left">#</th>
                  <th className="border p-3 text-left">Car Model</th>
                  <th className="border p-3 text-right">Old Duty</th>
                  <th className="border p-3 text-right">New Duty</th>
                  <th className="border p-3 text-right">Increase</th>
                  <th className="border p-3 text-center">Change</th>
                </tr>
              </thead>
              <tbody>
                {losers.map((car, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                    <td className="border p-3 font-semibold">{index + 1}</td>
                    <td className="border p-3">{car.car}</td>
                    <td className="border p-3 text-right line-through text-muted-foreground">{car.oldDuty}</td>
                    <td className="border p-3 text-right font-semibold text-red-600 dark:text-red-400">{car.newDuty}</td>
                    <td className="border p-3 text-right font-bold text-red-600 dark:text-red-400">+{car.increase}</td>
                    <td className="border p-3 text-center">
                      <Badge variant="outline" className="bg-red-50 dark:bg-red-950 border-red-500 text-red-700 dark:text-red-300">
                        {car.change}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Card className="p-4 mt-6 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
            <p className="text-sm text-red-800 dark:text-red-200">
              <strong>⚠️ Buyer Beware:</strong> Toyota Vitz Hybrid saw the biggest jump (+59%). If you bought one before 
              September 2025, you got lucky. Current buyers pay KES 165K more in duty.
            </p>
          </Card>
        </section>

        {/* Why Did Prices Change */}
        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <h2>Why Did Import Duty Prices Change?</h2>
          
          <p>
            KRA's new CRSP methodology (effective September 2025) recalibrated vehicle values based on:
          </p>

          <ol>
            <li>
              <strong>Market Reality Alignment:</strong> Old CRSP values were outdated. Hybrid cars were significantly 
              undervalued compared to actual auction prices in Japan. The new CRSP reflects true market value.
            </li>
            <li>
              <strong>Currency Fluctuations:</strong> KES depreciation against JPY and USD meant some cars' true value 
              increased, while luxury cars depreciated faster than expected.
            </li>
            <li>
              <strong>Depreciation Curves:</strong> KRA updated depreciation formulas. Older luxury cars (German brands) 
              depreciate faster, hence lower CRSP. Budget hybrids hold value better, hence higher CRSP.
            </li>
            <li>
              <strong>Environmental Incentives:</strong> While EVs got excise duty breaks, hybrid duty calculation changed 
              because KRA stopped treating them as "eco-friendly" exceptions. They're now valued at market rate.
            </li>
          </ol>

          <h2>Best Bargains Right Now (October 2025)</h2>

          <p>Based on the new CRSP schedule, here are the best value imports:</p>

          <h3>🏆 Best Value SUVs</h3>
          <Card className="p-4 not-prose">
            <ul className="space-y-2">
              <li><strong>Nissan X-Trail 2017:</strong> Duty down 14% (save KES 105K). Reliable, spacious, good resale value in Kenya.</li>
              <li><strong>Mazda CX-5 2018:</strong> Duty down 12% (save KES 105K). Premium feel, great handling, fuel-efficient.</li>
              <li><strong>Honda CR-V 2018:</strong> Duty down 8% (save KES 70K). Tried-and-true family SUV with low maintenance.</li>
            </ul>
          </Card>

          <h3>🏆 Best Value Sedans</h3>
          <Card className="p-4 not-prose">
            <ul className="space-y-2">
              <li><strong>Mercedes C-Class 2018:</strong> Duty down 20% (save KES 250K). Luxury at a discount!</li>
              <li><strong>BMW 3 Series 2019:</strong> Duty down 17% (save KES 240K). Premium badge, now affordable.</li>
              <li><strong>Audi A4 2018:</strong> Duty down 8% (save KES 100K). Sophisticated, tech-loaded.</li>
            </ul>
          </Card>

          <h3>🏆 Best Budget Options (Still Affordable)</h3>
          <Card className="p-4 not-prose">
            <ul className="space-y-2">
              <li><strong>Toyota Fielder 2017:</strong> Duty up 15% but still relatively affordable at KES 343K total duty. Wagon practicality.</li>
              <li><strong>Mazda Demio 2018:</strong> Duty up 23% but remains budget-friendly. Compact, fuel-efficient, easy to park.</li>
              <li><strong>Nissan Wingroad 2017:</strong> Duty up 14% (KES 280K total). Best for delivery/business use.</li>
            </ul>
          </Card>

          <Link to="/">
            <Button size="lg" className="my-6 w-full">
              <Calculator className="mr-2 h-5 w-5" />
              Compare Import Costs for Your Shortlisted Cars
            </Button>
          </Link>

          <h2>What NOT to Buy Right Now</h2>

          <p>Avoid these unless you have specific reasons:</p>

          <ul>
            <li>
              <strong>Toyota Vitz Hybrid 2018:</strong> +59% duty increase makes it overpriced. Consider non-hybrid Vitz 
              or wait for CRSP adjustment in Q1 2026.
            </li>
            <li>
              <strong>Honda Fit Hybrid 2018:</strong> +45% increase. Non-hybrid Fit or older models (2016) may offer 
              better value despite being a year older.
            </li>
            <li>
              <strong>Nissan Note e-Power 2019:</strong> +42% increase. E-Power's fuel efficiency doesn't justify the 
              duty premium anymore.
            </li>
            <li>
              <strong>Toyota Prius 2018:</strong> +32% increase. Unless you drive 2,000+ km/month, fuel savings won't 
              offset higher duty.
            </li>
          </ul>

          <h2>How to Make the Right Decision</h2>

          <h3>1. Calculate Total Cost, Not Just Duty</h3>
          <p>
            Lower duty doesn't always mean lower total cost. Consider:
          </p>
          <ul>
            <li>Purchase price (FOB)</li>
            <li>Import duty (CRSP-based)</li>
            <li>Shipping and insurance</li>
            <li>Fuel costs (5 years)</li>
            <li>Maintenance costs</li>
            <li>Resale value in Kenya</li>
          </ul>

          <h3>2. Use Our Comparison Tool</h3>
          <p>
            Enter multiple cars in our calculator to see side-by-side cost comparisons including 5-year ownership costs.
          </p>

          <h3>3. Check Availability and Condition</h3>
          <p>
            A car with lower duty is only a good deal if:
          </p>
          <ul>
            <li>You can find it in good condition</li>
            <li>It's available in your preferred color/specs</li>
            <li>Parts are readily available in Kenya</li>
            <li>It meets the 7-year age limit (from Jan 2026)</li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <div className="space-y-4 my-6 not-prose">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-4">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <h2>Summary: Action Items</h2>

          <ol>
            <li>✅ <strong>Winners to Consider:</strong> Mercedes C-Class, BMW 3 Series, Nissan X-Trail (big savings)</li>
            <li>⚠️ <strong>Losers to Avoid:</strong> Toyota Vitz Hybrid, Honda Fit Hybrid (overpriced now)</li>
            <li>📊 <strong>Calculate Before Buying:</strong> Use our tool to compare total 5-year costs</li>
            <li>⏰ <strong>Act Fast on Winners:</strong> KRA may adjust CRSP again in Q1 2026</li>
            <li>🚗 <strong>Consider Age Limit:</strong> From Jan 2026, only 7-year-old cars allowed</li>
          </ol>

          <Link to="/">
            <Button size="lg" className="my-6 w-full">
              Calculate Your Car's Import Duty Now →
            </Button>
          </Link>
        </section>

        <AdSpace slot="bottom-article" />

        {/* Related Articles */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
          <div className="space-y-3">
            <Link to="/blog/kra-crsp-september-2025-update" className="block hover:underline text-primary">
              → KRA CRSP September 2025 Update: All Changes Explained
            </Link>
            <Link to="/blog/7-year-age-limit-kenya-2025" className="block hover:underline text-primary">
              → BREAKING: Kenya Reduces Age Limit to 7 Years
            </Link>
            <Link to="/blog/crsp-rates-weekly-october-2025" className="block hover:underline text-primary">
              → CRSP Rates This Week: October 14-20, 2025
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

export default CRSPWinnersLosers2025;