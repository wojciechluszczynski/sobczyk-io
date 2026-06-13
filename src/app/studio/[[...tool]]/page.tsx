import type { Metadata } from "next";
import { hasSanity } from "@/sanity/env";
import StudioClient from "./studio-client";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Panel — sobczyk.io",
  robots: { index: false, follow: false },
};

// /studio renders the embedded Sanity Studio when a project is connected.
// Before that, it shows a short setup notice so the route exists but is safe.
export default function StudioPage() {
  if (!hasSanity) return <SetupNotice />;
  return <StudioClient />;
}

function SetupNotice() {
  return (
    <main className="min-h-screen bg-[var(--paper)] px-6 py-16 text-[var(--ink)]">
      <div className="mx-auto max-w-2xl rounded-2xl border-2 border-[var(--ink)] bg-white p-8 shadow-[6px_6px_0_0_var(--ink)]">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--ink)]/60">
          Panel edycji
        </p>
        <h1 className="mt-2 font-serif text-3xl leading-tight">
          Panel jest gotowy — czeka tylko na podpięcie konta.
        </h1>
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--ink)]/80">
          <p>
            Cała warstwa edycji (schematy treści, edytor, podpięcie strony) jest
            wdrożona. Aby uruchomić panel, potrzebny jest darmowy projekt Sanity
            i jedna zmienna środowiskowa:
          </p>
          <ol className="ml-4 list-decimal space-y-2">
            <li>
              Załóż konto na{" "}
              <a
                href="https://www.sanity.io/manage"
                className="underline decoration-[var(--accent)] decoration-4 underline-offset-4"
              >
                sanity.io/manage
              </a>{" "}
              i utwórz nowy projekt (plan Free).
            </li>
            <li>
              W projekcie skopiuj <code className="rounded bg-[var(--ink)]/5 px-1.5 py-0.5 font-mono text-[13px]">Project ID</code>.
            </li>
            <li>
              W Vercel → Settings → Environment Variables dodaj{" "}
              <code className="rounded bg-[var(--ink)]/5 px-1.5 py-0.5 font-mono text-[13px]">
                NEXT_PUBLIC_SANITY_PROJECT_ID
              </code>{" "}
              i zapisz tam Project ID.
            </li>
            <li>Zrób redeploy — panel pod /studio pojawi się sam.</li>
          </ol>
          <p className="text-[13px] text-[var(--ink)]/60">
            Dopóki to nie zostanie zrobione, strona główna działa bez zmian —
            wszystkie teksty są wczytywane z kodu jako fallback.
          </p>
        </div>
      </div>
    </main>
  );
}
