
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const MostImportedCars2025 = () => {
  const topCars = [
    { rank: 1, make: "Toyota", model: "Harrier", reason: "Fuel efficiency and reliability", avgCost: "1.2M" },
    { rank: 2, make: "Nissan", model: "X-Trail", reason: "7-seater family favorite", avgCost: "1.1M" },
    { rank: 3, make: "Toyota", model: "Vanguard", reason: "Affordable SUV option", avgCost: "950K" },
    { rank: 4, make: "Subaru", model: "Forester", reason: "AWD capability", avgCost: "1.3M" },
    { rank: 5, make: "Honda", model: "Vezel", reason: "Compact hybrid SUV", avgCost: "1.4M" }
  ];

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
            <h1 className="text-4xl font-bold mb-4 text-primary">2025 Most Imported Cars in Kenya</h1>
            <div className="flex items-center gap-6 text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                7 min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                December 5, 2024
              </span>
            </div>
            <p className="text-lg text-gray-700">
              Analysis of trending vehicle imports and popular car models entering the Kenyan market in 2025.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Market Overview</h2>
            <p className="mb-6">
              The Kenyan car import market in 2025 continues to be dominated by Japanese vehicles, 
              with SUVs and crossovers leading the charge. Rising fuel costs have shifted consumer 
              preferences toward more fuel-efficient models, while the growing middle class seeks 
              reliable family vehicles.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                2025 Market Trends
              </h3>
              <ul className="text-blue-700 space-y-1">
                <li>• 35% increase in hybrid vehicle imports</li>
                <li>• SUVs represent 60% of all imports</li>
                <li>• Average vehicle age: 6-7 years</li>
                <li>• Japanese vehicles: 78% market share</li>
              </ul>
            </div>

            <AdSpace slot="blog-content-1" format="rectangle" style={{ width: "300px", height: "250px", margin: "20px auto" }} />

            <h2 className="text-2xl font-semibold mb-4 text-primary">Top 5 Most Imported Vehicles</h2>
            <p className="mb-4">
              Based on data from Kenya Association of Manufacturers and customs clearance records:
            </p>

            <div className="space-y-4 mb-6">
              {topCars.map((car) => (
                <div key={car.rank} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">
                      #{car.rank} {car.make} {car.model}
                    </h3>
                    <span className="text-sm bg-primary text-white px-2 py-1 rounded">
                      ~KES {car.avgCost}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{car.reason}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Detailed Analysis</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">1. Toyota Harrier - The Undisputed King</h3>
            <p className="mb-4">
              The Toyota Harrier maintains its position as Kenya's most imported vehicle for the fifth 
              consecutive year. Its winning combination of fuel efficiency, reliability, and prestige 
              makes it the vehicle of choice for both families and professionals.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Average fuel consumption: 12-15 km/l</li>
              <li>Typical age range: 5-7 years</li>
              <li>Common engine sizes: 2000cc, 2400cc</li>
              <li>Strong resale value retention</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-primary">2. Nissan X-Trail - Family Favorite</h3>
            <p className="mb-4">
              The X-Trail's 7-seater configuration and spacious interior make it perfect for 
              growing families. Its competitive pricing and lower maintenance costs contribute 
              to its popularity.
            </p>

            <AdSpace slot="blog-content-2" format="horizontal" style={{ height: "90px", margin: "20px 0" }} />

            <h3 className="text-xl font-semibold mb-3 text-primary">3. Toyota Vanguard - Budget SUV Champion</h3>
            <p className="mb-4">
              For buyers seeking SUV functionality without the premium price tag, the Vanguard 
              offers excellent value. Its lower CRSP values result in more affordable import duties.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Emerging Trends</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Hybrid Revolution</h3>
            <p className="mb-4">
              2025 has seen unprecedented growth in hybrid vehicle imports:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <h4 className="font-semibold text-green-800 mb-2">Popular Hybrids</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Toyota Aqua</li>
                  <li>• Honda Vezel</li>
                  <li>• Toyota Prius</li>
                  <li>• Nissan Note e-Power</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Hybrid Benefits</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• 40-50% better fuel economy</li>
                  <li>• Lower emissions</li>
                  <li>• Government incentives</li>
                  <li>• Future-proof technology</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-primary">Luxury Segment Growth</h3>
            <p className="mb-4">
              Higher income brackets are driving demand for premium vehicles:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>BMW X3 and X5 seeing increased imports</li>
              <li>Mercedes-Benz GLE growing in popularity</li>
              <li>Lexus RX maintaining strong presence</li>
              <li>Audi Q5 emerging as alternative choice</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Import Cost Considerations</h2>
            <p className="mb-4">
              The new CRSP schedule effective July 2024 has impacted import costs:
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-2">Cost Impact Summary:</h3>
              <ul className="text-yellow-700 space-y-1">
                <li>• SUVs: 5-8% increase in CRSP values</li>
                <li>• Hybrids: 3-5% CRSP value increase</li>
                <li>• Luxury vehicles: 10-15% CRSP increase</li>
                <li>• Small cars: Minimal change (0-2%)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-primary">2026 Predictions</h2>
            <p className="mb-4">
              Looking ahead to 2026, several factors will shape import trends:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Electric vehicles:</strong> Expected to gain traction with infrastructure development</li>
              <li><strong>Smaller engines:</strong> Continued shift toward fuel-efficient engines</li>
              <li><strong>Chinese brands:</strong> Growing acceptance of brands like BYD and Geely</li>
              <li><strong>Age restrictions:</strong> Possible tightening from 8 to 5 years</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-800 mb-2">💡 Planning Your Import?</h3>
              <p className="text-green-700">
                Use our <Link to="/" className="text-primary hover:underline">import calculator</Link> to 
                estimate costs for any of these popular models. Our tool includes the latest 2024 CRSP 
                values and helps you choose the most cost-effective option for your budget.
              </p>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default MostImportedCars2025;
