'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

interface IntercomSettings {
  app_id: string
  api_base: string
  [key: string]: unknown
}

const INTERCOM_APP_ID = 'pk1lmohm'

export default function IntercomProvider() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Check if Intercom is already loaded (in case of hot reload)
    if (window.Intercom) {
      return
    }

    // Load Intercom after user interaction or delay
    const handleInteraction = () => {
      if (!shouldLoad) {
        setShouldLoad(true)
      }
    }

    // Add interaction listeners
    const events = ['scroll', 'click', 'mousemove', 'touchstart']
    events.forEach(event => {
      window.addEventListener(event, handleInteraction, { once: true, passive: true })
    })

    // Fallback: Load after 3 seconds if no interaction
    const timer = setTimeout(() => {
      if (!shouldLoad) {
        setShouldLoad(true)
      }
    }, 3000)

    return () => {
      clearTimeout(timer)
      events.forEach(event => {
        window.removeEventListener(event, handleInteraction)
      })
    }
  }, [shouldLoad])

  const handleScriptLoad = () => {
    // Initialize Intercom settings
    window.intercomSettings = {
      api_base: 'https://api-iam.intercom.io',
      app_id: INTERCOM_APP_ID,
    }

    // Boot Intercom with hidden launcher initially
    if (window.Intercom && typeof window.Intercom === 'function') {
      window.Intercom('boot', {
        ...window.intercomSettings,
        hide_default_launcher: false, // Let Intercom show its own launcher
      })
    }
  }

  return (
    <>
      {shouldLoad && (
        <Script
          id="intercom-widget"
          src={`https://widget.intercom.io/widget/${INTERCOM_APP_ID}`}
          strategy="afterInteractive"
          onLoad={handleScriptLoad}
          onError={(e) => {
            console.error('Failed to load Intercom:', e)
          }}
        />
      )}
    </>
  )
}

// TypeScript declarations
declare global {
  interface Window {
    Intercom: ((action: string, data?: Record<string, unknown>) => void) | undefined
    intercomSettings?: IntercomSettings
  }
}
