'use client'

import { Card, CardContent } from '@investi/ui'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Janice Taylor',
    role: 'Founder, Ah-ha Healing',
    content:
      'Absolutely loving Nartaq.app, so intuitive and has made searching/reaching out 10 times easier. Thank you for building this. All #founders should check this App out if you are hunting for investor leads. Best one yet!',
    avatar: 'JT',
  },
  {
    name: 'Camilo Silva Caviedes',
    role: 'Founder, Suplait',
    content:
      'After weeks of trying to get an intro, the GP scheduled a call with me with almost no effort. Huge thanks to @Nartaq for making it happen!',
    avatar: 'CS',
  },
  {
    name: 'Christian Lecorps',
    role: 'Founder, Atlas Prime',
    content:
      '😍😍😍 Nartaq is one of the best things that ever happened to me as a founder so far.',
    avatar: 'CL',
  },
  {
    name: 'Alex Macdonald',
    role: 'Serial investor',
    content:
      'More than half the deck submissions for my syndicate in the past few days came from @Nartaq, a suite of amazing free tools for founders and VCs.',
    avatar: 'AM',
  },
  {
    name: 'Iyanna Halilou',
    role: 'Associate, Moxxie Ventures',
    content: 'I am obsessed with @Nartaq! Thank you for building!',
    avatar: 'IH',
  },
  {
    name: 'Justin Ahn',
    role: 'Founder, Quidli Protocol',
    content:
      'FWIW, I found one of our seed round investors via @Nartaq, reach out as described, and it worked!',
    avatar: 'JA',
  },
]

export function TestimonialsSection() {
  return (
    <section className='py-12 px-4 sm:px-6 lg:px-8 bg-gray-900'>
      <div className='container mx-auto'>
        <div className='text-center mb-10 animate-on-scroll'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white'>
            Why Founders Trust{' '}
            <span className='text-gradient-primary'>
              Nartaq
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Don't take our word for it, see what people say
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-item border-0 bg-gradient-to-br from-gray-800 to-gray-900'
            >
              <CardContent className='p-8'>
                <div className='flex items-center mb-4'>
                  <div className='flex text-yellow-400'>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className='h-5 w-5 fill-current' />
                    ))}
                  </div>
                </div>

                <div className='mb-6'>
                  <Quote className='h-8 w-8 text-secondary mb-4' />
                  <p className='text-gray-300 leading-relaxed'>
                    {testimonial.content}
                  </p>
                </div>

                <div className='flex items-center'>
                  <div className='w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-4'>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className='font-semibold text-white'>
                      {testimonial.name}
                    </div>
                    <div className='text-sm text-gray-400'>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center mt-12 animate-on-scroll'>
          <p className='text-gray-400'>
            More testimonials on our{' '}
            <a
              href='#'
              className='text-secondary hover:text-secondary-light font-medium'
            >
              Wall of love
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
