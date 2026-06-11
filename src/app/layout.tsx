import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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

export const metadata: Metadata = {
  title: "Piotr Sobczyk — Full Stack Digital Manager",
  description:
    "Zewnętrzny Digital Marketing Manager dla firm, które potrzebują strategii, koordynacji, KPI i raportowania bez zatrudniania managera na etat.",
  metadataBase: new URL("https://sobczyk.io"),
  openGraph: {
    title: "Piotr Sobczyk — Full Stack Digital Manager",
    description:
      "Strategia, koordynacja i raportowanie digital marketingu dla firm B2B i SaaS.",
    url: "https://sobczyk.io",
    siteName: "Piotr Sobczyk",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Piotr Sobczyk — Full Stack Digital Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piotr Sobczyk — Full Stack Digital Manager",
    description:
      "Zewnętrzny Digital Marketing Manager dla firm B2B i SaaS.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://sobczyk.io" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Piotr Sobczyk",
      url: "https://sobczyk.io",
      email: "piotr@sobczyk.io",
      jobTitle: "Full Stack Digital Manager",
      sameAs: ["https://www.linkedin.com/in/piotrsobczyk/"],
      knowsAbout: [
        "Digital Marketing",
        "PPC",
        "SEO",
        "Google Analytics",
        "E-commerce",
        "Marketing Strategy",
      ],
    },
    {
      "@type": "ProfessionalService",
      name: "Piotr Sobczyk — Digital Marketing Management",
      url: "https://sobczyk.io",
      description:
        "Zewnętrzny Digital Marketing Manager dla firm B2B i SaaS.",
      provider: { "@type": "Person", name: "Piotr Sobczyk" },
      areaServed: "PL",
      priceRange: "6000–11000 PLN/miesiąc",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Czy mogę dzwonić w dowolnym momencie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Współpraca opiera się na ustalonym rytmie spotkań i komunikacji asynchronicznej. Dzięki temu decyzje są przemyślane, a nie podejmowane w trybie ciągłego gaszenia pożarów.",
          },
        },
        {
          "@type": "Question",
          name: "Czy realizujesz działania operacyjne?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nie jestem agencją ani wykonawcą operacyjnym. Moja rola to zarządzanie, koordynacja, priorytetyzacja i kontrola jakości działań realizowanych przez zespół klienta lub specjalistów.",
          },
        },
        {
          "@type": "Question",
          name: "Co oznacza koordynacja działań marketingowych?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ustalanie priorytetów, briefowanie zespołów, weryfikacja realizacji, spójność komunikacji oraz pilnowanie zgodności działań ze strategią i celami biznesowymi.",
          },
        },
        {
          "@type": "Question",
          name: "Jaki jest minimalny okres współpracy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minimalny okres stałej współpracy to 3 miesiące.",
          },
        },
        {
          "@type": "Question",
          name: "Czy mogę rozpocząć bez wcześniejszej strategii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak, jeśli firma prowadzi już działania marketingowe. W praktyce audyt i strategia przyspieszają efekty oraz ograniczają kosztowne błędy decyzyjne.",
          },
        },
        {
          "@type": "Question",
          name: "Dla kogo ta współpraca nie jest odpowiednia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dla firm szukających wyłącznie wykonawcy, oczekujących stałej dostępności telefonicznej lub niegotowych do decyzji strategicznych.",
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
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
