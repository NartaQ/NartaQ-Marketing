'use client'

import { useEffect, useState } from 'react'
import { trackEvent } from '@/lib/analytics/unified-tracker'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export type { CookiePreferences }

interface CookieConsentData {
  preferences: CookiePreferences
  timestamp: string
  version: string
}

const COOKIE_CONSENT_KEY = 'nartaq_cookie_consent'
const COOKIE_VERSION = '1.0'
const CONSENT_DURATION_DAYS = 365

export class CookieManager {
  private static instance: CookieManager
  private preferences: CookiePreferences = {
    necessary: true, // Always true, required for site functionality
    analytics: false,
    marketing: false
  }

  private constructor() {
    this.loadPreferences()
  }

  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager()
    }
    return CookieManager.instance
  }

  private setCookie(name: string, value: string, days: number): void {
    if (typeof document === 'undefined') return

    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    const expires = `expires=${date.toUTCString()}`
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax;Secure`
  }

  private getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null

    const nameEQ = name + '='
    const ca = document.cookie.split(';')

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }

  private deleteCookie(name: string): void {
    if (typeof document === 'undefined') return
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
  }

  private loadPreferences(): void {
    const saved = this.getCookie(COOKIE_CONSENT_KEY)
    if (saved) {
      try {
        const data: CookieConsentData = JSON.parse(saved)
        if (data.version === COOKIE_VERSION) {
          this.preferences = { ...this.preferences, ...data.preferences }
        }
      } catch (error) {
        console.warn('Failed to parse cookie preferences:', error)
      }
    }
  }

  savePreferences(preferences: Partial<CookiePreferences>): void {
    this.preferences = { ...this.preferences, ...preferences, necessary: true }

    const data: CookieConsentData = {
      preferences: this.preferences,
      timestamp: new Date().toISOString(),
      version: COOKIE_VERSION
    }

    this.setCookie(COOKIE_CONSENT_KEY, JSON.stringify(data), CONSENT_DURATION_DAYS)

    // Track consent decision
    trackEvent('cookie_consent_updated', {
      analytics_consent: this.preferences.analytics,
      marketing_consent: this.preferences.marketing,
      consent_method: 'manual'
    })

    // Trigger consent change event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookieConsentChange', {
        detail: this.preferences
      }))
    }
  }

  getPreferences(): CookiePreferences {
    return { ...this.preferences }
  }

  hasConsent(category: keyof CookiePreferences): boolean {
    return this.preferences[category]
  }

  hasGivenConsent(): boolean {
    return this.getCookie(COOKIE_CONSENT_KEY) !== null
  }

  clearConsent(): void {
    this.deleteCookie(COOKIE_CONSENT_KEY)
    this.preferences = {
      necessary: true,
      analytics: false,
      marketing: false
    }
  }

  // Check if user is in GDPR region
  isGDPRRegion(): boolean {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const gdprTimeZones = [
        'Europe/Vienna', 'Europe/Brussels', 'Europe/Sofia', 'Europe/Zagreb',
        'Asia/Famagusta', 'Asia/Nicosia', 'Europe/Prague', 'Europe/Copenhagen',
        'Europe/Tallinn', 'Europe/Helsinki', 'Europe/Paris', 'Europe/Berlin',
        'Europe/Busingen', 'Europe/Athens', 'Europe/Budapest', 'Atlantic/Reykjavik',
        'Europe/Dublin', 'Europe/Rome', 'Europe/Riga', 'Europe/Vaduz',
        'Europe/Vilnius', 'Europe/Luxembourg', 'Europe/Malta', 'Europe/Amsterdam',
        'Europe/Oslo', 'Europe/Warsaw', 'Atlantic/Azores', 'Atlantic/Madeira',
        'Europe/Lisbon', 'Europe/Bucharest', 'Europe/Bratislava', 'Europe/Ljubljana',
        'Africa/Ceuta', 'Atlantic/Canary', 'Europe/Madrid', 'Europe/Stockholm',
        'Europe/London'
      ]
      return gdprTimeZones.includes(timeZone)
    } catch {
      return true // Default to showing consent if timezone detection fails
    }
  }
}

// Export singleton instance
export const cookieManager = CookieManager.getInstance()

// Cookie consent banner component
interface CookieConsentBannerProps {
  onClose?: () => void
}

export function CookieConsentBanner({ onClose }: CookieConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Show banner if user hasn't given consent and is in GDPR region
    if (!cookieManager.hasGivenConsent() && cookieManager.isGDPRRegion()) {
      setIsVisible(true)
    }

    // Load current preferences
    setPreferences(cookieManager.getPreferences())
  }, [])

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    cookieManager.savePreferences(newPreferences)
    setIsVisible(false)
    onClose?.()

    trackEvent('cookie_consent_accepted', {
      type: 'accept_all',
      analytics_consent: true,
      marketing_consent: true
    })
  }

  const handleAcceptNecessary = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    cookieManager.savePreferences(newPreferences)
    setIsVisible(false)
    onClose?.()

    trackEvent('cookie_consent_accepted', {
      type: 'necessary_only',
      analytics_consent: false,
      marketing_consent: false
    })
  }

  const handleSavePreferences = () => {
    cookieManager.savePreferences(preferences)
    setIsVisible(false)
    onClose?.()

    trackEvent('cookie_consent_accepted', {
      type: 'custom',
      analytics_consent: preferences.analytics,
      marketing_consent: preferences.marketing
    })
  }

  const handlePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'necessary') return // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [category]: value }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-[#a98b5d]/20">
      <div className="max-w-7xl mx-auto p-6">
        {!showDetails ? (
          // Simple banner
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                Cookie Preferences
              </h3>
              <p className="text-sm text-gray-300">
                We use cookies to enhance your experience and analyze our traffic.
                You can choose which cookies to accept.{' '}
                <a
                  href="/legal/cookies"
                  className="text-[#a98b5d] hover:underline"
                  target="_blank"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 text-sm border border-[#a98b5d]/30 text-gray-300 hover:text-white hover:border-[#a98b5d]/50 rounded transition-colors"
              >
                Customize
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="px-4 py-2 text-sm border border-[#a98b5d]/30 text-gray-300 hover:text-white hover:border-[#a98b5d]/50 rounded transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 text-sm bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-medium rounded hover:scale-105 transition-transform"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          // Detailed preferences
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-semibold text-white">
                Cookie Preferences
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-4 border border-[#a98b5d]/20 rounded">
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Necessary Cookies</h4>
                  <p className="text-sm text-gray-400">
                    Essential for website functionality. Cannot be disabled.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="w-4 h-4 accent-[#a98b5d]"
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-4 border border-[#a98b5d]/20 rounded">
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Analytics Cookies</h4>
                  <p className="text-sm text-gray-400">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                    className="w-4 h-4 accent-[#a98b5d]"
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 border border-[#a98b5d]/20 rounded">
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Marketing Cookies</h4>
                  <p className="text-sm text-gray-400">
                    Used to deliver personalized ads and measure ad performance.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                    className="w-4 h-4 accent-[#a98b5d]"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={handleAcceptNecessary}
                className="px-4 py-2 text-sm border border-[#a98b5d]/30 text-gray-300 hover:text-white hover:border-[#a98b5d]/50 rounded transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 text-sm bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-medium rounded hover:scale-105 transition-transform"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}