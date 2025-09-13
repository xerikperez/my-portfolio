'use client';

import { useState } from 'react';
import Link from 'next/link';

const STATS = {
  clients: [5, 7, 6, 8, 9, 11, 10],
  jobs: [3, 4, 5, 6, 5, 7, 8],
};

export default function DashboardDemo() {
  const [metric, setMetric] = useState<'clients' | 'jobs'>('clients');
  const data = STATS[metric];
  const [bookings, setBookings] = useState<{ name: string; date: string }[]>([]);
  const height = 200;
  const barWidth = 40;
  const gap = 20;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const date = formData.get('date') as string;
    if (name && date) {
      setBookings([...bookings, { name, date }]);
      e.currentTarget.reset();
    }
  }

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
            onClick={() => setMetric('clients')}
            className={`px-4 py-2 text-sm rounded-lg border border-white/5 ${
              metric === 'clients' ? 'bg-indigo-500' : 'bg-neutral-800 hover:bg-neutral-700'
            }`}
          >
            Clients
          </button>
          <button
            onClick={() => setMetric('jobs')}
            className={`px-4 py-2 text-sm rounded-lg border border-white/5 ${
              metric === 'jobs' ? 'bg-indigo-500' : 'bg-neutral-800 hover:bg-neutral-700'
            }`}
          >
            Jobs
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
              y={height - v * 10}
              width={barWidth}
              height={v * 10}
              className="fill-indigo-400"
            />
          ))}
        </svg>
      </section>

      <section className="max-w-6xl mx-auto p-4 mt-10">
        <h2 className="text-lg font-semibold mb-4">Book a Cleaning</h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            name="name"
            placeholder="Client name"
            className="flex-1 px-3 py-2 rounded-lg bg-neutral-800 border border-white/5"
            required
          />
          <input
            type="date"
            name="date"
            className="px-3 py-2 rounded-lg bg-neutral-800 border border-white/5 flex-1 sm:flex-none"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-indigo-500 text-sm hover:bg-indigo-400"
          >
            Add
          </button>
        </form>
        <ul className="mt-4 space-y-1 text-sm">
          {bookings.map((b, i) => (
            <li
              key={i}
              className="flex justify-between bg-neutral-800 rounded-lg px-3 py-2"
            >
              <span>{b.name}</span>
              <span>{b.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-neutral-800 py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Clients</h3>
            <p className="text-neutral-400 text-sm">
              Monitor growth of your client base.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Bookings</h3>
            <p className="text-neutral-400 text-sm">
              Track scheduled cleanings at a glance.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Performance</h3>
            <p className="text-neutral-400 text-sm">
              Keep teams efficient and on time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

