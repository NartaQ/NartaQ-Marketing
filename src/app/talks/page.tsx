'use client'

import Image from 'next/image'
import { Mic2, Calendar, Sparkles, Users, Bell, Rocket } from 'lucide-react'

// First Episode Teaser Data
const firstEpisode = {
  number: 1,
  title: 'Sustainable Infrastructure: Unlocking Africa\'s Next Leap',
  guest: {
    name: 'Karim Ahres',
    title: 'Technology & Infrastructure Leader',
    tagline: 'Hosted by Fatma Taghouti'
  },
  launchDate: 'Drops Soon',
  topics: [
    'What Green AI really means',
    'How infrastructure drives fundability',
    'Why Africa is ready to scale',
    'What investors look for today'
  ],
  teaser: "We're building a new podcast for innovators and investors, a space for real funding insights, and tech foresight. Episode 1 explores how sustainable infrastructure can unlock Africa's next leap forward."
}

const platforms = [
  { name: 'Spotify', icon: '/images/spotify-logo.png', alt: 'Spotify Logo' },
  { name: 'YouTube', icon: '/images/youtube-logo.png', alt: 'YouTube Logo' }
]



export default function TalksPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-24 px-4 md:px-6 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#a98b5d]/10 via-black to-[#0a0a0a]' />

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a98b5d]/10 border border-[#a98b5d]/20 text-[#a98b5d] text-sm font-medium mb-12'>
              <Rocket className='w-4 h-4' />
              Episode 1 Drops Soon
            </div>

            {/* Title & Subtitle Group */}
            <div className='mb-12'>
              <h1 className='text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-white'>
                NartaQ <span className='text-[#a98b5d]'>Talks</span>
              </h1>
              <p className='text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto'>
                Unfiltered conversations with the people who write the checks.
              </p>
            </div>

            {/* Main Image */}
            <div className='mb-12 flex justify-center'>
              <div className='relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl shadow-[#a98b5d]/20'>
                <Image
                  src='/images/NartaQ Talks/SVG/Group 13.svg'
                  alt='NartaQ Talks'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </div>

            {/* Description */}
            <p className='text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto'>
              We’re building a new podcast for innovators and investors, a space for real funding insights, and tech foresight.
            </p>

            {/* CTAs */}
            <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-4'>
              <a
                href='#notify'
                className='px-8 py-4 bg-[#a98b5d] text-black font-semibold rounded-xl hover:bg-[#c4a77c] transition-colors flex items-center justify-center gap-2'
              >
                <Bell className='w-5 h-5' />
                Get Notified
              </a>
              <a
                href='/apply'
                className='px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2'
              >
                <Users className='w-5 h-5' />
                Join Founding Cohort
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Episode 1 Preview */}
      <section className='px-4 md:px-6 pb-24'>
        <div className='max-w-5xl mx-auto'>
          <div className='bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-[#a98b5d]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />

            <div className='relative z-10'>
              <div className='flex flex-col md:flex-row gap-12 items-start'>
                <div className='flex-1'>
                  <div className='flex items-center gap-4 mb-6'>
                    <span className='text-[#a98b5d] font-medium tracking-wider text-sm uppercase'>Episode 01</span>
                    <span className='w-1 h-1 rounded-full bg-gray-700' />
                    <span className='text-gray-500 text-sm'>{firstEpisode.launchDate}</span>
                  </div>

                  <h2 className='text-3xl md:text-4xl font-bold text-white mb-6 leading-tight'>
                    {firstEpisode.title}
                  </h2>

                  <div className='flex items-center gap-4 mb-8'>
                    <div className='w-12 h-12 rounded-full bg-[#a98b5d]/20 flex items-center justify-center text-[#a98b5d]'>
                      <Mic2 className='w-6 h-6' />
                    </div>
                    <div>
                      <p className='text-white font-medium'>{firstEpisode.guest.name}</p>
                      <p className='text-sm text-gray-400'>{firstEpisode.guest.title}</p>
                    </div>
                  </div>

                  <p className='text-gray-300 leading-relaxed mb-8'>
                    {firstEpisode.teaser}
                  </p>

                  <div className='space-y-4'>
                    <h3 className='text-sm font-medium text-gray-500 uppercase tracking-wider'>What You'll Learn</h3>
                    <ul className='grid grid-cols-1 gap-3'>
                      {firstEpisode.topics.map((topic, index) => (
                        <li key={index} className='flex items-start gap-3 text-gray-300'>
                          <Sparkles className='w-5 h-5 text-[#a98b5d] shrink-0 mt-0.5' />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar / Host Info */}
                <div className='w-full md:w-72 shrink-0 p-6 bg-white/5 rounded-2xl border border-white/5'>
                  <p className='text-sm text-gray-500 mb-4 uppercase tracking-wider'>Hosted By</p>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='w-10 h-10 rounded-full bg-gray-800' /> {/* Placeholder for Host Avatar if needed, or remove */}
                    <div>
                      <p className='font-medium text-white'>Fatma Taghouti</p>
                      <p className='text-xs text-gray-400'>Host</p>
                    </div>
                  </div>
                  <a
                    href='#notify'
                    className='block w-full py-3 bg-white/10 hover:bg-white/20 text-white text-center rounded-lg transition-colors text-sm font-medium'
                  >
                    Remind Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className='px-4 md:px-6 pb-24'>
        <div className='max-w-2xl mx-auto text-center'>
          <p className='text-gray-500 mb-8 font-medium'>AVAILABLE ON</p>
          <div className='flex justify-center gap-4'>
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href='#'
                className='flex items-center gap-3 px-6 py-4 bg-[#111] border border-white/10 rounded-xl hover:border-[#a98b5d]/50 transition-colors group'
              >
                <Image src={platform.icon} alt={platform.alt} width={24} height={24} className='opacity-70 group-hover:opacity-100 transition-opacity' />
                <span className='text-gray-400 group-hover:text-white transition-colors font-medium'>{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Footer CTA */}
      <section id='notify' className='px-4 md:px-6 pb-32'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Don't Miss the Premiere
          </h2>
          <p className='text-gray-400 mb-8 max-w-xl mx-auto'>
            Join the founding community to get early access and exclusive insights.
          </p>

          <form className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-[#a98b5d] transition-colors'
            />
            <button className='px-6 py-3 bg-[#a98b5d] text-black font-semibold rounded-lg hover:bg-[#c4a77c] transition-colors whitespace-nowrap'>
              Notify Me
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
