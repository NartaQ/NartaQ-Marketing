'use client'

import { Suspense, lazy } from 'react'
import { OptimizedHero } from '@/components/optimized-hero'
import { Header } from '@/components/header'
import { AceternityFeatures } from '@/components/aceternity-features'
import { OptimizedStats } from '@/components/optimized-stats'
import { OptimizedCTA } from '@/components/optimized-cta'
import AnimatedBeamDemo from '@/components/fundra-integrations'
import { LazySection } from '@/components/lazy-section'
import { SectionSkeleton } from '@/components/section-skeleton'
import { useOptimizedAnimations } from '@/hooks/use-optimized-animations'
import { PageTransition } from '@/components/page-transition'
import { Spotlight } from '@/components/ui/spotlight'
// Lazy load essential components only
const Footer = lazy(() =>
  import('@/components/footer').then((m) => ({ default: m.Footer }))
)

export default function Page() {
  useOptimizedAnimations()

  return (
    <PageTransition>
      <div className='min-h-screen bg-raisin-black text-white relative overflow-hidden'>
        <Spotlight
          fill='white'
          className='absolute -top-60 -left-60 h-[1200px] w-[1200px] lg:h-[1600px] lg:w-[1600px] opacity-40 animate-spotlight pointer-events-none z-[11]'
        />
        <div className='relative z-10'>
          <Header />
          <OptimizedHero />
          <AceternityFeatures />
          <OptimizedStats />
          <AnimatedBeamDemo />
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
      </div>
    </PageTransition>
  )
}
