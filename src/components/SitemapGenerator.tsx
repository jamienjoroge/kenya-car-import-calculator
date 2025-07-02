import React from 'react';

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
  const generateSitemap = () => {
    // Get all blog posts
    const dynamicPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
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
      }
    ];

    const allPosts = [...dynamicPosts, ...staticBlogPosts];
    
    const formatDateForSitemap = (dateString: string) => {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    };

    const staticPages = [
      { url: 'https://garimoto.co.ke/', lastmod: '2024-12-24', changefreq: 'daily', priority: '1.0' },
      { url: 'https://garimoto.co.ke/compare', lastmod: '2024-12-20', changefreq: 'weekly', priority: '0.8' },
      { url: 'https://garimoto.co.ke/afford', lastmod: '2024-12-20', changefreq: 'weekly', priority: '0.8' },
      { url: 'https://garimoto.co.ke/popular', lastmod: '2024-12-20', changefreq: 'weekly', priority: '0.7' },
      { url: 'https://garimoto.co.ke/blog', lastmod: '2024-12-24', changefreq: 'daily', priority: '0.8' },
      { url: 'https://garimoto.co.ke/about', lastmod: '2024-12-15', changefreq: 'monthly', priority: '0.5' },
      { url: 'https://garimoto.co.ke/contact', lastmod: '2024-12-15', changefreq: 'monthly', priority: '0.5' },
      { url: 'https://garimoto.co.ke/sitemap', lastmod: '2024-12-15', changefreq: 'monthly', priority: '0.3' },
      { url: 'https://garimoto.co.ke/privacy', lastmod: '2024-12-15', changefreq: 'yearly', priority: '0.3' },
      { url: 'https://garimoto.co.ke/terms', lastmod: '2024-12-15', changefreq: 'yearly', priority: '0.3' }
    ];

    const blogUrls = allPosts.map(post => ({
      url: `https://garimoto.co.ke/blog/${post.slug}`,
      lastmod: formatDateForSitemap(post.date),
      changefreq: post.breaking ? 'daily' : 'monthly',
      priority: post.breaking ? '0.9' : '0.6'
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

  const generateGoogleNewsUrl = () => {
    const newsContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
    <loc>https://garimoto.co.ke/blog/ciak-vs-kra-lawsuit-2025</loc>
    <news:news>
      <news:publication>
        <news:name>GariMoto</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>2024-12-24T00:00:00Z</news:publication_date>
      <news:title>BREAKING: Car Dealers Sue KRA Over New CRSP Schedule 2025</news:title>
      <news:keywords>CRSP, KRA, Lawsuit, Import Duties, Kenya, Car Import</news:keywords>
    </news:news>
  </url>
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
      <h3 className="text-lg font-semibold mb-4">Sitemap Management</h3>
      <p className="text-gray-600 mb-4">
        Generate updated sitemaps for search engines and Google News.
      </p>
      <div className="space-y-3">
        <button
          onClick={generateSitemap}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-3"
        >
          Generate Main Sitemap
        </button>
        <button
          onClick={generateGoogleNewsUrl}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Generate News Sitemap
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Upload the generated XML files to your website's public directory and submit to Google Search Console.
      </p>
    </div>
  );
};

export default SitemapGenerator;