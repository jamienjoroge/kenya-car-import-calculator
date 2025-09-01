
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, AlertTriangle, Scale, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const CIAKvsKRALawsuit2025 = () => {
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
            <div className="bg-red-50 border border-red-200 rounded p-4 mb-6">
              <h1 className="text-4xl font-bold mb-4 text-red-800 flex items-center gap-2">
                <Scale className="h-8 w-8" />
                BREAKING: Car Dealers Sue KRA Over New CRSP Schedule 2025
              </h1>
            </div>
            <div className="flex items-center gap-6 text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                December 24, 2024
              </span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                BREAKING NEWS
              </span>
            </div>
            <p className="text-lg text-gray-700">
              Car Importers Association of Kenya (CIAK) files urgent lawsuit against KRA challenging the new CRSP schedule that increases import duties by up to 145% on popular vehicles.
            </p>
          </header>

          <div className="prose max-w-none">
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Latest Update - Court Case Urgent
              </h3>
              <p className="text-yellow-700">
                Justice Jairus Ngaah at Mombasa High Court has declared this case urgent. KRA has 7 days to respond 
                to the lawsuit filed on June 20, 2024. The new CRSP schedule was set to take effect July 1, 2024.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">What's the Lawsuit About?</h2>
            <p className="mb-6">
              The Car Importers Association of Kenya (CIAK) has filed an urgent application at the Mombasa High Court 
              challenging KRA's new Current Retail Selling Price (CRSP) list. The association argues that the new 
              schedule unfairly targets everyday vehicles while giving preferential treatment to luxury cars.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary">Key Players in the Legal Battle</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  CIAK (Plaintiffs)
                </h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Chairman: Peter Otieno</li>
                  <li>• Represents car importers nationwide</li>
                  <li>• Filed urgent application June 20</li>
                  <li>• Seeking injunction against new CRSP</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  KRA (Defendants)
                </h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Kenya Revenue Authority</li>
                  <li>• Defending new CRSP schedule</li>
                  <li>• Claims proper consultation occurred</li>
                  <li>• 7 days to respond to court</li>
                </ul>
              </div>
            </div>

            <AdSpace slot="blog-content-1" format="rectangle" style={{ width: "300px", height: "250px", margin: "20px auto" }} />

            <h2 className="text-2xl font-semibold mb-4 text-primary">Shocking Tax Increases: Up to 145%</h2>
            <p className="mb-4">
              CIAK Chairman Peter Otieno revealed that the new CRSP schedule would spike import taxes by up to 145% 
              on common vehicles that ordinary Kenyans rely on, while luxury vehicles receive more favorable rates.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary">Vehicles Hit Hardest by New CRSP</h3>
            <div className="bg-red-50 border border-red-200 rounded p-4 mb-6">
              <h4 className="font-semibold text-red-800 mb-2">Popular Models Facing Massive Tax Hikes:</h4>
              <ul className="text-red-700 space-y-2">
                <li>• <strong>Toyota Vitz:</strong> Import duty increase up to 145%</li>
                <li>• <strong>Suzuki Swift:</strong> Significant duty spike affecting affordability</li>
                <li>• <strong>Mazda Demio:</strong> Popular compact car hit with punitive rates</li>
                <li>• <strong>Other "bread-and-butter" vehicles:</strong> Across-the-board increases</li>
              </ul>
            </div>

            <p className="mb-6">
              These vehicles are considered "bread-and-butter" cars - affordable options that middle-class Kenyans 
              depend on for transportation. The massive duty increases could price out thousands of potential car buyers.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Legal Grounds for the Lawsuit</h2>
            <p className="mb-4">
              CIAK's lawsuit is based on three main legal challenges to KRA's new CRSP implementation:
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary">1. No Public Participation</h3>
            <div className="bg-orange-50 border border-orange-200 rounded p-4 mb-6">
              <h4 className="font-semibold text-orange-800 mb-2">Constitutional Violation Claims:</h4>
              <ul className="text-orange-700 space-y-1">
                <li>• KRA allegedly rolled out CRSP list unilaterally</li>
                <li>• Contradicts legal requirements for stakeholder involvement</li>
                <li>• Violates previous court directives requiring public participation</li>
                <li>• Goes against constitutional principles of transparency</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-primary">2. Discriminatory Impact</h3>
            <p className="mb-4">
              CIAK argues that the new CRSP schedule creates an unfair two-tier system:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Common vehicles:</strong> Face punitive tax increases making them unaffordable</li>
              <li><strong>Luxury vehicles:</strong> Receive more favorable treatment and lower relative increases</li>
              <li><strong>Economic impact:</strong> Could shut out middle-class buyers from car ownership</li>
              <li><strong>Market distortion:</strong> Artificially skews market toward expensive vehicles</li>
            </ul>

            <AdSpace slot="blog-content-2" format="horizontal" style={{ height: "90px", margin: "20px 0" }} />

            <h3 className="text-xl font-semibold mb-3 text-primary">3. Lack of Transparency</h3>
            <div className="bg-purple-50 border border-purple-200 rounded p-4 mb-6">
              <h4 className="font-semibold text-purple-800 mb-2">Transparency Concerns:</h4>
              <ul className="text-purple-700 space-y-1">
                <li>• Many popular car models not included in the published list</li>
                <li>• Gives customs officials unchecked discretion on valuations</li>
                <li>• Creates uncertainty for importers and buyers</li>
                <li>• Potential for arbitrary and inconsistent application</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">KRA's Defense: Economic Justification</h2>
            <p className="mb-4">
              KRA maintains that the new CRSP schedule is fully justified and necessary due to significant 
              economic changes since the last review in 2019.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary">KRA's Key Arguments</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <h4 className="font-semibold mb-2">Economic Changes Since 2019</h4>
                <ul className="text-sm space-y-1">
                  <li>• USD exchange rate: KSh 100 → KSh 130</li>
                  <li>• Import duties have increased</li>
                  <li>• Excise duties have increased</li>
                  <li>• Overall economic conditions changed</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <h4 className="font-semibold mb-2">Improved CRSP Database</h4>
                <ul className="text-sm space-y-1">
                  <li>• 5,200 models vs 3,000 in 2019</li>
                  <li>• Updated trim details included</li>
                  <li>• More comprehensive coverage</li>
                  <li>• Better market representation</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-primary">KRA Claims Proper Consultation</h3>
            <p className="mb-4">
              Contrary to CIAK's claims, KRA asserts that stakeholder consultations did take place, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>CIAK:</strong> Car Importers Association of Kenya</li>
              <li><strong>KABA:</strong> Kenya Association of Bankers</li>
              <li><strong>Freight forwarders:</strong> Industry representatives</li>
              <li><strong>Public submissions:</strong> Open consultation period</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Court Proceedings and Timeline</h2>
            <p className="mb-4">
              Justice Jairus Ngaah at the Mombasa High Court has taken the following actions:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
              <h4 className="font-semibold text-blue-800 mb-2">Court Timeline:</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• <strong>June 20, 2024:</strong> CIAK files urgent application</li>
                <li>• <strong>Same day:</strong> Justice Ngaah declares case urgent</li>
                <li>• <strong>Current status:</strong> KRA has 7 days to respond</li>
                <li>• <strong>July 1, 2024:</strong> Original CRSP implementation date</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-primary">What CIAK Wants from the Court</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Defer July 1 rollout:</strong> Stop immediate implementation</li>
              <li><strong>90-day transition period:</strong> Allow time for proper review</li>
              <li><strong>Joint technical team:</strong> Form committee to review CRSP values</li>
              <li><strong>Stakeholder involvement:</strong> Ensure proper public participation</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Historical Precedent: Previous Court Victories</h2>
            <p className="mb-4">
              This isn't the first time courts have sided with importers against KRA's CRSP changes:
            </p>
            <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-2">Past Court Decisions:</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Previous High Court rulings invalidated CRSP changes</li>
                <li>• Courts consistently rule against lack of public participation</li>
                <li>• Legal precedent favors transparent consultation processes</li>
                <li>• Constitutional requirements for stakeholder involvement upheld</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Impact on Car Buyers and Market</h2>
            <p className="mb-4">
              The outcome of this lawsuit will have massive implications for Kenya's automotive market:
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary">If KRA Wins (CRSP Implemented)</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Import costs for popular cars increase by up to 145%</li>
              <li>Middle-class buyers priced out of car ownership</li>
              <li>Shift toward more expensive vehicle segments</li>
              <li>Reduced overall vehicle imports</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-primary">If CIAK Wins (CRSP Halted/Revised)</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Current CRSP rates remain or moderate increases implemented</li>
              <li>Affordable vehicles remain accessible</li>
              <li>Proper stakeholder consultation required</li>
              <li>More balanced approach to duty increases</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-primary">What This Means for You</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">If You're Planning to Import:</h4>
              <ul className="text-yellow-700 space-y-1">
                <li>• <strong>Wait for court decision:</strong> Don't make final purchase until ruling</li>
                <li>• <strong>Calculate both scenarios:</strong> Use our calculator with current and new CRSP</li>
                <li>• <strong>Consider timing:</strong> Ships arriving before ruling may use old rates</li>
                <li>• <strong>Stay informed:</strong> Court decision expected within days</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Expert Analysis: Likely Outcome</h2>
            <p className="mb-4">
              Based on historical precedent and the strength of CIAK's legal arguments, several scenarios are possible:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <h4 className="font-semibold text-red-800 mb-2">KRA Victory (30%)</h4>
                <p className="text-red-700 text-sm">
                  Court finds KRA consultation adequate, new CRSP proceeds as planned
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Compromise (50%)</h4>
                <p className="text-yellow-700 text-sm">
                  Court orders delay and revised consultation, modified CRSP rates
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <h4 className="font-semibold text-green-800 mb-2">CIAK Victory (20%)</h4>
                <p className="text-green-700 text-sm">
                  Complete halt of new CRSP, return to 2019 rates with gradual increases
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h3 className="font-semibold text-blue-800 mb-2">💡 Calculate Your Import Costs:</h3>
              <p className="text-blue-700">
                While waiting for the court decision, use our <Link to="/" className="text-primary hover:underline">
                Kenya car import calculator</Link> to estimate costs under both the current and proposed CRSP schedules. 
                This will help you make informed decisions regardless of the court outcome.
              </p>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default CIAKvsKRALawsuit2025;
