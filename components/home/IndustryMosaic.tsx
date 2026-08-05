"use client";

import Link from "next/link";
import { useRef } from "react";
import { industries } from "@/lib/site-data";
import { industryIconBySlug, IconLayers } from "./icons";

/**
 * Horizontal scroll-snap card stack — fixed-width cards that never get
 * squeezed by column width (the previous grid clipped long names like
 * "Diversified Conglomerates" when its column got narrow). A light
 * scroll-linked parallax on the icon badges gives it some depth as you
 * scroll through, without hijacking page/vertical scroll — this only
 * reacts to horizontal scroll within the strip itself.
 */
export function IndustryMosaic() {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-industry-card]");
    cards.forEach((card) => {
      const icon = card.querySelector<HTMLElement>("[data-industry-icon]");
      if (!icon) return;
      const rect = card.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      // Distance of this card's center from the track's center, normalized.
      const cardCenter = rect.left + rect.width / 2;
      const trackCenter = trackRect.left + trackRect.width / 2;
      const offset = (cardCenter - trackCenter) / trackRect.width;
      icon.style.transform = `translateX(${offset * -14}px)`;
    });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="mw-edge-fade flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {industries.map((ind) => {
          const Icon = industryIconBySlug[ind.slug] ?? IconLayers;
          return (
            <Link
              key={ind.slug}
              href="/industries"
              data-industry-card
              className="group relative flex w-52 shrink-0 snap-start flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-mw-mint/40 hover:shadow-[0_0_30px_rgba(127,217,180,0.15)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-mw-mint/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div
                data-industry-icon
                className="grid h-14 w-14 place-items-center rounded-2xl border border-mw-mint/20 bg-mw-mint/5 text-mw-mint transition-transform duration-200 ease-out"
              >
                <Icon className="h-7 w-7" />
              </div>
              <span className="font-display text-lg leading-snug text-white/90 group-hover:text-mw-mint">
                {ind.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Scroll hint dots */}
      <div className="mt-3 flex items-center gap-1.5" aria-hidden="true">
        {industries.map((ind) => (
          <span key={ind.slug} className="h-1 w-4 rounded-full bg-white/15" />
        ))}
      </div>
    </div>
  );
}