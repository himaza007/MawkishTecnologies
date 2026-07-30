"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mw-loader-shown";
const EXIT_DURATION = 900; // ms — keep in sync with the CSS transition on .mw-loader

type Phase = "loading" | "exiting" | "done";

export function SiteLoader() {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // sessionStorage unavailable — just show it once for this mount.
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadyShown || reduceMotion) {
      setPhase("done");
      return;
    }

    document.documentElement.classList.add("mw-loading-lock");

    const minTime = new Promise<void>((resolve) => setTimeout(resolve, 1400));
    const pageReady = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", () => resolve(), { once: true });
      }
    });

    let exitTimer: number;
    Promise.all([minTime, pageReady]).then(() => {
      setPhase("exiting");
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Non-fatal — loader will just replay next time.
      }
      exitTimer = window.setTimeout(() => {
        setPhase("done");
        document.documentElement.classList.remove("mw-loading-lock");
      }, EXIT_DURATION);
    });

    return () => window.clearTimeout(exitTimer);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`mw-loader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-mw-void ${
        phase === "exiting" ? "mw-loader-exit" : ""
      }`}
    >
      <div className="relative flex flex-col items-center">
        <span className="mw-loader-ring" />
        <span className="mw-loader-ring mw-loader-ring-outer" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/logo-mark.png"
          alt=""
          className="mw-loader-logo relative h-14 w-auto object-contain sm:h-16"
        />
        <div className="mw-loader-bar relative mt-9 h-px w-40 overflow-hidden bg-white/10">
          <span className="block h-full w-full bg-mw-mint" />
        </div>
        <p className="mw-hud relative mt-4 text-[10px] text-white/35">Mawkish Technologies</p>
      </div>
    </div>
  );
}
