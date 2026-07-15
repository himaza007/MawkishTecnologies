import Link from "next/link";

export function LogoMark({
  className = "h-8 w-8",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/brand/logo-mark.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
      style={tone === "dark" ? { filter: "invert(1)" } : undefined}
    />
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Mawkish Technologies — home">
      <LogoMark tone={tone} className="h-9 w-14" />
    </Link>
  );
}
