// Sanity environment configuration.
// projectId falls back to the real (public) project id so the read path is
// always on, even without the env var set on the host. The page still renders
// if the document is empty or missing, because every field has a built-in
// fallback (see src/app/page.tsx). Content is edited in the Studio deployed to
// Sanity hosting (npm run studio:deploy → https://sobczyk-io.sanity.studio).
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "f89wvekz";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-19";

// A project id is always resolved now, so the Sanity read path is always on.
export const hasSanity = Boolean(projectId);
