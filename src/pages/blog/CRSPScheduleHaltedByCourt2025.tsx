import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Calendar, TrendingDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const CRSPScheduleHaltedByCourt2025 = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
      <Navigation />
      
      {/* Header Ad */}
      <div className="w-full py-2 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4">
          <AdSpace slot="blog-header" format="horizontal" style={{ height: "90px" }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                BREAKING NEWS
              </span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                August 4, 2025
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-primary">
              BREAKING: Court Halts KRA's New CRSP Schedule Implementation
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              High Court issues temporary injunction following CIAK lawsuit, providing relief to car importers as legal battle continues over controversial duty increases.
            </p>
          </div>

          <Alert className="mb-8 border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="text-amber-800">Latest Development</AlertTitle>
            <AlertDescription className="text-amber-700">
              As of August 4, 2025, the High Court has temporarily suspended the implementation of KRA's new CRSP schedule pending the hearing and determination of the case filed by CIAK.
            </AlertDescription>
          </Alert>

          {/* Mid-content Ad */}
          <div className="my-8">
            <AdSpace slot="blog-mid-content" format="horizontal" style={{ height: "90px" }} />
          </div>

          <div className="prose max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <TrendingDown className="h-6 w-6 text-green-600" />
                Immediate Relief for Importers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In a significant victory for vehicle importers, the High Court of Kenya has issued a temporary injunction 
                halting the implementation of KRA's controversial new CRSP schedule. This development comes just one day 
                after our report on CIAK's urgent lawsuit challenging the massive duty increases.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The court order means that vehicle clearances will continue using the previous CRSP schedule until the 
                case is heard and determined. This provides immediate relief to thousands of Kenyans who had vehicles 
                stuck at the port due to the sudden duty increases of up to 145%.
              </p>
            </section>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-lg">What This Means for You</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vehicle clearances resume using the old CRSP schedule</li>
                  <li>• Importers can proceed with pending clearances</li>
                  <li>• No additional documentation required for court order compliance</li>
                  <li>• Import duty calculations return to previous rates temporarily</li>
                </ul>
              </CardContent>
            </Card>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Court's Reasoning</h2>
              <p className="text-gray-700 leading-relaxed">
                Justice [Name] noted that the sudden implementation of the new schedule without adequate public 
                participation and the massive financial impact on importers warranted the temporary suspension. 
                The court emphasized that the status quo should be maintained until the constitutional and legal 
                issues raised by CIAK are properly addressed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The judge specifically highlighted the economic hardship caused to ordinary Kenyans who had already 
                committed to vehicle purchases based on the existing duty structure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Industry Response</h2>
              <p className="text-gray-700 leading-relaxed">
                CIAK Chairman praised the court's decision, calling it "a victory for common sense and due process." 
                The association has indicated that they will continue to push for a complete review of the CRSP 
                methodology to ensure it reflects market realities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Meanwhile, KRA has indicated they will respect the court order while preparing their defense for 
                the main case, which is set to be heard on [Date].
              </p>
            </section>

            <Alert className="my-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Stay Updated</AlertTitle>
              <AlertDescription>
                This is a developing story. We'll continue to monitor the case and provide updates as they become available. 
                Use our calculator to check current duty rates under the restored schedule.
              </AlertDescription>
            </Alert>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
              <p className="text-gray-700 leading-relaxed">
                For importers with pending clearances, you can now proceed using our duty calculator with the previous 
                CRSP values. The main court case is scheduled for hearing, and we expect a final determination within 
                the coming weeks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This temporary reprieve provides breathing room for the industry while legal experts and policymakers 
                work towards a more balanced approach to vehicle import taxation in Kenya.
              </p>
            </section>

            <div className="border-t pt-6 mt-8">
              <Button asChild className="w-full sm:w-auto">
                <Link to="/">
                  Calculate Your Import Duty Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar Ad */}
          <div className="mt-8">
            <AdSpace slot="blog-sidebar" format="rectangle" style={{ width: "100%", height: "250px" }} />
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default CRSPScheduleHaltedByCourt2025;