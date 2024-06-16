---
layout: archive
permalink: /
excerpt: "Avratanu Biswas"
author_profile: true
marp: false
---

<style>
  :root {
    --font-family: 'Comic Sans MS', sans-serif;
    --background-light: #ffffff;
    --background-dark: #212121;
    --text-light: #000000;
    --text-dark: #eaeaea;
    --link-color-light: #1e90ff;
    --link-color-dark: #87ceeb;
  }

  body {
    font-family: var(--font-family);
    line-height: 1.6;
    background-color: var(--background-light);
    color: var(--text-light);
  }

  [data-theme="dark"] {
    background-color: var(--background-dark);
    color: var(--text-dark);
  }

  [data-theme="dark"] a {
    color: var(--link-color-dark);
  }

  a {
    color: var(--link-color-light);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .content {
    max-width: 800px;
    margin: auto;
    background: var(--background-light);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  [data-theme="dark"] .content {
    background: var(--background-dark);
  }

  .highlight {
    font-style: italic;
    color: var(--link-color-light);
  }

  [data-theme="dark"] .highlight {
    color: var(--link-color-dark);
  }
</style>

<link href="https://fonts.googleapis.com/css2?family=Comic+Sans+MS:wght@400;600&display=swap" rel="stylesheet">

<div class="content">
  <h1>Hi, I'm Avra.</h1>

  <p>I spent the last 5 years as a PhD researcher studying the primary processes of photosynthesis and the light harvesting mechanisms in cyanobacteria, using various biophysical tools and systems modeling techniques. You can read more about my research work <a href="https://scholar.google.com/citations?user=bTzfXH0AAAAJ&hl=en&authuser=1" target="_blank">here</a>.</p>

  <p>During this time, I developed a strong interest in coding, building simple GUIs, and experimenting with the latest AI stacks and Large Language Models (LLMs) while creating web apps.</p>

  <p>Soon, I decided to shift my career to the tech industry.</p>

  <p>I joined a cutting-edge startup called <a href="https://databutton.com" target="_blank">Databutton</a>, where we are creating the first AI app builder that allows anyone to build full-stack web apps through conversation. My current role is to assist developers in building apps and to create technical content that educates them on how to use the latest AI technologies and large language models.</p>

  <p class="highlight">Always happy to chat more about my work, so please don’t hesitate to reach out!</p>
</div>

<script>
  document.addEventListener('DOMContentLoaded', (event) => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = sessionStorage.getItem('theme');

    if (theme === 'dark' || (!theme && prefersDarkScheme)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      sessionStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      sessionStorage.setItem('theme', 'dark');
    }
    return false;
  }
</script>

<script data-goatcounter="https://avrab.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
