import type { Metadata } from "next";
import { Fraunces, DM_Sans, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/SmoothScroll";
import { getLandingPage } from "@/sanity/landingPage";
import { urlForImage } from "@/sanity/image";
import { hasSanity } from "@/sanity/env";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Bazowy adres strony. Domyślnie produkcyjna domena, ale można nadpisać przez
// env var, np. tymczasowy adres .vercel.app, zanim sobczyk.io zostanie
// podpięta do DNS.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sobczyk.io";

const DEFAULT_TITLE = "Piotr Sobczyk, zewnętrzny Head of Digital";
const DEFAULT_DESCRIPTION =
  "Zamieniam dane z Twojego marketingu w decyzje i wzrost. Naprawiam pomiar i atrybucję, a potem prowadzę wzrost w 2-tygodniowych sprintach eksperymentów, bez kosztu etatu.";

// SEO meta is editable in the Sanity-hosted Studio (group "SEO / metadane").
// Until an editor fills the fields the defaults above are used, so the
// existing meta never breaks.
export async function generateMetadata(): Promise<Metadata> {
  const sanity = await getLandingPage();
  const title = sanity?.seoTitle ?? DEFAULT_TITLE;
  const description = sanity?.seoDescription ?? DEFAULT_DESCRIPTION;
  const ogImage =
    urlForImage(sanity?.seoOgImage)?.width(1200).height(630).fit("crop").url() ??
    "/og-image.jpg";

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: "Piotr Sobczyk",
      locale: "pl_PL",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
    alternates: { canonical: SITE_URL },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Piotr Sobczyk",
      url: SITE_URL,
      email: "piotr@sobczyk.io",
      jobTitle: "Head of Digital Marketing",
      sameAs: ["https://www.linkedin.com/in/piotrsobczyk/"],
      knowsAbout: [
        "Digital Marketing",
        "Google Analytics 4",
        "Atrybucja marketingowa",
        "Eksperymenty wzrostowe",
        "PPC",
        "SEO",
        "E-commerce",
        "Marketing Strategy",
      ],
    },
    {
      "@type": "ProfessionalService",
      name: "Piotr Sobczyk, zewnętrzny Head of Digital",
      url: SITE_URL,
      description:
        "Zewnętrzny Head of Digital dla firm B2B i SaaS. Naprawiam pomiar i atrybucję, a potem prowadzę wzrost w 2-tygodniowych sprintach eksperymentów.",
      provider: { "@type": "Person", name: "Piotr Sobczyk" },
      areaServed: "PL",
      priceRange: "8500–12500 PLN",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Czym różnisz się od „zewnętrznego marketera” czy koordynatora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dwiema rzeczami. Po pierwsze: zanim cokolwiek zoptymalizuję, naprawiam pomiar. Bez tego każda decyzja to zgadywanie. Po drugie: pracuję w sprintach eksperymentów, więc co dwa tygodnie zapada decyzja „skalujemy albo wycinamy”, a nie „działamy dalej”.",
          },
        },
        {
          "@type": "Question",
          name: "Czy robisz kampanie, grafiki, treści?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nie. Odpowiadam za kierunek, pomiar i wynik. Wykonują specjaliści: Twoi albo moi podwykonawcy, których briefuję i rozliczam.",
          },
        },
        {
          "@type": "Question",
          name: "Mam już agencję / specjalistów. Po co mi jeszcze Ty?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Właśnie wtedy jestem najbardziej potrzebny. Agencja ocenia sama siebie własnymi raportami. Ja jestem po Twojej stronie stołu: weryfikuję na danych, czy to, za co płacisz, faktycznie zarabia.",
          },
        },
        {
          "@type": "Question",
          name: "Czy mogę dzwonić w dowolnym momencie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pracujemy w rytmie sprintów i komunikacji asynchronicznej. Stan marketingu widzisz w każdej chwili w dashboardzie, nie musisz dzwonić, żeby wiedzieć, co się dzieje. Ale wszystko jest kwestią dogadania.",
          },
        },
        {
          "@type": "Question",
          name: "Jaki jest minimalny okres współpracy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "3 miesiące, tyle trwa cykl: naprawa pomiaru, eksperymenty, skalowanie. Po pierwszym miesiącu możesz spokojnie wyjść bez konsekwencji.",
          },
        },
        {
          "@type": "Question",
          name: "Dla kogo to NIE jest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dla firm szukających wykonawcy „od postów”, oczekujących efektów bez budżetu albo takich, które nie chcą wiedzieć, ile naprawdę kosztuje ich klient.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${fraunces.variable} ${dmSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Preconnect to Sanity CDN when connected — shaves ~150ms off first
            image byte once the editor uploads a real portrait / company logo. */}
        {hasSanity ? (
          <>
            <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="" />
            <link rel="dns-prefetch" href="https://cdn.sanity.io" />
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
