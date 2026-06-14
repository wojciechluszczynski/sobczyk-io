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

export default function CompanyLogo({ name, slug, sanityUrl, alt }: Props) {
  const initialSrc = sanityUrl || (slug ? `/logos/${slug}.svg` : null);
  const [src, setSrc] = useState<string | null>(initialSrc);

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
      onError={() => setSrc(null)}
      className="h-6 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
    />
  );
}
