
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import NewsletterSignup from "@/components/NewsletterSignup";
import BreadcrumbNav from "@/components/BreadcrumbNav";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
  excerpt: string;
  breaking?: boolean;
}

const Blog = () => {
  const [dynamicPosts, setDynamicPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Load dynamic posts from localStorage
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    setDynamicPosts(savedPosts);
  }, []);

  const staticBlogPosts = [
    {
      id: "8-year-rule-kenya-2025",
      title: "8-Year Rule for Car Imports in Kenya: Manufacture vs Registration Explained",
      description: "Learn why Kenya only allows cars under 8 years old—from either manufacture or registration year. How it impacts importing to Kenya in 2025.",
      readTime: "8 min read",
      date: "August 27, 2025",
      excerpt: "Understanding Kenya's 8-year rule is critical for car imports. Learn whether it's based on manufacture or registration date and how it affects your import plans.",
      breaking: false
    },
    {
      id: "japanese-auction-sheet-guide-2025",
      title: "Japanese Auction Sheet Guide Kenya 2025: Master Car Import Inspections",
      description: "Master Japanese auction sheets for smarter car imports to Kenya. Learn to decode grades, spot hidden damage, and avoid costly mistakes in 2025.",
      readTime: "12 min read",
      date: "August 25, 2025",
      excerpt: "Complete guide to reading Japanese auction sheets like a pro. Decode grades, spot red flags, and make informed import decisions that save you thousands.",
      breaking: false
    },
    {
      id: "ntsa-vehicle-inspection-guide-2025",
      title: "NTSA & Pre-Purchase Vehicle Inspections in Kenya (2025 Guide)",
      description: "Learn about NTSA inspections and pre-purchase car checks in Kenya — costs, process, and why they save you money in 2025.",
      readTime: "8 min read",
      date: "August 22, 2025",
      excerpt: "Complete guide to NTSA inspections vs pre-purchase checks. Learn costs, processes, and why both inspections can save you thousands in hidden repairs.",
      breaking: false
    },
    {
      id: "buying-locally-vs-importing-kenya-2025",
      title: "Buying Locally vs Importing a Car in Kenya: How Much Can You Save in 2025?",
      description: "Compare local dealer prices vs importing costs in Kenya 2025. Real cost analysis shows potential savings of KES 300K-600K on popular models like Toyota Axio.",
      readTime: "12 min read",
      date: "August 21, 2025",
      excerpt: "Discover how importing a car yourself can save you hundreds of thousands compared to buying from local dealers. Complete cost breakdown and decision guide included.",
      breaking: false
    },
    {
      id: "kenya-car-import-process-2025",
      title: "Kenya Car Import Process 2025: Complete Step-by-Step Guide",
      description: "Complete guide to importing cars to Kenya in 2025. Learn the 6-step process, required documents, costs, and avoid common mistakes",
      readTime: "15 min read",
      date: "August 4, 2025",
      excerpt: "Everything you need to know about importing a car to Kenya in 2025, from choosing your vehicle to final registration. Updated with latest KRA regulations and court ruling impacts.",
      breaking: false
    },
    {
      id: "best-cars-import-kenya-1-million",
      title: "Best Cars to Import to Kenya Under KES 1 Million (2025)",
      description: "Discover the top 6 cars to import to Kenya under KES 1 million in 2025. Complete cost breakdown, fuel economy, reliability ratings included",
      readTime: "12 min read",
      date: "August 4, 2025",
      excerpt: "Budget-friendly car import guide featuring Toyota Vitz, Honda Fit, Nissan Note and more. Complete cost analysis and money-saving tips for importers on a tight budget.",
      breaking: false
    },
    {
      id: "crsp-schedule-halted-by-court-2025",
      title: "BREAKING: Court Halts KRA's New CRSP Schedule Implementation",
      description: "High Court issues temporary injunction following CIAK lawsuit, providing relief to car importers as legal battle continues over controversial duty increases.",
      readTime: "6 min read",
      date: "August 4, 2025",
      excerpt: "High Court temporarily suspends KRA's new CRSP schedule implementation, providing immediate relief to vehicle importers across Kenya.",
      breaking: true
    },
    {
      id: "fuel-calculator-guide",
      title: "Free Fuel Calculator Kenya 2025: Track Your Car's Consumption & Trip Costs",
      description: "Calculate your vehicle's fuel consumption and plan trip costs in Kenya. Free fuel efficiency calculator with real Kenya fuel prices.",
      readTime: "8 min read",
      date: "August 3, 2025",
      excerpt: "Master your vehicle's fuel consumption with our comprehensive guide to calculating efficiency and planning trip costs on Kenyan roads.",
      breaking: false
    },
    {
      id: "vehicle-maintenance-guide", 
      title: "Vehicle Maintenance Schedule Kenya 2025: Complete Service Tracker Guide",
      description: "Master your car maintenance with our comprehensive guide for Kenya. Track service schedules and keep your vehicle roadworthy.",
      readTime: "9 min read",
      date: "August 3, 2025",
      excerpt: "Never miss another service with our maintenance tracker designed specifically for Kenya's driving conditions.",
      breaking: false
    },
    {
      id: "vehicle-inspection-guide",
      title: "Free Vehicle Inspection Checklist Kenya 2025: Professional Roadworthy Guide", 
      description: "Comprehensive vehicle inspection checklist for Kenya. Ensure your car is roadworthy with our professional-grade safety checklist.",
      readTime: "10 min read",
      date: "August 3, 2025",
      excerpt: "Master vehicle inspection with our comprehensive checklist designed for Kenya's road conditions.",
      breaking: false
    },
    {
      id: "budget-car-finder-guide",
      title: "What Car Can I Afford in Kenya 2025? Budget Calculator & Vehicle Finder Guide",
      description: "Find cars within your budget in Kenya with our complete guide. Calculate total ownership costs and make smart decisions.",
      readTime: "8 min read", 
      date: "August 3, 2025",
      excerpt: "Discover which vehicles fit your budget with our comprehensive guide to car affordability in Kenya.",
      breaking: false
    },
    {
      id: "popular-cars-analysis-guide",
      title: "Popular Cars by Year Kenya 2025: Market Trends & CRSP Data Analysis",
      description: "Discover the most popular car models in Kenya by year with comprehensive market analysis and vehicle trends.",
      readTime: "7 min read",
      date: "August 3, 2025", 
      excerpt: "Make informed car purchase decisions with comprehensive market insights based on official CRSP data.",
      breaking: false
    },
    {
      id: "compare-car-import-costs",
      title: "Compare Car Import Costs Kenya 2025: Save Thousands on Your Vehicle Import",
      description: "Use GariMoto's Compare Cars tool to compare import duties between different vehicles. Make informed decisions and save thousands on your car import to Kenya.",
      readTime: "7 min read",
      date: "August 3, 2025",
      excerpt: "Learn how to use our Compare Cars tool to make informed decisions and potentially save 20-40% on your vehicle import costs to Kenya.",
      breaking: false
    },
    {
      id: "ciak-vs-kra-lawsuit-2025",
      title: "BREAKING: Car Dealers Sue KRA Over New CRSP Schedule 2025",
      description: "CIAK files urgent lawsuit challenging KRA's new CRSP schedule that increases import duties by up to 145% on popular vehicles.",
      readTime: "8 min read",
      date: "December 24, 2024",
      excerpt: "Car Importers Association of Kenya files urgent court application against KRA's new CRSP schedule, claiming tax increases up to 145% on common vehicles.",
      breaking: true
    },
    {
      id: "toyota-prius-import-cost-kenya",
      title: "Toyota Prius Import Cost Kenya 2025: Complete Duty Calculator Guide",
      description: "Complete breakdown of Toyota Prius import costs including exact duty calculations, CRSP values, and money-saving tips.",
      readTime: "10 min read",
      date: "December 20, 2024",
      excerpt: "Get exact Toyota Prius import costs for Kenya with detailed duty breakdowns, year-by-year CRSP values, and expert money-saving tips."
    },
    {
      id: "how-to-import-car-kenya",
      title: "How to Import a Car in Kenya",
      description: "Complete step-by-step guide to importing vehicles into Kenya, from purchase to clearance at the port.",
      readTime: "8 min read",
      date: "December 15, 2024",
      excerpt: "Learn the complete process of importing a car to Kenya, including documentation, shipping, and customs clearance procedures."
    },
    {
      id: "what-is-crsp",
      title: "What is CRSP?",
      description: "Understanding the Current Retail Selling Price system used by Kenya Revenue Authority for vehicle valuation.",
      readTime: "5 min read",
      date: "December 10, 2024",
      excerpt: "CRSP determines how much duty you'll pay on your imported vehicle. Learn how it works and affects your import costs."
    },
    {
      id: "what-determines-duty-kenya",
      title: "What Determines Duty in Kenya?",
      description: "Factors that influence import duty calculations for vehicles in Kenya including age, engine size, and value.",
      readTime: "6 min read",
      date: "December 8, 2024",
      excerpt: "Discover the key factors that determine how much you'll pay in import duties when bringing a vehicle into Kenya."
    },
    {
      id: "most-imported-cars-2025",
      title: "2025 Most Imported Cars in Kenya",
      description: "Analysis of trending vehicle imports and popular car models entering the Kenyan market in 2025.",
      readTime: "7 min read",
      date: "December 5, 2024",
      excerpt: "See which car models are dominating imports in 2025 and understand the trends shaping Kenya's automotive market."
    },
    {
      id: "calculate-car-import-duty-kenya-2025",
      title: "Step-by-Step: Calculate Car Import Duty in Kenya (2025)",
      description: "Learn the exact steps to calculate KRA car import duty in Kenya using CRSP, excise, VAT, IDF & RDL—plus a worked example and common mistakes.",
      readTime: "12 min read",
      date: "September 1, 2025",
      excerpt: "Master the complete process of calculating import duties in Kenya with our step-by-step guide covering CRSP, depreciation, and all applicable fees."
    },
    {
      id: "crsp-schedule-2025-changes",
      title: "CRSP Schedule 2025: What's Changed?",
      description: "Detailed breakdown of the new CRSP schedule effective July 2025 and its impact on import duties.",
      readTime: "6 min read",
      date: "November 28, 2024",
      excerpt: "The July 2025 CRSP schedule brings significant changes to vehicle valuations. Learn what's new and how it affects you."
    }
  ];

  // Combine dynamic and static posts, with dynamic posts first
  const allPosts = [...dynamicPosts, ...staticBlogPosts];

  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
      <Navigation />
      <BreadcrumbNav />
      
      {/* Header Ad */}
      <div className="w-full py-2 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <AdSpace slot="blog-header" format="horizontal" style={{ height: "90px" }} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Calculator
          </Link>
        </Button>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Kenya Car Import Blog</h1>
          <p className="text-gray-700 text-lg">
            Your complete guide to importing cars in Kenya. Stay updated with the latest regulations, 
            CRSP schedules, and expert insights on vehicle imports.
          </p>
        </div>

        {/* Sidebar Ad */}
        <div className="flex justify-end mb-6">
          <AdSpace slot="blog-sidebar" format="rectangle" style={{ width: "300px", height: "250px" }} />
        </div>

        <div className="grid gap-6">
          {allPosts.map((post) => (
            <Card key={post.id} className={`hover:shadow-md transition-shadow ${post.breaking ? 'border-red-200 bg-red-50' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                    {post.breaking && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                        BREAKING
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <CardTitle className={`text-xl hover:text-primary ${post.breaking ? 'text-red-800' : ''}`}>
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Button variant={post.breaking ? "default" : "outline"} asChild>
                  <Link to={`/blog/${post.id}`}>
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="my-8">
          <NewsletterSignup />
        </div>

        {/* Mid-content Ad */}
        <div className="my-8">
          <AdSpace slot="blog-mid-content" format="horizontal" style={{ height: "90px" }} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
