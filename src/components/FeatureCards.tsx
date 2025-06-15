
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, GitCompare, DollarSign, TrendingUp } from "lucide-react";

const FeatureCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-8">
      <div className="grid md:grid-cols-4 gap-4">
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
    </div>
  );
};

export default FeatureCards;
