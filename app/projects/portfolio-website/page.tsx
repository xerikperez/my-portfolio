import Link from "next/link";
import { PortfolioMockup } from "@/components/ProjectMockups";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="font-bold text-xl">Portfolio Website</h1>
          <Link href="/" className="text-sm text-indigo-400 hover:underline">
            ← Back home
          </Link>
        </div>
      </header>
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold">Modern Portfolio</h2>
        <p className="mt-4 text-neutral-300">
          Showcase skills and projects with a clean, responsive design.
        </p>
        <div className="mt-8 mx-auto max-w-4xl aspect-video">
          <PortfolioMockup className="w-full h-full rounded-xl" />
        </div>
      </section>
      <section className="bg-neutral-800 py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Responsive</h3>
            <p className="text-neutral-400 text-sm">
              Looks great on any device, from phones to desktops.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Fast</h3>
            <p className="text-neutral-400 text-sm">
              Built with Next.js for lightning‑fast performance.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Contact Ready</h3>
            <p className="text-neutral-400 text-sm">
              Includes contact forms to capture new opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
