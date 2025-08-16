export default function BountySection() {
  return (
    <section id='bounties' className='flex w-full flex-col items-center justify-center p-[2%] py-24'>
      <div className='max-w-5xl mx-auto text-center space-y-4'>
        <h2 className='text-4xl font-semibold'>Bounty micro‑tasks: ship fast, safely</h2>
        <p className='text-neutral-400'>
          Companies post scoped micro‑tasks with budget ranges and acceptance criteria. Vetted SPs apply or submit under first‑acceptable or shortlist‑then‑award rules. Submissions are timestamped and evaluated against pre‑set criteria; payouts release on acceptance.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl w-full'>
        {[{
          title: 'Scoped briefs',
          desc: 'Immutable brief versions, clear acceptance criteria, and auto‑expiry to avoid race conditions.'
        }, {
          title: 'Private bounties',
          desc: 'Restrict access to pre‑vetted SPs for sensitive work. NDA‑gated access supported.'
        }, {
          title: 'Managed payouts',
          desc: 'Payouts on acceptance; optional partial payouts for milestone bounties.'
        }].map((card, i) => (
          <div key={i} className='rounded-xl border border-neutral-800 p-6 bg-black/40'>
            <h3 className='text-xl font-medium mb-2'>{card.title}</h3>
            <p className='text-neutral-400'>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
