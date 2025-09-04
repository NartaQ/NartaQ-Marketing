import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nartaq.com'
  
  // Helper function to escape XML entities
  const escapeXml = (unsafe: string) => {
    return unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case '<': return '&lt;'
        case '>': return '&gt;'
        case '&': return '&amp;'
        case '\'': return '&apos;'
        case '"': return '&quot;'
        default: return c
      }
    })
  }
  
  const pages = [
    // Home page with its images
    {
      url: baseUrl,
      images: [
        
        {
          loc: `${baseUrl}/logo/main-tr.svg`,
          caption: 'NartaQ Main Logo - AI-Powered Startup Funding Platform',
          title: 'NartaQ Main Logo'
        }
      ]
    },
    
    // About page with its images
    {
      url: `${baseUrl}/about`,
      images: [
        {
          loc: `${baseUrl}/logo/main-tr.svg`,
          caption: 'NartaQ Main Logo - AI-Powered Startup Funding Platform',
          title: 'NartaQ Main Logo'
        },
        {
          loc: `${baseUrl}/images/team/riadh.avif`,
          caption: 'Riadh Jouini - Co-Founder and CEO of NartaQ',
          title: 'Riadh Jouini CEO'
        },
        {
          loc: `${baseUrl}/images/team/jesser.avif`,
          caption: 'Jesser Bedoui - Co-Founder and CTO of NartaQ',
          title: 'Jesser Bedoui CTO'
        }
      ]
    },
    
    // For Founders page
    {
      url: `${baseUrl}/for-founders`,
      images: [
        {
          loc: `${baseUrl}/logo/main-tr.svg`,
          caption: 'NartaQ Main Logo - AI-Powered Startup Funding Platform',
          title: 'NartaQ Main Logo'
        },
        
              ]
    },
    
    // For Investors page
    {
      url: `${baseUrl}/for-investors`,
      images: [
        {
          loc: `${baseUrl}/logo/main-tr.svg`,
          caption: 'NartaQ Main Logo - AI-Powered Startup Funding Platform',
          title: 'NartaQ Main Logo'
        },
        {
          loc: `${baseUrl}/logo/investor.png`,
          caption: 'NartaQ Investor Portal - Investment Opportunities',
          title: 'NartaQ Investor Portal'
        },
              ]
    },
    
    // Application pages
    {
      url: `${baseUrl}/apply`,
      images: [
        {
          loc: `${baseUrl}/logo/main-tr.svg`,
          caption: 'NartaQ Main Logo - Apply to Join Platform',
          title: 'NartaQ Application Logo'
        }
      ]
    },
    
    // Careers page
    {
      url: `${baseUrl}/careers`,
      images: [
        {
          loc: `${baseUrl}/logo/main-tr.svg`,
          caption: 'NartaQ Careers - Join Our Team',
          title: 'NartaQ Careers Logo'
        },
        {
          loc: `${baseUrl}/images/team/riadh.avif`,
          caption: 'Riadh Jouini - Co-Founder and CEO, Meet Our Leadership',
          title: 'Leadership Team - Riadh'
        },
        {
          loc: `${baseUrl}/images/team/jesser.avif`,
          caption: 'Jesser Bedoui - Co-Founder and CTO, Meet Our Leadership',
          title: 'Leadership Team - Jesser'
        }
      ]
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page => `  <url>
    <loc>${escapeXml(page.url)}</loc>
${page.images.map(image => `    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>
      <image:caption>${escapeXml(image.caption)}</image:caption>
      <image:title>${escapeXml(image.title)}</image:title>
    </image:image>`).join('\n')}
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  })
}