import Link from "next/link";
import { industries } from "@/lib/site-data";
import { industryIconBySlug, IconLayers } from "./icons";

export function IndustryMosaic() {
  return (
    <div className="mw-scan-grid grid grid-cols-2 gap-3 rounded-2xl border border-white/10 p-3 sm:grid-cols-4">
      {industries.map((ind, i) => {
        const Icon = industryIconBySlug[ind.slug] ?? IconLayers;
        return (
          <Link
            key={ind.slug}
            href="/industries"
            style={{ transitionDelay: `${i * 40}ms` }}
            className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-mw-ink/60 p-3 transition-all duration-500 hover:-translate-y-1 hover:border-mw-mint/40 hover:shadow-[0_0_30px_rgba(127,217,180,0.15)] sm:p-4"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-mw-mint/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="text-mw-mint/70 transition-colors duration-300 group-hover:text-mw-mint">
              <Icon className="h-6 w-6" />
            </span>
            <span className="font-display text-base leading-tight text-white/85 group-hover:text-mw-mint sm:text-lg">
              {ind.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
