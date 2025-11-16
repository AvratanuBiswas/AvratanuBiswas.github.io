---
layout: archive
title: "Publications - Avratanu Biswas"
permalink: /publications/
excerpt: "Peer-reviewed publications in biophysics, photosynthesis, and cyanobacteria research. 10+ papers on energy transfer and spectroscopy."
description: "Academic publications by Avratanu Biswas on photosynthesis, excitation energy transfer, cyanobacteria, and biophysical spectroscopy. Published in leading journals during PhD research."
author_profile: true
robots: noindex, follow
sitemap: false
---

{% if site.author.googlescholar %}
  You can also find my articles on <u><a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

<!-- <h2>Journal Articles</h2> -->
{% for post in site.publications reversed %}
  {% if post.pubtype == 'journal' %}
      {% include archive-single.html %}
  {% endif %}
{% endfor %}

<!-- <h2>Conference Papers</h2>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'conference' %}
      {% include archive-single.html %}
  {% endif %}
{% endfor %}

<h2>Academic</h2>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'academic' %}
      {% include archive-single.html %}
  {% endif %}
{% endfor %} -->

