---
title: Rick and Morty Characters
layout: layout.liquid
pagination:
  data: characters
  size: 1
  alias: character
dog: false
permalink: "/characters/{{character.name | slug}}/"
---

# {{character.name}}

![{{character.name}}]({{character.image}})
