import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | NartaQ',
  description: 'Privacy Policy compliant with GDPR for the NartaQ platform (company in formation).',
  robots: { index: true, follow: true }
}

const LAST_UPDATED = '2025-08-23'

export default function PrivacyPolicyPage() {
  return (
    <main className="relative mx-auto max-w-4xl px-6 py-24 prose prose-invert prose-headings:font-semibold">
      <div className="mb-10 space-y-2">
        <h1 className="!mb-2 text-4xl font-bold bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
        <p className="text-xs text-gray-500">This policy explains how we process personal data in compliance with the EU General Data Protection Regulation (GDPR) and French law. The operating company is in formation; final legal references (SIREN / RCS) will be inserted post-registration.</p>
      </div>

      <section>
        <h2>1. Data Controller</h2>
        <p>
          Pending incorporation, the founding team collectively acts as provisional data controller (responsable de traitement). Once registered, the French entity (anticipated: NartaQ SAS) will assume this role.
        </p>
        <ul>
          <li>Contact: <a href="mailto:privacy@nartaq.com">privacy@nartaq.com</a></li>
          <li>Planned Jurisdiction: France</li>
          <li>Hosting: EU-based infrastructure providers (details to be appended)</li>
        </ul>
      </section>

      <section>
        <h2>2. What Data We Collect</h2>
        <ul>
          <li><strong>Account Data:</strong> name, email, role (investor / startup / partner).</li>
          <li><strong>Verification Data:</strong> basic KYC/KYB details, company info, professional references (only what you submit).</li>
          <li><strong>Deal & Contribution Data:</strong> startups you submit, reviews you perform, governance votes, reputation metrics.</li>
          <li><strong>Technical Data:</strong> IP address (security), device/browser metadata, session telemetry.</li>
          <li><strong>Optional Communications:</strong> newsletter preferences, feedback messages.</li>
        </ul>
        <p className="text-xs text-gray-500">We avoid collecting unnecessary sensitive data. Do not upload special categories (health, biometric, etc.).</p>
      </section>

      <section>
        <h2>3. Why We Process Data (Legal Bases)</h2>
        <ul>
          <li><strong>Platform access & account management</strong> – performance of a (pre-contractual) relationship.</li>
          <li><strong>Verification & trust</strong> – legitimate interest in maintaining a high-quality network and preventing abuse.</li>
          <li><strong>Security & fraud prevention</strong> – legitimate interest.</li>
          <li><strong>Governance participation</strong> – legitimate interest & your actions within experimental DAO mechanics.</li>
          <li><strong>Emails / updates</strong> – consent (you can opt out).</li>
          <li><strong>Analytics (minimal & privacy-preserving)</strong> – legitimate interest with proportionality.</li>
        </ul>
      </section>

      <section>
        <h2>4. Cookies & Tracking</h2>
        <p>
          We aim to operate with privacy-first analytics (e.g., cookieless or aggregated metrics). If we add non-essential cookies, a consent banner (per CNIL guidance) will appear. Essential cookies (session / security) may be used without prior consent.
        </p>
      </section>

      <section>
        <h2>5. Data Sharing</h2>
        <p>
          We do not sell personal data. We may share limited data with vetted processors (hosting, analytics, communication tools) under Data Processing Agreements (DPAs). Some limited data (e.g., deal metadata or reputation scores) may become public if you choose to participate in governance or submit content.
        </p>
      </section>

      <section>
        <h2>6. International Transfers</h2>
        <p>
          We aim to keep EU/EEA data in the EU. If data is transferred outside the EEA, we use appropriate safeguards (e.g., EU Standard Contractual Clauses). We will document processors in a future public registry.
        </p>
      </section>

      <section>
        <h2>7. Data Retention</h2>
        <p>
          We retain account, verification, and contribution data while you maintain an active profile. You may request deletion (see rights below). Some minimal records (e.g., governance logs) may be retained for integrity or legal reasons.
        </p>
      </section>

      <section>
        <h2>8. Your Rights (GDPR)</h2>
        <ul>
          <li>Access – know what we store.</li>
          <li>Rectification – fix inaccurate data.</li>
          <li>Erasure – request deletion (except required logs).</li>
          <li>Restriction – pause certain processing.</li>
          <li>Portability – receive structured export (future feature).</li>
          <li>Objection – to certain legitimate interest uses.</li>
          <li>Withdraw Consent – for optional communications.</li>
          <li>Complaint – with the CNIL (France) if unresolved.</li>
        </ul>
        <p>To exercise rights: email <a href="mailto:privacy@nartaq.com">privacy@nartaq.com</a>. We may verify identity before responding.</p>
      </section>

      <section>
        <h2>9. Security</h2>
        <p>
          We implement role-based access, encryption in transit, and least-privilege practices. No system is perfectly secure; report issues to security@nartaq.com (security.txt coming soon).
        </p>
      </section>

      <section>
        <h2>10. Minors</h2>
        <p>The Platform is not for individuals under 18. We do not knowingly process data of minors.</p>
      </section>

      <section>
        <h2>11. Experimental Token / Reputation Systems</h2>
        <p>
          If token mechanics launch, on-chain addresses you use may become public. Participation is optional. Smart contract interactions may be immutable.
        </p>
      </section>

      <section>
        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this Policy. Significant changes will be clearly communicated (banner, email, or in-app). Continued use means acceptance.
        </p>
      </section>

      <section>
        <h2>13. Contact & Escalation</h2>
        <p>
          Contact: <a href="mailto:privacy@nartaq.com">privacy@nartaq.com</a>. If unresolved, you may lodge a complaint with the CNIL (France): <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>.
        </p>
      </section>

      <div className="mt-12 text-xs text-gray-500">
        <p>This pre-registration Privacy Policy reflects intended practices. A final version will replace this once the corporate entity is formalized and full processor inventory is complete.</p>
        <p className="mt-2">See also: <Link href="/legal/terms" className="text-[#a98b5d] underline">Terms of Service</Link>.</p>
      </div>
    </main>
  )
}
