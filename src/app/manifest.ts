import type { MetadataRoute } from "next";

// Web app manifest for "Add to Home Screen" on mobile and PWA basics.
// Colors match the landing page palette (cream paper, ink-dark text).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Piotr Sobczyk — zewnętrzny Head of Digital",
    short_name: "Piotr Sobczyk",
    description:
      "Zewnętrzny Head of Digital dla firm B2B i SaaS. Pomiar, atrybucja i sprinty eksperymentów wzrostowych.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0e8",
    theme_color: "#1a1a1a",
    lang: "pl-PL",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
