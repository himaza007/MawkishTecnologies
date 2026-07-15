import Link from "next/link";
import { LogoMark } from "./Logo";
import { navLinks, services, industries } from "@/lib/site-data";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export function Footer() {
  return (
    <footer className="mw-dark-section border-t border-white/10 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-14" />
              <span className="font-display tracking-wide text-base text-white">MAWKISH TECHNOLOGIES</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              A business transformation partner helping organizations create measurable outcomes through SAP,
              Salesforce, Odoo, and enterprise technology.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium transition hover:border-mw-mint hover:text-mw-mint"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-mw-mint">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="transition hover:text-mw-mint">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition hover:text-mw-mint">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">Industries</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {industries.slice(0, 5).map((i) => (
                <li key={i.slug}>
                  <Link href="/industries" className="transition hover:text-mw-mint">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Mawkish Technologies. All rights reserved.</p>
          <p>Colombo, Sri Lanka &middot; Serving Sri Lanka, India, UAE &amp; beyond</p>
        </div>
      </div>
    </footer>
  );
}
