---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 3
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}
  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
{% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
  <br>
  <div class="container featured-posts">
    {% assign is_even = featured_posts.size | modulo: 2 %}
    <div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
      {% for post in featured_posts %}
        {% include blog/featured_card.liquid post=post %}
      {% endfor %}
    </div>
  </div>
  <hr>
{% endif %}

<ul class="post-list">
  {% if page.pagination.enabled %}
    {% assign postlist = paginator.posts %}
  {% else %}
    {% assign postlist = site.posts %}
  {% endif %}
  {% for post in postlist %}
    {% include blog/list_item.liquid post=post %}
  {% endfor %}
</ul>

{% if page.pagination.enabled %}
  {% include pagination.liquid %}
{% endif %}

</div>