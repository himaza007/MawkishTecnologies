import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, Section } from "@/components/ui";
import { regions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us | Mawkish Technologies",
  description:
    "Mawkish Technologies bridges the gap between technology and business strategy to deliver measurable outcomes.",
};

function IconStrategy({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 20V10M12 20V4M20 20v-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPlatform({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconTeam({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c2.8.2 5 2.4 5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const cultureCards = [
  {
    title: "Strategy-First",
    icon: IconStrategy,
    body: "We start with business objectives, not technology preferences — the platform is chosen to fit the strategy, never the other way around.",
  },
  {
    title: "Platform Agnostic",
    icon: IconPlatform,
    body: "SAP, Salesforce, and Odoo each solve different problems. We recommend whichever fits your growth stage, not whichever we're most incentivized to sell.",
    badges: ["SAP", "Salesforce", "Odoo"],
  },
  {
    title: "Collaborative Energy",
    icon: IconTeam,
    body: "A friendly, high-energy, team-centric culture — we work closely with clients as partners, not vendors, for the long haul.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1: Hero Split (50/50 full-bleed) */}
      <div className="grid h-screen w-full grid-cols-1 bg-[#000100] lg:grid-cols-2">
        <div className="relative order-last h-full overflow-hidden lg:order-first">
          <Image
            src="https://zql0rfjwszzixew9.public.blob.vercel-storage.com/background/untitled-03672.JPG"
            alt="Mawkish Vision"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000100] via-transparent to-transparent" />
        </div>
        <div className="flex flex-col justify-center border-l border-white/10 bg-[#080d0c] px-8 py-20 lg:px-16">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-mint">
            About Mawkish
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white lg:text-5xl">
            Business outcomes first. Technology second.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
            We bridge business strategy and technology — delivering high-impact ERP, CRM, and AI
            solutions that drive real transformation.
          </p>
        </div>
      </div>

      {/* SECTION 2: Culture & Principles — glass card grid */}
      <section className="bg-black">
        <Section className="!py-12 lg:!py-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-mint">
              Our Culture
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Our Culture &amp; Principles.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              A collaborative, high-energy environment built around long-term client outcomes and
              innovation.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cultureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition hover:border-mw-mint/30 hover:bg-white/[0.04]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-mw-mint/25 bg-mw-mint/5 text-mw-mint">
                    <Icon />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{card.body}</p>
                  {card.badges && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {card.badges.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mw-mint/90"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Section>
      </section>

      {/* SECTION 3: Culture / environment showcase — full-width image band */}
      <section className="bg-black">
        <Section className="!py-0 lg:!py-0">
          <div className="relative h-[450px] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://zql0rfjwszzixew9.public.blob.vercel-storage.com/background/untitled-03612.JPG"
              alt="Mawkish team and workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl border border-white/15 bg-black/40 p-5 backdrop-blur-xl">
              <p className="text-sm font-medium leading-relaxed text-white">
                Friendly, collaborative, and innovation-driven culture.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* SECTION 4: Leadership — streamlined, image + glass bio card */}
      <section className="bg-black">
        <Section className="!py-12 lg:!py-16 space-y-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-mint">
              Leadership
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Leadership.
            </h2>
          </div>

          {/* Chairman */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/brand/malick.JPG"
                alt="Hatim Malick - Chairman"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="flex min-h-[420px] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
              <div className="font-display text-2xl font-bold tracking-tight text-white">
                Hatim Malick
              </div>
              <div className="mt-1 text-sm font-medium text-mw-mint">Chairman, Mawkish Group</div>
              <p className="mt-5 text-base leading-relaxed text-gray-300">
                Provides strategic oversight across Mawkish Group&apos;s portfolio, guiding long-term
                regional growth and enterprise partnerships across South Asia and the Middle East.
              </p>
            </div>
          </div>

          {/* CEO */}
          <div className="grid gap-10 border-t border-white/5 pt-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 flex min-h-[420px] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl lg:order-1">
              <div className="font-display text-2xl font-bold tracking-tight text-white">
                Michael Gunawardena
              </div>
              <div className="mt-1 text-sm font-medium text-mw-mint">Chief Executive Officer</div>
              <p className="mt-5 text-base leading-relaxed text-gray-300">
                13+ years of leadership in business operations, client management, and enterprise
                transformation. Michael leads Mawkish&apos;s growth strategy and multi-platform advisory
                across SAP, Salesforce, and Odoo.
              </p>
            </div>
            <div className="relative order-1 h-[420px] overflow-hidden rounded-3xl border border-white/10 lg:order-2">
              <Image
                src="/images/brand/michael.JPG"
                alt="Michael Gunawardena - CEO"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </Section>
      </section>

      {/* SECTION 5: Regional footprint — clean glass badge list */}
      <section className="mw-dark-section border-t border-white/10">
        <Section className="!py-12 lg:!py-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-mint">
              Regional Footprint
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Where we operate.
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {regions.map((r) => (
              <div
                key={r.region}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 backdrop-blur-xl"
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    r.activeMarket ? "bg-mw-mint" : "bg-white/30"
                  }`}
                />
                <span className="text-sm font-semibold text-white">{r.region}</span>
                <span className="text-xs text-white/50">{r.presence}</span>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <CtaBand />
    </>
  );
}