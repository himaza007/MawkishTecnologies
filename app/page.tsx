import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { SolutionsStrip } from "@/components/home/SolutionsStrip";
import { StatCounter } from "@/components/home/StatCounter";
import { FlowScene } from "@/components/home/FlowScene";
import { Timeline } from "@/components/home/Timeline";
import { ServiceMosaic } from "@/components/home/ServiceMosaic";
import { IndustryMosaic } from "@/components/home/IndustryMosaic";
import { serviceIconBySlug, IconGrid } from "@/components/home/icons";
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

      <SolutionsStrip />

      {/* Story + stats — full-bleed photo on the left, green CSS glow on the right */}
      <section className="mw-glow-section relative grid min-h-screen overflow-hidden lg:grid-cols-2">
        <div className="relative order-1 h-72 sm:h-96 lg:order-1 lg:h-auto lg:min-h-screen">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/demo/image2.jpeg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Fade the image into the black background on the edge that meets the text column */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black" />
        </div>
        <div className="relative z-10 order-2 flex flex-col justify-center px-6 py-16 lg:order-2 lg:min-h-screen lg:px-16 lg:py-24">
          <Reveal className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <SectionTag>Who We Are</SectionTag>
            <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">Mawkish Technologies</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
              Founded on a simple belief: technology projects should create measurable business outcomes,
              not just deploy software.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-mw-mint px-6 py-3 text-sm font-semibold text-mw-void transition hover:bg-white"
            >
              More about our story
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
          <Reveal delay={150} className="mx-auto mt-12 w-full max-w-xl border-t border-white/10 pt-8 lg:mx-0">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-display text-4xl text-mw-mint sm:text-5xl">
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

      <MarqueeStrip />

      {/* Platforms We Grow With — sticky left header, rich stacked cards on
          the right that fade/slide in as they enter the viewport */}
      <section className="relative bg-[#080d0c]">
        <div className="grid grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-5">
            <div className="static lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <SectionTag>Platforms We Grow With</SectionTag>
                <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                  Make You Grow, <span className="italic text-mw-mint">Together</span>.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
                  Mawkish delivers certified, multi-platform enterprise solutions — SAP, Salesforce, Odoo,
                  and AI — architected around how your business actually runs.
                </p>
              </Reveal>
              <Reveal delay={150} className="mt-10 overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(127,217,180,0.08)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://zql0rfjwszzixew9.public.blob.vercel-storage.com/background/bg6.JPG"
                  alt=""
                  className="h-72 w-full object-cover sm:h-80 lg:h-96"
                />
              </Reveal>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-7 lg:space-y-12">
            {growServices.map((s, i) => {
              const Icon = serviceIconBySlug[s.slug] ?? IconGrid;
              return (
                <Reveal key={s.slug} delay={i * 100}>
                  <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-mw-mint/30 hover:shadow-2xl hover:shadow-mw-mint/10">
                    <div className="flex items-center gap-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-mw-mint/25 bg-mw-mint/5 text-mw-mint">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-xl text-white sm:text-2xl">{s.name}</h3>
                    </div>
                    <p className="my-4 text-base leading-relaxed text-gray-300">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.outcomes.slice(0, 4).map((o) => (
                        <span
                          key={o}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mw-mint transition-colors hover:text-white"
                    >
                      Explore {s.name}
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </Reveal>
              );
            })}
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

        {/* Pain points / industries */}
        <section className="relative z-10 flex min-h-[60vh] items-center overflow-hidden">
          {/* Anchor image — bleeds to the bottom-right screen edge, sits
              behind the grid content, subtle blend into the black backdrop.
              Desktop only; keeps mobile stacking clean. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 hidden h-64 w-64 lg:block lg:h-80 lg:w-80"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/demo/image4.jpg" alt="" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-black/60 to-black" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[42%_58%] lg:gap-16 lg:px-8 lg:py-32">
            <Reveal>
              <SectionTag>The Problem We Solve</SectionTag>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Growth exposes what disconnected systems were hiding.
              </h2>
              <ul className="mt-6 space-y-3.5">
                {painPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-base leading-relaxed text-gray-300 transition-colors hover:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-0.5 h-4 w-4 shrink-0 text-mw-mint"
                    >
                      <path
                        d="M4 10.5L8 14.5L16 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="mx-auto w-full max-w-lg lg:mx-0">
              <SectionTag>Industries We Focus On</SectionTag>
              <div className="mt-6">
                <IndustryMosaic />
              </div>
              <Link
                href="/industries"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mw-mint transition-colors hover:text-white"
              >
                Explore industries
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          </div>
        </section>

      </div>

      <CtaBand />
    </>
  );
}