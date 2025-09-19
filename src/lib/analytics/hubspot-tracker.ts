import { BaseTracker, EventData, ApplicationEventData, PageViewEventData, CTAEventData, UserIdentificationData } from './types'

declare global {
  interface Window {
    _hsq: any[]
    hsConversationsAPI: any
  }
}

export class HubSpotTracker implements BaseTracker {
  serviceName = 'HubSpot'
  private initialized = false

  constructor() {
    // Initialize HubSpot queue if not already present
    if (typeof window !== 'undefined') {
      window._hsq = window._hsq || []
    }
  }

  initialize(): void {
    if (typeof window === 'undefined') return
    
    // Wait for HubSpot to be loaded
    const checkHubSpot = () => {
      if (typeof window._hsq !== 'undefined') {
        this.initialized = true
      } else {
        setTimeout(checkHubSpot, 100)
      }
    }
    
    checkHubSpot()
  }

  identifyUser(data: UserIdentificationData): void {
    if (!this.initialized) return
    
    const identityData: any = {}
    
    if (data.email) identityData.email = data.email
    if (data.name) {
      // Split name into first and last name if possible
      const nameParts = data.name.split(' ')
      identityData.firstname = nameParts[0]
      if (nameParts.length > 1) {
        identityData.lastname = nameParts.slice(1).join(' ')
      }
    }
    if (data.phone) identityData.phone = data.phone

    window._hsq.push(['identify', identityData])
  }

  firePageViewEvent(data: PageViewEventData): void {
    if (!this.initialized) return
    
    window._hsq.push(['setPath', data.pagePath])
    window._hsq.push(['trackPageView'])
  }

  fireCTAClickEvent(data: CTAEventData): void {
    if (!this.initialized) return
    
    window._hsq.push(['trackEvent', {
      id: 'cta_click',
      value: {
        cta_text: data.ctaText,
        cta_type: data.ctaType,
        cta_location: data.ctaLocation,
        cta_destination: data.ctaDestination || '',
        page_context: data.pageContext || ''
      }
    }])
  }

  fireApplicationStartEvent(data: ApplicationEventData): void {
    if (!this.initialized) return
    
    window._hsq.push(['trackEvent', {
      id: 'application_started',
      value: {
        application_type: data.applicationType,
        page_url: window.location.href
      }
    }])
  }

  fireApplicationStepEvent(data: ApplicationEventData): void {
    if (!this.initialized) return
    
    window._hsq.push(['trackEvent', {
      id: 'application_step_completed',
      value: {
        application_type: data.applicationType,
        step_number: data.formStep || 0,
        page_url: window.location.href
      }
    }])
  }

  fireApplicationSubmitEvent(data: ApplicationEventData): void {
    if (!this.initialized) return
    
    // Track form submission
    window._hsq.push(['trackEvent', {
      id: 'application_submitted',
      value: {
        application_type: data.applicationType,
        email: data.email || '',
        company_name: data.companyName || '',
        page_url: window.location.href
      }
    }])
  }

  fireApplicationCompleteEvent(data: ApplicationEventData): void {
    if (!this.initialized) return
    
    // Track successful application completion
    window._hsq.push(['trackEvent', {
      id: 'application_completed',
      value: {
        application_type: data.applicationType,
        application_id: data.applicationId || '',
        email: data.email || '',
        company_name: data.companyName || '',
        sector: data.sector || '',
        funding_stage: data.fundingStage || '',
        page_url: window.location.href
      }
    }])
  }

  fireApplicationErrorEvent(data: ApplicationEventData & { error: string }): void {
    if (!this.initialized) return
    
    window._hsq.push(['trackEvent', {
      id: 'application_error',
      value: {
        application_type: data.applicationType,
        error_message: data.error,
        step_number: data.formStep || 0,
        page_url: window.location.href
      }
    }])
  }

  fireNewsletterSubscribeEvent(data: EventData & { email: string }): void {
    if (!this.initialized) return
    
    window._hsq.push(['trackEvent', {
      id: 'newsletter_subscribed',
      value: {
        email: data.email,
        page_url: window.location.href
      }
    }])
  }

  fireCustomEvent(eventName: string, data: Record<string, any>): void {
    if (!this.initialized) return
    
    window._hsq.push(['trackEvent', {
      id: eventName,
      value: {
        ...data,
        page_url: window.location.href
      }
    }])
  }
}