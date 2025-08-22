import Link from "next/link";

export const metadata = {
  title: "NartaQ Work | Startups ↔ Providers",
  description: "Clear projects, safe payments, and milestone tracking for reliable delivery.",
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
              Turn project ideas into results with clear tasks, safe payments, and step-by-step tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/solutions/startups" className="px-6 py-3 rounded-lg font-medium bg-[#a98b5d] text-black">For startups</Link>
              <Link href="/solutions/providers" className="px-6 py-3 rounded-lg font-medium border border-neutral-700">For providers</Link>
            </div>
          </div>
        </section>

        {/* Value blocks */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">For Startups</h2>
            <p className="text-neutral-400 mb-4">Ship projects reliably with clear requirements.</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Clear project briefs and completion requirements</li>
              <li>Private projects for trusted providers only</li>
              <li>Easy selection and award process with clear timelines</li>
              <li>Step-by-step payments and progress tracking</li>
              <li>Help with complex projects when needed</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">For Providers</h2>
            <p className="text-neutral-400 mb-4">Fair, clear work that rewards quality.</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Clear tasks and completion requirements</li>
              <li>Fast reviews and payment when work is done</li>
              <li>Mixed payment options (cash + equity)</li>
              <li>Clear records and fair dispute process</li>
              <li>Build your reputation through verified work</li>
            </ul>
          </div>
        </section>

        {/* Why it works */}
        <section className="max-w-6xl mx-auto p-6">
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">Why this works</h2>
            <p className="text-neutral-400 mb-4">Clear quality standards and fair incentives reduce risk.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-neutral-300">
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Clear requirements</h3>
                <p className="text-sm">Objective checks turn unclear quality into simple pass/fail tests.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Step-by-step payments</h3>
                <p className="text-sm">Break payments into stages so everyone knows what to expect.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 p-5">
                <h3 className="font-medium mb-1">Help when needed</h3>
                <p className="text-sm">Keep work moving with fast, fair ways to solve problems.</p>
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
