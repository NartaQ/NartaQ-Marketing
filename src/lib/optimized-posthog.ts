/**
 * Optimized PostHog implementation for reduced bundle size
 */

interface PostHogConfig {
  capture_pageview: boolean;
  capture_pageleave: boolean;
  disable_session_recording: boolean;
  disable_surveys: boolean;
  autocapture: boolean;
  session_recording?: {
    recordCrossOriginIframes: boolean;
    recordCanvas: boolean;
    recordHeaders: boolean;
    recordBody: boolean;
    maskAllInputs: boolean;
    maskInputOptions: Record<string, boolean>;
    blockClass: string;
    blockSelector: string;
    ignoreDOMAttributes: string[];
    maskTextClass: string;
    maskTextSelector: string;
    maskTextFn: null;
    maskInputFn: null;
    slimDOMOptions: Record<string, boolean>;
    collectFonts: boolean;
    inlineStylesheet: boolean;
    recordingVersion: string;
  };
}

// Lightweight PostHog initialization without heavy rrweb components
export class OptimizedPostHog {
  private static instance: OptimizedPostHog;
  private posthog: any = null;
  private initialized = false;
  private loadPromise: Promise<void> | null = null;

  private constructor() {}

  static getInstance(): OptimizedPostHog {
    if (!OptimizedPostHog.instance) {
      OptimizedPostHog.instance = new OptimizedPostHog();
    }
    return OptimizedPostHog.instance;
  }

  async init(): Promise<void> {
    if (this.initialized || typeof window === 'undefined') {
      return;
    }

    if (this.loadPromise) {
      return this.loadPromise;
    }

    this.loadPromise = this.loadPostHog();
    return this.loadPromise;
  }

  private async loadPostHog(): Promise<void> {
    try {
      // Check if PostHog key is available
      if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
        console.warn('PostHog key not found - analytics disabled');
        return;
      }

      // Dynamic import with specific exclusion of rrweb to reduce bundle
      const posthogModule = await import('posthog-js');
      this.posthog = posthogModule.default;

      // Minimal configuration to exclude heavy recording features
      const config: PostHogConfig = {
        capture_pageview: false, // Manual control
        capture_pageleave: false, // Reduces events
        disable_session_recording: true, // Prevents rrweb loading (saves ~27KB)
        disable_surveys: true, // Reduces bundle size
        autocapture: false, // Manual event tracking for performance
        
        // If session recording is needed later, use minimal config
        session_recording: {
          recordCrossOriginIframes: false,
          recordCanvas: false,
          recordHeaders: false,
          recordBody: false,
          maskAllInputs: true,
          maskInputOptions: {},
          blockClass: 'ph-no-capture',
          blockSelector: '[data-ph-no-capture]',
          ignoreDOMAttributes: ['style', 'aria-label', 'aria-labelledby'],
          maskTextClass: 'ph-mask',
          maskTextSelector: '[data-ph-mask]',
          maskTextFn: null,
          maskInputFn: null,
          slimDOMOptions: {
            script: true,
            comment: true,
            headFavicon: true,
            headWhitespace: true,
            headMetaSocial: true,
            headMetaRobots: true,
            headMetaHttpEquiv: true,
            headMetaVerification: true,
            headMetaAuthorship: false,
            headMetaDescKeywords: false
          },
          collectFonts: false,
          inlineStylesheet: false,
          recordingVersion: 'v1'
        }
      };

      this.posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: "/ingest",
        ui_host: "https://eu.posthog.com",
        ...config,
        
        // Disable toolbar to prevent CSP issues
        opt_out_useragent_filter: false,
        opt_out_capturing_by_default: false,
        disable_external_dependency_loading: true,
        
        // Network optimizations
        batch_requests: true,
        request_timeout_ms: 8000,
        
        // Reduce feature flags impact
        bootstrap: {
          featureFlags: {},
          distinctID: undefined
        },
        
        // Minimal persona and property collection
        property_blacklist: ['$current_url', '$initial_referrer', '$referrer'],
        
        // Advanced performance settings
        cross_subdomain_cookie: false,
        persistence: 'localStorage',
        persistence_name: 'ph_' + process.env.NEXT_PUBLIC_POSTHOG_KEY.slice(0, 8),
        
        // Reduce automatic data collection
        mask_all_element_attributes: true,
        mask_all_text: false,
        
        // Optimize for SPA performance
        capture_performance: false,
        disable_persistence: false,
        secure_cookie: true,
        
        // Custom event batching for performance
        _onCapture: (eventName: string, properties: any) => {
          // Custom lightweight event processing
          if (process.env.NODE_ENV === 'development') {
            console.log('PostHog Event:', eventName, properties);
          }
        }
      });

      this.initialized = true;
      console.log('PostHog initialized successfully');
    } catch (error) {
      console.warn('Failed to initialize optimized PostHog:', error);
    }
  }

  // Lightweight tracking methods
  track(event: string, properties?: Record<string, any>): void {
    if (this.posthog && this.initialized) {
      this.posthog.capture(event, properties);
    }
  }

  identify(distinctId: string, properties?: Record<string, any>): void {
    if (this.posthog && this.initialized) {
      this.posthog.identify(distinctId, properties);
    }
  }

  // Manual page view tracking for better control
  trackPageView(properties?: Record<string, any>): void {
    if (this.posthog && this.initialized) {
      this.posthog.capture('$pageview', {
        $current_url: window.location.href,
        $title: document.title,
        ...properties
      });
    }
  }

  // Feature flag with fallback
  isFeatureEnabled(flag: string, defaultValue: boolean = false): boolean {
    if (this.posthog && this.initialized) {
      return this.posthog.isFeatureEnabled(flag) ?? defaultValue;
    }
    return defaultValue;
  }

  // Graceful shutdown
  shutdown(): void {
    if (this.posthog && this.initialized) {
      this.posthog.capture('$pageleave');
      this.posthog.reset();
    }
  }
}

