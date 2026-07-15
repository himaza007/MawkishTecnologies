import { clients } from "@/lib/site-data";

export function MarqueeStrip() {
  const loop = [...clients, ...clients];
  return (
    <div className="border-y border-white/10 bg-mw-void py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
        Trusted by leading enterprises
      </p>
      <div className="mw-edge-fade overflow-hidden">
        <div className="mw-marquee-track flex w-max items-center gap-4">
          {loop.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl bg-white px-6 py-4 shadow-sm sm:h-24 sm:w-52"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
