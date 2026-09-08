import { useEffect } from 'react';

export function useSEO(title: string, description: string, keywords: string, schema?: object) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set meta tags
    const setMetaTag = (selector: string, attribute: string, value: string, contentAttribute = 'content') => {
      let meta = document.querySelector(`meta[${attribute}="${selector}"]`);
      if (meta) {
        meta.setAttribute(contentAttribute, value);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, selector);
        meta.setAttribute(contentAttribute, value);
        document.head.appendChild(meta);
      }
    };

    setMetaTag('description', 'name', description);
    setMetaTag('keywords', 'name', keywords);
    
    // Open Graph Tags
    setMetaTag('og:title', 'property', title);
    setMetaTag('og:description', 'property', description);
    setMetaTag('og:url', 'property', window.location.href);
    setMetaTag('og:type', 'property', 'website');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.href);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', window.location.href);
      document.head.appendChild(canonical);
    }

    // Indexing
    setMetaTag('robots', 'name', 'index, follow');

    // Handle Schema markup
    let schemaScript = document.getElementById('dynamic-schema');
    if (schemaScript) {
      schemaScript.remove();
    }
    
    // Always include the default LocalBusiness / TravelAgency or Product schema
    const isPackage = window.location.pathname.includes('/tour-packages');
    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": isPackage ? "Product" : "TravelAgency",
      "name": isPackage ? title : "Logaa Holidays",
      "image": "https://logaaholidays.com/logo.png",
      "url": window.location.href,
      ...(isPackage ? {
        "description": description
      } : {
        "telephone": "+91 73973 29776",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "T247, Sector T Type, Housing Board, Ellis Nagar",
          "addressLocality": "Madurai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "625016",
          "addressCountry": "IN"
        }
      })
    };
    
    const finalSchema = schema ? [defaultSchema, schema] : defaultSchema;
    
    schemaScript = document.createElement('script');
    schemaScript.setAttribute('type', 'application/ld+json');
    schemaScript.setAttribute('id', 'dynamic-schema');
    schemaScript.textContent = JSON.stringify(finalSchema);
    document.head.appendChild(schemaScript);

    return () => {
      const currentSchema = document.getElementById('dynamic-schema');
      if (currentSchema) {
        currentSchema.remove();
      }
    };
  }, [title, description, keywords, schema]);
}
