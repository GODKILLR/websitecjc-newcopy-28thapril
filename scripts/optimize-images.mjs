import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { join, parse, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = resolve(__dirname, "../src/assets") + "/";

const RULES = [
  { match: /\.(jpe?g|png)$/i, format: "webp", quality: 80 },
];

// Per-file resize caps (max width). Anything not listed keeps native dimensions.
const MAX_WIDTH = {
  "gameplay-bg": 1920,
  "hero-bg": 1920,
  "nft-banner": 1600,
  "league-banner": 1600,
  "adventure-banner": 1600,
  "community-banner": 1600,
};

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* walk(full);
    else yield full;
  }
}

let savedBytes = 0;
let count = 0;

for (const file of walk(ASSETS)) {
  const { name, ext } = parse(file);
  const rule = RULES.find((r) => r.match.test(ext));
  if (!rule) continue;
  // Skip already-generated webp files
  if (ext.toLowerCase() === ".webp") continue;

  const out = file.replace(/\.(jpe?g|png)$/i, `.${rule.format}`);
  const original = statSync(file).size;

  let pipeline = sharp(file);
  const cap = MAX_WIDTH[name];
  if (cap) {
    const meta = await sharp(file).metadata();
    if (meta.width && meta.width > cap) {
      pipeline = pipeline.resize({ width: cap, withoutEnlargement: true });
    }
  }

  if (rule.format === "webp") {
    pipeline = pipeline.webp({ quality: rule.quality, effort: 6 });
  }

  await pipeline.toFile(out);
  const compressed = statSync(out).size;
  savedBytes += original - compressed;
  count++;
  const pct = (((original - compressed) / original) * 100).toFixed(1);
  console.log(
    `${file.replace(ASSETS, "")} → ${out.replace(ASSETS, "")}  ${(original / 1024).toFixed(1)}KB → ${(compressed / 1024).toFixed(1)}KB  (-${pct}%)`
  );
}

console.log(`\n${count} files converted, saved ${(savedBytes / 1024).toFixed(1)}KB total.`);
