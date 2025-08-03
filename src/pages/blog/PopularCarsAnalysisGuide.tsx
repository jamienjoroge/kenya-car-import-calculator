import React from "react";
import { ArrowLeft, TrendingUp, BarChart3, PieChart, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";

const PopularCarsAnalysisGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Popular Cars by Year Kenya 2025: Market Trends & CRSP Data Analysis"
        description="Discover the most popular car models in Kenya by year with comprehensive market analysis. Explore vehicle trends, average prices, and make data-driven car purchase decisions."
        keywords="popular cars Kenya, vehicle market trends, Kenya car statistics, CRSP data analysis, automotive market Kenya, car buying trends"
      />
      
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="prose prose-lg max-w-none">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Popular Cars by Year Kenya 2025: Market Trends & CRSP Data Analysis
            </h1>
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="secondary">
                <TrendingUp className="h-4 w-4 mr-1" />
                Market Trends
              </Badge>
              <Badge variant="secondary">
                <BarChart3 className="h-4 w-4 mr-1" />
                CRSP Data
              </Badge>
              <Badge variant="secondary">
                <PieChart className="h-4 w-4 mr-1" />
                Statistics
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Make informed car purchase decisions with comprehensive market insights based on official CRSP data. Discover trends, popular models, and pricing patterns in Kenya's automotive market.
            </p>
          </header>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Why Market Trends Matter for Car Buyers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Understanding vehicle market trends in Kenya helps you make smarter purchasing decisions. Our analysis of official CRSP (Current Retail Selling Price) data reveals patterns that can save you money and help you choose the right vehicle.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Benefits for Buyers:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Identify the best value years for specific models</li>
                      <li>• Understand depreciation patterns</li>
                      <li>• Spot emerging trends in the market</li>
                      <li>• Compare popularity vs. actual value</li>
                      <li>• Time your purchase for maximum savings</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Market Insights:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Which brands dominate import statistics</li>
                      <li>• Average CRSP values by vehicle age</li>
                      <li>• Seasonal trends in vehicle availability</li>
                      <li>• Price variations across different years</li>
                      <li>• Supply and demand dynamics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Understanding Our Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our comprehensive analytics tool provides four key visualizations to help you understand the Kenya vehicle market:</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800">1. Vehicles by Year Distribution</h4>
                    <p className="text-blue-700 text-sm mt-2">
                      Bar chart showing the number of different vehicles available for each year. Helps identify which years have the most options and reveals import patterns over time.
                    </p>
                    <div className="text-blue-600 text-xs mt-2">
                      <strong>Use Case:</strong> Find years with maximum vehicle choice for better negotiation power
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800">2. Average CRSP Value by Year</h4>
                    <p className="text-green-700 text-sm mt-2">
                      Shows how vehicle values change with age. Reveals the depreciation curve and helps identify sweet spots for value purchases.
                    </p>
                    <div className="text-green-600 text-xs mt-2">
                      <strong>Use Case:</strong> Identify years where vehicles offer the best value for money
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800">3. Top 10 Popular Makes</h4>
                    <p className="text-purple-700 text-sm mt-2">
                      Pie chart displaying market share of the most popular vehicle brands. Shows which manufacturers dominate the Kenya import market.
                    </p>
                    <div className="text-purple-600 text-xs mt-2">
                      <strong>Use Case:</strong> Choose brands with better parts availability and service networks
                    </div>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800">4. Detailed Year Statistics</h4>
                    <p className="text-orange-700 text-sm mt-2">
                      Comprehensive breakdown showing vehicle count and average CRSP for each year. Perfect for detailed comparisons and trend analysis.
                    </p>
                    <div className="text-orange-600 text-xs mt-2">
                      <strong>Use Case:</strong> Deep-dive analysis for specific year comparisons
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Key Market Trends for 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Based on our CRSP data analysis, here are the major trends shaping Kenya's vehicle market:</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">🚗 Japanese Brands Continue to Dominate</h4>
                    <p className="text-green-700 text-sm mt-2">
                      Toyota, Nissan, and Honda maintain their stronghold with over 60% market share. Their popularity stems from reliability, parts availability, and strong resale value in Kenya.
                    </p>
                    <div className="text-green-600 text-xs mt-2">
                      <strong>Impact:</strong> Better service networks, easier resale, more competitive pricing
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">📈 Sweet Spot: 4-6 Year Old Vehicles</h4>
                    <p className="text-blue-700 text-sm mt-2">
                      Data shows the best value proposition for vehicles aged 4-6 years, offering modern features while avoiding the steepest depreciation curve.
                    </p>
                    <div className="text-blue-600 text-xs mt-2">
                      <strong>Impact:</strong> Maximum features for your budget, reasonable import duties
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">⚡ Growing Hybrid Vehicle Adoption</h4>
                    <p className="text-purple-700 text-sm mt-2">
                      Increasing numbers of hybrid vehicles in import statistics, driven by fuel efficiency needs and environmental consciousness.
                    </p>
                    <div className="text-purple-600 text-xs mt-2">
                      <strong>Impact:</strong> Lower fuel costs, but higher initial investment and specialized maintenance
                    </div>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">🏔️ SUV Market Expansion</h4>
                    <p className="text-yellow-700 text-sm mt-2">
                      Compact and mid-size SUVs showing increased popularity, reflecting changing lifestyle preferences and road condition considerations.
                    </p>
                    <div className="text-yellow-600 text-xs mt-2">
                      <strong>Impact:</strong> Higher purchase prices but better versatility for Kenya's diverse terrain
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seasonal Patterns & Buying Timing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Understanding seasonal patterns can help you time your purchase for maximum savings:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Best Times to Buy:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>January-March:</strong> Post-holiday budget constraints create opportunities</li>
                      <li>• <strong>May-June:</strong> Before salary increases and bonuses hit the market</li>
                      <li>• <strong>September:</strong> After back-to-school expenses reduce demand</li>
                      <li>• <strong>Mid-month:</strong> Dealers need to clear inventory</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Avoid These Periods:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>December:</strong> Bonus season drives up demand and prices</li>
                      <li>• <strong>July-August:</strong> School holiday travel increases SUV demand</li>
                      <li>• <strong>April:</strong> End of financial year purchases</li>
                      <li>• <strong>Month-end:</strong> Dealers less willing to negotiate</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Pro Tip: Market Cycle Timing</h4>
                  <p className="text-blue-700 text-sm mt-2">
                    Vehicle shipments typically arrive 45-60 days after ordering. Use our trend data to predict when certain models will be more readily available and competitively priced.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Brand Analysis & Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Based on market data and Kenya-specific factors, here's our brand analysis:</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">🥇 Tier 1: Market Leaders (Toyota, Nissan, Honda)</h4>
                    <div className="text-green-700 text-sm mt-2 space-y-1">
                      <p><strong>Market Share:</strong> 60-65% combined</p>
                      <p><strong>Pros:</strong> Excellent parts availability, strong service networks, high resale value</p>
                      <p><strong>Cons:</strong> Premium pricing due to demand</p>
                      <p><strong>Best For:</strong> First-time buyers, those prioritizing reliability</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">🥈 Tier 2: Strong Alternatives (Mazda, Subaru, Mitsubishi)</h4>
                    <div className="text-blue-700 text-sm mt-2 space-y-1">
                      <p><strong>Market Share:</strong> 20-25% combined</p>
                      <p><strong>Pros:</strong> Good value for money, decent service networks, unique features</p>
                      <p><strong>Cons:</strong> Lower resale value, fewer service centers in rural areas</p>
                      <p><strong>Best For:</strong> Buyers seeking value, specific features (AWD, sporty design)</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">🥉 Tier 3: Emerging Options (Hyundai, Kia, Suzuki)</h4>
                    <div className="text-yellow-700 text-sm mt-2 space-y-1">
                      <p><strong>Market Share:</strong> 10-15% combined</p>
                      <p><strong>Pros:</strong> Lower purchase prices, modern features, growing service networks</p>
                      <p><strong>Cons:</strong> Limited parts availability, lower resale value, newer to market</p>
                      <p><strong>Best For:</strong> Budget-conscious buyers, those prioritizing latest features</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Using Data for Smart Decisions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Strategic Decision Framework:</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">1. Market Position Analysis</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Check if your target model is above or below average CRSP for its year</li>
                      <li>• Compare with similar models from the same year</li>
                      <li>• Identify if you're looking at a popular model (higher prices) or niche option</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">2. Timing Optimization</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Use year-by-year data to identify depreciation sweet spots</li>
                      <li>• Consider model refresh cycles when choosing vehicle years</li>
                      <li>• Factor in import age limits for your target purchase timeframe</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">3. Long-term Value Assessment</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Consider brand market share for future resale prospects</li>
                      <li>• Evaluate if current trends support your chosen vehicle type</li>
                      <li>• Factor in service network availability based on popularity data</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">Data-Driven Decision Checklist:</h4>
                  <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                    <li>✓ Compared CRSP values across 3 consecutive years</li>
                    <li>✓ Verified brand market share and service availability</li>
                    <li>✓ Identified seasonal trends affecting your target model</li>
                    <li>✓ Analyzed total market supply for negotiation leverage</li>
                    <li>✓ Considered long-term resale value trends</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Future Market Predictions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Based on current trends and global automotive developments, here's what to expect:</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">🔮 2025-2027 Predictions</h4>
                    <ul className="text-blue-700 text-sm mt-2 space-y-1">
                      <li>• Continued growth in hybrid vehicle imports as fuel costs rise</li>
                      <li>• Increasing popularity of compact SUVs over traditional sedans</li>
                      <li>• Japanese brands maintaining dominance but with increasing competition</li>
                      <li>• Growing demand for vehicles with advanced safety features</li>
                      <li>• Potential shift towards slightly newer vehicles as import age limits tighten</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">💡 Strategic Opportunities</h4>
                    <ul className="text-green-700 text-sm mt-2 space-y-1">
                      <li>• Early adoption of emerging brands before they become mainstream</li>
                      <li>• Focus on fuel-efficient models as energy costs continue rising</li>
                      <li>• Consider vehicles with strong digital features as connectivity becomes essential</li>
                      <li>• Evaluate electric/hybrid options as infrastructure develops</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4">Explore Market Data & Trends</h3>
              <p className="text-muted-foreground mb-6">
                Access our comprehensive vehicle market analysis with interactive charts and detailed statistics.
              </p>
              <Button asChild size="lg">
                <Link to="/popular">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  View Market Analytics
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default PopularCarsAnalysisGuide;