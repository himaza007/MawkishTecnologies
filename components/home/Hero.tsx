"use client";

import Link from "next/link";
import { HeroScene } from "./HeroScene";
import { siteConfig, stats } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      style={{ backgroundColor: "#020604" }}
      className="mw-void-bg relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* WebGL network scene */}
      <HeroScene className="absolute inset-0" />

      {/* Depth layers — literal color values, no CSS-variable indirection */}
      <div className="mw-scan-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="mw-hero-scrim pointer-events-none absolute inset-0" />

      {/* Center content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 pt-24 text-center">
        <div className="mw-copy-panel absolute inset-x-0 top-1/2 h-[85%] -translate-y-1/2 rounded-[48px]" />
        <span className="mw-hud relative rounded-full border border-mw-mint/30 bg-mw-mint/10 px-4 py-1.5 text-[10px] text-mw-mint sm:text-xs">
          Architecting Digital Transformation
        </span>
        <h1 className="mw-text-gradient relative mt-7 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-[76px] lg:leading-[1.03] lg:tracking-[-2.5px]">
          Technology that creates real business outcomes
        </h1>
        <p className="relative mt-6 max-w-xl text-balance text-sm leading-relaxed text-white/70 sm:text-base">
          We architect and implement SAP, Salesforce, Odoo, and AI-driven systems that turn disconnected
          operations into one connected, intelligent platform.
        </p>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={siteConfig.primaryCta.href}
            className="rounded-full bg-mw-mint px-7 py-3 text-sm font-semibold text-mw-ink transition hover:bg-white"
          >
            {siteConfig.primaryCta.label}
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-mw-mint hover:text-mw-mint"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Bottom HUD strip */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 lg:px-8">
        <div className="mw-glass flex flex-wrap items-center justify-center gap-x-10 gap-y-3 rounded-2xl px-6 py-4 sm:justify-between">
          {stats.slice(0, 4).map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="mw-hud font-display text-2xl text-mw-mint sm:text-3xl">
                {s.value}
              </span>
              <span className="mw-hud text-[10px] text-white/60 sm:text-xs">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="mw-hud text-[10px]">Scroll</span>
            <span className="h-8 w-px animate-pulse bg-gradient-to-b from-mw-mint to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
