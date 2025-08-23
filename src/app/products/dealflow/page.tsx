import Link from "next/link";

export const metadata = {
  title: "Dealflow Platform | NartaQ",
  description: "Community-owned platform to de-risk investing in the Tunisia–France corridor through collective intelligence.",
};

export default function DealflowProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main>
        {/* Hero */}
        <section className="flex w-full flex-col items-center justify-center p-[2%] py-24">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <h1 className="text-5xl font-semibold">
              <span className="text-[#a98b5d]">Collective Intelligence</span> Deal Engine
            </h1>
            <p className="text-neutral-400">
              Community-owned platform to de-risk investing in the Tunisia–France corridor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/solutions/investors" className="px-6 py-3 rounded-lg font-medium bg-[#a98b5d] text-black">For Investors</Link>
              <Link href="/solutions/startups" className="px-6 py-3 rounded-lg font-medium border border-neutral-700">For Startups</Link>
            </div>
          </div>
        </section>

        {/* Value blocks */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">For Investors</h2>
            <p className="text-neutral-400 mb-4">Gain exclusive access to a pre-vetted pipeline.</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Invitation-only network with shared intelligence</li>
              <li>Structured diligence with standardized outputs</li>
              <li>Immutable attestations to reduce validation redundancy</li>
              <li>Community governance for curation standards</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">For Startups</h2>
            <p className="text-neutral-400 mb-4">Apply to be part of the inaugural cohort.</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Get discovered by curated investor network</li>
              <li>Corridor-focused context and expertise</li>
              <li>Transparent process with clear next steps</li>
              <li>Pre-qualification to reduce time waste</li>
            </ul>
          </div>
        </section>

        {/* Why it works */}
        <section className="max-w-6xl mx-auto p-6">
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">Why It Matters</h2>
            <p className="text-neutral-400 mb-4">Aligned incentives create better outcomes for all participants.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-neutral-300">
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Focused Corridor</h3>
                <p className="text-sm">France–Tunisia specialization with shared context and expectations.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Collective Intelligence</h3>
                <p className="text-sm">Shared expertise improves pattern recognition as network scales.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Transparent Governance</h3>
                <p className="text-sm">Community-driven curation and platform evolution.</p>
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
