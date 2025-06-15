
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, DollarSign, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { calculateDuties } from "@/lib/calculation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface AffordableVehicle {
  make_name: string;
  model_name: string;
  year: number;
  crsp_value: number;
  engine_capacity: number;
  fuel_type: string;
  totalCost: number;
  breakdown: ReturnType<typeof calculateDuties>;
}

const WhatCanIAfford = () => {
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [affordableVehicles, setAffordableVehicles] = useState<AffordableVehicle[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const searchAffordableVehicles = async () => {
    const minAmount = Number(minBudget) || 0;
    const maxAmount = Number(maxBudget);
    
    if (!maxAmount || isNaN(maxAmount)) return;
    if (minAmount >= maxAmount) return;

    setLoading(true);
    setSearched(true);

    try {
      // Fetch all vehicles from the database
      const { data: vehicles, error } = await supabase
        .from('crsp_data')
        .select('*')
        .order('crsp_value', { ascending: true });

      if (error) throw error;

      const affordable: AffordableVehicle[] = [];

      vehicles?.forEach((vehicle) => {
        const breakdown = calculateDuties({
          crsp: vehicle.crsp_value,
          year: vehicle.year,
          engineCapacity: vehicle.engine_capacity,
          fuelType: vehicle.fuel_type || 'petrol',
          shipping: 0,
        });

        // Calculate total duties (excluding the vehicle CRSP value which represents the vehicle cost)
        const totalDuties = breakdown.importDuty + breakdown.excise + breakdown.vat + breakdown.idf + breakdown.rdl;
        
        // Total cost = Vehicle purchase price (CRSP) + Import duties + Shipping
        const totalVehicleCost = vehicle.crsp_value + totalDuties;

        if (totalVehicleCost >= minAmount && totalVehicleCost <= maxAmount) {
          affordable.push({
            make_name: vehicle.make_name,
            model_name: vehicle.model_name,
            year: vehicle.year,
            crsp_value: vehicle.crsp_value,
            engine_capacity: vehicle.engine_capacity,
            fuel_type: vehicle.fuel_type || 'petrol',
            totalCost: totalVehicleCost,
            breakdown: {
              ...breakdown,
              total: totalVehicleCost
            },
          });
        }
      });

      // Sort by total cost (ascending)
      affordable.sort((a, b) => a.totalCost - b.totalCost);
      
      setAffordableVehicles(affordable);
    } catch (error) {
      console.error('Error searching vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Calculator
            </Link>
          </Button>
          
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold text-primary">What Can I Afford?</h1>
          </div>
          <p className="text-muted-foreground">
            Find vehicles within your budget range including vehicle cost + import duties + shipping
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Your Budget Range</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <Label htmlFor="minBudget">Minimum Budget (KES)</Label>
                <Input
                  id="minBudget"
                  type="number"
                  placeholder="e.g., 1000000"
                  value={minBudget}
                  onChange={(e) => setMinBudget(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="maxBudget">Maximum Budget (KES)</Label>
                <Input
                  id="maxBudget"
                  type="number"
                  placeholder="e.g., 2000000"
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(e.target.value)}
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Total cost: vehicle purchase price + import duties + shipping
                </p>
              </div>
              <Button 
                onClick={searchAffordableVehicles} 
                disabled={!maxBudget || loading || (Number(minBudget) >= Number(maxBudget))}
                className="min-w-32"
              >
                <Search className="h-4 w-4 mr-2" />
                {loading ? 'Searching...' : 'Find Cars'}
              </Button>
            </div>
            {minBudget && maxBudget && Number(minBudget) >= Number(maxBudget) && (
              <p className="text-sm text-red-500 mt-2">
                Minimum budget must be less than maximum budget
              </p>
            )}
          </CardContent>
        </Card>

        {searched && (
          <Card>
            <CardHeader>
              <CardTitle>
                {affordableVehicles.length > 0 
                  ? `Found ${affordableVehicles.length} vehicles between ${formatCurrency(Number(minBudget) || 0)} and ${formatCurrency(Number(maxBudget))}`
                  : `No vehicles found between ${formatCurrency(Number(minBudget) || 0)} and ${formatCurrency(Number(maxBudget))}`
                }
              </CardTitle>
            </CardHeader>
            <CardContent>
              {affordableVehicles.length > 0 ? (
                <div className="space-y-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Vehicle</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Engine (cc)</TableHead>
                        <TableHead>Vehicle Price (CRSP)</TableHead>
                        <TableHead>Total Cost</TableHead>
                        <TableHead>Budget Utilization</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {affordableVehicles.slice(0, 20).map((vehicle, index) => {
                        const budgetRange = Number(maxBudget) - (Number(minBudget) || 0);
                        const costAboveMin = vehicle.totalCost - (Number(minBudget) || 0);
                        const utilizationPercent = Math.round((costAboveMin / budgetRange) * 100);
                        
                        return (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              {vehicle.make_name} {vehicle.model_name}
                            </TableCell>
                            <TableCell>{vehicle.year}</TableCell>
                            <TableCell>{vehicle.engine_capacity}</TableCell>
                            <TableCell>{formatCurrency(vehicle.crsp_value)}</TableCell>
                            <TableCell className="font-semibold text-primary">
                              {formatCurrency(vehicle.totalCost)}
                            </TableCell>
                            <TableCell className="text-blue-600">
                              {utilizationPercent}% of range
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                  
                  {affordableVehicles.length > 20 && (
                    <p className="text-sm text-muted-foreground text-center">
                      Showing top 20 results. {affordableVehicles.length - 20} more vehicles available.
                    </p>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    No vehicles found within your budget range. Try adjusting your range or consider:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Expanding your budget range</li>
                    <li>• Looking for older vehicles (higher depreciation, lower duties)</li>
                    <li>• Considering smaller engine capacity vehicles</li>
                    <li>• Factoring in additional costs like shipping and clearing</li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WhatCanIAfford;
