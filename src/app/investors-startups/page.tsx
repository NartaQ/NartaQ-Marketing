import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdditionalFeaturesSection from "@/components/AdditionalFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";

export const metadata = {
  title: "Investors ↔ Startups | NartaQ",
};

export default function InvestorsStartupsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main>
        <section className="flex w-full flex-col items-center justify-center p-[2%] py-24">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-5xl font-semibold">Investors ↔ Startups</h1>
            <p className="text-neutral-400">
              Credit‑based deck reviews, curated intros, and transparent progress tracking.
            </p>
          </div>
        </section>
        <AdditionalFeaturesSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
