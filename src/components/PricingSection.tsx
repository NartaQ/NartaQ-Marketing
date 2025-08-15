export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "5 AI powered chat messages",
        "10 image generations",
        "Basic support",
        "Community access"
      ],
      disabled: ["Access to all premium AI models", "Early access to new features"],
      buttonText: "Get Started",
      buttonStyle: "btn mt-auto !w-full transition-transform duration-300 hover:scale-x-[1.02] !text-[#dcd7ce] !bg-transparent !border border-[#5c5d63] hover:border-[#a98b5d]"
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "Best for professionals",
      features: [
        "1,000 AI powered chat messages",
        "100 premium image generations",
        "40 premium music generation",
        "Access to all premium AI models"
      ],
      disabled: ["Early access to new features"],
      buttonText: "Choose plan",
      buttonStyle: "btn mt-auto !w-full transition-transform duration-300 hover:scale-x-[1.02]",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For teams and organizations",
      features: [
        "10,000 AI powered chat messages",
        "300 premium image generations",
        "100 premium music generations",
        "Access to all premium AI models",
        "Early access to new features"
      ],
      disabled: [],
      buttonText: "Choose plan",
      buttonStyle: "btn mt-8 !w-full transition-transform duration-300 hover:scale-x-[1.02] !text-[#dcd7ce] !bg-transparent !border border-[#5c5d63] hover:border-[#a98b5d]"
    }
  ];

  return (
    <section id="pricing" className="flex min-h-screen w-full flex-col items-center justify-center p-[2%]">
      <h3 className="reveal-up text-4xl font-medium max-md:text-2xl text-center mb-4">
        Choose your plan
      </h3>
      <p className="reveal-up text-[#5c5d63] text-center max-w-2xl mb-16">
        Select the perfect plan that scales with your needs. All plans include our core AI features.
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
