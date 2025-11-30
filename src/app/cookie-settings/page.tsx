'use client'

import { useState, useEffect } from 'react'
import { cookieManager, type CookiePreferences } from '@/lib/cookie-consent'
import { trackEvent } from '@/lib/analytics/unified-tracker'

export default function CookieSettingsPage() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setPreferences(cookieManager.getPreferences())
  }, [])

  const handlePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'necessary') return // Cannot disable necessary cookies
    setPreferences((prev: CookiePreferences) => ({ ...prev, [category]: value }))
  }

  const handleSave = () => {
    cookieManager.savePreferences(preferences)
    setSaved(true)

    trackEvent('cookie_settings_updated', {
      analytics_consent: preferences.analytics,
      marketing_consent: preferences.marketing,
      source: 'settings_page'
    })

    setTimeout(() => setSaved(false), 3000)
  }

  const handleClearConsent = () => {
    cookieManager.clearConsent()
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false
    })
    setSaved(true)

    trackEvent('cookie_consent_cleared', {
      source: 'settings_page'
    })

    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl font-bold text-white mb-4">
            Cookie Settings
          </h1>
          <p className="text-lg text-gray-300">
            Manage your cookie preferences and control how we use your data.
          </p>
        </div>

        {saved && (
          <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
            <p className="text-green-400">✓ Your preferences have been saved successfully.</p>
          </div>
        )}

        <div className="space-y-8">
          {/* Necessary Cookies */}
          <div className="border border-[#a98b5d]/20 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Necessary Cookies
                </h3>
                <p className="text-gray-400">
                  These cookies are essential for the website to function properly.
                  They enable core functionality such as security, network management,
                  and accessibility. You cannot disable these cookies.
                </p>
              </div>
              <div className="ml-6">
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="w-5 h-5 accent-[#a98b5d] opacity-50"
                />
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <strong>Examples:</strong> Session cookies, authentication tokens, CSRF protection
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="border border-[#a98b5d]/20 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-gray-400">
                  These cookies help us understand how visitors interact with our website
                  by collecting and reporting information anonymously. This includes page
                  views, user journeys, and performance metrics.
                </p>
              </div>
              <div className="ml-6">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                  className="w-5 h-5 accent-[#a98b5d]"
                />
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <strong>Services:</strong> PostHog, Google Analytics
              <br />
              <strong>Data collected:</strong> Page views, click events, form interactions,
              session duration, device information
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="border border-[#a98b5d]/20 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Marketing Cookies
                </h3>
                <p className="text-gray-400">
                  These cookies are used to deliver personalized advertisements and
                  measure the effectiveness of advertising campaigns. They track your
                  activity across websites to build a profile of your interests.
                </p>
              </div>
              <div className="ml-6">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                  className="w-5 h-5 accent-[#a98b5d]"
                />
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <strong>Services:</strong> Facebook Pixel, LinkedIn Ads, Google Ads
              <br />
              <strong>Purpose:</strong> Retargeting, conversion tracking, lookalike audiences,
              ad personalization
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
          <button
            onClick={handleClearConsent}
            className="px-6 py-3 border border-red-500/30 text-red-400 hover:text-red-300 hover:border-red-500/50 rounded transition-colors"
          >
            Clear All Consent
          </button>

          <div className="flex gap-4">
            <button
              onClick={() => setPreferences({ necessary: true, analytics: false, marketing: false })}
              className="px-6 py-3 border border-[#a98b5d]/30 text-gray-300 hover:text-white hover:border-[#a98b5d]/50 rounded transition-colors"
            >
              Necessary Only
            </button>
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded hover:scale-105 transition-transform"
            >
              Save Preferences
            </button>
          </div>
        </div>

        <div className="mt-16 p-6 bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-3">
            Your Privacy Rights
          </h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              • <strong>Right to Access:</strong> You can request information about the data we collect
            </p>
            <p>
              • <strong>Right to Rectification:</strong> You can request correction of inaccurate data
            </p>
            <p>
              • <strong>Right to Erasure:</strong> You can request deletion of your data
            </p>
            <p>
              • <strong>Right to Withdraw Consent:</strong> You can change these settings at any time
            </p>
          </div>
          <div className="mt-4">
            <a
              href="/legal/privacy"
              className="text-[#a98b5d] hover:underline"
            >
              Read our full Privacy Policy →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}