---
layout: archive
permalink: /
excerpt: "Co-founder & CTO at avei, building byDagny.com. Previously Riff.ai. PhD in Biophysics from VU Amsterdam. Based in Oslo, Norway."
description: "Avratanu Biswas is co-founder & CTO at avei, building byDagny.com — AI to run and grow your business. Previously at Riff.ai. PhD in Biophysics from VU Amsterdam."
author_profile: true
marp: false
---

<div class="content">
  <h1 class="hero-headline">Hi, I'm Avra.</h1>

  <p>
    Co-founder &amp; CTO at <strong><a href="https://avei.ai" target="_blank">avei</a></strong> (VC-backed) - building <strong><a href="https://www.bydagny.com" target="_blank">byDagny.com</a></strong>, AI to run and grow your business.
  </p>

  <p>
    Previously an early team member at <a href="https://riff.ai" target="_blank">Riff</a> (formerly Databutton), through its Series A and the scale-up that followed.
  </p>

  <p>
    Before that, academia - <strong>PhD in Biophysics</strong> from 
    <a href="https://vu.nl" target="_blank">Vrije Universiteit Amsterdam</a> and the 
    <a href="https://www.szbk.u-szeged.hu/en/" target="_blank">Biological Research Centre in Szeged</a>.
  </p>

  <p>
    <a href="/research/">My research</a> focused on photosynthesis and energy transfer in cyanobacteria, using time-resolved spectroscopy and kinetic modeling. 
    <a href="https://www.proquest.com/openview/1fe7520d6b8ef328d0cb0a0e67ceb7f2/1?pq-origsite=gscholar&cbl=2026366&diss=y" target="_blank" class="thesis-link">Read my thesis</a>.
  </p>

</div>

<style>
/* Hero headline - calm, Cursor-scale */
.hero-headline {
  font-size: 1.5em !important;
  margin-bottom: 1em !important;
  font-weight: 600 !important;
  letter-spacing: -0.02em !important;
}

/* Content container - optimal reading width */
.content {
  max-width: 800px !important;
  margin: 0 auto !important;
}

/* Paragraph styling - short blocks, comfortable rhythm */
.content p {
  line-height: 1.75 !important;
  margin-bottom: 1.3em !important;
  font-size: 1em !important;
}

/* Quiet monochrome links - text color with a subtle underline */
.content a {
  color: inherit !important;
  text-decoration: none !important;
  border-bottom: 1px solid rgba(127, 127, 127, 0.4);
  transition: border-color 0.2s ease;
}

.content a:hover {
  text-decoration: none !important;
  border-bottom-color: currentColor;
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
    font-size: 1.35em !important;
  }
  
  .content {
    margin-top: 0 !important;
  }
}
</style>

{% comment %} Leaflet journey map - kept for easy revert; swap with the ASCII block below
{% include journey-map.html %}
{% endcomment %}

<!-- Dot-matrix map on desktop; ASCII timeline on phones (media queries in the include) -->
{% include journey-dotmap.html %}

<div class="journey-ascii-wrap">
  <p class="journey-ascii-label">JOURNEY</p>
  <pre class="journey-ascii" id="journey-ascii" aria-label="Journey: Kolkata to Amsterdam to Szeged to Oslo"></pre>
</div>

<script>
(function() {
  var LINES = [
    'Kolkata, India ............. roots',
    '      |',
    'Amsterdam, Netherlands ..... PhD - 2018-2023',
    '      |',
    'Szeged, Hungary ............ PhD - 2020-2023',
    '      |',
    'Oslo, Norway ............... 2023-present'
  ];
  var pre = document.getElementById('journey-ascii');
  if (!pre) return;

  function finalHTML() {
    return LINES.map(function(line, i) {
      if (line.trim() === '|') {
        return '<span class="journey-pipe" style="animation-delay:' + (i * 0.4) + 's">' + line + '</span>';
      }
      if (i === LINES.length - 1) {
        return line + '<span class="journey-cursor">▌</span>';
      }
      return line;
    }).join('\n');
  }

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    pre.innerHTML = finalHTML();
    return;
  }

  var text = LINES.join('\n');
  var started = false;

  function typeOut() {
    if (started) return;
    started = true;
    var i = 0;
    var timer = setInterval(function() {
      i += 2; /* two chars per tick */
      pre.textContent = text.slice(0, i);
      if (i >= text.length) {
        clearInterval(timer);
        pre.innerHTML = finalHTML();
      }
    }, 12);
  }

  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { typeOut(); io.disconnect(); }
    });
  }, { threshold: 0.3 });
  io.observe(pre);
})();
</script>

<style>
.journey-ascii-wrap {
  max-width: 800px;
  margin: 3em auto 5em;
}

.journey-ascii-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.5;
  margin-bottom: 1.2em;
}

.journey-ascii {
  font-family: 'JetBrains Mono', Monaco, Consolas, monospace;
  font-size: 0.85em;
  line-height: 1.8;
  opacity: 0.75;
  background: none !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
  overflow-x: auto;
  /* reserve final height so the typewriter doesn't shift the page */
  min-height: 12.6em;
}

/* route "flow": connectors pulse in sequence */
.journey-pipe {
  animation: journey-flow 1.6s ease-in-out infinite;
}

@keyframes journey-flow {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}

/* terminal cursor on the current stop */
.journey-cursor {
  margin-left: 2px;
  animation: journey-blink 1.1s steps(1) infinite;
}

@keyframes journey-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 480px) {
  .journey-ascii {
    font-size: 0.72em;
  }
}
</style>

<script data-goatcounter="https://avra42.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
