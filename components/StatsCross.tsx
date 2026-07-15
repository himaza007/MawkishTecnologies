import { stats } from "@/lib/site-data";

export function StatsCross() {
  return (
    <div className="relative grid grid-cols-2">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
      {stats.map((s) => (
        <div key={s.label} className="px-6 py-10 text-center sm:px-10">
          <div className="font-display text-4xl font-medium text-white">{s.value}</div>
          <div className="mt-2 text-sm text-white/80">{s.label}</div>
          {"detail" in s && s.detail && <div className="mt-0.5 text-xs text-white/45">{s.detail}</div>}
        </div>
      ))}
    </div>
  );
}
