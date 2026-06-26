import { getCliClient } from "sanity/cli";

// Seeds the singleton `landingPage` document with the content that currently
// lives as code defaults in src/app/page.tsx + layout.tsx, so the editor opens
// a fully-populated panel instead of blank fields. Run once:
//   npx sanity exec scripts/seed-landing.ts --with-user-token
// Icon and image fields are intentionally left empty — the site falls back to
// the bundled SVG icons and /public images, and the editor can fill them later.
// Safe to re-run: createOrReplace overwrites the same _id.

const client = getCliClient({ apiVersion: "2025-02-19" });

const doc = {
  _id: "landingPage",
  _type: "landingPage",

  // — Hero —
  heroOverline: "Piotr Sobczyk / zewnętrzny Head of Digital Marketing",
  heroHeadlinePre: "Twój marketing generuje dane.",
  heroHeadlineHighlight: "Ja zamieniam je",
  heroHeadlinePost: "w decyzje i wzrost.",
  heroLead:
    "Wchodzę jako zewnętrzny Head of Digital. Najpierw naprawiam pomiar, bo większość firm decyduje na niekompletnych danych. Potem prowadzę eksperymenty wzrostowe w 2-tygodniowych sprintach: skaluję to, co zarabia, wycinam to, co… tylko kosztuje.",
  heroCtaPrimary: "Porozmawiajmy",
  heroCtaSecondary: "Jak pracuję z klientami",
  stats: [
    { _key: "stat0", num: "15+", label: "lat w digitalu" },
    { _key: "stat1", num: "50+", label: "projektów" },
    { _key: "stat2", num: "11", label: "branż" },
    { _key: "stat3", num: "22 mln zł", label: "budżetów pod nadzorem" },
  ],

  // — Trust —
  experienceLabel: "Doświadczenie z firm i projektów",
  experience: [
    { _key: "exp0", name: "GetResponse", slug: "getresponse" },
    { _key: "exp1", name: "Patronite.pl", slug: "patronite" },
    { _key: "exp2", name: "Captains", slug: "captains" },
    { _key: "exp3", name: "Allcon Osiedla", slug: "allcon-osiedla" },
    { _key: "exp4", name: "Shoplyze", slug: "shoplyze" },
    { _key: "exp5", name: "Bright Future", slug: "bright-future" },
    { _key: "exp6", name: "OX Media", slug: "ox-media" },
    { _key: "exp7", name: "Apella S.A.", slug: "apella" },
    { _key: "exp8", name: "Wirtualna Polska", slug: "wirtualna-polska" },
  ],
  skills: [
    "Google Ads", "GA4", "Atrybucja", "PPC", "SEO",
    "E-commerce", "Eksperymenty A/B", "Dashboardy",
    "Strategia", "ROI", "Reporting",
  ],

  // — Audience —
  audienceKicker: "Dla kogo",
  audienceTitle: "Rozpoznajesz się w tym?",
  audienceLead:
    "Pracuję z firmami, które wiedzą, że marketing jest ważny, ale nie mają nikogo, kto bierze odpowiedzialność za liczby.",
  audienceItems: [
    {
      _key: "aud0",
      title: "Wydajesz na marketing, ale nie wiesz, co z tego masz",
      text: "Raporty mówią o zasięgach i kliknięciach, a Ty chcesz wiedzieć: ile kosztuje klient i które działania zarabiają. Ustawiam pomiar tak, żeby było to widać czarno na białym.",
    },
    {
      _key: "aud1",
      title: "Każdy specjalista pokazuje, że „jego kanał działa”",
      text: "SEO chwali pozycje, Ads chwali ROAS, social chwali zasięgi, a sprzedaż stoi. Patrzę na całość lejka i rozstrzygam na danych, kto naprawdę dowozi.",
    },
    {
      _key: "aud2",
      title: "Decyzje zapadają na wyczucie",
      text: "Bo danym nie da się ufać: GA4 skonfigurowane „jakoś”, konwersje liczone podwójnie, brak atrybucji. Naprawiam fundament pomiarowy w pierwszym miesiącu.",
    },
    {
      _key: "aud3",
      title: "Etat Head of Digital to 20–28 tys.",
      text: "Do tego rekrutacja i ZUS. Dostajesz to samo doświadczenie za ułamek kosztu, w modelu, z którego możesz wyjść po pierwszym miesiącu.",
    },
  ],

  // — Scope —
  scopeKicker: "Zakres",
  scopeTitle: "Jasny podział ról",
  scopeLead:
    "Ja odpowiadam za dane, kierunek i decyzje. Specjaliści odpowiadają za wykonanie.",
  ownerTitle: "Piotr odpowiada za",
  ownerItems: [
    { _key: "own0", text: "strategia digital i metryka nadrzędna" },
    { _key: "own1", text: "architektura pomiaru: GA4, konwersje, atrybucja, dashboardy" },
    { _key: "own2", text: "backlog eksperymentów i priorytety" },
    { _key: "own3", text: "budżet i jego zwrot" },
    { _key: "own4", text: "nadzór nad specjalistami i agencjami" },
    { _key: "own5", text: "raportowanie pod decyzje zarządu" },
  ],
  specialistTitle: "Specjaliści wykonują",
  specialistItems: [
    "SEO",
    "PPC: Google, Meta, LinkedIn Ads",
    "social media",
    "content i copywriting",
    "video i grafika",
    "marketing automation",
    "wdrożenia techniczne tagowania",
  ],
  specialistNoteStrong: "Nie masz specjalistów?",
  specialistNoteRest:
    "Wpuszczam swoich, sprawdzonych na wcześniejszych projektach.",

  // — Process —
  processKicker: "Jak pracuję",
  processTitle: "Dane → decyzje → wzrost",
  processLead:
    "Pięć kroków: od naprawy pomiaru po wzrost prowadzony eksperymentami.",
  processSteps: [
    {
      _key: "proc0",
      title: "Rozmowa (bezpłatnie)",
      text: "30 minut o Twoich liczbach. Zwykle już na tej rozmowie pokażę 2–3 hipotezy wzrostowe, które możemy sprawdzić w pierwszym miesiącu.",
    },
    {
      _key: "proc1",
      title: "Audyt digital + analityki",
      text: "Prześwietlam stronę, kampanie, SEO i lejek oraz fundament pomiarowy: GA4, konwersje, atrybucję, tagowanie. Wynik: co działa, co nie i czego w ogóle nie widać.",
    },
    {
      _key: "proc2",
      title: "Strategia + dashboard zarządczy",
      text: "Plan na 6–12 miesięcy, jedna metryka nadrzędna, KPI i budżety, plus dashboard live, w którym w każdej chwili widzisz stan marketingu, bez czekania na raport.",
    },
    {
      _key: "proc3",
      title: "Sprinty wzrostowe co 2 tygodnie",
      text: "Stawiam hipotezy, briefuję specjalistów (Twoich lub moich), a na każdym spotkaniu rozstrzygamy na danych: skalujemy albo wycinamy.",
    },
    {
      _key: "proc4",
      title: "Raport miesięczny dla zarządu",
      text: "Jedna strona: co urosło, co wyciąłem, co testuję dalej, w języku przychodu, nie kliknięć.",
    },
  ],

  // — Timeline —
  timelineKicker: "Pierwsze 90 dni",
  timelineTitle: "Co dzieje się od pierwszego dnia",
  timelineLead:
    "Konkretny plan na trzy pierwsze miesiące, bez „rozkręcania się” przez pół roku.",
  timeline: [
    {
      _key: "tl0",
      range: "Dni 1–30",
      title: "Fundament",
      text: "Audyt digitalu i analityki, naprawa pomiaru, strategia i metryka nadrzędna. Pierwsza szybka wygrana: zwykle wycięcie budżetu, który na poprawnych danych okazuje się przepalany.",
    },
    {
      _key: "tl1",
      range: "Dni 31–60",
      title: "Rytm",
      text: "Dashboard zarządczy live, 4–6 eksperymentów wzrostowych, briefy i rytm pracy ze specjalistami.",
    },
    {
      _key: "tl2",
      range: "Dni 61–90",
      title: "Skalowanie",
      text: "Skalowanie zwycięskich eksperymentów i decyzje budżetowe na pełnych danych: czego robimy więcej, a czego nie robimy wcale.",
    },
  ],

  // — Mid CTA —
  midCtaTitle: "Sprawdźmy, co da się policzyć i poprawić",
  midCtaText: "Bezpłatna rozmowa, konkretne wnioski, zero zobowiązań.",
  midCtaButton: "Umów konsultację",

  // — Pricing —
  pricingKicker: "Cennik",
  pricingTitle: "Trzy sposoby współpracy",
  pricingLead: "Od jednorazowego audytu po pełną odpowiedzialność za digital.",
  pricingAnchorStrong:
    "Etatowy Head of Digital kosztuje 20–28 tys. zł miesięcznie",
  pricingAnchorRest:
    "plus rekrutacja i ZUS. Poniżej dostajesz to samo doświadczenie w modelu, który możesz wyłączyć.",
  packages: [
    {
      _key: "pkg0",
      name: "Audyt digital + analityka + strategia",
      price: "8 500",
      period: "zł netto / jednorazowo",
      description:
        "Audyt kampanii, SEO i lejka plus audyt pomiaru. Gotowa strategia z planem na 90 dni.",
      items: [
        "audyt kampanii, SEO i lejka",
        "audyt pomiaru: GA4, konwersje, atrybucja",
        "strategia digital na 6–12 miesięcy",
        "metryka nadrzędna + roadmapa 90 dni",
        "backlog eksperymentów",
      ],
      highlighted: false,
    },
    {
      _key: "pkg1",
      name: "Head of Digital",
      price: "9 500",
      period: "zł netto / mc",
      badge: "Najczęściej wybierany",
      description:
        "Pakiet główny: dane, decyzje i wzrost prowadzony w 2-tygodniowych sprintach.",
      items: [
        "sprinty wzrostowe co 2 tygodnie",
        "dashboard zarządczy live",
        "backlog eksperymentów",
        "nadzór nad specjalistami",
        "raport miesięczny dla zarządu",
      ],
      highlighted: true,
    },
    {
      _key: "pkg2",
      name: "Head of Digital Executive",
      price: "12 500",
      period: "zł netto / mc",
      description:
        "Pełna odpowiedzialność za digital, zsynchronizowana z decyzjami zarządu.",
      items: [
        "budżet i ROI",
        "skalowanie i testowanie nowych kanałów",
        "udział w spotkaniach zarządu",
        "rozszerzona analityka: kohorty, LTV, prognozy",
        "priorytetowy kontakt",
      ],
      highlighted: false,
    },
  ],
  pricingFootnote:
    "Minimum 3 miesiące, wyjście po 1. miesiącu bez kar. Ceny nie obejmują budżetów reklamowych ani pracy specjalistów (orientacyjnie 3–10 tys. zł/mc zależnie od zakresu).",

  // — FAQ —
  faqKicker: "FAQ",
  faqTitle: "Często zadawane pytania",
  faqItems: [
    {
      _key: "faq0",
      question: "Czym różnisz się od „zewnętrznego marketera” czy koordynatora?",
      answer:
        "Dwiema rzeczami. Po pierwsze: zanim cokolwiek zoptymalizuję, naprawiam pomiar. Bez tego każda decyzja to zgadywanie. Po drugie: pracuję w sprintach eksperymentów, więc co dwa tygodnie zapada decyzja „skalujemy albo wycinamy”, a nie „działamy dalej”.",
    },
    {
      _key: "faq1",
      question: "Czy robisz kampanie, grafiki, treści?",
      answer:
        "Nie. Odpowiadam za kierunek, pomiar i wynik. Wykonują specjaliści: Twoi albo moi podwykonawcy, których briefuję i rozliczam.",
    },
    {
      _key: "faq2",
      question: "Mam już agencję / specjalistów. Po co mi jeszcze Ty?",
      answer:
        "Właśnie wtedy jestem najbardziej potrzebny. Agencja ocenia sama siebie własnymi raportami. Ja jestem po Twojej stronie stołu: weryfikuję na danych, czy to, za co płacisz, faktycznie zarabia.",
    },
    {
      _key: "faq3",
      question: "Czy mogę dzwonić w dowolnym momencie?",
      answer:
        "Pracujemy w rytmie sprintów i komunikacji asynchronicznej. Stan marketingu widzisz w każdej chwili w dashboardzie, nie musisz dzwonić, żeby wiedzieć, co się dzieje. Ale wszystko jest kwestią dogadania.",
    },
    {
      _key: "faq4",
      question: "Jaki jest minimalny okres współpracy?",
      answer:
        "3 miesiące, tyle trwa cykl: naprawa pomiaru, eksperymenty, skalowanie. Po pierwszym miesiącu możesz spokojnie wyjść bez konsekwencji.",
    },
    {
      _key: "faq5",
      question: "Dla kogo to NIE jest?",
      answer:
        "Dla firm szukających wykonawcy „od postów”, oczekujących efektów bez budżetu albo takich, które nie chcą wiedzieć, ile naprawdę kosztuje ich klient.",
    },
  ],

  // — Contact —
  contactKicker: "Kontakt",
  contactTitle:
    "Napisz, jakie pytanie o swój marketing zadajesz sobie najczęściej",
  contactLead:
    "Odpowiadam w 48 godzin, od razu ze wskazaniem, gdzie zacząłbym szukać odpowiedzi w Twoich danych.",
  contactEmail: "piotr@sobczyk.io",
  contactLinkedinUrl: "https://www.linkedin.com/in/piotrsobczyk/",
  contactLinkedinLabel: "linkedin.com/in/piotrsobczyk",

  // — SEO —
  seoTitle: "Piotr Sobczyk, zewnętrzny Head of Digital",
  seoDescription:
    "Zamieniam dane z Twojego marketingu w decyzje i wzrost. Naprawiam pomiar i atrybucję, a potem prowadzę wzrost w 2-tygodniowych sprintach eksperymentów, bez kosztu etatu.",
};

client
  .createOrReplace(doc)
  .then((res) => {
    console.log("Seeded landingPage:", res._id);
  })
  .catch((err) => {
    console.error("Seed failed:", err.message);
    process.exit(1);
  });
