export default function OrchestrationSection() {
  return (
    <section id='orchestration' className='flex w-full flex-col items-center justify-center p-[2%] py-24'>
      <div className='max-w-5xl mx-auto text-center space-y-4'>
        <h2 className='text-4xl font-semibold'>From term sheet to delivery: tri‑party orchestration</h2>
        <p className='text-neutral-400'>
          Turn funding intent into shipped outcomes. Define scopes and milestones, assign vetted SPs, and release escrow‑style payouts on acceptance. Support hybrid compensation (cash + equity/options) with standardized templates via partners.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-6xl w-full'>
        {[
          { title: 'Scope', desc: 'Clear deliverables, acceptance criteria, and timelines.' },
          { title: 'Assign', desc: 'Bring in vetted SPs or micro‑teams matched to your needs.' },
          { title: 'Deliver', desc: 'Milestone reviews, audit trails, and approval gates.' },
          { title: 'Release', desc: 'Staged payouts and optional intermediation for complex work.' },
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
