import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'

interface SEOLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
  rel?: string
  title?: string
  'aria-label'?: string
}

/**
 * SEO-optimized Link component following Google's guidelines:
 * - Descriptive anchor text that tells users and search engines about the linked page
 * - Proper rel attributes for external links
 * - Accessibility support with aria-labels
 * - Visual indicators for external links
 */
export default function SEOLink({
  href,
  children,
  className = '',
  external = false,
  rel,
  title,
  'aria-label': ariaLabel,
  ...props
}: SEOLinkProps) {
  const isExternal = external || href.startsWith('http')
  
  // Determine appropriate rel attributes
  const linkRel = rel || (isExternal ? 'noopener noreferrer' : undefined)
  
  const linkProps = {
    href,
    className,
    rel: linkRel,
    title: title || (typeof children === 'string' ? children : undefined),
    'aria-label': ariaLabel,
    ...(isExternal && { target: '_blank' }),
    ...props,
  }

  const content = (
    <>
      {children}
      {isExternal && (
        <ExternalLink 
          className="inline w-3 h-3 ml-1 opacity-70" 
          aria-hidden="true" 
        />
      )}
    </>
  )

  if (isExternal) {
    return <a {...linkProps}>{content}</a>
  }

  return (
    <Link {...linkProps}>
      {content}
    </Link>
  )
}

/**
 * Call-to-action link with arrow indicator
 */
export function CTALink({ 
  href, 
  children, 
  className = '', 
  ...props 
}: Omit<SEOLinkProps, 'external'>) {
  return (
    <SEOLink
      href={href}
      className={`inline-flex items-center gap-2 ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </SEOLink>
  )
}

/**
 * Navigation breadcrumb link
 */
export function BreadcrumbLink({ 
  href, 
  children, 
  isLast = false,
  ...props 
}: SEOLinkProps & { isLast?: boolean }) {
  if (isLast) {
    return (
      <span className="text-[#a98b5d] font-medium" aria-current="page">
        {children}
      </span>
    )
  }

  return (
    <SEOLink
      href={href}
      className="text-[#dcd7ce]/80 hover:text-[#a98b5d] transition-colors"
      {...props}
    >
      {children}
    </SEOLink>
  )
}

/**
 * Related content link for internal linking strategy
 */
export function RelatedLink({ 
  href, 
  title, 
  description, 
  category,
  ...props 
}: {
  href: string
  title: string
  description: string
  category: string
} & Omit<SEOLinkProps, 'children' | 'href'>) {
  return (
    <SEOLink
      href={href}
      className="block p-4 border border-[#a98b5d]/20 rounded-xl bg-gradient-to-r from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 group"
      title={`Read more about ${title}`}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <span className="inline-block px-2 py-1 text-xs font-medium text-[#a98b5d] bg-[#a98b5d]/10 rounded-full mb-2">
            {category}
          </span>
          <h3 className="font-semibold text-[#dcd7ce] mb-2 group-hover:text-[#a98b5d] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[#dcd7ce]/80 line-clamp-2">
            {description}
          </p>
        </div>
        <ArrowRight className="w-4 h-4 text-[#a98b5d] ml-2 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
      </div>
    </SEOLink>
  )
}

/**
 * Footer link with proper SEO attributes
 */
export function FooterLink({ 
  href, 
  children, 
  className = "text-[#dcd7ce]/70 hover:text-[#a98b5d] transition-colors text-sm",
  ...props 
}: SEOLinkProps) {
  return (
    <SEOLink
      href={href}
      className={className}
      {...props}
    >
      {children}
    </SEOLink>
  )
}