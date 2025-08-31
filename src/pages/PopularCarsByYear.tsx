
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import SEOPermalinks from "@/components/SEOPermalinks";

interface YearStats {
  year: number;
  count: number;
  avgPrice: number;
}

interface MakeStats {
  make: string;
  count: number;
  percentage: number;
}

const PopularCarsByYear = () => {
  const [yearStats, setYearStats] = useState<YearStats[]>([]);
  const [makeStats, setMakeStats] = useState<MakeStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data: vehicles, error } = await supabase
        .from('crsp_data')
        .select('year, make_name, crsp_value');

      if (error) throw error;

      if (vehicles) {
        // Calculate year statistics
        const yearCounts: { [key: number]: { count: number; totalValue: number } } = {};
        
        vehicles.forEach(vehicle => {
          const year = vehicle.year;
          const value = Number(vehicle.crsp_value) || 0;
          
          if (!yearCounts[year]) {
            yearCounts[year] = { count: 0, totalValue: 0 };
          }
          yearCounts[year].count++;
          yearCounts[year].totalValue += value;
        });

        const yearStatsData = Object.entries(yearCounts)
          .map(([year, data]) => ({
            year: Number(year),
            count: data.count,
            avgPrice: Math.round(data.totalValue / data.count),
          }))
          .sort((a, b) => b.year - a.year);

        setYearStats(yearStatsData);

        // Calculate make statistics
        const makeCounts: { [key: string]: number } = {};
        vehicles.forEach(vehicle => {
          const make = vehicle.make_name;
          makeCounts[make] = (makeCounts[make] || 0) + 1;
        });

        const totalVehicles = vehicles.length;
        const makeStatsData = Object.entries(makeCounts)
          .map(([make, count]) => ({
            make,
            count: Number(count),
            percentage: Math.round((Number(count) / totalVehicles) * 100),
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 10);

        setMakeStats(makeStatsData);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088fe', '#00c49f', '#ffbb28', '#ff8042', '#8dd1e1', '#d084d0'];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading statistics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="KRA Duty Calculator 2025 – Instant Import Duty Estimates"
        description="Easily calculate your car import duty for 2025 in Kenya. Accurate, fast, and free KRA duty calculator for any make or model."
        keywords="popular cars Kenya 2025, best cars to import Kenya, trending car models Kenya, popular vehicle imports, Kenya car market trends"
        canonicalUrl="https://garimoto.co.ke/popular"
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
          
          <h1 className="text-3xl font-bold text-primary mb-2">Popular Cars by Year</h1>
          <p className="text-muted-foreground">
            Explore vehicle trends and statistics based on CRSP data
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Vehicles by Year</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={yearStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" name="Number of Vehicles" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Average CRSP Value by Year</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={yearStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
                  <Tooltip formatter={(value) => [formatCurrency(Number(value)), 'Avg CRSP Value']} />
                  <Legend />
                  <Bar dataKey="avgPrice" fill="#82ca9d" name="Average CRSP Value (KES)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Top 10 Popular Makes</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={makeStats}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ make, percentage }) => `${make} (${percentage}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {makeStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Year Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {yearStats.map((yearData) => (
                  <div key={yearData.year} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="font-semibold">{yearData.year}</span>
                      <p className="text-sm text-muted-foreground">{yearData.count} vehicles</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{formatCurrency(yearData.avgPrice)}</p>
                      <p className="text-sm text-muted-foreground">Avg CRSP</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PopularCarsByYear;
