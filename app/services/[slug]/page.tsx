import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, Eyebrow, Section } from "@/components/ui";
import { services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3);

  return (
    <>
      <section className="mw-dark-section mw-glow-grid relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <Link href="/services" className="text-sm font-semibold text-mw-mint hover:text-white">
            &larr; All Services
          </Link>
          <Eyebrow>{service.category === "core" ? "Core Platform" : "Future Service Area"}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold text-white sm:text-5xl">{service.name}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">{service.summary}</p>
        </div>
      </section>

      <Section className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-mw-primary">Overview</h2>
          <p className="mt-4 leading-relaxed text-mw-ink/70">{service.description}</p>
        </div>
        <div className="rounded-2xl border border-mw-line bg-mw-paper p-7">
          <h3 className="font-display text-lg font-bold text-mw-primary">Outcomes to expect</h3>
          <ul className="mt-4 space-y-3">
            {service.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 text-sm text-mw-ink/70">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mw-secondary" />
                {o}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-6 block rounded-full bg-mw-primary px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-mw-secondary"
          >
            Schedule a Consultation
          </Link>
        </div>
      </Section>

      {related.length > 0 && (
        <section className="border-t border-mw-line bg-mw-paper">
          <Section>
            <h2 className="font-display text-2xl font-bold text-mw-primary">Related services</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-2xl border border-mw-line bg-white p-6 transition hover:border-mw-secondary"
                >
                  <h3 className="font-display text-base font-bold text-mw-primary">{s.name}</h3>
                  <p className="mt-2 text-sm text-mw-ink/65">{s.summary}</p>
                </Link>
              ))}
            </div>
          </Section>
        </section>
      )}

      <CtaBand />
    </>
  );
}
