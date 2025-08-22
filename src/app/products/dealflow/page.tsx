import Link from "next/link";
import { MagicCard } from "@/components/magicui/magic-card";
import { Particles } from "@/components/magicui/particles";
import { Spotlight } from "@/components/ui/spotlight";

export const metadata = {
  title: "NartaQ Dealflow | Investors & Startups",
  description: "AI-powered pitch reviews, scoring, and smart connections for better meetings.",
};

export default function DealflowProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white relative">
      <Particles className="absolute inset-0" quantity={100} ease={80} color="#a98b5d" refresh />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#a98b5d" />
      <main>
        {/* Hero */}
        <section className="relative flex w-full flex-col items-center justify-center p-[2%] py-24 text-center overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-[#a98b5d]">NartaQ</span>{' '}
              <span className="bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent">
                Dealflow
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
              A smart, trust-based way for startups and investors to meet, check fit, and move forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <Link href="/solutions/investors" className="group relative px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-xl shadow-2xl hover:shadow-[#a98b5d]/50 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">For investors</span>
              </Link>
              <Link href="/solutions/startups" className="px-8 py-4 text-lg font-bold border-2 border-[#a98b5d] text-[#a98b5d] rounded-xl hover:bg-[#a98b5d] hover:text-black transition-all duration-300">For startups</Link>
            </div>
          </div>
        </section>

        {/* Value blocks */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="rounded-2xl border border-neutral-800 p-8 bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">For Investors</h2>
            <p className="text-neutral-400 mb-4">Find quality deals with smart filtering.</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>Credit-based pitch submissions to limit spam and ensure quality</li>
              <li>AI checks and standard scoring for quick review</li>
              <li>Smart intros matched to your stage, sector, and focus</li>
              <li>Secure access for sensitive materials when needed</li>
              <li>Track progress from term sheet to due diligence to closing</li>
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
