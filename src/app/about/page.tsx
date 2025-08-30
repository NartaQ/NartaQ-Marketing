'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Globe,
  Target,
  Heart,
  Star,
  Linkedin,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='pt-32 pb-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center mb-20'
          >
            <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-8'>
              <Heart className='w-4 h-4' />
              OUR STORY
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
              <span className='text-[#dcd7ce]'>Building a</span>
              <br />
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Merit-Based Future
              </span>
            </h1>
            <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              We believe exceptional founders deserve access to capital
              regardless of their network, location, or background. NartaQ is
              our answer to a broken system.
            </p>
          </motion.div>

          {/* Our Vision Section */}
          <section className='py-16 sm:py-24 lg:py-32'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6'>
                <Target className='w-4 h-4 text-[#a98b5d]' />
                <span className='text-sm font-medium text-[#dcd7ce]'>
                  OUR VISION
                </span>
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#dcd7ce] mb-6'>
                Democratizing Startup{' '}
                <span className='text-[#a98b5d]'>Funding</span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
                The current venture capital system prioritizes networks over
                merit. We're building the infrastructure to change that.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='text-center'
              >
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Users className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Merit Over Networks
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    We prioritize breakthrough innovations over warm
                    introductions, ensuring exceptional founders get the
                    recognition they deserve.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='text-center'
              >
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Globe className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Global Access
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    Breaking down geographic barriers so brilliant founders in
                    Tunis have the same access to capital as those in Palo Alto.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='text-center'
              >
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Target className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Data-Driven Decisions
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    Using AI and systematic evaluation to make funding decisions
                    based on potential impact rather than pedigree or location.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* The Team Section */}
          <section id='team' className='py-16 sm:py-24 lg:py-32'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6'>
                <Users className='w-4 h-4 text-[#a98b5d]' />
                <span className='text-sm font-medium text-[#dcd7ce]'>
                  THE TEAM
                </span>
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#dcd7ce] mb-6'>
                Meet the <span className='text-[#a98b5d]'>Founders</span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
                Two founders united by a shared vision of democratizing startup
                funding
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {/* Riadh Profile */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 text-center'
              >
                <div className='w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] p-0.5'>
                  <div className='w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center'>
                    <Image
                      width={100}
                      height={100}
                      src='/images/team/riadh.jpeg'
                      alt='Riadh Jouini'
                      className='w-full h-full object-cover rounded-2xl'
                      onError={(e) => {
                        ; (e.target as HTMLImageElement).style.display = 'none'
                          ; (
                            e.target as HTMLImageElement
                          ).parentElement!.innerHTML =
                            '<span class="text-2xl font-bold text-black">RJ</span>'
                      }}
                    />
                  </div>
                </div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#dcd7ce] mb-2'>
                  Riadh Jouini
                </h3>
                <p className='text-[#a98b5d] font-semibold mb-4'>
                  Co-Founder & CEO
                </p>
                <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6'></div>

                <div className='flex justify-center gap-4'>
                  <a
                    href='https://linkedin.com/in/riadh-jouini'
                    className='w-10 h-10 rounded-xl bg-[#a98b5d]/20 flex items-center justify-center text-[#a98b5d] hover:bg-[#a98b5d]/30 transition-colors'
                  >
                    <Linkedin className='w-5 h-5' />
                  </a>
                  <a
                    href='https://twitter.com/riadhjouini'
                    className='w-10 h-10 rounded-xl bg-[#a98b5d]/20 flex items-center justify-center text-[#a98b5d] hover:bg-[#a98b5d]/30 transition-colors'
                  >
                    <Twitter className='w-5 h-5' />
                  </a>
                </div>
              </motion.div>

              {/* Jesser Profile */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 text-center'
              >
                <div className='w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] p-0.5'>
                  <div className='w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center'>
                    <Image
                      width={100}
                      height={100}
                      src='/images/team/jesser.jpeg'
                      alt='Jesser Bedoui'
                      className='w-full h-full object-cover rounded-2xl'
                      onError={(e) => {
                        ; (e.target as HTMLImageElement).style.display = 'none'
                          ; (
                            e.target as HTMLImageElement
                          ).parentElement!.innerHTML =
                            '<span class="text-2xl font-bold text-black">JB</span>'
                      }}
                    />
                  </div>
                </div>
                <h3 className='text-xl sm:text-2xl font-bold text-[#dcd7ce] mb-2'>
                  Jesser Bedoui
                </h3>
                <p className='text-[#a98b5d] font-semibold mb-4'>
                  Co-Founder & CTO
                </p>
                <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6'></div>
                <div className='flex justify-center gap-4'>
                  <a
                    href='https://linkedin.com/in/jesser-bedoui'
                    className='w-10 h-10 rounded-xl bg-[#a98b5d]/20 flex items-center justify-center text-[#a98b5d] hover:bg-[#a98b5d]/30 transition-colors'
                  >
                    <Linkedin className='w-5 h-5' />
                  </a>

                  <a
                    href='https://twitter.com/jesserbedoui'
                    className='w-10 h-10 rounded-xl bg-[#a98b5d]/20 flex items-center justify-center text-[#a98b5d] hover:bg-[#a98b5d]/30 transition-colors'
                  >
                    <Twitter className='w-5 h-5' />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Our Corridor Section */}
          <section id='corridor' className='py-16 sm:py-24 lg:py-32'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6'>
                <Globe className='w-4 h-4 text-[#a98b5d]' />
                <span className='text-sm font-medium text-[#dcd7ce]'>
                  OUR FOCUS
                </span>
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#dcd7ce] mb-6'>
                The France-Tunisia{' '}
                <span className='text-[#a98b5d]'>Corridor</span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
                Our strategic focus on a corridor with exceptional talent
                density, cultural alignment, and untapped potential
              </p>
            </motion.div>

            <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='text-center'
              >
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Users className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Exceptional Talent
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    Tunisia produces world-class engineers, researchers, and
                    entrepreneurs, with French fluency and European cultural
                    alignment. High-caliber technical expertise at competitive
                    cost structures.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='text-center'
              >
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Globe className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Strategic Location
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    Mediterranean bridge between Europe and Africa, with GDPR
                    compliance, EU-aligned time zones, and growing policy
                    support for tech innovation and cross-border partnerships.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='text-center'
              >
                <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                    <Target className='w-8 h-8 text-[#a98b5d]' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                    Untapped Potential
                  </h3>
                  <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
                  <p className='text-[#dcd7ce] leading-relaxed'>
                    Systematic underinvestment despite exceptional founder
                    quality creates massive opportunities. Growing success
                    stories demonstrate the corridor's potential for 10x
                    returns.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='mt-16 max-w-4xl mx-auto text-center'
            >
              <div className='relative p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent'>
                <h4 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-6'>
                  Why Start Here?
                </h4>
                <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6'></div>
                <div className='space-y-4 text-[#dcd7ce] leading-relaxed'>
                  <p>
                    The France-Tunisia corridor represents the perfect testing
                    ground for our vision: a defined geographic focus with
                    cultural alignment, regulatory compatibility, and
                    exceptional founder quality that's systematically
                    undervalued by traditional VC.
                  </p>
                  <p>
                    By proving our model here, we create a blueprint for
                    expanding to other high-potential corridors
                    globally—ultimately building the infrastructure for truly
                    merit-based startup funding worldwide.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center py-16 sm:py-24 lg:py-32'
          >
            <div className='relative p-12 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent max-w-4xl mx-auto'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                <Star className='w-8 h-8 text-[#a98b5d]' />
              </div>
              <h3 className='text-3xl sm:text-4xl font-bold text-[#dcd7ce] mb-6'>
                Join Our <span className='text-[#a98b5d]'>Mission</span>
              </h3>
              <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6'></div>
              <p className='text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed'>
                Be part of building a more equitable future for startup funding.
                Whether you're a founder, investor, or ecosystem partner,
                there's a place for you in this revolution.
              </p>
              <div className='grid sm:grid-cols-2 gap-4 max-w-md mx-auto'>
                <a
                  href='/for-founders'
                  className='px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300'
                >
                  Join as Founder
                </a>
                <a
                  href='/for-investors'
                  className='px-8 py-4 border border-[#a98b5d]/50 text-[#dcd7ce] font-semibold rounded-xl hover:bg-[#a98b5d]/10 transition-all duration-300'
                >
                  Join as Investor
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
