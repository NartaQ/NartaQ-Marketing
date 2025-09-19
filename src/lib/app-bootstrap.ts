import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { analyticsTracker } from '@/lib/analytics/unified-tracker'
import { cookieManager } from '@/lib/cookie-consent'
import { trackEvent } from '@/lib/analytics/unified-tracker'

// Global app configuration and utilities
export class AppBootstrap {
  private static instance: AppBootstrap
  private initialized = false

  private constructor() {}

  static getInstance(): AppBootstrap {
    if (!AppBootstrap.instance) {
      AppBootstrap.instance = new AppBootstrap()
    }
    return AppBootstrap.instance
  }

  async init(): Promise<void> {
    if (this.initialized) return
    
    console.log('🚀 Initializing NartaQ Application...')
    
    try {
      // Initialize global error handling
      this.setupErrorHandling()
      
      // Setup axios-like interceptors for fetch (if needed)
      this.setupNetworkInterceptors()
      
      // Initialize analytics based on cookie consent
      await this.initializeAnalytics()
      
      // Setup global utilities
      this.setupGlobalUtilities()
      
      this.initialized = true
      console.log('✅ NartaQ Application initialized successfully')
      
      // Track app initialization
      trackEvent('app_initialized', {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        platform: this.detectPlatform()
      })
      
    } catch (error) {
      console.error('❌ Failed to initialize NartaQ Application:', error)
      this.handleInitializationError(error)
    }
  }

  private setupErrorHandling(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      console.error('Global Error:', event.error)
      
      trackEvent('app_error', {
        error_message: event.error?.message,
        error_stack: event.error?.stack,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      })
    })

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled Promise Rejection:', event.reason)
      
      trackEvent('app_promise_rejection', {
        reason: String(event.reason),
        timestamp: new Date().toISOString()
      })
    })
  }

  private setupNetworkInterceptors(): void {
    // Enhance fetch with global error handling (if needed)
    const originalFetch = window.fetch
    
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args)
        
        // Track failed requests
        if (!response.ok) {
          trackEvent('api_error', {
            url: args[0],
            status: response.status,
            statusText: response.statusText
          })
        }
        
        return response
      } catch (error) {
        trackEvent('network_error', {
          url: args[0],
          error: String(error)
        })
        throw error
      }
    }
  }

  private async initializeAnalytics(): Promise<void> {
    try {
      // Check cookie consent before initializing analytics
      if (cookieManager.hasConsent('analytics')) {
        await analyticsTracker.initialize()
        console.log('📊 Analytics initialized with user consent')
      } else if (cookieManager.isGDPRRegion()) {
        console.log('🍪 Analytics disabled - awaiting cookie consent')
      } else {
        // Non-GDPR regions - initialize analytics by default
        await analyticsTracker.initialize()
        console.log('📊 Analytics initialized (non-GDPR region)')
      }
    } catch (error) {
      console.warn('Failed to initialize analytics:', error)
    }
  }

  private setupGlobalUtilities(): void {
    // Device detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const platform = this.detectPlatform()

    // Add global utilities to window
    window.NartaQ = {
      analytics: analyticsTracker,
      cookieManager,
      device: {
        isMobile,
        isIOS,
        platform,
        userAgent: navigator.userAgent
      },
      version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      environment: process.env.NODE_ENV,
      trackEvent,
      
      // Utility functions
      utils: {
        formatCurrency: (amount: number, currency = 'USD') => {
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency
          }).format(amount)
        },
        
        formatDate: (date: Date | string) => {
          return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }).format(new Date(date))
        },
        
        debounce: <T extends unknown[]>(func: (...args: T) => void, wait: number) => {
          let timeout: NodeJS.Timeout
          return function executedFunction(...args: T) {
            const later = () => {
              clearTimeout(timeout)
              func(...args)
            }
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
          }
        },
        
        throttle: <T extends unknown[]>(func: (...args: T) => void, limit: number) => {
          let inThrottle: boolean
          return function(...args: T) {
            if (!inThrottle) {
              func(...args)
              inThrottle = true
              setTimeout(() => inThrottle = false, limit)
            }
          }
        }
      }
    }

    // Track device info
    trackEvent('device_detected', {
      is_mobile: isMobile,
      is_ios: isIOS,
      platform,
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight
    })
  }

  private detectPlatform(): string {
    const userAgent = navigator.userAgent.toLowerCase()
    
    if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'ios'
    if (userAgent.includes('android')) return 'android'
    if (userAgent.includes('mac')) return 'macos'
    if (userAgent.includes('win')) return 'windows'
    if (userAgent.includes('linux')) return 'linux'
    
    return 'unknown'
  }

  private handleInitializationError(error: any): void {
    // Fallback error handling
    console.error('App initialization failed:', error)
    
    // Try to at least track the error if possible
    try {
      trackEvent('app_init_error', {
        error: String(error),
        timestamp: new Date().toISOString()
      })
    } catch (trackingError) {
      console.error('Failed to track initialization error:', trackingError)
    }
  }

  // Utility methods for the app
  getEnvironment(): string {
    return process.env.NODE_ENV || 'development'
  }

  getVersion(): string {
    return process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0'
  }

  isProduction(): boolean {
    return this.getEnvironment() === 'production'
  }

  isDevelopment(): boolean {
    return this.getEnvironment() === 'development'
  }
}

// Export singleton instance
export const appBootstrap = AppBootstrap.getInstance()

// Global type extensions
declare global {
  interface Window {
    NartaQ: {
      analytics: typeof analyticsTracker
      cookieManager: typeof cookieManager
      device: {
        isMobile: boolean
        isIOS: boolean
        platform: string
        userAgent: string
      }
      version: string
      environment: string
      trackEvent: typeof trackEvent
      utils: {
        formatCurrency: (amount: number, currency?: string) => string
        formatDate: (date: Date | string) => string
        debounce: <T extends unknown[]>(func: (...args: T) => void, wait: number) => (...args: T) => void
        throttle: <T extends unknown[]>(func: (...args: T) => void, limit: number) => (...args: T) => void
      }
    }
  }
}

// Auto-initialize on import (for Next.js)
if (typeof window !== 'undefined') {
  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => appBootstrap.init())
  } else {
    appBootstrap.init()
  }
}