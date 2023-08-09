---
title: "CLI"
slug: cli
date: 2023-08-09T21:35:26+02:00
---

## Intro
This is the list of CLI tools I found useful someday.
It is useful reference as remembering all script names and options is cumbersome.
Especially those I use rarely.

## ripgrep
[rg](https://github.com/BurntSushi/ripgrep) (ripgrep): great `grep` replacement.

Recursive search and respects .gitignore by default.

Possible to configure per repository with .rgignore

Useful options:
* `-i`: case **i**nsentive 
* `-v`: in**v**ert matching
* `-A n`(**a**fter), `-B n`(**b**efore), `-C n`(**c**ontext). `n` is number of lines
* `-u`, `-uu`, `-uuu`: **u**nrestricted searching with gitignored, hidden, and binary files
* `-l`: **l**ist files matching
* `-e`: patt**e**rn (regex) to search for. Useful when using multiple patterns
* `-o`: show **o**nly matching fragment

## sd
[sd](https://github.com/chmln/sd): sed alternative

Usage: `sd before after`

## jq
[jq](https://github.com/jqlang/jq): JSON command-line processor

Very powerful but it's difficult to get used to the syntax.

Basics:
- `.` (dot) is root
- `.[index]`: access array index
- `.key`: access key in object 
- `.[]`: array/object iterator

See https://jqlang.github.io/jq/manual/ for more

## gron
[gron](https://github.com/tomnomnom/gron): Make JSON greppable!

Example: `echo '{"foo": "bar", "a": {"b": 42}}' | gron`
```
json = {};
json.a = {};
json.a.b = 42;
json.foo = "bar";
```

## ncdu
[ncdu](https://dev.yorhel.nl/ncdu): NCurses Disk Usage

## Ultimate Plumber
[up](https://github.com/akavel/up): Ultimate Plumber is a tool for writing Linux pipes with instant live preview 
[![asciicast](https://asciinema.org/a/208538.svg)](https://asciinema.org/a/208538)

## lazygit
[lazygit](https://github.com/jesseduffield/lazygit): TUI git client
![lazygit.gif](https://github.com/jesseduffield/lazygit/raw/assets/demo/commit_and_push-compressed.gif)

## lazydocker
[lazydocker](): TUI for docker
![lazydocker.gif](https://github.com/jesseduffield/lazydocker/blob/master/docs/resources/demo3.gif?raw=true)

## gitui
[gitui](https://github.com/extrawurst/gitui): Similar to lazygit, TUI git client
![gitui.gif](https://github.com/extrawurst/gitui/raw/master/demo.gif)

## dive
[dive](https://github.com/wagoodman/dive): A tool for exploring each layer in a docker image 
![dive.gif](https://github.com/wagoodman/dive/raw/main/.data/demo.gif)

## HTTPie
[http](https://github.com/httpie/httpie) (HTTPie): command-line HTTP client
![httpie.gif](https://raw.githubusercontent.com/httpie/cli/master/docs/httpie-animation.gif)

## xh
[xh](https://github.com/ducaale/xh): HTTPie clone in Rust

[![asciicast](https://asciinema.org/a/475190.svg)](https://asciinema.org/a/475190)

## comm
comm: Unix utility to compare files by common and distinct lines
https://en.wikipedia.org/wiki/Comm

## fd
[fd](https://github.com/sharkdp/fd): `find` replacement

![fd.svg](https://github.com/sharkdp/fd/raw/master/doc/screencast.svg)

## bat
[bat](https://github.com/sharkdp/bat): `cat` replacement

![bat.png](https://camo.githubusercontent.com/7b7c397acc5b91b4c4cf7756015185fe3c5f700f70d256a212de51294a0cf673/68747470733a2f2f696d6775722e636f6d2f724773646e44652e706e67)

## hexyl
[hexyl](https://github.com/sharkdp/hexyl): A command-line hex viewer

![hexyl.png](https://camo.githubusercontent.com/585a9f1ed1828f21ba1d4faa2720627c649c73b0ba75cb98aacdf0ca300957eb/68747470733a2f2f692e696d6775722e636f6d2f4d574f3975534c2e706e67)

## rclone
[rclone](https://github.com/rclone/rclone): rsync for cloud storage

## topgrade
[topgrade](https://github.com/topgrade-rs/topgrade): A tool for automatic software (and more) upgrades

![topgrade.gif](https://github.com/topgrade-rs/topgrade/raw/master/doc/screenshot.gif)

## hadolint
[hadolint](https://github.com/hadolint/hadolint): Dockerfile linter

## shellcheck
[shellcheck](https://github.com/koalaman/shellcheck): Shell scripts linter

![shellcheck.png](https://github.com/koalaman/shellcheck/raw/master/doc/terminal.png)

## hey
[hey](https://github.com/rakyll/hey): HTTP load generator

Usage: `hey https://example.org/api/test`

Example output:
```
Summary:
  Total:	0.6848 secs
  Slowest:	0.4713 secs
  Fastest:	0.0267 secs
  Average:	0.1289 secs
  Requests/sec:	292.0483
  

Response time histogram:
  0.027 [1]	|■
  0.071 [64]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.116 [41]	|■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.160 [35]	|■■■■■■■■■■■■■■■■■■■■■■
  0.205 [16]	|■■■■■■■■■■
  0.249 [31]	|■■■■■■■■■■■■■■■■■■■
  0.293 [2]	|■
  0.338 [1]	|■
  0.382 [5]	|■■■
  0.427 [1]	|■
  0.471 [3]	|■■


Latency distribution:
  10% in 0.0384 secs
  25% in 0.0587 secs
  50% in 0.1089 secs
  75% in 0.1864 secs
  90% in 0.2285 secs
  95% in 0.3336 secs
  99% in 0.4677 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0131 secs, 0.0267 secs, 0.4713 secs
  DNS-lookup:	0.0071 secs, 0.0000 secs, 0.0439 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0007 secs
  resp wait:	0.0211 secs, 0.0088 secs, 0.0704 secs
  resp read:	0.0730 secs, 0.0073 secs, 0.3690 secs

Status code distribution:
  [200]	200 responses
```


