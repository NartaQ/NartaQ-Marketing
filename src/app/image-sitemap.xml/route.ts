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
          loc: `${baseUrl}/images/home-og.png`,
          caption: 'NartaQ Home Page OpenGraph Image - AI-Powered Startup Funding Platform',
          title: 'NartaQ Home OG Image'
        },
        {
          loc: `${baseUrl}/logo/main-tr.svg`,
          caption: 'NartaQ Main Logo - AI-Powered Startup Funding Platform',
          title: 'NartaQ Main Logo'
        },
        {
          loc: `${baseUrl}/images/home/ai-models.png`,
          caption: 'AI Models Integration - NartaQ Platform Features',
          title: 'AI Models Integration'
        },
        {
          loc: `${baseUrl}/images/home/api.png`,
          caption: 'API Integration Features - NartaQ Platform',
          title: 'API Integration'
        },
        {
          loc: `${baseUrl}/images/home/integrations1.png`,
          caption: 'Platform Integrations - NartaQ Ecosystem',
          title: 'Platform Integrations'
        },
        {
          loc: `${baseUrl}/images/home/unified.jpg`,
          caption: 'Unified Platform Experience - NartaQ Features',
          title: 'Unified Platform'
        },
        {
          loc: `${baseUrl}/images/home/multi-sub.png`,
          caption: 'Multi-Subscription Management - NartaQ Features',
          title: 'Multi-Subscription Management'
        },
        {
          loc: `${baseUrl}/images/home/search.png`,
          caption: 'Search Functionality - NartaQ Platform',
          title: 'Search Features'
        },
        {
          loc: `${baseUrl}/images/home/websearch.png`,
          caption: 'Web Search Integration - NartaQ Platform',
          title: 'Web Search Integration'
        },
        {
          loc: `${baseUrl}/images/home/history.png`,
          caption: 'History Tracking - NartaQ Platform Features',
          title: 'History Tracking'
        },
        {
          loc: `${baseUrl}/images/home/prompts2.png`,
          caption: 'Prompts Management - NartaQ AI Features',
          title: 'Prompts Management'
        },
        {
          loc: `${baseUrl}/images/home/multilingual.png`,
          caption: 'Multilingual Support - NartaQ Global Platform',
          title: 'Multilingual Support'
        },
        {
          loc: `${baseUrl}/images/brand-logos/openai.svg`,
          caption: 'OpenAI Integration - NartaQ AI Partners',
          title: 'OpenAI Partnership'
        },
        {
          loc: `${baseUrl}/images/brand-logos/claude.svg`,
          caption: 'Claude AI Integration - NartaQ AI Partners',
          title: 'Claude AI Partnership'
        },
        {
          loc: `${baseUrl}/images/brand-logos/google.svg`,
          caption: 'Google Integration - NartaQ Platform Partners',
          title: 'Google Partnership'
        },
        {
          loc: `${baseUrl}/images/brand-logos/microsoft.svg`,
          caption: 'Microsoft Integration - NartaQ Platform Partners',
          title: 'Microsoft Partnership'
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
          loc: `${baseUrl}/images/team/riadh.jpeg`,
          caption: 'Riadh Jouini - Co-Founder and CEO of NartaQ',
          title: 'Riadh Jouini CEO'
        },
        {
          loc: `${baseUrl}/images/team/jesser.jpeg`,
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
        {
          loc: `${baseUrl}/images/home/ai-models.png`,
          caption: 'AI Models Integration for Founders - NartaQ Platform',
          title: 'AI Models for Founders'
        },
        {
          loc: `${baseUrl}/images/home/api.png`,
          caption: 'API Features for Startup Founders - NartaQ Platform',
          title: 'Founder API Features'
        }
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
        {
          loc: `${baseUrl}/images/home/search.png`,
          caption: 'Investor Search and Discovery - NartaQ Platform',
          title: 'Investor Search Features'
        }
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
          loc: `${baseUrl}/images/team/riadh.jpeg`,
          caption: 'Riadh Jouini - Co-Founder and CEO, Meet Our Leadership',
          title: 'Leadership Team - Riadh'
        },
        {
          loc: `${baseUrl}/images/team/jesser.jpeg`,
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