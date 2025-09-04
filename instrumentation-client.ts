import { initOptimizedPostHog } from './src/lib/optimized-posthog';

export function register() {
  if (typeof window !== 'undefined') {
    // Initialize optimized PostHog without rrweb components
    initOptimizedPostHog();
  }
}