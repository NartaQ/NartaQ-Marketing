'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Globe,
  Target,
  Heart,
  Star,
  Linkedin,
  Github,
  Twitter,
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center mb-20'
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-8">
              <Heart className="w-4 h-4" />
              OUR STORY
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#dcd7ce]">Building a</span>
              <br />
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Merit-Based Future
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe exceptional founders deserve access to capital regardless of their network, location, or background. NartaQ is our answer to a broken system.
            </p>
          </motion.div>

          {/* Our Vision Section */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-[#dcd7ce] mb-8 text-center">Our Vision</h2>
              <div className="bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 border border-[#a98b5d]/20 rounded-2xl p-8">
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    The current venture capital system is fundamentally broken. It prioritizes warm introductions over breakthrough innovations, geographic proximity over global talent, and pedigree over potential. The result? Exceptional founders in emerging ecosystems like Tunisia are systematically excluded from the capital they need to scale.
                  </p>
                  <p>
                    We envision a world where funding decisions are driven by merit, data, and potential impact rather than personal networks and zip codes. Where a brilliant founder in Tunis has the same access to Silicon Valley capital as someone in Palo Alto.
                  </p>
                  <p>
                    NartaQ is building the infrastructure to make this vision reality—starting with the France-Tunisia corridor and expanding globally to democratize access to startup funding.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* The Team Section */}
          <section id="team" className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className="text-4xl font-bold text-[#dcd7ce] mb-4">The Team</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Two founders united by a shared vision of democratizing startup funding
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Riadh Profile */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-8 text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">RJ</span>
                </div>
                <h3 className="text-2xl font-bold text-[#dcd7ce] mb-2">Riadh Jouini</h3>
                <p className="text-[#a98b5d] font-semibold mb-4">Co-Founder & CEO</p>
                <div className="text-gray-400 text-sm space-y-3 mb-6">
                  <p>
                    <strong className="text-[#dcd7ce]">Background:</strong> Serial entrepreneur with deep experience in Franco-Tunisian business ecosystem. Previously founded and scaled multiple ventures across technology and finance sectors.
                  </p>
                  <p>
                    <strong className="text-[#dcd7ce]">Expertise:</strong> Business development, regulatory compliance, cross-border operations, and strategic partnerships in France-Tunisia corridor.
                  </p>
                  <p>
                    <strong className="text-[#dcd7ce]">Vision:</strong> Bridging the gap between exceptional Tunisian talent and global capital markets through systematic, merit-based matching.
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <a href="https://linkedin.com/in/riadh-jouini" className="text-[#a98b5d] hover:text-[#dcd7ce] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/riadhjouini" className="text-[#a98b5d] hover:text-[#dcd7ce] transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Jesser Profile */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-8 text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">JB</span>
                </div>
                <h3 className="text-2xl font-bold text-[#dcd7ce] mb-2">Jesser Bedoui</h3>
                <p className="text-[#a98b5d] font-semibold mb-4">Co-Founder & CTO</p>
                <div className="text-gray-400 text-sm space-y-3 mb-6">
                  <p>
                    <strong className="text-[#dcd7ce]">Background:</strong> Full-stack developer and security specialist with extensive experience in fintech and blockchain technologies. Expert in building scalable, secure platforms.
                  </p>
                  <p>
                    <strong className="text-[#dcd7ce]">Expertise:</strong> AI/ML systems, cybersecurity, blockchain development, platform architecture, and automated compliance systems.
                  </p>
                  <p>
                    <strong className="text-[#dcd7ce]">Vision:</strong> Creating trustworthy, automated infrastructure that enables transparent and secure venture capital processes at global scale.
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <a href="https://linkedin.com/in/jesser-bedoui" className="text-[#a98b5d] hover:text-[#dcd7ce] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/bedouijesser" className="text-[#a98b5d] hover:text-[#dcd7ce] transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/jesserbedoui" className="text-[#a98b5d] hover:text-[#dcd7ce] transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Our Corridor Section */}
          <section id="corridor" className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className="text-4xl font-bold text-[#dcd7ce] mb-4">The France-Tunisia Corridor</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our strategic focus on a corridor with exceptional talent density, cultural alignment, and untapped potential
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#a98b5d]" />
                </div>
                <h3 className="text-xl font-bold text-[#dcd7ce] mb-3">Exceptional Talent</h3>
                <p className="text-gray-400 text-sm">
                  Tunisia produces world-class engineers, researchers, and entrepreneurs, with French fluency and European cultural alignment. High-caliber technical expertise at competitive cost structures.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#a98b5d]" />
                </div>
                <h3 className="text-xl font-bold text-[#dcd7ce] mb-3">Strategic Location</h3>
                <p className="text-gray-400 text-sm">
                  Mediterranean bridge between Europe and Africa, with GDPR compliance, EU-aligned time zones, and growing policy support for tech innovation and cross-border partnerships.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-[#a98b5d]/20 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#a98b5d]" />
                </div>
                <h3 className="text-xl font-bold text-[#dcd7ce] mb-3">Untapped Potential</h3>
                <p className="text-gray-400 text-sm">
                  Systematic underinvestment despite exceptional founder quality creates massive opportunities. Growing success stories demonstrate the corridor's potential for 10x returns.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 border border-[#a98b5d]/20 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-[#a98b5d] mb-4">Why Start Here?</h4>
                <div className="space-y-4 text-gray-300">
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
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 rounded-2xl p-12">
              <div className="flex justify-center mb-6">
                <Star className="w-12 h-12 text-[#a98b5d]" />
              </div>
              <h3 className="text-3xl font-bold text-[#dcd7ce] mb-4">Join Our Mission</h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Be part of building a more equitable future for startup funding. Whether you're a founder, investor, or ecosystem partner, there's a place for you in this revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/solutions/founders"
                  className="px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Join as Founder
                </a>
                <a
                  href="/solutions/investors"
                  className="px-8 py-4 border border-[#a98b5d]/50 text-[#dcd7ce] font-semibold rounded-xl hover:bg-[#a98b5d]/10 transition-all duration-300"
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
