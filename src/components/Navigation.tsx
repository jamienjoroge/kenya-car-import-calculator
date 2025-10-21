
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Calculator, Wrench, FileCheck, Fuel, TrendingUp, BookOpen, DollarSign, Shield } from "lucide-react";

const Navigation = () => {
  return (
    <div className="w-full bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <NavigationMenu className="max-w-full">
          <NavigationMenuList className="flex-wrap justify-center gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">
                <Calculator className="h-4 w-4 mr-1" />
                Calculators
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-80">
                  <NavigationMenuLink asChild>
                    <Link to="/" className="block p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Calculator className="h-4 w-4 text-primary" />
                        <span className="font-medium">Import Calculator</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Calculate exact import duties for any vehicle
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/fuel-calculator" className="block p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Fuel className="h-4 w-4 text-primary" />
                        <span className="font-medium">Fuel Calculator</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Track fuel consumption and plan trip costs
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/compare" className="block p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="font-medium">Compare Cars</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Compare import costs between vehicles
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">
                <Wrench className="h-4 w-4 mr-1" />
                Vehicle Tools
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-80">
                  <NavigationMenuLink asChild>
                    <Link to="/vehicle-inspection" className="block p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <FileCheck className="h-4 w-4 text-primary" />
                        <span className="font-medium">Inspection Checklist</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Professional vehicle inspection checklist
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/maintenance-schedule" className="block p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Wrench className="h-4 w-4 text-primary" />
                        <span className="font-medium">Maintenance Tracker</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Track your vehicle's maintenance schedule
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/afford" className="block p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Calculator className="h-4 w-4 text-primary" />
                        <span className="font-medium">What Can I Afford?</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Find vehicles within your budget
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/loan-calculator" className="block p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="font-medium">Loan Calculator</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Calculate monthly car loan payments
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/insurance-calculator" className="block p-3 rounded-md hover:bg-muted transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="font-medium">Insurance Estimator</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Compare insurance quotes instantly
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/blog" className="flex items-center gap-1 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">
                  <BookOpen className="h-4 w-4" />
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/popular" className="flex items-center gap-1 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">
                  <TrendingUp className="h-4 w-4" />
                  Popular Cars
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className="px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navigation;
