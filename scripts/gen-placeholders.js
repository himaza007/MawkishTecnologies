// One-off generator for branded placeholder images under public/images/.
// Run: node scripts/gen-placeholders.js
// Safe to delete once real photography is dropped in.
const fs = require("fs");
const path = require("path");

function placeholder({ width, height, label, sub }) {
  const fontSize = Math.max(14, Math.round(width / 26));
  const subFontSize = Math.round(fontSize * 0.55);
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#163a2c"/>
      <stop offset="55%" stop-color="#0a1f16"/>
      <stop offset="100%" stop-color="#050f0a"/>
    </linearGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" fill="none" stroke="#7fd9b4" stroke-opacity="0.08"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>
  <rect x="1" y="1" width="${width - 2}" height="${height - 2}" fill="none" stroke="#7fd9b4" stroke-opacity="0.25" stroke-width="2" stroke-dasharray="10 8"/>
  <g transform="translate(${width / 2}, ${height / 2 - fontSize / 2})" text-anchor="middle" font-family="Arial, sans-serif">
    <circle r="${Math.max(20, width / 14)}" fill="none" stroke="#7fd9b4" stroke-opacity="0.5" stroke-width="2"/>
    <path d="M${-width / 40} ${-width / 60}h${width / 20}v${width / 30}h-${width / 20}z" fill="none" stroke="#7fd9b4" stroke-opacity="0.6" stroke-width="1.5" transform="scale(0.9)"/>
  </g>
  <text x="50%" y="${height / 2 + fontSize}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="#e8fbf2">${label}</text>
  <text x="50%" y="${height / 2 + fontSize + subFontSize + 10}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${subFontSize}" fill="#7fd9b4" opacity="0.8">${sub}</text>
</svg>`;
}

const outDir = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(path.join(outDir, "grow"), { recursive: true });

const files = [
  {
    file: "about-background.svg",
    width: 1600,
    height: 1200,
    label: "REPLACE ME",
    sub: "public/images/about-background.svg — full-bleed section photo",
  },
  {
    file: "testimonial.svg",
    width: 480,
    height: 480,
    label: "REPLACE ME",
    sub: "public/images/testimonial.svg — headshot photo",
  },
  { file: "grow/sap.svg", width: 480, height: 360, label: "REPLACE ME", sub: "grow/sap.svg" },
  { file: "grow/salesforce.svg", width: 480, height: 360, label: "REPLACE ME", sub: "grow/salesforce.svg" },
  { file: "grow/odoo.svg", width: 480, height: 360, label: "REPLACE ME", sub: "grow/odoo.svg" },
  { file: "grow/ai.svg", width: 480, height: 360, label: "REPLACE ME", sub: "grow/ai.svg" },
  { file: "grow/data.svg", width: 480, height: 360, label: "REPLACE ME", sub: "grow/data.svg" },
];

for (const f of files) {
  fs.writeFileSync(path.join(outDir, f.file), placeholder(f));
  console.log("wrote", f.file);
}
