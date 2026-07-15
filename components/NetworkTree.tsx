const trunk = "M120 260 L118 190";

const branches = [
  "M118 190 L60 130 L35 90 M60 130 L25 150 M25 150 L8 175",
  "M118 190 L175 140 L210 90 L235 60 M210 90 L232 118",
  "M118 190 L100 100 L60 40 M100 100 L140 70 L165 35 M140 70 L155 105",
  "M175 140 L180 150 L200 190",
  "M60 130 L40 120 L15 100",
  "M60 130 L30 220 L45 245",
  "M100 100 L90 190 L60 210",
  "M118 190 L150 230 L175 250",
];

const nodes = [
  { cx: 60, cy: 40, r: 3.5 },
  { cx: 140, cy: 70, r: 3 },
  { cx: 165, cy: 35, r: 2.5 },
  { cx: 155, cy: 105, r: 2.5 },
  { cx: 35, cy: 90, r: 3 },
  { cx: 8, cy: 175, r: 2.5 },
  { cx: 40, cy: 120, r: 3.5 },
  { cx: 15, cy: 100, r: 2.5 },
  { cx: 180, cy: 150, r: 3.5 },
  { cx: 210, cy: 90, r: 3 },
  { cx: 235, cy: 60, r: 2.5 },
  { cx: 232, cy: 118, r: 2.5 },
  { cx: 200, cy: 190, r: 3 },
  { cx: 90, cy: 190, r: 3 },
  { cx: 60, cy: 210, r: 2.5 },
  { cx: 30, cy: 220, r: 3.5 },
  { cx: 45, cy: 245, r: 2.5 },
  { cx: 150, cy: 230, r: 3.5 },
  { cx: 175, cy: 250, r: 2.5 },
];

export function NetworkTree({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 260"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={trunk} stroke="#7fd9b4" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" />
      {branches.map((d, i) => (
        <path key={i} d={d} stroke="#7fd9b4" strokeOpacity="0.3" strokeWidth="1.2" strokeLinecap="round" />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="#7fd9b4"
          className="mw-node"
          style={{ animationDelay: `${(i % 6) * 0.4}s` }}
        />
      ))}
      <circle cx="118" cy="190" r="5" fill="#c9f7e3" className="mw-node" />
    </svg>
  );
}
