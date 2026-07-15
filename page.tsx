import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Eyebrow, PageHero, Section } from "@/components/ui";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "SAP, Salesforce, and Odoo implementation, plus AI, automation, data & analytics, managed services, cloud transformation, and enterprise integrations.",
};

export default function ServicesPage() {
  const core = services.filter((s) => s.category === "core");
  const future = services.filter((s) => s.category === "future");

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Enterprise platforms, applied with a business-first lens."
        description="We help organizations plan, implement, and get lasting value from the platforms that run their business — and the emerging capabilities that will shape its next stage."
      />

      <Section>
        <Eyebrow>Core Platforms</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold text-mw-primary">
          SAP, Salesforce &amp; Odoo implementation.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {core.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl border border-mw-line p-7 transition hover:border-mw-secondary hover:shadow-lg hover:shadow-mw-secondary/5"
            >
              <h3 className="font-display text-xl font-bold text-mw-primary">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mw-ink/65">{s.summary}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-mw-secondary">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <section className="border-t border-mw-line bg-mw-paper">
        <Section>
          <Eyebrow>Future Service Areas</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-mw-primary">
            Where we&rsquo;re expanding next.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {future.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-mw-line bg-background p-6 transition hover:border-mw-secondary hover:shadow-lg hover:shadow-mw-secondary/5"
              >
                <h3 className="font-display text-lg font-bold text-mw-primary">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mw-ink/65">{s.summary}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-mw-secondary opacity-0 transition group-hover:opacity-100">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Section>
      </section>

      <CtaBand />
    </>
  );
}
