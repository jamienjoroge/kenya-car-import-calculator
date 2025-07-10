
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Fuel, Calculator, TrendingUp, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";

const FuelCalculator = () => {
  const [distance, setDistance] = useState<number>(0);
  const [fuelUsed, setFuelUsed] = useState<number>(0);
  const [fuelPrice, setFuelPrice] = useState<number>(180); // Current average fuel price in Kenya
  const [tripDistance, setTripDistance] = useState<number>(0);
  const [results, setResults] = useState<any>(null);

  const calculateFuelEfficiency = () => {
    if (distance > 0 && fuelUsed > 0) {
      const kmPerLitre = distance / fuelUsed;
      const costPerKm = fuelPrice / kmPerLitre;
      const tripCost = tripDistance > 0 ? (tripDistance / kmPerLitre) * fuelPrice : 0;
      const monthlyFuel = distance > 0 ? (2000 / kmPerLitre) * fuelPrice : 0; // Assuming 2000km/month
      
      setResults({
        kmPerLitre: kmPerLitre.toFixed(2),
        costPerKm: costPerKm.toFixed(2),
        tripCost: tripCost.toFixed(0),
        monthlyFuel: monthlyFuel.toFixed(0),
        fuelEfficiencyRating: getFuelEfficiencyRating(kmPerLitre)
      });
    }
  };

  const getFuelEfficiencyRating = (kmPerLitre: number) => {
    if (kmPerLitre >= 15) return { rating: 'Excellent', color: 'text-green-600', description: 'Very fuel efficient' };
    if (kmPerLitre >= 12) return { rating: 'Good', color: 'text-blue-600', description: 'Above average efficiency' };
    if (kmPerLitre >= 9) return { rating: 'Average', color: 'text-orange-600', description: 'Standard efficiency' };
    if (kmPerLitre >= 6) return { rating: 'Poor', color: 'text-red-600', description: 'Below average efficiency' };
    return { rating: 'Very Poor', color: 'text-red-800', description: 'Needs attention' };
  };

  const popularRoutes = [
    { name: 'Nairobi to Mombasa', distance: 480 },
    { name: 'Nairobi to Kisumu', distance: 350 },
    { name: 'Nairobi to Nakuru', distance: 160 },
    { name: 'Nairobi to Eldoret', distance: 310 },
    { name: 'Mombasa to Malindi', distance: 120 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Fuel Consumption Calculator Kenya | Car Fuel Economy Tracker | GariMoto"
        description="Calculate your vehicle's fuel consumption and costs in Kenya. Track fuel efficiency, plan trip costs, and optimize your car's fuel economy. Free calculator with KES pricing."
        keywords="fuel consumption calculator Kenya, car fuel economy, fuel efficiency calculator, trip cost calculator, fuel prices Kenya, vehicle fuel consumption"
      />
      
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-primary">
            ⛽ Fuel Consumption Calculator
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Calculate your vehicle's fuel efficiency and plan your travel costs in Kenya
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm">
              <Fuel className="h-4 w-4 mr-1" />
              Real Kenya Fuel Prices
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Calculator className="h-4 w-4 mr-1" />
              Accurate Calculations
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle>Calculate Fuel Efficiency</CardTitle>
              <CardDescription>Enter your vehicle's fuel consumption data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="distance">Distance Traveled (KM)</Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder="e.g. 100"
                  value={distance || ''}
                  onChange={(e) => setDistance(Number(e.target.value))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fuel-used">Fuel Used (Litres)</Label>
                <Input
                  id="fuel-used"
                  type="number"
                  step="0.1"
                  placeholder="e.g. 8.5"
                  value={fuelUsed || ''}
                  onChange={(e) => setFuelUsed(Number(e.target.value))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fuel-price">Current Fuel Price (KES per litre)</Label>
                <Input
                  id="fuel-price"
                  type="number"
                  placeholder="e.g. 180"
                  value={fuelPrice || ''}
                  onChange={(e) => setFuelPrice(Number(e.target.value))}
                />
                <p className="text-xs text-muted-foreground">Current average: KES 180/litre</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="trip-distance">Plan Trip Distance (KM) - Optional</Label>
                <Input
                  id="trip-distance"
                  type="number"
                  placeholder="e.g. 480 (Nairobi to Mombasa)"
                  value={tripDistance || ''}
                  onChange={(e) => setTripDistance(Number(e.target.value))}
                />
              </div>
              
              <Button onClick={calculateFuelEfficiency} className="w-full">
                <Calculator className="h-4 w-4 mr-2" />
                Calculate Fuel Efficiency
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Fuel Efficiency Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{results.kmPerLitre}</div>
                    <div className="text-sm text-blue-600">KM per Litre</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">KES {results.costPerKm}</div>
                    <div className="text-sm text-green-600">Cost per KM</div>
                  </div>
                </div>
                
                <div className={`text-center p-4 rounded-lg border-2 ${
                  results.fuelEfficiencyRating.rating === 'Excellent' ? 'bg-green-50 border-green-200' :
                  results.fuelEfficiencyRating.rating === 'Good' ? 'bg-blue-50 border-blue-200' :
                  results.fuelEfficiencyRating.rating === 'Average' ? 'bg-orange-50 border-orange-200' :
                  'bg-red-50 border-red-200'
                }`}>
                  <div className={`text-xl font-bold ${results.fuelEfficiencyRating.color}`}>
                    {results.fuelEfficiencyRating.rating}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {results.fuelEfficiencyRating.description}
                  </div>
                </div>

                {tripDistance > 0 && (
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Trip Cost Estimate</h4>
                    <div className="text-2xl font-bold text-yellow-600">
                      KES {results.tripCost}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      For {tripDistance} km journey
                    </div>
                  </div>
                )}

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Monthly Fuel Budget</h4>
                  <div className="text-2xl font-bold text-purple-600">
                    KES {results.monthlyFuel}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Estimated for 2,000 km/month
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Popular Routes in Kenya */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Popular Routes in Kenya
            </CardTitle>
            <CardDescription>Click to set trip distance quickly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-2">
              {popularRoutes.map((route, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => setTripDistance(route.distance)}
                  className="flex justify-between"
                >
                  <span className="text-left">
                    <div className="font-semibold text-xs">{route.name}</div>
                  </span>
                  <span className="text-muted-foreground">{route.distance} km</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fuel Saving Tips */}
        <Card className="mt-6 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Fuel Saving Tips for Kenya
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-700">
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                <li>• Maintain steady speed on highways (80-90 km/h optimal)</li>
                <li>• Avoid heavy traffic hours in cities like Nairobi</li>
                <li>• Regular engine maintenance and servicing</li>
                <li>• Check tire pressure monthly</li>
                <li>• Remove excess weight from vehicle</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>• Use air conditioning wisely on highways</li>
                <li>• Plan routes to avoid traffic jams</li>
                <li>• Combine multiple errands in one trip</li>
                <li>• Consider carpooling for regular commutes</li>
                <li>• Keep windows closed at high speeds</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default FuelCalculator;
