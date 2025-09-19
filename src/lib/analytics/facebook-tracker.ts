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
    
    window.fbq('trackCustom', 'ApplicationStarted', {
      content_name: `${data.applicationType}_application_started`,
      content_category: 'application',
      application_type: data.applicationType,
      value: 1,
    })
  }

  fireApplicationStepEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    window.fbq('trackCustom', 'ApplicationStepCompleted', {
      content_name: `${data.applicationType}_step_${data.formStep}`,
      content_category: 'application_progress',
      application_type: data.applicationType,
      step_number: data.formStep,
      value: data.formStep,
    })
  }

  fireApplicationSubmitEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    window.fbq('trackCustom', 'ApplicationSubmitted', {
      content_name: `${data.applicationType}_application_submitted`,
      content_category: 'application',
      application_type: data.applicationType,
      value: 1,
      content_ids: [data.applicationId || 'unknown'],
    })
  }

  fireApplicationCompleteEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.fbq !== 'function') return
    
    window.fbq('track', 'CompleteRegistration', {
      content_name: `${data.applicationType}_application_completed`,
      content_category: 'application',
      application_type: data.applicationType,
      status: 'completed',
      value: 1,
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

  fireNewsletterSubscribeEvent(data: EventData & { email: string }): void {
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