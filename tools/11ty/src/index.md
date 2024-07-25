---
title: Welcome to the Blog
permalink: /
layout: layout.liquid
pagination:
  data: collections.projects
  size: 2
  alias: projects
---

{%- for projects in collections.projects -%}

- [{{projects.data.title}}]({{projects.url}})

{% endfor %}

You should read it!


{% if pagination.href.previous %}[previous]({{ pagination.href.previous}}){% endif %}
{% if pagination.href.next %}[next]({{ pagination.href.next}}){% endif %}