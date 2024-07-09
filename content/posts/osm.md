---
title: "OpenStreetMap Software Projects"
date: 2024-07-09T20:52:32+02:00
toc: false
tags: ["OpenStreetMap", "OpenSource"]
---

I've been contributing to OpenStreetMap for a few years now.
Basically it's a map that anyone can edit: Wikipedia for maps.

I maintain a few software projects related to OpenStreetMap:
- [openaedmap-frontend](https://github.com/openstreetmap-polska/openaedmap-frontend):
  * frontend of [OpenAEDMap](https://openaedmap.org) project
  * it's a worldwide map of automated external defibrillators
  * data comes from OpenStreetMap
  * users can add new AEDs directly on our website
- [osm-wtp-compare](https://github.com/starsep/osm-wtp-compare)
  * hosted at https://starsep.com/osm-wtp/
  * compares public transport data from Warsaw Transport Authority with OpenStreetMap
  * it's a tool for finding errors and missing data in public transport data
  * more details in [this blog post (only in Polish)](https://starsep.com/pl/posts/osm-wtp/)
- [NextbikeOSM](https://github.com/starsep/NextbikeOSM/), [RooveeOSM](https://github.com/starsep/RooveeOSM), and [MevoOSM](https://github.com/starsep/MevoOSM)
  * tools for comparing bike-sharing data with OpenStreetMap: Nextbike, Roovee, and Mevo respectively
  * forked from [javnik36/NextbikeOSM](https://github.com/javnik36/NextbikeOSM)
  * hosted at https://starsep.com/NextbikeOSM/, https://starsep.com/RooveeOSM/, and https://starsep.com/MevoOSM/
  * planned to be merged into one tool - they share a lot of code
- [StreetCompleteStats](https://github.com/starsep/StreetCompleteStats)
  * tool for generating statistics for quest for [StreetComplete](https://wiki.openstreetmap.org/wiki/StreetComplete) - mobile editor for OpenStreetMap
  * currently used only for cities in Poland
  * hosted at https://starsep.com/StreetCompleteStats/
- [mapaUMWarszawa2GeoJSON](https://github.com/starsep/mapaUMWarszawa2GeoJSON)
  * hosted at https://starsep.com/mapaUMWarszawa2GeoJSON/
  * converts data from [mapa.um.warszawa.pl](https://mapa.um.warszawa.pl) to GeoJSON
  * can compare data with OpenStreetMap and remove possible duplicates by distance
- [Warszawskie dane rowerowe](https://github.com/openstreetmap-polska/Warszawskie_dane_rowerowe)
  * data provided by the city of Warsaw about cycling infrastructure
  * script for comparing data with OpenStreetMap
- [gtfs-tczew](https://github.com/starsep/gtfs-tczew)
  * tool for generating public transportation data in Tczew to [GTFS](https://gtfs.org/) format
  * compares data with OpenStreetMap


All these projects are open-source.
Most of them are static websites regularly re-generated with scripts.