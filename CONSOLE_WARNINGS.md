# Expected Console Warnings

This document explains console warnings that are normal and safe to ignore during development.

## Facebook Pixel Warnings

```
fbevents.js:324 Unrecognized feature: 'attribution-reporting'
fbevents.js:111 Unrecognized feature: 'browsing-topics'
```

**What it is:** Facebook Pixel is testing experimental web platform features for privacy-preserving attribution and topic-based advertising.

**Impact:** None. These are feature detection warnings, not errors.

**Action:** Safe to ignore. These will disappear as browser support improves.

## Font Preload Warnings

```
The resource <URL> was preloaded using link preload but not used within a few seconds
```

**What it is:** Fonts are preloaded for performance, but the page loads so quickly that they're not needed immediately.

**Impact:** Actually indicates good performance! The page is loading faster than expected.

**Action:** This is a positive indicator. No action needed.

## Browser Extension Logs

```
mainWorldContentScript.bundle.js:2 truncate {...}
```

**What it is:** Development tools and browser extensions (like Google Tag Assistant) logging their activity.

**Impact:** None. Only visible in development with extensions enabled.

**Action:** These don't appear for regular users without extensions.

## Analytics Initialization

Various analytics services (Google Analytics, PostHog, LinkedIn) may log initialization messages. These are normal and indicate proper setup.

---

**Summary:** All warnings listed above are expected and harmless. They indicate the site is working correctly with proper analytics setup and good performance characteristics.