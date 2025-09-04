import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "DMCA / Content Takedown - NartaQ",
  description:
    "Learn how to report copyright infringement or request content removal on NartaQ. Our DMCA takedown process for protecting intellectual property rights.",
  keywords: [
    "NartaQ DMCA",
    "NartaQ content takedown",
    "NartaQ copyright infringement",
    "NartaQ intellectual property",
    "NartaQ content removal",
    "NartaQ legal notice",
    "NartaQ takedown request",
  ],
  openGraph: {
    title: "DMCA / Content Takedown - NartaQ",
    description: "Report copyright infringement or request content removal through our DMCA takedown process.",
    siteName: "NartaQ",
  },
  twitter: {
    title: "DMCA / Content Takedown - NartaQ",
    description:
      "Report copyright infringement or request content removal through our DMCA takedown process.",
  },
  alternates: {
    canonical: "https://www.nartaq.com/legal/dmca",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = '2025-01-05'

export default function DMCAPage() {
  return (
    <main className='prose prose-sm dark:prose-invert max-w-3xl mx-auto px-6 py-12'>
      <h1 className='text-3xl font-semibold tracking-tight'>DMCA / Content Takedown</h1>
      <p className='text-sm text-gray-400 -mt-2 mb-8'>Last updated: {LAST_UPDATED}</p>

      <p>
        This page explains how to report content you believe infringes copyrights or violates applicable
        French / EU law so we can review and, where appropriate, remove or restrict it. We respect intellectual
        property rights and the rights of persons and entities mentioned in submitted startup information.
      </p>

      <h2>1. Scope</h2>
      <p>
        Use this process for: (a) alleged copyright infringement (Digital Millennium Copyright Act / EU equivalent),
        (b) requests to remove personal data published without a valid legal basis, (c) defamation or unlawful content
        under French law. For privacy rights exercises unrelated to public content (e.g. access, deletion of your account
        data) please use our <Link href='/legal/privacy'>Privacy Policy</Link> instructions instead.
      </p>

      <h2>2. What To Send</h2>
      <p>Your takedown notice must include ALL of the following so we can act quickly:</p>
      <ul>
        <li>Your full name and role (e.g. founder, rights holder, authorized agent).</li>
        <li>Contact email for follow‑up.</li>
        <li>Exact URL(s) of the content you want removed (one per line).</li>
        <li>Clear description of the work or right you claim is infringed or violated.</li>
        <li>Legal basis (e.g. “I am the copyright holder”, “Personal data published without consent”, “Defamatory under French law”).</li>
        <li>A good‑faith statement that the information in your notice is accurate.</li>
        <li>For copyright: a statement under penalty of perjury that you are authorized to act on behalf of the rights holder.</li>
        <li>Digital signature / typed name and date.</li>
      </ul>

      <h2>3. Where To Send It</h2>
      <p>
        Email your notice to: <strong>legal@nartaq.com</strong> (preferred) or by postal mail once our registered address
        is published in our Mentions Légales. Notices lacking required elements may be rejected or delayed.
      </p>

      <h2>4. Our Review Process</h2>
      <ol>
        <li>We log the request and assign a reference ID.</li>
        <li>We verify completeness and authenticity.</li>
        <li>We notify the original content submitter (redacting your personal email if needed).</li>
        <li>We may provide an opportunity to correct or counter within 5 business days (unless urgent / manifestly unlawful).</li>
        <li>We remove, restrict, anonymize or decline with reason.</li>
        <li>We keep an internal audit log (limited retention).</li>
      </ol>

      <h2>5. Counter Notice (Copyright)</h2>
      <p>
        If your content was removed for alleged copyright infringement and you believe it was a mistake or qualifies as
        an exception (e.g. quotation, analysis, information necessary for investment due diligence), you may submit a
        counter notice including: your name, contact, the removed content URL, a statement under penalty of perjury that
        the material was removed due to mistake or misidentification, and consent to French court jurisdiction. We may
        restore the content unless the complainant initiates legal action within 10 business days.
      </p>

      <h2>6. Abuse</h2>
      <p>
        Submitting fraudulent or bad‑faith notices (e.g. to suppress accurate startup information) may result in loss of
        platform or DAO participation rights. We reserve the right to publish anonymized transparency statistics.
      </p>

      <h2>7. Language</h2>
      <p>
        We accept notices in English or French. If you submit in another language we may request a translation which can
        delay processing.
      </p>

      <h2>8. Not Legal Advice</h2>
      <p>
        This page is for information only and does not constitute legal advice. You should consult qualified counsel for
        specific legal questions.
      </p>

      <h2>9. Future Updates</h2>
      <p>
        We may refine this process as our legal entity finalizes. Material changes will update the date at the top.
      </p>

      <p className='mt-10 text-sm text-gray-400'>Thank you for helping keep the platform accurate, lawful and fair.</p>
    </main>
  )
}
