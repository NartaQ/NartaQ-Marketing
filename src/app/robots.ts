import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nartaq.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/static/', // Allow Next.js static assets (JS, CSS, images)
          '/_next/image', // Allow Next.js optimized images
        ],
        disallow: [
          '/api/', 
          '/admin/', 
          '/_next/server/', // Block server-side routes
          '/_vercel/',
          '/private/',
          '/temp/',
          '/preview/',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/_next/static/',
          '/_next/image',
        ],
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/_next/static/',
          '/_next/image',
        ],
        disallow: ['/api/', '/admin/', '/private/'],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}