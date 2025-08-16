import Link from "next/link";

export default function EcosystemSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center p-[2%] py-24">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-semibold">An innovative ecosystem</h2>
        <p className="text-neutral-400">
          Two complementary axes under one roof. Pick your path.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-6xl w-full">
        <Link href="/companies-providers" className="rounded-2xl border border-neutral-800 p-8 bg-black/40 hover:bg-black/60 transition-colors">
          <h3 className="text-2xl font-medium mb-2">Companies ↔ Providers</h3>
          <p className="text-neutral-400 mb-4">
            Scoped bounties, tri‑party orchestration, milestone protections, and optional intermediation.
          </p>
          <div className="text-neutral-300 text-sm">
            • Private bounties
            <br />• Milestone releases
            <br />• Hybrid comp (cash + equity)
          </div>
        </Link>
        <Link href="/investors-startups" className="rounded-2xl border border-neutral-800 p-8 bg-black/40 hover:bg-black/60 transition-colors">
          <h3 className="text-2xl font-medium mb-2">Investors ↔ Startups</h3>
          <p className="text-neutral-400 mb-4">
            Credit‑based deck reviews, curated intros, and transparent progress tracking.
          </p>
          <div className="text-neutral-300 text-sm">
            • AI rubric checks
            <br />• Curated outreach
            <br />• Follow‑ups tracked
          </div>
        </Link>
      </div>
    </section>
  )
}
