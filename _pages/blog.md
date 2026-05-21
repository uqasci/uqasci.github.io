---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 4
---

<div class="post">
  <div class="header-bar">
    <h1>Blog</h1>
    <h2>Reading group summaries, research reflections, and lab writing.</h2>
  </div>

  <ul class="post-list">
    {% assign postlist = site.posts | where_exp: "post", "post.categories contains 'blog'" %}
    {% for post in postlist %}
    {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    <li>
      <h3><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.description }}</p>
      <p class="post-meta">{{ read_time }} min read &nbsp;&middot;&nbsp; {{ post.date | date: '%B %d, %Y' }}</p>
    </li>
    {% endfor %}
  </ul>
</div>