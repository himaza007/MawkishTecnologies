import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, Eyebrow, Section } from "@/components/ui";
import { insights } from "@/lib/site-data";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = insights.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="mw-dark-section mw-glow-grid relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
          <Link href="/insights" className="text-sm font-semibold text-mw-mint hover:text-white">
            &larr; Insights &amp; Perspectives
          </Link>
          <Eyebrow>{post.category}</Eyebrow>
          <h1 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-sm text-white/50">{post.readTime}</p>
        </div>
      </section>

      <Section className="max-w-3xl">
        <div className="space-y-5 text-lg leading-relaxed text-mw-ink/75">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      {more.length > 0 && (
        <section className="border-t border-mw-line bg-mw-paper">
          <Section>
            <h2 className="font-display text-2xl font-bold text-mw-primary">More perspectives</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="rounded-2xl border border-mw-line bg-white p-6 transition hover:border-mw-secondary"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-mw-secondary">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-mw-primary">{p.title}</h3>
                  <p className="mt-2 text-sm text-mw-ink/65">{p.excerpt}</p>
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
