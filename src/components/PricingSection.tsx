export default function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Get started with a basic profile',
      features: [
        'Create startup or SP profile',
        'Basic discovery visibility',
        'Newsletter & updates',
      ],
      disabled: ['Priority listing', 'Advanced analytics'],
      buttonText: 'Get Started',
      buttonStyle:
        'btn mt-auto !w-full transition-transform duration-300 hover:scale-x-[1.02] !text-[#dcd7ce] !bg-transparent !border border-[#5c5d63] hover:border-[#a98b5d]',
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
      buttonText: 'Talk to sales',
      buttonStyle:
        'btn mt-8 !w-full transition-transform duration-300 hover:scale-x-[1.02] !text-[#dcd7ce] !bg-transparent !border border-[#5c5d63] hover:border-[#a98b5d] ',
    },
  ];

  return (
    <section id="pricing" className="flex min-h-screen w-full flex-col items-center justify-center p-[2%]">
      <h3 className="reveal-up text-4xl font-medium max-md:text-2xl text-center mb-4">
        Pricing & Packages (overview)
      </h3>
      <p className="reveal-up text-[#5c5d63] text-center max-w-2xl mb-16">
        Exact fees are shared privately and may evolve during beta. Request details to learn more.
      </p>

      <div className="reveal-up flex gap-8 max-lg:flex-col max-lg:items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex w-[350px] flex-col items-center gap-2 rounded-lg p-8 ${plan.popular
              ? 'border-2 border-[#a98b5d] bg-[#a98b5d]/10'
              : 'border border-[#5c5d63] bg-[#3e3f44]'
              }`}
          >
            {plan.popular && (
              <div className="mb-4 rounded-full bg-[#a98b5d] px-3 py-1 text-sm text-black font-medium">
                Most Popular
              </div>
            )}

            <h2 className="text-2xl font-medium">{plan.name}</h2>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-[#5c5d63]">{plan.period}</span>
            </div>
            <p className="text-center text-[#5c5d63] mb-6">
              {plan.description}
            </p>

            <ul className="w-full space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex gap-2">
                  <i className="bi bi-check-circle-fill text-[#a98b5d]" />
                  <span>{feature}</span>
                </li>
              ))}
              {plan.disabled.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex gap-2">
                  <i className="bi bi-check-circle-fill text-[#5c5d63]" />
                  <span className="text-[#5c5d63]">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="#" className={plan.buttonStyle}>
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
