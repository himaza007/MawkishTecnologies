import { methodology } from "@/lib/site-data";

export function Timeline() {
  return (
    <div className="relative">
      {/* connecting rail */}
      <div className="pointer-events-none absolute left-[18px] top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-mw-mint/60 via-mw-mint/20 to-transparent lg:left-0 lg:top-3 lg:h-px lg:w-full lg:bg-gradient-to-r">
        <span className="mw-travel-dot hidden lg:block" />
      </div>

      <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
        {methodology.map((m) => (
          <div key={m.step} className="relative pl-12 lg:pl-0 lg:pt-12">
            <div className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full border border-mw-mint/50 bg-mw-void mw-hud text-[11px] text-mw-mint lg:left-0 lg:top-0">
              {m.step}
            </div>
            <h3 className="font-display text-2xl text-white">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
