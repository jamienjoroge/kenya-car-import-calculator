import React from 'react';

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

const SoftwareApplicationSchema: React.FC<SoftwareApplicationSchemaProps> = ({ 
  name, 
  description, 
  url, 
  applicationCategory,
  operatingSystem = "Any",
  offers = { price: "0", priceCurrency: "KES" }
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "offers": {
      "@type": "Offer",
      "price": offers.price,
      "priceCurrency": offers.priceCurrency
    },
    "author": {
      "@type": "Organization",
      "name": "Garimoto",
      "url": "https://garimoto.co.ke"
    },
    "provider": {
      "@type": "Organization",
      "name": "Garimoto",
      "url": "https://garimoto.co.ke"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SoftwareApplicationSchema;