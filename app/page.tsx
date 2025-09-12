"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CircuitBackground from "@/components/CircuitBackground";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/erik-pérez",
  github: "https://github.com/xerikperez",
  instagram: "https://instagram.com/YOUR_INSTAGRAM",
  resume: "/resume.pdf",
  email: "you@yourdomain.com",
  formspreeId: "YOUR_FORM_ID",
};

const SectionTitle = ({
  title,
  subtitle,
  center,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) => (
  <div className={center ? "text-center" : ""}>
    <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-semibold tracking-[0.08em] uppercase">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-neutral-300 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const Card = ({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 ${className}`}>
    {children}
  </div>
);

const FadeIn = ({
  children,
  delay = 0,
}: React.PropsWithChildren<{ delay?: number }>) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <CircuitBackground />
      {/* ===== Nav ===== */}
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mt-4 flex items-center justify-between rounded-2xl glass px-4 py-2">
            <a href="#home" className="flex items-center">
              <Image
                src="/logo.png"
                alt="CoreVision logo"
                width={32}
                height={32}
                priority
              />
            </a>
            <div className="hidden md:flex items-center gap-2">
              <a
                href="#about"
                className="px-3 py-1.5 rounded-xl hover:bg-white/5"
              >
                About
              </a>
              <a
                href="#work"
                className="px-3 py-1.5 rounded-xl hover:bg-white/5"
              >
                Work
              </a>
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-xl hover:bg-white/5"
              >
                Contact
              </a>
              <button
                onClick={() => setQuoteOpen(true)}
                className="ml-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 px-4 py-2 text-sm font-medium"
              >
                Get a Quote
              </button>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden px-3 py-2 rounded-xl hover:bg-white/5"
              aria-label="Open menu"
            >
              ☰
            </button>
          </nav>
          {mobileOpen && (
            <div className="md:hidden mt-2 glass rounded-2xl px-4 py-3">
              <a
                href="#about"
                className="block px-3 py-2 rounded-lg hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                About
              </a>
              <a
                href="#work"
                className="block px-3 py-2 rounded-lg hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Work
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-lg hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setQuoteOpen(true);
                }}
                className="mt-2 w-full rounded-xl bg-indigo-500 hover:bg-indigo-400 px-4 py-2 text-sm font-medium"
              >
                Get a Quote
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="home" className="relative pt-36 pb-24">
        {/* Orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute top-40 -right-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-[float_6s_ease-in-out_infinite] [animation-delay:1s]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <p className="text-sm tracking-[0.25em] text-neutral-400 font-[var(--font-orbitron)] uppercase">
              SOFTWARE • AUTOMATION • ENTREPRENEUR
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight font-[var(--font-orbitron)] tracking-[0.06em] uppercase">
              corevision — Fast, Elegant, Automated.
            </h1>
            <p className="mt-4 text-neutral-300 max-w-prose">
              I build clean, scalable web apps and business automations that
              save teams time and make products shine. Let’s ship something
              great.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={LINKS.linkedin} target="_blank" className="link-like">
                LinkedIn
              </a>
              <a href={LINKS.github} target="_blank" className="link-like">
                GitHub
              </a>
              <a href={LINKS.resume} target="_blank" className="link-like">
                Resume
              </a>
              <a href={LINKS.instagram} target="_blank" className="link-like">
                Instagram
              </a>
              <a href="#contact" className="link-like">
                Contact Me
              </a>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setQuoteOpen(true)}
                className="rounded-xl bg-indigo-500 hover:bg-indigo-400 px-5 py-3 font-medium"
              >
                Get a Quote
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/30 to-fuchsia-500/30 blur-2xl -z-10" />
              <Card className="rounded-3xl p-6">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    title="Miami Downtown Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-80.2017,25.7471,-80.1769,25.7780&layer=mapnik&marker=25.7617,-80.1918"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-sm text-neutral-400">
                  Miami • Available for freelance & contracts
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
          <FadeIn>
            <SectionTitle title="About Me" />
            <p className="mt-4 text-neutral-300 leading-relaxed">
              I’m a Miami‑based full‑stack engineer building modern web apps and
              automation systems. My recent work spans logistics dashboards,
              internal tooling, and AI‑assisted workflows that cut manual steps
              by 50–80%. I care about clean code, fast delivery, and delightful
              UX.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-300">
              <li>• Frontend: React, Next.js, TypeScript, Tailwind/MUI</li>
              <li>• Backend: Node.js, Firebase, Nest.js, PostgreSQL</li>
              <li>• Cloud/DevOps: AWS, Docker, CI/CD</li>
              <li>
                • Automation: Playwright, Python, Excel scripting, AI APIs
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Card className="rounded-3xl p-6">
              <h3 className="text-lg font-medium">Highlights</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-3xl font-semibold">80%+</div>
                  <div className="text-neutral-400">manual work automated</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-3xl font-semibold">10+ </div>
                  <div className="text-neutral-400">end‑to‑end projects</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-3xl font-semibold">Miami</div>
                  <div className="text-neutral-400">based • remote OK</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-3xl font-semibold">Spanish/English</div>
                  <div className="text-neutral-400">bilingual comms</div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ===== Work ===== */}
      <section id="work" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn>
            <SectionTitle
              title="Selected Work"
              subtitle="A few projects that showcase velocity, DX, and polish."
            />
          </FadeIn>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Logistics Slot Booking",
                desc: "Admin + driver apps, automated scheduling, real‑time updates.",
              },
              {
                title: "Vendor ETA Scraper",
                desc: "Playwright bot pulling ETAs, tracking numbers, and PDFs.",
              },
              {
                title: "Client Portal MVP",
                desc: "Auth, orgs, claims, and sleek Tailwind frontend.",
              },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={0.03 * i}>
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-neutral-900" />
                  <div className="p-4">
                    <h3 className="font-medium">{p.title}</h3>
                    <p className="mt-1 text-sm text-neutral-400">{p.desc}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-8">
              <button
                onClick={() => setQuoteOpen(true)}
                className="rounded-xl bg-indigo-500 hover:bg-indigo-400 px-5 py-3 font-medium"
              >
                Get a Quote
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <FadeIn>
            <SectionTitle
              title="Contact"
              subtitle="Have a project in mind? Let’s talk."
              center
            />
          </FadeIn>
          <FadeIn>
            <form
              className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4"
              action={
                LINKS.formspreeId !== "YOUR_FORM_ID"
                  ? `https://formspree.io/f/${LINKS.formspreeId}`
                  : undefined
              }
              method="POST"
              onSubmit={(e) => {
                if (LINKS.formspreeId === "YOUR_FORM_ID") {
                  e.preventDefault();
                  alert("Set LINKS.formspreeId to enable form submission.");
                }
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-400">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-400">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-neutral-400">
                  What do you need?
                </label>
                <select
                  name="type"
                  className="mt-1 w-full rounded-xl bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option>Web App</option>
                  <option>Automation / Bot</option>
                  <option>Dashboard / Data</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-400">
                    Budget
                  </label>
                  <select
                    name="budget"
                    className="mt-1 w-full rounded-xl bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    <option>$1k – $3k</option>
                    <option>$3k – $8k</option>
                    <option>$8k – $15k</option>
                    <option>$15k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-neutral-400">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    className="mt-1 w-full rounded-xl bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    <option>1–2 weeks</option>
                    <option>2–4 weeks</option>
                    <option>1–2 months</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-neutral-400">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-xl bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Tell me about your project…"
                />
              </div>
              <div className="flex flex-wrap gap-3 items-center justify-between">
                <button
                  className="rounded-xl bg-indigo-500 hover:bg-indigo-400 px-5 py-3 font-medium"
                  type="submit"
                >
                  Send Message
                </button>
                <a
                  href={`mailto:${LINKS.email}`}
                  className="text-sm text-neutral-400 hover:text-neutral-200"
                >
                  or email {LINKS.email}
                </a>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-400">
          <div>© {year} CoreVision Enterprises. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a
              href={LINKS.linkedin}
              target="_blank"
              className="hover:text-neutral-200"
            >
              LinkedIn
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              className="hover:text-neutral-200"
            >
              GitHub
            </a>
            <a
              href={LINKS.resume}
              target="_blank"
              className="hover:text-neutral-200"
            >
              Resume
            </a>
            <a
              href={LINKS.instagram}
              target="_blank"
              className="hover:text-neutral-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* ===== Quote Modal ===== */}
      {quoteOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setQuoteOpen(false)}
          />
          <Card className="relative w-full sm:max-w-lg mx-4 sm:mx-0 p-6 backdrop-blur-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Get a Quote</h3>
              <button
                onClick={() => setQuoteOpen(false)}
                className="rounded-lg px-2 py-1 hover:bg-white/5"
              >
                ✕
              </button>
            </div>
            <form
              className="mt-4 space-y-3"
              action={
                LINKS.formspreeId !== "YOUR_FORM_ID"
                  ? `https://formspree.io/f/${LINKS.formspreeId}`
                  : undefined
              }
              method="POST"
              onSubmit={(e) => {
                if (LINKS.formspreeId === "YOUR_FORM_ID") {
                  e.preventDefault();
                  alert("Set LINKS.formspreeId to enable form submission.");
                }
              }}
            >
              <input type="hidden" name="source" value="Quote Modal" />
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  name="name"
                  placeholder="Name"
                  required
                  className="rounded-xl bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="rounded-xl bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <input
                name="project"
                placeholder="Project type (e.g., React app, automation)"
                className="w-full rounded-xl bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                name="details"
                rows={4}
                placeholder="Briefly describe goals, features, deadlines"
                className="w-full rounded-xl bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setQuoteOpen(false)}
                  className="rounded-xl px-4 py-2 hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-500 hover:bg-indigo-400 px-4 py-2 font-medium"
                >
                  Request Quote
                </button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
