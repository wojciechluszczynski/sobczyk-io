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

const audience = [
  {
    title: "Specjaliści są, ale nikt ich nie spina",
    text: "SEO, Ads, social i content robią swoje osobno. Brakuje kogoś, kto ustali priorytety i poukłada to w jeden proces.",
    icon: "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z",
  },
  {
    title: "Zarząd pyta o wyniki, a nie o kliknięcia",
    text: "Raporty mają wspierać decyzje, a nie opowiadać o CTR. Piotr tłumaczy marketing na język biznesu.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "Działań dużo, a efektów nie widać",
    text: "Piotr porządkuje to, co naprawdę wpływa na sprzedaż, i odcina szum, który zjada budżet.",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
  },
  {
    title: "Etat managera to za dużo, za drogo",
    text: "Seniorowe wsparcie menedżerskie bez kosztów rekrutacji, onboardingu i pełnego etatu.",
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
  },
];

const ownerItems = [
  { text: "audyt i diagnoza stanu rzeczy", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { text: "strategia digital na najbliższe miesiące", icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" },
  { text: "roadmapa 90 dni z priorytetami", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
  { text: "KPI, budżety, priorytety", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
  { text: "nadzór nad specjalistami i agencjami", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
  { text: "raportowanie pod decyzje biznesowe", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
];

const specialistItems = [
  "SEO",
  "PPC / Google Ads / Meta Ads",
  "social media",
  "video i grafika",
  "copywriting",
  "marketing automation",
];

const processSteps = [
  {
    step: "01",
    title: "Rozmowa",
    text: "Krótka konsultacja o sytuacji, celach i tym, czy jest sens pracować razem.",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    step: "02",
    title: "Audyt",
    text: "Przeglądam kampanie, SEO, analitykę, kanały i komunikację. Szukam tego, co działa, i tego, co zjada budżet.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    step: "03",
    title: "Strategia",
    text: "Plan na 3-6 miesięcy: konkretne priorytety, KPI, budżety i roadmapa 90 dni.",
    icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
  },
  {
    step: "04",
    title: "Koordynacja",
    text: "Briefuję, nadzoruję i rozliczam zespół klienta albo zewnętrznych specjalistów.",
    icon: "M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495",
  },
  {
    step: "05",
    title: "Raporty",
    text: "Co 2 tygodnie spotkanie, raz w miesiącu raport z wnioskami i korektami kierunku.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
];

const packages = [
  {
    name: "Audyt i strategia 360",
    price: "7 000",
    period: "zł netto",
    description: "Prześwietlam cały marketing, oddaję gotową strategię i plan na 90 dni.",
    items: [
      "audyt strony, SEO, analityki, kampanii",
      "analiza konkurencji i rynku",
      "strategia digital na 6-12 miesięcy",
      "roadmapa 90 dni z priorytetami",
      "dokument z rekomendacjami",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Marketing Coordination",
    price: "6 000",
    period: "zł / miesiąc",
    description: "Spinam działania w jedną całość i pilnuję, żeby nic nie leciało obok.",
    items: [
      "koordynacja zespołu i podwykonawców",
      "briefowanie zadań i priorytetów",
      "weryfikacja jakości i spójności",
      "spotkanie statusowe raz w miesiącu",
      "miesięczne podsumowanie wniosków",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Growth Coordination",
    price: "8 000",
    period: "zł / miesiąc",
    badge: "Najczęściej wybierany",
    description: "Strategia, egzekucja i odpowiedzialność za wyniki. Jak własny Head of Digital.",
    items: [
      "rola zewnętrznego Head of Digital",
      "bieżąca optymalizacja strategii",
      "priorytetyzacja działań i budżetu",
      "spotkania co 2 tygodnie",
      "raport miesięczny z planem działań",
    ],
    highlighted: true,
  },
  {
    name: "Executive Coordination",
    price: "11 000",
    period: "zł / miesiąc",
    description: "Marketing zsynchronizowany z decyzjami zarządu. Pełna odpowiedzialność menedżerska.",
    items: [
      "pełna odpowiedzialność za digital",
      "zarządzanie budżetem i ROI",
      "skalowanie kanałów i testowanie nowych",
      "wsparcie przy decyzjach sprzedażowych",
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
    title: "Platformy e-commerce: jak wykorzystać ich potencjał",
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
    answer: "Współpraca opiera się na ustalonym rytmie spotkań i komunikacji asynchronicznej. Dzięki temu decyzje są przemyślane, a nie podejmowane w trybie gaszenia pożarów.",
  },
  {
    question: "Czy realizujesz kampanie, grafiki, treści?",
    answer: "Nie. Moja rola to zarządzanie, koordynacja i kontrola jakości. Działania operacyjne wykonuje zespół klienta lub zewnętrzni specjaliści, których nadzoruję.",
  },
  {
    question: "Co dokładnie oznacza koordynacja?",
    answer: "Ustalanie priorytetów, briefowanie zespołów, weryfikacja realizacji, pilnowanie spójności komunikacji i zgodności z celami biznesowymi.",
  },
  {
    question: "Jaki jest minimalny okres współpracy?",
    answer: "Pakiety stałe wymagają minimum 3 miesięcy. Audyt i strategia to jednorazowe zlecenie.",
  },
  {
    question: "Można zacząć bez strategii?",
    answer: "Tak, jeśli prowadzisz już działania marketingowe. W praktyce audyt i strategia przyspieszają efekty i ograniczają kosztowne błędy.",
  },
  {
    question: "Dla kogo ta współpraca nie jest?",
    answer: "Dla firm szukających wyłącznie wykonawcy, oczekujących stałej dostępności telefonicznej lub niegotowych do podejmowania decyzji strategicznych.",
  },
];

const skills = [
  "Google Ads", "Google Analytics", "PPC", "SEM", "SEO",
  "E-commerce", "Social Media", "Email Marketing",
  "UX", "Copywriting", "Reporting",
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 px-5 sm:px-6 overflow-hidden bg-dark grain">
        {/* Gradient mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none float-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none float-slower" />
        <div className="absolute top-20 left-8 w-[250px] h-[250px] dots-pattern opacity-10 pointer-events-none hidden lg:block" />
        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px'}} />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="mono text-xs tracking-[0.2em] uppercase text-accent mb-5">Piotr Sobczyk / Digital Manager</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white leading-[1.08] mb-6">
                Twój marketing ma specjalistów.{" "}<br className="hidden md:block" />
                Brakuje mu szefa<span className="text-accent">.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-10 max-w-xl">
                SEOwiec robi swoje, Adsowiec swoje, social swoje. Nikt tego nie spina, nie mierzy i nie rozlicza. Wchodzę jako zewnętrzny Head of Digital i zamieniam chaos w proces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/25 text-base"
                >
                  Porozmawiajmy
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center border border-white/15 text-white/70 font-medium px-7 py-3.5 rounded-xl hover:bg-white/5 hover:text-white transition-all text-base"
                >
                  Jak to działa?
                </a>
              </div>

              {/* KPI strip */}
              <div className="flex flex-wrap gap-10">
                {[
                  { num: "10+", label: "lat w digitalu" },
                  { num: "50+", label: "projektów" },
                  { num: "9", label: "branż" },
                ].map((kpi) => (
                  <div key={kpi.label}>
                    <p className="mono text-3xl font-bold text-white">{kpi.num}</p>
                    <p className="text-sm text-white/35">{kpi.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait + floating cards */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow behind portrait */}
                <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 via-accent/10 to-violet-500/10 rounded-3xl blur-2xl pointer-events-none" />
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-violet-500/20 rounded-2xl" />
                <Image
                  src="/piotr-sobczyk.jpg"
                  alt="Piotr Sobczyk"
                  width={300}
                  height={300}
                  className="relative rounded-2xl grayscale contrast-110 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover"
                  priority
                />
                {/* Floating card: role */}
                <div className="absolute -top-4 -right-4 sm:-right-8 bg-dark/80 backdrop-blur-xl rounded-xl px-4 py-2.5 border border-white/10 shadow-lg">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">Rola</p>
                  <p className="text-sm font-semibold text-white">Head of Digital</p>
                </div>
                {/* Floating card: skills */}
                <div className="absolute -bottom-5 -left-4 sm:-left-10 bg-dark/80 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-lg">
                  <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
                    {["PPC", "SEO", "Analytics", "Strategy"].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-xs font-medium text-white/80">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating metric */}
                <div className="absolute top-1/2 -right-3 sm:-right-14 -translate-y-1/2 bg-dark/80 backdrop-blur-xl rounded-lg px-3 py-2 border border-white/10 hidden sm:block">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    <span className="mono text-xs text-emerald-400 font-bold">+127%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience bar — marquee */}
      <section className="py-10 bg-surface border-y border-line/40 overflow-hidden">
        <p className="mono text-[10px] tracking-[0.2em] uppercase text-subtle text-center mb-5 px-5">
          Doświadczenie z firm i projektów
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee">
            {[...experience, ...experience].map((name, i) => (
              <span key={`${name}-${i}`} className="text-sm font-medium text-muted/60 whitespace-nowrap px-6 flex items-center gap-6">
                {name}
                <span className="w-1 h-1 rounded-full bg-line" />
              </span>
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
                <span key={skill} className="mono text-[11px] tracking-wide px-3 py-1.5 rounded-full border border-line text-muted hover:border-accent/30 hover:text-accent transition-colors">
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
          <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none float-slower" />
          <svg className="absolute top-16 left-8 text-accent/[0.06] hidden lg:block" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1" />
            <circle cx="40" cy="40" r="18" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="absolute bottom-0 right-12 w-[200px] h-[200px] dots-pattern opacity-20 pointer-events-none hidden lg:block" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-14">
              <p className="mono text-xs tracking-[0.2em] uppercase text-accent mb-3">Dla kogo</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
                Rozpoznajesz się w tym?
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                Pracuję z firmami, które wiedzą, że marketing jest ważny, ale nie mają kogoś, kto weźmie za niego odpowiedzialność.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {audience.map((item) => (
                <div key={item.title} className="group p-6 md:p-8 rounded-2xl border border-line bg-white hover:shadow-xl hover:shadow-dark/5 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-accent/8 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-dark mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Scope */}
      <ScrollReveal>
        <section id="scope" className="relative py-20 md:py-28 px-5 sm:px-6 bg-surface overflow-hidden grain">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/[0.15] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none float-slow" />
          <svg className="absolute top-12 right-10 text-accent/[0.06] hidden lg:block" width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="1" />
            <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="1" rx="4" />
          </svg>
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-14">
              <p className="mono text-xs tracking-[0.2em] uppercase text-accent mb-3">Zakres</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
                Jasny podział ról
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                Ja odpowiadam za kierunek i proces. Specjaliści za wykonanie.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-7 md:p-8 rounded-2xl bg-white border border-line">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-dark">Piotr odpowiada za</h3>
                </div>
                <ul className="space-y-3.5">
                  {ownerItems.map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <span className="text-sm text-dark">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-7 md:p-8 rounded-2xl bg-white border border-line">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-line/70 flex items-center justify-center">
                    <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-dark">Specjaliści wykonują</h3>
                </div>
                <ul className="space-y-3.5">
                  {specialistItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-subtle shrink-0" />
                      <span className="text-sm text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Process */}
      <ScrollReveal>
        <section id="process" className="relative py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl -translate-x-1/3 pointer-events-none float-slow" />
          <div className="absolute bottom-10 right-0 w-[350px] h-[350px] bg-violet-200/[0.06] rounded-full blur-3xl translate-x-1/4 pointer-events-none float-slower" />
          <div className="absolute top-20 right-16 w-[180px] h-[180px] dots-pattern opacity-20 pointer-events-none hidden lg:block" />
          <svg className="absolute bottom-16 left-10 text-accent/[0.05] hidden lg:block" width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
            <polygon points="30,5 55,50 5,50" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-14">
              <p className="mono text-xs tracking-[0.2em] uppercase text-accent mb-3">Proces</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
                Pięć kroków do porządku w marketingu
              </h2>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((item, i) => (
                <div key={item.step} className="relative group">
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-line to-transparent -translate-x-2 z-0" />
                  )}
                  <div className="relative p-5 rounded-2xl border border-line bg-white h-full hover:shadow-lg hover:shadow-dark/5 hover:-translate-y-0.5 transition-all duration-300 z-10">
                    <div className="w-9 h-9 rounded-lg bg-accent/8 flex items-center justify-center mb-3 group-hover:bg-accent transition-colors duration-300">
                      <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <span className="mono text-[10px] font-bold text-accent/30 block mb-1.5">{item.step}</span>
                    <h3 className="text-sm font-semibold text-dark mb-1.5">{item.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mid-page CTA */}
      <section className="py-16 md:py-20 px-5 sm:px-6 bg-dark relative overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none float-slow" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none float-slower" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Porozmawiajmy o tym, co da się poprawić
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Bezpłatna rozmowa, konkretne wnioski, zero zobowiązań.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-dark font-medium px-8 py-4 rounded-xl hover:bg-accent-light transition-all hover:shadow-lg text-base"
          >
            Umów konsultację
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Pricing */}
      <ScrollReveal>
        <section id="pricing" className="relative py-20 md:py-28 px-5 sm:px-6 bg-warm overflow-hidden grain">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/[0.2] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none float-slow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none float-slower" />
          <svg className="absolute bottom-20 right-8 text-accent/[0.06] hidden lg:block" width="90" height="90" viewBox="0 0 90 90" fill="none" aria-hidden="true">
            <rect x="5" y="5" width="80" height="80" rx="16" stroke="currentColor" strokeWidth="1" />
            <rect x="20" y="20" width="50" height="50" rx="10" stroke="currentColor" strokeWidth="1" />
            <rect x="35" y="35" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-14">
              <p className="mono text-xs tracking-[0.2em] uppercase text-accent mb-3">Cennik</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
                Cztery sposoby współpracy
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                Od jednorazowego audytu po pełną odpowiedzialność za digital.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                    pkg.highlighted
                      ? "border-accent bg-white shadow-xl shadow-accent/10 ring-1 ring-accent/20 scale-[1.02]"
                      : "border-line bg-white hover:shadow-lg hover:shadow-dark/5 hover:-translate-y-0.5"
                  }`}
                >
                  {pkg.badge && (
                    <span className="absolute -top-3 left-6 bg-accent text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-sm">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-sm font-semibold text-dark mb-3">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="mono text-3xl font-bold text-dark">{pkg.price}</span>
                    <span className="text-xs text-muted ml-1.5">{pkg.period}</span>
                  </div>
                  <p className="text-sm text-muted mb-5 leading-relaxed">{pkg.description}</p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <svg className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.highlighted ? "text-accent" : "text-subtle"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-dark/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`block text-center font-medium py-3 rounded-xl transition-all text-sm ${
                      pkg.highlighted
                        ? "bg-accent text-white hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
                        : "border border-line text-dark hover:bg-surface"
                    }`}
                  >
                    Wybieram
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-subtle mt-8">
              Minimum 3 miesiące stałej współpracy. Ceny nie obejmują obsługi operacyjnej kampanii.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Publications */}
      <ScrollReveal>
        <section id="publications" className="relative py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/3 -translate-x-1/4 pointer-events-none float-slower" />
          <div className="absolute top-16 right-12 w-[160px] h-[160px] dots-pattern opacity-15 pointer-events-none hidden lg:block" />
          <svg className="absolute bottom-12 left-8 text-accent/[0.05] hidden lg:block" width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">
            <circle cx="35" cy="35" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          </svg>
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-14">
              <p className="mono text-xs tracking-[0.2em] uppercase text-accent mb-3">Publikacje</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
                Piszę i rozmawiam o marketingu
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {publications.map((pub) => (
                <a
                  key={pub.title}
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl border border-line bg-white hover:shadow-lg hover:shadow-dark/5 hover:-translate-y-0.5 transition-all duration-300 flex gap-4"
                >
                  <div className={`w-11 h-11 rounded-xl shrink-0 flex items-center justify-center ${pub.type === "podcast" ? "bg-emerald-50 text-emerald-600" : "bg-accent/8 text-accent"}`}>
                    {pub.type === "podcast" ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="mono text-[10px] tracking-[0.15em] uppercase text-subtle mb-1.5">
                      {pub.source}
                      {pub.type === "podcast" && (
                        <span className="ml-2 text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] normal-case tracking-normal">podcast</span>
                      )}
                    </p>
                    <h3 className="text-sm font-semibold text-dark group-hover:text-accent transition-colors leading-snug">
                      {pub.title}
                    </h3>
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
                Artykuły w GetResponse Blog
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section id="faq" className="relative py-20 md:py-28 px-5 sm:px-6 bg-surface overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/[0.1] rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none float-slow" />
          <svg className="absolute top-10 left-6 text-accent/[0.05] hidden lg:block" width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
            <line x1="0" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="1" />
            <line x1="25" y1="0" x2="25" y2="50" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="max-w-3xl mx-auto relative">
            <div className="text-center mb-14">
              <p className="mono text-xs tracking-[0.2em] uppercase text-accent mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark">
                Często zadawane pytania
              </h2>
            </div>
            <div className="space-y-3">
              {faq.map((item) => (
                <details key={item.question} className="group rounded-2xl border border-line bg-white">
                  <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none">
                    <span className="font-medium text-dark pr-4 text-[15px]">{item.question}</span>
                    <span className="faq-icon text-subtle shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
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
      <section id="contact" className="py-20 md:py-28 px-5 sm:px-6 bg-dark relative overflow-hidden grain">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none float-slow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none float-slower" />
        <svg className="absolute bottom-8 right-8 text-white/[0.03] hidden lg:block" width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <rect x="10" y="10" width="100" height="100" rx="20" stroke="currentColor" strokeWidth="1" />
          <rect x="30" y="30" width="60" height="60" rx="12" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="mono text-xs tracking-[0.2em] uppercase text-accent mb-3">Kontakt</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Napisz, o czym chcesz porozmawiać
              </h2>
              <p className="text-lg text-white/50 leading-relaxed mb-10">
                Opisz sytuację w kilku zdaniach. Odpowiadam w ciągu 24 godzin z konkretnymi sugestiami.
              </p>
              <div className="space-y-5">
                <a href="mailto:piotr@sobczyk.io" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">Email</p>
                    <p className="text-white/90 font-medium group-hover:text-accent transition-colors">piotr@sobczyk.io</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/piotrsobczyk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">LinkedIn</p>
                    <p className="text-white/90 font-medium group-hover:text-accent transition-colors">linkedin.com/in/piotrsobczyk</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/20">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-5 sm:px-6 bg-dark border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 Piotr Sobczyk
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:piotr@sobczyk.io" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              piotr@sobczyk.io
            </a>
            <a href="https://www.linkedin.com/in/piotrsobczyk/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
