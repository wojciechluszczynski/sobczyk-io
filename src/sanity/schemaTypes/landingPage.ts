import { defineArrayMember, defineField, defineType } from "sanity";

// Single document holding all editable text of the landing page.
// Icons, layout and styling stay in code — editors only change words.
export const landingPage = defineType({
  name: "landingPage",
  title: "Strona główna",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "trust", title: "Doświadczenie / Umiejętności" },
    { name: "audience", title: "Dla kogo" },
    { name: "scope", title: "Zakres" },
    { name: "process", title: "Jak pracuję" },
    { name: "timeline", title: "Pierwsze 90 dni" },
    { name: "midcta", title: "CTA środkowe" },
    { name: "pricing", title: "Cennik" },
    { name: "faq", title: "FAQ" },
    { name: "contact", title: "Kontakt" },
  ],
  fields: [
    // — Hero —
    defineField({ name: "heroOverline", title: "Nadtytuł", type: "string", group: "hero" }),
    defineField({ name: "heroHeadlinePre", title: "Nagłówek — początek", type: "string", group: "hero" }),
    defineField({ name: "heroHeadlineHighlight", title: "Nagłówek — żółte podświetlenie", type: "string", group: "hero" }),
    defineField({ name: "heroHeadlinePost", title: "Nagłówek — koniec", type: "string", group: "hero" }),
    defineField({ name: "heroLead", title: "Lead", type: "text", rows: 4, group: "hero" }),
    defineField({ name: "heroCtaPrimary", title: "Przycisk główny", type: "string", group: "hero" }),
    defineField({ name: "heroCtaSecondary", title: "Przycisk drugi", type: "string", group: "hero" }),
    defineField({
      name: "stats",
      title: "Liczby pod hero",
      type: "array",
      group: "hero",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "num", title: "Liczba", type: "string" }),
            defineField({ name: "label", title: "Opis", type: "string" }),
          ],
          preview: { select: { title: "num", subtitle: "label" } },
        }),
      ],
    }),

    // — Trust —
    defineField({ name: "experienceLabel", title: "Etykieta paska logo", type: "string", group: "trust" }),
    defineField({ name: "experience", title: "Firmy / projekty", type: "array", of: [defineArrayMember({ type: "string" })], group: "trust" }),
    defineField({ name: "skills", title: "Umiejętności (tagi)", type: "array", of: [defineArrayMember({ type: "string" })], group: "trust" }),

    // — Audience —
    defineField({ name: "audienceKicker", title: "Kicker", type: "string", group: "audience" }),
    defineField({ name: "audienceTitle", title: "Nagłówek", type: "string", group: "audience" }),
    defineField({ name: "audienceLead", title: "Lead", type: "text", rows: 2, group: "audience" }),
    defineField({
      name: "audienceItems",
      title: "Karty",
      type: "array",
      group: "audience",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Tytuł", type: "string" }),
            defineField({ name: "text", title: "Treść", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    // — Scope —
    defineField({ name: "scopeKicker", title: "Kicker", type: "string", group: "scope" }),
    defineField({ name: "scopeTitle", title: "Nagłówek", type: "string", group: "scope" }),
    defineField({ name: "scopeLead", title: "Lead", type: "text", rows: 2, group: "scope" }),
    defineField({ name: "ownerTitle", title: "Tytuł kolumny „Piotr”", type: "string", group: "scope" }),
    defineField({ name: "ownerItems", title: "Piotr odpowiada za", type: "array", of: [defineArrayMember({ type: "string" })], group: "scope" }),
    defineField({ name: "specialistTitle", title: "Tytuł kolumny „Specjaliści”", type: "string", group: "scope" }),
    defineField({ name: "specialistItems", title: "Specjaliści wykonują", type: "array", of: [defineArrayMember({ type: "string" })], group: "scope" }),
    defineField({ name: "specialistNoteStrong", title: "Notka — pogrubione", type: "string", group: "scope" }),
    defineField({ name: "specialistNoteRest", title: "Notka — reszta", type: "string", group: "scope" }),

    // — Process —
    defineField({ name: "processKicker", title: "Kicker", type: "string", group: "process" }),
    defineField({ name: "processTitle", title: "Nagłówek", type: "string", group: "process" }),
    defineField({ name: "processLead", title: "Lead", type: "text", rows: 2, group: "process" }),
    defineField({
      name: "processSteps",
      title: "Kroki",
      type: "array",
      group: "process",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Tytuł", type: "string" }),
            defineField({ name: "text", title: "Treść", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    // — Timeline —
    defineField({ name: "timelineKicker", title: "Kicker", type: "string", group: "timeline" }),
    defineField({ name: "timelineTitle", title: "Nagłówek", type: "string", group: "timeline" }),
    defineField({ name: "timelineLead", title: "Lead", type: "text", rows: 2, group: "timeline" }),
    defineField({
      name: "timeline",
      title: "Fazy",
      type: "array",
      group: "timeline",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "range", title: "Zakres dni", type: "string" }),
            defineField({ name: "title", title: "Tytuł", type: "string" }),
            defineField({ name: "text", title: "Treść", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "range" } },
        }),
      ],
    }),

    // — Mid CTA —
    defineField({ name: "midCtaTitle", title: "Nagłówek", type: "string", group: "midcta" }),
    defineField({ name: "midCtaText", title: "Tekst", type: "text", rows: 2, group: "midcta" }),
    defineField({ name: "midCtaButton", title: "Przycisk", type: "string", group: "midcta" }),

    // — Pricing —
    defineField({ name: "pricingKicker", title: "Kicker", type: "string", group: "pricing" }),
    defineField({ name: "pricingTitle", title: "Nagłówek", type: "string", group: "pricing" }),
    defineField({ name: "pricingLead", title: "Lead", type: "text", rows: 2, group: "pricing" }),
    defineField({ name: "pricingAnchorStrong", title: "Kotwica — pogrubione", type: "string", group: "pricing" }),
    defineField({ name: "pricingAnchorRest", title: "Kotwica — reszta", type: "string", group: "pricing" }),
    defineField({
      name: "packages",
      title: "Pakiety",
      type: "array",
      group: "pricing",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Nazwa", type: "string" }),
            defineField({ name: "price", title: "Cena", type: "string" }),
            defineField({ name: "period", title: "Okres / jednostka", type: "string" }),
            defineField({ name: "description", title: "Opis", type: "text", rows: 2 }),
            defineField({ name: "items", title: "Punkty", type: "array", of: [defineArrayMember({ type: "string" })] }),
            defineField({ name: "highlighted", title: "Wyróżniony", type: "boolean", initialValue: false }),
            defineField({ name: "badge", title: "Plakietka (np. „Najczęściej wybierany”)", type: "string" }),
          ],
          preview: { select: { title: "name", subtitle: "price" } },
        }),
      ],
    }),
    defineField({ name: "pricingFootnote", title: "Stopka cennika", type: "text", rows: 3, group: "pricing" }),

    // — FAQ —
    defineField({ name: "faqKicker", title: "Kicker", type: "string", group: "faq" }),
    defineField({ name: "faqTitle", title: "Nagłówek", type: "string", group: "faq" }),
    defineField({
      name: "faqItems",
      title: "Pytania",
      type: "array",
      group: "faq",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "question", title: "Pytanie", type: "string" }),
            defineField({ name: "answer", title: "Odpowiedź", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),

    // — Contact —
    defineField({ name: "contactKicker", title: "Kicker", type: "string", group: "contact" }),
    defineField({ name: "contactTitle", title: "Nagłówek", type: "string", group: "contact" }),
    defineField({ name: "contactLead", title: "Lead", type: "text", rows: 3, group: "contact" }),
    defineField({ name: "contactEmail", title: "Email", type: "string", group: "contact" }),
    defineField({ name: "contactLinkedinUrl", title: "LinkedIn — URL", type: "url", group: "contact" }),
    defineField({ name: "contactLinkedinLabel", title: "LinkedIn — etykieta", type: "string", group: "contact" }),
  ],
  preview: {
    prepare: () => ({ title: "Strona główna" }),
  },
});
