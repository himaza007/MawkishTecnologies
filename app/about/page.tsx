import type { Metadata } from "next";
import { CtaBand, Eyebrow, PageHero, Section } from "@/components/ui";
import { PullQuote } from "@/components/PullQuote";
import { coreValues, leadership, regions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mawkish Technologies' founding story, values, leadership, and vision to become the most trusted business transformation partner in South Asia and the Middle East.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mawkish"
        title="Business outcomes first. Technology second."
        description="We were founded on a simple belief: technology projects should create measurable business outcomes, not just deploy software."
      />

      <Section className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Founding Story</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-mw-primary">Why we started Mawkish.</h2>
          <div className="mt-5 space-y-4 text-mw-ink/70 leading-relaxed">
            <p>
              Many organizations invest heavily in ERP, CRM, cloud, and digital transformation initiatives but
              struggle to realize the expected value due to poor alignment between technology and business
              objectives. Mawkish was established to bridge that gap by helping organizations identify business
              challenges, design practical solutions, and successfully execute transformation initiatives.
            </p>
            <p>
              Today, Mawkish works with organizations across multiple industries to modernize operations,
              improve visibility, and accelerate growth through enterprise technology.
            </p>
          </div>
        </div>
        <div>
          <Eyebrow>Why SAP, Salesforce &amp; Odoo</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-mw-primary">
            Platform-agnostic, by design.
          </h2>
          <div className="mt-5 space-y-4 text-mw-ink/70 leading-relaxed">
            <p>
              We believe technology should adapt to the business, not the other way around. SAP, Salesforce, and
              Odoo represent three of the world&rsquo;s most powerful business platforms, each addressing
              different stages of organizational growth: SAP provides enterprise-grade operational excellence,
              Salesforce enables customer-centric growth and engagement, and Odoo offers an integrated, flexible
              platform for growing businesses.
            </p>
            <p>
              Our approach is platform-agnostic. We focus on understanding business challenges first, then
              recommend the technology that best supports the client&rsquo;s long-term objectives.
            </p>
          </div>
        </div>
      </Section>

      <section className="border-t border-mw-line bg-mw-paper">
        <Section>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Who We Are Today</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold text-mw-primary">
                A growing, multidisciplinary transformation firm.
              </h2>
              <p className="mt-5 text-mw-ink/70 leading-relaxed">
                Mawkish Technologies is a growing technology consulting and transformation firm with a
                multidisciplinary team spanning business consulting, enterprise applications, project delivery,
                and customer success. The company is experiencing rapid growth through strategic partnerships,
                expansion into new service offerings, and increasing demand for digital transformation
                initiatives across the region.
              </p>
            </div>
            <div>
              <Eyebrow>What Makes Us Different</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold text-mw-primary">
                We solve business problems, not just deploy software.
              </h2>
              <p className="mt-5 text-mw-ink/70 leading-relaxed">
                Our clients work directly with experienced consultants who understand both business operations
                and technology platforms. We combine strategic advisory, solution design, implementation
                management, and long-term support under one engagement model. As an independent transformation
                partner, we recommend the right solution for each organization rather than forcing a
                one-size-fits-all approach.
              </p>
            </div>
          </div>
        </Section>
      </section>

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Core Values</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-mw-primary">
            Six principles that guide how we work.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v, i) => (
            <div key={v.title} className="rounded-2xl border border-mw-line p-6">
              <span className="font-display text-sm font-bold text-mw-secondary">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-mw-primary">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mw-ink/65">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="mw-dark-section mw-glow-grid border-t border-white/10">
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>5-Year Vision</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              The most trusted business transformation partner in South Asia and the Middle East.
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              Over the next five years, Mawkish aims to expand its presence across Sri Lanka, India, the UAE,
              Saudi Arabia, and Oman while strengthening its capabilities across ERP, CRM, cloud, AI, automation,
              and managed services. We aspire to be recognized not only for technology implementation but for
              helping organizations successfully transform the way they operate and compete.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/50">
                  <th className="px-5 py-3 font-medium">Region</th>
                  <th className="px-5 py-3 font-medium">Active Market</th>
                  <th className="px-5 py-3 font-medium">Presence</th>
                  <th className="px-5 py-3 font-medium">Focus</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((r) => (
                  <tr key={r.region} className="border-b border-white/5 text-white/80 last:border-0">
                    <td className="px-5 py-3.5 font-semibold text-white">{r.region}</td>
                    <td className="px-5 py-3.5">
                      {r.activeMarket ? (
                        <span className="rounded-full bg-mw-mint/15 px-2.5 py-1 text-xs font-semibold text-mw-mint">
                          Active
                        </span>
                      ) : (
                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/50">
                          Target
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5">{r.presence}</td>
                    <td className="px-5 py-3.5">{r.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </section>

      <section className="mw-dark-section border-t border-white/10">
        <Section>
          <PullQuote />
        </Section>
      </section>

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-mw-primary">Meet the team.</h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {leadership.map((person) => (
            <div key={person.name} className="rounded-2xl border border-mw-line p-8">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-mw-primary font-display text-lg font-bold text-white">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-mw-primary">{person.name}</div>
                  <div className="text-sm text-mw-secondary">{person.title}</div>
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-mw-ink/70">
                {person.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
