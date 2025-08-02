
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOPermalinksProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  image?: string;
  type?: string;
}

const SEOPermalinks: React.FC<SEOPermalinksProps> = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  image = 'https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png',
  type = 'website'
}) => {
  const location = useLocation();

  useEffect(() => {
    // Ensure HTTPS is used for all URLs
    const canonical = canonicalUrl || `https://garimoto.co.ke${location.pathname}`;
    
    // Set canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Enhanced meta tags for better SEO
    if (title) {
      // Set page title with consistent branding
      const fullTitle = title.includes('GariMoto') ? title : `${title} | GariMoto - Kenya Car Import Calculator`;
      document.title = fullTitle;
      
      // Update Open Graph title
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', title);

      // Update Twitter title
      let twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (!twitterTitle) {
        twitterTitle = document.createElement('meta');
        twitterTitle.setAttribute('name', 'twitter:title');
        document.head.appendChild(twitterTitle);
      }
      twitterTitle.setAttribute('content', title);
    }

    if (description) {
      // Meta description for SEO
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      // Update Open Graph description
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', description);

      // Update Twitter description
      let twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (!twitterDesc) {
        twitterDesc = document.createElement('meta');
        twitterDesc.setAttribute('name', 'twitter:description');
        document.head.appendChild(twitterDesc);
      }
      twitterDesc.setAttribute('content', description);
    }

    if (keywords) {
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', keywords);
    }

    // Enhanced Open Graph tags for better social sharing
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonical);

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', type);

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', image);

    let ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (!ogImageAlt) {
      ogImageAlt = document.createElement('meta');
      ogImageAlt.setAttribute('property', 'og:image:alt');
      document.head.appendChild(ogImageAlt);
    }
    ogImageAlt.setAttribute('content', 'GariMoto Kenya Car Import Duty Calculator');

    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute('property', 'og:site_name');
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.setAttribute('content', 'GariMoto');

    // Twitter Card tags for better Twitter/X sharing
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', image);

    let twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (!twitterImageAlt) {
      twitterImageAlt = document.createElement('meta');
      twitterImageAlt.setAttribute('name', 'twitter:image:alt');
      document.head.appendChild(twitterImageAlt);
    }
    twitterImageAlt.setAttribute('content', 'GariMoto Kenya Car Import Duty Calculator');

    // Additional SEO meta tags
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    let author = document.querySelector('meta[name="author"]');
    if (!author) {
      author = document.createElement('meta');
      author.setAttribute('name', 'author');
      document.head.appendChild(author);
    }
    author.setAttribute('content', 'GariMoto Team');

    // Language and locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', 'en_KE');

    // Verify HTTPS is being used
    if (canonical.startsWith('http://')) {
      console.warn('Non-HTTPS URL detected in canonical link');
    }

  }, [location.pathname, title, description, keywords, canonicalUrl, image, type]);

  return null;
};

export default SEOPermalinks;