// Smart loading strategy to minimize performance impact
export function initOptimizedPostHog(): void {
  if (typeof window === 'undefined') return;

  // Check if PostHog key is available
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    console.warn('NEXT_PUBLIC_POSTHOG_KEY not found - PostHog analytics disabled');
    return;
  }

  const posthog = OptimizedPostHog.getInstance();
  
  // Check user preferences
  if (navigator.doNotTrack === '1' || 
      localStorage.getItem('analytics-disabled') === 'true') {
    console.log('Analytics disabled by user preferences');
    return;
  }

  let hasLoaded = false;
  
  const loadAnalytics = () => {
    if (hasLoaded) return;
    hasLoaded = true;
    
    console.log('Initializing PostHog analytics...');
    
    // Use requestIdleCallback for non-blocking initialization
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => posthog.init(), { timeout: 3000 });
    } else {
      setTimeout(() => posthog.init(), 1500);
    }
  };

  // Load on meaningful user interactions only
  const meaningfulEvents = ['click', 'keydown', 'touchstart', 'scroll'];
  
  const handleInteraction = () => {
    loadAnalytics();
    meaningfulEvents.forEach(event => {
      document.removeEventListener(event, handleInteraction);
    });
  };

  meaningfulEvents.forEach(event => {
    document.addEventListener(event, handleInteraction, { 
      passive: true, 
      once: true 
    });
  });

  // Load when tab becomes visible (user engagement)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !hasLoaded) {
      loadAnalytics();
    }
  });

  // Conservative fallback - only load after 10 seconds of no interaction
  setTimeout(() => {
    if (!hasLoaded) {
      console.log('Loading PostHog analytics after timeout...');
      loadAnalytics();
    }
  }, 10000);
}

// Export singleton for easy access
export const analytics = OptimizedPostHog.getInstance();

// Convenience functions for common tracking scenarios
export const trackEvent = (event: string, properties?: Record<string, any>) => {
  analytics.track(event, properties);
};

export const trackPageView = (properties?: Record<string, any>) => {
  analytics.trackPageView(properties);
};

export const identifyUser = (userId: string, properties?: Record<string, any>) => {
  analytics.identify(userId, properties);
};