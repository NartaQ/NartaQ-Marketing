import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "For Companies | NartaQ",
  description: "Scoped bounties and milestone protections so you get what you paid for.",
};

export default function ForCompaniesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main>
        <section className="flex w-full flex-col items-center justify-center p-[2%] py-20 text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold">Ship work you can verify.</h1>
            <p className="text-neutral-400">
              Write a clear brief, pick from vetted providers, and release funds only when acceptance criteria pass.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">Clear acceptance</h2>
            <p className="text-sm text-neutral-400">Templates help you specify quality checks before work starts.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">Shortlist → award</h2>
            <p className="text-sm text-neutral-400">Invite a private pool, compare proposals, award with confidence.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black/40">
            <h2 className="font-medium mb-1">Milestone protections</h2>
            <p className="text-sm text-neutral-400">Stage deliverables. Release on acceptance. Keep leverage if things drift.</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto p-6 pb-16 text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/companies-providers#bounties" className="px-6 py-3 rounded-lg font-medium bg-[#a98b5d] text-black">Explore bounties</Link>
            <Link href="/products/work" className="px-6 py-3 rounded-lg font-medium border border-neutral-700">See the product</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
