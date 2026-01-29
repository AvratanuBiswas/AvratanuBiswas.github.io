---
layout: archive
permalink: /
excerpt: "Growth Engineer at Riff building analytics and experimentation systems. PhD in Biophysics from VU Amsterdam. Based in Oslo, Norway."
description: "Avratanu Biswas is a Growth Engineer at Riff (formerly Databutton) specializing in experimentation, analytics pipelines, and growth systems. PhD in Biophysics studying photosynthesis and energy transfer."
author_profile: true
marp: false
---

<div class="content">
  <h1 class="hero-headline">Hi, I'm Avra.</h1>
  <p class="hero-tagline">Researcher → Builder. AI & code.</p>

  <p>
    I joined <strong><a href="https://riff.ai" target="_blank">Riff</a> </strong>(formerly Databutton) in 2023 as an early hire when it was a 7-person startup. 
    Helped build the growth stack from scratch while the company raised <a href="https://riff.ai/resources/blog/riff-raises-seriesA-16m-and-brings-business-ready-app-building-to-the-world" target="_blank">€14M Series A led by Northzone</a>. 
    Focused on fast iteration, instrumentation, and running experiments that actually moved metrics.
  </p>

  <p>
    I come from academia with a <strong>PhD in Biophysics</strong> from 
    <a href="https://vu.nl" target="_blank">Vrije Universiteit Amsterdam</a> and the 
    <a href="https://www.szbk.u-szeged.hu/en/" target="_blank">Biological Research Centre in Szeged</a>. 
    My research focused on photosynthesis and energy transfer in cyanobacteria using time-resolved spectroscopy and kinetic modeling. 
    <a href="https://www.proquest.com/openview/1fe7520d6b8ef328d0cb0a0e67ceb7f2/1?pq-origsite=gscholar&cbl=2026366&diss=y" target="_blank" class="thesis-link">Read my thesis</a>.
  </p>

</div>

<style>
/* Hero headline */
.hero-headline {
  font-size: 2.5em !important;
  margin-bottom: 0.3em !important;
}

/* Hero tagline */
.hero-tagline {
  font-size: 1.2em !important;
  margin-bottom: 1.5em !important;
  margin-top: 0 !important;
  opacity: 0.75;
  font-weight: 400;
  color: inherit;
}

/* Content container - optimal reading width */
.content {
  max-width: 800px !important;
  margin: 0 auto !important;
}

/* Paragraph styling */
.content p {
  line-height: 1.8 !important;
  margin-bottom: 1.8em !important;
  font-size: 1.05em !important;
}

/* Action blue link colors */
.content a {
  color: #0102EE !important;
  text-decoration: none !important;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s ease;
}

.content a:hover {
  text-decoration: none !important;
  border-bottom: 1px solid #0102EE;
}

/* Thesis CTA styling */
.thesis-link {
  font-weight: 500;
  display: inline-block;
}

.thesis-link::after {
  content: '';
}

/* Style the arrow to be smaller and more subtle */
.content a[href*="doktori.bibl.u-szeged.hu"] {
  white-space: nowrap;
}

.content a[href*="doktori.bibl.u-szeged.hu"]::after {
  display: inline-block;
  font-size: 0.85em;
  margin-left: 0.1em;
  opacity: 0.7;
}

/* Bold text styling */
.content strong {
  font-weight: 600;
  color: inherit;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .hero-headline {
    margin-top: 0.5em !important;
    font-size: 2em !important;
  }
  
  .content {
    margin-top: 0 !important;
  }
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .content a {
    color: #5B8DFF !important;
  }
  
  .content a:hover {
    border-bottom: 1px solid #5B8DFF;
  }
}
</style>

{% include journey-map.html %}

<script data-goatcounter="https://avra42.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
