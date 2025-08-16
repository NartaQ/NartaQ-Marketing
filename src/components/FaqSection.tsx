export default function FaqSection() {
  const faqs = [
    {
      q: 'How do bounties work?',
      a: 'Companies post scoped micro‑tasks with budget ranges and acceptance criteria. SPs apply or submit under first‑acceptable or shortlist‑then‑award rules. Payouts release on acceptance; private bounties restrict access to vetted SPs.'
    },
    {
      q: 'Do you handle payments and escrow?',
      a: 'We support milestone‑based contracting and protections. Partner mechanics are shared under NDA and may differ by size/jurisdiction.'
    },
    {
      q: 'Can compensation include equity?',
      a: 'Yes. We support hybrid compensation (cash + equity/options) with standardized templates via partners under NDA.'
    },
    {
      q: 'What’s NartaQ’s role during delivery?',
      a: 'Optional intermediation: we coordinate scope, verify milestones, and manage disputes for a fee. Teams can also self‑manage.'
    },
    {
      q: 'Where is data stored?',
      a: 'In EU regions with GDPR‑aligned practices, with encryption in transit and at rest and audit trails.'
    }
  ]

  return (
    <section id='faq' className='flex w-full flex-col items-center justify-center p-[2%] py-24'>
      <div className='max-w-5xl mx-auto text-center space-y-4'>
        <h2 className='text-4xl font-semibold'>FAQ</h2>
        <p className='text-neutral-400'>Answers to the most common questions about bounties, orchestration, and trust.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-6xl w-full'>
        {faqs.map((item, i) => (
          <div key={i} className='rounded-xl border border-neutral-800 p-6 bg-black/40'>
            <h3 className='text-lg font-medium mb-2'>{item.q}</h3>
            <p className='text-neutral-400'>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
