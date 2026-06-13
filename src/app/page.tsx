import Image from "next/image";
import Nav from "@/components/Nav";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const experience = [
  "GetResponse",
  "Patronite.pl",
  "Captains",
  "Allcon Osiedla",
  "Shoplyze",
  "Bright Future",
  "OX Media",
  "Apella S.A.",
  "Wirtualna Polska",
];

const stats = [
  { num: "15+", label: "lat w digitalu" },
  { num: "50+", label: "projektów" },
  { num: "11", label: "branż" },
  { num: "22 mln zł", label: "budżetów pod nadzorem" },
];

const audience = [
  {
    title: "Wydajesz na marketing, ale nie wiesz, co z tego masz",
    text: "Raporty mówią o zasięgach i kliknięciach, a Ty chcesz wiedzieć: ile kosztuje klient i które działania zarabiają. Ustawiam pomiar tak, żeby było to widać czarno na białym.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "Każdy specjalista pokazuje, że „jego kanał działa”",
    text: "SEO chwali pozycje, Ads chwali ROAS, social chwali zasięgi, a sprzedaż stoi. Patrzę na całość lejka i rozstrzygam na danych, kto naprawdę dowozi.",
    icon: "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z",
  },
  {
    title: "Decyzje zapadają na wyczucie",
    text: "Bo danym nie da się ufać: GA4 skonfigurowane „jakoś”, konwersje liczone podwójnie, brak atrybucji. Naprawiam fundament pomiarowy w pierwszym miesiącu.",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
  },
  {
    title: "Etat Head of Digital to 20–28 tys.",
    text: "Do tego rekrutacja i ZUS. Dostajesz to samo doświadczenie za ułamek kosztu, w modelu, z którego możesz wyjść po pierwszym miesiącu.",
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
  },
];

