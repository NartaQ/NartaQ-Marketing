import { BreadcrumbLink } from './SEOLink'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * SEO-optimized Breadcrumbs component following Google's guidelines:
 * - Structured data markup for rich snippets
 * - Proper navigation semantics with aria-label
 * - Visual separators between items
 * - Home icon for the root level
 */
export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Generate structured data for breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://nartaq.com${item.href}` })
    }))
  }

  return (
    <>
      {/* Structured data for Google's breadcrumb rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      
      <nav 
        aria-label="Breadcrumb navigation"
        className={`py-4 ${className}`}
      >
        <ol className="flex items-center space-x-2 text-sm">
          <li className="flex items-center">
            <BreadcrumbLink 
              href="/"
              aria-label="Go to homepage"
              className="text-[#dcd7ce]/80 hover:text-[#a98b5d] transition-colors flex items-center"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </BreadcrumbLink>
          </li>
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            
            return (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-[#dcd7ce]/50 mx-2" aria-hidden="true" />
                <BreadcrumbLink
                  href={item.href || '#'}
                  isLast={isLast}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </BreadcrumbLink>
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

/**
 * Hook to generate breadcrumb items based on pathname
 */
export function useBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  
  const breadcrumbMap: Record<string, string> = {
    'about': 'About Us',
    'for-founders': 'For Founders',
    'for-investors': 'For Investors', 
    'apply': 'Apply Now',
    'founders': 'Founder Application',
    'investors': 'Investor Application',
    'faq': 'Frequently Asked Questions',
    'legal': 'Legal Information',
    'terms': 'Terms of Service',
    'privacy': 'Privacy Policy',
    'cookies': 'Cookie Policy',
    'dmca': 'DMCA Policy'
  }
  
  const breadcrumbs: BreadcrumbItem[] = []
  let currentPath = ''
  
  segments.forEach((segment) => {
    currentPath += `/${segment}`
    const label = breadcrumbMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    
    breadcrumbs.push({
      label,
      href: currentPath
    })
  })
  
  return breadcrumbs
}