import { BaseTracker, EventData, ApplicationEventData, PageViewEventData, CTAEventData, UserIdentificationData } from './types'

declare global {
  interface Window {
    lintrk: (...args: any[]) => void
  }
}

export class LinkedInTracker implements BaseTracker {
  serviceName = 'LinkedIn Pixel'
  private initialized = false

  constructor() {
    // Check if lintrk is already loaded
    if (typeof window !== 'undefined' && typeof window.lintrk === 'function') {
      this.initialized = true
    }
  }

  initialize(): void {
    if (typeof window === 'undefined') return
    
    // Wait for lintrk to be loaded by the script in layout.tsx
    const checkLintrk = () => {
      if (typeof window.lintrk === 'function') {
        this.initialized = true
      } else {
        setTimeout(checkLintrk, 100)
      }
    }
    
    checkLintrk()
  }

  identifyUser(data: UserIdentificationData): void {
    if (!this.initialized || typeof window.lintrk !== 'function') return

    // Enhanced matching - set user data
    window.lintrk('setUserData', { 
      email: data.email,
      firstName: data.name?.split(' ')[0],
      lastName: data.name?.split(' ').slice(1).join(' ')
    })
  }

  firePageViewEvent(data: PageViewEventData): void {
    if (!this.initialized || typeof window.lintrk !== 'function') return
    
    // Use custom event for page views, not conversion
    window.lintrk('track', { 
      event_name: 'PageView',
      page_path: data.pagePath,
      page_title: data.pageTitle
    })
  }

  fireCTAClickEvent(data: CTAEventData): void {
    if (!this.initialized || typeof window.lintrk !== 'function') return
    
    // Use custom event for CTA clicks
    window.lintrk('track', { 
      event_name: 'CTAClick',
      cta_text: data.ctaText,
      cta_type: data.ctaType,
      cta_location: data.ctaLocation,
      cta_destination: data.ctaDestination
    })
  }

  fireApplicationStartEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.lintrk !== 'function') return
    
    // Use custom event for application starts
    window.lintrk('track', { 
      event_name: 'ApplicationStarted',
      application_type: data.applicationType
    })
  }

  fireApplicationStepEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.lintrk !== 'function') return
    
    // Use custom event for form progress
    window.lintrk('track', { 
      event_name: 'FormStepCompleted',
      step_number: data.formStep,
      application_type: data.applicationType
    })
  }

  fireApplicationSubmitEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.lintrk !== 'function') return
    
    // Enhanced matching - set user email for better tracking
    if (data.email) {
      window.lintrk('setUserData', { email: data.email })
    }
    
    // Use custom event for form submissions (not conversion yet)
    window.lintrk('track', { 
      event_name: 'ApplicationSubmitted',
      application_type: data.applicationType
    })
  }

  fireApplicationCompleteEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.lintrk !== 'function') return
    
    // Enhanced matching - set user email for better tracking
    if (data.email) {
      window.lintrk('setUserData', { email: data.email })
    }
    
    // THIS is the only true conversion - successful application completion
    window.lintrk('track', { 
      conversion_id: 23683433,
      event_name: 'ApplicationCompleted',
      application_type: data.applicationType
    })
  }

  fireApplicationErrorEvent(data: ApplicationEventData & { error: string }): void {
    if (!this.initialized || typeof window.lintrk !== 'function') return
    
    // LinkedIn doesn't have specific error tracking, but we can track custom events
    window.lintrk('track', { 
      conversion_id: 23683433,
      event_name: 'ApplicationError',
      application_type: data.applicationType,
      error: data.error
    })
  }

  fireNewsletterSubscribeEvent(_data: EventData & { email: string }): void {
    if (!this.initialized || typeof window.lintrk !== 'function') return
    
    window.lintrk('track', { 
      conversion_id: 23683433,
      event_name: 'NewsletterSubscribe'
    })
  }

  fireCustomEvent(eventName: string, data: Record<string, any>): void {
    if (!this.initialized || typeof window.lintrk !== 'function') return
    
    window.lintrk('track', { 
      conversion_id: 23683433,
      event_name: eventName,
      ...data
    })
  }
}