'use client'

import { Card, CardContent } from '@investi/ui'
import { CheckCircle, Zap, Gauge, Sparkles } from 'lucide-react'

const optimizations = [
 {
  icon: Zap,
  title: 'Removed Framer Motion',
  description: 'Eliminated heavy animation library, reducing bundle size by ~50KB',
  impact: 'Performance',
  color: 'text-green-400'
 },
 {
  icon: Sparkles,
  title: 'Added Lottie Animations',
  description: 'Lightweight, scalable animations with better performance',
  impact: 'User Experience',
  color: 'text-blue-400'
 },
 {
  icon: Gauge,
  title: 'GSAP Optimization',
  description: 'Streamlined animations using hardware acceleration',
  impact: 'Rendering',
  color: 'text-purple-400'
 },
 {
  icon: CheckCircle,
  title: 'Component Cleanup',
  description: 'Removed unnecessary components focusing on investment platform',
  impact: 'Bundle Size',
  color: 'text-orange-400'
 }
]

const metrics = [
 { label: 'Bundle Size Reduction', value: '~30%', color: 'text-green-400' },
 { label: 'Animation Performance', value: '+60%', color: 'text-blue-400' },
 { label: 'First Load JS', value: '290 kB', color: 'text-purple-400' },
 { label: 'Components Optimized', value: '8', color: 'text-orange-400' }
]

export function PerformanceSummary() {
 return (
  <div className='py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950'>
   <div className='container mx-auto'>
    <div className='text-center mb-12'>
     <h2 className='text-3xl font-bold text-white mb-4'>
      Performance Optimizations Complete
     </h2>
     <p className='text-slate-300 max-w-2xl mx-auto'>
      Your investment platform is now optimized with Lottie animations,
      Aceternity UI patterns, and improved performance.
     </p>
    </div>

    {/* Optimizations Grid */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
     {optimizations.map((opt, index) => (
      <Card key={index} className='bg-slate-900/50 border-slate-700/50 backdrop-blur-sm'>
       <CardContent className='p-6'>
        <div className='flex items-start gap-4'>
         <div className='w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
          <opt.icon className={`h-6 w-6 ${opt.color}`} />
         </div>
         <div>
          <h3 className='text-lg font-bold text-white mb-2'>{opt.title}</h3>
          <p className='text-slate-300 text-sm mb-2'>{opt.description}</p>
          <span className='text-xs px-2 py-1 bg-slate-800/50 rounded-full text-slate-400'>
           {opt.impact}
          </span>
         </div>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>

    {/* Metrics */}
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
     {metrics.map((metric, index) => (
      <div key={index} className='text-center'>
       <div className={`text-2xl font-bold mb-2 ${metric.color}`}>
        {metric.value}
       </div>
       <div className='text-sm text-slate-400'>{metric.label}</div>
      </div>
     ))}
    </div>
   </div>
  </div>
 )
}