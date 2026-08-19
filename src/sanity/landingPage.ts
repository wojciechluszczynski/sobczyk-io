/** Address used until Sanity carries one. Change the live address in
 *  Sanity Studio (Landing page → Kontakt → Email), not here: every
 *  place on the site reads that field, so it takes effect without a
 *  deploy. */
export const FALLBACK_CONTACT_EMAIL = "piotr@sobczyk.io";

import { client } from "./client";
import type { SanityImageSource } from "@sanity/image-url";
import type { IconName } from "./iconCatalog";

// Shape of the editable landing-page document.
// Every field is optional — the page merges with built-in defaults via `??`,
// so missing fields fall back gracefully and the page never breaks.
export type LandingPageData = {
  heroOverline?: string;
  heroHeadlinePre?: string;
  heroHeadlineHighlight?: string;
  heroHeadlinePost?: string;
  heroLead?: string;
  heroImage?: SanityImageSource & { alt?: string };
  heroCtaPrimary?: string;
  heroCtaSecondary?: string;
  stats?: { num?: string; label?: string }[];

  experienceLabel?: string;
  experience?: {
    name?: string;
    slug?: string;
    logo?: SanityImageSource & { alt?: string };
  }[];
  skills?: string[];

  audienceKicker?: string;
  audienceTitle?: string;
  audienceLead?: string;
  audienceItems?: { title?: string; text?: string; icon?: IconName }[];

  scopeKicker?: string;
  scopeTitle?: string;
  scopeLead?: string;
  ownerTitle?: string;
  ownerItems?: { text?: string; icon?: IconName }[];
  specialistTitle?: string;
  specialistItems?: string[];
  specialistNoteStrong?: string;
  specialistNoteRest?: string;

  processKicker?: string;
  processTitle?: string;
  processLead?: string;
  processSteps?: { title?: string; text?: string; icon?: IconName }[];

  timelineKicker?: string;
  timelineTitle?: string;
  timelineLead?: string;
  timeline?: { range?: string; title?: string; text?: string }[];

  midCtaTitle?: string;
  midCtaText?: string;
  midCtaButton?: string;

  pricingKicker?: string;
  pricingTitle?: string;
  pricingLead?: string;
  pricingAnchorStrong?: string;
  pricingAnchorRest?: string;
  packages?: {
    name?: string;
    price?: string;
    period?: string;
    description?: string;
    items?: string[];
    highlighted?: boolean;
    badge?: string;
  }[];
  pricingFootnote?: string;

  faqKicker?: string;
  faqTitle?: string;
  faqItems?: { question?: string; answer?: string }[];

  contactKicker?: string;
  contactTitle?: string;
  contactLead?: string;
  contactEmail?: string;
  contactLinkedinUrl?: string;
  contactLinkedinLabel?: string;

  seoTitle?: string;
  seoDescription?: string;
  seoOgImage?: SanityImageSource;
};

const LANDING_QUERY = `*[_type == "landingPage" && _id == "landingPage"][0]`;

// Fetches the editable landing-page document. Returns null when no Sanity
// project is connected, when the document doesn't exist yet, or on any
// transient fetch error — callers should fall back to their built-in content.
export async function getLandingPage(): Promise<LandingPageData | null> {
  if (!client) return null;
  try {
    return await client.fetch<LandingPageData | null>(
      LANDING_QUERY,
      {},
      { next: { revalidate: 60 } },
    );
  } catch {
    return null;
  }
}
