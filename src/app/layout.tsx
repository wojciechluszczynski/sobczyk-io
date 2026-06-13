import type { Metadata } from "next";
import { Fraunces, DM_Sans, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
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

export const metadata: Metadata = {
  title: "Piotr Sobczyk — zewnętrzny Head of Digital",
  description:
    "Zamieniam dane z Twojego marketingu w decyzje i wzrost. Naprawiam pomiar i atrybucję, a potem prowadzę wzrost w 2-tygodniowych sprintach eksperymentów — bez kosztu etatu.",
  metadataBase: new URL("https://piotrsobczyk.pl"),
  openGraph: {
    title: "Piotr Sobczyk — zewnętrzny Head of Digital",
    description:
      "Dane → decyzje → wzrost. Zewnętrzny Head of Digital: naprawiam pomiar, ustalam priorytety na podstawie liczb i prowadzę wzrost w sprintach.",
    url: "https://piotrsobczyk.pl",
    siteName: "Piotr Sobczyk",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Piotr Sobczyk — zewnętrzny Head of Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piotr Sobczyk — zewnętrzny Head of Digital",
    description:
      "Dane → decyzje → wzrost. Zewnętrzny Head of Digital dla firm B2B i SaaS.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://piotrsobczyk.pl" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Piotr Sobczyk",
      url: "https://piotrsobczyk.pl",
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
      name: "Piotr Sobczyk — zewnętrzny Head of Digital",
      url: "https://piotrsobczyk.pl",
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
          name: "Czym się różnisz od koordynatora marketingu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Koordynator pilnuje, żeby zadania się działy. Ja zaczynam od danych: naprawiam pomiar, ustalam co realnie napędza wynik i prowadzę wzrost eksperymentami. Odpowiadam za liczby, nie za odhaczanie zadań.",
          },
        },
        {
          "@type": "Question",
          name: "Mam już agencję — po co mi jeszcze Ty?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Agencja wykonuje. Ja patrzę na całość, rozliczam ją z wyników i decyduję, gdzie iść z budżetem. Często jestem osobą, której brakuje między zarządem a agencją.",
          },
        },
        {
          "@type": "Question",
          name: "Czy mogę dzwonić, kiedy chcę?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pracujemy w ustalonym rytmie: sprinty co 2 tygodnie i komunikacja asynchroniczna. Dzięki temu decyzje są oparte na danych, a nie na gaszeniu pożarów.",
          },
        },
        {
          "@type": "Question",
          name: "Jaki jest minimalny okres współpracy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pakiety stałe ruszają bez długich zobowiązań — wyjście jest możliwe po pierwszym miesiącu. Audyt i strategia to jednorazowe zlecenie.",
          },
        },
        {
          "@type": "Question",
          name: "Nie mam specjalistów ani agencji. Co wtedy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wpuszczam sprawdzonych ludzi, z którymi pracuję. Ty masz jeden punkt kontaktu i jedną osobę odpowiedzialną za wynik.",
          },
        },
        {
          "@type": "Question",
          name: "Dla kogo ta współpraca nie jest odpowiednia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dla firm, które chcą tylko wykonawcy do zadań, nie chcą mierzyć efektów albo nie są gotowe podejmować decyzji na podstawie danych.",
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
