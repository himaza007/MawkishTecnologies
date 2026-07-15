import type { Metadata } from "next";
import { CtaBand, Eyebrow, PageHero, Section } from "@/components/ui";
import { industries, painPoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Mawkish Technologies works across manufacturing, distribution, consumer goods, financial services, healthcare, hospitality, logistics, and diversified conglomerates.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for the way your industry actually operates."
        description="Every industry hits growth ceilings differently. We bring platform expertise combined with an understanding of how your sector runs day to day."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div key={i.slug} className="rounded-2xl border border-mw-line p-6">
              <h3 className="font-display text-lg font-bold text-mw-primary">{i.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mw-ink/65">{i.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-mw-line bg-[#114232]">
        <Section className="text-center">
          <Eyebrow>Common Across Every Sector</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            The pain points look familiar no matter the industry.
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {painPoints.map((p) => (
              <div
                key={p}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium text-white/85"
              >
                {p}
              </div>
            ))}
          </div>
        </Section>
      </section>

      <CtaBand />
    </>
  );
}
