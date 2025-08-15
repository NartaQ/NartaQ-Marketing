import Image from 'next/image'
import { Marquee } from './magicui/marquee'

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: 'Nartaq has revolutionized how we approach AI integration. The API is incredibly powerful and easy to use.',
      author: 'Sarah Johnson',
      role: 'AI Developer',
      avatar: '/images/people/women.jpg',
    },
    {
      text: 'The pre-built tools saved us months of development time. Highly recommend for any AI project.',
      author: 'Michael Chen',
      role: 'Product Manager',
      avatar: '/images/people/man.jpg',
    },
    {
      text: 'Outstanding support and documentation. The playground feature is perfect for prototyping.',
      author: 'Emily Rodriguez',
      role: 'Tech Lead',
      avatar: '/images/people/man2.jpg',
    },
    {
      text: 'Game-changing platform for AI enthusiasts. The multilingual support is exceptional.',
      author: 'David Kim',
      role: 'Startup Founder',
      avatar: '/images/people/women.jpg',
    },
    {
      text: 'Seamless integration and powerful features. Nartaq has become essential for our workflow.',
      author: 'Lisa Wang',
      role: 'Data Scientist',
      avatar: '/images/people/man.jpg',
    },
    {
      text: 'The image generation tools are incredibly sophisticated and produce amazing results.',
      author: 'James Wilson',
      role: 'Creative Director',
      avatar: '/images/people/man2.jpg',
    },
  ]

  // Split testimonials into two rows for marquee effect
  const firstRow = testimonials.slice(0, testimonials.length / 2)
  const secondRow = testimonials.slice(testimonials.length / 2)

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[0]
  }) => (
    <div className='mx-4 flex h-fit w-[350px] flex-col gap-4 rounded-xl border border-gray-200/20 dark:border-gray-800/20 bg-white/50 dark:bg-black/50 backdrop-blur-sm p-6 shadow-lg'>
      <div className='flex items-center gap-3'>
        <Image
          src={testimonial.avatar}
          alt={testimonial.author}
          width={50}
          height={50}
          className='rounded-full object-cover'
        />
        <div>
          <h4 className='font-semibold text-gray-900 dark:text-white'>
            {testimonial.author}
          </h4>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            {testimonial.role}
          </p>
        </div>
      </div>
      <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
        "{testimonial.text}"
      </p>
      <div className='flex text-yellow-400'>
        {[...Array(5)].map((_, i) => (
          <svg key={i} className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
      </div>
    </div>
  )

  return (
    <section className='flex min-h-screen w-full flex-col items-center justify-center p-[2%] bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/30'>
      <div className='text-center mb-16 max-w-3xl mx-auto'>
        <h3 className='reveal-up text-5xl font-bold text-center max-md:text-3xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
          Join the professionals using Nartaq
        </h3>
        <p className='reveal-up mt-4 text-xl text-gray-600 dark:text-gray-400 max-md:text-lg'>
          Trusted by developers, designers, and innovators worldwide
        </p>
      </div>

      {/* Moving Testimonials */}
      <div className='w-full space-y-8 overflow-hidden'>
        {/* First row - moving right */}
        <Marquee pauseOnHover className='[--duration:40s]'>
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={`first-${index}`} testimonial={testimonial} />
          ))}
        </Marquee>

        {/* Second row - moving left */}
        <Marquee reverse pauseOnHover className='[--duration:40s]'>
          {secondRow.map((testimonial, index) => (
            <TestimonialCard
              key={`second-${index}`}
              testimonial={testimonial}
            />
          ))}
        </Marquee>
      </div>

      {/* Gradient overlays to fade edges */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background'></div>
    </section>
  )
}
