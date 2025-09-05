'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { X, ChevronRight } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { client } from '../../lib/sanity'

interface CallToAction {
  _id: string
  title: string
  description: any // Rich text content from Sanity
  clickableText: string
  link: string
  linkType: 'external' | 'internal' | 'email' | 'phone'
  openInNewTab: boolean
  showLabel: boolean
}

export default function HiringBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [callToActions, setCallToActions] = useState<CallToAction[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [loading, setLoading] = useState(true)
  const [textKey, setTextKey] = useState(0) // Force re-render for text animation
  const [isPaused, setIsPaused] = useState(false)
  const [needsScrolling, setNeedsScrolling] = useState(false)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Fetch call-to-actions from Sanity
  useEffect(() => {
    const fetchCallToActions = async () => {
      try {
        // Fetch CTAs with showLabel true, including description rich text
        const query = `*[_type == "callToAction" && showLabel == true] | order(_createdAt desc) {
          _id,
          title,
          description,
          clickableText,
          link,
          linkType,
          openInNewTab,
          showLabel
        }`
        const data = await client.fetch(query)

        setCallToActions(data)
      } catch (error) {
        console.error('Error fetching call-to-actions:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCallToActions()
  }, [])

  // Auto-cycle through call-to-actions
  useEffect(() => {
    if (callToActions.length <= 1 || isPaused) return

    const interval = setInterval(() => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % callToActions.length)
        setTextKey((prev) => prev + 1) // Trigger text animation reset
        setIsAnimating(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [callToActions.length, isPaused])

  // Check if text needs scrolling
  useEffect(() => {
    const checkScrolling = () => {
      if (descriptionRef.current && containerRef.current) {
        const descriptionWidth = descriptionRef.current.scrollWidth
        const containerWidth = containerRef.current.clientWidth - 120 // Account for buttons and padding
        setNeedsScrolling(descriptionWidth > containerWidth)
      }
    }

    checkScrolling()
    window.addEventListener('resize', checkScrolling)
    return () => window.removeEventListener('resize', checkScrolling)
  }, [currentIndex, callToActions])

  const handleNextCTA = () => {
    if (callToActions.length <= 1) return

    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % callToActions.length)
      setTextKey((prev) => prev + 1)
      setIsAnimating(false)
    }, 300)
  }

  if (!isVisible) return null

  if (loading) {
    return (
      <div className='fixed top-0 left-0 right-0 z-[100] bg-[var(--lion)] text-black'>
        <div className='relative flex items-center justify-center px-4 py-2 text-sm font-medium'>
          <div className='flex items-center gap-2'>
            <span className='hidden sm:inline'>🚀</span>
            <span>Loading...</span>
          </div>
        </div>
      </div>
    )
  }
  console.log(callToActions)
  if (callToActions.length === 0) return null

  const currentCTA = callToActions[currentIndex]

  // Safety check
  if (!currentCTA) return null

  const getLinkProps = (cta: CallToAction) => {
    const props: any = {
      href: cta.link,
      className:
        'underline hover:no-underline transition-all duration-200 font-semibold hover:opacity-80',
    }

    if (cta.linkType === 'external' || cta.openInNewTab) {
      props.target = '_blank'
      props.rel = 'noopener noreferrer'
    }

    return props
  }

  // Create portable text components for banner (simplified)
  const portableTextComponents = {
    block: {
      normal: ({ children }: any) => <span className='inline'>{children}</span>,
      h1: ({ children }: any) => (
        <span className='font-bold inline'>{children}</span>
      ),
      h2: ({ children }: any) => (
        <span className='font-semibold inline'>{children}</span>
      ),
      h3: ({ children }: any) => (
        <span className='font-medium inline'>{children}</span>
      ),
      h4: ({ children }: any) => (
        <span className='font-medium inline'>{children}</span>
      ),
    },
    marks: {
      strong: ({ children }: any) => (
        <strong className='font-bold'>{children}</strong>
      ),
      em: ({ children }: any) => <em className='italic'>{children}</em>,
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          className='underline hover:no-underline'
          target={value.href?.startsWith('http') ? '_blank' : undefined}
          rel={
            value.href?.startsWith('http') ? 'noopener noreferrer' : undefined
          }
        >
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }: any) => <span className='inline'>{children}</span>,
    },
    listItem: {
      bullet: ({ children }: any) => <span className='inline'>{children}</span>,
    },
  }

  return (
    <div className='fixed top-0 left-0 right-0 z-[100] bg-[var(--lion)] text-black'>
      <div
        ref={containerRef}
        className='relative flex items-center justify-center px-4 py-3 text-sm font-medium overflow-hidden'
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${
            isAnimating
              ? 'opacity-0 transform translate-y-2'
              : 'opacity-100 transform translate-y-0'
          }`}
        >
          <div className='flex items-center gap-3 max-w-[calc(100vw-140px)] overflow-hidden'>
            {/* Description with PortableText */}
            <div
              ref={descriptionRef}
              key={textKey}
              className={`inline-block ${
                needsScrolling
                  ? `whitespace-nowrap ${isPaused ? 'animate-marquee-pause' : 'animate-marquee'}`
                  : 'whitespace-nowrap truncate'
              }`}
            >
              <PortableText
                value={currentCTA.description}
                components={portableTextComponents}
              />
            </div>

            {/* Call to action link */}
            <Link
              {...getLinkProps(currentCTA)}
              className='flex-shrink-0 font-semibold underline'
            >
              {currentCTA.clickableText}
            </Link>
          </div>
        </div>

        {/* Next button for multiple CTAs */}
        {callToActions.length > 1 && (
          <button
            onClick={handleNextCTA}
            className='absolute left-3 p-1.5 hover:bg-black/10 rounded-full transition-colors duration-200 flex items-center justify-center'
            aria-label={`Next call to action (${currentIndex + 1} of ${callToActions.length})`}
            title={`Next call to action (${currentIndex + 1} of ${callToActions.length})`}
          >
            <ChevronRight size={14} className='text-black/70' />
          </button>
        )}

        <button
          onClick={() => setIsVisible(false)}
          className='absolute right-2 p-1 hover:bg-black/10 rounded-full transition-colors duration-200'
          aria-label='Close banner'
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
