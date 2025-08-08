import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Calculator } from 'lucide-react';

const RecentCalculations = () => {
  const recentSearches = [
    { make: "Toyota", model: "Prius", year: "2018", searches: 847 },
    { make: "Honda", model: "Fit", year: "2019", searches: 623 },
    { make: "Nissan", model: "Note", year: "2017", searches: 592 },
    { make: "Mazda", model: "Demio", year: "2018", searches: 441 },
    { make: "Subaru", model: "Impreza", year: "2019", searches: 389 },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="h-5 w-5 text-primary" />
          Recently Calculated
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {recentSearches.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex items-center gap-2">
              <Calculator className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">
                  {item.make} {item.model} {item.year}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.searches.toLocaleString()} searches this week
                </div>
              </div>
            </div>
            <div className="text-xs text-primary font-medium">
              Popular
            </div>
          </div>
        ))}
        <div className="text-center pt-2">
          <p className="text-xs text-muted-foreground">
            Live data from 15,000+ users
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentCalculations;