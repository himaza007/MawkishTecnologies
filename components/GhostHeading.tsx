export function GhostHeading({ children }: { children: string }) {
  return (
    <div className="pointer-events-none relative z-0 select-none overflow-hidden px-4 py-6">
      <p
        className="mx-auto text-center font-display font-bold leading-none tracking-tight text-white/[0.07]"
        style={{ fontSize: "clamp(1.75rem, 6.4vw, 6.5rem)" }}
      >
        {children}
      </p>
    </div>
  );
}
