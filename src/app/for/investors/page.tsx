import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "For Investors | NartaQ",
  description: "Cut noise. Pay for quality signals. Curated intros only when there’s fit.",
};

export default function ForInvestorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main>
        <section className="flex w-full flex-col items-center justify-center p-[2%] py-20 text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold">See fewer decks. Make better picks.</h1>
            <p className="text-neutral-400">
              Pay small credits to trigger rubric‑based reviews. We route only the ones that clear your bar.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">Signal you can trust</h2>
            <p className="text-sm text-neutral-400">Structured rubrics and reviewer accountability reduce spray‑and‑pray spam.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">Curated intros</h2>
            <p className="text-sm text-neutral-400">We route only after a match on stage, sector, geography and thesis.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">NDA memo available</h2>
            <p className="text-sm text-neutral-400">Request our investor memo to go deeper on process and compliance.</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto p-6 pb-16 text-center">
          <a href="mailto:invest@nartaq.com?subject=Investor%20Memo%20Request" className="px-6 py-3 rounded-lg font-medium bg-[#a98b5d] text-black inline-block">Request investor memo</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
