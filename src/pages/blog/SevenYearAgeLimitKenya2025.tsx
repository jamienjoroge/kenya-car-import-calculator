import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Calendar, Calculator, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOPermalinks from '@/components/SEOPermalinks';
import FAQSchema from '@/components/FAQSchema';
import HowToSchema from '@/components/HowToSchema';
import AdSpace from '@/components/AdSpace';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const SevenYearAgeLimitKenya2025 = () => {
  const faqs = [
    {
      question: "When does the 7-year age limit take effect in Kenya?",
      answer: "The new 7-year car import age limit becomes effective on January 1, 2026. This means you have until December 31, 2025 to import 8-year-old vehicles under the current regulations."
    },
    {
      question: "Does the 7-year rule apply to electric vehicles?",
      answer: "Yes, the 7-year age limit applies to electric vehicles as well. However, EVs have additional requirements including battery health certification (minimum 80% capacity) and must be 2018 models or newer as of 2025."
    },
    {
      question: "What happens if my car turns 8 years old during shipping?",
      answer: "The age is calculated based on the date of first registration, not when it arrives in Kenya. If your vehicle is already in transit before January 1, 2026, and was 8 years old when shipped, consult with KRA as transition provisions may apply."
    },
    {
      question: "Can I appeal if my car is rejected for being too old?",
      answer: "No, age limit regulations are strict and non-negotiable. KRA will not grant exemptions. Ensure your vehicle meets the age requirement before importing to avoid losses."
    },
    {
      question: "Which year models can I import in 2026 under the new rule?",
      answer: "In 2026, you can only import vehicles manufactured in 2019 or later (7 years old or newer). In 2025, you can still import 2017 models (8 years old) until December 31, 2025."
    }
  ];

  const howToSteps = [
    {
      name: "Check your vehicle's manufacturing year",
      text: "Verify the exact year of manufacture on the vehicle's registration documents or auction sheet. This is the year that determines eligibility."
    },
    {
      name: "Calculate if it meets the age limit",
      text: "For imports in 2025: Vehicle must be 2017 or newer (8-year limit). For imports in 2026 onwards: Vehicle must be 2019 or newer (7-year limit)."
    },
    {
      name: "Use our calculator to estimate costs",
      text: "Enter your vehicle details in our import duty calculator to get accurate CRSP rates and total import costs before making a purchase.",
      url: "https://crspkenya.com/"
    },
    {
      name: "Complete purchase before deadline",
      text: "If importing an 8-year-old vehicle, ensure all documentation and shipping is completed before January 1, 2026 to avoid rejection at customs."
    }
  ];

  return (
    <>
      <SEOPermalinks
        title="BREAKING: Kenya Reduces Car Import Age Limit to 7 Years (2025) - Deadline & Costs"
        description="⚡ URGENT: Kenya's new 7-year car import rule starts Jan 2026. Calculate how this affects your import duty + which cars are now banned. Updated Oct 19, 2025"
        keywords="Kenya 7 year rule, car import age limit Kenya 2025, 8 year rule change, KRA new regulations, import deadline 2026, vehicle age restriction"
        canonicalUrl="https://crspkenya.com/blog/7-year-age-limit-kenya-2025"
      />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to Check if Your Car Qualifies Under the New 7-Year Rule"
        description="Step-by-step guide to verify if your vehicle meets Kenya's new 7-year import age limit effective January 2026"
        steps={howToSteps}
        totalTime="PT10M"
      />
      <Navigation />
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: '7-Year Age Limit Change', href: '/blog/7-year-age-limit-kenya-2025' }
        ]} 
      />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breaking News Alert */}
        <Alert className="mb-6 border-red-500 bg-red-50 dark:bg-red-950">
          <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
          <AlertDescription className="text-red-800 dark:text-red-300">
            <strong>⚠️ POLICY CHANGE:</strong> 7-year age limit effective January 1, 2026 | 
            Old rule: 8 years | New rule: 7 years | Time left to import 8-year-old cars: <strong>73 days</strong>
          </AlertDescription>
        </Alert>

        <h1 className="text-4xl font-bold mb-4">
          BREAKING: Kenya Reduces Car Import Age Limit to 7 Years (2025)
        </h1>
        
        <div className="flex items-center gap-4 text-muted-foreground mb-6">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            October 19, 2025
          </span>
          <span>8 min read</span>
          <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded text-sm font-semibold">
            BREAKING NEWS
          </span>
        </div>

        <AdSpace slot="top-article" />

        {/* Quick Summary */}
        <Card className="p-6 mb-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            ⚡ Quick Summary
          </h2>
          <ul className="space-y-2 text-foreground">
            <li>✅ <strong>Current Rule (Until Dec 31, 2025):</strong> Can import cars up to 8 years old</li>
            <li>🚨 <strong>New Rule (From Jan 1, 2026):</strong> Can only import cars up to 7 years old</li>
            <li>📅 <strong>Deadline:</strong> 73 days remaining to import 2017 models (8-year-old cars)</li>
            <li>💰 <strong>Impact:</strong> 2017 models will be banned after December 31, 2025</li>
            <li>🔧 <strong>What to Do:</strong> Calculate your import costs now and complete purchase before deadline</li>
          </ul>
          <Link to="/">
            <Button className="mt-4 w-full">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Import Duty for Your Car Now →
            </Button>
          </Link>
        </Card>

        {/* Main Content */}
        <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <h2>What Changed?</h2>
          
          <p>
            In a significant policy shift, the Kenyan government has reduced the maximum age for imported vehicles 
            from 8 years to 7 years, effective January 1, 2026. This change affects thousands of car importers 
            and buyers across the country.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Criteria</th>
                  <th className="border p-3 text-left">Old Rule (Until Dec 31, 2025)</th>
                  <th className="border p-3 text-left">New Rule (From Jan 1, 2026)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Maximum Age</td>
                  <td className="border p-3">8 years</td>
                  <td className="border p-3 text-red-600 dark:text-red-400 font-semibold">7 years</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">In 2025, Can Import</td>
                  <td className="border p-3">2017 models or newer</td>
                  <td className="border p-3">2018 models or newer</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">In 2026, Can Import</td>
                  <td className="border p-3">2018 models or newer</td>
                  <td className="border p-3 text-red-600 dark:text-red-400 font-semibold">2019 models or newer</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Effective Date</td>
                  <td className="border p-3">Currently active</td>
                  <td className="border p-3 font-semibold">January 1, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Cost Impact: Real Examples</h2>
          
          <h3>Example 1: Toyota Axio 2017</h3>
          <ul>
            <li><strong>Status:</strong> Was allowed until December 2025, now BANNED from January 2026</li>
            <li><strong>Current CRSP Value:</strong> ~KES 950,000</li>
            <li><strong>Import Duty:</strong> ~KES 330,000</li>
            <li><strong>Action Required:</strong> Must complete import by December 31, 2025</li>
          </ul>

          <h3>Example 2: Honda Fit 2018</h3>
          <ul>
            <li><strong>Status:</strong> Still allowed (7 years old in 2025)</li>
            <li><strong>Current CRSP Value:</strong> ~KES 1,100,000</li>
            <li><strong>Import Duty:</strong> ~KES 385,000</li>
            <li><strong>Safe to Import:</strong> Can import anytime until December 2026</li>
          </ul>

          <h3>Example 3: Nissan Note 2017</h3>
          <ul>
            <li><strong>Status:</strong> Last chance to import (8 years old)</li>
            <li><strong>Current CRSP Value:</strong> ~KES 880,000</li>
            <li><strong>Import Duty:</strong> ~KES 310,000</li>
            <li><strong>Deadline:</strong> December 31, 2025 (73 days remaining)</li>
          </ul>

          <Link to="/">
            <Button variant="outline" className="my-4">
              Calculate Your Car's Import Duty →
            </Button>
          </Link>

          <h2>Why Did the Government Make This Change?</h2>
          
          <p>According to KRA officials, the reduction to a 7-year age limit is aimed at:</p>
          
          <ol>
            <li><strong>Reducing Carbon Emissions:</strong> Newer vehicles have better emission standards</li>
            <li><strong>Improving Road Safety:</strong> Modern vehicles have advanced safety features</li>
            <li><strong>Aligning with EAC Standards:</strong> Harmonizing with East African Community regulations</li>
            <li><strong>Supporting Local Auto Industry:</strong> Encouraging newer vehicle imports and local assembly</li>
          </ol>

          <h2>Action Steps for Car Buyers</h2>

          <h3>If You're Buying BEFORE January 1, 2026:</h3>
          <ul>
            <li>✅ You can still import 8-year-old vehicles (2017 models)</li>
            <li>✅ Ensure all documentation is complete and vehicle ships before Dec 31, 2025</li>
            <li>✅ Factor in shipping time (30-45 days from Japan, 14-21 days from UAE)</li>
            <li>⚠️ <strong>Book shipping by mid-November 2025 to be safe</strong></li>
          </ul>

          <h3>If You're Waiting Until 2026:</h3>
          <ul>
            <li>🚨 You CANNOT import 2017 models anymore</li>
            <li>✅ Only 2018 models or newer will be allowed in 2026</li>
            <li>✅ 2019 models or newer from 2027 onwards</li>
            <li>💰 Budget for potentially higher costs (newer cars = higher CRSP values)</li>
          </ul>

          <AdSpace slot="mid-article" />

          <h2>Timeline Infographic</h2>
          
          <div className="bg-muted p-6 rounded-lg my-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shrink-0">
                  NOW
                </div>
                <div>
                  <h4 className="font-semibold">October 19, 2025 - December 31, 2025</h4>
                  <p className="text-sm">Can import 2017 models (8 years old). 73 days remaining.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shrink-0">
                  JAN
                </div>
                <div>
                  <h4 className="font-semibold">January 1, 2026 - December 31, 2026</h4>
                  <p className="text-sm">NEW RULE STARTS: Only 2018 models or newer (7 years max). 2017 models BANNED.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shrink-0">
                  2027
                </div>
                <div>
                  <h4 className="font-semibold">January 1, 2027 Onwards</h4>
                  <p className="text-sm">Only 2019 models or newer. 2018 models will be 9 years old and banned.</p>
                </div>
              </div>
            </div>
          </div>

          <h2>Frequently Asked Questions</h2>

          <h3>Does this apply to EVs?</h3>
          <p>
            Yes, the 7-year age limit applies to electric vehicles as well. However, EVs have additional 
            requirements including battery health certification (minimum 80% capacity).
          </p>

          <h3>What about cars already in transit?</h3>
          <p>
            If your vehicle is already shipped and in transit before January 1, 2026, consult with KRA. 
            Transition provisions may apply, but it's not guaranteed. Document everything.
          </p>

          <h3>Can I appeal if my car turns 8 during shipping?</h3>
          <p>
            No, age limit regulations are strict. KRA calculates age based on the date of first registration, 
            not arrival date. Plan accordingly and ship early.
          </p>

          <h3>Will 2017 models become cheaper before the deadline?</h3>
          <p>
            Possibly, but not guaranteed. Some sellers may reduce prices to clear inventory, while others 
            may increase prices due to high demand from Kenyan buyers rushing to beat the deadline.
          </p>

          <h3>Should I wait for 2026 to import?</h3>
          <p>
            Only wait if you specifically want a 2018+ model. If you're okay with 2017 models and can 
            afford them now, import before December 31, 2025 to have more options.
          </p>

          <h2>What Happens Next?</h2>
          
          <p>
            This policy change is expected to significantly impact the Kenyan used car market. Industry 
            experts predict:
          </p>

          <ul>
            <li>📈 <strong>Rush to Import 2017 Models:</strong> Expect high demand for 8-year-old vehicles in Nov-Dec 2025</li>
            <li>💰 <strong>Price Increase for Newer Models:</strong> 2018-2019 models may see price hikes</li>
            <li>🚗 <strong>Shift to Local Dealers:</strong> More buyers may purchase from local dealers instead of importing</li>
            <li>⚡ <strong>EV Adoption:</strong> May accelerate electric vehicle imports due to tax incentives</li>
          </ul>

          <h2>Next Steps</h2>
          
          <ol>
            <li><strong>Calculate Your Import Costs:</strong> Use our free calculator to see exact duty for your target vehicle</li>
            <li><strong>Check Vehicle Age:</strong> Verify manufacturing year on auction sheet or registration docs</li>
            <li><strong>Plan Your Timeline:</strong> If importing 2017 model, complete purchase by November 2025</li>
            <li><strong>Consider Alternatives:</strong> Look at 2018+ models if you miss the deadline</li>
            <li><strong>Stay Updated:</strong> Subscribe to our weekly CRSP updates for latest policy changes</li>
          </ol>

          <Link to="/">
            <Button size="lg" className="my-6 w-full">
              <Calculator className="mr-2 h-5 w-5" />
              Calculate Import Duty for Your Car Now
            </Button>
          </Link>
        </section>

        <AdSpace slot="bottom-article" />

        {/* Related Articles */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
          <div className="space-y-3">
            <Link to="/blog/kra-crsp-september-2025-update" className="block hover:underline text-primary">
              → KRA CRSP September 2025 Update: Latest Rate Changes
            </Link>
            <Link to="/blog/calculate-car-import-duty-kenya-2025" className="block hover:underline text-primary">
              → How to Calculate Car Import Duty in Kenya 2025
            </Link>
            <Link to="/blog/what-determines-duty" className="block hover:underline text-primary">
              → What Determines Your Import Duty in Kenya?
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

export default SevenYearAgeLimitKenya2025;