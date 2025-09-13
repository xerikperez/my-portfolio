'use client';

import { useState } from 'react';
import Link from 'next/link';

const DATA = {
  visitors: [120, 90, 150, 170, 130, 160, 180],
  revenue: [80, 100, 90, 120, 95, 130, 110],
};

export default function DashboardDemo() {
  const [metric, setMetric] = useState<'visitors' | 'revenue'>('visitors');
  const data = DATA[metric];
  const height = 200;
  const barWidth = 40;
  const gap = 20;

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="font-bold text-xl">Dashboard Demo</h1>
          <Link href="/projects/saas-dashboard" className="text-sm text-indigo-400 hover:underline">
            ← Back to project
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto p-4">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setMetric('visitors')}
            className={`px-4 py-2 text-sm rounded-lg border border-white/5 ${
              metric === 'visitors' ? 'bg-indigo-500' : 'bg-neutral-800 hover:bg-neutral-700'
            }`}
          >
            Visitors
          </button>
          <button
            onClick={() => setMetric('revenue')}
            className={`px-4 py-2 text-sm rounded-lg border border-white/5 ${
              metric === 'revenue' ? 'bg-indigo-500' : 'bg-neutral-800 hover:bg-neutral-700'
            }`}
          >
            Revenue
          </button>
        </div>

        <svg
          viewBox={`0 0 ${data.length * (barWidth + gap) + gap} ${height}`}
          className="w-full h-48 bg-neutral-800 rounded-xl"
        >
          {data.map((v, i) => (
            <rect
              key={i}
              x={gap + i * (barWidth + gap)}
              y={height - v}
              width={barWidth}
              height={v}
              className="fill-indigo-400"
            />
          ))}
        </svg>
      </section>

      <section className="bg-neutral-800 py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Users</h3>
            <p className="text-neutral-400 text-sm">Monitor daily active users.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Revenue</h3>
            <p className="text-neutral-400 text-sm">Track subscription income.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Performance</h3>
            <p className="text-neutral-400 text-sm">Keep latency low worldwide.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

