
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AdSpace from '@/components/AdSpace';
import NotFound from './NotFound';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  excerpt: string;
  readTime: string;
  date: string;
  breaking?: boolean;
}

const DynamicBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    // Try to load from localStorage first (for admin-created posts)
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const foundPost = savedPosts.find((post: BlogPost) => post.slug === slug);
    
    if (foundPost) {
      setBlogPost(foundPost);
      setLoading(false);
      return;
    }

    // If not found in localStorage, check static blog posts
    const staticPosts: Record<string, Partial<BlogPost>> = {
      'ciak-vs-kra-lawsuit-2025': {
        title: 'BREAKING: Car Dealers Sue KRA Over New CRSP Schedule 2025',
        description: 'CIAK files urgent lawsuit challenging KRA\'s new CRSP schedule that increases import duties by up to 145% on popular vehicles.',
        readTime: '8 min read',
        date: 'December 24, 2024',
        breaking: true
      },
      'toyota-prius-import-cost-kenya': {
        title: 'Toyota Prius Import Cost Kenya 2025: Complete Duty Calculator Guide',
        description: 'Complete breakdown of Toyota Prius import costs including exact duty calculations, CRSP values, and money-saving tips.',
        readTime: '10 min read',
        date: 'December 20, 2024'
      },
      'how-to-import-car-kenya': {
        title: 'How to Import a Car in Kenya',
        description: 'Complete step-by-step guide to importing vehicles into Kenya, from purchase to clearance at the port.',
        readTime: '8 min read',
        date: 'December 15, 2024'
      },
      'what-is-crsp': {
        title: 'What is CRSP?',
        description: 'Understanding the Current Retail Selling Price system used by Kenya Revenue Authority for vehicle valuation.',
        readTime: '5 min read',
        date: 'December 10, 2024'
      },
      'what-determines-duty-kenya': {
        title: 'What Determines Duty in Kenya?',
        description: 'Factors that influence import duty calculations for vehicles in Kenya including age, engine size, and value.',
        readTime: '6 min read',
        date: 'December 8, 2024'
      },
      'most-imported-cars-2025': {
        title: '2025 Most Imported Cars in Kenya',
        description: 'Analysis of trending vehicle imports and popular car models entering the Kenyan market in 2025.',
        readTime: '7 min read',
        date: 'December 5, 2024'
      },
      'crsp-schedule-2025-changes': {
        title: 'CRSP Schedule 2025: What\'s Changed?',
        description: 'Detailed breakdown of the new CRSP schedule effective July 2025 and its impact on import duties.',
        readTime: '6 min read',
        date: 'November 28, 2024'
      }
    };

    const staticPost = staticPosts[slug];
    if (staticPost) {
      setBlogPost({
        id: slug,
        slug,
        content: `<p>This is a placeholder for the ${staticPost.title} blog post. The full content will be available soon.</p>`,
        excerpt: staticPost.description || '',
        ...staticPost
      } as BlogPost);
    }
    
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-8"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!blogPost) {
    return <NotFound />;
  }

  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
      <Navigation />
      
      {/* Header Ad */}
      <div className="w-full py-2 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <AdSpace slot="blog-header" format="horizontal" style={{ height: "90px" }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="bg-white rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {blogPost.readTime}
              </span>
              <span className="text-sm text-gray-500">{blogPost.date}</span>
              {blogPost.breaking && (
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                  BREAKING
                </span>
              )}
            </div>
            
            <h1 className={`text-4xl font-bold mb-4 ${blogPost.breaking ? 'text-red-800' : 'text-gray-900'}`}>
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">{blogPost.description}</p>
            
            <div className="flex items-center gap-4 pt-4 border-t">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Sidebar Ad */}
          <div className="float-right ml-6 mb-6 hidden md:block">
            <AdSpace slot="blog-sidebar" format="rectangle" style={{ width: "300px", height: "250px" }} />
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Mid-content Ad */}
          <div className="my-8">
            <AdSpace slot="blog-mid-content" format="horizontal" style={{ height: "90px" }} />
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default DynamicBlogPost;
