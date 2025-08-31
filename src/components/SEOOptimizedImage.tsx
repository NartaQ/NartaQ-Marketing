import Image from 'next/image'
import { ImageProps } from 'next/image'

interface SEOOptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string
  title?: string
  loading?: 'lazy' | 'eager'
}

/**
 * SEO-optimized Image component following Google's recommendations:
 * - Descriptive alt text for screen readers and search engines
 * - Proper lazy loading for performance
 * - Optional title attribute for hover tooltips
 * - Next.js Image optimization built-in
 */
export default function SEOOptimizedImage({
  alt,
  title,
  loading = 'lazy',
  ...props
}: SEOOptimizedImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      title={title || alt}
      loading={loading}
      // Enable priority for above-the-fold images
      priority={loading === 'eager'}
      // Quality optimization
      quality={85}
      // Enable responsive images
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}

/**
 * Hero image component for above-the-fold content
 */
export function HeroImage(props: SEOOptimizedImageProps) {
  return (
    <SEOOptimizedImage
      {...props}
      loading="eager"
      priority={true}
      sizes="(max-width: 768px) 100vw, 80vw"
    />
  )
}

/**
 * Team member image with consistent sizing and fallbacks
 */
export function TeamImage({ 
  alt, 
  src, 
  fallbackInitials,
  ...props 
}: SEOOptimizedImageProps & { fallbackInitials: string }) {
  return (
    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] p-0.5">
      <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
        <SEOOptimizedImage
          {...props}
          src={src}
          alt={alt}
          width={96}
          height={96}
          className="w-full h-full object-cover rounded-2xl"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            if (target.parentElement) {
              target.parentElement.innerHTML = `<span class="text-2xl font-bold text-white">${fallbackInitials}</span>`
            }
          }}
        />
      </div>
    </div>
  )
}