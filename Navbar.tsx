"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./theme/ThemeToggle";
import { navLinks, siteConfig } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-mw-ink/80 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-transparent bg-mw-ink/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo tone="light" />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-white/80 transition hover:text-white"
              >
                {link.label}
                {link.children && (
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
              {link.children && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="w-56 rounded-xl border border-white/10 bg-mw-primary/95 p-2 shadow-xl backdrop-blur">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:grid" />
          <Link
            href={siteConfig.primaryCta.href}
            className="hidden rounded-full border border-mw-mint/40 bg-mw-mint/10 px-5 py-2 text-xs font-medium uppercase tracking-widest text-mw-mint transition hover:bg-mw-mint hover:text-mw-ink sm:inline-block"
          >
            Get In Touch
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-mw-ink px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-3 border-l border-white/10 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-2 py-2 text-sm text-white/60 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-3 flex items-center justify-between rounded-lg px-2 py-2">
              <span className="text-sm font-medium text-white/60">Appearance</span>
              <ThemeToggle />
            </div>

            <Link
              href={siteConfig.primaryCta.href}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-mw-mint px-5 py-2.5 text-center text-sm font-semibold text-mw-ink"
            >
              {siteConfig.primaryCta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
