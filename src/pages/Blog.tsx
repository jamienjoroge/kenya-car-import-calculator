
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

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
