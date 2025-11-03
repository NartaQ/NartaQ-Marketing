import { BaseTracker, EventData, ApplicationEventData, PageViewEventData, CTAEventData, UserIdentificationData } from './types'

declare global {
  interface Window {
    fbq: (...args: any[]) => void
  }
}

export class FacebookTracker implements BaseTracker {
  serviceName = 'Facebook Pixel'
  private initialized = false
  private pixelId = '777686951638867'

  constructor() {
    // Check if fbq is already loaded
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      this.initialized = true
    }
  }

  initialize(): void {
    if (typeof window === 'undefined') return
    
    // Wait for fbq to be loaded by the script in layout.tsx
    const checkFbq = () => {
      if (typeof window.fbq === 'function') {
        this.initialized = true
      } else {
        setTimeout(checkFbq, 100)
      }
    }
    
    checkFbq()
  }

  identifyUser(data: UserIdentificationData): void {
    if (!this.initialized || typeof window.fbq !== 'function') return

    // Set user data for Facebook Advanced Matching
    window.fbq('init', this.pixelId, {
      em: data.email, // email
      fn: data.name?.split(' ')[0], // first name
      ln: data.name?.split(' ').slice(1).join(' '), // last name
    })
  }

  firePageViewEvent(data: PageViewEventData): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    window.fbq('track', 'PageView', {
      content_name: data.pageTitle,
      page_url: data.pageUrl || window.location.href,
    })
  }

  fireCTAClickEvent(data: CTAEventData): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    // Use Lead event for apply CTAs, ViewContent for others
    const eventType = data.ctaType === 'button' && data.ctaDestination?.includes('apply') 
      ? 'Lead' 
      : 'ViewContent'
    
    window.fbq('track', eventType, {
      content_name: data.ctaText,
      content_category: `cta_${data.ctaType}`,
      cta_location: data.ctaLocation,
      cta_destination: data.ctaDestination,
      value: 1,
    })
  }

  fireApplicationStartEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    // Track start with ViewContent (standard event for engagement, not conversion)
    // This is NOT a conversion event - just tracking intent
    window.fbq('track', 'ViewContent', {
      content_name: `${data.applicationType}_application_form`,
      content_category: 'application_form',
      content_type: data.applicationType,
    })
  }

  fireApplicationStepEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    // Track step progression but NOT as conversion
    // Use ViewContent to show engagement without triggering conversion optimization
    window.fbq('track', 'ViewContent', {
      content_name: `${data.applicationType}_application_step_${data.formStep}`,
      content_category: `${data.applicationType}_application_progress`,
      content_type: data.applicationType,
      step: data.formStep,
    })
  }

  fireApplicationSubmitEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    // THIS IS THE CONVERSION EVENT - Use Lead with proper parameters
    // This is what Facebook should optimize for
    window.fbq('track', 'Lead', {
      content_name: `${data.applicationType}_application_completed`,
      content_category: `${data.applicationType}_lead`,
      content_type: data.applicationType,
      value: 10, // Assign value for optimization (can adjust based on type)
      currency: 'USD',
    })
  }

  fireApplicationCompleteEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    // Secondary confirmation - CompleteRegistration is appropriate here
    // This confirms the Lead event but with registration semantics
    window.fbq('track', 'CompleteRegistration', {
      content_name: `${data.applicationType}_registration_complete`,
      content_category: data.applicationType,
      content_type: data.applicationType,
      status: 'completed',
      value: 10,
      currency: 'USD',
    })
  }

  fireApplicationErrorEvent(data: ApplicationEventData & { error: string }): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    // Facebook doesn't have a specific error event, so we'll track it as a custom event
    window.fbq('trackCustom', 'ApplicationError', {
      application_type: data.applicationType,
      error_message: data.error,
      step: data.formStep,
    })
  }

  fireNewsletterSubscribeEvent(_data: EventData & { email: string }): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    window.fbq('track', 'Subscribe', {
      value: 1,
      currency: 'USD',
      predicted_ltv: 0,
    })
  }

  fireCustomEvent(eventName: string, data: Record<string, any>): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    window.fbq('trackCustom', eventName, data)
  }
}