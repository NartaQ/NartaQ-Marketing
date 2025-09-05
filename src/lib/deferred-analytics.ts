/**
 * Deferred Google Analytics Loading
 * Optimized to load GTM only when needed for better Core Web Vitals
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

let gtmLoaded = false;
let gtmQueue: Array<() => void> = [];

export function loadGTM(): Promise<void> {
  return new Promise((resolve) => {
    if (gtmLoaded) {
      resolve();
      return;
    }

    // Check if running in browser
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    // Check if user has Do Not Track enabled
    if (navigator.doNotTrack === '1' || (window as any).doNotTrack === '1') {
      resolve();
      return;
    }

    gtmLoaded = true;

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    function gtag(...args: any[]) {
      window.dataLayer.push(...args);
    }
    
    window.gtag = gtag;

    // Load GTM script with error handling
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CZ3D93J3CR';
    
    script.onload = () => {
      // Initialize Google Analytics
      gtag('js', new Date());
      gtag('config', 'G-CZ3D93J3CR', {
        // Optimize for performance
        send_page_view: false, // We'll send manually
        custom_map: {
          'custom_parameter': 'value'
        }
      });

      // Process queued events
      gtmQueue.forEach(fn => fn());
      gtmQueue = [];
      
      resolve();
    };

    script.onerror = () => {
      console.warn('Failed to load Google Analytics');
      resolve();
    };

    document.head.appendChild(script);
  });
}

export function trackEvent(eventName: string, parameters?: any) {
  if (gtmLoaded && window.gtag) {
    window.gtag('event', eventName, parameters);
  } else {
    // Queue the event for when GTM loads
    gtmQueue.push(() => {
      if (window.gtag) {
        window.gtag('event', eventName, parameters);
      }
    });
  }
}

export function trackPageView(path?: string) {
  if (gtmLoaded && window.gtag) {
    window.gtag('config', 'G-CZ3D93J3CR', {
      page_path: path || window.location.pathname
    });
  } else {
    gtmQueue.push(() => {
      if (window.gtag) {
        window.gtag('config', 'G-CZ3D93J3CR', {
          page_path: path || window.location.pathname
        });
      }
    });
  }
}

// Auto-load GTM with smart triggers
export function initDeferredAnalytics() {
  if (typeof window === 'undefined') return;

  // Load on first user interaction
  const interactionEvents = ['mousedown', 'keydown', 'touchstart', 'scroll'];
  
  const loadOnInteraction = () => {
    loadGTM();
    interactionEvents.forEach(event => {
      document.removeEventListener(event, loadOnInteraction);
    });
  };

  // Add interaction listeners
  interactionEvents.forEach(event => {
    document.addEventListener(event, loadOnInteraction, { 
      passive: true, 
      once: true 
    });
  });

  // Load when page becomes visible (if user switches tabs)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      loadGTM();
    }
  });

  // Fallback: load after 10 seconds if no interaction
  setTimeout(() => {
    loadGTM();
  }, 10000);

  // Load immediately if page was loaded from cache (bfcache)
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      loadGTM();
    }
  });
}