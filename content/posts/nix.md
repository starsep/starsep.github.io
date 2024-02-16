---
title: Nix
slug: nix
date: 2023-06-25T14:49:31+02:00
---

## What is Nix?
I recently started using Nix. It is a package manager and a build system. It uses its own functional programming language.
At the moment I use it only as a package manager. For years, I maintained Ansible playbook for setting up my development environments.
Nix allows to simplify it and eventually might even replace it.
Instead of installing software via apt/pipx/downloading binaries from GitHub I use Nix.

[Niv](https://github.com/nmattia/niv#getting-started) sounds interesting but I haven't tried it out yet.

##  Installing Nix
There any many ways to install `nix`. I decided to use `nix-installer` from DeterminateSystems.
1. Install nix via nix-installer: https://github.com/DeterminateSystems/nix-installer/releases/latest/download/nix-installer-x86_64-linux
2. Add `/nix/var/nix/profiles/default/bin` and `~/.nix-profile/bin` to `PATH`

## Install software package
`nix profile install nixpkgs#NAME`

## Remove software package
```
nix profile list # check number
nix profile remove 42 # number from the list
```

## Clean-up old packages
`nix-collect-garbage -d`

## Upgrade all packages that were installed using an unlocked flake reference
`nix profile upgrade '.*'`

## Installing directly from nixpkgs repo
```
cd pkgs/by-name/ex/example
nix-build -E 'with import <nixpkgs> {}; callPackage ./package.nix {}'
nix profile install $(readlink result)
```

## Some articles about Nix:
- Zero to Nix https://zero-to-nix.com/
- Some notes on using nix https://jvns.ca/blog/2023/02/28/some-notes-on-using-nix/
- How do Nix builds work? https://jvns.ca/blog/2023/03/03/how-do-nix-builds-work-/
- One Week of NixOS https://www.codyhiar.com/blog/one-week-of-nixos/
- Nix – taming Unix with functional programming https://tweag.io/blog/2022-07-14-taming-unix-with-nix/
- My First Impressions of Nix https://mtlynch.io/notes/nix-first-impressions/