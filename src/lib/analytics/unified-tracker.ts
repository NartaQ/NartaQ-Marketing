import { BaseTracker, EventData, ApplicationEventData, PageViewEventData, TrackerEvent, CTAEventData, UserIdentificationData } from './types'
import { PostHogTracker } from './posthog-tracker'
import { GoogleAnalyticsTracker } from './google-analytics-tracker'
import { FacebookTracker } from './facebook-tracker'
import { LinkedInTracker } from './linkedin-tracker'
import { HubSpotTracker } from './hubspot-tracker'

export default class UnifiedAnalyticsTracker {
  private services: BaseTracker[]
  private eventDelay = 100 // Small delay between firing events to different services
  private firedEvents: Record<string, string[]> = {} // Track which services have fired which events
  private eventData: EventData
  private sessionId: string
  private initialized = false

  constructor() {
    this.sessionId = this.generateSessionId()
    this.eventData = this.gatherEventData()
    
    this.services = [
      new PostHogTracker(),
      new GoogleAnalyticsTracker(),
      new FacebookTracker(),
      new LinkedInTracker(),
      new HubSpotTracker(),
    ]
  }

  async initialize(): Promise<void> {
    if (this.initialized) {
      return
    }
    
    // Initialize all services in parallel
    const initPromises = this.services.map(service => {
      return this.safeExecute(
        service,
        'initialize',
        () => service.initialize()
      )
    })

    await Promise.allSettled(initPromises)
    this.initialized = true
  }

  identifyUser(data: UserIdentificationData): void {
    if (!this.initialized || !this.isAnalyticsEnabled()) return
    
    this.services.forEach(service => {
      this.safeExecute(
        service,
        'identifyUser',
        () => service.identifyUser(data)
      )
    })
  }

  private isAnalyticsEnabled(): boolean {
    if (typeof window === 'undefined') return false
    
    // Check if analytics is explicitly disabled
    try {
      const cookieConsent = localStorage.getItem('nartaq_cookie_consent')
      if (cookieConsent) {
        const consent = JSON.parse(cookieConsent)
        return consent.preferences?.analytics === true
      }
    } catch (error) {
      console.warn('Failed to check analytics consent:', error)
    }
    
    // Default to enabled if no consent system or in non-GDPR regions
    return true
  }

  firePageViewEvent(pagePath: string, pageTitle: string, previousPage?: string): void {
    if (!this.initialized || !this.isAnalyticsEnabled()) return

    const data: PageViewEventData = {
      ...this.eventData,
      pagePath,
      pageTitle,
      previousPage,
      pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
    }

    this.services.forEach(service => {
      this.fireEvent(
        service,
        'page_view',
        () => service.firePageViewEvent(data)
      )
    })
  }

  fireCTAClickEvent(
    ctaText: string,
    ctaType: CTAEventData['ctaType'],
    ctaLocation: string,
    ctaDestination?: string,
    ctaVariant?: string,
    pageContext?: string
  ): void {
    if (!this.initialized || !this.isAnalyticsEnabled()) return

    const data: CTAEventData = {
      ...this.eventData,
      ctaText,
      ctaType,
      ctaLocation,
      ctaDestination,
      ctaVariant,
      pageContext: pageContext || (typeof window !== 'undefined' ? window.location.pathname : undefined),
    }

    this.services.forEach(service => {
      this.fireEvent(
        service,
        'cta_click',
        () => service.fireCTAClickEvent(data)
      )
    })
  }

  fireApplicationStartEvent(applicationType: 'founder' | 'investor' | 'career'): void {
    if (!this.initialized || !this.isAnalyticsEnabled()) return

    const data: ApplicationEventData = {
      ...this.eventData,
      applicationType,
    }

    this.services.forEach(service => {
      this.fireEvent(
        service,
        'application_start',
        () => service.fireApplicationStartEvent(data)
      )
    })
  }

  fireApplicationStepEvent(
    applicationType: 'founder' | 'investor' | 'career',
    step: number,
    additionalData?: Partial<ApplicationEventData>
  ): void {
    if (!this.initialized || !this.isAnalyticsEnabled()) return

    const data: ApplicationEventData = {
      ...this.eventData,
      applicationType,
      formStep: step,
      ...additionalData,
    }

    this.services.forEach(service => {
      this.fireEvent(
        service,
        'application_step',
        () => service.fireApplicationStepEvent(data)
      )
    })
  }

  fireApplicationSubmitEvent(
    applicationType: 'founder' | 'investor' | 'career',
    applicationData: Partial<ApplicationEventData>
  ): void {
    const data: ApplicationEventData = {
      ...this.eventData,
      applicationType,
      ...applicationData,
    }

    this.services.forEach(service => {
      this.fireEvent(
        service,
        'application_submit',
        () => service.fireApplicationSubmitEvent(data)
      )
    })
  }

