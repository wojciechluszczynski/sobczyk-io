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
  },
  {
    title: "Zarząd chce widzieć liczby, nie listę zadań",
    text: "Raportowanie ma wspierać decyzje biznesowe, a nie wymagać klikania po panelach reklamowych.",
  },
  {
    title: "Marketing robi dużo, ale nie wiadomo, co naprawdę działa",
    text: "Piotr porządkuje KPI, budżety, kanały i odpowiedzialność za wyniki.",
  },
  {
    title: "Nie chcecie zatrudniać managera na etat",
    text: "Otrzymujecie seniorowe wsparcie menedżerskie bez kosztu i ryzyka pełnego etatu.",
  },
];

const ownerItems = [
  "audyt i diagnoza",
  "strategia digital",
  "roadmapa 90 dni",
  "KPI i priorytety",
  "nadzór nad specjalistami",
  "raportowanie menedżerskie",
];

const specialistItems = [
  "SEO",
  "PPC / Google Ads / Meta Ads",
  "social media",
  "video",
  "grafika",
  "marketing automation",
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

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto">
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
                <div className="absolute -inset-4 bg-accent/5 rounded-3xl -rotate-3" />
                <Image
                  src="/piotr-sobczyk.jpg"
                  alt="Piotr Sobczyk"
                  width={300}
                  height={300}
                  className="relative rounded-2xl grayscale w-64 h-64 md:w-72 md:h-72 object-cover"
                  priority
                />
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
                className="p-6 md:p-8 rounded-2xl border border-line bg-white hover:shadow-lg hover:shadow-dark/5 transition-all duration-300"
              >
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
      <section id="scope" className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
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
              <h3 className="text-lg font-semibold text-dark mb-6">
                Za co odpowiadam
              </h3>
              <ul className="space-y-4">
                {ownerItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-line">
              <h3 className="text-lg font-semibold text-dark mb-6">
                Co wykonują specjaliści
              </h3>
              <ul className="space-y-4">
                {specialistItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-line shrink-0" />
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
              <div key={item.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-6 h-px bg-line -translate-x-3" />
                )}
                <div className="p-6 rounded-2xl border border-line bg-white h-full">
                  <span className="mono text-2xl font-bold text-accent/20 block mb-3">
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
                className="group p-6 md:p-8 rounded-2xl border border-line bg-white hover:shadow-lg hover:shadow-dark/5 transition-all duration-300 block"
              >
                <div className="flex items-center gap-2 mb-3">
                  <p className="mono text-xs tracking-widest uppercase text-subtle">
                    {pub.source}
                  </p>
                  {pub.type === "podcast" && (
                    <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                      Podcast
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-dark group-hover:text-accent transition-colors mb-3">
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
      <section id="contact" className="py-20 md:py-28 px-6 bg-dark">
        <div className="max-w-6xl mx-auto">
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
