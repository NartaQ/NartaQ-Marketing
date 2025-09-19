export interface EventData {
  sessionId: string
  userId?: string
  timestamp: string
  userAgent?: string
  referrer?: string
  pageUrl?: string
}

export interface ApplicationEventData extends EventData {
  applicationType: 'founder' | 'investor' | 'career'
  applicationId?: string
  formStep?: number
  sector?: string[]
  fundingStage?: string
  location?: string
  companyName?: string
  email?: string // For LinkedIn enhanced matching
}

export interface CTAEventData extends EventData {
  ctaText: string
  ctaType: 'button' | 'link' | 'banner' | 'modal' | 'nav' | 'footer' | 'hero' | 'form'
  ctaLocation: string // Where on the page (header, footer, sidebar, main content, etc.)
  ctaDestination?: string // URL or action target
  ctaVariant?: string // primary, secondary, outline, etc.
  pageContext?: string // What page/section the CTA is on
}

export interface PageViewEventData extends EventData {
  pagePath: string
  pageTitle: string
  previousPage?: string
}

export interface UserIdentificationData {
  email: string
  name?: string
  userId?: string
  phone?: string
}

export interface BaseTracker {
  serviceName: string
  initialize(): Promise<void> | void
  identifyUser(data: UserIdentificationData): void
  firePageViewEvent(data: PageViewEventData): void
  fireCTAClickEvent(data: CTAEventData): void
  fireApplicationStartEvent(data: ApplicationEventData): void
  fireApplicationStepEvent(data: ApplicationEventData): void
  fireApplicationSubmitEvent(data: ApplicationEventData): void
  fireApplicationCompleteEvent(data: ApplicationEventData): void
  fireApplicationErrorEvent(data: ApplicationEventData & { error: string }): void
  fireNewsletterSubscribeEvent(data: EventData & { email: string }): void
  fireCustomEvent(eventName: string, data: Record<string, any>): void
}

export type TrackerEvent = 
  | 'page_view'
  | 'cta_click'
  | 'application_start'
  | 'application_step'
  | 'application_submit'
  | 'application_complete'
  | 'application_error'
  | 'newsletter_subscribe'
  | 'custom'