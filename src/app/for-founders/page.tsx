import {
  ArrowRight,
  CheckCircle,
  Clock,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Founders - Get Matched, Not Rejected | NartaQ",
  description:
    "Stop wasting time on cold outreach. Connect directly with vetted investors who are actively looking for companies like yours. Apply for early access today.",
  keywords: [
    "startup fundraising",
    "investor matching",
    "venture capital",
    "cold outreach alternative",
    "startup funding",
    "investor network",
    "AI matching",
    "fundraising platform",
  ],
  openGraph: {
    title: "For Founders - Get Matched, Not Rejected | NartaQ",
    description:
      "Stop wasting time on cold outreach and rejections. Connect directly with vetted investors through our AI-powered matching platform.",

    siteName: "NartaQ",
  },
  twitter: {
    title: "For Founders - Get Matched, Not Rejected | NartaQ",
    description:
      "Stop wasting time on cold outreach and rejections. Connect directly with vetted investors through our AI-powered matching platform.",
  },
  alternates: {
    canonical: "https://www.nartaq.com/for-founders",
  },
};

export default function ForFoundersPage() {
  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Hero Section - Founder Focused */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 grid-pattern opacity-20" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-8">
              <Target className="w-4 h-4 text-[#a98b5d]" />
              <span className="text-sm font-medium text-[#dcd7ce]">
                FOR FOUNDERS
              </span>
            </div>

            {/* Main Headline - Founder Pain Point Focused */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-[#dcd7ce]">Get Matched.</span>{" "}
              <span className="text-[#a98b5d]">Not Rejected.</span>
            </h1>

            {/* Subheadline - Founder Value Prop */}
            <p className="text-xl md:text-2xl text-[#dcd7ce]/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              You build. We match. You close. <span className="text-[#a98b5d] font-semibold">250 spots</span> for the founding cohort.
            </p>

            {/* Single CTA */}
            <div className="flex justify-center items-center mb-12">
              <Link
                title="Apply for Early Access"
                href="/apply"
                className="group relative bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] hover:bg-[#a98b5d]/90 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#a98b5d]/25"
              >
                <span className="relative z-10 flex items-center">
                  <Rocket className="w-5 h-5 mr-2" />
                  Apply for Early Access
                </span>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#a98b5d]/10 border border-[#a98b5d]/30 rounded-full backdrop-blur-xl">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-[#dcd7ce] font-medium">
                  Founding Cohort Closing Soon. 250 Spots Total.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Pain Points Section */}
        <section className="py-16 sm:py-24 lg:py-32 ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6">
                <Clock className="w-4 h-4 text-[#a98b5d]" />
                <span className="text-sm font-medium text-[#dcd7ce]">
                  THE PROBLEM
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#dcd7ce]">The System Is</span>{" "}
                <span className="text-[#a98b5d]">Rigged</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Warm intros are a myth. You're wasting months chasing people who will never invest.
                <br />
                <span className="text-[#a98b5d] font-semibold">Stop playing a game you can't win.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="relative p-8 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent hover:border-red-500/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">
                    Wasted Time
                  </h3>
                  <div className="w-12 h-0.5 bg-red-400 mx-auto mb-4"></div>
                  <p className="text-[#dcd7ce] leading-relaxed mb-4">
                    Stop wasting months searching for the right investors. Your
                    time should be spent building, not hunting for capital.
                  </p>
                  <div className="text-sm font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full inline-block">
                    Time drain
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="relative p-8 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent hover:border-red-500/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center">
                    <Target className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">
                    Endless Rejections
                  </h3>
                  <div className="w-12 h-0.5 bg-red-400 mx-auto mb-4"></div>
                  <p className="text-[#dcd7ce] leading-relaxed mb-4">
                    Stop getting a "no" from investors who were never a good fit
                    for your stage, sector, or vision.
                  </p>
                  <div className="text-sm font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full inline-block">
                    Poor matching
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="relative p-8 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent hover:border-red-500/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center">
                    <Users className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">
                    No Access
                  </h3>
                  <div className="w-12 h-0.5 bg-red-400 mx-auto mb-4"></div>
                  <p className="text-[#dcd7ce] leading-relaxed mb-4">
                    Stuck outside the exclusive networks of major tech hubs.
                    Location bias kills great ideas.
                  </p>
                  <div className="text-sm font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full inline-block">
                    Location bias
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transition Section */}
        <section className="py-12 ">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#a98b5d] mb-4">
                We're building a merit-based solution.
              </h2>
              <div className="w-16 h-0.5 bg-[#a98b5d] mx-auto mb-6"></div>
              <p className="text-lg text-[#dcd7ce]/80 leading-relaxed">
                We believe the best ideas should win. We're building the
                infrastructure to make that a reality.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 sm:py-24 lg:py-32 ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6">
                <CheckCircle className="w-4 h-4 text-[#a98b5d]" />
                <span className="text-sm font-medium text-[#dcd7ce]">
                  OUR SOLUTION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#dcd7ce]">The Unfair</span>{" "}
                <span className="text-[#a98b5d]">Advantage</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                We don't just match you. We give you the network you deserve. Instantly.
                <br />
                No cold emails. No begging. Just deals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-[#a98b5d]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">
                    Find Investors Who Get It
                  </h3>
                  <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                  <p className="text-[#dcd7ce] leading-relaxed mb-4">
                    Our proprietary AI engine does the heavy lifting for you. We
                    analyze hundreds of data points to find investors who are a
                    perfect match for your company's stage, sector, and vision.
                  </p>
                  <div className="text-sm font-semibold text-[#a98b5d] bg-[#a98b5d]/10 px-3 py-1 rounded-full inline-block">
                    AI-powered matching
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#a98b5d]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">
                    A Vetted Network
                  </h3>
                  <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                  <p className="text-[#dcd7ce] leading-relaxed mb-4">
                    Access a growing network of active investors who will be
                    vetted by NartaQ and actively looking to invest in companies
                    like yours.
                  </p>
                  <div className="text-sm font-semibold text-[#a98b5d] bg-[#a98b5d]/10 px-3 py-1 rounded-full inline-block">
                    Quality network
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
                    <Target className="w-8 h-8 text-[#a98b5d]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">
                    The NartaQ Difference
                  </h3>
                  <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                  <p className="text-[#dcd7ce] leading-relaxed mb-4">
                    Our AI analyzes your business, team, and deck to build a
                    'founder reputation profile' that goes beyond a single warm
                    intro. We present a data-backed case for why you are a
                    high-potential founder.
                  </p>
                  <div className="text-sm font-semibold text-[#a98b5d] bg-[#a98b5d]/10 px-3 py-1 rounded-full inline-block">
                    Merit-based matching
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Founder Journey */}
        <section className="py-16 sm:py-24 lg:py-32 ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6">
                <Target className="w-4 h-4 text-[#a98b5d]" />
                <span className="text-sm font-medium text-[#dcd7ce]">
                  HOW IT WORKS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#dcd7ce]">3 Steps.</span>{" "}
                <span className="text-[#a98b5d]">Funded.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-6 mx-auto">
                    1
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">
                    Onboarding
                  </h3>
                  <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                  <p className="text-[#dcd7ce] leading-relaxed">
                    Create your profile and we'll personally review it. We're on
                    a mission to build a high-quality community. This human
                    element builds trust.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-6 mx-auto">
                    2
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">
                    Intelligent Matching
                  </h3>
                  <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                  <p className="text-[#dcd7ce] leading-relaxed">
                    Get a curated list of high-probability matches. Our AI will
                    find investors whose thesis matches your business, saving
                    you countless hours of research.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-6 mx-auto">
                    3
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">
                    Connect & Close
                  </h3>
                  <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>
                  <p className="text-[#dcd7ce] leading-relaxed">
                    We provide a secure environment for discussion and manage
                    the documentation and fund transfer, making the entire
                    process frictionless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 ">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#dcd7ce]">Claim Your</span>{" "}
                <span className="text-[#a98b5d]">Spot</span>
              </h2>
              <div className="w-24 h-0.5 bg-[#a98b5d] mx-auto mb-8"></div>
              <p className="text-xl text-[#dcd7ce]/80 mb-6 max-w-2xl mx-auto leading-relaxed">
                250 Founding Memberships. Then we close the doors.
                <br />
                Don't get left behind.
              </p>

              <a
                href="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#a98b5d]/50"
              >
                <Target className="w-5 h-5" />
                Apply for Early Access
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
