"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

// Sanity Studio config. The embedded Studio at /studio uses this.
// When no projectId is set the route shows a setup notice instead of loading
// the Studio (see src/app/studio/[[...tool]]/page.tsx).
export default defineConfig({
  name: "default",
  title: "sobczyk.io",
  projectId: projectId || "missing",
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure })],
  schema: { types: schemaTypes },
});
