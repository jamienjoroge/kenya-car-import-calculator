
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface YearStats {
  year: number;
  count: number;
  avgCrsp: number;
  minCrsp: number;
  maxCrsp: number;
  popularMake: string;
}

interface MakeStats {
  make: string;
  count: number;
  percentage: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const PopularCarsByYear = () => {
  const [yearStats, setYearStats] = useState<YearStats[]>([]);
  const [makeStats, setMakeStats] = useState<MakeStats[]>([]);
  const [loading, setLoading] = useState(true);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const { data: vehicles, error } = await supabase
          .from('crsp_data')
          .select('*');

        if (error) throw error;

        // Calculate year statistics
        const yearGroups = vehicles?.reduce((acc, vehicle) => {
          const year = vehicle.year;
          if (!acc[year]) {
            acc[year] = [];
          }
          acc[year].push(vehicle);
          return acc;
        }, {} as Record<number, any[]>) || {};

        const yearStatsData: YearStats[] = Object.entries(yearGroups).map(([year, vehicles]) => {
          const crspValues = vehicles.map(v => Number(v.crsp_value) || 0);
          const makeGroups = vehicles.reduce((acc, v) => {
            acc[v.make_name] = (acc[v.make_name] || 0) + 1;
            return acc;
          }, {} as Record<string, number>);
          
          const popularMake = Object.entries(makeGroups).sort((a, b) => b[1] - a[1])[0]?.[0] || '';

          return {
            year: parseInt(year),
            count: vehicles.length,
            avgCrsp: Math.round(crspValues.reduce((sum, val) => sum + val, 0) / crspValues.length),
            minCrsp: Math.min(...crspValues),
            maxCrsp: Math.max(...crspValues),
            popularMake,
          };
        }).sort((a, b) => b.year - a.year);

        // Calculate make statistics
        const makeGroups = vehicles?.reduce((acc, vehicle) => {
          const make = vehicle.make_name;
          acc[make] = (acc[make] || 0) + 1;
          return acc;
        }, {} as Record<string, number>) || {};

        const totalVehicles = vehicles?.length || 0;
        const makeStatsData: MakeStats[] = Object.entries(makeGroups)
          .map(([make, count]) => ({
            make,
            count,
            percentage: Math.round((count / totalVehicles) * 100),
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 10);

        setYearStats(yearStatsData);
        setMakeStats(makeStatsData);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading vehicle statistics...</p>
        </div>
      </div>
    );
  }

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
            <TrendingUp className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold text-primary">Popular Cars by Year</h1>
          </div>
          <p className="text-muted-foreground">
            Analyze vehicle trends and pricing by year in the CRSP database
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Count by Year</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={yearStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Makes Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={makeStats.slice(0, 6)}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ make, percentage }) => `${make} (${percentage}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {makeStats.slice(0, 6).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Year Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>Count</TableHead>
                    <TableHead>Avg CRSP</TableHead>
                    <TableHead>Popular Make</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {yearStats.slice(0, 10).map((stat) => (
                    <TableRow key={stat.year}>
                      <TableCell className="font-medium">{stat.year}</TableCell>
                      <TableCell>{stat.count}</TableCell>
                      <TableCell>{formatCurrency(stat.avgCrsp)}</TableCell>
                      <TableCell>{stat.popularMake}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Vehicle Makes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Make</TableHead>
                    <TableHead>Count</TableHead>
                    <TableHead>Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {makeStats.map((stat) => (
                    <TableRow key={stat.make}>
                      <TableCell className="font-medium">{stat.make}</TableCell>
                      <TableCell>{stat.count}</TableCell>
                      <TableCell>{stat.percentage}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PopularCarsByYear;
