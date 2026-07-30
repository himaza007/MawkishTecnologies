import Link from "next/link";
import { services } from "@/lib/site-data";

const imageBySlug: Record<string, string> = {
  "sap-solutions": "/images/grow/sap.svg",
  "salesforce-solutions": "/images/grow/salesforce.svg",
  "odoo-implementation": "/images/grow/odoo.svg",
  "ai-powered-business-applications": "/images/grow/ai.svg",
  "data-analytics": "/images/grow/data.svg",
};

const featured = services.filter((s) => s.slug in imageBySlug);

export function GrowRow() {
  return (
    <div className="mw-edge-fade -mx-6 flex snap-x gap-5 overflow-x-auto px-6 pb-6 pt-2 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:px-0">
      {featured.map((s, i) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          style={{ transitionDelay: `${i * 60}ms` }}
          className="mw-glass mw-glass-hover group flex w-64 shrink-0 snap-start flex-col overflow-hidden rounded-2xl lg:w-auto"
        >
          <div className="relative h-32 w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageBySlug[s.slug]}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="flex flex-1 flex-col justify-between p-6">
            <h3 className="font-display text-base font-bold text-white">{s.name}</h3>
            <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-mw-mint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
              Learn more &rarr;
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
