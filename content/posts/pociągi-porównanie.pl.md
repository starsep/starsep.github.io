---
title: "Porównanie czasu przejazdu pociągów z teoretycznym minimum"
slug: pociągi-porównanie
date: 2024-08-03T09:31:28+02:00
---

<style>r { color: Red } g { color: Green }</style>

W tym poście porównam czas przejazdu pociągów z czasem obliczonym przez [OpenRailRouting](https://routing.openrailrouting.org/).

Czas przejazdu jest obliczany na podstawie rozkładów jazdy.
Brane jest minimum z bezpośrednich połączeń z wybranego dnia.

Porównuję go z wynikiem z OpenRailRouting, który to mierzy czas przejazdu po 
najkrótszej trasie korzystając z danych z OpenStreetMap o infrastrukturze kolejowej.
Taki przejazd nie zawiera zatrzymań po drodze, co jest nierealne w praktyce dla większości tras.

## Warszawa do największych polskich miast

Z Warszawy Centralnej do głównych stacji.
Rozkład z poniedziałku, 2 września 2024.
We wrześniu 2024 wprowadzany jest nowy rozkład jazdy, który skraca czas przejazdu na niektórych trasach.

| Do               | Czas rozkładowy | Czas obliczony | Obliczony/rozkładowy |
|------------------|-----------------|----------------|----------------------|
| Kraków Główny    | [2:25][1]       | [2:14][11]     | <g>92%</g>           |
| Wrocław Główny   | [3:38][2]       | [3:18][12]     | <g>91%</g>           |
| Łódź Fabryczna   | [1:18][3]       | [1:00][13]     | <r>77%</r>           |
| Poznań Główny    | [2:19][4]       | [2:13][14]     | <g>96%</g>           |
| Gdańsk Główny    | [2:25][5]       | [2:27][15]     | <g>101%</g>          |
| Szczecin Główny  | [4:32][6]       | [4:01][16]     | 89%                  |
| Bydgoszcz Główna | [2:54][7]       | [2:21][17]     | 81%                  |
| Lublin Główny    | [1:45][8]       | [1:25][18]     | 81%                  |
| Białystok        | [2:01][9]       | [1:21][19]     | <r>67%</r>           |
| Katowice         | [2:29][10]      | [2:12][20]     | 89%                  |

[1]: https://koleo.pl/rozklad-pkp/warszawa-centralna/krakow-glowny/02-09-2024_04:00/direct/all--EIP-IC-TLK
[2]: https://koleo.pl/rozklad-pkp/warszawa-centralna/wroclaw-glowny/02-09-2024_04:00/direct/all--EIP-IC-TLK
[3]: https://koleo.pl/rozklad-pkp/warszawa-centralna/lodz-fabryczna/02-09-2024_04:00/direct/all--EIP-IC-TLK
[4]: https://koleo.pl/rozklad-pkp/warszawa-centralna/poznan-glowny/02-09-2024_04:00/direct/all--EIP-IC-TLK
[5]: https://koleo.pl/rozklad-pkp/warszawa-centralna/gdansk-glowny/02-09-2024_04:00/direct/all--EIP-IC-TLK
[6]: https://koleo.pl/rozklad-pkp/warszawa-centralna/szczecin-glowny/02-09-2024_04:00/direct/all--EIP-IC-TLK
[7]: https://koleo.pl/rozklad-pkp/warszawa-centralna/bydgoszcz-glowna/02-09-2024_04:00/direct/all--EIP-IC-TLK
[8]: https://koleo.pl/rozklad-pkp/warszawa-centralna/lublin-glowny/02-09-2024_04:00/direct/all--EIP-IC-TLK
[9]: https://koleo.pl/rozklad-pkp/warszawa-centralna/bialystok/02-09-2024_04:00/direct/all--EIP-IC-TLK
[10]: https://koleo.pl/rozklad-pkp/warszawa-centralna/katowice/02-09-2024_04:00/direct/all--EIP-IC-TLK

[11]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Krak%C3%B3w%20G%C5%82%C3%B3wny&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[12]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Wroc%C5%82aw%20G%C5%82%C3%B3wny&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[13]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=51.769556%2C19.469613&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[14]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Pozna%C5%84%20G%C5%82%C3%B3wny&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[15]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Gda%C5%84sk%20G%C5%82%C3%B3wny&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[16]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Szczecin%20G%C5%82%C3%B3wny&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[17]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Bydgoszcz%20G%C5%82%C3%B3wna&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[18]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Lublin%20G%C5%82%C3%B3wny&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[19]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=53.133628%2C23.135426&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[20]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=50.257598%2C19.017146&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto

W przypadku Gdańska Głównego czas obliczony jest dłuższy niż rozkładowy!
Sugeruje to, że algorytm nie jest idealny. 
Dodaje zbyt dużą karę za jakiś element trasy lub model prędkości pociągu nie jest optymalny.
Możliwe, że na jakimś odcinku jest wyższa prędkość maksymalna niż w danych.

## Warszawa do miejscowości turystycznych

Z Warszawy Centralnej do głównych stacji.
Rozkład jazdy wakacyjny z 31 sierpnia 2024.

| Do             | Czas rozkładowy | Czas obliczony | Obliczony/rozkładowy |
|----------------|-----------------|----------------|---------------------|
| Zakopane       | [4:46][21]      | [4:12][31]     | 88%                 |
| Sopot          | [2:42][22]      | [2:35][32]     | <g>96%</g>          |
| Ustka          | [5:32][23]      | [3:56][33]     | 71%                 |
| Hajnówka       | [3:02][24]      | [1:53][34]     | <r>62%</r>          |
| Gdynia Główna  | [2:51][25]      | [2:41][35]     | <g>94%</g>          |
| Toruń Główny   | [2:16][26]      | [1:53][36]     | 83%                 |
| Kołobrzeg      | [5:30][27]      | [4:54][37]     | 89%                 |
| Świnoujście    | [6:59][28]      | [4:49][38]     | <r>69%</r>          |
| Jelenia Góra   | [5:35][29]      | [4:47][39]     | 86%                 |
| Olsztyn Główny | [2:24][30]      | [1:52][40]     | 78%                 |


[21]: https://koleo.pl/rozklad-pkp/warszawa-centralna/zakopane/31-08-2024_04:00/direct/all--EIP-IC-TLK
[22]: https://koleo.pl/rozklad-pkp/warszawa-centralna/sopot/31-08-2024_04:00/direct/all--EIP-IC-TLK
[23]: https://koleo.pl/rozklad-pkp/warszawa-centralna/ustka/31-08-2024_04:00/direct/all--EIP-IC-TLK
[24]: https://koleo.pl/rozklad-pkp/warszawa-centralna/hajnowka/31-08-2024_04:00/direct/all--EIP-IC-TLK
[25]: https://koleo.pl/rozklad-pkp/warszawa-centralna/gdynia-glowna/31-08-2024_04:00/direct/all--EIP-IC-TLK
[26]: https://koleo.pl/rozklad-pkp/warszawa-centralna/torun-glowny/31-08-2024_04:00/direct/all--EIP-IC-TLK
[27]: https://koleo.pl/rozklad-pkp/warszawa-centralna/kolobrzeg/31-08-2024_04:00/direct/all--EIP-IC-TLK
[28]: https://koleo.pl/rozklad-pkp/warszawa-centralna/swinoujscie/31-08-2024_04:00/direct/all--EIP-IC-TLK
[29]: https://koleo.pl/rozklad-pkp/warszawa-centralna/jelenia-gora/31-08-2024_04:00/direct/all--EIP-IC-TLK
[30]: https://koleo.pl/rozklad-pkp/warszawa-centralna/olsztyn-glowny/31-08-2024_04:00/direct/all--EIP-IC-TLK
[31]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=49.300701%2C19.962797&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[32]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=54.440053%2C18.562297&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[33]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=54.578246%2C16.862163&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[34]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=52.733553%2C23.583484&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[35]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Gdynia%20G%C5%82%C3%B3wna&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[36]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Toru%C5%84%20G%C5%82%C3%B3wny&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[37]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=54.182198%2C15.570889&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[38]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=53.904177%2C14.265667&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[39]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=50.902603%2C15.755982&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[40]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Olsztyn%20G%C5%82%C3%B3wny&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto

## Warszawa do europejskich stolic
Wszytkie połączenia z Warszawy Centralnej.

Rozkład z Deutsche Bahn z 2 września 2024.
Niestety nie znam polskiej strony do wyszukiwania połaczeń PKP, która działa poprawnie i obsługuje połączenia międzynarodowe.
| Do                | Czas rozkładowy | Czas obliczony | Obliczony/rozkładowy |
|-------------------|-----------------|----------------|---------------------|
| Berlin Hbf        | [5:05][41]      | [4:14][47]     | 83%                 |
| Praga Hl.n.       | [8:14][42]      | [5:57][48]     | 72%                 |
| Wiedeń Hbf        | [7:29][43]      | [5:25][49]     | 72%                 |
| Budapeszt Nyugati | [11:25][44]     | [6:55][50]     | <r>61%</r>          |
| Bratysława Hl.st. | [8:40][45]      | [5:24][51]     | <r>62%</r>          |
| Wilno             | [8:44][46]      | [5:00][52]     | <r>57%</r>          |

[41]: https://int.bahn.de/en/buchung/fahrplan/suche#sts=true&so=Warszawa%20Centralna&zo=Berlin%20Hbf&kl=2&r=13:16:KLASSENLOS:1&soid=A%3D1%40O%3DWarszawa%20Centralna%40X%3D21003233%40Y%3D52228864%40U%3D80%40L%3D5100065%40B%3D1%40p%3D1722460835%40i%3DU%C3%97005103360%40&zoid=A%3D1%40O%3DBerlin%20Hbf%40X%3D13369549%40Y%3D52525589%40U%3D80%40L%3D8011160%40B%3D1%40p%3D1722460835%40i%3DU%C3%97008065969%40&sot=ST&zot=ST&soei=5100065&zoei=8011160&hd=2024-09-02T04:32:31&hza=D&hz=%5B%5D&ar=false&s=true&d=true&vm=00,01,02,03,04,05,06,07,08,09&fm=false&bp=false
[42]: https://int.bahn.de/en/buchung/fahrplan/suche#sts=true&so=Warszawa%20Centralna&zo=Prag%20Hbf&kl=2&r=13:16:KLASSENLOS:1&soid=A%3D1%40O%3DWarszawa%20Centralna%40X%3D21003233%40Y%3D52228864%40U%3D80%40L%3D5100065%40B%3D1%40p%3D1722460835%40i%3DU%C3%97005103360%40&zoid=A%3D1%40O%3DPrag%20Hbf%40X%3D14436038%40Y%3D50083058%40U%3D80%40L%3D5400014%40B%3D1%40p%3D1722460835%40i%3DU%C3%97005457076%40&sot=ST&zot=ST&soei=5100065&zoei=5400014&hd=2024-09-02T04:32:31&hza=D&hz=%5B%5D&ar=false&s=true&d=true&vm=00,01,02,03,04,05,06,07,08,09&fm=false&bp=false
[43]: https://int.bahn.de/en/buchung/fahrplan/suche#sts=true&so=Warszawa%20Centralna&zo=Wien%20Hbf&kl=2&r=13:16:KLASSENLOS:1&soid=A%3D1%40O%3DWarszawa%20Centralna%40X%3D21003233%40Y%3D52228864%40U%3D80%40L%3D5100065%40B%3D1%40p%3D1722460835%40i%3DU%C3%97005103360%40&zoid=A%3D1%40O%3DWien%20Hbf%40X%3D16377114%40Y%3D48185103%40U%3D80%40L%3D8103000%40B%3D1%40p%3D1722460835%40i%3DU%C3%97008101003%40&sot=ST&zot=ST&soei=5100065&zoei=8103000&hd=2024-09-02T04:32:31&hza=D&hz=%5B%5D&ar=false&s=true&d=true&vm=00,01,02,03,04,05,06,07,08,09&fm=false&bp=false
[44]: https://int.bahn.de/en/buchung/fahrplan/suche#sts=true&so=Warszawa%20Centralna&zo=BUDAPEST&kl=2&r=13:16:KLASSENLOS:1&soid=A%3D1%40O%3DWarszawa%20Centralna%40X%3D21003233%40Y%3D52228864%40U%3D80%40L%3D5100065%40B%3D1%40p%3D1722460835%40i%3DU%C3%97005103360%40&zoid=A%3D1%40O%3DBUDAPEST%40X%3D19054084%40Y%3D47519551%40U%3D80%40L%3D5596001%40B%3D1%40p%3D1722460835%40i%3DU%C3%97005510009%40&sot=ST&zot=ST&soei=5100065&zoei=5596001&hd=2024-09-02T04:32:31&hza=D&hz=%5B%5D&ar=false&s=true&d=true&vm=00,01,02,03,04,05,06,07,08,09&fm=false&bp=false
[45]: https://int.bahn.de/en/buchung/fahrplan/suche#sts=true&so=Warszawa%20Centralna&zo=Bratislava%20hl.st.&kl=2&r=13:16:KLASSENLOS:1&soid=A%3D1%40O%3DWarszawa%20Centralna%40X%3D21003233%40Y%3D52228864%40U%3D80%40L%3D5100065%40B%3D1%40p%3D1722460835%40i%3DU%C3%97005103360%40&zoid=A%3D1%40O%3DBratislava%20hl.st.%40X%3D17106463%40Y%3D48158908%40U%3D80%40L%3D5600207%40B%3D1%40p%3D1722460835%40i%3DU%C3%97005613206%40&sot=ST&zot=ST&soei=5100065&zoei=5600207&hd=2024-09-02T04:32:31&hza=D&hz=%5B%5D&ar=false&s=true&d=true&vm=00,01,02,03,04,05,06,07,08,09&fm=false&bp=false
[46]: https://int.bahn.de/en/buchung/fahrplan/suche#sts=true&so=Warszawa%20Centralna&zo=Vilnius(LT)&kl=2&r=13:16:KLASSENLOS:1&soid=A%3D1%40O%3DWarszawa%20Centralna%40X%3D21003233%40Y%3D52228864%40U%3D80%40L%3D5100065%40B%3D1%40p%3D1722460835%40i%3DU%C3%97005103360%40&zoid=A%3D1%40O%3DVilnius(LT)%40X%3D25284562%40Y%3D54669966%40U%3D80%40L%3D2400008%40B%3D1%40p%3D1722460835%40i%3DU%C3%97002412000%40&sot=ST&zot=ST&soei=5100065&zoei=2400008&hd=2024-09-02T04:32:31&hza=D&hz=%5B%5D&ar=false&s=true&d=true&vm=00,01,02,03,04,05,06,07,08,09&fm=false&bp=false
[47]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Berlin%20Hbf&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[48]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Praha%20hl.n.&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[49]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Wien%20Hbf&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[50]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Budapest%20Nyugati&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[51]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Bratislava%20hl.st.&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[52]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=54.669879%2C25.284745&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto


## Warszawa do innych miast województwa mazowieckiego

Z Warszawy Centralnej lub Śródmieścia do głównych stacji.
Rozkład z 2 września 2024.

To porównanie należy traktować najmniej poważnie.
Wiele miast jest w aglomeracji warszawskiej i głównie są obługiwane koleją aglomeracyjną.
Niewiele zmienia jeden szybki pociąg, który akurat się w danej miejscowości zatrzymuje.
Dużo ważniejsza od prędkości przejazdu będzie dobra oferta.

| Do               | Czas rozkładowy | Czas obliczony | Obliczony/rozkładowy |
|------------------|-----------------|----------------|----------------------|
| Radom Główny     | [1:03][53]      | [0:49][64]     | 78%                  |
| Płock            | [2:01][54]      | [1:35][65]     | 70%                  |
| Siedlce          | [1:02][55]      | [0:42][66]     | <r>68%</r>           |
| Pruszków         | [0:22][56]      | [0:09][67]     | <r>41%</r>           |
| Legionowo        | [0:20][57]      | [0:15][68]     | 75%                  |
| Ostrołęka        | [1:41][58]      | [1:24][69]     | 83%                  |
| Piaseczno        | [0:21][59]      | [0:15][70]     | 71%                  |
| Otwock           | [0:27][60]      | [0:20][71]     | 74%                  |
| Ciechanów        | [0:49][61]      | [0:45][72]     | <g>92%</g>           |
| Żyrardów         | [0:24][62]      | [0:20][73]     | 83%                  |
| Mińsk Mazowiecki | [0:29][63]      | [0:21][74]     | 72%                  |


[53]: https://koleo.pl/rozklad-pkp/warszawa-centralna/radom-glowny/02-09-2024_04:00/direct/all--EIP-IC-TLK
[54]: https://koleo.pl/rozklad-pkp/warszawa-centralna/plock/02-09-2024_04:00/direct/all--EIP-IC-TLK
[55]: https://koleo.pl/rozklad-pkp/warszawa-centralna/siedlce/02-09-2024_04:00/direct/all--EIP-IC-TLK
[56]: https://koleo.pl/rozklad-pkp/warszawa-srodmiescie/pruszkow/02-09-2024_04:00/direct/all--EIP-IC-TLK
[57]: https://koleo.pl/rozklad-pkp/warszawa-centralna/legionowo/02-09-2024_04:00/direct/all--EIP-IC-TLK
[58]: https://koleo.pl/rozklad-pkp/warszawa-srodmiescie/ostroleka/03-08-2024_12:00/direct/all--IC-KM
[59]: https://koleo.pl/rozklad-pkp/warszawa-centralna/piaseczno/02-09-2024_04:00/direct/all--EIP-IC-TLK
[60]: https://koleo.pl/rozklad-pkp/warszawa-centralna/otwock/02-09-2024_04:00/direct/all--EIP-IC-TLK
[61]: https://koleo.pl/rozklad-pkp/warszawa-centralna/ciechanow/02-09-2024_04:00/direct/all--EIP-IC-TLK
[62]: https://koleo.pl/rozklad-pkp/warszawa-centralna/zyrardow/02-09-2024_04:00/direct/all--EIP-IC-TLK
[63]: https://koleo.pl/rozklad-pkp/warszawa-centralna/minsk-mazowiecki/02-09-2024_04:00/direct/all--EIP-IC-TLK
[64]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=Radom%20G%C5%82%C3%B3wny&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[65]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=52.552741%2C19.712702&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[66]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=52.161725%2C22.271937&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[67]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=52.168237%2C20.798895&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[68]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=52.40145%2C20.941572&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[69]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=53.056137%2C21.617113&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[70]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=52.066475%2C21.017318&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[71]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=52.109509%2C21.262965&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[72]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=52.883463%2C20.59127&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[73]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=52.052497%2C20.448947&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto
[74]: https://routing.openrailrouting.org/maps/?point=Warszawa%20Centralna&point=52.175879%2C21.552209&locale=en-US&elevation=false&profile=all_tracks&use_miles=false&layer=OSM%20Carto