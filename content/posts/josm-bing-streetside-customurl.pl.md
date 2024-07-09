---
title: "JOSM: Bing StreetSide za pomocą Utilsplugin2 => Open custom URL"
slug: josm-bing-custom-url
tags: ["OpenStreetMap"]
date: 2023-01-22T18:55:27+01:00
toc: false
---
Bing StreetSide to odpowiednik Google Street View, który można używać do mapowania w OpenStreetMap. 
Istnieje plugin MicrosoftStreetside do JOSMa, ale niestety u mnie nie działa ze względu zależność od JavaFX/widoki 360.

Poradziłem sobie za pomocą użycia pluginu Utilsplugin2. 

1. Edit => Preferences (F12) => Utilsplugin2 settings
2. Należy dodać nowy wiersz klikając z nazwą `Bing StreetSide` oraz url `https://www.bing.com/maps?cp={#lat}%7E{#lon}&lvl=19.0&style=x`.  
W razie problemów można edytować plik customurl.txt. Dla Linuksa z Flatpakiem jest on w `~/.var/app/org.openstreetmap.josm/data/JOSM/plugins/utilsplugin2/customurl.txt`. 
3. Należy wybrać `Bing StreetSide` w Data => Select custom URL
4. Teraz można otworzyć Bing StreetSide za pomocą Data => Open custom URL (Shift+H)

Jeżeli w danym miejscu jest dostępny StreetSide to zostanie otwarty. Jeżeli nie to otworzy się mapa z ulicami na niebiesko w miejscach, gdzie jest dostępny.

