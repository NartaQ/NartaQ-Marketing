import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "For Startups | NartaQ",
  description: "Stop cold emailing. Get rubric feedback and warm intros when there’s fit.",
};

export default function ForStartupsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main>
        <section className="flex w-full flex-col items-center justify-center p-[2%] py-20 text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold">Less pitching. More progress.</h1>
            <p className="text-neutral-400">
              Submit your deck, get structured rubric feedback, and only get intro’d when there’s investor fit.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">Actionable rubric feedback</h2>
            <p className="text-sm text-neutral-400">Know what to fix before burning cycles on the wrong rooms.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">Fit‑first intros</h2>
            <p className="text-sm text-neutral-400">We route after we see a match on stage, sector, and thesis.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">Corridor credibility</h2>
            <p className="text-sm text-neutral-400">Start focused in our FR↔TN corridor to build traction faster.</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto p-6 pb-16 text-center">
          <Link href="/investors-startups" className="px-6 py-3 rounded-lg font-medium bg-[#a98b5d] text-black inline-block">How it works</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
