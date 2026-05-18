---
layout: page
title: Theories & Measures
permalink: /theories/
description: A curated repository of theories, frameworks, and measurement scales used and recommended by the ASCI Lab.
nav: true
nav_order: 4
---

A living resource maintained by the ASCI Lab. We draw on theories and 
measures from cognitive science, social psychology, HCI, and AI research. 
This page is updated as we encounter and use new frameworks in our work.

<div class="theory-search-wrap">
  <input 
    type="text" 
    id="theorySearch" 
    placeholder="Search by keyword e.g. trust, scale, cognition..." 
    class="theory-search-input"
    onkeyup="filterTheories()"
  />
</div>

<p id="noResults" style="display:none; color:#888; font-style:italic;">
  No results found for that search term.
</p>

---

## Theories & Frameworks

<div class="theory-section">

  <div class="theory-card">
    <h4>Technology Acceptance Model (TAM)</h4>
    <p class="theory-meta">Davis, 1989 · Social Psychology / HCI</p>
    <p>A foundational model explaining how users come to accept and use 
    technology, centred on perceived usefulness and perceived ease of use. 
    Widely applied in human-AI interaction research to understand adoption 
    and engagement.</p>
    <div class="theory-links">
      <a href="https://doi.org/10.2307/249008" target="_blank">📄 Original Paper</a>
    </div>
  </div>

  <div class="theory-card">
    <h4>Social Identity Theory</h4>
    <p class="theory-meta">Tajfel & Turner, 1979 · Social Psychology</p>
    <p>Proposes that individuals derive part of their self-concept from 
    membership in social groups. Relevant to understanding how group 
    dynamics, identity, and intergroup processes shape behaviour and 
    decision-making in human-AI contexts.</p>
    <div class="theory-links">
      <a href="https://doi.org/10.1016/S0065-2601(08)60333-6" target="_blank">📄 Original Paper</a>
    </div>
  </div>

  <div class="theory-card">
    <h4>Dual Process Theory</h4>
    <p class="theory-meta">Kahneman, 2011 · Cognitive Science</p>
    <p>Distinguishes between fast, automatic System 1 thinking and slow, 
    deliberate System 2 reasoning. Highly relevant to understanding how 
    people process AI recommendations and explanations under varying 
    cognitive load and time pressure.</p>
    <div class="theory-links">
      <a href="https://us.macmillan.com/books/9780374533557/thinkingtfastandslow" target="_blank">📄 Reference</a>
    </div>
  </div>

  <div class="theory-card">
    <h4>Situational Awareness</h4>
    <p class="theory-meta">Endsley, 1988 · Cognitive Engineering</p>
    <p>A framework describing the perception, comprehension, and projection 
    of environmental elements within a volume of time and space. Applied 
    in human-AI teaming research to understand how AI assistance affects 
    operators' awareness of task states.</p>
    <div class="theory-links">
      <a href="https://doi.org/10.1177/154193128803200221" target="_blank">📄 Original Paper</a>
    </div>
  </div>

</div>

---

## Measurement Scales

<div class="theory-section">

  <div class="theory-card">
    <h4>Trust in Automation Scale</h4>
    <p class="theory-meta">Jian et al., 2000 · Human Factors</p>
    <p>A widely used 12-item scale measuring trust and distrust in automated 
    systems. Captures dimensions including reliability, dependability, faith, 
    and suspicion. Commonly used in human-AI decision-making studies.</p>
    <div class="theory-links">
      <a href="https://doi.org/10.1207/S15327566IJCE0401_04" target="_blank">📄 Original Paper</a>
    </div>
  </div>

  <div class="theory-card">
    <h4>NASA Task Load Index (NASA-TLX)</h4>
    <p class="theory-meta">Hart & Staveland, 1988 · Human Factors</p>
    <p>A multidimensional scale assessing perceived workload across six 
    dimensions: mental demand, physical demand, temporal demand, performance, 
    effort, and frustration. Frequently used to assess cognitive load in 
    AI-assisted task studies.</p>
    <div class="theory-links">
      <a href="https://doi.org/10.1016/S0166-4115(08)62386-9" target="_blank">📄 Original Paper</a>
    </div>
  </div>

  <div class="theory-card">
    <h4>Reliance Measures in AI-Assisted Decision-Making</h4>
    <p class="theory-meta">Schemmer et al., 2022 · Human-AI Interaction</p>
    <p>Operationalises appropriate reliance through behavioural metrics 
    including relative positive AI reliance (RPAR) and relative positive 
    self-reliance (RPSR), distinguishing appropriate from inappropriate 
    agreement with AI recommendations.</p>
    <div class="theory-links">
      <a href="https://doi.org/10.1145/3490099.3511152" target="_blank">📄 Original Paper</a>
    </div>
  </div>

  <div class="theory-card">
    <h4>System Usability Scale (SUS)</h4>
    <p class="theory-meta">Brooke, 1996 · HCI</p>
    <p>A simple, reliable 10-item scale for measuring usability of interactive 
    systems. Produces a single score from 0–100 representing overall usability. 
    A standard benchmark in HCI and interaction design research.</p>
    <div class="theory-links">
      <a href="https://www.taylorfrancis.com/chapters/edit/10.1201/9781498710411-35/sus-john-brooke" target="_blank">📄 Original Chapter</a>
    </div>
  </div>

</div>





<script>
function filterTheories() {
  const query = document.getElementById('theorySearch').value.toLowerCase();
  const cards = document.querySelectorAll('.theory-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(query)) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // Hide section headings if all cards below them are hidden
  document.querySelectorAll('.theory-section').forEach(section => {
    const visible = section.querySelectorAll('.theory-card[style="display: block;"]');
    section.style.display = visible.length === 0 ? 'none' : 'flex';
  });

  document.getElementById('noResults').style.display = 
    visibleCount === 0 ? 'block' : 'none';
}
</script>