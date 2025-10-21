import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CloudRain } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SEOPermalinks from "@/components/SEOPermalinks";
import LastVerifiedBadge from "@/components/LastVerifiedBadge";

const MaintenanceScheduleOct2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Car Maintenance Schedule Kenya Q4 2025: Rainy Season Prep Checklist | GariMoto"
        description="Complete Q4 2025 maintenance guide with rainy season prep checklist and October 2025 service costs for Kenya."
        keywords="car maintenance schedule Kenya, rainy season car maintenance, October 2025 service costs, Q4 maintenance checklist"
        canonicalUrl="https://garimoto.co.ke/blog/maintenance-schedule-oct-2025"
      />
      
      <Navigation />
      <BreadcrumbNav 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Q4 2025 Maintenance Schedule", href: "/blog/maintenance-schedule-oct-2025" }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog"><ArrowLeft className="h-4 w-4 mr-2" />Back to Blog</Link>
        </Button>

        <LastVerifiedBadge />

        <h1 className="text-4xl font-bold mb-4 text-primary">Car Maintenance Schedule Kenya Q4 2025</h1>
        <p className="text-lg mb-6">Complete rainy season prep checklist with October-December service priorities and costs.</p>

        <Card className="p-6 mb-8 bg-blue-50">
          <div className="flex items-center gap-3 mb-3">
            <CloudRain className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-bold">Rainy Season Alert</h3>
          </div>
          <p className="mb-4">October-December brings Kenya's short rains. Prepare your vehicle now to avoid breakdowns!</p>
          <Button asChild size="lg">
            <Link to="/maintenance-schedule"><Calendar className="h-5 w-5 mr-2" />Track Your Maintenance →</Link>
          </Button>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">October 2025: Pre-Rainy Season Critical Checks</h2>
          
          <Card className="p-6 mb-6 bg-red-50">
            <h3 className="text-xl font-bold mb-3 text-red-700">⚠️ Priority 1: Safety Items (Do These First!)</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg">1. Brake System Inspection</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Why Critical:</strong> Wet roads reduce braking efficiency by 30%</li>
                  <li><strong>Check:</strong> Brake pads (minimum 3mm), brake fluid level</li>
                  <li><strong>Cost:</strong> Inspection KES 1,500 | Pad replacement KES 6,000-12,000</li>
                  <li><strong>Book By:</strong> October 25, 2025</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg">2. Tire Condition & Tread Depth</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Why Critical:</strong> Worn tires = hydroplaning risk</li>
                  <li><strong>Check:</strong> Tread depth (minimum 3mm), sidewall cracks</li>
                  <li><strong>Cost:</strong> New tire KES 8,000-15,000 each</li>
                  <li><strong>Tip:</strong> Rotate tires if uneven wear</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg">3. Wiper Blades & Washer Fluid</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Why Critical:</strong> Visibility = safety in heavy rain</li>
                  <li><strong>Replace If:</strong> Streaking, skipping, or older than 12 months</li>
                  <li><strong>Cost:</strong> KES 1,500-3,000 per pair</li>
                  <li><strong>Pro Tip:</strong> Keep extra washer fluid (KES 300) in boot</li>
                </ul>
              </div>
            </div>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">November 2025: Mid-Rainy Season Maintenance</h2>
          
          <Card className="p-6 mb-6 bg-yellow-50">
            <h3 className="text-xl font-bold mb-3">Priority 2: Performance & Reliability</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg">4. Battery Check & Terminals</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Why Important:</strong> Rain causes corrosion, cold starts harder</li>
                  <li><strong>Check:</strong> Voltage (12.4V+), terminal corrosion</li>
                  <li><strong>Cost:</strong> Testing free | New battery KES 8,000-15,000</li>
                  <li><strong>Lifespan:</strong> Replace every 3-4 years</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg">5. Engine Oil & Filter Service</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Schedule:</strong> Every 5,000-10,000 km or 6 months</li>
                  <li><strong>Cost (Sedan):</strong> KES 4,500-7,000 (synthetic)</li>
                  <li><strong>Cost (SUV):</strong> KES 6,500-10,000</li>
                  <li><strong>Check Also:</strong> Air filter, cabin filter</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg">6. Lights & Electrical System</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Test:</strong> Headlights, taillights, indicators, hazards</li>
                  <li><strong>Cost:</strong> Bulb replacement KES 500-2,000 each</li>
                  <li><strong>Upgrade Option:</strong> LED bulbs (KES 3,000-5,000, brighter)</li>
                </ul>
              </div>
            </div>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">December 2025: End-of-Year Full Service</h2>
          
          <Card className="p-6 mb-6 bg-green-50">
            <h3 className="text-xl font-bold mb-3">Priority 3: Comprehensive Service</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg">7. Full Vehicle Service</h4>
                <p className="mb-2">Complete year-end inspection and servicing:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Engine oil & filter change</li>
                  <li>Brake fluid flush (every 2 years)</li>
                  <li>Coolant check/top-up</li>
                  <li>Transmission fluid inspection</li>
                  <li>Suspension & steering check</li>
                  <li>Exhaust system inspection</li>
                </ul>
                <p className="mt-2"><strong>Cost:</strong> KES 12,000-25,000 (varies by model)</p>
              </div>

              <div>
                <h4 className="font-bold text-lg">8. Wheel Alignment & Balancing</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Why:</strong> Pothole season damages alignment</li>
                  <li><strong>Signs Needed:</strong> Vehicle pulls, uneven tire wear</li>
                  <li><strong>Cost:</strong> KES 2,500-4,000</li>
                  <li><strong>Book Early:</strong> December is busy season</li>
                </ul>
              </div>
            </div>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">Q4 2025 Service Costs by Vehicle Type</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Service</th>
                  <th className="border border-gray-300 px-4 py-2">Sedan</th>
                  <th className="border border-gray-300 px-4 py-2">SUV</th>
                  <th className="border border-gray-300 px-4 py-2">Hybrid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Oil Change</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 5,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 8,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 6,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Brake Pads</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 8,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 12,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 15,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Battery</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 10,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 15,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 18,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Full Service</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 15,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 22,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">KES 20,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Rainy Season Driving Tips</h2>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>Reduce Speed by 30%:</strong> Wet roads = longer stopping distance</li>
            <li><strong>Increase Following Distance:</strong> 4-5 seconds instead of 2-3</li>
            <li><strong>Avoid Puddles:</strong> Deep water can damage engine (hydrolock)</li>
            <li><strong>Use Headlights:</strong> Even during day for visibility</li>
            <li><strong>Don't Drive Through Floods:</strong> 30cm water can stall most cars</li>
            <li><strong>Check Tire Pressure Weekly:</strong> Maintain recommended PSI</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Emergency Kit for Rainy Season</h2>
          <p className="mb-4">Keep these in your boot:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>✅ Spare tire (properly inflated) + jack + wrench</li>
            <li>✅ Jump starter or jumper cables</li>
            <li>✅ Flashlight + extra batteries</li>
            <li>✅ First aid kit</li>
            <li>✅ Reflective triangle</li>
            <li>✅ Towel + change of clothes (if stuck in rain)</li>
            <li>✅ Emergency contact numbers</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Save Money: DIY Checks You Can Do</h2>
          <Card className="p-6 mb-6 bg-blue-50">
            <h3 className="text-xl font-bold mb-3">Free Weekly Checks (5 Minutes)</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Check tire pressure with gauge (KES 300 at any petrol station)</li>
              <li>Inspect tire tread with 50 bob coin (if it disappears in tread = good)</li>
              <li>Test all lights (ask friend to confirm)</li>
              <li>Check wiper effectiveness</li>
              <li>Listen for unusual noises when driving</li>
            </ol>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">Where to Service in Nairobi</h2>
          <p className="mb-4"><strong>Trusted Service Centers (October 2025 Prices):</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Toyota Kenya (Official):</strong> Higher cost but warranty protection</li>
            <li><strong>CMC Motors:</strong> Nissan specialists, fair pricing</li>
            <li><strong>DT Dobie:</strong> VW, Mazda, Peugeot authorized</li>
            <li><strong>Independent Mechanics:</strong> 40% cheaper but check reputation</li>
            <li><strong>Pro Tip:</strong> Always ask for itemized quote before work starts</li>
          </ul>

          <Card className="p-6 mt-8 bg-green-50">
            <h3 className="text-xl font-bold mb-3">Track Your Maintenance Schedule</h3>
            <p className="mb-4">Never miss a service with our free maintenance tracker. Set reminders and keep service history.</p>
            <Button asChild>
              <Link to="/maintenance-schedule"><Calendar className="h-5 w-5 mr-2" />Start Tracking →</Link>
            </Button>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default MaintenanceScheduleOct2025;
