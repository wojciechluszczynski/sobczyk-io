// Sanity environment configuration.
// The site works WITHOUT these set: when projectId is missing, the page falls
// back to the built-in content. Content is edited in the Sanity-hosted Studio.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-19";

// True only once a real Sanity project is connected (env var present).
export const hasSanity = Boolean(projectId);
