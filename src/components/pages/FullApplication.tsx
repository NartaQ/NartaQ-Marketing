// Full application with all features - loaded after interaction
import { lazy, Suspense } from 'react'
import OptimizedHeroSection from './OptimizedHeroSection'

// Lazy load all sections
const ProblemsSection = lazy(() => import('./ProblemsSection'))
const SolutionsSection = lazy(() => import('./SolutionsSection'))
const HowItWorksSection = lazy(() => import('./HowItWorksSection'))
const VisionSection = lazy(() => import('./VisionSection'))
const TrustComplianceSection = lazy(() => import('./TrustComplianceSection'))
const FaqSection = lazy(() => import('./FaqSection'))
const NewsletterSection = lazy(() => import('./NewsletterSection'))

// Loading component
const SectionLoader = () => (
  <div className="py-20">
    <div className="animate-pulse space-y-8 max-w-6xl mx-auto px-4">
      <div className="h-8 bg-gray-800 rounded w-1/3 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="space-y-4">
            <div className="h-6 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-600 rounded w-3/4"></div>
            <div className="h-4 bg-gray-600 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export function FullApplication() {
  return (
    <div className='flex min-h-screen flex-col bg-black text-white relative overflow-hidden'>
      {/* Hero loads immediately within full app */}
      <OptimizedHeroSection />

      {/* Progressive section loading */}
      <Suspense fallback={<SectionLoader />}>
        <ProblemsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SolutionsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <HowItWorksSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <VisionSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TrustComplianceSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FaqSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <NewsletterSection />
      </Suspense>
    </div>
  )
}