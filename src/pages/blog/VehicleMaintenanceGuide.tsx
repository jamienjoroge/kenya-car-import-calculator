import React from "react";
import { ArrowLeft, Wrench, Calendar, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";

const VehicleMaintenanceGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Vehicle Maintenance Schedule Kenya 2025: Complete Service Tracker Guide"
        description="Master your car maintenance with our comprehensive guide for Kenya. Track service schedules, estimate costs, and keep your vehicle roadworthy. Free maintenance tracker included."
        keywords="vehicle maintenance Kenya, car service schedule, automotive maintenance tracker, vehicle service costs Kenya, car maintenance checklist"
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
              Vehicle Maintenance Schedule Kenya 2025: Complete Service Tracker Guide
            </h1>
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="secondary">
                <Wrench className="h-4 w-4 mr-1" />
                Maintenance
              </Badge>
              <Badge variant="secondary">
                <Calendar className="h-4 w-4 mr-1" />
                Schedule Tracker
              </Badge>
              <Badge variant="secondary">
                <CheckCircle className="h-4 w-4 mr-1" />
                Kenya Focused
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Never miss another service with our comprehensive vehicle maintenance tracker designed specifically for Kenya's driving conditions. Save money, extend vehicle life, and stay roadworthy.
            </p>
          </header>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Why Vehicle Maintenance Matters in Kenya
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Kenya's unique driving conditions - from dusty roads to heavy traffic in Nairobi - place extra demands on your vehicle. Regular maintenance isn't just about compliance; it's about safety, cost savings, and reliability.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Financial Benefits:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Prevent costly breakdowns</li>
                      <li>• Maintain resale value</li>
                      <li>• Improve fuel efficiency</li>
                      <li>• Extend vehicle lifespan</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Safety & Legal:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Ensure roadworthiness</li>
                      <li>• Prevent accidents</li>
                      <li>• Pass vehicle inspections</li>
                      <li>• Maintain insurance validity</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kenya-Specific Maintenance Priorities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our maintenance tracker focuses on services critical for Kenya's environment:</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800">High Priority (Critical for Safety)</h4>
                    <ul className="text-red-700 text-sm mt-2 space-y-1">
                      <li>• <strong>Engine Oil & Filter (Every 5,000 km):</strong> Kenya's dusty conditions require frequent changes</li>
                      <li>• <strong>Air Filter (Every 8,000 km):</strong> Essential protection against dust</li>
                      <li>• <strong>Brake System (Every 12,000 km):</strong> Critical for safety on highways</li>
                      <li>• <strong>AC System (Every 15,000 km):</strong> Essential for comfort in hot climate</li>
                      <li>• <strong>Tire Rotation (Every 8,000 km):</strong> Important for rough road conditions</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-yellow-800">Medium Priority (Performance & Reliability)</h4>
                    <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                      <li>• <strong>Battery Check (Every 10,000 km):</strong> Heat affects battery life</li>
                      <li>• <strong>Coolant Service (Every 20,000 km):</strong> Prevents overheating</li>
                      <li>• <strong>Spark Plugs (Every 15,000 km):</strong> For optimal performance</li>
                      <li>• <strong>Wheel Alignment (Every 12,000 km):</strong> Compensates for road conditions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Use Our Maintenance Tracker</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Step-by-Step Setup:</h3>
                <ol className="list-decimal ml-6 space-y-3">
                  <li>
                    <strong>Enter Vehicle Information:</strong>
                    <ul className="list-disc ml-6 mt-1 text-sm">
                      <li>Current mileage (odometer reading)</li>
                      <li>Vehicle age in years</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Review Maintenance Items:</strong>
                    <ul className="list-disc ml-6 mt-1 text-sm">
                      <li>Pre-loaded with Kenya-specific maintenance schedule</li>
                      <li>Organized by category (Engine, Safety, Tires, etc.)</li>
                      <li>Priority levels clearly marked</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Track Service Completion:</strong>
                    <ul className="list-disc ml-6 mt-1 text-sm">
                      <li>Check off completed services</li>
                      <li>Add actual repair costs for budgeting</li>
                      <li>Add notes about service quality or issues</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Monitor Status:</strong>
                    <ul className="list-disc ml-6 mt-1 text-sm">
                      <li>View overdue services in red</li>
                      <li>See due soon services in orange</li>
                      <li>Track upcoming costs and budget accordingly</li>
                    </ul>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Understanding Service Intervals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our tracker uses both mileage and time-based intervals to ensure your vehicle stays in top condition:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Mileage-Based Services</h4>
                    <p className="text-blue-700 text-sm mt-2">
                      Based on kilometers driven. Ideal for vehicles with consistent use. More accurate for wear-and-tear items like tires and brakes.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Time-Based Services</h4>
                    <p className="text-green-700 text-sm mt-2">
                      Based on months since last service. Important for fluids and filters that degrade over time, even with low mileage.
                    </p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 font-medium">💡 Our Recommendation:</p>
                  <p className="text-yellow-700 text-sm">
                    Follow whichever interval comes first. For example, if oil change is due every 5,000 km or 4 months, service at 5,000 km even if it's only been 3 months, or at 4 months even if you've only driven 4,000 km.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estimated Service Costs in Kenya (2025)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Budget estimates for common services (costs may vary by location and vehicle type):</p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Regular Services:</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span>Engine Oil & Filter</span>
                          <span>KES 4,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Air Filter</span>
                          <span>KES 2,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tire Rotation</span>
                          <span>KES 2,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Battery Check</span>
                          <span>KES 3,000</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Major Services:</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span>Brake Service</span>
                          <span>KES 8,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>AC Service</span>
                          <span>KES 6,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Transmission Service</span>
                          <span>KES 18,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Timing Belt</span>
                          <span>KES 25,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Money-Saving Tips:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Get multiple quotes for major services</li>
                    <li>• Build relationships with trusted mechanics</li>
                    <li>• Buy parts in advance during sales</li>
                    <li>• Consider DIY for simple tasks like air filter replacement</li>
                    <li>• Join group purchases for bulk oil changes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Maintenance for Kenya</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Be prepared for common issues on Kenyan roads:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">Overheating Prevention</h4>
                    <ul className="text-red-700 text-sm mt-2 space-y-1">
                      <li>• Check coolant level monthly</li>
                      <li>• Service radiator every 20,000 km</li>
                      <li>• Carry extra coolant for long trips</li>
                      <li>• Monitor temperature gauge always</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800">Dust Protection</h4>
                    <ul className="text-orange-700 text-sm mt-2 space-y-1">
                      <li>• Change air filter more frequently</li>
                      <li>• Clean engine bay monthly</li>
                      <li>• Service AC system regularly</li>
                      <li>• Check cabin filter often</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maintenance Record Keeping</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Proper documentation helps with:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Vehicle resale value preservation</li>
                  <li>Warranty claim support</li>
                  <li>Insurance claim processing</li>
                  <li>Pattern identification for recurring issues</li>
                  <li>Service provider performance tracking</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Our Tracker Features:</h4>
                  <ul className="text-blue-700 text-sm mt-2 space-y-1">
                    <li>• Downloadable maintenance reports</li>
                    <li>• Email report functionality</li>
                    <li>• Cost tracking and budgeting</li>
                    <li>• Service notes and comments</li>
                    <li>• Reminder notifications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4">Start Tracking Your Vehicle Maintenance</h3>
              <p className="text-muted-foreground mb-6">
                Use our free maintenance tracker to keep your vehicle in perfect condition and never miss another service.
              </p>
              <Button asChild size="lg">
                <Link to="/maintenance-schedule">
                  <Wrench className="h-5 w-5 mr-2" />
                  Try the Maintenance Tracker
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

export default VehicleMaintenanceGuide;