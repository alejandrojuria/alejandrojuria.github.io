---
layout: page
permalink: /
title: about
nav: about
---

<div class="text-center mt-5">
  <img class="profile-img" src="{{ 'prof_pic.jpg' | prepend: '/assets/img/' | prepend: site.baseurl }}">
</div>

<div class="col mt-4">
  <h1 class="title text-center font-weight-bold">Alejandro José Uría</h1>
  <div class="row mt-3 mb-3">
    <div class="col-sm-6">
      <h6 class="mt-1 text-left text-sm-right" style="font-stretch: ultra-condensed;">
        <a style="color: rgb(60, 72, 88);" target="_blank">PhD Student</a><br/>
        <a style="color: rgb(60, 72, 88);" href="http://www.fmc.uam.es/" target="_blank">Condensed Matter Physics</a><br/>
        <a style="color: rgb(60, 72, 88);" href="http://www.uam.es/" target="_blank">UAM</a>
      </h6>
    </div>
    <div class="col-sm-6">
      <h6 class="mt-1 text-left text-sm-left" style="font-stretch: ultra-condensed;">
        Module 3, office 516<br/>
        C/ Francisco Tomás y Valiente, 7<br/>
        28049, Madrid, Spain
      </h6>
    </div>
  </div>
</div>

<!-- Introduction -->

<div class="col text-justify p-0">
  I am a Ph.D. student in condensed matter theory at <a href="https://www.uam.es/" target="_blank">Universidad Autónoma de Madrid</a>, advised by <a href="https://sites.google.com/site/palaciosjuanjose/" target="_blank">Juan José Palacios</a>. Currently, one of my research interests is the topological characterization of disordered materials via analytical techniques and machine learning. The other one is quantum few-body physics and its relation with the optical absorption spectrum of solids.
  More generally, I am interested in scientific computation, software development and the application of artificial intelligence to physics. In this regard, I have developed software packages and libraries for my research topics, which are freely available. 
  <br/><br/>
  Before I started my Ph.D., I worked as a R&D engineer for <a href="https://corporate.arcelormittal.com/about/research-and-development" target="_blank">ArcelorMittal</a>, where I focused on 3d printing process automatization and physical simulations of alloys. My background is that of Physics and Mathematics, although I have been doing some tinkering with computers from a young age. My undergrad thesis was also about topological insulators, under the supervision of <a href="https://scholar.google.com/citations?user=0Iqb9h8AAAAJ&hl=en" target="_blank">Jaime Ferrer</a>.

  <br/><br/>
  As a hobbyist, unexpectedly I am into any technological-looking topic. I used to fly racing drones, and was looking to get into aeromodelling. This also spreads to my readings, since I particularly enjoy sci-fi, together with fantasy books. As for more outdoor activities, I dig freediving and hiking, or drinking some cider.
</div>

<!-- News -->
<div class="news mt-3 p-0">
  <h1 class="title mb-4 p-0">news</h1>
  {% assign news = site.news | reverse %}
  {% for item in news limit: site.news_limit %}
    <div class="row p-0">
      <div class="col-sm-2 p-0">
        <span class="badge danger-color-dark font-weight-bold text-uppercase align-middle date ml-3">
          {{ item.date | date: "%b %-d, %Y" }}
        </span>
      </div>
      <div class="col-sm-10 mt-2 mt-sm-0 ml-3 ml-md-0 p-0 font-weight-light text">
        <p>{{ item.content | remove: '<p>' | remove: '</p>' | emojify }}</p>
      </div>
    </div>
  {% endfor %}
</div>
