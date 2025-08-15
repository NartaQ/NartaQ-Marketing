import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BrandsSection from '../components/BrandsSection'
import FeaturesSection from '../components/FeaturesSection'
import StickySection from '../components/StickySection'
import AdditionalFeaturesSection from '../components/AdditionalFeaturesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import PricingSection from '../components/PricingSection'
import BlogSection from '../components/BlogSection'
import NewsletterSection from '../components/NewsletterSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col bg-black text-white'>
      <Header />
      <HeroSection />
      <BrandsSection />
      <FeaturesSection />
      <StickySection />
      <AdditionalFeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
