import Image from 'next/image'
import { Marquee } from './magicui/marquee'

export default function BrandsSection() {
  const brands = [
    { name: 'Meta', src: '/images/brand-logos/meta.svg' },
    { name: 'Google', src: '/images/brand-logos/google.svg' },
    { name: 'Google Gemini', src: '/images/brand-logos/googlegemini.svg' },
    { name: 'Microsoft', src: '/images/brand-logos/microsoft.svg' },
    { name: 'Adobe', src: '/images/brand-logos/adobe.svg' },
    { name: 'Airbnb', src: '/images/brand-logos/airbnb.svg' },
    { name: 'OpenAI', src: '/images/brand-logos/openai.svg' },
    { name: 'Perplexity', src: '/images/brand-logos/perplexity.svg' },
    { name: 'Stripe', src: '/images/brand-logos/stripe.svg' },
    { name: 'Reddit', src: '/images/brand-logos/reddit.svg' },
  ]
  return (
    <section className='relative flex w-full max-w-full flex-col items-center overflow-hidden p-8'>
      <h2 className='reveal-up text-3xl max-md:text-xl'>
        Connect with companies backed by top investors
      </h2>
      <p className='reveal-up mt-4 text-center text-lg text-muted-foreground max-w-2xl'>
        Discover investment opportunities in startups from the same ecosystem as these industry leaders
      </p>

      <div className='reveal-up mt-10 w-full'>
        <Marquee
          pauseOnHover
          className='[--duration:30s] [--gap:2rem]'
          repeat={6}
        >
          {brands.map((brand, index) => {
            // These logos need special handling for dark mode visibility
            const needsDarkModeFilter = [
              'Meta',
              'Google Gemini',
              'OpenAI',
              'Perplexity',
            ].includes(brand.name)

            return (
              <div key={index} className='h-[30px] w-[150px] flex-shrink-0'>
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={150}
                  height={30}
                  className={`h-full w-full object-contain grayscale transition-colors hover:grayscale-0 ${needsDarkModeFilter
                    ? 'dark:invert dark:brightness-0 dark:contrast-100'
                    : ''
                    }`}
                />
              </div>
            )
          })}
        </Marquee>
      </div>
    </section>
  )
}
