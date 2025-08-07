"use client"

const stats = [
 { label: "Average Deal Size", value: "$5M", description: "Higher than industry average" },
 { label: "Time to Close", value: "45 days", description: "50% faster than traditional VC" },
 { label: "Success Rate", value: "85%", description: "Of matched startups get funded" },
 { label: "Global Reach", value: "50+ countries", description: "Worldwide investor network" },
]

export function Stats() {
 return (
  <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
   <div className="container mx-auto">
    <div className="text-center mb-10 animate-on-scroll">
     <h2 className="text-3xl sm:text-4xl font-bold mb-4">
      Trusted by the best
     </h2>
     <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
      Our platform delivers results that matter to both startups and investors
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     {stats.map((stat, index) => (
      <div
       key={stat.label}
       className="text-center stagger-item"
      >
       <div className="text-4xl font-bold text-primary mb-2 hover:scale-110 transition-transform duration-300">
        {stat.value}
       </div>
       <div className="text-lg font-semibold mb-2">{stat.label}</div>
       <div className="text-sm text-muted-foreground">{stat.description}</div>
      </div>
     ))}
    </div>
   </div>
  </section>
 )
}