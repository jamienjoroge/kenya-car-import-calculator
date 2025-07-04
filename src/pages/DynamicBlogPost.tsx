import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AdSpace from '@/components/AdSpace';
import NotFound from './NotFound';
import { supabase } from '@/integrations/supabase/client';

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
  category?: string;
  tags?: string[];
  author?: string;
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

    // Enhanced structured data for better SEO
    const addStructuredData = (post: BlogPost) => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": post.title,
        "description": post.description,
        "image": "https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png",
        "author": {
          "@type": "Organization",
          "name": post.author || "GariMoto Editorial"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GariMoto",
          "logo": {
            "@type": "ImageObject",
            "url": "https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png",
            "width": 400,
            "height": 400
          }
        },
        "datePublished": new Date(post.date).toISOString(),
        "dateModified": new Date(post.date).toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://garimoto.co.ke/blog/${post.slug}`
        },
        "articleSection": post.category || "Automotive",
        "keywords": post.tags?.join(", ") || "car import, Kenya, CRSP, duty calculator",
        "wordCount": post.content.length,
        "inLanguage": "en-KE",
        "isAccessibleForFree": true,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://garimoto.co.ke"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://garimoto.co.ke/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": post.title,
              "item": `https://garimoto.co.ke/blog/${post.slug}`
            }
          ]
        }
      };

      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => {
        if (script.textContent?.includes('NewsArticle') || script.textContent?.includes('BlogPosting')) {
          script.remove();
        }
      });

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Enhanced meta tag updates for better indexing
      document.title = `${post.title} | GariMoto Kenya Car Import Blog`;
      
      const updateMetaTag = (property: string, content: string) => {
        let meta = document.querySelector(`meta[property="${property}"]`) || 
                   document.querySelector(`meta[name="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          if (property.startsWith('og:') || property.startsWith('article:')) {
            meta.setAttribute('property', property);
          } else {
            meta.setAttribute('name', property);
          }
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      // Essential SEO meta tags
      updateMetaTag('description', post.description);
      updateMetaTag('keywords', post.tags?.join(', ') || 'car import, Kenya, CRSP, duty calculator');
      updateMetaTag('author', post.author || 'GariMoto Editorial');
      updateMetaTag('robots', 'index, follow, max-image-preview:large');
      
      // Open Graph tags for social sharing
      updateMetaTag('og:title', post.title);
      updateMetaTag('og:description', post.description);
      updateMetaTag('og:url', `https://garimoto.co.ke/blog/${post.slug}`);
      updateMetaTag('og:type', 'article');
      updateMetaTag('og:site_name', 'GariMoto');
      updateMetaTag('og:image', 'https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png');
      
      // Article-specific meta tags
      updateMetaTag('article:author', post.author || 'GariMoto Editorial');
      updateMetaTag('article:published_time', new Date(post.date).toISOString());
      updateMetaTag('article:section', post.category || 'Automotive');
      updateMetaTag('article:publisher', 'https://garimoto.co.ke');
      
      // Twitter Card tags
      updateMetaTag('twitter:card', 'summary_large_image');
      updateMetaTag('twitter:title', post.title);
      updateMetaTag('twitter:description', post.description);
      updateMetaTag('twitter:image', 'https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png');
      
      // Add canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `https://garimoto.co.ke/blog/${post.slug}`);

      // Add tags as individual meta properties for better SEO
      if (post.tags) {
        // Remove existing tag metas
        document.querySelectorAll('meta[property="article:tag"]').forEach(meta => meta.remove());
        
        post.tags.forEach(tag => {
          const tagMeta = document.createElement('meta');
          tagMeta.setAttribute('property', 'article:tag');
          tagMeta.setAttribute('content', tag);
          document.head.appendChild(tagMeta);
        });
      }
    };

    // Load blog post data with priority for database content
    const loadBlogData = async () => {
      // Try database first for dynamic content
      try {
        const { data: dbPost, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();

        if (!error && dbPost) {
          const formattedPost: BlogPost = {
            id: dbPost.id,
            title: dbPost.title,
            slug: dbPost.slug,
            description: dbPost.description,
            content: dbPost.content,
            excerpt: dbPost.excerpt,
            readTime: dbPost.read_time,
            date: new Date(dbPost.published_at).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }),
            breaking: dbPost.is_breaking,
            category: dbPost.category || 'Automotive',
            tags: dbPost.tags || [],
            author: dbPost.author
          };
          setBlogPost(formattedPost);
          addStructuredData(formattedPost);
          setLoading(false);
          return;
        }
      } catch (error) {
        console.error('Error loading from database:', error);
      }

      // Fallback to localStorage
      const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      const foundPost = savedPosts.find((post: BlogPost) => post.slug === slug);
      
      if (foundPost) {
        setBlogPost(foundPost);
        addStructuredData(foundPost);
        setLoading(false);
        return;
      }

      // Static blog posts with enhanced SEO descriptions
      const staticPosts: Record<string, Partial<BlogPost>> = {
        'ciak-vs-kra-lawsuit-2025': {
          title: 'BREAKING: Car Dealers Sue KRA Over New CRSP Schedule 2025 - Import Duties Rise 145%',
          description: 'CIAK files urgent lawsuit against KRA\'s new CRSP schedule increasing import duties up to 145%. Get latest updates on how this affects your car import costs in Kenya.',
          readTime: '8 min read',
          date: 'December 24, 2024',
          breaking: true,
          category: 'Legal News',
          tags: ['CRSP', 'KRA', 'Lawsuit', 'Import Duties', 'Kenya', 'Car Import', 'Legal'],
          author: 'GariMoto Editorial'
        },
        'toyota-prius-import-cost-kenya': {
          title: 'Toyota Prius Import Cost Kenya 2025: Save KES 500K+ with Complete Guide',
          description: 'Save KES 500K+ on Toyota Prius imports! Complete breakdown of 2025 CRSP values, exact duty calculations, and expert money-saving tips for Kenya car imports.',
          readTime: '10 min read',
          date: 'December 20, 2024',
          category: 'Import Guides',
          tags: ['Toyota Prius', 'Import Costs', 'Duty Calculator', 'Kenya', 'CRSP', 'Money Saving'],
          author: 'GariMoto Editorial'
        },
        'how-to-import-car-kenya': {
          title: 'How to Import a Car in Kenya 2025: Complete Step-by-Step Guide + Cost Calculator',
          description: 'Master car imports to Kenya! Complete 2025 guide with step-by-step process, document checklist, port clearance tips, and exact cost breakdowns.',
          readTime: '8 min read',
          date: 'December 15, 2024',
          category: 'Import Guides',
          tags: ['Car Import', 'Kenya', 'Documentation', 'Shipping', 'Customs', 'Regulations'],
          author: 'GariMoto Editorial'
        },
        'what-is-crsp': {
          title: 'What is CRSP Kenya 2025? Complete Guide to Vehicle Valuation System',
          description: 'Master CRSP system! Learn how KRA values your imported vehicle, calculate exact duties, and avoid costly mistakes with our complete guide for Kenya car imports.',
          readTime: '5 min read',
          date: 'December 10, 2024',
          category: 'Educational',
          tags: ['CRSP', 'KRA', 'Vehicle Valuation', 'Import Duty', 'Kenya', 'Customs'],
          author: 'GariMoto Editorial'
        },
        'what-determines-duty-kenya': {
          title: 'What Determines Car Import Duty in Kenya 2025? 7 Key Factors Explained',
          description: 'Discover the 7 key factors determining your car import duty in Kenya. Learn how age, engine size, and CRSP value affect your total costs for vehicle imports.',
          readTime: '6 min read',
          date: 'December 8, 2024',
          category: 'Educational',
          tags: ['Import Duties', 'Kenya', 'Vehicle Tax', 'CRSP', 'Engine Size', 'Age'],
          author: 'GariMoto Editorial'
        },
        'most-imported-cars-2025': {
          title: '2025 Most Imported Cars in Kenya: Top 10 Models + Cost Analysis',
          description: 'See the top 10 most imported cars in Kenya 2025! Complete analysis with import costs, market trends, and best value recommendations for car buyers.',
          readTime: '7 min read',
          date: 'December 5, 2024',
          category: 'Market Analysis',
          tags: ['Car Trends', 'Kenya', 'Market Analysis', 'Import Statistics', 'Popular Cars 2025'],
          author: 'GariMoto Editorial'
        },
        'crsp-schedule-2025-changes': {
          title: 'CRSP Schedule 2025 Changes: How New Rates Affect Your Import Costs',
          description: 'Get ahead of CRSP 2025 changes! Detailed breakdown of new vehicle valuations and exactly how they impact your import duty calculations in Kenya.',
          readTime: '6 min read',
          date: 'November 28, 2024',
          category: 'Regulatory Updates',
          tags: ['CRSP', '2025', 'Regulatory Changes', 'Import Costs', 'Kenya', 'Vehicle Valuation'],
          author: 'GariMoto Editorial'
        }
      };

      const staticPost = staticPosts[slug];
      if (staticPost) {
        const fullPost = {
          id: slug,
          slug,
          content: `<div class="prose prose-lg max-w-none">
            <p>This comprehensive guide covers everything you need to know about ${staticPost.title}.</p>
            <p>Our expert analysis provides detailed insights to help you make informed decisions about your vehicle import process in Kenya.</p>
            <p>Stay tuned as we continue to update this article with the latest developments and practical advice.</p>
          </div>`,
          excerpt: staticPost.description || '',
          category: staticPost.category || 'Automotive',
          tags: staticPost.tags || ['Car Import', 'Kenya', 'CRSP'],
          author: staticPost.author || 'GariMoto Editorial',
          ...staticPost
        } as BlogPost;
        
        setBlogPost(fullPost);
        addStructuredData(fullPost);
      }
      
      setLoading(false);
    };

    loadBlogData();
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
