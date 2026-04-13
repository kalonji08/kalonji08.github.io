---
layout: page
icon: fas fa-layer-group
order: 2
title: "Projects"
description: "Research software, pipelines, and tools by Dr Kalonji A. Tshisekedi — spanning multi-omics, population genomics, NGS, and applied data science."
---

<p style="margin-bottom: 2rem; font-size: 1rem; opacity: 0.8; max-width: 600px;">
  A collection of research software, pipelines, and data science tools I've built
  across bioinformatics, omics, and applied machine learning.
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

  <!-- 1 -->
  <div class="proj-card">
    <div class="proj-meta"><span>2024</span><span>Genomics · Python</span></div>
    <a class="proj-title" href="#">AfriVariant</a>
    <p class="proj-desc">End-to-end variant calling and annotation pipeline optimised for African genomic cohorts, with population-stratified filtering.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="#">Repo</a>
      <a class="proj-tag" href="#">Article</a>
    </div>
  </div>

  <!-- 2 -->
  <div class="proj-card">
    <div class="proj-meta"><span>2024</span><span>Multi-omics · R</span></div>
    <a class="proj-title" href="#">OmicsWeave</a>
    <p class="proj-desc">R package for integrating transcriptomics, proteomics, and metabolomics data using factor analysis and network-based approaches.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="#">Repo</a>
      <a class="proj-tag" href="#">Demo</a>
    </div>
  </div>

  <!-- 3 -->
  <div class="proj-card">
    <div class="proj-meta"><span>2023</span><span>NGS · Nextflow</span></div>
    <a class="proj-title" href="#">ngs-qc-flow</a>
    <p class="proj-desc">Nextflow pipeline for automated quality control, adapter trimming, and alignment reporting across short-read sequencing datasets.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="#">Repo</a>
    </div>
  </div>

  <!-- 4 -->
  <div class="proj-card">
    <div class="proj-meta"><span>2023</span><span>Proteomics · Python</span></div>
    <a class="proj-title" href="#">LCMSparse</a>
    <p class="proj-desc">Python toolkit for parsing, normalising, and visualising LC-MS/MS MaxQuant output, with statistical differential expression modules.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="#">Repo</a>
      <a class="proj-tag" href="#">Article</a>
    </div>
  </div>

  <!-- 5 -->
  <div class="proj-card">
    <div class="proj-meta"><span>2023</span><span>Microbiome · R</span></div>
    <a class="proj-title" href="#">MicroVizR</a>
    <p class="proj-desc">Interactive Shiny dashboard for visualising 16S and metagenomic community composition, diversity metrics, and differential abundance.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="#">Repo</a>
      <a class="proj-tag" href="#">Demo</a>
    </div>
  </div>

  <!-- 6 -->
  <div class="proj-card">
    <div class="proj-meta"><span>2022</span><span>ML · Python · scikit-learn</span></div>
    <a class="proj-title" href="#">BiomarkerML</a>
    <p class="proj-desc">Machine learning framework for biomarker discovery from high-dimensional omics data — feature selection, model comparison, and SHAP interpretation.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="#">Repo</a>
      <a class="proj-tag" href="#">Article</a>
      <a class="proj-tag" href="#">Demo</a>
    </div>
  </div>

  <!-- 7 -->
  <div class="proj-card">
    <div class="proj-meta"><span>2022</span><span>Metagenomics · Bash</span></div>
    <a class="proj-title" href="#">metaMAG-wf</a>
    <p class="proj-desc">Reproducible workflow for genome-resolved metagenomics — binning, bin refinement, quality assessment, and taxonomic classification of MAGs.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="#">Repo</a>
    </div>
  </div>

  <!-- 8 -->
  <div class="proj-card">
    <div class="proj-meta"><span>2021</span><span>Data Science · SQL · Python</span></div>
    <a class="proj-title" href="#">BioDataExplorer</a>
    <p class="proj-desc">SQL-driven exploration and reporting toolkit for relational biological databases, with Pandas and Plotly visualisation layers.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="#">Repo</a>
      <a class="proj-tag" href="#">Demo</a>
    </div>
  </div>

  <!-- 9 -->
  <div class="proj-card">
    <div class="proj-meta"><span>2021</span><span>Assembly · Bash</span></div>
    <a class="proj-title" href="#">scaffold-polish</a>
    <p class="proj-desc">Documented workflow for de novo genome scaffolding with SSPACE and iterative polishing with Pilon — see the accompanying blog series.</p>
    <div class="proj-tags">
      <a class="proj-tag" href="/categories/bioinformatics/">Article</a>
      <a class="proj-tag" href="#">Repo</a>
    </div>
  </div>

</div>

<p style="margin-top: 2.5rem; font-size: 0.88rem; opacity: 0.6;">
  Links marked <strong>Repo</strong> will point to GitHub once repositories are made public.
  Want to collaborate? <a href="mailto:kalonji.tshisekedi@gmail.com">Get in touch.</a>
</p>
