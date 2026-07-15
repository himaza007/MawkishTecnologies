import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { StatCounter } from "@/components/home/StatCounter";
import { FlowScene } from "@/components/home/FlowScene";
import { Timeline } from "@/components/home/Timeline";
import { ServiceMosaic } from "@/components/home/ServiceMosaic";
import { IndustryMosaic } from "@/components/home/IndustryMosaic";
import { Reveal } from "@/components/Reveal";
import { CtaBand, Section } from "@/components/ui";
import { painPoints, partners, services, stats } from "@/lib/site-data";

const growSlugs = [
  "sap-solutions",
  "salesforce-solutions",
  "odoo-implementation",
  "ai-powered-business-applications",
];
const growServices = growSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

function SectionTag({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-10 bg-mw-mint" />
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-mint">{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <MarqueeStrip />

      {/* Story + stats — full-bleed background photo, count-up numbers */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about_pic.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-4 pt-24 lg:px-8">
          <Reveal className="mx-auto max-w-xl text-center lg:ml-auto lg:mr-0 lg:text-right">
            <SectionTag>Who We Are</SectionTag>
            <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">Mawkish Technologies</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
              Founded on a simple belief: technology projects should create measurable business outcomes,
              not just deploy software.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mw-mint hover:text-white"
            >
              More about our story
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>
        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 lg:px-8">
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="mw-glass rounded-2xl px-4 py-7 text-center"
                >
                  <div className="font-display text-4xl text-white sm:text-5xl">
                    <StatCounter value={Number(s.value)} />
                  </div>
                  <div className="mt-2 text-xs font-medium text-white/70 sm:text-sm">{s.label}</div>
                  {"detail" in s && s.detail && (
                    <div className="mt-0.5 text-[11px] text-white/40">{s.detail}</div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Platforms We Grow With — full-bleed background photo, links right-aligned */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bg-image3.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-mw-void/70 via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="ml-auto max-w-md">
            <Reveal className="text-right">
              <SectionTag>Platforms We Grow With</SectionTag>
              <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">
                Make You Grow, <span className="italic text-mw-mint">Together</span>.
              </h2>
            </Reveal>
            <div className="mt-10 space-y-6">
              {growServices.map((s, i) => (
                <Reveal key={s.slug} delay={i * 60} className="text-right">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block border-b border-white/10 pb-6 last:border-0"
                  >
                    <h3 className="font-display text-xl text-white transition-colors group-hover:text-mw-mint sm:text-2xl">
                      {s.name}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-mw-mint opacity-80 transition-opacity group-hover:opacity-100">
                      Learn more &rarr;
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mw-flow">
        <FlowScene />

        {/* Methodology — connected rail */}
        <section className="relative z-10 flex min-h-[60vh] items-center">
          <Section>
            <Reveal className="max-w-2xl">
              <SectionTag>Our Methodology</SectionTag>
              <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">
                Discover, Design, Implement, Optimize.
              </h2>
              <p className="mt-4 text-sm text-white/55 sm:text-base">
                Every engagement begins with understanding business objectives before technology
                recommendations are made.
              </p>
            </Reveal>
            <div className="mt-14">
              <Reveal>
                <Timeline />
              </Reveal>
            </div>
          </Section>
        </section>

        {/* Services — icon-driven mosaic */}
        <section className="relative z-10 flex min-h-[60vh] items-center">
          <Section>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal className="max-w-xl">
                <SectionTag>Our Services</SectionTag>
                <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">
                  Enterprise platforms, applied with a business-first lens.
                </h2>
              </Reveal>
              <Link href="/services" className="text-sm font-semibold text-mw-mint hover:text-white">
                View all services &rarr;
              </Link>
            </div>
            <div className="mt-12">
              <Reveal>
                <ServiceMosaic />
              </Reveal>
            </div>
          </Section>
        </section>

        {/* Pain points / industries */}
        <section className="relative z-10 flex min-h-[60vh] items-center">
          <Section className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionTag>The Problem We Solve</SectionTag>
              <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">
                Growth exposes what disconnected systems were hiding.
              </h2>
              <ul className="mt-6 space-y-3">
                {painPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mw-mint" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <SectionTag>Industries We Focus On</SectionTag>
              <div className="mt-6">
                <IndustryMosaic />
              </div>
              <Link href="/industries" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mw-mint">
                Explore industries &rarr;
              </Link>
            </Reveal>
          </Section>
        </section>

        {/* Partners */}
        <section className="relative z-10 flex min-h-[50vh] items-center">
          <Section>
            <Reveal className="mx-auto max-w-2xl text-center">
              <SectionTag>Strategic Partnerships</SectionTag>
              <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">
                Backed by the right platform partnerships.
              </h2>
            </Reveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              {partners.map((p, i) => (
                <Reveal key={p.name} delay={i * 80}>
                  <div className="mw-glass mw-glass-hover rounded-2xl px-8 py-6 text-center">
                    <div className="font-display text-xl text-white">{p.name}</div>
                    <div className="mw-hud mt-1 text-[10px] text-mw-mint">{p.relationship}</div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={partners.length * 80}>
                <div className="rounded-2xl border border-dashed border-white/15 px-8 py-6 text-center text-sm text-white/40">
                  AWS &amp; AI platform partnerships
                </div>
              </Reveal>
            </div>
          </Section>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
