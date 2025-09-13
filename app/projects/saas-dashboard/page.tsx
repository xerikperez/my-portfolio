import Link from "next/link";
import { SaasMockup } from "@/components/ProjectMockups";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="font-bold text-xl">SaaS Dashboard</h1>
          <Link href="/" className="text-sm text-indigo-400 hover:underline">
            ← Back home
          </Link>
        </div>
      </header>
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold">Insightful Analytics</h2>
        <p className="mt-4 text-neutral-300">
          Interactive charts, user authentication, and responsive layout.
        </p>
        <div className="mt-8 mx-auto max-w-4xl aspect-video">
          <SaasMockup className="w-full h-full rounded-xl" />
        </div>
        <div className="mt-8">
          <Link
            href="/projects/saas-dashboard/dashboard"
            className="inline-block bg-indigo-500 hover:bg-indigo-400 px-6 py-2 rounded-xl text-sm font-medium"
          >
            Launch Demo Dashboard
          </Link>
        </div>
      </section>
      <section className="bg-neutral-800 py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Charts</h3>
            <p className="text-neutral-400 text-sm">
              Visualize data with dynamic and interactive graphs.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Accounts</h3>
            <p className="text-neutral-400 text-sm">
              Secure authentication and role‑based access.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Responsive</h3>
            <p className="text-neutral-400 text-sm">
              Works seamlessly on desktops, tablets, and phones.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
