import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import StickySection from "../components/StickySection";
import EcosystemSection from "../components/EcosystemSection";
import TrustComplianceSection from "../components/TrustComplianceSection";
import OrchestrationSection from "../components/OrchestrationSection";
import BountySection from "../components/BountySection";
import FaqSection from "../components/FaqSection";
import AdditionalFeaturesSection from "../components/AdditionalFeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import BlogSection from "../components/BlogSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <HeroSection />
      <EcosystemSection />
      <FeaturesSection />
      <StickySection />
      <BountySection />
      <OrchestrationSection />
      <TrustComplianceSection />
      <AdditionalFeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
