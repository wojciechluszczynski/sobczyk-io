# Edycja treści strony — instrukcja dla Piotrka

Cała treść strony **sobczyk.io** jest edytowalna w jednym panelu (Sanity Studio).
Nie ruszasz kodu, nie czekasz na nikogo — zmieniasz tekst, klikasz **Publish**,
i po chwili widać to na stronie.

---

## 1. Dane dostępowe (ściąga)

| Co | Wartość |
|---|---|
| **Panel do edycji** | https://sobczyk-io.sanity.studio |
| **Logowanie** | Twoje konto Sanity (Google / GitHub / e-mail) |
| **Nazwa projektu** | sobczyk.io |
| **Project ID** | `f89wvekz` |
| **Dataset** | `production` |
| **Strona (produkcja)** | https://sobczyk.io (tymczasowo: https://sobczykio.vercel.app) |
| **Panel administracyjny projektu** | https://www.sanity.io/manage/project/f89wvekz |

> **Zanim pierwszy raz wejdziesz:** musisz dostać **zaproszenie** do projektu.
> Wojciech robi to raz: panel administracyjny → *Members* → *Invite member* →
> wpisuje Twój e-mail. Dostaniesz mail z linkiem „Accept invite". Bez tego
> logowanie do panelu nie przepuści Cię do treści.

---

## 2. Pierwsze logowanie

1. Otwórz **link do panelu** (tabela wyżej).
2. Zaloguj się na swoje konto Sanity — **tym samym** adresem, na który przyszło
   zaproszenie. Najprościej „Continue with Google".
3. Po zalogowaniu zobaczysz edytor. Po lewej jest dokument z treścią strony
   (**Strona główna**). Kliknij go.

Jeśli zobaczysz komunikat o braku dostępu / „CORS" — to znaczy, że zaproszenie
nie zostało jeszcze zaakceptowane albo logujesz się innym adresem. Napisz do
Wojciecha.

---

## 3. Jak edytować

1. Otwórz dokument **Strona główna**.
2. Treść jest pogrupowana w sekcje (Hero, Cennik, FAQ, SEO itd.) — klikasz pole,
   zmieniasz tekst.
3. Gdy skończysz, klikasz **Publish** (prawy dolny róg).
4. Zmiana pojawia się na stronie **w ciągu ~1 minuty**. Nie trzeba żadnego
   „wgrywania" ani kontaktu z programistą.

**Wersje robocze:** dopóki nie klikniesz *Publish*, zmiany są tylko Twoim
szkicem — na żywej stronie nic się nie zmienia. Możesz spokojnie eksperymentować.

---

## 4. Co możesz zmieniać

- **Hero** — nagłówek, podtytuł, teksty przycisków, zdjęcie Piotra
- **Liczby / KPI** (np. „15+ lat w digitalu")
- **Sekcje treści** — „Dla kogo", „Zakres", „Jak pracuję", „Pierwsze 90 dni"
- **Cennik** — nazwy pakietów, ceny, opisy, punkty
- **FAQ** — pytania i odpowiedzi
- **Kontakt** — e-mail, link LinkedIn
- **Ikony** przy sekcjach — wybierasz z gotowej listy (z palety strony)
- **Logotypy firm** w pasku doświadczenia (możesz wgrać obrazek)
- **SEO** — tytuł i opis strony w Google, obrazek do udostępnień

---

## 5. Ważna zasada: puste pole = tekst domyślny

Każde pole, które zostawisz **puste**, automatycznie pokazuje **wbudowany
tekst** z projektu. Dzięki temu:

- nic nie zniknie ze strony, jeśli czegoś nie wypełnisz,
- możesz zmieniać tylko to, co chcesz, a resztę zostawić,
- nie da się „zepsuć" strony pustym polem.

Chcesz wrócić do oryginalnego tekstu? Wyczyść pole i opublikuj.

---

## 6. Logotypy firm (pasek doświadczenia)

W panelu, w sekcji doświadczenia, każda firma ma pole na **logo** — możesz wgrać
plik graficzny (SVG lub PNG). Jeśli nie wgrasz, pokaże się elegancki „badge" z
nazwą firmy. Czyli: brak logo nie psuje wyglądu.

---

## 7. Czego NIE musisz (i nie możesz) robić

- **Nie zmieniasz układu strony ani struktury pól** (dodanie/usunięcie pola,
  nowa sekcja) — to zmiana w kodzie. Jak będziesz czegoś takiego potrzebował,
  napisz do Wojciecha.
- **Nie martwisz się deployem** — publikacja treści idzie na stronę sama.

---

## Kontakt techniczny

Cokolwiek nie działa (logowanie, dostęp, zmiana której nie da się zrobić w
panelu) — **Wojciech**. To sprawy na kilka minut.

---

## Dla Wojciecha (utrzymanie — nie dotyczy Piotrka)

Panel edycji to **Sanity Studio hostowane przez Sanity**, a nie część aplikacji
Next.js. Strona jest czystym frontendem, który tylko **czyta** treść przez API.

Żeby panel w ogóle miał co edytować, schemat (pola, sekcje) musi być **wdrożony**
do projektu — sam pusty projekt Sanity pokazuje pusty panel. Schemat żyje w
`sanity.config.ts` + `src/sanity/schemaTypes/`.

```bash
# jednorazowe logowanie do Sanity
npx sanity login

# wdrożenie panelu na https://sobczyk-io.sanity.studio
npm run studio:deploy

# (alternatywnie) samo wdrożenie schematu bez budowania panelu
npm run schema:deploy

# lokalne uruchomienie panelu do testów
npm run studio:dev
```

Po każdej zmianie pól schematu w kodzie trzeba ponownie uruchomić
`npm run studio:deploy`, żeby panel zobaczył nowe pola. `projectId` (`f89wvekz`,
publiczny) jest wpięty na stałe w `src/sanity/env.ts`, więc strona czyta z Sanity
także bez ustawiania zmiennych środowiskowych na Vercelu.
