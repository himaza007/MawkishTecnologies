import Link from "next/link";
import { services } from "@/lib/site-data";
import { serviceIconBySlug, IconGrid } from "./icons";

export function ServiceMosaic() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.slice(0, 6).map((s, i) => {
        const Icon = serviceIconBySlug[s.slug] ?? IconGrid;
        return (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            style={{ transitionDelay: `${i * 60}ms` }}
            className="mw-glass mw-glass-hover group relative block h-full overflow-hidden rounded-2xl p-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-mw-mint/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
            />
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-mw-mint/25 bg-mw-mint/5 text-mw-mint">
              <Icon />
            </div>
            <h3 className="mt-5 font-display text-2xl text-white">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{s.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-mw-mint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
              Learn more &rarr;
            </span>
          </Link>
        );
      })}
    </div>
  );
}
