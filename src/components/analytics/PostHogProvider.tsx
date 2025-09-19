'use client'

import { useEffect, useState } from 'react'
import { analyticsTracker } from '@/lib/analytics/unified-tracker'
import { cookieManager } from '@/lib/cookie-consent'
import { CookieConsentBanner } from '@/lib/cookie-consent'

export default function AnalyticsProvider() {
  const [showCookieBanner, setShowCookieBanner] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    // Check if we should show cookie banner
    if (!cookieManager.hasGivenConsent() && cookieManager.isGDPRRegion()) {
      setShowCookieBanner(true)
    }

    // Initialize analytics based on consent
    const initializeAnalytics = () => {
      const hasAnalyticsConsent = cookieManager.hasConsent('analytics')
      setAnalyticsEnabled(hasAnalyticsConsent)

      // Initialize analytics if user has given consent OR if no consent system is in place
      if (hasAnalyticsConsent || !cookieManager.hasGivenConsent()) {
        analyticsTracker.initialize()
        analyticsTracker.trackPageView()
      }
    }

    // Initialize on mount
    initializeAnalytics()

    // Listen for consent changes
    const handleConsentChange = () => {
      initializeAnalytics()
      setShowCookieBanner(false)
    }

    window.addEventListener('cookieConsentChange', handleConsentChange)

    return () => {
      window.removeEventListener('cookieConsentChange', handleConsentChange)
    }
  }, [])

  return (
    <>
      {showCookieBanner && (
        <CookieConsentBanner onClose={() => setShowCookieBanner(false)} />
      )}
    </>
  )
}