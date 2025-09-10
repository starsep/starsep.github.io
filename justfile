# list available targets
list:
    just --list

# download data from BoardGameGeek
downloadBgg:
	xh -d -o assets/boardgamegeek.csv 'https://boardgamegeek.com/geekcollection.php?action=exportcsv&subtype=boardgame&username=starsep&all=1&exporttype=csv'

# serve website locally
serve:
    hugo serve
