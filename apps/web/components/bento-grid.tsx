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
  <Card className={`group relative overflow-hidden hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1 ${className}`}>
   {background}
   <CardContent className="p-6 relative z-10">
    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
     <Icon className="h-6 w-6 text-amber-400" />
    </div>
    <h3 className="text-lg font-semibold mb-3 text-zinc-100">{name}</h3>
    <p className="text-zinc-300 text-sm leading-relaxed mb-4 font-medium">{description}</p>
    <Button
     variant="outline"
     size="sm"
     className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium"
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
   <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
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
   <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-orange-600/10" />
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
   <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
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
   <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-orange-600/10" />
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
   <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
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
   <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-orange-600/10" />
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
   <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
  ),
 },
]

const additionalFeatures = [
 {
  icon: Target,
  title: 'Precision Targeting',
  description: 'Find investors who specifically invest in your industry, stage, and geography.',
  gradient: 'from-amber-500 to-orange-500',
 },
 {
  icon: TrendingUp,
  title: 'Success Tracking',
  description: 'Monitor your fundraising progress with real-time metrics and milestones.',
  gradient: 'from-amber-600 to-orange-600',
 },
 {
  icon: Shield,
  title: 'Secure Platform',
  description: 'Enterprise-grade security to protect your sensitive business information.',
  gradient: 'from-amber-500 to-orange-500',
 },
 {
  icon: Globe,
  title: 'Global Network',
  description: 'Access investors from over 50 countries and expand your funding opportunities.',
  gradient: 'from-amber-600 to-orange-600',
 },
]

export function BentoGridSection() {
 return (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-zinc-950">
   <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12 sm:mb-16">
     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-zinc-100 leading-tight">
      Everything You Need to{' '}
      <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
       Raise Funding
      </span>
     </h2>
     <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium">
      Our comprehensive platform provides all the tools and insights you need to successfully raise capital for your startup.
     </p>
    </div>

    <BentoGrid className="mb-12 sm:mb-16">
     {features.map((feature, idx) => (
      <BentoCard
       key={idx}
       {...feature}
       className={`${feature.className} bg-zinc-900/60 border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-300`}
      />
     ))}
    </BentoGrid>

    {/* Additional Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
     {additionalFeatures.map((feature, index) => (
      <Card
       key={index}
       className="group hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-2 bg-zinc-900/60 border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/70"
      >
       <CardContent className="p-6 text-center">
        <div
         className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
         <feature.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-3 text-zinc-100">
         {feature.title}
        </h3>
        <p className="text-zinc-300 text-sm leading-relaxed font-medium">
         {feature.description}
        </p>
       </CardContent>
      </Card>
     ))}
    </div>

    <div className="text-center">
     <Button
      size="lg"
      className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 px-8 py-6 text-lg text-white hover:scale-105 transition-transform font-medium"
     >
      <Rocket className="mr-2 h-5 w-5" />
      Start Your Fundraising Journey
     </Button>
    </div>
   </div>
  </section>
 )
}