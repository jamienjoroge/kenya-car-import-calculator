
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2, Plus } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  excerpt: string;
  readTime: string;
  date: string;
  breaking?: boolean;
  category?: string;
  tags?: string[];
  author?: string;
  isStatic?: boolean;
}

const BlogList = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth !== 'true') {
      navigate('/admin');
      return;
    }
    setIsAuthenticated(true);
    
    // Load dynamic posts from localStorage
    const dynamicPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
    // Static blog posts that are built-in
    const staticBlogPosts: BlogPost[] = [
      {
        id: "ciak-vs-kra-lawsuit-2025",
        slug: "ciak-vs-kra-lawsuit-2025",
        title: "BREAKING: Car Dealers Sue KRA Over New CRSP Schedule 2025",
        description: "CIAK files urgent lawsuit challenging KRA's new CRSP schedule that increases import duties by up to 145% on popular vehicles.",
        readTime: "8 min read",
        date: "December 24, 2024",
        excerpt: "Car Importers Association of Kenya files urgent court application against KRA's new CRSP schedule, claiming tax increases up to 145% on common vehicles.",
        breaking: true,
        category: "Legal",
        tags: ["CRSP", "KRA", "Lawsuit", "Import Duties"],
        author: "GariMoto Editorial",
        isStatic: true
      },
      {
        id: "toyota-prius-import-cost-kenya",
        slug: "toyota-prius-import-cost-kenya",
        title: "Toyota Prius Import Cost Kenya 2025: Complete Duty Calculator Guide",
        description: "Complete breakdown of Toyota Prius import costs including exact duty calculations, CRSP values, and money-saving tips.",
        readTime: "10 min read",
        date: "December 20, 2024",
        excerpt: "Get exact Toyota Prius import costs for Kenya with detailed duty breakdowns, year-by-year CRSP values, and expert money-saving tips.",
        category: "Calculator Guides",
        tags: ["Toyota Prius", "Import Costs", "Duty Calculator"],
        author: "GariMoto Editorial",
        isStatic: true
      },
      {
        id: "how-to-import-car-kenya",
        slug: "how-to-import-car-kenya",
        title: "How to Import a Car in Kenya",
        description: "Complete step-by-step guide to importing vehicles into Kenya, from purchase to clearance at the port.",
        readTime: "8 min read",
        date: "December 15, 2024",
        excerpt: "Learn the complete process of importing a car to Kenya, including documentation, shipping, and customs clearance procedures.",
        category: "How-To Guides",
        tags: ["Car Import", "Kenya", "Guide", "Process"],
        author: "GariMoto Editorial",
        isStatic: true
      },
      {
        id: "what-is-crsp",
        slug: "what-is-crsp",
        title: "What is CRSP?",
        description: "Understanding the Current Retail Selling Price system used by Kenya Revenue Authority for vehicle valuation.",
        readTime: "5 min read",
        date: "December 10, 2024",
        excerpt: "CRSP determines how much duty you'll pay on your imported vehicle. Learn how it works and affects your import costs.",
        category: "Educational",
        tags: ["CRSP", "KRA", "Vehicle Valuation"],
        author: "GariMoto Editorial",
        isStatic: true
      },
      {
        id: "what-determines-duty-kenya",
        slug: "what-determines-duty-kenya",
        title: "What Determines Duty in Kenya?",
        description: "Factors that influence import duty calculations for vehicles in Kenya including age, engine size, and value.",
        readTime: "6 min read",
        date: "December 8, 2024",
        excerpt: "Discover the key factors that determine how much you'll pay in import duties when bringing a vehicle into Kenya.",
        category: "Educational",
        tags: ["Import Duty", "Kenya", "Factors"],
        author: "GariMoto Editorial",
        isStatic: true
      },
      {
        id: "most-imported-cars-2025",
        slug: "most-imported-cars-2025",
        title: "2025 Most Imported Cars in Kenya",
        description: "Analysis of trending vehicle imports and popular car models entering the Kenyan market in 2025.",
        readTime: "7 min read",
        date: "December 5, 2024",
        excerpt: "See which car models are dominating imports in 2025 and understand the trends shaping Kenya's automotive market.",
        category: "Market Analysis",
        tags: ["Car Trends", "2025", "Kenya Market"],
        author: "GariMoto Editorial",
        isStatic: true
      },
      {
        id: "crsp-schedule-2025-changes",
        slug: "crsp-schedule-2025-changes",
        title: "CRSP Schedule 2025: What's Changed?",
        description: "Detailed breakdown of the new CRSP schedule effective July 2025 and its impact on import duties.",
        readTime: "6 min read",
        date: "November 28, 2024",
        excerpt: "The July 2025 CRSP schedule brings significant changes to vehicle valuations. Learn what's new and how it affects you.",
        category: "Updates",
        tags: ["CRSP", "2025 Changes", "Import Duties"],
        author: "GariMoto Editorial",
        isStatic: true
      }
    ];
    
    // Combine all posts (dynamic first, then static)
    const allPosts = [...dynamicPosts, ...staticBlogPosts];
    setBlogPosts(allPosts);
  }, [navigate]);

  const deleteBlogPost = (postId: string) => {
    const postToDelete = blogPosts.find(post => post.id === postId);
    
    if (postToDelete?.isStatic) {
      alert('Cannot delete static blog posts. These are built-in articles.');
      return;
    }
    
    if (confirm('Are you sure you want to delete this blog post?')) {
      const dynamicPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      const updatedDynamicPosts = dynamicPosts.filter((post: BlogPost) => post.id !== postId);
      localStorage.setItem('blogPosts', JSON.stringify(updatedDynamicPosts));
      
      // Reload all posts
      window.location.reload();
    }
  };

  const editBlogPost = (postId: string) => {
    const postToEdit = blogPosts.find(post => post.id === postId);
    
    if (postToEdit?.isStatic) {
      alert('Static blog posts cannot be edited from the admin panel. They are part of the codebase.');
      return;
    }
    
    navigate(`/admin/blog-editor?edit=${postId}`);
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={() => navigate('/admin')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <Button onClick={() => navigate('/admin/blog-editor')}>
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Manage Blog Posts</h1>
          <p className="text-gray-600">Edit or delete your existing blog posts</p>
        </div>

        <div className="space-y-4">
          {blogPosts.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500 mb-4">No blog posts found</p>
                <Button onClick={() => navigate('/admin/blog-editor')}>
                  Create Your First Post
                </Button>
              </CardContent>
            </Card>
          ) : (
            blogPosts.map((post) => (
              <Card key={post.id} className={post.breaking ? 'border-red-200 bg-red-50' : ''}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        {post.breaking && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                            BREAKING
                          </span>
                        )}
                        {post.isStatic && (
                          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
                            STATIC
                          </span>
                        )}
                      </div>
                      <CardDescription>{post.description}</CardDescription>
                      <div className="text-sm text-gray-500 mt-2 space-y-1">
                        <p>{post.date} • {post.readTime} • {post.author}</p>
                        {post.category && <p>Category: {post.category}</p>}
                        {post.tags && post.tags.length > 0 && (
                          <p>Tags: {post.tags.join(', ')}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => editBlogPost(post.id)}
                        disabled={post.isStatic}
                        title={post.isStatic ? "Static posts cannot be edited" : "Edit post"}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => deleteBlogPost(post.id)}
                        className={`${post.isStatic ? 'opacity-50 cursor-not-allowed' : 'text-red-600 hover:text-red-700'}`}
                        disabled={post.isStatic}
                        title={post.isStatic ? "Static posts cannot be deleted" : "Delete post"}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