  fireApplicationCompleteEvent(
    applicationType: 'founder' | 'investor' | 'career',
    applicationId?: string,
    additionalData?: Partial<ApplicationEventData>
  ): Promise<void> {
    const data: ApplicationEventData = {
      ...this.eventData,
      applicationType,
      applicationId,
      ...additionalData,
    }

    this.services.forEach(service => {
      this.fireEvent(
        service,
        'application_complete',
        () => service.fireApplicationCompleteEvent(data)
      )
    })

    return new Promise((resolve) => {
      setTimeout(resolve, this.eventDelay * this.services.length)
    })
  }

  fireApplicationErrorEvent(
    applicationType: 'founder' | 'investor' | 'career',
    error: string,
    step?: number
  ): void {
    const data: ApplicationEventData & { error: string } = {
      ...this.eventData,
      applicationType,
      formStep: step,
      error,
    }

    this.services.forEach(service => {
      this.fireEvent(
        service,
        'application_error',
        () => service.fireApplicationErrorEvent(data)
      )
    })
  }

  fireNewsletterSubscribeEvent(email: string): void {
    const data: EventData & { email: string } = {
      ...this.eventData,
      email,
    }

    this.services.forEach(service => {
      this.fireEvent(
        service,
        'newsletter_subscribe',
        () => service.fireNewsletterSubscribeEvent(data)
      )
    })
  }

  fireCustomEvent(eventName: string, eventData: Record<string, any>): void {
    const data = {
      ...this.eventData,
      ...eventData,
    }

    this.services.forEach(service => {
      this.fireEvent(
        service,
        'custom',
        () => service.fireCustomEvent(eventName, data)
      )
    })
  }

  private fireEvent(service: BaseTracker, event: TrackerEvent, callback: () => void): void {
    const eventKey = `${event}_${this.sessionId}`
    const eventType = this.firedEvents[eventKey] ?? []

    // Prevent duplicate events for the same service
    if (eventType.includes(service.serviceName)) {
      return
    }

    eventType.push(service.serviceName)
    this.firedEvents[eventKey] = eventType

    this.safeExecute(service, event, callback)
  }

  private safeExecute(service: BaseTracker, event: string, callback: () => void): Promise<void> {
    return new Promise((resolve) => {
      try {
        callback()
        resolve()
      } catch (error) {
        console.warn(`Failed to fire ${event} event for ${service.serviceName}:`, error)
        resolve()
      }
    })
  }

  private generateSessionId(): string {
    if (typeof window !== 'undefined') {
      // Try to get existing session ID from sessionStorage
      const existingId = sessionStorage.getItem('nartaq_session_id')
      if (existingId) {
        return existingId
      }
    }

    // Generate new session ID
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('nartaq_session_id', sessionId)
    }
    
    return sessionId
  }

  private gatherEventData(): EventData {
    return {
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      referrer: typeof window !== 'undefined' ? document.referrer : undefined,
      pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
    }
  }

  // Utility methods for tracking common interactions
  trackFormStart(formType: 'founder' | 'investor' | 'career'): void {
    this.fireApplicationStartEvent(formType)
  }

  trackFormStep(formType: 'founder' | 'investor' | 'career', step: number, stepData?: any): void {
    this.fireApplicationStepEvent(formType, step, stepData)
  }

  trackFormSubmit(formType: 'founder' | 'investor' | 'career', formData: any): void {
    this.fireApplicationSubmitEvent(formType, formData)
  }

  trackFormComplete(formType: 'founder' | 'investor' | 'career', applicationId?: string, additionalData?: Partial<ApplicationEventData>): void {
    this.fireApplicationCompleteEvent(formType, applicationId, additionalData)
  }

  trackFormError(formType: 'founder' | 'investor' | 'career', error: string, step?: number): void {
    this.fireApplicationErrorEvent(formType, error, step)
  }

  trackPageView(pagePath?: string, pageTitle?: string): void {
    if (typeof window === 'undefined') return
    
    const path = pagePath || window.location.pathname
    const title = pageTitle || document.title
    
    this.firePageViewEvent(path, title)
  }

  // CTA tracking utilities
  trackCTAClick(
    ctaText: string,
    ctaType: CTAEventData['ctaType'],
    ctaLocation: string,
    ctaDestination?: string,
    ctaVariant?: string
  ): void {
    this.fireCTAClickEvent(ctaText, ctaType, ctaLocation, ctaDestination, ctaVariant)
  }
}

// Create and export singleton instance
export const analyticsTracker = new UnifiedAnalyticsTracker()

// Export convenience functions
export const trackEvent = analyticsTracker.fireCustomEvent.bind(analyticsTracker)
export const trackPageView = analyticsTracker.trackPageView.bind(analyticsTracker)
export const trackCTAClick = analyticsTracker.trackCTAClick.bind(analyticsTracker)
export const trackFormStart = analyticsTracker.trackFormStart.bind(analyticsTracker)
export const trackFormStep = analyticsTracker.trackFormStep.bind(analyticsTracker)
export const trackFormSubmit = analyticsTracker.trackFormSubmit.bind(analyticsTracker)
export const trackFormComplete = analyticsTracker.trackFormComplete.bind(analyticsTracker)
export const trackFormError = analyticsTracker.trackFormError.bind(analyticsTracker)
export const identifyUser = analyticsTracker.identifyUser.bind(analyticsTracker)