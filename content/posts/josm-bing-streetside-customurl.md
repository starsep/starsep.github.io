---
title: "JOSM: Bing StreetSide with Utilsplugin2 => Open custom URL"
slug: josm-bing-custom-url
tags: ["OpenStreetMap"]
date: 2023-01-22T18:55:27+01:00
toc: false
---
Bing StreetSide is alternative to Google Street View which can be used for OpenStreetMap mapping.
There is a MicrosoftStreetside plugin for JOSM but it doesn't work for me due to dependencies of JavaFX/360 views.

I have managed to use it via Utilsplugin2.

1. Edit => Preferences (F12) => Utilsplugin2 settings
2. Add new row with name `Bing StreetSide` and url `https://www.bing.com/maps?cp={#lat}%7E{#lon}&lvl=19.0&style=x`.  
In the case of issues one can edit customurl.txt. For Linux/Flatpak it's located at `~/.var/app/org.openstreetmap.josm/data/JOSM/plugins/utilsplugin2/customurl.txt`. 
3. Choose  `Bing StreetSide` in Data => Select custom URL
4. Now you can see Bing StreetSide via Data => Open custom URL (Shift+H)

If StreetSide is available at given location it will be displayed. Otherwise map is shown with streets colored blue where it's available.
