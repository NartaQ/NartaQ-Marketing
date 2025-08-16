export default function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        '5 AI powered chat messages',
        '10 image generations',
        'Basic support',
        'Community access',
      ],
      disabled: [
        'Access to all premium AI models',
        'Early access to new features',
      ],
      buttonText: 'Get Started',
      buttonStyle:
        'btn mt-auto !w-full transition-all duration-300 hover:scale-[1.02] !text-[#dcd7ce] !bg-transparent !border border-[#5c5d63] hover:border-[#a98b5d] hover:bg-[#a98b5d]/10',
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/month',
      description: 'Best for professionals',
      features: [
        '1,000 AI powered chat messages',
        '100 premium image generations',
        '40 premium music generation',
        'Access to all premium AI models',
      ],
      disabled: ['Early access to new features'],
      buttonText: 'Choose plan',
      buttonStyle:
        'btn mt-auto !w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#a98b5d]/20',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For teams and organizations',
      features: [
        '10,000 AI powered chat messages',
        '300 premium image generations',
        '100 premium music generations',
        'Access to all premium AI models',
        'Early access to new features',
      ],
      disabled: [],
      buttonText: 'Choose plan',
      buttonStyle:
        'btn mt-8 !w-full transition-all duration-300 hover:scale-[1.02] !text-[#dcd7ce] !bg-transparent !border border-[#5c5d63] hover:border-[#a98b5d] hover:bg-[#a98b5d]/10',
    },
  ]

  return (
    <section
      id='pricing'
      className='flex min-h-screen w-full flex-col items-center justify-center py-20 px-4'
    >
      <h3 className='reveal-up text-4xl md:text-5xl font-bold max-md:text-3xl text-center mb-6 text-[#dcd7ce]'>
        Choose Your Plan
      </h3>
      <p className='reveal-up text-[#5c5d63] text-center max-w-2xl mb-16 text-lg'>
        Select the perfect plan that scales with your needs. All plans include
        our core AI features.
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
              <span className='text-[#5c5d63] text-lg'>{plan.period}</span>
            </div>
            <p className='text-center text-[#5c5d63] mb-6 text-base'>
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
                  <i className='bi bi-x-circle-fill text-[#5c5d63] text-lg mt-0.5' />
                  <span className='text-[#5c5d63]'>{feature}</span>
                </li>
              ))}
            </ul>

            <a href='#' className={plan.buttonStyle}>
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
