import { BaseTracker, EventData, ApplicationEventData, PageViewEventData, CTAEventData, UserIdentificationData } from './types'
import { OptimizedPostHog } from '../optimized-posthog'

export class PostHogTracker implements BaseTracker {
  serviceName = 'PostHog'
  private posthog: OptimizedPostHog
  private initialized = false

  constructor() {
    this.posthog = OptimizedPostHog.getInstance()
  }

  async initialize(): Promise<void> {
    try {
      await this.posthog.init()
      this.initialized = true
    } catch (error) {
      console.warn(`Failed to initialize ${this.serviceName}:`, error)
    }
  }

  identifyUser(data: UserIdentificationData): void {
    if (!this.initialized) return

    this.posthog.identify(data.email, {
      email: data.email,
      name: data.name,
      $email: data.email,
      $name: data.name,
    })
  }

  firePageViewEvent(data: PageViewEventData): void {
    if (!this.initialized) return
    
    this.posthog.trackPageView({
      $current_url: data.pageUrl || window.location.href,
      $title: data.pageTitle,
      $referrer: data.referrer,
      page_path: data.pagePath,
      previous_page: data.previousPage,
      session_id: data.sessionId,
    })
  }

  fireCTAClickEvent(data: CTAEventData): void {
    if (!this.initialized) return
    
    this.posthog.track('cta_clicked', {
      cta_text: data.ctaText,
      cta_type: data.ctaType,
      cta_location: data.ctaLocation,
      cta_destination: data.ctaDestination,
      cta_variant: data.ctaVariant,
      page_context: data.pageContext,
      session_id: data.sessionId,
      user_id: data.userId,
      timestamp: data.timestamp,
    })
  }

  fireApplicationStartEvent(data: ApplicationEventData): void {
    if (!this.initialized) return
    
    this.posthog.track('application_started', {
      application_type: data.applicationType,
      session_id: data.sessionId,
      user_id: data.userId,
      timestamp: data.timestamp,
    })
  }

  fireApplicationStepEvent(data: ApplicationEventData): void {
    if (!this.initialized) return
    
    this.posthog.track('application_step_completed', {
      application_type: data.applicationType,
      step: data.formStep,
      session_id: data.sessionId,
      user_id: data.userId,
    })
  }

  fireApplicationSubmitEvent(data: ApplicationEventData): void {
    if (!this.initialized) return
    
    this.posthog.track('application_submitted', {
      application_type: data.applicationType,
      application_id: data.applicationId,
      sector: data.sector,
      funding_stage: data.fundingStage,
      location: data.location,
      company_name: data.companyName,
      session_id: data.sessionId,
      user_id: data.userId,
    })
  }

  fireApplicationCompleteEvent(data: ApplicationEventData): void {
    if (!this.initialized) return
    
    this.posthog.track('application_completed', {
      application_type: data.applicationType,
      application_id: data.applicationId,
      session_id: data.sessionId,
      user_id: data.userId,
    })
  }

  fireApplicationErrorEvent(data: ApplicationEventData & { error: string }): void {
    if (!this.initialized) return
    
    this.posthog.track('application_error', {
      application_type: data.applicationType,
      error: data.error,
      step: data.formStep,
      session_id: data.sessionId,
      user_id: data.userId,
    })
  }

  fireNewsletterSubscribeEvent(data: EventData & { email: string }): void {
    if (!this.initialized) return
    
    this.posthog.track('newsletter_subscribed', {
      email_hash: this.hashEmail(data.email),
      session_id: data.sessionId,
      user_id: data.userId,
    })
  }

  fireCustomEvent(eventName: string, data: Record<string, any>): void {
    if (!this.initialized) return
    
    this.posthog.track(eventName, data)
  }

  private hashEmail(email: string): string {
    // Simple hash for privacy - in production you might want to use a proper hash function
    return btoa(email).slice(0, 10)
  }
}