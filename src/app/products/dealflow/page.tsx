import Link from "next/link";

export const metadata = {
  title: "NartaQ Dealflow | Investors & Startups",
  description: "AI‑assisted deck checks, scoring, and curated intros for fit‑first meetings.",
};

export default function DealflowProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main>
        {/* Hero */}
        <section className="flex w-full flex-col items-center justify-center p-[2%] py-24">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <h1 className="text-5xl font-semibold">NartaQ Dealflow</h1>
            <p className="text-neutral-400">
              A focused, trust‑layered way for startups and investors to meet, assess, and progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/for/investors" className="px-6 py-3 rounded-lg font-medium bg-[#a98b5d] text-black">For investors</Link>
              <Link href="/for/startups" className="px-6 py-3 rounded-lg font-medium border border-neutral-700">For startups</Link>
            </div>
          </div>
        </section>

        {/* Value blocks */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">For Investors</h2>
            <p className="text-neutral-400 mb-4">Signal over noise with corridor‑aware screening.</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Credit‑based deck submissions to limit spam and enforce quality</li>
              <li>AI rubric checks and standardized scoring for quick triage</li>
              <li>Curated intros aligned to stage, sector, and thesis</li>
              <li>NDA‑gated access for sensitive materials when appropriate</li>
              <li>Tracked progress from term sheet → diligence → close</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">For Startups</h2>
            <p className="text-neutral-400 mb-4">Clarity on fit and next steps through structured feedback.</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>AI‑assisted deck feedback against investor‑friendly rubrics</li>
              <li>Warm intros matched to investor theses (not broad blasts)</li>
              <li>Transparent status and follow‑ups so cycles don’t stall</li>
              <li>Corridor focus helps with language, compliance, and context</li>
              <li>Optional templates and guidance for data rooms</li>
            </ul>
          </div>
        </section>

        {/* Why it works */}
        <section className="max-w-6xl mx-auto p-6">
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">Why this works</h2>
            <p className="text-neutral-400 mb-4">A corridor‑specialized approach prioritizes relevance and trust.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-neutral-300">
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Focused corridor</h3>
                <p className="text-sm">Franco‑Tunisian wedge with shared context, language, and expectations.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Structured screening</h3>
                <p className="text-sm">AI rubric checks and standardized scoring to reduce time to clarity.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Tracked progress</h3>
                <p className="text-sm">Status visibility and clean handoffs to diligence reduce friction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="max-w-4xl mx-auto p-6 pb-16 text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/for/investors" className="px-6 py-3 rounded-lg font-medium bg-[#a98b5d] text-black">I’m an investor</Link>
            <Link href="/for/startups" className="px-6 py-3 rounded-lg font-medium border border-neutral-700">I’m a startup</Link>
            <a href="mailto:invest@nartaq.com?subject=Investor%20Memo%20(NDA)" className="px-6 py-3 rounded-lg font-medium border border-neutral-700">Request investor memo (NDA)</a>
          </div>
        </section>
      </main>
    </div>
  );
}
