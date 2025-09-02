---
title: "Collections"
permalink: /collections/
layout: archive
author_profile: true
---

{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
  <h2 id="{{ tag[0] | slugify }}">{{ tag[0] | capitalize }}</h2>
  <ul>
    {% for post in tag[1] %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>({{ post.date | date: "%b %d, %Y" }})</small>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
