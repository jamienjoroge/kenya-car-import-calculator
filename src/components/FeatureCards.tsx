
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, GitCompare, DollarSign, TrendingUp, FileCheck, Wrench, Fuel, Clock } from "lucide-react";

const FeatureCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-8">
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card className="border-2 border-primary bg-primary/5">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Calculator className="h-4 w-4" />
              Import Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs mb-3">
              Calculate import duties for any vehicle
            </CardDescription>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="#calculator">Use Calculator</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <GitCompare className="h-4 w-4" />
              Compare Cars
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs mb-3">
              Compare import costs between vehicles
            </CardDescription>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/compare">Compare Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <DollarSign className="h-4 w-4" />
              What Can I Afford?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs mb-3">
              Find cars within your budget
            </CardDescription>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/afford">Check Budget</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4" />
              Popular by Year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs mb-3">
              See trending vehicles by year
            </CardDescription>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/popular">View Trends</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* New Tools Section */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-primary mb-2">🔥 NEW: Vehicle Management Tools</h3>
        <p className="text-muted-foreground">Professional tools to maintain and manage your vehicle</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-2 border-orange-200 bg-orange-50 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm text-orange-800">
              <FileCheck className="h-4 w-4" />
              Inspection Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs mb-3 text-orange-700">
              Professional vehicle inspection checklist
            </CardDescription>
            <Button variant="outline" size="sm" className="w-full border-orange-300 hover:bg-orange-100" asChild>
              <Link to="/vehicle-inspection">Inspect Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-indigo-200 bg-indigo-50 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm text-indigo-800">
              <Wrench className="h-4 w-4" />
              Maintenance Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs mb-3 text-indigo-700">
              Track your vehicle's service schedule
            </CardDescription>
            <Button variant="outline" size="sm" className="w-full border-indigo-300 hover:bg-indigo-100" asChild>
              <Link to="/maintenance-schedule">Track Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-yellow-200 bg-yellow-50 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm text-yellow-800">
              <Fuel className="h-4 w-4" />
              Fuel Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs mb-3 text-yellow-700">
              Calculate fuel consumption & costs
            </CardDescription>
            <Button variant="outline" size="sm" className="w-full border-yellow-300 hover:bg-yellow-100" asChild>
              <Link to="/fuel-calculator">Calculate</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 bg-purple-50 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm text-purple-800">
              <Clock className="h-4 w-4" />
              Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs mb-3 text-purple-700">
              Insurance calculator & more tools
            </CardDescription>
            <Button variant="outline" size="sm" className="w-full border-purple-300 hover:bg-purple-100" disabled>
              Stay Tuned
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCards;
