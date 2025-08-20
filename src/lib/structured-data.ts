export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NartaQ",
  "description": "Elite platform connecting funded startups with smart investors and expert talent",
  "url": "https://nartaq.com",
  "logo": "https://nartaq.com/logo/main-tr.svg",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+33-1-234-567-89",
      "contactType": "customer service",
      "email": "contact@nartaq.com"
    }
  ],
  "sameAs": [
    "https://linkedin.com/company/nartaq",
    "https://twitter.com/nartaq"
  ],
  "founders": [
    {
      "@type": "Person",
      "name": "NartaQ Team"
    }
  ],
  "foundingDate": "2024",
  "industry": "Technology",
  "numberOfEmployees": "10-50",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NartaQ",
  "url": "https://nartaq.com",
  "description": "Elite platform connecting funded startups with smart investors and expert talent",
  "publisher": {
    "@type": "Organization",
    "name": "NartaQ"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nartaq.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Premium Investment & Talent Platform",
  "description": "Exclusive platform connecting funded startups, smart investors, and expert service providers",
  "provider": {
    "@type": "Organization",
    "name": "NartaQ"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "France"
    },
    {
      "@type": "Country", 
      "name": "Tunisia"
    }
  ],
  "serviceType": "Investment Platform",
  "audience": [
    {
      "@type": "Audience",
      "name": "Startups"
    },
    {
      "@type": "Audience",
      "name": "Investors" 
    },
    {
      "@type": "Audience",
      "name": "Service Providers"
    }
  ]
}