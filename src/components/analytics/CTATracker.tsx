'use client'

import React, { ReactElement, cloneElement } from 'react'
import { trackCTAClick } from '@/lib/analytics/unified-tracker'
import type { CTAEventData } from '@/lib/analytics/types'

interface ClickableProps {
  onClick?: (event: React.MouseEvent) => void
}

interface CTATrackerProps {
  children: ReactElement<ClickableProps>
  ctaText: string
  ctaType: CTAEventData['ctaType']
  ctaLocation: string
  ctaDestination?: string
  ctaVariant?: string
  pageContext?: string
  trackOnMount?: boolean
  disabled?: boolean
}

export default function CTATracker({
  children,
  ctaText,
  ctaType,
  ctaLocation,
  ctaDestination,
  ctaVariant,
  pageContext,
  trackOnMount = false,
  disabled = false
}: CTATrackerProps) {
  const handleClick = (event: React.MouseEvent) => {
    if (!disabled) {
      trackCTAClick(
        ctaText,
        ctaType,
        ctaLocation,
        ctaDestination,
        ctaVariant
      )
    }

    // Call original onClick if it exists
    if (children.props.onClick) {
      children.props.onClick(event)
    }
  }

  // Track CTA view on mount if requested
  React.useEffect(() => {
    if (trackOnMount && !disabled) {
      import('@/lib/analytics/unified-tracker').then(({ trackEvent }) => {
        trackEvent('cta_viewed', {
          cta_text: ctaText,
          cta_type: ctaType,
          cta_location: ctaLocation,
          page_context: pageContext || (typeof window !== 'undefined' ? window.location.pathname : undefined),
        })
      })
    }
  }, [trackOnMount, disabled, ctaText, ctaType, ctaLocation, pageContext])

  return cloneElement(children, {
    ...children.props,
    onClick: handleClick,
  } as any)
}

// Convenience wrapper components for common CTA types
export function ButtonTracker(props: Omit<CTATrackerProps, 'ctaType'>) {
  return <CTATracker {...props} ctaType="button" />
}

export function LinkTracker(props: Omit<CTATrackerProps, 'ctaType'>) {
  return <CTATracker {...props} ctaType="link" />
}

export function NavTracker(props: Omit<CTATrackerProps, 'ctaType'>) {
  return <CTATracker {...props} ctaType="nav" />
}

export function HeroTracker(props: Omit<CTATrackerProps, 'ctaType'>) {
  return <CTATracker {...props} ctaType="hero" />
}