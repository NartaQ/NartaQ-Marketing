import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProblemsSection from '../components/ProblemsSection'
import AboutSection from '../components/AboutSection'
import AdditionalFeaturesSection from '../components/AdditionalFeaturesSection'
import MarketInsightsSection from '../components/MarketInsightsSection'
import PricingSection from '../components/PricingSection'
import BlogSection from '../components/BlogSection'
import NewsletterSection from '../components/NewsletterSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <AboutSection />
      <AdditionalFeaturesSection />
      <MarketInsightsSection />
      <PricingSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
