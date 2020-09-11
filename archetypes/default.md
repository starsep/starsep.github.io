---
title: "{{ replace .Name "-" " " | title }}"
slug: {{ substr .Name 3 }}
date: {{ .Date }}
draft: true
---

