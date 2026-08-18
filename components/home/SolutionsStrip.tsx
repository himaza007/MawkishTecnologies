const solutions = [
  { name: "Microsoft", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/Microsoft.webp" },
  { name: "AWS", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/AWS.png" },
  { name: "Google Cloud", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/Google%20Cloud.png" },
  { name: "Salesforce", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/Salesforce%20Logo.jpeg" },
  { name: "Odoo", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/odoo_logo.svg" },
  { name: "Swyftflo", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/Swyftflo.png" },
];

export function SolutionsStrip() {
  return (
    <div className="mw-glow-strip border-y border-white/10 py-10">
      <p className="relative z-10 mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
        Solutions We Provide
      </p>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-6">
        {solutions.map((s) => (
          <div
            key={s.name}
            className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl bg-white px-6 py-4 shadow-sm sm:h-24 sm:w-52"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.logo} alt={s.name} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}