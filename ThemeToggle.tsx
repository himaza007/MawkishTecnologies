"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={`group relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-white/15 text-white/80 transition-colors duration-300 hover:border-mw-mint/50 hover:text-mw-mint ${className}`}
    >
      {/* Sun */}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className={`absolute h-[18px] w-[18px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? "-rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M10 2V4M10 16V18M18 10H16M4 10H2M15.36 4.64L13.95 6.05M6.05 13.95L4.64 15.36M15.36 15.36L13.95 13.95M6.05 6.05L4.64 4.64"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>

      {/* Moon */}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className={`absolute h-[18px] w-[18px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"
        }`}
      >
        <path
          d="M17 11.5C15.9 12.1 14.63 12.45 13.28 12.45C9.15 12.45 5.8 9.1 5.8 4.97C5.8 3.62 6.15 2.35 6.75 1.25C3.9 2.35 1.9 5.13 1.9 8.38C1.9 12.6 5.3 16 9.52 16C12.72 16 15.46 14.05 16.6 11.28"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
