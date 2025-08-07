"use client"

import { Button, Input } from '@investi/ui'
import { ArrowRight } from 'lucide-react'

export function CTA() {
 return (
  <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
   <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-purple-600 opacity-20"></div>
   <div className="container mx-auto text-center relative z-10">
    <div className="animate-on-scroll">
     <h2 className="text-3xl sm:text-4xl font-bold mb-4">
      Ready to transform your fundraising?
     </h2>
     <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
      Join thousands of startups and investors who are already using our platform
      to accelerate their funding journey.
     </p>

     <div className="max-w-md mx-auto stagger-item">
      <div className="flex flex-col sm:flex-row gap-4">
       <Input
        placeholder="Enter your email"
        className="bg-background text-foreground hover:scale-105 transition-transform focus:scale-105"
       />
       <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform">
        Get Started
        <ArrowRight className="ml-2 h-4 w-4" />
       </Button>
      </div>
      <p className="text-sm opacity-75 mt-4">
       No credit card required. Start your free trial today.
      </p>
     </div>
    </div>
   </div>
  </section>
 )
}