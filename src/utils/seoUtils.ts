// SEO utility functions

export const generateStructuredData = (type: string, data: any) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  });
  return script;
};

export const addStructuredData = (type: string, data: any) => {
  const existingScript = document.querySelector(`script[type="application/ld+json"][data-type="${type}"]`);
  if (existingScript) {
    existingScript.remove();
  }
  
  const script = generateStructuredData(type, data);
  script.setAttribute('data-type', type);
  document.head.appendChild(script);
};

export const updatePageSEO = (pageData: {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}) => {
  // Update title
  document.title = pageData.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', pageData.description);
  }
  
  // Update meta keywords
  if (pageData.keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', pageData.keywords);
    }
  }
  
  // Update canonical URL
  if (pageData.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageData.canonicalUrl);
  }
};

export const trackPageView = (pageName: string) => {
  // Google Analytics 4 page view tracking
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageName,
      page_location: window.location.href
    });
  }
};

export const trackEvent = (eventName: string, parameters: any = {}) => {
  // Google Analytics 4 event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
};