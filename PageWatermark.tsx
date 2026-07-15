"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * A large, faint MAWKISH logo mark fixed behind the entire page — used on
 * every route except the home page, which already has its own WebGL scenes
 * (Hero/FlowScene). Colored via --mw-watermark-color, which flips with the
 * light/dark theme in globals.css, so no JS is needed to recolor it.
 */
export function PageWatermark() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("mw-in");
    const id = requestAnimationFrame(() => el.classList.add("mw-in"));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  if (pathname === "/") return null;

  return <div ref={ref} aria-hidden="true" className="mw-watermark" />;
}
