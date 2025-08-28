export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NartaQ",
  "description": "AI-powered platform connecting founders with investors through intelligent matching and automated due diligence",
  "url": "https://nartaq.com",
  "logo": "https://nartaq.com/logo/main-tr.svg",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@nartaq.com"
    }
  ],
  "foundingDate": "2024",
  "knowsAbout": [
    "Investment Matching",
    "Startup Funding",
    "Due Diligence",
    "Artificial Intelligence",
    "Financial Technology"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NartaQ",
  "url": "https://nartaq.com",
  "description": "AI-powered platform connecting founders with investors through intelligent matching and automated due diligence",
  "publisher": {
    "@type": "Organization",
    "name": "NartaQ"
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI-Powered Investment Platform",
  "description": "Connecting founders with investors through intelligent matching and automated due diligence",
  "provider": {
    "@type": "Organization",
    "name": "NartaQ",
    "url": "https://nartaq.com"
  },
  "serviceType": "Investment Platform",
  "category": "Financial Technology"
}