const ownerItems = [
  { text: "strategia digital i metryka nadrzędna", icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" },
  { text: "architektura pomiaru: GA4, konwersje, atrybucja, dashboardy", icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" },
  { text: "backlog eksperymentów i priorytety", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
  { text: "budżet i jego zwrot", icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" },
  { text: "nadzór nad specjalistami i agencjami", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
  { text: "raportowanie pod decyzje zarządu", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
];

const specialistItems = [
  "SEO",
  "PPC: Google, Meta, LinkedIn Ads",
  "social media",
  "content i copywriting",
  "video i grafika",
  "marketing automation",
  "wdrożenia techniczne tagowania",
];

const processSteps = [
  {
    step: "01",
    title: "Rozmowa (bezpłatnie)",
    text: "30 minut o Twoich liczbach. Zwykle już na tej rozmowie pokażę 2–3 hipotezy wzrostowe, które możemy sprawdzić w pierwszym miesiącu.",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    step: "02",
    title: "Audyt digital + analityki",
    text: "Prześwietlam stronę, kampanie, SEO i lejek oraz fundament pomiarowy: GA4, konwersje, atrybucję, tagowanie. Wynik: co działa, co nie i czego w ogóle nie widać.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    step: "03",
    title: "Strategia + dashboard zarządczy",
    text: "Plan na 6–12 miesięcy, jedna metryka nadrzędna, KPI i budżety, plus dashboard live, w którym w każdej chwili widzisz stan marketingu, bez czekania na raport.",
    icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
  },
  {
    step: "04",
    title: "Sprinty wzrostowe co 2 tygodnie",
    text: "Stawiam hipotezy, briefuję specjalistów (Twoich lub moich), a na każdym spotkaniu rozstrzygamy na danych: skalujemy albo wycinamy.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  },
  {
    step: "05",
    title: "Raport miesięczny dla zarządu",
    text: "Jedna strona: co urosło, co wyciąłem, co testuję dalej, w języku przychodu, nie kliknięć.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
];

const timeline = [
  {
    range: "Dni 1–30",
    title: "Fundament",
    text: "Audyt digitalu i analityki, naprawa pomiaru, strategia i metryka nadrzędna. Pierwsza szybka wygrana: zwykle wycięcie budżetu, który na poprawnych danych okazuje się przepalany.",
  },
  {
    range: "Dni 31–60",
    title: "Rytm",
    text: "Dashboard zarządczy live, 4–6 eksperymentów wzrostowych, briefy i rytm pracy ze specjalistami.",
  },
  {
    range: "Dni 61–90",
    title: "Skalowanie",
    text: "Skalowanie zwycięskich eksperymentów i decyzje budżetowe na pełnych danych: czego robimy więcej, a czego nie robimy wcale.",
  },
];

const packages = [
  {
    name: "Audyt digital + analityka + strategia",
    price: "8 500",
    period: "zł netto / jednorazowo",
    description: "Audyt kampanii, SEO i lejka plus audyt pomiaru. Gotowa strategia z planem na 90 dni.",
    items: [
      "audyt kampanii, SEO i lejka",
      "audyt pomiaru: GA4, konwersje, atrybucja",
      "strategia digital na 6–12 miesięcy",
      "metryka nadrzędna + roadmapa 90 dni",
      "backlog eksperymentów",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Head of Digital",
    price: "9 500",
    period: "zł netto / mc",
    badge: "Najczęściej wybierany",
    description: "Pakiet główny: dane, decyzje i wzrost prowadzony w 2-tygodniowych sprintach.",
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
    name: "Head of Digital Executive",
    price: "12 500",
    period: "zł netto / mc",
    description: "Pełna odpowiedzialność za digital, zsynchronizowana z decyzjami zarządu.",
    items: [
      "budżet i ROI",
      "skalowanie i testowanie nowych kanałów",
      "udział w spotkaniach zarządu",
      "rozszerzona analityka: kohorty, LTV, prognozy",
      "priorytetowy kontakt",
    ],
    highlighted: false,
    badge: null,
  },
];

const faq = [
  {
    question: "Czym różnisz się od „zewnętrznego marketera” czy koordynatora?",
    answer:
      "Dwiema rzeczami. Po pierwsze: zanim cokolwiek zoptymalizuję, naprawiam pomiar. Bez tego każda decyzja to zgadywanie. Po drugie: pracuję w sprintach eksperymentów, więc co dwa tygodnie zapada decyzja „skalujemy albo wycinamy”, a nie „działamy dalej”.",
  },
  {
    question: "Czy robisz kampanie, grafiki, treści?",
    answer:
      "Nie. Odpowiadam za kierunek, pomiar i wynik. Wykonują specjaliści: Twoi albo moi podwykonawcy, których briefuję i rozliczam.",
  },
  {
    question: "Mam już agencję / specjalistów. Po co mi jeszcze Ty?",
    answer:
      "Właśnie wtedy jestem najbardziej potrzebny. Agencja ocenia sama siebie własnymi raportami. Ja jestem po Twojej stronie stołu: weryfikuję na danych, czy to, za co płacisz, faktycznie zarabia.",
  },
  {
    question: "Czy mogę dzwonić w dowolnym momencie?",
    answer:
      "Pracujemy w rytmie sprintów i komunikacji asynchronicznej. Stan marketingu widzisz w każdej chwili w dashboardzie, nie musisz dzwonić, żeby wiedzieć, co się dzieje. Ale wszystko jest kwestią dogadania.",
  },
  {
    question: "Jaki jest minimalny okres współpracy?",
    answer:
      "3 miesiące, tyle trwa cykl: naprawa pomiaru, eksperymenty, skalowanie. Po pierwszym miesiącu możesz spokojnie wyjść bez konsekwencji.",
  },
  {
    question: "Dla kogo to NIE jest?",
    answer:
      "Dla firm szukających wykonawcy „od postów”, oczekujących efektów bez budżetu albo takich, które nie chcą wiedzieć, ile naprawdę kosztuje ich klient.",
  },
];

const skills = [
  "Google Ads", "GA4", "Atrybucja", "PPC", "SEO",
  "E-commerce", "Eksperymenty A/B", "Dashboardy",
  "Strategia", "ROI", "Reporting",
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 px-5 sm:px-6 overflow-hidden bg-ink grain">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-yellow/20 via-yellow/5 to-transparent rounded-full blur-3xl pointer-events-none float-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none float-slower" />
        <div className="absolute top-20 left-8 w-[250px] h-[250px] dots-pattern opacity-[0.08] pointer-events-none hidden lg:block" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="mono text-xs tracking-[0.18em] uppercase text-yellow mb-5">
                Piotr Sobczyk / zewnętrzny Head of Digital Marketing
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight text-paper leading-[1.06] mb-6">
                Twój marketing generuje dane.{" "}
                <span className="relative inline-block text-ink">
                  <span className="absolute inset-x-[-0.15em] top-[0.08em] bottom-[-0.06em] bg-yellow -rotate-1 rounded-sm" aria-hidden="true" />
                  <span className="relative">Ja zamieniam je</span>
                </span>{" "}
                w decyzje i wzrost.
              </h1>
              <p className="text-lg md:text-xl text-paper/55 leading-relaxed mb-10 max-w-xl">
                Wchodzę jako zewnętrzny Head of Digital. Najpierw naprawiam pomiar, bo większość firm decyduje na niekompletnych danych. Potem prowadzę eksperymenty wzrostowe w 2-tygodniowych sprintach: skaluję to, co zarabia, wycinam to, co… tylko kosztuje.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-yellow text-ink font-semibold px-7 py-3.5 rounded-full border-2 border-ink hover:bg-yellow-dark transition-colors text-base"
                >
                  Porozmawiajmy
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center border-2 border-paper/25 text-paper/80 font-semibold px-7 py-3.5 rounded-full hover:bg-paper/5 hover:text-paper transition-all text-base"
                >
                  Jak pracuję z klientami
                </a>
              </div>

              {/* KPI strip */}
              <div className="flex flex-wrap gap-x-10 gap-y-6">
                {stats.map((kpi) => (
                  <div key={kpi.label}>
                    <p className="font-display text-3xl font-semibold text-yellow">{kpi.num}</p>
                    <p className="text-sm text-paper/40">{kpi.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait + floating cards */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-6 bg-yellow/15 rounded-3xl blur-2xl pointer-events-none" />
                <div className="absolute -inset-1 bg-yellow rounded-2xl rotate-2" aria-hidden="true" />
                <Image
                  src="/piotr-sobczyk.jpg"
                  alt="Piotr Sobczyk"
                  width={300}
                  height={300}
                  className="relative rounded-2xl border-2 border-ink grayscale contrast-110 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover"
                  priority
                />
                {/* Floating card: role */}
                <div className="absolute -top-4 -right-4 sm:-right-8 bg-paper rounded-xl px-4 py-2.5 border-2 border-ink shadow-[3px_3px_0_0_#ffe01b]">
                  <p className="text-[10px] text-muted uppercase tracking-wider">Rola</p>
                  <p className="text-sm font-semibold text-ink">Head of Digital</p>
                </div>
                {/* Floating card: skills */}
                <div className="absolute -bottom-5 -left-4 sm:-left-10 bg-paper rounded-xl p-4 border-2 border-ink shadow-[3px_3px_0_0_#ffe01b]">
                  <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
                    {["GA4", "Atrybucja", "PPC", "SEO"].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow border border-ink" />
                        <span className="text-xs font-medium text-ink/80">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating metric */}
                <div className="absolute top-1/2 -right-3 sm:-right-14 -translate-y-1/2 bg-yellow rounded-lg px-3 py-2 border-2 border-ink hidden sm:block">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    <span className="mono text-xs text-ink font-bold">+127%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience bar: logo placeholders */}
      <section className="py-10 bg-cream border-y-2 border-ink/10 overflow-hidden">
        <p className="mono text-[10px] tracking-[0.2em] uppercase text-muted text-center mb-6 px-5">
          Doświadczenie z firm i projektów
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee">
            {[...experience, ...experience].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="mx-3 flex h-14 min-w-[150px] items-center justify-center rounded-xl border-2 border-ink/15 bg-paper px-6"
                title="Logo do podmiany"
              >
                <span className="text-sm font-semibold text-ink/40 whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <ScrollReveal>
        <section className="py-8 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill) => (
                <span key={skill} className="mono text-[11px] tracking-wide px-3 py-1.5 rounded-full border-2 border-ink/15 text-muted hover:border-ink hover:bg-yellow hover:text-ink transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Audience */}
      <ScrollReveal>
        <section id="audience" className="relative py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
          <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-yellow/[0.08] rounded-full blur-3xl pointer-events-none float-slower" />
          <div className="absolute bottom-0 right-12 w-[200px] h-[200px] dots-pattern opacity-[0.12] pointer-events-none hidden lg:block" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-14">
              <span className="chip mono text-[11px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-4">Dla kogo</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mt-4">
                Rozpoznajesz się w tym?
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                Pracuję z firmami, które wiedzą, że marketing jest ważny, ale nie mają nikogo, kto bierze odpowiedzialność za liczby.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {audience.map((item) => (
                <div key={item.title} className="sticker sticker-hover p-6 md:p-8 rounded-2xl bg-white">
                  <div className="w-11 h-11 rounded-xl bg-yellow border-2 border-ink text-ink flex items-center justify-center mb-5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Scope */}
      <ScrollReveal>
        <section id="scope" className="relative py-20 md:py-28 px-5 sm:px-6 bg-cream border-y-2 border-ink/10 overflow-hidden grain">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow/[0.1] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none float-slow" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-14">
              <span className="chip mono text-[11px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-4">Zakres</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mt-4">
                Jasny podział ról
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                Ja odpowiadam za dane, kierunek i decyzje. Specjaliści odpowiadają za wykonanie.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="sticker p-7 md:p-8 rounded-2xl bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-yellow border-2 border-ink flex items-center justify-center">
                    <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">Piotr odpowiada za</h3>
                </div>
                <ul className="space-y-3.5">
                  {ownerItems.map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-ink shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <span className="text-sm text-ink">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sticker p-7 md:p-8 rounded-2xl bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cream border-2 border-ink flex items-center justify-center">
                    <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">Specjaliści wykonują</h3>
                </div>
                <ul className="space-y-3.5">
                  {specialistItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-ink/40 shrink-0" />
                      <span className="text-sm text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-5 border-t-2 border-dashed border-ink/15 text-sm text-ink">
                  <span className="font-semibold">Nie masz specjalistów?</span> Wpuszczam swoich, sprawdzonych na wcześniejszych projektach.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Process */}
      <ScrollReveal>
        <section id="process" className="relative py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow/[0.06] rounded-full blur-3xl -translate-x-1/3 pointer-events-none float-slow" />
          <div className="absolute top-20 right-16 w-[180px] h-[180px] dots-pattern opacity-[0.12] pointer-events-none hidden lg:block" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-14">
              <span className="chip mono text-[11px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-4">Jak pracuję</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mt-4">
                Dane → decyzje → wzrost
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                Pięć kroków: od naprawy pomiaru po wzrost prowadzony eksperymentami.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((item) => (
                <div key={item.step} className="relative group">
                  <div className="sticker sticker-hover relative p-5 rounded-2xl bg-white h-full">
                    <div className="w-9 h-9 rounded-lg bg-yellow border-2 border-ink flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <span className="font-display text-lg font-bold text-ink/25 block mb-1">{item.step}</span>
                    <h3 className="font-display text-base font-semibold text-ink mb-1.5 leading-snug">{item.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* First 90 days */}
      <ScrollReveal>
        <section className="relative py-20 md:py-28 px-5 sm:px-6 bg-cream border-y-2 border-ink/10 overflow-hidden grain">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-yellow/[0.1] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none float-slower" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-14">
              <span className="chip mono text-[11px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-4">Pierwsze 90 dni</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mt-4">
                Co dzieje się od pierwszego dnia
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                Konkretny plan na trzy pierwsze miesiące, bez „rozkręcania się” przez pół roku.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {timeline.map((phase, i) => (
                <div key={phase.range} className="sticker sticker-hover relative p-7 rounded-2xl bg-white">
                  <span className="absolute -top-3 left-6 chip text-[11px] font-semibold px-3 py-1 rounded-full">
                    {phase.range}
                  </span>
                  <span className="font-display text-4xl font-bold text-ink/15 block mb-2 mt-2">0{i + 1}</span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{phase.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mid-page CTA */}
      <section className="py-16 md:py-20 px-5 sm:px-6 bg-ink relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow/12 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none float-slow" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none float-slower" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper mb-4">
            Sprawdźmy, co da się policzyć i poprawić
          </h2>
          <p className="text-paper/60 text-lg mb-8">
            Bezpłatna rozmowa, konkretne wnioski, zero zobowiązań.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-yellow text-ink font-semibold px-8 py-4 rounded-full border-2 border-ink hover:bg-yellow-dark transition-colors text-base"
          >
            Umów konsultację
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Pricing */}
      <ScrollReveal>
        <section id="pricing" className="relative py-20 md:py-28 px-5 sm:px-6 overflow-hidden grain">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow/[0.08] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none float-slow" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-12">
              <span className="chip mono text-[11px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-4">Cennik</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mt-4">
                Trzy sposoby współpracy
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                Od jednorazowego audytu po pełną odpowiedzialność za digital.
              </p>
            </div>

            {/* Anchor */}
            <div className="max-w-2xl mx-auto mb-12 sticker rounded-2xl bg-yellow/20 p-5 sm:p-6 text-center">
              <p className="text-sm sm:text-[15px] text-ink leading-relaxed">
                <span className="font-semibold">Etatowy Head of Digital kosztuje 20–28 tys. zł miesięcznie</span> plus rekrutacja i ZUS. Poniżej dostajesz to samo doświadczenie w modelu, który możesz wyłączyć.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col p-6 md:p-7 rounded-2xl sticker ${
                    pkg.highlighted ? "bg-yellow" : "bg-white"
                  }`}
                >
                  {pkg.badge && (
                    <span className="absolute -top-3 left-6 bg-ink text-paper text-[11px] font-semibold px-3 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="font-display text-lg font-semibold text-ink mb-3 mt-1">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="font-display text-4xl font-bold text-ink">{pkg.price}</span>
                    <span className="text-xs text-ink/60 ml-1.5">{pkg.period}</span>
                  </div>
                  <p className="text-sm text-ink/70 mb-5 leading-relaxed">{pkg.description}</p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 mt-0.5 shrink-0 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-ink/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`block text-center font-semibold py-3 rounded-full border-2 border-ink transition-colors text-sm ${
                      pkg.highlighted
                        ? "bg-ink text-paper hover:bg-black"
                        : "bg-yellow text-ink hover:bg-yellow-dark"
                    }`}
                  >
                    Wybieram
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted mt-8 max-w-2xl mx-auto">
              Minimum 3 miesiące, wyjście po 1. miesiącu bez kar. Ceny nie obejmują budżetów reklamowych ani pracy specjalistów (orientacyjnie 3–10 tys. zł/mc zależnie od zakresu).
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section id="faq" className="relative py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow/[0.06] rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none float-slow" />
          <div className="max-w-3xl mx-auto relative">
            <div className="text-center mb-14">
              <span className="chip mono text-[11px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-4">FAQ</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mt-4">
                Często zadawane pytania
              </h2>
            </div>
            <div className="space-y-4">
              {faq.map((item) => (
                <details key={item.question} className="sticker group rounded-2xl bg-white">
                  <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none">
                    <span className="font-display font-semibold text-ink pr-4 text-[15px]">{item.question}</span>
                    <span className="faq-icon text-ink shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12M6 12h12" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <p className="text-sm text-muted leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 px-5 sm:px-6 bg-ink relative overflow-hidden grain">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none float-slow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none float-slower" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="chip mono text-[11px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-4">Kontakt</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-paper mb-6 mt-4">
                Napisz, jakie pytanie o swój marketing zadajesz sobie najczęściej
              </h2>
              <p className="text-lg text-paper/55 leading-relaxed mb-10">
                Odpowiadam w 48 godzin, od razu ze wskazaniem, gdzie zacząłbym szukać odpowiedzi w Twoich danych.
              </p>
              <div className="space-y-5">
                <a href="mailto:piotr@sobczyk.io" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-yellow border-2 border-ink flex items-center justify-center">
                    <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-paper/40 uppercase tracking-wider">Email</p>
                    <p className="text-paper/90 font-medium group-hover:text-yellow transition-colors">piotr@sobczyk.io</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/piotrsobczyk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-yellow border-2 border-ink flex items-center justify-center">
                    <svg className="w-5 h-5 text-ink" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-paper/40 uppercase tracking-wider">LinkedIn</p>
                    <p className="text-paper/90 font-medium group-hover:text-yellow transition-colors">linkedin.com/in/piotrsobczyk</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-paper rounded-2xl p-6 md:p-8 border-2 border-ink shadow-[6px_6px_0_0_#ffe01b]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-5 sm:px-6 bg-ink border-t-2 border-paper/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-paper/30">
            &copy; 2026 Piotr Sobczyk
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:piotr@sobczyk.io" className="text-xs text-paper/30 hover:text-paper/60 transition-colors">
              piotr@sobczyk.io
            </a>
            <a href="https://www.linkedin.com/in/piotrsobczyk/" target="_blank" rel="noopener noreferrer" className="text-xs text-paper/30 hover:text-paper/60 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
