/**
 * Optimized lazy-loading utilities for performance-critical components
 * Reduces initial bundle size by code-splitting heavy libraries
 */

import { ComponentType, lazy, Suspense, ReactNode, useState, useEffect, useRef } from 'react';

// Fallback loading components for better UX
const AnimationFallback = () => (
  <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-32 w-full" />
);


const ComponentFallback = () => (
  <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-8 w-full" />
);

// Lazy load Framer Motion components (saves ~24KB from initial bundle)
export const LazyMotionDiv = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.div
  }))
);

export const LazyMotionSection = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.section
  }))
);

export const LazyMotionH1 = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.h1
  }))
);

export const LazyAnimatePresence = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.AnimatePresence
  }))
);

// Lazy load Rive Animation (saves ~15KB from initial bundle)
export const LazyRiveAnimation = lazy(() => 
  import('@/components/ui/RiveAnimation')
);

// Lazy load heavy form components (saves ~10KB each)
export const LazyFounderForm = lazy(() => 
  import('@/components/forms/FounderMultiStepForm')
);

export const LazyInvestorForm = lazy(() => 
  import('@/components/forms/InvestorMultiStepForm')
);

export const LazyCareerForm = lazy(() => 
  import('@/components/forms/CareerMultiStepForm')
);

export const LazyUnifiedApplicationForm = lazy(() => 
  import('@/components/UnifiedApplicationForm')
);

// Lazy load heavy UI components - these have named exports
export const LazyMenuItem = lazy(async () => {
  const m = await import('@/components/ui/navbar-menu');
  return { default: m.MenuItem };
});

export const LazyMenu = lazy(async () => {
  const m = await import('@/components/ui/navbar-menu');
  return { default: m.Menu };
});

export const LazyNavbar = lazy(async () => {
  const m = await import('@/components/ui/resizable-navbar');
  return { default: m.Navbar };
});

// HOC for wrapping lazy components with optimized Suspense
interface LazyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}

export function LazyWrapper({ 
  children, 
  fallback = <ComponentFallback />, 
  className 
}: LazyWrapperProps) {
  return (
    <Suspense fallback={<div className={className}>{fallback}</div>}>
      {children}
    </Suspense>
  );
}

// Optimized lazy loading with intersection observer for components below the fold
interface IntersectionLazyProps {
  component: ComponentType<any>;
  componentProps?: Record<string, any>;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

export function IntersectionLazy({
  component: Component,
  componentProps = {},
  fallback = <ComponentFallback />,
  rootMargin = '50px',
  threshold = 0.1,
  className
}: IntersectionLazyProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold, isVisible]);

  return (
    <div ref={ref} className={className}>
      {isLoaded ? (
        <LazyWrapper fallback={fallback}>
          <Component {...componentProps} />
        </LazyWrapper>
      ) : (
        fallback
      )}
    </div>
  );
}

// Preload utilities for critical path optimization
export function preloadComponent(importFn: () => Promise<any>) {
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback for non-blocking preload
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => importFn(), { timeout: 2000 });
    } else {
      setTimeout(() => importFn(), 1000);
    }
  }
}

// Smart preloading based on user interaction patterns
export function setupSmartPreloading() {
  if (typeof window === 'undefined') return;

  let hasInteracted = false;

  const preloadCriticalComponents = () => {
    if (hasInteracted) return;
    hasInteracted = true;

    // Preload based on likely user paths
    preloadComponent(() => import('framer-motion'));
    preloadComponent(() => import('@/components/forms/FounderMultiStepForm'));
    preloadComponent(() => import('@/components/forms/InvestorMultiStepForm'));
  };

  // Preload on first meaningful interaction
  const interactionEvents = ['mouseenter', 'touchstart', 'keydown'];
  interactionEvents.forEach(event => {
    document.addEventListener(event, preloadCriticalComponents, { 
      once: true, 
      passive: true 
    });
  });

  // Preload when connection is fast
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection && connection.effectiveType === '4g') {
      setTimeout(preloadCriticalComponents, 3000);
    }
  }
}

// Export default wrapper components for common use cases
export const MotionDiv = (props: any) => (
  <LazyWrapper fallback={<div className={props.className} />}>
    <LazyMotionDiv {...props} />
  </LazyWrapper>
);

export const MotionSection = (props: any) => (
  <LazyWrapper fallback={<section className={props.className} />}>
    <LazyMotionSection {...props} />
  </LazyWrapper>
);

export const AnimatePresence = (props: any) => (
  <LazyWrapper>
    <LazyAnimatePresence {...props} />
  </LazyWrapper>
);

export const RiveAnimation = (props: any) => (
  <LazyWrapper fallback={<AnimationFallback />}>
    <LazyRiveAnimation {...props} />
  </LazyWrapper>
);