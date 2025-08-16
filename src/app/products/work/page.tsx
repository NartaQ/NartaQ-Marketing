import Link from "next/link";

export const metadata = {
  title: "NartaQ Work | Startups ↔ Providers",
  description: "Scoped bounties, tri‑party orchestration, and milestone protections for reliable delivery.",
};

export default function WorkProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main>
        {/* Hero */}
        <section className="flex w-full flex-col items-center justify-center p-[2%] py-24">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <h1 className="text-5xl font-semibold">NartaQ Work</h1>
            <p className="text-neutral-400">
              Turn scope into outcomes with bounties, milestone releases, and optional intermediation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/for/startups" className="px-6 py-3 rounded-lg font-medium bg-[#a98b5d] text-black">For startups</Link>
              <Link href="/for/providers" className="px-6 py-3 rounded-lg font-medium border border-neutral-700">For providers</Link>
            </div>
          </div>
        </section>

        {/* Value blocks */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">For Startups</h2>
            <p className="text-neutral-400 mb-4">Ship reliably with measurable acceptance.</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Scoped briefs and acceptance criteria templates</li>
              <li>Private bounties restricted to pre‑vetted SPs</li>
              <li>Shortlist → award workflows with clear timelines</li>
              <li>Milestone protections and staged releases</li>
              <li>Optional intermediation for complex projects</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">For Providers</h2>
            <p className="text-neutral-400 mb-4">Fair, transparent engagements that reward quality.</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Clear deliverables and acceptance checks</li>
              <li>Timeboxed reviews and payout on acceptance</li>
              <li>Hybrid compensation support (cash + equity/options)</li>
              <li>Audit trails and dispute pathways that protect both sides</li>
              <li>Reputation building through verified outcomes</li>
            </ul>
          </div>
        </section>

        {/* Why it works */}
        <section className="max-w-6xl mx-auto p-6">
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">Why this works</h2>
            <p className="text-neutral-400 mb-4">Measurable quality and aligned incentives reduce risk.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-neutral-300">
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Acceptance criteria</h3>
                <p className="text-sm">Objective checks turn subjective quality into pass/fail gates.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Milestone protections</h3>
                <p className="text-sm">Staged releases make delivery and payment expectations clear.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Optional mediation</h3>
                <p className="text-sm">Keep work moving with fast, structured dispute pathways.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="max-w-4xl mx-auto p-6 pb-16 text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/for/startups" className="px-6 py-3 rounded-lg font-medium bg-[#a98b5d] text-black">I’m a startup</Link>
            <Link href="/for/providers" className="px-6 py-3 rounded-lg font-medium border border-neutral-700">I’m a provider</Link>
            <Link href="/companies-providers#bounties" className="px-6 py-3 rounded-lg font-medium border border-neutral-700">Explore bounties</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
