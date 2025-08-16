import Link from 'next/link'

export default function PricingSection() {
  const plans = [
    {
      name: 'Free (beta)',
      price: 'NDA',
      period: '',
      description: 'Basic profile while we validate mechanics',
      features: [
        'Create startup or SP profile',
        'Limited discovery visibility',
        'Beta updates',
      ],
      disabled: ['Priority listing', 'Advanced analytics'],
      buttonText: 'Join waitlist',
      buttonStyle:
        'btn mt-auto !w-full transition-transform duration-300 hover:scale-x-[1.02] !text-[#dcd7ce] !bg-transparent !border border-[#5c5d63] hover:border-[#a98b5d]',
      href: '/companies-providers#how-it-works',
    },
    {
      name: 'Startup Credit Pack',
      price: 'NDA',
      period: '',
      description: 'AI deck review + curated investor intros',
      features: [
        'Credit-based deck submissions',
        'AI quality checks & rubric scoring',
        'Curated investor outreach',
        'Tracked intros & follow-ups',
      ],
      disabled: ['Intermediation services'],
      buttonText: 'Request details',
      buttonStyle:
        'btn mt-auto !w-full transition-transform duration-300 hover:scale-x-[1.02] ',
      href: 'mailto:invest@nartaq.com?subject=Startup%20Credit%20Pack%20(NDA)',
      popular: true,
    },
    {
      name: 'Bounty Posting Pack',
      price: 'NDA',
      period: '',
      description: 'Boost visibility of micro‑task bounties',
      features: [
        'Pay‑to‑post with visibility boosts',
        'Private bounties (pre‑vetted SPs)',
        'Timestamped submissions & criteria templates',
        'Managed payouts on acceptance',
      ],
      disabled: ['Program management layer'],
      buttonText: 'Request details',
      buttonStyle:
        'btn mt-auto !w-full transition-transform duration-300 hover:scale-x-[1.02] !text-[#dcd7ce] !bg-transparent !border border-[#5c5d63] hover:border-[#a98b5d] ',
      href: '/companies-providers#bounties',
    },
    {
      name: 'Enterprise',
      price: 'NDA',
      period: '',
      description: 'Priority matching, analytics, and intermediation',
      features: [
        'Dedicated sourcing and SLAs',
        'Advanced analytics & insights',
        'Tri‑party orchestration & approval gates',
        'Optional intermediation for milestones & disputes',
      ],
      disabled: [],
      buttonText: 'Talk to us (NDA)',
      buttonStyle:
        'btn mt-8 !w-full transition-transform duration-300 hover:scale-x-[1.02] !text-[#dcd7ce] !bg-transparent !border border-[#5c5d63] hover:border-[#a98b5d] ',
      href: 'mailto:contact@nartaq.com?subject=Enterprise%20(NDA)',
    },
  ];

  return (
    <section id="pricing" className="flex min-h-screen w-full flex-col items-center justify-center p-[2%]">
      <h3 className="reveal-up text-4xl font-medium max-md:text-2xl text-center mb-4">
        Pricing & Packages (overview)
      </h3>
      <p className="reveal-up text-[#dcd7ce] text-center max-w-2xl mb-16">
        Pricing and mechanics are shared under NDA while we validate. If you&rsquo;re a fit, we&rsquo;ll reach out.
      </p>

      <div className='reveal-up flex gap-8 max-lg:flex-col max-lg:items-center w-full justify-center'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex w-full max-w-sm flex-col items-center gap-6 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#a98b5d]/10 ${
              plan.popular
                ? 'border-2 border-[#a98b5d] bg-gradient-to-b from-[#3e3f44] to-[#232428] relative shadow-xl shadow-[#a98b5d]/20 scale-[1.03]'
                : 'border border-[#5c5d63] bg-gradient-to-b from-[#3e3f44] to-[#232428] shadow-lg'
            }`}
          >
            {plan.popular && (
              <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 rounded-full bg-[#a98b5d] px-4 py-1 text-sm text-black font-bold shadow-lg'>
                Most Popular
              </div>
            )}

            <h2 className='text-2xl font-bold text-[#dcd7ce]'>{plan.name}</h2>
            <div className='flex items-baseline gap-2'>
              <span className='text-5xl font-extrabold text-[#a98b5d]'>
                {plan.price}
              </span>
              <span className='text-[#dcd7ce] text-lg'>{plan.period}</span>
            </div>
            <p className='text-center text-[#dcd7ce] mb-6 text-base'>
              {plan.description}
            </p>

            <ul className='w-full space-y-4 mb-8'>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className='flex gap-3 items-start'>
                  <i className='bi bi-check-circle-fill text-[#a98b5d] text-lg mt-0.5' />
                  <span className='text-[#dcd7ce]'>{feature}</span>
                </li>
              ))}
              {plan.disabled.map((feature, featureIndex) => (
                <li key={featureIndex} className='flex gap-3 items-start'>
                  <i className='bi bi-x-circle-fill text-[#dcd7ce] text-lg mt-0.5' />
                  <span className='text-[#dcd7ce]'>{feature}</span>
                </li>
              ))}
            </ul>

            {plan.href ? (
              plan.href.startsWith('/') ? (
                <Link href={plan.href} className={plan.buttonStyle}>
                  {plan.buttonText}
                </Link>
              ) : (
                <a href={plan.href} className={plan.buttonStyle}>
                  {plan.buttonText}
                </a>
              )
            ) : (
              <a href="#" className={plan.buttonStyle}>
                {plan.buttonText}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
