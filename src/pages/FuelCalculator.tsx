
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
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>🚗 Calculate Your Car's Fuel Efficiency</CardTitle>
              <CardDescription>
                Follow these simple steps to calculate your vehicle's fuel consumption and costs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step by step guide */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">📋 How to use this calculator:</h4>
                <ol className="text-sm text-blue-700 space-y-1">
                  <li>1. Fill your tank completely and note the odometer reading</li>
                  <li>2. Drive normally until you need to refuel</li>
                  <li>3. Note the new odometer reading and fuel amount added</li>
                  <li>4. Enter the values below to get your results</li>
                </ol>
              </div>

              <div className="space-y-2">
                <Label htmlFor="distance" className="text-base font-medium">
                  📏 Distance Traveled (Kilometers)
                </Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder="Enter kilometers driven (e.g. 350)"
                  value={distance || ''}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="text-lg"
                />
                <p className="text-xs text-muted-foreground">
                  💡 Tip: This is the difference between your two odometer readings
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fuel-used" className="text-base font-medium">
                  ⛽ Fuel Added (Litres)
                </Label>
                <Input
                  id="fuel-used"
                  type="number"
                  step="0.1"
                  placeholder="Enter litres of fuel (e.g. 25.5)"
                  value={fuelUsed || ''}
                  onChange={(e) => setFuelUsed(Number(e.target.value))}
                  className="text-lg"
                />
                <p className="text-xs text-muted-foreground">
                  💡 Tip: Check your fuel receipt for the exact amount
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fuel-price" className="text-base font-medium">
                  💰 Fuel Price (KES per litre)
                </Label>
                <Input
                  id="fuel-price"
                  type="number"
                  placeholder="Current fuel price (e.g. 180)"
                  value={fuelPrice || ''}
                  onChange={(e) => setFuelPrice(Number(e.target.value))}
                  className="text-lg"
                />
                <p className="text-xs text-muted-foreground">
                  💡 Current Kenya average: KES 180/litre | Check your receipt for exact price
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="trip-distance" className="text-base font-medium">
                  🗺️ Plan a Trip (Optional)
                </Label>
                <Input
                  id="trip-distance"
                  type="number"
                  placeholder="Trip distance in KM (e.g. 480)"
                  value={tripDistance || ''}
                  onChange={(e) => setTripDistance(Number(e.target.value))}
                  className="text-lg"
                />
                <p className="text-xs text-muted-foreground">
                  💡 Get cost estimates for your next journey
                </p>
              </div>
              
              <Button 
                onClick={calculateFuelEfficiency} 
                className="w-full text-lg py-6"
                disabled={!distance || !fuelUsed}
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculate My Fuel Efficiency
              </Button>
              
              {(!distance || !fuelUsed) && (
                <p className="text-center text-sm text-muted-foreground">
                  Please enter distance and fuel amount to calculate
                </p>
              )}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {popularRoutes.map((route, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => setTripDistance(route.distance)}
                  className="flex justify-between p-3 h-auto"
                >
                  <span className="text-left">
                    <div className="font-semibold text-sm">{route.name}</div>
                  </span>
                  <span className="text-muted-foreground font-medium">{route.distance} km</span>
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
