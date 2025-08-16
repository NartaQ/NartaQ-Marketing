export default function TrustComplianceSection() {
  return (
    <section id='how-it-works' className='flex w-full flex-col items-center justify-center p-[2%] py-24'>
      <div className='max-w-5xl mx-auto text-center space-y-4'>
        <h2 className='text-4xl font-semibold'>Trust & compliance by design</h2>
        <p className='text-neutral-400'>
          KYC/KYB verification, NDA‑gated workflows, IP protection, EU data residency, audit logs, and dispute resolution. Bounty‑specific controls include immutable briefs, timestamped submissions, duplicate checks, and private bounties for sensitive work.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl w-full'>
        {[
          { title: 'Verification', desc: 'Identity and business verification; credential checks and references.' },
          { title: 'Data & IP', desc: 'EU data regions, encryption, NDAs, and optional code escrow.' },
          { title: 'Disputes', desc: 'Structured evidence + human arbitration with fast‑track timelines.' },
        ].map((card, i) => (
          <div key={i} className='rounded-xl border border-neutral-800 p-6 bg-black/40'>
            <h3 className='text-xl font-medium mb-2'>{card.title}</h3>
            <p className='text-neutral-400'>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
