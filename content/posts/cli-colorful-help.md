---
title: "CLI Colorful Help"
slug: cli-colorful-help
date: 2025-11-21T21:49:59+01:00
---

## Colors are great!

I love when command-line programs use colors in their output.

Colored output is more readable, makes important details pop, and simply looks nicer.

I spend a lot of time in the terminal and appreciate such modern UX improvements.

I wish more tools would color their `--help` output.

Let's share some examples.

## Examples
<!--
for x in biome bun cargo dog freeze just ruff uv urlencode taplo typos statix; do
    echo "### $x\n{{< image src=\"/img/cli-help/$x.png\" >}}";
done
-->
### biome
{{< image src="/img/cli-help/biome.png" >}}
### bun
{{< image src="/img/cli-help/bun.png" >}}
### cargo
{{< image src="/img/cli-help/cargo.png" >}}
### dog
{{< image src="/img/cli-help/dog.png" >}}
### freeze
{{< image src="/img/cli-help/freeze.png" >}}
### just
{{< image src="/img/cli-help/just.png" >}}
### ruff
{{< image src="/img/cli-help/ruff.png" >}}
### uv
{{< image src="/img/cli-help/uv.png" >}}
### urlencode
{{< image src="/img/cli-help/urlencode.png" >}}
### taplo
{{< image src="/img/cli-help/taplo.png" >}}
### typos
{{< image src="/img/cli-help/typos.png" >}}
### statix
{{< image src="/img/cli-help/statix.png" >}}

## How were screenshots generated?
I used [freeze](https://github.com/charmbracelet/freeze) command.

`freeze --theme monokai --execute "$program --help" --font.size 4 --padding 1 -o $program.png`

I optimized PNG sizes using [oxipng](https://github.com/oxipng/oxipng).
