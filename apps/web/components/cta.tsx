"use client"

import { Button, Input } from '@investi/ui'
import { ArrowRight } from 'lucide-react'

export function CTA() {
 return (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-primary text-white relative overflow-hidden">
   <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-600/20"></div>
   <div className="max-w-7xl mx-auto text-center relative z-10">
    <div className="animate-on-scroll">
     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
      Ready to transform your fundraising?
     </h2>
     <p className="text-xl text-primary-50 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
      Join thousands of startups and investors who are already using our platform
      to accelerate their funding journey.
     </p>

     <div className="max-w-md mx-auto stagger-item">
      <div className="flex flex-col sm:flex-row gap-4">
       <Input
        placeholder="Enter your email"
        className="bg-white text-zinc-900 border-0 hover:scale-105 transition-transform focus:scale-105 font-medium"
       />
       <Button variant="secondary" size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 hover:scale-105 transition-transform font-medium">
        Get Started
        <ArrowRight className="ml-2 h-4 w-4" />
       </Button>
      </div>
      <p className="text-sm text-primary-100 mt-4 font-medium">
       No credit card required. Start your free trial today.
      </p>
     </div>
    </div>
   </div>
  </section>
 )
}