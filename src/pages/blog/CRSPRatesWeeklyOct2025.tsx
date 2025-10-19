import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Calendar, TrendingUp, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOPermalinks from '@/components/SEOPermalinks';
import AdSpace from '@/components/AdSpace';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const CRSPRatesWeeklyOct2025 = () => {
  return (
    <>
      <SEOPermalinks
        title="CRSP Rates This Week: October 14-20, 2025 - Live KRA Import Duty Update"
        description="✅ Last verified: Oct 19, 2025 | No CRSP rate changes this week. See current import duty for Toyota, Nissan, Honda + top 10 cars. Updated every Monday."
        keywords="CRSP rates this week, KRA import duty October 2025, live CRSP updates, weekly rate changes, Kenya import duty news"
        canonicalUrl="https://crspkenya.com/blog/crsp-rates-weekly-october-2025"
      />
      <Navigation />
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'CRSP Rates This Week', href: '/blog/crsp-rates-weekly-october-2025' }
        ]} 
      />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Status Banner */}
        <Card className="p-6 mb-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <div className="flex items-start gap-4">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                ✅ VERIFIED: No CRSP Rate Changes This Week
              </h2>
              <p className="text-green-700 dark:text-green-300">
                <strong>Period:</strong> October 14-20, 2025 | 
                <strong> Last Checked:</strong> October 19, 2025 at 9:00 AM EAT
              </p>
            </div>
          </div>
        </Card>

        <h1 className="text-4xl font-bold mb-4">
          CRSP Rates This Week: October 14-20, 2025
        </h1>
        
        <div className="flex items-center gap-4 text-muted-foreground mb-6">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            October 19, 2025
          </span>
          <span>5 min read</span>
          <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950">
            Weekly Update
          </Badge>
        </div>

        <AdSpace slot="top-article" />

        {/* Top 10 Most-Searched Cars */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Top 10 Most-Searched Cars This Week</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">#</th>
                  <th className="border p-3 text-left">Car Model</th>
                  <th className="border p-3 text-left">Year</th>
                  <th className="border p-3 text-right">CRSP Value</th>
                  <th className="border p-3 text-right">Est. Import Duty</th>
                  <th className="border p-3 text-center">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">1</td>
                  <td className="border p-3">Toyota Axio</td>
                  <td className="border p-3">2018</td>
                  <td className="border p-3 text-right">KES 1,200,000</td>
                  <td className="border p-3 text-right">KES 420,000</td>
                  <td className="border p-3 text-center">
                    <Badge variant="secondary">No Change</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">2</td>
                  <td className="border p-3">Nissan Note</td>
                  <td className="border p-3">2019</td>
                  <td className="border p-3 text-right">KES 1,050,000</td>
                  <td className="border p-3 text-right">KES 368,000</td>
                  <td className="border p-3 text-center">
                    <Badge variant="secondary">No Change</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">3</td>
                  <td className="border p-3">Honda Fit Hybrid</td>
                  <td className="border p-3">2018</td>
                  <td className="border p-3 text-right">KES 1,380,000</td>
                  <td className="border p-3 text-right">KES 483,000</td>
                  <td className="border p-3 text-center">
                    <Badge variant="secondary">No Change</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">4</td>
                  <td className="border p-3">Toyota Fielder</td>
                  <td className="border p-3">2017</td>
                  <td className="border p-3 text-right">KES 980,000</td>
                  <td className="border p-3 text-right">KES 343,000</td>
                  <td className="border p-3 text-center">
                    <Badge variant="secondary">No Change</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">5</td>
                  <td className="border p-3">Mazda Demio</td>
                  <td className="border p-3">2018</td>
                  <td className="border p-3 text-right">KES 920,000</td>
                  <td className="border p-3 text-right">KES 322,000</td>
                  <td className="border p-3 text-center">
                    <Badge variant="secondary">No Change</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">6</td>
                  <td className="border p-3">Nissan X-Trail</td>
                  <td className="border p-3">2019</td>
                  <td className="border p-3 text-right">KES 2,100,000</td>
                  <td className="border p-3 text-right">KES 735,000</td>
                  <td className="border p-3 text-center">
                    <Badge variant="secondary">No Change</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">7</td>
                  <td className="border p-3">Toyota Prius</td>
                  <td className="border p-3">2018</td>
                  <td className="border p-3 text-right">KES 1,450,000</td>
                  <td className="border p-3 text-right">KES 508,000</td>
                  <td className="border p-3 text-center">
                    <Badge variant="secondary">No Change</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">8</td>
                  <td className="border p-3">Subaru Impreza</td>
                  <td className="border p-3">2019</td>
                  <td className="border p-3 text-right">KES 1,850,000</td>
                  <td className="border p-3 text-right">KES 648,000</td>
                  <td className="border p-3 text-center">
                    <Badge variant="secondary">No Change</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">9</td>
                  <td className="border p-3">Honda Vezel</td>
                  <td className="border p-3">2019</td>
                  <td className="border p-3 text-right">KES 1,980,000</td>
                  <td className="border p-3 text-right">KES 693,000</td>
                  <td className="border p-3 text-center">
                    <Badge variant="secondary">No Change</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">10</td>
                  <td className="border p-3">Toyota Vitz</td>
                  <td className="border p-3">2018</td>
                  <td className="border p-3 text-right">KES 1,100,000</td>
                  <td className="border p-3 text-right">KES 385,000</td>
                  <td className="border p-3 text-center">
                    <Badge variant="secondary">No Change</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link to="/">
            <Button className="mt-4 w-full">
              Calculate Your Car's Exact Import Duty →
            </Button>
          </Link>
        </section>

        {/* This Week's Highlights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">This Week's Highlights</h2>
          
          <Card className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Most Searched This Week</h3>
                <p className="text-muted-foreground">
                  <strong>Toyota Axio 2018</strong> remains the most popular search. 
                  Searches increased by <strong>15%</strong> compared to last week.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">2017 Models Seeing High Interest</h3>
                <p className="text-muted-foreground">
                  8-year-old vehicles (2017 models) saw <strong>40% more searches</strong> this week 
                  as the January 1, 2026 deadline approaches. Only <strong>73 days</strong> remaining 
                  to import 8-year-old cars.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Policy Update</h3>
                <p className="text-muted-foreground">
                  New 7-year age limit takes effect January 1, 2026. Read our full breakdown of 
                  how this affects you.
                </p>
                <Link to="/blog/7-year-age-limit-kenya-2025">
                  <Button variant="link" className="p-0 h-auto">
                    Read: 7-Year Age Limit Change →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-blue-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Market Trend: Hybrid Demand Rising</h3>
                <p className="text-muted-foreground">
                  Hybrid vehicles (Toyota Prius, Honda Fit Hybrid) searches up <strong>22%</strong> 
                  due to fuel savings and lower emissions.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <AdSpace slot="mid-article" />

        {/* What's Coming Next Week */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What's Coming Next Week</h2>
          
          <Card className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>Watch for:</strong> Finance Bill 2025 updates expected from KRA. 
                  May include changes to excise duty rates.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>Reminder:</strong> 66 days remaining (as of Oct 26) until 7-year age limit 
                  takes effect on January 1, 2026.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>October 1 Deadline:</strong> Certificate of Origin now mandatory. 
                  If you imported without it, read our guide on how to comply.
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Calculator CTA */}
        <Card className="p-6 mb-8 bg-primary/5">
          <h3 className="text-xl font-semibold mb-3">Get Your Exact Import Duty</h3>
          <p className="text-muted-foreground mb-4">
            Don't guess your import costs. Use our free calculator with live CRSP data 
            to get accurate duty estimates in 30 seconds.
          </p>
          <Link to="/">
            <Button size="lg" className="w-full">
              Calculate Import Duty Now →
            </Button>
          </Link>
        </Card>

        {/* Newsletter Signup */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-semibold mb-3">Get Weekly CRSP Updates</h3>
          <p className="text-muted-foreground mb-4">
            Subscribe to receive CRSP rate changes, policy updates, and import tips every Monday 
            at 8:00 AM directly to your inbox.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <Button>Subscribe</Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Or get updates via WhatsApp - Click the WhatsApp icon below
          </p>
        </Card>

        <AdSpace slot="bottom-article" />

        {/* Related Articles */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
          <div className="space-y-3">
            <Link to="/blog/7-year-age-limit-kenya-2025" className="block hover:underline text-primary">
              → BREAKING: Kenya Reduces Car Import Age Limit to 7 Years
            </Link>
            <Link to="/blog/kra-crsp-september-2025-update" className="block hover:underline text-primary">
              → KRA CRSP September 2025 Update: Latest Changes
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

export default CRSPRatesWeeklyOct2025;