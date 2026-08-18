import type { Metadata } from "next";
import Image from "next/image"; // ✅ Use Next.js Image
import { CtaBand, Eyebrow, PageHero, Section } from "@/components/ui";
import { coreValues, regions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us | Mawkish Technologies",
  description:
    "Mawkish Technologies bridges the gap between technology and business strategy to deliver measurable outcomes.",
};

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1: FULL-HEIGHT HERO SPLIT (Refactored from Image 4) */}
      {/* Replaces the standard PageHero with a custom full-bleed layout */}
      <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#000100]">
        <div className="h-full relative overflow-hidden order-last lg:order-first">
          {/* Main Context Image (e.g., modern office lobby or cityscape) */}
          <Image 
            src="/images/demo/image3.jpeg"
            alt="Mawkish Vision"
            className="w-full h-full object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000100] via-[#000100]/20 to-transparent" />
        </div>
        <div className="flex flex-col justify-center px-10 lg:px-20 py-20 bg-[#080d0c] border-l border-white/5">
          <PageHero
            eyebrow="About Mawkish"
            title="Business outcomes first. Technology second."
            description="We were founded on a simple belief: technology projects should create measurable business outcomes, not just deploy software."
          />
        </div>
      </div>

      {/* SECTION 2: THE APPROACH & GLASS VALUES (Refactored from Image 5 & 6) */}
      <section className="bg-black py-24">
        <Section>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Column 1: Foundational Story (Left) */}
            <div className="space-y-6">
              <Eyebrow>Founding Story</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Bridging the Gap<br /> in Transformation.
              </h2>
              <div className="mt-8 space-y-5 text-gray-300 text-lg leading-relaxed max-w-2xl">
                <p>
                  Organizations invest heavily in ERP, CRM, and digital initiatives but often
                  struggle to realize expected value due to misalignment with business objectives. 
                  Mawkish was established to bridge that gap, prioritizing strategic 
                  advisory before execution.
                </p>
                <p>
                  Today, we collaborate across industries to modernize operations, improve visibility,
                  and accelerate growth through high-impact enterprise technology.
                </p>
              </div>
            </div>
            {/* Column 2: Platform-Agnostic Philosophy (Right) */}
            <div className="space-y-6 lg:border-l lg:border-white/5 lg:pl-16 py-8 lg:py-0">
               <Eyebrow>Why SAP, Salesforce & Odoo</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Strategy-First,<br/> Platform-Agnostic.
              </h2>
              <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-xl">
                 Technology should adapt to the business, not the other way around. SAP, 
                 Salesforce, and Odoo each address unique growth stages: enterprise scale, 
                 customer engagement, and flexible integration. Our approach focuses first 
                 on understanding your challenges, then recommending the right solution for 
                 your long-term objectives.
              </p>
            </div>
          </div>

          {/* New Core Values Section with Glassmorphism */}
          <div className="mt-32 pt-20 border-t border-white/5">
            <div className="max-w-3xl mb-16">
              <Eyebrow>Core Values</Eyebrow>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Six principles that guide how we work.
              </h2>
            </div>
            {/* Apply refined Glass styling (border, background, backdrop-blur) */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((v, i) => (
                <div key={v.title} className="rounded-3xl border border-white/10 p-8 bg-white/[0.02] backdrop-blur-xl transition hover:border-emerald-500/20 hover:shadow-emerald-500/10">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl font-bold text-emerald-400">0{i + 1}</span>
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight">{v.title}</h3>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-gray-400">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* SECTION 3: VISION & THE GLASS TABLE (Refactored from Image 7) */}
      <section className="mw-dark-section mw-glow-grid border-t border-white/10 relative overflow-hidden py-24">
         {/* Abstract geometric shapes or network graphic blending behind the table */}
        <Section className="relative z-10">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Eyebrow>5-Year Vision</Eyebrow>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                The Most Trusted Transformation Partner in South Asia & the Middle East.
              </h2>
              <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">
                 Mawkish aims to expand capabilities across ERP, CRM, AI, cloud, and managed 
                 services throughout Sri Lanka, India, and the Middle East, becoming the firm
                 known for delivering high-impact business outcomes.
              </p>
            </div>

            {/* Column 2: Regional Presence Table as Glass Element */}
            <div className="lg:col-span-7 bg-black/[0.1] rounded-3xl p-1 shadow-inner border border-white/5 backdrop-blur-2xl">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50">
                      <th className="px-6 py-4 font-medium">Region</th>
                      <th className="px-6 py-4 font-medium">Active Market</th>
                      <th className="px-6 py-4 font-medium">Presence</th>
                      <th className="px-6 py-4 font-medium">Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regions.map((r) => (
                      <tr key={r.region} className="border-b border-white/5 text-white/80 last:border-0 hover:bg-white/[0.02]">
                        <td className="px-6 py-5.5 font-semibold text-white">{r.region}</td>
                        <td className="px-6 py-5.5">
                          {r.activeMarket ? (
                            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                              Active
                            </span>
                          ) : (
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/50">
                              Target
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-5.5">{r.presence}</td>
                        <td className="px-6 py-5.5">{r.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* SECTION 4: LEADERSHIP AUTHORITY (Refactored from Image 8 & 9) */}
      <section className="bg-black py-24">
        <Section className="space-y-24">
          <div className="max-w-3xl mb-12">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">Meet the team.</h2>
          </div>

          {/* Leadership Spotlight 1: Chairman (Hatim Malick) */}
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="h-full relative overflow-hidden rounded-3xl aspect-[16/10] lg:aspect-auto">
              <Image 
                src="/images/brand/malick.JPG" 
                alt="Hatim Malick - Chairman"
                className="w-full h-full object-cover"
                fill
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>
            <div className="p-12 rounded-3xl bg-[#080d0c] border border-white/5 flex flex-col justify-center min-h-[500px]">
              <div className="flex items-center gap-6 mb-10">
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-mw-primary font-display text-2xl font-bold text-white shadow-lg">
                  HM
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white tracking-tight">Hatim Malick</div>
                  <div className="text-lg text-emerald-400 font-medium">Chairman, Mawkish Group</div>
                </div>
              </div>
              <div className="mt-5 space-y-5 text-gray-300 text-lg leading-relaxed max-w-xl">
                 Hatim Malick is the Chairman of the Mawkish Group, providing visionary 
                 leadership across the organization’s diversified portfolio. His deep 
                 expertise in strategic oversight guides Mawkish Technologies toward 
                 sustainable growth and long-term partnerships across the region.
              </div>
            </div>
          </div>

          {/* Leadership Spotlight 2: CEO (Michael Gunawardena) with integrated quote */}
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center pt-24 border-t border-white/5">
            <div className="p-12 rounded-3xl bg-[#080d0c] border border-white/5 flex flex-col justify-center min-h-[500px]">
               <div className="flex items-center gap-6 mb-10">
                 <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-mw-primary font-display text-2xl font-bold text-white shadow-lg">
                    MG
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-white tracking-tight">Michael Gunawardena</div>
                    <div className="text-lg text-emerald-400 font-medium">Chief Executive Officer</div>
                  </div>
               </div>
               
               {/* INTEGRATE CEO BIOGRAPHY WITH IMAGES & MAKE IT CONCISE (Image 9) */}
               <div className="mt-5 space-y-5 text-gray-300 text-lg leading-relaxed max-w-xl">
                  <p>Michael Gunawardena is the CEO of Mawkish Technologies, bringing over 13 years of sales,
                    marketing, business operations, and client management expertise to the firm.</p>
                  <p>With a practical approach focused on business transformation, Michael works closely with clients to
                     modernize operations, improve visibility, and accelerate growth using enterprise technology platforms
                     like SAP, Salesforce, and Odoo.</p>
                  <p>He is responsible for leading high-performing teams, expanding strategic partnerships, and 
                    driving the company's growth strategy across South Asia and the Middle East.</p>
               </div>
            </div>

             {/* INTEGRATE IMAGE 8 (REPLACE ME SPOT) with michael.png */}
            <div className="h-full relative overflow-hidden rounded-3xl aspect-[16/10] lg:aspect-auto">
              <Image 
                src="/images/brand/michael.JPG" 
                alt="Michael Gunawardena - CEO"
                className="w-full h-full object-cover"
                fill
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>
          </div>
          
          
        </Section>
      </section>

      <CtaBand />
    </>
  );
}