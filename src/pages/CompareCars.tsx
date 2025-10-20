import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GitCompare } from "lucide-react";
import { Link } from "react-router-dom";
import { useVehicleData } from "@/hooks/useVehicleData";
import { useDutyCalculation } from "@/hooks/useDutyCalculation";
import { calculateDuties } from "@/lib/calculation";
import { VehicleSelector } from "@/components/VehicleSelector";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SEOPermalinks from "@/components/SEOPermalinks";
import LastVerifiedBadge from "@/components/LastVerifiedBadge";

const CompareCars = () => {
  const defaultYear = (new Date().getFullYear() - 8).toString();
  
  const [vehicle1, setVehicle1] = useState({ make: "", model: "", year: defaultYear });
  const [vehicle2, setVehicle2] = useState({ make: "", model: "", year: defaultYear });
  const [vehicle3, setVehicle3] = useState({ make: "", model: "", year: defaultYear });

  const vehicle1Data = useVehicleData(vehicle1.make, vehicle1.model);
  const vehicle2Data = useVehicleData(vehicle2.make, vehicle2.model);
  const vehicle3Data = useVehicleData(vehicle3.make, vehicle3.model);

  const getCalculation = (crspRecord: any, year: string) => {
    if (!crspRecord || !year) return null;
    return calculateDuties({
      crsp: crspRecord.crsp,
      year: Number(year),
      engineCapacity: crspRecord.engine_capacity,
      fuelType: crspRecord.fuel_type,
      shipping: 0,
    });
  };

  const calc1 = getCalculation(vehicle1Data.crspRecord, vehicle1.year);
  const calc2 = getCalculation(vehicle2Data.crspRecord, vehicle2.year);
  const calc3 = getCalculation(vehicle3Data.crspRecord, vehicle3.year);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Compare Car Import Costs Kenya 2025 | Side-by-Side Calculator | GariMoto"
        description="Compare import duties for 3 vehicles side-by-side. Toyota vs Honda vs Nissan comparison tool with updated October 2025 CRSP rates. Make smarter buying decisions."
        keywords="compare car import costs Kenya, vehicle duty comparison, KRA CRSP comparison 2025, car import cost calculator, Kenya vehicle comparison tool"
        canonicalUrl="https://garimoto.co.ke/compare"
        type="website"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Calculator
            </Link>
          </Button>
          
          <div className="flex items-center gap-2 mb-2">
            <GitCompare className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold text-primary">Compare Cars</h1>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-muted-foreground">
              Compare import costs between different vehicles side by side
            </p>
            <LastVerifiedBadge />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vehicle 1</CardTitle>
            </CardHeader>
            <CardContent>
              <VehicleSelector
                selectedMake={vehicle1.make}
                selectedModel={vehicle1.model}
                selectedYear={vehicle1.year}
                onMakeChange={(make) => setVehicle1(prev => ({ ...prev, make, model: "", year: "" }))}
                onModelChange={(model) => setVehicle1(prev => ({ ...prev, model, year: "" }))}
                onYearChange={(year) => setVehicle1(prev => ({ ...prev, year }))}
                makes={vehicle1Data.makes}
                models={vehicle1Data.models}
                loadingMakes={vehicle1Data.loadingMakes}
                loadingModels={vehicle1Data.loadingModels}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vehicle 2</CardTitle>
            </CardHeader>
            <CardContent>
              <VehicleSelector
                selectedMake={vehicle2.make}
                selectedModel={vehicle2.model}
                selectedYear={vehicle2.year}
                onMakeChange={(make) => setVehicle2(prev => ({ ...prev, make, model: "", year: "" }))}
                onModelChange={(model) => setVehicle2(prev => ({ ...prev, model, year: "" }))}
                onYearChange={(year) => setVehicle2(prev => ({ ...prev, year }))}
                makes={vehicle2Data.makes}
                models={vehicle2Data.models}
                loadingMakes={vehicle2Data.loadingMakes}
                loadingModels={vehicle2Data.loadingModels}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vehicle 3 (Optional)</CardTitle>
            </CardHeader>
            <CardContent>
              <VehicleSelector
                selectedMake={vehicle3.make}
                selectedModel={vehicle3.model}
                selectedYear={vehicle3.year}
                onMakeChange={(make) => setVehicle3(prev => ({ ...prev, make, model: "", year: "" }))}
                onModelChange={(model) => setVehicle3(prev => ({ ...prev, model, year: "" }))}
                onYearChange={(year) => setVehicle3(prev => ({ ...prev, year }))}
                makes={vehicle3Data.makes}
                models={vehicle3Data.models}
                loadingMakes={vehicle3Data.loadingMakes}
                loadingModels={vehicle3Data.loadingModels}
              />
            </CardContent>
          </Card>
        </div>

        {(calc1 || calc2 || calc3) && (
          <Card>
            <CardHeader>
              <CardTitle>Comparison Results</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cost Component</TableHead>
                    {calc1 && <TableHead>{vehicle1.make} {vehicle1.model} ({vehicle1.year})</TableHead>}
                    {calc2 && <TableHead>{vehicle2.make} {vehicle2.model} ({vehicle2.year})</TableHead>}
                    {calc3 && <TableHead>{vehicle3.make} {vehicle3.model} ({vehicle3.year})</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Original CRSP</TableCell>
                    {calc1 && <TableCell>{formatCurrency(calc1.crsp)}</TableCell>}
                    {calc2 && <TableCell>{formatCurrency(calc2.crsp)}</TableCell>}
                    {calc3 && <TableCell>{formatCurrency(calc3.crsp)}</TableCell>}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Depreciated CRSP</TableCell>
                    {calc1 && <TableCell>{formatCurrency(calc1.depreciatedCrsp)}</TableCell>}
                    {calc2 && <TableCell>{formatCurrency(calc2.depreciatedCrsp)}</TableCell>}
                    {calc3 && <TableCell>{formatCurrency(calc3.depreciatedCrsp)}</TableCell>}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Import Duty (25%)</TableCell>
                    {calc1 && <TableCell>{formatCurrency(calc1.importDuty)}</TableCell>}
                    {calc2 && <TableCell>{formatCurrency(calc2.importDuty)}</TableCell>}
                    {calc3 && <TableCell>{formatCurrency(calc3.importDuty)}</TableCell>}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Excise Duty (25%)</TableCell>
                    {calc1 && <TableCell>{formatCurrency(calc1.excise)}</TableCell>}
                    {calc2 && <TableCell>{formatCurrency(calc2.excise)}</TableCell>}
                    {calc3 && <TableCell>{formatCurrency(calc3.excise)}</TableCell>}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">VAT (16%)</TableCell>
                    {calc1 && <TableCell>{formatCurrency(calc1.vat)}</TableCell>}
                    {calc2 && <TableCell>{formatCurrency(calc2.vat)}</TableCell>}
                    {calc3 && <TableCell>{formatCurrency(calc3.vat)}</TableCell>}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">IDF (2.25%)</TableCell>
                    {calc1 && <TableCell>{formatCurrency(calc1.idf)}</TableCell>}
                    {calc2 && <TableCell>{formatCurrency(calc2.idf)}</TableCell>}
                    {calc3 && <TableCell>{formatCurrency(calc3.idf)}</TableCell>}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">RDL (2%)</TableCell>
                    {calc1 && <TableCell>{formatCurrency(calc1.rdl)}</TableCell>}
                    {calc2 && <TableCell>{formatCurrency(calc2.rdl)}</TableCell>}
                    {calc3 && <TableCell>{formatCurrency(calc3.rdl)}</TableCell>}
                  </TableRow>
                  <TableRow className="border-t-2">
                    <TableCell className="font-bold">Total Import Cost</TableCell>
                    {calc1 && <TableCell className="font-bold text-primary">{formatCurrency(calc1.total)}</TableCell>}
                    {calc2 && <TableCell className="font-bold text-primary">{formatCurrency(calc2.total)}</TableCell>}
                    {calc3 && <TableCell className="font-bold text-primary">{formatCurrency(calc3.total)}</TableCell>}
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CompareCars;
