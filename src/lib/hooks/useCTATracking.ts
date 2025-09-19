'use client'

import { useCallback } from 'react'
import { trackCTAClick } from '../analytics/unified-tracker'
import type { CTAEventData } from '../analytics/types'

export type CTAType = CTAEventData['ctaType']

interface UseCTATrackingOptions {
  ctaType: CTAType
  ctaLocation: string
  ctaVariant?: string
  pageContext?: string
}

export function useCTATracking(options: UseCTATrackingOptions) {
  const { ctaType, ctaLocation, ctaVariant, pageContext } = options

  const trackClick = useCallback((
    ctaText: string,
    ctaDestination?: string,
    additionalData?: Record<string, any>
  ) => {
    trackCTAClick(
      ctaText,
      ctaType,
      ctaLocation,
      ctaDestination,
      ctaVariant
    )

    // Track any additional custom data
    if (additionalData) {
      import('../analytics/unified-tracker').then(({ trackEvent }) => {
        trackEvent('cta_interaction', {
          cta_text: ctaText,
          cta_type: ctaType,
          cta_location: ctaLocation,
          page_context: pageContext,
          ...additionalData
        })
      })
    }
  }, [ctaType, ctaLocation, ctaVariant, pageContext])

  const createClickHandler = useCallback((
    ctaText: string,
    ctaDestination?: string,
    originalHandler?: () => void
  ) => {
    return () => {
      trackClick(ctaText, ctaDestination)
      originalHandler?.()
    }
  }, [trackClick])

  return {
    trackClick,
    createClickHandler
  }
}

// Convenience hooks for common CTA types
export function useButtonTracking(location: string, variant?: string) {
  return useCTATracking({
    ctaType: 'button',
    ctaLocation: location,
    ctaVariant: variant
  })
}

export function useLinkTracking(location: string) {
  return useCTATracking({
    ctaType: 'link',
    ctaLocation: location
  })
}

export function useNavTracking(location: string) {
  return useCTATracking({
    ctaType: 'nav',
    ctaLocation: location
  })
}

export function useHeroTracking(variant?: string) {
  return useCTATracking({
    ctaType: 'hero',
    ctaLocation: 'hero_section',
    ctaVariant: variant
  })
}