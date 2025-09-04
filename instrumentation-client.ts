import posthog from "posthog-js"

let isInitialized = false;

export function initPostHog() {
  if (isInitialized || typeof window === 'undefined') {
    return;
  }

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    defaults: '2025-05-24',
    capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
    debug: process.env.NODE_ENV === "development",
  });

  isInitialized = true;
}

// Defer initialization until after the page has loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPostHog);
  } else {
    // If the document is already loaded, defer to next tick
    setTimeout(initPostHog, 0);
  }
}