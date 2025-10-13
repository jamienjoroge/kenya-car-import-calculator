import React from 'react';

interface StructuredDataProps {
  type: 'calculator' | 'article' | 'faq';
  data: any;
  dateModified?: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data, dateModified }) => {
  const getSchema = () => {
    switch (type) {
      case 'calculator':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": data.name,
          "applicationCategory": "FinanceApplication",
          "applicationSubCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "url": data.url,
          "description": data.description,
          "featureList": data.features,
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "3127",
            "bestRating": "5"
          }
        };
      
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": "Kenya Car Import Calculator"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Kenya Car Import Calculator",
            "logo": {
              "@type": "ImageObject",
              "url": "https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": dateModified || data.dateModified,
          "articleSection": "Car Import"
        };
      
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.questions.map((q: any, index: number) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        };
      
      default:
        return {};
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }}
    />
  );
};

export default StructuredData;