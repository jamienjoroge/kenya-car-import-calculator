import React, { useState } from 'react';
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

const RSSFeed = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateRSSFeed = async () => {
    setIsGenerating(true);
    
    try {
      // Get dynamic posts from database
      const { data: dynamicPosts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
        alert('Error fetching blog posts');
        return;
      }

      // Transform database posts to expected format
      const transformedDynamicPosts = (dynamicPosts || []).map(post => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        description: post.description,
        excerpt: post.excerpt,
        readTime: post.read_time,
        date: new Date(post.published_at).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        breaking: post.is_breaking,
        category: post.category,
        tags: post.tags,
        author: post.author
      }));
    
    const staticBlogPosts: BlogPost[] = [
      {
        id: "japanese-auction-sheet-guide-2025",
        slug: "japanese-auction-sheet-guide-2025",
        title: "Japanese Auction Sheet Guide Kenya 2025: Master Car Import Inspections",
        description: "Master Japanese auction sheets for smarter car imports to Kenya. Learn to decode grades, spot hidden damage, and avoid costly mistakes in 2025.",
        readTime: "12 min read",
        date: "August 25, 2025",
        excerpt: "Complete guide to reading Japanese auction sheets like a pro. Decode grades, spot red flags, and make informed import decisions that save you thousands.",
        breaking: false,
        category: "Import Guides",
        tags: ["Japanese Auction Sheet", "Car Import", "Vehicle Inspection", "Auction Grades", "Import Guide"],
        author: "GariMoto Editorial"
      },
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
        tags: ["Car Import", "Kenya", "Guide", "Process"],
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
        tags: ["Import Duty", "Kenya", "Factors"],
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
        tags: ["Car Trends", "2025", "Kenya Market"],
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
        category: "Updates",
        tags: ["CRSP", "2025 Changes", "Import Duties"],
        author: "GariMoto Editorial"
      }
    ];

    const allPosts = [...transformedDynamicPosts, ...staticBlogPosts];
    
    const formatDateForRSS = (dateString: string) => {
      const date = new Date(dateString);
      return date.toUTCString();
    };

    const rssItems = allPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://garimoto.co.ke/blog/${post.slug}</link>
      <guid>https://garimoto.co.ke/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${formatDateForRSS(post.date)}</pubDate>
      <author>editorial@garimoto.co.ke (${post.author || 'GariMoto Editorial'})</author>
      <category>${post.category || 'Automotive'}</category>
      ${post.tags ? post.tags.map(tag => `<category>${tag}</category>`).join('\n      ') : ''}
    </item>`).join('\n');

    const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>GariMoto - Kenya Car Import Blog</title>
    <link>https://garimoto.co.ke</link>
    <description>Your complete guide to importing cars in Kenya. Stay updated with the latest regulations, CRSP schedules, and expert insights on vehicle imports.</description>
    <language>en-KE</language>
    <category>Automotive</category>
    <category>Import/Export</category>
    <category>Kenya Business</category>
    <managingEditor>editorial@garimoto.co.ke (GariMoto Editorial Team)</managingEditor>
    <webMaster>tech@garimoto.co.ke (GariMoto Technical Team)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://garimoto.co.ke/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://garimoto.co.ke/favicon.ico</url>
      <title>GariMoto</title>
      <link>https://garimoto.co.ke</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

      // Create and download RSS file
      const blob = new Blob([rssContent], { type: 'application/rss+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'rss.xml';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating RSS feed:', error);
      alert('Error generating RSS feed');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">RSS Feed Management</h3>
      <p className="text-gray-600 mb-4">
        Generate an RSS feed for your blog posts to improve SEO and enable syndication.
      </p>
      <button
        onClick={generateRSSFeed}
        disabled={isGenerating}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? 'Generating...' : 'Generate & Download RSS Feed'}
      </button>
      <p className="text-sm text-gray-500 mt-2">
        Upload the generated rss.xml file to your website's root directory for Google News and RSS readers.
      </p>
    </div>
  );
};

export default RSSFeed;