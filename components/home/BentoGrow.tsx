import Link from "next/link";
import { services } from "@/lib/site-data";

// Explicit grid-line placement (not auto-placement spans) so the bento
// layout is fully deterministic at the lg breakpoint: no risk of the
// browser's auto-placement algorithm skipping a track and leaving a gap.
const tiles: { slug: string; image: string; mobileSpan: string; lgArea: string }[] = [
  { slug: "sap-solutions", image: "/images/grow/sap.jpg", mobileSpan: "col-span-2", lgArea: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3" },
  { slug: "salesforce-solutions", image: "/images/grow/salesforce.jpg", mobileSpan: "col-span-2", lgArea: "lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2" },
  { slug: "odoo-implementation", image: "/images/grow/odoo.jpg", mobileSpan: "col-span-1", lgArea: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3" },
  { slug: "ai-powered-business-applications", image: "/images/grow/ai.jpg", mobileSpan: "col-span-1", lgArea: "lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3" },
  { slug: "data-analytics", image: "/images/grow/data.jpg", mobileSpan: "col-span-2", lgArea: "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4" },
];

const byslug = Object.fromEntries(services.map((s) => [s.slug, s]));

export function BentoGrow() {
  return (
    <div className="grid grid-cols-2 auto-rows-[170px] gap-4 lg:grid-cols-4 lg:auto-rows-[190px] lg:gap-5">
      {tiles.map((t, i) => {
        const s = byslug[t.slug];
        if (!s) return null;
        return (
          <Link
            key={t.slug}
            href={`/services/${t.slug}`}
            style={{ transitionDelay: `${i * 60}ms` }}
            className={`mw-glass mw-glass-hover group relative flex flex-col justify-end overflow-hidden rounded-2xl ${t.mobileSpan} ${t.lgArea}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="relative p-4 sm:p-5">
              <h3 className="font-display text-base leading-snug text-white sm:text-lg lg:text-xl">
                {s.name}
              </h3>
              <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-mw-mint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                Learn more &rarr;
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
