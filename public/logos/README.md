# Logotypy firm w pasku „Doświadczenie"

Pliki tu wrzucone pojawiają się automatycznie na żywej stronie — bez wchodzenia w panel.

## Konwencja nazewnictwa

Format: `<slug>.svg` (preferowane) lub `.webp` / `.png`.

Slug to identyfikator firmy z `src/app/page.tsx` (`defaultExperience`) albo z panelu Sanity (pole „Identyfikator").

Obecne sluge:

| Firma | Plik do wrzucenia |
| --- | --- |
| GetResponse | `getresponse.svg` |
| Patronite.pl | `patronite.svg` |
| Captains | `captains.svg` |
| Allcon Osiedla | `allcon-osiedla.svg` |
| Shoplyze | `shoplyze.svg` |
| Bright Future | `bright-future.svg` |
| OX Media | `ox-media.svg` |
| Apella S.A. | `apella.svg` |
| Wirtualna Polska | `wirtualna-polska.svg` |

## Kolejność źródeł

Render kaskaduje:

1. **Logo wgrane w panelu Sanity** (najwyższy priorytet — edytor podmienia bez programisty).
2. **`/logos/<slug>.svg`** w tym katalogu (drop-in dla deweloperów).
3. **Sam tekst nazwy** (gdy żadnego pliku nie ma — strona się nie psuje).

## Rozmiar i format

* Wysokość renderowana: ~24 px. SVG nieskończenie się skaluje, więc rozmiar źródłowy nie ma znaczenia.
* Dla rastrów: minimum 96 px wysokości (retina).
* Tło: przezroczyste. Pasek jest jasny (cream/paper) — czarne lub ciemne logo czytają się najlepiej.
* CSS już nakłada delikatny `grayscale` + opacity, które znika przy najechaniu — więc wrzucanie kolorowych logo jest OK.
