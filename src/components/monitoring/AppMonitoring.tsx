'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics/unified-tracker'

export default function AppMonitoring() {
  useEffect(() => {
    // Track page load performance
    const trackPerformance = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigation) {
          trackEvent('page_performance', {
            dns_time: navigation.domainLookupEnd - navigation.domainLookupStart,
            connect_time: navigation.connectEnd - navigation.connectStart,
            request_time: navigation.responseStart - navigation.requestStart,
            response_time: navigation.responseEnd - navigation.responseStart,
            dom_load_time: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            page_load_time: navigation.loadEventEnd - navigation.fetchStart,
            first_paint: 0, // Will be updated below
            largest_contentful_paint: 0 // Will be updated below
          })
        }
      }
    }

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const paintObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.name === 'first-contentful-paint') {
                trackEvent('web_vital_fcp', {
                  value: entry.startTime,
                  rating: entry.startTime < 1800 ? 'good' : entry.startTime < 3000 ? 'needs-improvement' : 'poor'
                })
              }
            }
          })
          paintObserver.observe({ entryTypes: ['paint'] })
        } catch (error) {
          console.warn('Paint observer not supported:', error)
        }

        // Largest Contentful Paint
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            
            trackEvent('web_vital_lcp', {
              value: lastEntry.startTime,
              rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'
            })
          })
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (error) {
          console.warn('LCP observer not supported:', error)
        }

        // Cumulative Layout Shift
        try {
          let clsValue = 0
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value
              }
            }
          })
          clsObserver.observe({ entryTypes: ['layout-shift'] })

          // Track CLS when page visibility changes or unloads
          const trackCLS = () => {
            trackEvent('web_vital_cls', {
              value: clsValue,
              rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
            })
          }

          document.addEventListener('visibilitychange', trackCLS)
          window.addEventListener('beforeunload', trackCLS)
        } catch (error) {
          console.warn('CLS observer not supported:', error)
        }
      }
    }

    // Track user session information
    const trackSession = () => {
      trackEvent('session_start', {
        timestamp: new Date().toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        languages: navigator.languages?.join(','),
        connection_type: (navigator as any).connection?.effectiveType || 'unknown',
        connection_downlink: (navigator as any).connection?.downlink || 0,
        memory: (navigator as any).deviceMemory || 'unknown',
        cores: navigator.hardwareConcurrency || 'unknown',
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
        color_depth: screen.colorDepth,
        pixel_ratio: window.devicePixelRatio || 1
      })
    }

    // Track visibility changes
    const trackVisibilityChange = () => {
      document.addEventListener('visibilitychange', () => {
        trackEvent('page_visibility_change', {
          visibility_state: document.visibilityState,
          timestamp: new Date().toISOString()
        })
      })
    }

    // Track errors and exceptions
    const trackErrors = () => {
      // JavaScript errors
      window.addEventListener('error', (event) => {
        trackEvent('javascript_error', {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          stack: event.error?.stack?.substring(0, 1000), // Limit stack trace size
          timestamp: new Date().toISOString()
        })
      })

      // Promise rejections
      window.addEventListener('unhandledrejection', (event) => {
        trackEvent('unhandled_promise_rejection', {
          reason: String(event.reason).substring(0, 500),
          timestamp: new Date().toISOString()
        })
      })
    }

    // Execute all tracking
    const timeouts = [
      setTimeout(trackPerformance, 1000), // Wait for page to load
      setTimeout(trackWebVitals, 100),
      setTimeout(trackSession, 0),
      setTimeout(trackVisibilityChange, 0),
      setTimeout(trackErrors, 0)
    ]

    // Cleanup function
    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [])

  // This component doesn't render anything
  return null
}

// Additional utility for tracking form abandonment
export function useFormAbandonment(formId: string, fields: string[]) {
  useEffect(() => {
    const startTime = Date.now()
    let interactionCount = 0
    let fieldsInteracted: string[] = []

    const trackInteraction = (field: string) => {
      if (!fieldsInteracted.includes(field)) {
        fieldsInteracted.push(field)
        interactionCount++
      }
    }

    const trackAbandonment = () => {
      const timeSpent = Date.now() - startTime
      
      if (interactionCount > 0) {
        trackEvent('form_abandonment', {
          form_id: formId,
          time_spent: timeSpent,
          interactions: interactionCount,
          fields_interacted: fieldsInteracted,
          completion_rate: fieldsInteracted.length / fields.length,
          timestamp: new Date().toISOString()
        })
      }
    }

    // Add event listeners to form fields
    fields.forEach(fieldId => {
      const field = document.getElementById(fieldId)
      if (field) {
        field.addEventListener('focus', () => trackInteraction(fieldId))
        field.addEventListener('input', () => trackInteraction(fieldId))
      }
    })

    // Track abandonment on page unload
    window.addEventListener('beforeunload', trackAbandonment)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        trackAbandonment()
      }
    })

    return () => {
      window.removeEventListener('beforeunload', trackAbandonment)
    }
  }, [formId, fields])
}