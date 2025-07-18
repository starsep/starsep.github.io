downloadBgg:
	xh -d -o assets/boardgamegeek.csv 'https://boardgamegeek.com/geekcollection.php?action=exportcsv&subtype=boardgame&username=starsep&all=1&exporttype=csv'

serve:
    hugo serve
