'use client'

import { Suspense, lazy } from 'react'
import { OptimizedHero } from '@/components/optimized-hero'
import { Header } from '@/components/header'
import { AceternityFeatures } from '@/components/aceternity-features'
import { OptimizedStats } from '@/components/optimized-stats'
import { OptimizedCTA } from '@/components/optimized-cta'
import { LazySection } from '@/components/lazy-section'
import { SectionSkeleton } from '@/components/section-skeleton'
import { useOptimizedAnimations } from '@/hooks/use-optimized-animations'
import { PageTransition } from '@/components/page-transition'

// Lazy load essential components only
const Footer = lazy(() =>
  import('@/components/footer').then((m) => ({ default: m.Footer }))
)

export default function Page() {
  useOptimizedAnimations()

  return (
    <PageTransition>
      <div className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative'>
        <Header />
        <OptimizedHero />
        <AceternityFeatures />
        <OptimizedStats />
        <OptimizedCTA />

        <LazySection
          fallback={<SectionSkeleton height='h-32' />}
          className='scroll-mt-20'
        >
          <Suspense fallback={<SectionSkeleton height='h-32' />}>
            <Footer />
          </Suspense>
        </LazySection>
      </div>
    </PageTransition>
  )
}
