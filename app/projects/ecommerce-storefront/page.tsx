import Link from "next/link";
import { EcommerceMockup } from "@/components/ProjectMockups";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="font-bold text-xl">E‑commerce Storefront</h1>
          <Link href="/" className="text-sm text-indigo-400 hover:underline">
            ← Back home
          </Link>
        </div>
      </header>
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold">Shop the Latest</h2>
        <p className="mt-4 text-neutral-300">
          Product listings, cart interactions, and smooth checkout flow.
        </p>
        <div className="mt-8 mx-auto max-w-4xl aspect-video">
          <EcommerceMockup className="w-full h-full rounded-xl" />
        </div>
        <div className="mt-8">
          <Link
            href="/projects/ecommerce-storefront/store"
            className="inline-block bg-indigo-500 hover:bg-indigo-400 px-6 py-2 rounded-xl text-sm font-medium"
          >
            Launch Demo Store
          </Link>
        </div>
      </section>
      <section className="bg-neutral-800 py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Catalog</h3>
            <p className="text-neutral-400 text-sm">
              Organized product pages with detailed descriptions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Cart</h3>
            <p className="text-neutral-400 text-sm">
              Persistent cart with real‑time updates.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Checkout</h3>
            <p className="text-neutral-400 text-sm">
              Secure and simple checkout experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
