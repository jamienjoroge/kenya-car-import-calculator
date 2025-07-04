import React from 'react';
import { supabase } from '@/integrations/supabase/client';

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
}

const SitemapGenerator = () => {
  const generateSitemap = async () => {
    // Get dynamic posts from database
    let dynamicPosts: BlogPost[] = [];
    try {
      const { data: dbPosts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (!error && dbPosts) {
        dynamicPosts = dbPosts.map(post => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          description: post.description,
          readTime: post.read_time,
          date: new Date(post.published_at).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          excerpt: post.excerpt,
          breaking: post.is_breaking,
          category: post.category || 'Automotive',
          tags: post.tags || [],
          author: post.author
        }));
      }
    } catch (error) {
      console.error('Error loading database posts:', error);
    }

    // Get any remaining posts from localStorage as fallback
    const localPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
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
        author: "GariMoto Editorial"
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
        author: "GariMoto Editorial"
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
        tags: ["Car Import", "Kenya", "Documentation"],
        author: "GariMoto Editorial"
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
        author: "GariMoto Editorial"
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
        tags: ["Import Duties", "Kenya", "Vehicle Tax"],
        author: "GariMoto Editorial"
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
        tags: ["Car Trends", "Kenya", "Market Analysis"],
        author: "GariMoto Editorial"
      },
      {
        id: "crsp-schedule-2025-changes",
        slug: "crsp-schedule-2025-changes",
        title: "CRSP Schedule 2025: What's Changed?",
        description: "Detailed breakdown of the new CRSP schedule effective July 2025 and its impact on import duties.",
        readTime: "6 min read",
        date: "November 28, 2024",
        excerpt: "The July 2025 CRSP schedule brings significant changes to vehicle valuations. Learn what's new and how it affects you.",
        category: "Regulatory Updates",
        tags: ["CRSP", "2025", "Regulatory Changes"],
        author: "GariMoto Editorial"
      }
    ];

    // Combine all posts, avoiding duplicates by slug
    const allPosts = [...dynamicPosts];
    
    // Add local and static posts only if they don't exist in database
    [...localPosts, ...staticBlogPosts].forEach(post => {
      if (!allPosts.find(p => p.slug === post.slug)) {
        allPosts.push(post);
      }
    });
    
    const formatDateForSitemap = (dateString: string) => {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    };

    const staticPages = [
      { url: 'https://garimoto.co.ke/', lastmod: '2025-01-04', changefreq: 'daily', priority: '1.0' },
      { url: 'https://garimoto.co.ke/compare', lastmod: '2025-01-04', changefreq: 'weekly', priority: '0.8' },
      { url: 'https://garimoto.co.ke/afford', lastmod: '2025-01-04', changefreq: 'weekly', priority: '0.8' },
      { url: 'https://garimoto.co.ke/popular', lastmod: '2025-01-04', changefreq: 'weekly', priority: '0.7' },
      { url: 'https://garimoto.co.ke/blog', lastmod: '2025-01-04', changefreq: 'daily', priority: '0.9' },
      { url: 'https://garimoto.co.ke/about', lastmod: '2025-01-04', changefreq: 'monthly', priority: '0.6' },
      { url: 'https://garimoto.co.ke/contact', lastmod: '2025-01-04', changefreq: 'monthly', priority: '0.6' },
      { url: 'https://garimoto.co.ke/sitemap', lastmod: '2025-01-04', changefreq: 'monthly', priority: '0.4' },
      { url: 'https://garimoto.co.ke/privacy', lastmod: '2025-01-04', changefreq: 'yearly', priority: '0.3' },
      { url: 'https://garimoto.co.ke/terms', lastmod: '2025-01-04', changefreq: 'yearly', priority: '0.3' }
    ];

    const blogUrls = allPosts.map(post => ({
      url: `https://garimoto.co.ke/blog/${post.slug}`,
      lastmod: formatDateForSitemap(post.date),
      changefreq: post.breaking ? 'daily' : 'monthly',
      priority: post.breaking ? '0.9' : '0.7'
    }));

    const allUrls = [...staticPages, ...blogUrls];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Create and download sitemap file
    const blob = new Blob([sitemapContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateGoogleNewsUrl = async () => {
    // Get recent breaking news from database
    let breakingPosts: BlogPost[] = [];
    try {
      const { data: dbPosts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_breaking', true)
        .gte('published_at', new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()) // Last 2 days
        .order('published_at', { ascending: false });

      if (!error && dbPosts) {
        breakingPosts = dbPosts.map(post => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          description: post.description,
          readTime: post.read_time,
          date: new Date(post.published_at).toISOString(),
          excerpt: post.excerpt,
          breaking: post.is_breaking,
          category: post.category || 'Automotive',
          tags: post.tags || [],
          author: post.author
        }));
      }
    } catch (error) {
      console.error('Error loading breaking news:', error);
    }

    // Include static breaking news if no database posts
    if (breakingPosts.length === 0) {
      breakingPosts = [{
        id: "ciak-vs-kra-lawsuit-2025",
        slug: "ciak-vs-kra-lawsuit-2025",
        title: "BREAKING: Car Dealers Sue KRA Over New CRSP Schedule 2025 - Import Duties Rise 145%",
        description: "CIAK files urgent lawsuit against KRA's new CRSP schedule increasing import duties up to 145%.",
        readTime: "8 min read",
        date: "2024-12-24T08:00:00Z",
        excerpt: "Car Importers Association files urgent court application.",
        breaking: true,
        category: "Legal",
        tags: ["CRSP", "KRA", "Lawsuit", "Import Duties", "Kenya"],
        author: "GariMoto Editorial"
      }];
    }

    const newsContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${breakingPosts.map(post => `  <url>
    <loc>https://garimoto.co.ke/blog/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>GariMoto</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.date}</news:publication_date>
      <news:title>${post.title}</news:title>
      <news:keywords>${post.tags?.join(', ') || 'Kenya, Car Import, CRSP, KRA'}</news:keywords>
    </news:news>
  </url>`).join('\n')}
</urlset>`;

    // Create and download Google News sitemap
    const blob = new Blob([newsContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'news-sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">SEO Sitemap Management</h3>
      <p className="text-gray-600 mb-4">
        Generate updated sitemaps including all database blog posts for optimal Google Search Console indexing.
      </p>
      <div className="space-y-3">
        <button
          onClick={generateSitemap}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-3"
        >
          Generate Complete Sitemap
        </button>
        <button
          onClick={generateGoogleNewsUrl}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Generate News Sitemap
        </button>
      </div>
      <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded">
        <h4 className="font-medium mb-2">SEO Optimization Features:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Includes all database blog posts automatically</li>
          <li>Prioritizes breaking news for faster indexing</li>
          <li>Generates Google News sitemap for current articles</li>
          <li>Uses proper lastmod dates from database</li>
          <li>SEO-friendly URL structure maintained</li>
        </ul>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        📋 After generating, upload XML files to your website's public directory and submit to Google Search Console for immediate indexing.
      </p>
    </div>
  );
};

export default SitemapGenerator;
