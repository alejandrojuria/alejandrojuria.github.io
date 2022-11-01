---
layout: page
permalink: /publications/
title: publications
nav: publications
description: <span>*</span> denotes equal contribution and joint lead authorship.
years: [2022, 2017]
---

{% for y in page.years %}
  <div class="row m-0 p-0" style="border-bottom: 1px solid #ddd;">
    <div class="col-sm-11 p-0">
      {% bibliography -f papers -q @*[year={{y}}]* %}
    </div>
    <div class="col-sm-1 align-self-end mt-2 p-0 pr-1">
      <h3 class="bibliography-year">{{y}}</h3>
    </div>
  </div>
{% endfor %}
