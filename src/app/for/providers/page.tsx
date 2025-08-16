import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "For Providers | NartaQ",
  description: "Private bounties, clear acceptance, and protections that reduce client risk.",
};

export default function ForProvidersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main>
        <section className="flex w-full flex-col items-center justify-center p-[2%] py-20 text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold">Earn on outcomes, not promises.</h1>
            <p className="text-neutral-400">
              Join private bounties from verified companies. Get paid when your work meets clear acceptance criteria.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">Clarity up‑front</h2>
            <p className="text-sm text-neutral-400">Deliverables, scope, and checks documented before kick‑off.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">Timeboxed reviews</h2>
            <p className="text-sm text-neutral-400">Stop waiting in limbo. Reviews and releases are scheduled.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">Hybrid compensation</h2>
            <p className="text-sm text-neutral-400">Cash + equity/options supported for long‑term alignment.</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto p-6 pb-16 text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/companies-providers#orchestration" className="px-6 py-3 rounded-lg font-medium bg-[#a98b5d] text-black">How orchestration works</Link>
            <Link href="/products/work" className="px-6 py-3 rounded-lg font-medium border border-neutral-700">See the product</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
