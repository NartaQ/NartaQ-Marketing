import { initOptimizedPostHog } from './src/lib/optimized-posthog';

export function register() {
    // Initialize optimized PostHog without rrweb components
    initOptimizedPostHog();
}