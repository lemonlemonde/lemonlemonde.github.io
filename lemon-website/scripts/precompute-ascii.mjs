// Precompute the portrait's ASCII grid so the browser doesn't have to download and sample
// the photo before it can draw the ASCII stage.
//
// For each photo: the average colour of every cell in a COLS x ROWS grid (the same grid
// AsciiPortrait draws). The ASCII characters themselves are derived from those colours.
// Re-run after changing a portrait image:
//     node scripts/precompute-ascii.mjs
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const COLS = 64;
const ROWS = Math.round(COLS * 0.6); // square frame; monospace cells are ~0.6 as wide as tall
const IMAGES = ["/portrait_840.jpg", "/cow_portrait_840.jpg"];

const out = { cols: COLS, rows: ROWS, images: {} };
for (const src of IMAGES) {
    const { data } = await sharp(`public${src}`)
        .resize(COLS, ROWS, { fit: "fill", kernel: "mitchell" })
        .removeAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });
    out.images[src] = data.toString("hex"); // r g b per cell, row by row
}

const file = "src/app/redesign/portrait_ascii.json";
writeFileSync(file, JSON.stringify(out));
console.log(`wrote ${file}: ${COLS}x${ROWS} cells for ${IMAGES.length} images`);
