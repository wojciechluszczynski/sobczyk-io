import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

// Sanity Studio config. This Studio is NOT embedded in the Next.js app — it is
// deployed to Sanity's own hosting with `npm run studio:deploy`
// (→ https://sobczyk-io.sanity.studio). The site stays a pure frontend that
// only reads content via the Sanity API. The schema below is what gives the
// editor its fields; without deploying it the hosted Studio is empty.
export default defineConfig({
  name: "default",
  title: "sobczyk.io",
  projectId,
  dataset,
  plugins: [structureTool({ structure })],
  schema: { types: schemaTypes },
});
