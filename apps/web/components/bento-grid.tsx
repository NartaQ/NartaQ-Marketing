'use client'

import { Card, CardContent } from '@investi/ui'
import { Button } from '@investi/ui'
import {
 Search,
 Users,
 Mail,
 BarChart3,
 FileText,
 Zap,
 Target,
 TrendingUp,
 Shield,
 Globe,
 Brain,
 Rocket
} from 'lucide-react'

// Custom Bento Grid Components
function BentoGrid({ children, className = '' }: { children: React.ReactNode, className?: string }) {
 return (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${className}`}>
   {children}
  </div>
 )
}

function BentoCard({
 Icon,
 name,
 description,
 href,
 cta,
 className = '',
 background
}: {
 Icon: any
 name: string
 description: string
 href: string
 cta: string
 className?: string
 background?: React.ReactNode
}) {
 return (
  <Card className={`group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
   {background}
   <CardContent className="p-6 relative z-10">
    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
     <Icon className="h-6 w-6 text-blue-400" />
    </div>
    <h3 className="text-lg font-bold mb-3 text-white">{name}</h3>
    <p className="text-slate-300 text-sm leading-relaxed mb-4">{description}</p>
    <Button
     variant="outline"
     size="sm"
     className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
    >
     {cta}
    </Button>
   </CardContent>
  </Card>
 )
}

const features = [
 {
  Icon: Search,
  name: 'Smart Investor Discovery',
  description: 'AI-powered matching with 6,000+ active investors based on your startup profile, industry, and funding stage.',
  href: '#',
  cta: 'Explore Investors',
  className: 'col-span-3 lg:col-span-1',
  background: (
   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20" />
  ),
 },
 {
  Icon: Mail,
  name: 'Cold Outreach That Works',
  description: 'Reach out to investors with personalized messages and achieve a 40% response rate.',
  href: '#',
  cta: 'Start Outreach',
  className: 'col-span-3 lg:col-span-2',
  background: (
   <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-teal-500/20" />
  ),
 },
 {
  Icon: Users,
  name: 'Network Introductions',
  description: 'Leverage your existing network to get warm introductions to your target investors.',
  href: '#',
  cta: 'Find Intros',
  className: 'col-span-3 lg:col-span-2',
  background: (
   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20" />
  ),
 },
 {
  Icon: Zap,
  name: 'Inbound Deal Flow',
  description: 'Get discovered by investors actively looking for startups in your space.',
  href: '#',
  cta: 'Get Listed',
  className: 'col-span-3 lg:col-span-1',
  background: (
   <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20" />
  ),
 },
 {
  Icon: BarChart3,
  name: 'Advanced Analytics',
  description: 'Track your outreach performance, investor engagement, and optimize your fundraising strategy with detailed insights.',
  href: '#',
  cta: 'View Analytics',
  className: 'col-span-3 lg:col-span-1',
  background: (
   <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20" />
  ),
 },
 {
  Icon: FileText,
  name: 'Pitch Deck Tracking',
  description: 'Know exactly when investors view your deck and get insights on their engagement levels.',
  href: '#',
  cta: 'Track Decks',
  className: 'col-span-3 lg:col-span-1',
  background: (
   <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20" />
  ),
 },
 {
  Icon: Brain,
  name: 'AI-Powered Insights',
  description: 'Get personalized recommendations on which investors to target and when to reach out.',
  href: '#',
  cta: 'Get Insights',
  className: 'col-span-3 lg:col-span-1',
  background: (
   <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-rose-500/20" />
  ),
 },
]

const additionalFeatures = [
 {
  icon: Target,
  title: 'Precision Targeting',
  description: 'Find investors who specifically invest in your industry, stage, and geography.',
  gradient: 'from-blue-500 to-cyan-500',
 },
 {
  icon: TrendingUp,
  title: 'Success Tracking',
  description: 'Monitor your fundraising progress with real-time metrics and milestones.',
  gradient: 'from-green-500 to-emerald-500',
 },
 {
  icon: Shield,
  title: 'Secure Platform',
  description: 'Enterprise-grade security to protect your sensitive business information.',
  gradient: 'from-purple-500 to-violet-500',
 },
 {
  icon: Globe,
  title: 'Global Network',
  description: 'Access investors from over 50 countries and expand your funding opportunities.',
  gradient: 'from-orange-500 to-red-500',
 },
]

export function BentoGridSection() {
 return (
  <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
   <div className="container mx-auto">
    <div className="text-center mb-10">
     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
      Everything You Need to{' '}
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
       Raise Funding
      </span>
     </h2>
     <p className="text-xl text-slate-300 max-w-3xl mx-auto">
      Our comprehensive platform provides all the tools and insights you need to successfully raise capital for your startup.
     </p>
    </div>

    <BentoGrid className="mb-10">
     {features.map((feature, idx) => (
      <BentoCard
       key={idx}
       {...feature}
       className={`${feature.className} bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300`}
      />
     ))}
    </BentoGrid>

    {/* Additional Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
     {additionalFeatures.map((feature, index) => (
      <Card
       key={index}
       className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50"
      >
       <CardContent className="p-6 text-center">
        <div
         className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
         <feature.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-lg font-bold mb-3 text-white">
         {feature.title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
         {feature.description}
        </p>
       </CardContent>
      </Card>
     ))}
    </div>

    <div className="text-center">
     <Button
      size="lg"
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg text-white hover:scale-105 transition-transform"
     >
      <Rocket className="mr-2 h-5 w-5" />
      Start Your Fundraising Journey
     </Button>
    </div>
   </div>
  </section>
 )
}