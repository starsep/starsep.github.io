---
title: "Projekty związane z OpenStreetMap"
date: 2024-07-09T20:52:32+02:00
toc: false
tags: ["OpenStreetMap", "OpenSource"]
---

Od kilku lat współtworzę OpenStreetMap.
To w skrócie mapa, którą każdy może edytować: Wikipedia dla map.

Utrzymuję kilka projektów związanych z OpenStreetMap:
- [openaedmap-frontend](https://github.com/openstreetmap-polska/openaedmap-frontend):
  * frontend projektu [OpenAEDMap](https://openaedmap.org)
  * mapa automatycznych defibrylatorów zewnętrznych (AED) na całym świecie
  * dane pochodzą z OpenStreetMap
  * użytkownicy mogą dodawać nowe AED bezpośrednio na naszej stronie
- [osm-wtp](https://github.com/starsep/osm-wtp)
  * dostępny na https://starsep.com/osm-wtp/
  * porównuje dane z Warszawskiego Transportu Publicznego z OpenStreetMap
  * narzędzie do znajdowania błędów i braków w danych transportu publicznego
  * więcej szczegółów w [tym poście](https://starsep.com/pl/posts/osm-wtp/)
- [NextbikeOSM](https://github.com/starsep/NextbikeOSM/), [RooveeOSM](https://github.com/starsep/RooveeOSM) i [MevoOSM](https://github.com/starsep/MevoOSM)
  * narzędzia do porównywania danych systemów rowerów miejskich z OpenStreetMap: Nextbike, Roovee i Mevo
  * fork [javnik36/NextbikeOSM](https://github.com/javnik36/NextbikeOSM)
  * dostępne na https://starsep.com/NextbikeOSM/, https://starsep.com/RooveeOSM/ i https://starsep.com/MevoOSM/
  * planowane połączenie w jedno narzędzie - współdzielą dużo kodu
- [StreetCompleteStats](https://github.com/starsep/StreetCompleteStats)
  * narzędzie do generowania statystyk dla zadań w [StreetComplete](https://wiki.openstreetmap.org/wiki/Pl:StreetComplete) - mobilnego edytora OpenStreetMap
  * aktualnie tylko dla miast w Polsce
  * dostępny na https://starsep.com/StreetCompleteStats/
- [mapaUMWarszawa2GeoJSON](https://github.com/starsep/mapaUMWarszawa2GeoJSON)
  * dostępny na https://starsep.com/mapaUMWarszawa2GeoJSON/
  * konwertuje dane z [mapa.um.warszawa.pl](https://mapa.um.warszawa.pl) do formatu GeoJSON
  * porównuje dane z OpenStreetMap i usuwa prawdopodobne duplikaty na podstawie odległości
- [Warszawskie dane rowerowe](https://github.com/openstreetmap-polska/Warszawskie_dane_rowerowe)
  * dane udostępniane przez miasto Warszawa o infrastrukturze rowerowej
  * skrypt do porównywania danych z OpenStreetMap
- [gtfs-tczew](https://github.com/starsep/gtfs-tczew)
  * narzędzie do generowania danych transportu publicznego w Tczewie do formatu [GTFS](https://gtfs.org/)
  * porównuje dane z OpenStreetMap


Wszystkie te projekty są open-source.
Większość z nich to strony statyczne regularnie generowane za pomocą skryptów.