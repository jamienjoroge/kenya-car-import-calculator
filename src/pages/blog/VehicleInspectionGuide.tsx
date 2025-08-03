import React from "react";
import { ArrowLeft, FileCheck, AlertTriangle, CheckCircle, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";

const VehicleInspectionGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Free Vehicle Inspection Checklist Kenya 2025: Professional Roadworthy Guide"
        description="Comprehensive vehicle inspection checklist for Kenya. Ensure your car is roadworthy with our professional-grade safety checklist. Free tool with instant scoring and download."
        keywords="vehicle inspection Kenya, car safety checklist, roadworthy test Kenya, vehicle inspection certificate, car buying checklist Kenya"
      />
      
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="prose prose-lg max-w-none">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Free Vehicle Inspection Checklist Kenya 2025: Professional Roadworthy Guide
            </h1>
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="secondary">
                <FileCheck className="h-4 w-4 mr-1" />
                Inspection Checklist
              </Badge>
              <Badge variant="secondary">
                <Car className="h-4 w-4 mr-1" />
                Roadworthy Standards
              </Badge>
              <Badge variant="secondary">
                <CheckCircle className="h-4 w-4 mr-1" />
                Professional Grade
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Master vehicle inspection with our comprehensive checklist designed for Kenya's road conditions. Whether buying a car or ensuring roadworthiness, get professional-grade results instantly.
            </p>
          </header>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Why Vehicle Inspection Matters in Kenya
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Vehicle inspection in Kenya isn't just about compliance - it's about safety, value, and peace of mind. With diverse road conditions from smooth highways to challenging rural routes, knowing your vehicle's true condition is crucial.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">For Car Buyers:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Avoid costly surprises after purchase</li>
                      <li>• Negotiate better prices based on issues</li>
                      <li>• Ensure safety for family</li>
                      <li>• Verify seller claims</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">For Vehicle Owners:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Maintain roadworthiness</li>
                      <li>• Pass official inspections</li>
                      <li>• Prevent breakdowns</li>
                      <li>• Preserve vehicle value</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Professional Inspection System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our checklist covers 25 critical inspection points across 5 categories, designed specifically for Kenya's conditions:</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800">Engine & Performance (6 Points)</h4>
                    <ul className="text-red-700 text-sm mt-2 space-y-1">
                      <li>• Engine oil level and condition - Critical for engine health</li>
                      <li>• Coolant level and leaks - Essential in Kenya's hot climate</li>
                      <li>• Battery terminals and condition - Heat affects battery life</li>
                      <li>• Air filter condition - Dust protection crucial</li>
                      <li>• Engine belts and tension - Prevents roadside breakdowns</li>
                      <li>• Engine sound analysis - Early problem detection</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800">Safety Systems (6 Points)</h4>
                    <ul className="text-orange-700 text-sm mt-2 space-y-1">
                      <li>• Brake pedal feel and response - Life-critical safety check</li>
                      <li>• Brake fluid level and quality - Prevents brake failure</li>
                      <li>• All lighting systems - Legal requirement and safety</li>
                      <li>• Horn functionality - Required for road safety</li>
                      <li>• Seatbelt integrity - Passenger protection</li>
                      <li>• Handbrake effectiveness - Parking safety on slopes</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800">Tires & Wheels (4 Points)</h4>
                    <ul className="text-blue-700 text-sm mt-2 space-y-1">
                      <li>• Tire tread depth - Minimum 2mm for safety</li>
                      <li>• Tire damage inspection - Prevents blowouts</li>
                      <li>• Spare tire condition - Essential for remote areas</li>
                      <li>• Wheel alignment and nuts - Handling stability</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Understanding the Grading System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our scientific grading system provides clear vehicle assessment:</p>
                
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-green-800">Grade A+ (90%+, 0 critical failures)</div>
                      <div className="text-green-600">EXCELLENT</div>
                    </div>
                    <div className="text-green-700 text-sm mt-1">
                      Premium condition. Ready for immediate use. Full market value expected.
                    </div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-blue-800">Grade A (80%+, ≤1 critical failure)</div>
                      <div className="text-blue-600">VERY GOOD</div>
                    </div>
                    <div className="text-blue-700 text-sm mt-1">
                      Minor maintenance needed. Great purchase. 95-100% of market value.
                    </div>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-yellow-800">Grade B+ (70%+, ≤2 critical failures)</div>
                      <div className="text-yellow-600">GOOD</div>
                    </div>
                    <div className="text-yellow-700 text-sm mt-1">
                      Some repairs needed but worthwhile. 85-95% of market value.
                    </div>
                  </div>
                  
                  <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-orange-800">Grade C (45%+, ≤5 critical failures)</div>
                      <div className="text-orange-600">POOR</div>
                    </div>
                    <div className="text-orange-700 text-sm mt-1">
                      Significant repairs required. Negotiate price. 50-70% of market value.
                    </div>
                  </div>
                  
                  <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-red-800">Grade F (&lt;45%, &gt;5 critical failures)</div>
                      <div className="text-red-600">DANGEROUS</div>
                    </div>
                    <div className="text-red-700 text-sm mt-1">
                      Not roadworthy. Avoid or major overhaul needed. Below 50% of market value.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Use Our Inspection Tool</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Step-by-Step Process:</h3>
                <ol className="list-decimal ml-6 space-y-3">
                  <li>
                    <strong>Prepare for Inspection:</strong>
                    <ul className="list-disc ml-6 mt-1 text-sm">
                      <li>Ensure vehicle is clean for better visibility</li>
                      <li>Have vehicle documents ready</li>
                      <li>Inspect in good lighting conditions</li>
                      <li>Allow engine to warm up for accurate assessment</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Complete Each Category:</strong>
                    <ul className="list-disc ml-6 mt-1 text-sm">
                      <li>Work through each inspection point systematically</li>
                      <li>Check items as PASS or FAIL based on condition</li>
                      <li>Add repair cost estimates for failed items</li>
                      <li>Include detailed notes about specific issues</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Review Results:</strong>
                    <ul className="list-disc ml-6 mt-1 text-sm">
                      <li>Get instant vehicle grade and condition assessment</li>
                      <li>See purchase recommendation with confidence level</li>
                      <li>Review total estimated repair costs</li>
                      <li>Download professional inspection report</li>
                    </ul>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Critical vs. Non-Critical Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Understanding the difference helps prioritize safety and budget:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">Critical Items (Safety Essential)</h4>
                    <ul className="text-red-700 text-sm mt-2 space-y-1">
                      <li>• Brake system functionality</li>
                      <li>• Steering and suspension</li>
                      <li>• Tire condition and tread</li>
                      <li>• Essential lighting systems</li>
                      <li>• Engine oil and cooling</li>
                      <li>• Legal documentation</li>
                    </ul>
                    <p className="text-red-600 text-xs mt-2 font-medium">
                      Failure = Immediate safety risk or legal non-compliance
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Non-Critical Items (Comfort/Performance)</h4>
                    <ul className="text-blue-700 text-sm mt-2 space-y-1">
                      <li>• Air conditioning system</li>
                      <li>• Power windows/doors</li>
                      <li>• Radio and electronics</li>
                      <li>• Minor cosmetic issues</li>
                      <li>• Service history records</li>
                      <li>• Spare tire condition</li>
                    </ul>
                    <p className="text-blue-600 text-xs mt-2 font-medium">
                      Failure = Reduced comfort but vehicle still usable
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Purchase Decision Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our intelligent recommendation system considers:</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Recommended BUY (High Confidence)</h4>
                    <ul className="text-green-700 text-sm mt-2 space-y-1">
                      <li>• Grade A+ or A with minimal issues</li>
                      <li>• No critical safety failures</li>
                      <li>• Repair costs under 15% of vehicle value</li>
                      <li>• Excellent condition with minimal risk</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">CONSIDER Purchase (Medium Confidence)</h4>
                    <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                      <li>• Grade B+ or B with manageable issues</li>
                      <li>• Few critical failures, mostly repairable</li>
                      <li>• Repair costs 15-25% of vehicle value</li>
                      <li>• Good buy if price reflects needed repairs</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">AVOID Purchase (High Confidence)</h4>
                    <ul className="text-red-700 text-sm mt-2 space-y-1">
                      <li>• Grade F with multiple critical failures</li>
                      <li>• Repair costs exceed 35% of vehicle value</li>
                      <li>• Safety risks or structural problems</li>
                      <li>• Too many issues for most buyers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Issues in Kenya</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Be aware of these frequent problems due to local conditions:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Dust-Related Issues:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Clogged air filters (check frequently)</li>
                      <li>• Dusty interior and AC systems</li>
                      <li>• Premature brake pad wear</li>
                      <li>• Dirty engine bay components</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Climate-Related Issues:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Overheating problems (coolant leaks)</li>
                      <li>• Battery deterioration from heat</li>
                      <li>• Cracked rubber seals and hoses</li>
                      <li>• Faded paint and plastic trim</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">Road Condition Effects:</h4>
                  <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                    <li>• Suspension wear from potholes and rough roads</li>
                    <li>• Tire damage from sharp objects and poor surfaces</li>
                    <li>• Wheel alignment issues from road irregularities</li>
                    <li>• Undercarriage damage from scraping on rough terrain</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Inspection Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>While our tool provides comprehensive DIY inspection, consider professional services for:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">When to Use Our Tool:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Initial vehicle assessment</li>
                      <li>• Regular roadworthiness checks</li>
                      <li>• Pre-purchase screening</li>
                      <li>• Maintenance planning</li>
                      <li>• Insurance documentation</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">When to Get Professional Help:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Engine diagnostic requirements</li>
                      <li>• Transmission assessments</li>
                      <li>• Complex electrical issues</li>
                      <li>• Official inspection certificates</li>
                      <li>• Accident damage evaluation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Inspect Your Vehicle?</h3>
              <p className="text-muted-foreground mb-6">
                Use our professional-grade inspection checklist to ensure your vehicle is safe and roadworthy.
              </p>
              <Button asChild size="lg">
                <Link to="/vehicle-inspection">
                  <FileCheck className="h-5 w-5 mr-2" />
                  Start Vehicle Inspection
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default VehicleInspectionGuide;