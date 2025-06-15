
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const CRSPSchedule2025Changes = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="bg-white rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">CRSP Schedule 2025: What's Changed?</h1>
            <div className="flex items-center gap-6 text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                6 min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                November 28, 2024
              </span>
            </div>
            <p className="text-lg text-gray-700">
              Detailed breakdown of the new CRSP schedule effective July 2025 and its impact on import duties.
            </p>
          </header>

          <div className="prose max-w-none">
            <div className="bg-red-50 border border-red-200 rounded p-4 mb-6">
              <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Important Notice
              </h3>
              <p className="text-red-700">
                The new CRSP schedule became effective on July 1, 2025. All vehicles cleared after 
                this date are subject to the updated valuations, which may significantly impact your import costs.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Overview of Changes</h2>
            <p className="mb-6">
              The Kenya Revenue Authority implemented the most comprehensive CRSP update in five years, 
              affecting virtually every vehicle category. The changes reflect current market realities, 
              inflation, and evolving consumer preferences in the Kenyan automotive market.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary">Key Statistics</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Overall Impact</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• 1,200+ vehicle models updated</li>
                  <li>• Average CRSP increase: 7.5%</li>
                  <li>• 15 new vehicle categories added</li>
                  <li>• 200+ hybrid models included</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <h4 className="font-semibold text-green-800 mb-2">Implementation</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Effective: July 1, 2025</li>
                  <li>• Applies to all new clearances</li>
                  <li>• 6-month transition period</li>
                  <li>• Online calculator updated</li>
                </ul>
              </div>
            </div>

            <AdSpace slot="blog-content-1" format="rectangle" style={{ width: "300px", height: "250px", margin: "20px auto" }} />

            <h2 className="text-2xl font-semibold mb-4 text-primary">Category-Specific Changes</h2>

            <h3 className="text-xl font-semibold mb-3 text-primary">SUVs and Crossovers</h3>
            <p className="mb-4">
              The most significant changes affect the SUV category, reflecting their popularity 
              and higher market values in Kenya:
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">SUV CRSP Changes:</h4>
              <ul className="text-yellow-700 space-y-1">
                <li>• <strong>Toyota Harrier:</strong> +8.5% (now KES 2,800,000 base)</li>
                <li>• <strong>Nissan X-Trail:</strong> +6.2% (now KES 2,400,000 base)</li>
                <li>• <strong>Subaru Forester:</strong> +9.1% (now KES 2,900,000 base)</li>
                <li>• <strong>Honda CR-V:</strong> +7.8% (now KES 3,200,000 base)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-primary">Hybrid Vehicles</h3>
            <p className="mb-4">
              New dedicated categories for hybrid vehicles reflect their growing market presence:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Mild Hybrids:</strong> 5-10% premium over conventional models</li>
              <li><strong>Full Hybrids:</strong> 10-15% premium over conventional models</li>
              <li><strong>Plug-in Hybrids:</strong> 15-20% premium over conventional models</li>
              <li><strong>Electric Vehicles:</strong> New category with competitive valuations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-primary">Luxury Vehicles</h3>
            <p className="mb-4">
              Premium brands saw the largest increases, reflecting strong demand in the luxury segment:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 border border-purple-200 rounded p-4">
                <h4 className="font-semibold text-purple-800 mb-2">German Luxury</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• BMW: +12-18% increase</li>
                  <li>• Mercedes-Benz: +15-20% increase</li>
                  <li>• Audi: +10-15% increase</li>
                </ul>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded p-4">
                <h4 className="font-semibold text-indigo-800 mb-2">Japanese Luxury</h4>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• Lexus: +8-12% increase</li>
                  <li>• Infiniti: +6-10% increase</li>
                  <li>• Acura: +5-8% increase</li>
                </ul>
              </div>
            </div>

            <AdSpace slot="blog-content-2" format="horizontal" style={{ height: "90px", margin: "20px 0" }} />

            <h2 className="text-2xl font-semibold mb-4 text-primary">Impact on Popular Models</h2>
            <p className="mb-4">
              Here's how the changes affect some of Kenya's most imported vehicles:
            </p>

            <div className="space-y-4 mb-6">
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-semibold mb-2">2020 Toyota Harrier (2000cc)</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Old CRSP:</strong> KES 2,580,000</p>
                    <p><strong>Old Total Duty:</strong> ~KES 1,100,000</p>
                  </div>
                  <div>
                    <p><strong>New CRSP:</strong> KES 2,800,000</p>
                    <p><strong>New Total Duty:</strong> ~KES 1,193,600</p>
                    <p className="text-red-600"><strong>Increase:</strong> +KES 93,600</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-semibold mb-2">2019 Nissan X-Trail (2000cc)</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Old CRSP:</strong> KES 2,260,000</p>
                    <p><strong>Old Total Duty:</strong> ~KES 806,400</p>
                  </div>
                  <div>
                    <p><strong>New CRSP:</strong> KES 2,400,000</p>
                    <p><strong>New Total Duty:</strong> ~KES 856,800</p>
                    <p className="text-red-600"><strong>Increase:</strong> +KES 50,400</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Winners and Losers</h2>

            <h3 className="text-xl font-semibold mb-3 text-primary">Categories with Minimal Increases</h3>
            <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-2">Relatively Stable:</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Small hatchbacks (0-3% increase)</li>
                <li>• Commercial vehicles (2-4% increase)</li>
                <li>• Basic sedans (3-5% increase)</li>
                <li>• Older model vehicles (maintained depreciation rates)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-primary">Categories with Significant Increases</h3>
            <div className="bg-red-50 border border-red-200 rounded p-4 mb-6">
              <h4 className="font-semibold text-red-800 mb-2">Major Impact:</h4>
              <ul className="text-red-700 space-y-1">
                <li>• Large SUVs (10-18% increase)</li>
                <li>• Luxury sports cars (15-25% increase)</li>
                <li>• High-end hybrid/electric vehicles (8-15% increase)</li>
                <li>• Pick-up trucks (6-12% increase)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">What This Means for Importers</h2>
            <p className="mb-4">
              The CRSP changes have several implications for vehicle importers:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Budget planning:</strong> Import costs are now 5-10% higher on average</li>
              <li><strong>Model selection:</strong> Some previously affordable models may now be out of reach</li>
              <li><strong>Timing considerations:</strong> Vehicles shipped before July 1 use old rates</li>
              <li><strong>Alternative models:</strong> Consider models with smaller CRSP increases</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Next Review Cycle</h2>
            <p className="mb-6">
              KRA typically reviews CRSP values every 2-3 years. The next major review is expected 
              in 2027-2028, though minor adjustments may occur annually for specific categories.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h3 className="font-semibold text-blue-800 mb-2">💡 Stay Updated:</h3>
              <p className="text-blue-700">
                Our <Link to="/" className="text-primary hover:underline">import calculator</Link> is 
                always updated with the latest CRSP values. Calculate your import costs with 
                confidence using the current July 2025 schedule.
              </p>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default CRSPSchedule2025Changes;
