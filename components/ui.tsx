import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-mw-secondary/30 bg-mw-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-mw-secondary">
      {children}
    </span>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mw-dark-section mw-glow-grid relative overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <h2 className="font-display text-4xl text-white sm:text-5xl">
          Let&rsquo;s talk about the outcome you&rsquo;re trying to reach.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Tell us about the challenge you&rsquo;re facing — we&rsquo;ll help you design a practical path from where
          you are to where you need to be.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-mw-mint px-6 py-3 text-sm font-semibold text-mw-ink transition hover:bg-white"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="/contact?intent=proposal"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-mw-mint hover:text-mw-mint"
          >
            Request a Proposal
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="mw-dark-section mw-glow-grid relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-display text-5xl text-white sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">{description}</p>
      </div>
    </section>
  );
}
