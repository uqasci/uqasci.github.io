---
layout: default
permalink: /news/
title: News
nav: true
nav_order: 3
---

<div class="post">
  <div class="header-bar">
    <h1>News</h1>
    <h2>Conference appearances, awards, and lab updates.</h2>
  </div>

  <ul class="post-list">
    {% assign postlist = site.posts | where_exp: "post", "post.categories contains 'news'" %}
    {% for post in postlist %}
    <li>
      <h3><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{% if post.description %}{{ post.description }}{% else %}{{ post.content | strip_html | truncatewords: 30 }}...{% endif %}</p>
      <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
    </li>
    {% endfor %}
  </ul>
</div>
