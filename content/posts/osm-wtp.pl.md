---
title: "Porównanie danych OSM z Warszawskim Transportem Publicznym"
slug: osm-wtp
date: 2023-01-07T19:48:56+01:00
tags: ["OpenStreetMap", "Warszawa", "OpenSource"]
---

## Wprowadzenie 
Stworzyłem stronę https://starsep.com/osm-wtp/. Można na niej znaleźć porównanie danych [OpenStreetMap](https://openstreetmap.org)
transportu publicznego aglomeracji warszawskiej z danymi [Warszawskiego Transportu Publicznego](https://wtp.waw.pl).
Głównym celem jest możliwość łatwego znalezienia błędów oraz brakujących danych.
Porównuję dla każdego wariantu linii listę przystanków.
Dodatkowo znajdowana jest część błędów związanych z tagowaniem w OpenStreetMap.

## Treść strony
Na górze znajduje się lista linii. Dla linii z błędem wyświetla się link z &#10060;.

{{< image src="/img/osm-wtp/lines2.png" >}}

Dla linii z błędami wyświetlone są tabelki porównujące nazwy i numery przystanków z OSM i WTP.
Kolory oznaczają, co należy zrobić w OSM, aby doprowadzić do stanu z WTP: zielony dodać przystanki,
czerwony usunąć, pomarańczowy zmienić. W nagłówku są przydatne linki.

{{< image src="/img/osm-wtp/error.png" >}}

Na dole strony można znaleźć inne błędy oraz statystyki generowania.

## Dane
Dla każdej relacji `type=route` dodałem tag `url` do strony WTP z rozkładem tego wariantu linii.

Przykładowy link: https://wtp.waw.pl/rozklady-jazdy/?wtp_md=3&wtp_ln=166&wtp_dr=A&wtp_vr=1
Argumenty:
- wtp_md=3 oznacza rozkład z listą przystanków
- wtp_ln=166 to numer linii 166
- wtp_dr=A to kierunek linii A/B
- wtp_vr=1 to numer wariantu linii w danym kierunku. Na stronie są one oznaczone literami A/B

Do porównania listy przystanków wykorzystywane są numery przystanków (tag `ref`).
W WTP numery przystanków mają sześć cyfr, gdzie pierwsze cztery oznaczają numer zespołu przystanków,
a dwie ostatnie numer przystanku w zespole.
Dodatkowo wyświetlane są nazwy (tag `name`).

Problemem był brak linku do ostatniego przystanku na stronie WTP.
Wyświetla się tylko nazwa, a nie są one unikalne w aglomeracji warszawskiej. 

## Inne narzędzia
Aglomeracja warszawska jest skonfigurowana w [PTNA Public Transport Network Analysis](https://ptna.openstreetmap.de/).
Dobrym źródłem jest [GTFS Warsaw](https://mkuran.pl/gtfs/warsaw.zip), który też można znaleźć w powyższym narzędziu.
Jest także sporo narzędzi Quality Assurance, które znajdują błędy w relacjach transportu publicznego.

## Szczegóły techniczne
- Strona jest hostowana za pomocą [GitHub Pages](https://pages.github.com/).
- Kod można znaleźć na [GitHubie](https://github.com/starsep/osm-wtp-compare).
- Wygenerowany HTML jest w osobnym [repozytorium](https://github.com/starsep/osm-wtp).
- Skrypt jest zaimplementowany w [Pythonie](https://python.org).
- Ze względu na wydajność używam [PyPy](https://pypy.org) 3.9.
- HTML generowany jest za pomocą [Jinja2](https://jinja.palletsprojects.com).
- Używam styli [SimpleCSS](https://simplecss.org/).
Pozwalają na generowanie prostego HTMLa i wspierają jasny/ciemny motyw bez JavaScriptu.
- Generowanie uruchamiam za pomocą [GitHub Actions](https://github.com/features/actions).
Chwilowo jest to 3 razy na dobę wieczorem. Mogę też uruchomić ręcznie z komputera lub na GitHubie. 
- Dane z WTP (chwilowo HTML stron) są cache'owane.
Dzięki temu kolejne uruchomienia danej doby są już dużo szybsze.
- Dane OpenStreetMap pobierane są z Overpassa z [relacji komunikacji WTP](https://osm.org/relation/3652280).

## Plany na przyszłość
1. Naprawić dane w OSM dzięki temu narzędziu.
2. Zrobić refaktor kodu. Aktualnie jest to skrypt bez sensownego podziału na funkcje i bez testów.
3. (być może) Testy poprawności geometrii relacji 
m. in. czy punkty zatrzymań są częściami odcinków dróg, spójność geometrii, 
czy platformy są po prawej stronie. Takie testy robią inne narzędzia.
4. To podejście może dać się zastosować dla innych miast.

Ten artykuł można też znaleźć na https://osm.org/user/starsep/diary/400699




