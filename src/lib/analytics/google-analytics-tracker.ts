import { BaseTracker, EventData, ApplicationEventData, PageViewEventData, CTAEventData, UserIdentificationData } from './types'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export class GoogleAnalyticsTracker implements BaseTracker {
  serviceName = 'Google Analytics'
  private initialized = false

  constructor() {
    // Check if gtag is already loaded
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      this.initialized = true
    }
  }

  initialize(): void {
    if (typeof window === 'undefined') return
    
    // Wait for gtag to be loaded by the script in layout.tsx
    const checkGtag = () => {
      if (typeof window.gtag === 'function') {
        this.initialized = true
      } else {
        setTimeout(checkGtag, 100)
      }
    }
    
    checkGtag()
  }

  identifyUser(data: UserIdentificationData): void {
    if (!this.initialized || typeof window.gtag !== 'function') return

    // Set user properties in Google Analytics
    window.gtag('config', 'G-CZ3D93J3CR', {
      custom_map: {
        custom_parameter_1: data.email,
        custom_parameter_2: data.name
      },
      user_id: data.userId || data.email
    })
  }

  firePageViewEvent(data: PageViewEventData): void {
    if (!this.initialized || typeof window.gtag !== 'function') return
    
    window.gtag('config', 'G-CZ3D93J3CR', {
      page_title: data.pageTitle,
      page_location: data.pageUrl || window.location.href,
      custom_map: {
        custom_parameter_1: data.sessionId
      }
    })
  }

  fireCTAClickEvent(data: CTAEventData): void {
    if (!this.initialized || typeof window.gtag !== 'function') return
    
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: `${data.ctaType}_${data.ctaLocation}`,
      cta_text: data.ctaText,
      cta_destination: data.ctaDestination,
      cta_variant: data.ctaVariant,
      page_context: data.pageContext,
      custom_parameter_1: data.sessionId,
    })
  }

  fireApplicationStartEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.gtag !== 'function') return
    
    window.gtag('event', 'application_started', {
      event_category: 'application',
      event_label: data.applicationType,
      custom_parameter_1: data.sessionId,
    })
  }

  fireApplicationStepEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.gtag !== 'function') return
    
    window.gtag('event', 'application_step', {
      event_category: 'application',
      event_label: `${data.applicationType}_step_${data.formStep}`,
      value: data.formStep,
      custom_parameter_1: data.sessionId,
    })
  }

  fireApplicationSubmitEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.gtag !== 'function') return
    
    window.gtag('event', 'application_submit', {
      event_category: 'application',
      event_label: data.applicationType,
      custom_parameter_1: data.sessionId,
      custom_parameter_2: data.sector?.join(','),
      custom_parameter_3: data.fundingStage,
    })
  }

  fireApplicationCompleteEvent(data: ApplicationEventData): void {
    if (!this.initialized || typeof window.gtag !== 'function') return
    
    window.gtag('event', 'conversion', {
      send_to: 'G-CZ3D93J3CR/application_complete',
      event_category: 'application',
      event_label: data.applicationType,
      custom_parameter_1: data.sessionId,
    })
  }

  fireApplicationErrorEvent(data: ApplicationEventData & { error: string }): void {
    if (!this.initialized || typeof window.gtag !== 'function') return
    
    window.gtag('event', 'exception', {
      description: `Application error: ${data.error}`,
      fatal: false,
      custom_parameter_1: data.sessionId,
      custom_parameter_2: data.applicationType,
    })
  }

  fireNewsletterSubscribeEvent(data: EventData & { email: string }): void {
    if (!this.initialized || typeof window.gtag !== 'function') return
    
    window.gtag('event', 'newsletter_subscribe', {
      event_category: 'engagement',
      event_label: 'newsletter',
      custom_parameter_1: data.sessionId,
    })
  }

  fireCustomEvent(eventName: string, data: Record<string, any>): void {
    if (!this.initialized || typeof window.gtag !== 'function') return
    
    window.gtag('event', eventName, {
      ...data,
      event_category: 'custom',
    })
  }
}