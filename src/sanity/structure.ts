import type { StructureResolver } from "sanity/structure";

// Single-document ("singleton") editing experience: Piotrek opens one
// "Strona główna" document with all the page content grouped into tabs.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Treść strony")
    .items([
      S.listItem()
        .title("Strona główna")
        .id("landingPage")
        .child(
          S.document().schemaType("landingPage").documentId("landingPage"),
        ),
    ]);
