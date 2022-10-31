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
  <h1 class="title text-center font-weight-bold">Anthony Platanios</h1>
  <div class="row mt-3 mb-3">
    <div class="col-sm-6">
      <h6 class="mt-1 text-left text-sm-right" style="font-stretch: ultra-condensed;">
        <a style="color: rgb(60, 72, 88);" href="http://www.ml.cmu.edu/" target="_blank">Principal Researcher</a><br/>
        <a style="color: rgb(60, 72, 88);" href="http://www.cs.cmu.edu/" target="_blank">Semantic Machines</a><br/>
        <a style="color: rgb(60, 72, 88);" href="http://www.cmu.edu/" target="_blank">Microsoft</a>
      </h6>
    </div>
    <div class="col-sm-6">
      <h6 class="mt-1 text-left text-sm-left" style="font-stretch: ultra-condensed;">
        Berkeley Way West, Floor 7<br/>
        1919 Shattuck Ave<br/>
        Berkeley, CA, 94704
      </h6>
    </div>
  </div>
</div>

<!-- Introduction -->

<div class="col text-justify p-0">
  I am a Principal Researcher at <a href="https://www.microsoft.com/en-us/research/project/semantic-machines/" target="_blank">Microsoft Semantic Machines</a>, working at the intersection of Machine Learning and
  Natural Language Processing. I am currently leading a team working on a project related to user behavior modeling that cannot yet be shared publicly. Previously, I designed and shipped a contextual
  semantic parser that powers the Semantic Machines conversational AI platform. I also worked on other related research projects leading to multiple academic publications.
  <br/><br/>
  Prior to this, I was a PhD student in the <a href="http://www.ml.cmu.edu/" target="_blank">Machine Learning Department</a> of the <a href="https://www.scs.cmu.edu/" target="_blank">School of Computer Science</a> at <a href="http://www.cmu.edu/" target="_blank">Carnegie Mellon University</a>. My advisor was <a href="http://www.cs.cmu.edu/~tom/" target="_blank">Tom Mitchell</a> and I worked on <a href="http://rtw.ml.cmu.edu/rtw/" target="_blank">Never-Ending Learning</a>. My PhD thesis on learning collections of functions can be found <a href="{{ '/assets/pdf/thesis/thesis.pdf' | prepend: site.baseurl }}" target="_blank">here</a>. Throughout my PhD I also worked on <a href="{{ '/projects/' }}">multiple other projects</a> related to artificial intelligence and machine learning.
  <br/><br/>
  Before I joined CMU, I graduated with an M.Eng. in <a href="http://www.imperial.ac.uk/electrical-engineering" target="_blank">Electrical and Electronic Engineering</a> from <a href="https://www.imperial.ac.uk/" target="_blank">Imperial College London</a>. For my Master's thesis I proposed a way to use topic modelling methods in order to perform human motion classification.
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
