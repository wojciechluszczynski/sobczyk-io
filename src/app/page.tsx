import Image from "next/image";
import Nav from "@/components/Nav";
import ContactForm from "@/components/ContactForm";

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

const audience = [
  {
    title: "Macie specjalistów, ale brakuje osoby spinającej całość",
    text: "SEO, Ads, social, content i analityka działają osobno. Potrzebny jest jeden proces i jasne priorytety.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Zarząd chce widzieć liczby, nie listę zadań",
    text: "Raportowanie ma wspierać decyzje biznesowe, a nie wymagać klikania po panelach reklamowych.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Marketing robi dużo, ale nie wiadomo, co naprawdę działa",
    text: "Piotr porządkuje KPI, budżety, kanały i odpowiedzialność za wyniki.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Nie chcecie zatrudniać managera na etat",
    text: "Otrzymujecie seniorowe wsparcie menedżerskie bez kosztu i ryzyka pełnego etatu.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const ownerItems = [
  { text: "audyt i diagnoza", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { text: "strategia digital", icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" },
  { text: "roadmapa 90 dni", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
  { text: "KPI i priorytety", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
  { text: "nadzór nad specjalistami", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
  { text: "raportowanie menedżerskie", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
];

const specialistItems = [
  "SEO",
  "PPC / Google Ads / Meta Ads",
  "social media",
  "video",
  "grafika",
  "marketing automation",
];

const processIcons = [
  "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
  "M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495",
  "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
];

const process = [
  {
    step: "01",
    title: "Konsultacja",
    text: "Krótka rozmowa o sytuacji, celach i dopasowaniu.",
  },
  {
    step: "02",
    title: "Audyt",
    text: "Analiza działań, kanałów, danych, kampanii, SEO, analityki i komunikacji.",
  },
  {
    step: "03",
    title: "Strategia + roadmapa",
    text: "Plan 3-6 miesięcy, priorytety, KPI i budżety.",
  },
  {
    step: "04",
    title: "Egzekucja i koordynacja",
    text: "Briefowanie i nadzór nad zespołem klienta albo zewnętrznymi specjalistami.",
  },
  {
    step: "05",
    title: "Raporty i decyzje",
    text: "Spotkania co 2 tygodnie, raport miesięczny i korekty kierunku.",
  },
];

const packages = [
  {
    name: "Audyt i strategia digital 360",
    price: "7 000 zł",
    period: "netto",
    description:
      "Diagnoza obecnych działań, analiza konkurencji, strategia 6-12 miesięcy, roadmapa 90 dni i spotkanie strategiczne.",
    items: [
      "audyt strony, SEO, analityki i kampanii",
      "analiza konkurencji i rynku",
      "strategia digital 6-12 miesięcy",
      "roadmapa 90 dni",
      "dokument końcowy i rekomendacje",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Marketing Coordination",
    price: "6 000 zł",
    period: "/ miesiąc",
    description:
      "Dla firm, które mają wykonawców, ale potrzebują jednej osoby spinającej działania w całość.",
    items: [
      "koordynacja zespołu klienta / podwykonawców",
      "briefowanie zadań i priorytetów",
      "weryfikacja jakości i spójności",
      "1 spotkanie statusowo-decyzyjne / miesiąc",
      "miesięczne podsumowanie wniosków",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Growth Coordination",
    price: "8 000 zł",
    period: "/ miesiąc",
    badge: "Najczęściej wybierany",
    description:
      "Dla firm, które chcą rozwijać sprzedaż w digitalu i mieć kogoś od strategii oraz egzekucji.",
    items: [
      "rola zewnętrznego Head of Digital",
      "bieżąca optymalizacja strategii",
      "priorytetyzacja działań i budżetu",
      "spotkania co 2 tygodnie",
      "miesięczny raport i plan działań",
    ],
    highlighted: true,
  },
  {
    name: "Executive Coordination & Scale",
    price: "11 000 zł",
    period: "/ miesiąc",
    description:
      "Dla firm, w których marketing musi być zsynchronizowany z decyzjami zarządu.",
    items: [
      "pełna odpowiedzialność za digital na poziomie menedżerskim",
      "zarządzanie budżetem marketingowym i ROI",
      "skalowanie kanałów i testowanie nowych",
      "wsparcie przy decyzjach oferta/sprzedaż",
      "rozszerzone raportowanie zarządcze",
    ],
    highlighted: false,
    badge: null,
  },
];

const publications = [
  {
    title: "UX i PPC. Czyli dlaczego landing ma ogromne znaczenie?",
    source: "Nowa Sprzedaż",
    href: "https://www.nowa-sprzedaz.pl/autor/piotr-sobczyk",
    type: "article" as const,
  },
  {
    title: "Najczęstsze błędy w kampaniach PPC dla e-commerce",
    source: "E-commerce w Praktyce",
    href: "https://ewp.pl/najczestsze-bledy-w-kampaniach-ppc-dla-e-commerce/",
    type: "article" as const,
  },
  {
    title: "Platformy e-commerce - w pełni wykorzystaj ich potencjał",
    source: "E-commerce w Praktyce",
    href: "https://ewp.pl/platformy-e-commerce-w-pelni-wykorzystaj-ich-potencjal-8-porad-dla-poczatkujacych-e-sprzedawcow/",
    type: "article" as const,
  },
  {
    title: "La Casa De Performance",
    source: "Digitalowa Zajawka 360",
    href: "https://open.spotify.com/episode/5bwrHzMfw1j7TVf9AXqovK",
    type: "podcast" as const,
  },
];

const faq = [
  {
    question: "Czy mogę dzwonić w dowolnym momencie?",
    answer:
      "Współpraca opiera się na ustalonym rytmie spotkań i komunikacji asynchronicznej. Dzięki temu decyzje są przemyślane, a nie podejmowane w trybie ciągłego gaszenia pożarów.",
  },
  {
    question: "Czy realizujesz działania operacyjne?",
    answer:
      "Nie jestem agencją ani wykonawcą operacyjnym. Moja rola to zarządzanie, koordynacja, priorytetyzacja i kontrola jakości działań realizowanych przez zespół klienta lub specjalistów.",
  },
  {
    question: "Co oznacza koordynacja działań marketingowych?",
    answer:
      "Ustalanie priorytetów, briefowanie zespołów, weryfikacja realizacji, spójność komunikacji oraz pilnowanie zgodności działań ze strategią i celami biznesowymi.",
  },
  {
    question: "Jaki jest minimalny okres współpracy?",
    answer: "Minimalny okres stałej współpracy to 3 miesiące.",
  },
  {
    question: "Czy mogę rozpocząć bez wcześniejszej strategii?",
    answer:
      "Tak, jeśli firma prowadzi już działania marketingowe. W praktyce audyt i strategia przyspieszają efekty oraz ograniczają kosztowne błędy decyzyjne.",
  },
  {
    question: "Dla kogo ta współpraca nie jest odpowiednia?",
    answer:
      "Dla firm szukających wyłącznie wykonawcy, oczekujących stałej dostępności telefonicznej lub niegotowych do decyzji strategicznych.",
  },
];

const skills = [
  "Google Ads",
  "Google Analytics",
  "PPC",
  "SEM",
  "SEO",
  "E-commerce",
  "Social Media",
  "Email Marketing",
  "UX",
  "Copywriting",
  "Reporting",
];

function DotsGrid({ className }: { className?: string }) {
  return (
    <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {Array.from({ length: 36 }, (_, i) => (
        <circle key={i} cx={10 + (i % 6) * 20} cy={10 + Math.floor(i / 6) * 20} r="1.5" fill="currentColor" />
      ))}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <DotsGrid className="absolute top-32 right-12 text-line/60 hidden lg:block" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <p className="mono text-sm tracking-widest uppercase text-accent mb-4">
                Full Stack Digital Manager
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-[1.1] mb-6">
                Strategia, koordynacja i&nbsp;wyniki
                <span className="text-accent">.</span>
                <br />
                <span className="text-muted font-medium">
                  Bez etatu w zespole.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-2xl">
                Układam strategię, nadzoruję działania i łączę specjalistów w
                spójny proces. Jedna osoba odpowiedzialna za cały marketing
                digital, bez kosztu etatu.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Jeden właściciel procesu marketingowego",
                  "Decyzje oparte na danych, nie przeczuciach",
                  "Mniej chaosu, więcej priorytetów",
                ].map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-dark"
                  >
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-accent text-white font-medium px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-colors text-base"
                >
                  Umów konsultację
                </a>
                <a
                  href="#process"
                  className="border border-line text-dark font-medium px-7 py-3.5 rounded-xl hover:bg-surface transition-colors text-base"
                >
                  Zobacz proces
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-3xl -rotate-3" />
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-accent/20 rounded-2xl" />
                <Image
                  src="/piotr-sobczyk.jpg"
                  alt="Piotr Sobczyk"
                  width={300}
                  height={300}
                  className="relative rounded-2xl grayscale w-64 h-64 md:w-72 md:h-72 object-cover shadow-2xl shadow-dark/10"
                  priority
                />
                <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg shadow-dark/10 px-4 py-2.5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-dark">Dostępny</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Proof Bar */}
      <section className="py-12 bg-warm border-y border-line/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mono text-xs tracking-widest uppercase text-subtle text-center mb-6">
            Doświadczenie z firm i projektów
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {experience.map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-muted whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills strip */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="mono text-xs tracking-wide px-3 py-1.5 rounded-full border border-line text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section id="audience" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="mono text-sm tracking-widest uppercase text-accent mb-3">
              Dla kogo
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
              Dla firm, które potrzebują kierunku w digitalu
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {audience.map((item) => (
              <div
                key={item.title}
                className="group p-6 md:p-8 rounded-2xl border border-line bg-white hover:shadow-lg hover:shadow-dark/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section id="scope" className="relative py-20 md:py-28 px-6 bg-surface overflow-hidden">
        <DotsGrid className="absolute bottom-8 left-8 text-line/40 hidden lg:block" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-14">
            <p className="mono text-sm tracking-widest uppercase text-accent mb-3">
              Zakres
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
              Jasny podział odpowiedzialności
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-line">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark mb-6">
                Za co odpowiadam
              </h3>
              <ul className="space-y-4">
                {ownerItems.map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="text-dark">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-line">
              <div className="w-10 h-10 rounded-lg bg-line/60 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06A2.25 2.25 0 014.93 9.6l5.1-3.06a2.25 2.25 0 012.34 0l5.1 3.06a2.25 2.25 0 011.39 2.51l-5.1 3.06a2.25 2.25 0 01-2.34 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark mb-6">
                Co wykonują specjaliści
              </h3>
              <ul className="space-y-4">
                {specialistItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-subtle shrink-0" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-muted mt-8 text-sm">
            Jedna osoba odpowiada za kierunek i proces. Specjaliści odpowiadają
            za wykonanie.
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="mono text-sm tracking-widest uppercase text-accent mb-3">
              Proces
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
              Jak wygląda współpraca
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, i) => (
              <div key={item.step} className="relative group">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-6 h-px bg-line -translate-x-3" />
                )}
                <div className="p-6 rounded-2xl border border-line bg-white h-full hover:shadow-lg hover:shadow-dark/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={processIcons[i]} />
                    </svg>
                  </div>
                  <span className="mono text-xs font-bold text-accent/40 block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-base font-semibold text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 md:py-20 px-6 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/10 pointer-events-none" />
        <DotsGrid className="absolute top-4 right-8 text-white/10 hidden lg:block" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Porozmawiajmy o tym, jak uporządkować Twój marketing
          </h2>
          <p className="text-subtle text-lg mb-8">
            Bezpłatna konsultacja, konkretne wnioski, zero zobowiązań.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-dark font-medium px-8 py-4 rounded-xl hover:bg-accent-light transition-colors text-base"
          >
            Umów konsultację
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 px-6 bg-warm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="mono text-sm tracking-widest uppercase text-accent mb-3">
              Cennik
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
              Pakiety współpracy
            </h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-accent bg-white shadow-lg shadow-accent/10 ring-1 ring-accent/20"
                    : "border-line bg-white hover:shadow-lg hover:shadow-dark/5"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-6 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="text-base font-semibold text-dark mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-dark">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-muted ml-1">{pkg.period}</span>
                </div>
                <p className="text-sm text-muted mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.highlighted ? "text-accent" : "text-subtle"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-dark">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center font-medium py-3 rounded-xl transition-colors text-sm ${
                    pkg.highlighted
                      ? "bg-accent text-white hover:bg-accent-dark"
                      : "border border-line text-dark hover:bg-surface"
                  }`}
                >
                  Umów konsultację
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-subtle mt-8">
            Minimalny okres stałej współpracy: 3 miesiące. Pakiety obejmują
            koordynację i zarządzanie, nie stałą operacyjną obsługę kampanii.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="mono text-sm tracking-widest uppercase text-accent mb-3">
              Publikacje i rozmowy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
              Dzielę się wiedzą
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub) => (
              <a
                key={pub.title}
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-8 rounded-2xl border border-line bg-white hover:shadow-lg hover:shadow-dark/5 transition-all duration-300 flex gap-5"
              >
                <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${pub.type === "podcast" ? "bg-emerald-50 text-emerald-600" : "bg-accent/10 text-accent"}`}>
                  {pub.type === "podcast" ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="mono text-xs tracking-widest uppercase text-subtle">
                      {pub.source}
                    </p>
                    {pub.type === "podcast" && (
                      <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-medium">
                        Podcast
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-dark group-hover:text-accent transition-colors mb-2">
                    {pub.title}
                  </h3>
                  <span className="text-sm text-accent font-medium inline-flex items-center gap-1">
                    {pub.type === "podcast" ? "Słuchaj" : "Czytaj"}
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.getresponse.com/blog/authors/piotr-sobczyk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent-dark font-medium transition-colors inline-flex items-center gap-1"
            >
              Zobacz artykuły w GetResponse Blog
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="mono text-sm tracking-widest uppercase text-accent mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
              Najczęstsze pytania
            </h2>
          </div>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-line bg-white"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <span className="font-medium text-dark pr-4">
                    {item.question}
                  </span>
                  <span className="faq-icon text-subtle shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v12M6 12h12"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-muted leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 px-6 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="mono text-sm tracking-widest uppercase text-accent mb-3">
                Kontakt
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Porozmawiajmy o&nbsp;Twoim marketingu
              </h2>
              <p className="text-lg text-subtle leading-relaxed mb-10">
                Opisz swoją sytuację, a Piotr odpowie w ciągu 24 godzin z
                konkretnymi sugestiami.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:piotr@sobczyk.io"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-subtle uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-white font-medium group-hover:text-accent transition-colors">
                      piotr@sobczyk.io
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/piotrsobczyk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-subtle uppercase tracking-wider">
                      LinkedIn
                    </p>
                    <p className="text-white font-medium group-hover:text-accent transition-colors">
                      linkedin.com/in/piotrsobczyk
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-black/10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-dark border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-subtle">
            &copy; 2025 Piotr Sobczyk. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:piotr@sobczyk.io"
              className="text-sm text-subtle hover:text-white transition-colors"
            >
              piotr@sobczyk.io
            </a>
            <a
              href="https://www.linkedin.com/in/piotrsobczyk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-subtle hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
