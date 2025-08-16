import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BountySection from "@/components/BountySection";
import OrchestrationSection from "@/components/OrchestrationSection";
import TrustComplianceSection from "@/components/TrustComplianceSection";

export const metadata = {
  title: "Companies ↔ Providers | NartaQ",
};

export default function CompaniesProvidersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main>
        <section className="flex w-full flex-col items-center justify-center p-[2%] py-24">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-5xl font-semibold">Companies ↔ Providers</h1>
            <p className="text-neutral-400">
              Hire SPs through scoped bounties and milestone‑based orchestration with optional intermediation.
            </p>
          </div>
        </section>
        <BountySection />
        <OrchestrationSection />
        <TrustComplianceSection />
      </main>
      <Footer />
    </div>
  );
}
