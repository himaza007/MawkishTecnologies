import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { insights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights & Perspectives",
  description:
    "Perspectives on business transformation, enterprise platforms, and operational visibility from the Mawkish Technologies team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & Perspectives"
        title="Perspectives on business-first transformation."
        description="Practical thinking on enterprise platforms, operational visibility, and what it actually takes to turn a technology investment into a business outcome."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {insights.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-mw-line p-7 transition hover:border-mw-secondary hover:shadow-lg hover:shadow-mw-secondary/5"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-mw-secondary">
                {post.category}
              </span>
              <h2 className="mt-3 font-display text-xl font-bold text-mw-primary">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mw-ink/65">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-mw-ink/50">
                <span>{post.readTime}</span>
                <span className="font-semibold text-mw-secondary opacity-0 transition group-hover:opacity-100">
                  Read &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
