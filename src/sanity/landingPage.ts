import { client } from "./client";

// Shape of the editable landing-page document.
// Every field is optional — the page merges with built-in defaults via `??`,
// so missing fields fall back gracefully and the page never breaks.
export type LandingPageData = {
  heroOverline?: string;
  heroHeadlinePre?: string;
  heroHeadlineHighlight?: string;
  heroHeadlinePost?: string;
  heroLead?: string;
  heroCtaPrimary?: string;
  heroCtaSecondary?: string;
  stats?: { num?: string; label?: string }[];

  experienceLabel?: string;
  experience?: string[];
  skills?: string[];

  audienceKicker?: string;
  audienceTitle?: string;
  audienceLead?: string;
  audienceItems?: { title?: string; text?: string }[];

  scopeKicker?: string;
  scopeTitle?: string;
  scopeLead?: string;
  ownerTitle?: string;
  ownerItems?: string[];
  specialistTitle?: string;
  specialistItems?: string[];
  specialistNoteStrong?: string;
  specialistNoteRest?: string;

  processKicker?: string;
  processTitle?: string;
  processLead?: string;
  processSteps?: { title?: string; text?: string }[];

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
