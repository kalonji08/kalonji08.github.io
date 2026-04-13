---
layout: page
icon: fas fa-layer-group
order: 2
title: "Projects"
description: "Research software, pipelines, and tools by Dr Kalonji A. Tshisekedi — spanning multi-omics, population genomics, NGS, and applied data science."
---

<p style="margin-bottom: 2rem; font-size: 1rem; opacity: 0.8; max-width: 600px;">
  A collection of projects spanning bioinformatics, cloud computing, and data science.
  More coming soon.
</p>

<style>
.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.2rem;
  margin-top: 0.5rem;
}
.proj-card {
  background: var(--card-bg, #1e1e2e);
  border: 1px solid var(--border-color, #333);
  border-radius: 10px;
  padding: 1.2rem 1.3rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: border-color 0.2s;
}
.proj-card:hover { border-color: var(--link-color, #60a5fa); }
.proj-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  opacity: 0.55;
  margin-bottom: 0.1rem;
}
.proj-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--link-color, #60a5fa);
  text-decoration: none;
  margin: 0;
}
.proj-title:hover { text-decoration: underline; }
.proj-desc {
  font-size: 0.88rem;
  opacity: 0.78;
  line-height: 1.5;
  flex: 1;
}
.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
}
.proj-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.65rem;
  border-radius: 5px;
  border: 1px solid var(--border-color, #444);
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.15s;
}
.proj-tag:hover { opacity: 1; text-decoration: none; }
</style>

<div class="proj-grid">

  <div class="proj-card">
    <div class="proj-meta"><span>2024</span><span>Quarto · R</span></div>
    <a class="proj-title" href="https://github.com/kalonji08/BigBookofR-Quarto.github.io" target="_blank" rel="noopener">BigBookofR — Quarto Edition</a>
    <p class="proj-desc">A Quarto-powered interactive reference site compiling the Big Book of R — a curated collection of free R programming resources for data science and statistics.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="https://github.com/kalonji08/BigBookofR-Quarto.github.io" target="_blank" rel="noopener">Repo</a>
    </div>
  </div>

  <div class="proj-card">
    <div class="proj-meta"><span>2024</span><span>Cloud · AWS</span></div>
    <a class="proj-title" href="https://github.com/kalonji08/AWS-Certified-Cloud-Practitioner-Notes" target="_blank" rel="noopener">AWS Cloud Practitioner Notes</a>
    <p class="proj-desc">Concise study notes and practice exam questions for the AWS Certified Cloud Practitioner (CLF-C02) exam. Covers core services, pricing, security, and architecture.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="https://github.com/kalonji08/AWS-Certified-Cloud-Practitioner-Notes" target="_blank" rel="noopener">Repo</a>
    </div>
  </div>

  <div class="proj-card">
    <div class="proj-meta"><span>2024</span><span>SQL · PostgreSQL</span></div>
    <a class="proj-title" href="https://github.com/kalonji08/dvd-rental-postgresql-tutorial" target="_blank" rel="noopener">DVD Rental PostgreSQL Tutorial</a>
    <p class="proj-desc">Hands-on SQL tutorial using the classic DVD rental database. Covers queries, joins, aggregations, window functions, and database design concepts in PostgreSQL.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="https://github.com/kalonji08/dvd-rental-postgresql-tutorial" target="_blank" rel="noopener">Repo</a>
    </div>
  </div>

</div>

<p style="margin-top: 2.5rem; font-size: 0.88rem; opacity: 0.6;">
  More projects in progress. Want to collaborate?
  <a href="mailto:kalonji.tshisekedi@gmail.com">Get in touch.</a>
</p>
