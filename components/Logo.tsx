import Link from "next/link";

// Icon-only mark (mountain glyph), cropped tight with no baked-in wordmark
// text — keeps the icon legible at small nav sizes and lets the wordmark
// render as real, crisp HTML text instead of raster type.
export function LogoMark({
  className = "h-9 w-9",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/brand/logo-icon.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
      style={tone === "dark" ? { filter: "invert(1)" } : undefined}
    />
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Mawkish Technologies — home">
      <LogoMark tone={tone} className="h-11 w-11 sm:h-12 sm:w-12" />
      <span className="font-display text-base leading-none tracking-wide text-white sm:text-lg">
        Mawkish Technologies
      </span>
    </Link>
  );
}
