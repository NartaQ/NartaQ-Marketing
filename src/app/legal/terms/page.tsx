import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | NartaQ',
  description: 'Terms of Service governing use of the NartaQ platform (company in formation).',
  robots: { index: true, follow: true }
}

const LAST_UPDATED = '2025-08-23'

export default function TermsOfServicePage() {
  return (
    <main className="relative mx-auto max-w-4xl px-6 py-24 prose prose-invert prose-headings:font-semibold">
      <div className="mb-10 space-y-2">
        <h1 className="!mb-2 text-4xl font-bold bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">Terms of Service</h1>
        <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
        <p className="text-xs text-gray-500">These Terms are provided for transparency. NartaQ is currently an early-stage project and the legal entity is in formation. Some sections will be updated once the French company registration (SIREN) is issued.</p>
      </div>

      <section>
        <h2>1. Who We Are (Publisher)</h2>
        <p>
          NartaQ (the "Platform") is an invitation-only dealflow and governance platform focused on the France–Tunisia corridor. The operating company (anticipated form: SAS) is in formation in France. Until registration is complete, references to the "Company" mean the founding team operating in a pre-incorporation capacity.
        </p>
        <ul>
          <li>Provisional Name: NartaQ (SAS – in formation)</li>
          <li>Jurisdiction: France</li>
          <li>Planned Registered Office: (to be confirmed)</li>
          <li>Contact Email: <a href="mailto:legal@nartaq.com">legal@nartaq.com</a></li>
          <li>Director of Publication: Founding Team</li>
          <li>Hosting Provider: (To be finalized – likely Vercel / EU region). Hosting details and DPA will be added.</li>
        </ul>
        <p className="text-xs text-gray-500">French "Mentions Légales" will be supplemented post-registration (SIREN/SIRET + RCS + capital social).</p>
      </section>

      <section>
        <h2>2. Acceptance of the Terms</h2>
        <p>
          By accessing or using the Platform you agree to these Terms. If you do not agree, you must not use the Platform. If you are acting on behalf of an organization, you confirm you have authority to bind that organization.
        </p>
      </section>

      <section>
        <h2>3. Eligibility</h2>
        <p>
          Access is invitation-only. We may verify identity, investor status, or professional credentials before granting or continuing access. We may revoke access for misuse, breach, or risk concerns.
        </p>
      </section>

      <section>
        <h2>4. Platform Purpose & No Investment Advice</h2>
        <p>
          The Platform facilitates discovery, structured review, and community governance of startup opportunities. We do not provide investment, legal, tax, or financial advice. Any decision to invest is solely yours. Always perform independent due diligence or consult qualified professionals.
        </p>
      </section>

      <section>
        <h2>5. User Responsibilities</h2>
        <ul>
          <li>Provide only accurate, lawful, and non-misleading information.</li>
          <li>Respect confidentiality of deal materials if marked confidential.</li>
          <li>Do not upload content that infringes third-party rights or violates law.</li>
          <li>Do not attempt to bypass security, scrape private data, or misuse tokens.</li>
        </ul>
      </section>

      <section>
        <h2>6. Community & Governance Participation</h2>
        <p>
          Token or reputation systems (once active) may reward quality contributions (e.g., valid deal sourcing, high-signal reviews). We may adjust algorithms, scoring, or token mechanics at our discretion during the beta phase.
        </p>
      </section>

      <section>
        <h2>7. Intellectual Property</h2>
        <p>
          All Platform code, design, and content (excluding User Content) are owned by the Company or its licensors. You receive a limited, revocable, non-transferable right to use the Platform solely for permitted purposes.
        </p>
        <p>
          You retain rights in your original submissions but grant us a worldwide, non-exclusive, royalty-free license to store, display, and process them for Platform operation (including quality, trust, and governance mechanisms).
        </p>
      </section>

      <section>
        <h2>8. Confidentiality & Deal Materials</h2>
        <p>
          Some information shared through the Platform may be confidential. You agree not to disclose or misuse confidential materials. We are not liable for misuse by other users, but we may suspend users who breach confidentiality obligations.
        </p>
      </section>

      <section>
        <h2>9. Beta Status & Changes</h2>
        <p>
          The Platform is in an evolving beta state. Features may change, pause, or be removed. We may suspend the service temporarily for maintenance, security, or compliance reasons.
        </p>
      </section>

      <section>
        <h2>10. Disclaimers</h2>
        <p>
          The Platform is provided “as is” without warranties of any kind. We disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement to the maximum extent allowed by law.
        </p>
      </section>

      <section>
        <h2>11. Liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for lost profits, lost data, indirect, special, incidental, or consequential damages. Our aggregate liability to you will not exceed the greater of (a) €100 or (b) amounts you paid us in the prior 3 months (if any).
        </p>
      </section>

      <section>
        <h2>12. Termination</h2>
        <p>
          We may suspend or terminate access for any breach, legal obligation, or risk. You may stop using the Platform at any time. Some clauses (e.g., IP, confidentiality, liability limits) survive termination.
        </p>
      </section>

      <section>
        <h2>13. Governing Law & Dispute Resolution</h2>
        <p>
          These Terms are governed by French law. Courts of Paris (Tribunal Judiciaire / Commerce, as applicable) have exclusive jurisdiction, subject to mandatory consumer protections (if applicable). We may explore amicable resolution before litigation.
        </p>
      </section>

      <section>
        <h2>14. Updates to These Terms</h2>
        <p>
          We may update these Terms. Significant changes will be signaled (banner, email, or in-app). Continued use after changes means acceptance.
        </p>
      </section>

      <section>
        <h2>15. Contact</h2>
        <p>
          Questions: <a href="mailto:legal@nartaq.com">legal@nartaq.com</a>. You may also exercise applicable legal rights (see Privacy Policy) through this address.
        </p>
      </section>

      <div className="mt-12 text-xs text-gray-500">
        <p>No legal entity yet? These provisional Terms allocate no equity, token, or economic rights. They simply govern pre-launch use. They are not investment solicitation, and nothing herein forms a partnership or fiduciary duty.</p>
        <p className="mt-2">See also: <Link href="/legal/privacy" className="text-[#a98b5d] underline">Privacy Policy</Link>.</p>
      </div>
    </main>
  )
}
