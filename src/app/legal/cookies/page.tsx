import { Cookie, Settings, Eye, Shield } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy - NartaQ",
  description:
    "Learn about how NartaQ uses cookies and similar technologies to improve your experience. Manage your cookie preferences and understand our data practices.",
  keywords: [
    "NartaQ cookies",
    "NartaQ cookie policy",
    "NartaQ privacy",
    "NartaQ tracking",
    "NartaQ data collection",
    "NartaQ user experience",
    "cookie preferences",
  ],
  openGraph: {
    title: "Cookie Policy - NartaQ",
    description: "Learn about how NartaQ uses cookies and similar technologies to improve your experience.",
    siteName: "NartaQ",
  },
  twitter: {
    title: "Cookie Policy - NartaQ",
    description:
      "Learn about how NartaQ uses cookies and similar technologies to improve your experience.",
  },
  alternates: {
    canonical: "https://www.nartaq.com/legal/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-8">
              <Cookie className="w-4 h-4" />
              COOKIE POLICY
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#dcd7ce]">Cookie</span>{" "}
              <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-lg text-gray-400">
              Learn about how NartaQ uses cookies and similar technologies to
              improve your experience.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: August 24, 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* What Are Cookies */}
            <section className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-6 h-6 text-[#a98b5d]" />
                <h2 className="text-2xl font-bold text-[#dcd7ce]">
                  What Are Cookies?
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Cookies are small text files that are placed on your device
                  when you visit our website. They are widely used to make
                  websites work more efficiently and to provide information to
                  website owners.
                </p>
                <p>
                  We use cookies and similar tracking technologies to track
                  activity on our platform and hold certain information to
                  improve your experience and provide personalized content.
                </p>
              </div>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-[#dcd7ce] mb-8">
                Types of Cookies We Use
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-[#a98b5d] mb-4">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-300 text-sm">
                    These cookies are necessary for the website to function
                    properly. They enable basic functions like page navigation
                    and access to secure areas of the website.
                  </p>
                  <div className="mt-4 text-xs text-gray-400">
                    <strong>Purpose:</strong> Security, authentication, basic
                    functionality
                    <br />
                    <strong>Duration:</strong> Session and persistent
                  </div>
                </div>

                <div className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-[#a98b5d] mb-4">
                    Performance Cookies
                  </h3>
                  <p className="text-gray-300 text-sm">
                    These cookies help us understand how visitors interact with
                    our website by collecting and reporting information
                    anonymously.
                  </p>
                  <div className="mt-4 text-xs text-gray-400">
                    <strong>Purpose:</strong> Analytics, performance monitoring
                    <br />
                    <strong>Duration:</strong> Up to 2 years
                  </div>
                </div>

                <div className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-[#a98b5d] mb-4">
                    Functional Cookies
                  </h3>
                  <p className="text-gray-300 text-sm">
                    These cookies allow the website to remember choices you make
                    and provide enhanced, more personal features.
                  </p>
                  <div className="mt-4 text-xs text-gray-400">
                    <strong>Purpose:</strong> User preferences, personalization
                    <br />
                    <strong>Duration:</strong> Up to 1 year
                  </div>
                </div>

                <div className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-[#a98b5d] mb-4">
                    Marketing Cookies
                  </h3>
                  <p className="text-gray-300 text-sm">
                    These cookies track visitors across websites to display
                    relevant and engaging advertisements.
                  </p>
                  <div className="mt-4 text-xs text-gray-400">
                    <strong>Purpose:</strong> Targeted advertising, remarketing
                    <br />
                    <strong>Duration:</strong> Up to 1 year
                  </div>
                </div>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-6 h-6 text-[#a98b5d]" />
                <h2 className="text-2xl font-bold text-[#dcd7ce]">
                  Third-Party Services
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  We use the following third-party services that may set
                  cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Google Analytics:</strong> For website analytics and
                    performance monitoring
                  </li>
                  <li>
                    <strong>Google Ads:</strong> For advertising and conversion
                    tracking
                  </li>
                  <li>
                    <strong>LinkedIn Ads:</strong> For professional network
                    advertising
                  </li>
                  <li>
                    <strong>Hotjar:</strong> For user experience analysis
                  </li>
                  <li>
                    <strong>Intercom:</strong> For customer support chat
                    functionality
                  </li>
                </ul>
                <p>
                  Each of these services has its own privacy policy and cookie
                  practices. We recommend reviewing their policies to understand
                  how they use cookies.
                </p>
              </div>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-[#dcd7ce] mb-8">
                Managing Your Cookie Preferences
              </h2>
              <div className="space-y-6">
                <div className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-5 h-5 text-[#a98b5d]" />
                    <h3 className="text-xl font-semibold text-[#dcd7ce]">
                      Cookie Consent
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    When you first visit our website, we'll ask for your consent
                    to use cookies. You can change your preferences at any time
                    by clicking the cookie settings link in our footer.
                  </p>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-lg hover:from-[#dcd7ce] hover:to-[#a98b5d] transition-all duration-300">
                    Manage Cookie Preferences
                  </button>
                </div>

                <div className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-5 h-5 text-[#a98b5d]" />
                    <h3 className="text-xl font-semibold text-[#dcd7ce]">
                      Browser Settings
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    You can also control cookies through your browser settings.
                    Most browsers allow you to:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside ml-4">
                    <li>
                      See what cookies you have and delete them individually
                    </li>
                    <li>Block third-party cookies</li>
                    <li>Block all cookies from specific sites</li>
                    <li>Block all cookies from being set</li>
                    <li>Delete all cookies when you close your browser</li>
                  </ul>
                  <p className="text-gray-400 text-xs mt-4">
                    <strong>Note:</strong> Disabling certain cookies may affect
                    website functionality.
                  </p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section className="bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 border border-[#a98b5d]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-[#a98b5d]" />
                <h2 className="text-2xl font-bold text-[#dcd7ce]">
                  Updates to This Policy
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons.
                </p>
                <p>
                  When we make changes, we will update the "Last updated" date
                  at the top of this policy and notify users through our website
                  or other appropriate means.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="text-center bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#dcd7ce] mb-4">
                Questions About Cookies?
              </h2>
              <p className="text-gray-400 mb-6">
                If you have questions about our use of cookies or this policy,
                please contact us.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <strong className="text-[#a98b5d]">Email:</strong>{" "}
                  <Link
                    title='Send Privacy & Data Protection Inquiries'
                    href="mailto:privacy@nartaq.com"
                    className="underline hover:text-[#a98b5d]"
                  >
                    privacy@nartaq.com
                  </Link>
                </p>
                <p>
                  <strong className="text-[#a98b5d]">Address:</strong> 14
                  60 rue François 1er, 75008 Paris, France • RCS Paris 992 848 242
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
