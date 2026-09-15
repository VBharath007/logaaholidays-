import { useEffect } from 'react';

export interface SEOOptions {
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export function useSEO(
  title: string, 
  description: string, 
  keywords: string, 
  schema?: object,
  options?: SEOOptions
) {
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

    // Canonical URL calculation
    const defaultSiteOrigin = typeof window !== 'undefined' && window.location.origin.includes('localhost')
      ? 'https://logaaholidays.com'
      : (typeof window !== 'undefined' ? window.location.origin : 'https://logaaholidays.com');

    const cleanPath = typeof window !== 'undefined' 
      ? (window.location.pathname.endsWith('/') && window.location.pathname !== '/'
          ? window.location.pathname.slice(0, -1)
          : window.location.pathname)
      : '/';

    const targetCanonical = options?.canonicalUrl || `${defaultSiteOrigin}${cleanPath}`;
    const defaultSocialImage = 'https://logaaholidays.com/og-image.jpg';

    // Canonical tag: ensure exactly ONE canonical tag exists in <head>
    const allCanonicals = document.querySelectorAll('link[rel="canonical"]');
    if (allCanonicals.length > 1) {
      allCanonicals.forEach((el, index) => {
        if (index > 0) el.remove();
      });
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', targetCanonical);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', targetCanonical);
      document.head.appendChild(canonical);
    }
    
    // Open Graph Tags
    const ogTitle = options?.ogTitle || title;
    const ogDesc = options?.ogDescription || description;
    const ogUrl = options?.ogUrl || targetCanonical;
    const ogImg = options?.ogImage || defaultSocialImage;

    setMetaTag('og:title', 'property', ogTitle);
    setMetaTag('og:description', 'property', ogDesc);
    setMetaTag('og:url', 'property', ogUrl);
    setMetaTag('og:type', 'property', 'website');
    setMetaTag('og:image', 'property', ogImg);

    // Twitter Card Tags
    const twitterCard = options?.twitterCard || 'summary_large_image';
    const twitterTitle = options?.twitterTitle || ogTitle;
    const twitterDesc = options?.twitterDescription || ogDesc;
    const twitterImg = options?.twitterImage || ogImg;

    setMetaTag('twitter:card', 'name', twitterCard);
    setMetaTag('twitter:title', 'name', twitterTitle);
    setMetaTag('twitter:description', 'name', twitterDesc);
    setMetaTag('twitter:image', 'name', twitterImg);

    // Indexing
    setMetaTag('robots', 'name', 'index, follow');

    // Clean up any stray or legacy schemas with "addressLocality": "India"
    document.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
      if (script.textContent && script.textContent.includes('"addressLocality": "India"')) {
        script.remove();
      }
    });

    // Handle Schema markup: remove previous dynamic schema
    let schemaScript = document.getElementById('dynamic-schema');
    if (schemaScript) {
      schemaScript.remove();
    }
    
    // On Homepage, exactly ONE TravelAgency schema is server-rendered via #travelagency-schema
    const isHomePage = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '');
    if (isHomePage) {
      // Ensure only the primary #travelagency-schema exists on the Homepage
      const allTravelAgencySchemas = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).filter(
        s => s.textContent && s.textContent.includes('"TravelAgency"')
      );
      if (allTravelAgencySchemas.length > 1) {
        allTravelAgencySchemas.forEach((s, idx) => {
          if (s.id !== 'travelagency-schema' && idx > 0) {
            s.remove();
          }
        });
      }
      return () => {
        const currentSchema = document.getElementById('dynamic-schema');
        if (currentSchema) {
          currentSchema.remove();
        }
      };
    }

    // For non-homepage routes, inject page-specific Product or custom schema
    const isPackage = typeof window !== 'undefined' && window.location.pathname.includes('/tour-packages');
    if (schema || isPackage) {
      const defaultSchema = {
        "@context": "https://schema.org",
        "@type": isPackage ? "Product" : "TravelAgency",
        "name": isPackage ? title : "Logaa Holidays",
        "image": defaultSocialImage,
        "url": targetCanonical,
        ...(isPackage ? {
          "description": description
        } : {
          "telephone": "+91 73973 29776",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "70 Feet Road, T S Colony, Housing Board, Ellis Nagar, Madurai, Tamil Nadu - 625016",
            "addressLocality": "Madurai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "625016",
            "addressCountry": "IN"
          }
        })
      };
      
      const finalSchema = schema ? (isPackage ? schema : [defaultSchema, schema]) : defaultSchema;
      
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('id', 'dynamic-schema');
      schemaScript.textContent = JSON.stringify(finalSchema);
      document.head.appendChild(schemaScript);
    }

    return () => {
      const currentSchema = document.getElementById('dynamic-schema');
      if (currentSchema) {
        currentSchema.remove();
      }
    };
  }, [title, description, keywords, schema, options]);
}
