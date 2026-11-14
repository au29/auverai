import sharp from "sharp";
import { readFile } from "node:fs/promises";

const { logo, symbol } = JSON.parse(
  await readFile("src/lib/brand-assets.json", "utf8"),
);

// Reuse the original Figma SVGs and their relative bounds; never redraw the mark.
async function renderSymbol(size, padding, background = "transparent") {
  const scale = (size - padding * 2) / symbol.width;
  const top = (size - symbol.height * scale) / 2;
  const layers = await Promise.all(
    symbol.parts.map(async (part) => ({
      input: await sharp(`public${part.src}`, { density: 600 })
        .resize({ width: Math.round(part.width * scale) })
        .png()
        .toBuffer(),
      left: Math.round(padding + part.x * scale),
      top: Math.round(top + part.y * scale),
    })),
  );
  return sharp({
    create: { width: size, height: size, channels: 4, background },
  })
    .composite(layers)
    .png()
    .toBuffer();
}

const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#f4f4f5"/>
<defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#e4e4e7" stroke-width=".6"/></pattern></defs>
<rect x="800" width="400" height="630" fill="url(#grid)"/>
<g font-family="Arial, Helvetica, sans-serif">
<text x="80" y="264" font-size="72" letter-spacing="-3" font-weight="600" fill="#18181b">Building</text>
<text x="80" y="349" font-size="72" letter-spacing="-3" font-weight="600" fill="#6366f1">what’s next.</text>
<text x="82" y="416" font-size="23" fill="#71717a">Business software. AI &amp; automation.</text>
<text x="82" y="550" font-size="15" letter-spacing="1" fill="#71717a">TECHNOLOGY. INTELLIGENCE. INNOVATION.</text></g>
<rect x="850" y="219" width="210" height="210" rx="35" fill="#fff" stroke="#e4e4e7"/>
</svg>`;
await sharp(Buffer.from(social))
  .composite([
    {
      input: await sharp(`public${logo.src}`).resize({ width: 250 }).png().toBuffer(),
      left: 80,
      top: 65,
    },
    { input: await renderSymbol(164, 8), left: 873, top: 242 },
  ])
  .png()
  .toFile("public/social-card.png");
await sharp(await renderSymbol(64, 7, "white")).toFile("public/icon.png");
await sharp(await renderSymbol(180, 25, "white")).toFile("public/apple-icon.png");
console.log("Generated social-card.png, icon.png and apple-icon.png from the Figma logo");
