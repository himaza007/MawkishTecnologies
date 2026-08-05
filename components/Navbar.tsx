"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { navLinks, siteConfig } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Logo tone="light" />

        {/* Right cluster: Unified floating pill matching reference UI */}
        <div className="hidden lg:flex items-center rounded-2xl border border-white/20 bg-white/70 p-1.5 backdrop-blur-md shadow-sm">
          <nav className="flex items-center gap-1 px-3">
            {navLinks.map((link) => (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-800 transition hover:text-black"
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
                    <div className="w-56 rounded-xl border border-black/5 bg-white p-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100"
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

          <Link
            href={siteConfig.primaryCta.href}
            className="rounded-xl bg-[#1a2323] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-black"
          >
            {siteConfig.primaryCta.label}
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-white/80 text-neutral-800 shadow-sm backdrop-blur lg:hidden"
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

      {/* Mobile Drawer */}
      {open && (
        <div className="mx-6 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-800 hover:bg-neutral-100"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-3 border-l border-neutral-200 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-xs text-neutral-600 hover:text-black"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href={siteConfig.primaryCta.href}
              onClick={() => setOpen(false)}
              className="mt-3 rounded-xl bg-[#1a2323] px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white"
            >
              {siteConfig.primaryCta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}