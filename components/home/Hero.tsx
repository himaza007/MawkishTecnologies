"use client";

import Link from "next/link";
import { HeroScene } from "./HeroScene";
import { StatCounter } from "./StatCounter";
import { IconStack, IconGrid, IconOrbit, IconShield } from "./icons";
import { siteConfig, stats } from "@/lib/site-data";

const ecosystem = ["SAP", "Salesforce", "Odoo", "AI Systems"];

const statIcons = [IconStack, IconGrid, IconOrbit, IconShield];

export function Hero() {
  return (
    <section
      style={{ backgroundColor: "#020604" }}
      className="mw-void-bg relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* WebGL network scene — reacts to pointer movement, not scroll */}
      <HeroScene className="absolute inset-0" />

      {/* Depth layers — literal color values, no CSS-variable indirection */}
      <div className="mw-scan-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="mw-hero-scrim pointer-events-none absolute inset-0" />

      {/* Center content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 pt-24 text-center">
        <div className="mw-copy-panel absolute inset-x-0 top-1/2 h-[85%] -translate-y-1/2 rounded-[48px]" />

        {/* Ambient glow behind the headline — reads as a glowing display
            rather than flat text on a flat background. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[42%] h-[280px] w-[92%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-mw-mint/20 blur-[110px]"
        />

        <span className="mw-hud relative rounded-full border border-mw-mint/30 bg-mw-mint/10 px-4 py-1.5 text-[10px] text-mw-mint sm:text-xs">
          Architecting Digital Transformation
        </span>

        <h1 className="relative mt-7 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[76px] lg:leading-[1.03] lg:tracking-[-2.5px]">
          Technology that creates real <span className="mw-text-gradient">business outcomes</span>
        </h1>

        {/* Subtext — bumped from white/70 to white/85 so it doesn't wash
            out against the dark backdrop. */}
        <p className="relative mt-6 max-w-xl text-balance text-sm leading-relaxed text-white/85 sm:text-base">
          We architect and implement SAP, Salesforce, Odoo, and AI-driven systems that turn disconnected
          operations into one connected, intelligent platform.
        </p>

        {/* Live ecosystem ticker — small scrolling credibility strip */}
        <div className="mw-edge-fade relative mt-6 w-full max-w-sm overflow-hidden">
          <div className="mw-marquee-track flex w-max items-center gap-3">
            {[...ecosystem, ...ecosystem].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="mw-hud flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[10px] text-white/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-mw-mint" />
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          {/* Primary CTA sits on its own soft glow so it reads as the
              obvious next step, not just another button. */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-mw-mint/50 blur-xl"
            />
            <Link
              href={siteConfig.primaryCta.href}
              className="rounded-full bg-mw-mint px-7 py-3 text-sm font-semibold text-mw-void shadow-lg shadow-mw-mint/30 transition hover:bg-white"
            >
              {siteConfig.primaryCta.label}
            </Link>
          </div>
          <Link
            href="/services"
            className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-mw-mint hover:text-mw-mint"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Bento-style stat cards — distinct glass tiles instead of one
          continuous pill bar, big animated numbers, icon per metric. */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-10 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.slice(0, 4).map((s, i) => {
            const Icon = statIcons[i] ?? IconStack;
            return (
              <div
                key={s.label}
                className="mw-glass mw-glass-hover rounded-2xl px-4 py-5 text-center sm:px-5 sm:py-6"
              >
                <Icon className="mx-auto h-5 w-5 text-mw-mint/80" />
                <div className="mt-2 font-display text-4xl text-white sm:text-5xl">
                  <StatCounter value={Number(s.value)} />
                </div>
                <div className="mw-hud mt-1.5 text-[10px] leading-snug text-white/60 sm:text-[11px]">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}