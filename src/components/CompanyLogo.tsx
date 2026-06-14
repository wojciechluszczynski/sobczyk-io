"use client";

import { useState } from "react";

// Renders a company badge for the experience marquee.
// Resolution cascade:
//   1) Sanity-hosted logo URL (highest priority — the editor uploaded it)
//   2) /logos/<slug>.svg from the repo (drop-in convention for devs)
//   3) Plain text name (always available — keeps the strip alive even with no asset)
// onError on the local <img> demotes to text without breaking layout.
type Props = {
  name: string;
  slug?: string;
  sanityUrl?: string | null;
  alt?: string;
};

// Local format cascade: SVG (best), PNG (Wikipedia / press kits often serve PNG),
// WebP (modern raster). When one 404s, onError advances to the next; the chip
// fallback renders only after all three miss.
const LOCAL_EXTS = ["svg", "png", "webp"] as const;

export default function CompanyLogo({ name, slug, sanityUrl, alt }: Props) {
  const sources: string[] = [];
  if (sanityUrl) sources.push(sanityUrl);
  if (slug) LOCAL_EXTS.forEach((ext) => sources.push(`/logos/${slug}.${ext}`));

  const [idx, setIdx] = useState(0);
  const src = sources[idx] ?? null;

  if (!src) {
    // Chip-style fallback: looks intentional even without an asset, instead of
    // a stray label on the dark strip. Matches the rest of the page's pill UI.
    return (
      <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-muted/25 text-xs font-medium tracking-[0.08em] uppercase text-muted/70 whitespace-nowrap">
        {name}
      </span>
    );
  }

  return (
    // Plain <img> on purpose: logos are typically tiny SVGs, next/image adds
    // overhead and complicates onError fallback. Height is fixed by CSS so
    // the marquee row doesn't jitter between vector and text items.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || name}
      onError={() => setIdx((i) => i + 1)}
      className="h-6 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
    />
  );
}
