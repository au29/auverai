import sharp from "sharp";
import { readFile } from "node:fs/promises";

const mark =
  '<path d="M3 29 14.4 7h7.2L10.2 29H3Z"/><path d="m22.6 10 10.4 19h-7.6l-6.5-11.8L22.6 10Z"/><path d="M15.1 24h7.4l2.8 5h-13l2.8-5Z" opacity=".5"/>';
const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#f4f4f5"/>
<defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#e4e4e7" stroke-width=".6"/></pattern></defs>
<rect x="800" width="400" height="630" fill="url(#grid)"/>
<g transform="translate(76 65) scale(1.2)" fill="#18181b">${mark}</g>
<g font-family="Arial, Helvetica, sans-serif"><text x="132" y="100" font-size="25" letter-spacing="3" font-weight="600" fill="#18181b">AUVERAI<tspan fill="#6366f1">.</tspan></text>
<text x="80" y="264" font-size="72" letter-spacing="-3" font-weight="600" fill="#18181b">Building</text>
<text x="80" y="349" font-size="72" letter-spacing="-3" font-weight="600" fill="#6366f1">what’s next.</text>
<text x="82" y="416" font-size="23" fill="#71717a">Business software. AI &amp; automation.</text>
<text x="82" y="550" font-size="15" letter-spacing="1" fill="#71717a">TECHNOLOGY. INTELLIGENCE. INNOVATION.</text></g>
<rect x="850" y="219" width="210" height="210" rx="35" fill="#fff" stroke="#e4e4e7"/>
<g transform="translate(873 242) scale(4.55)" fill="#6366f1">${mark}</g>
</svg>`;
await sharp(Buffer.from(social)).png().toFile("public/social-card.png");
await sharp(await readFile("public/icon.svg"))
  .resize(180, 180)
  .png()
  .toFile("public/apple-icon.png");
console.log("Generated social-card.png and apple-icon.png");
