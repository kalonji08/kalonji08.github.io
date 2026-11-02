# Blog & Deployment Guide — kalonjilabs.com

## Site Overview

This is an Astro static site deployed to GitHub Pages via GitHub Actions.

- **Framework:** Astro 7.x with MDX support
- **Hosting:** GitHub Pages (auto-deploys on push to `main`)
- **Domain:** kalonjilabs.com
- **RSS feed:** kalonjilabs.com/rss.xml
- **Sitemap:** kalonjilabs.com/sitemap-index.xml

---

## Writing a New Blog Post

### 1. Create the file

Add a Markdown file in `src/content/blog/` using this naming convention:

```
src/content/blog/YYYY-MM-DD-slug-title.md
```

Example: `src/content/blog/2026-11-02-my-new-post.md`

### 2. Add frontmatter

Every post needs this YAML block at the top:

```yaml
---
title: "Your Post Title"
description: "A concise 1-2 sentence summary for SEO and social previews."
date: 2026-11-02 09:00:00 +0200
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
image: "/img/your-cover-image.jpg"   # optional, defaults to site banner
---
```

**Field details:**

| Field         | Required | Purpose |
|---------------|----------|---------|
| `title`       | Yes      | Page title, social card headline, RSS title |
| `description` | Yes      | Meta description, OG/Twitter preview text, RSS summary. Keep under 160 characters for Google. |
| `date`        | Yes      | Publish date. Future dates are still built. |
| `categories`  | No       | Broad groupings (e.g. Bioinformatics, Life, Linux) |
| `tags`        | No       | Specific keywords. Used in article:tag meta and JSON-LD keywords. |
| `image`       | No       | Cover image for social cards. Place in `public/img/`. 1200x630px recommended. |
| `hidden`      | No       | Set `true` to exclude from the blog listing and RSS. |

### 3. Write your content

Write standard Markdown below the frontmatter. The site supports:

- Headings, bold, italic, links, images
- Code blocks with syntax highlighting (Shiki, github-light theme)
- Blockquotes, lists, tables

### 4. Preview locally

```bash
npm run dev
```

Open `http://localhost:4321/blog/YYYY-MM-DD-slug-title/` in your browser.

---

## SEO Features (already configured)

Every blog post automatically gets:

- **Open Graph meta tags** — `og:type=article`, `og:title`, `og:description`, `og:image`, `article:published_time`, `article:author`, `article:tag`
- **Twitter Card** — `summary_large_image` with title, description, and image
- **Canonical URL** — prevents duplicate content issues
- **JSON-LD structured data** — `BlogPosting` schema that Google reads for rich results
- **Sitemap** — auto-generated at `/sitemap-index.xml`
- **RSS feed** — auto-generated at `/rss.xml`

### Writing SEO-friendly descriptions

The `description` field is the single most important SEO lever you control. It shows up in:
- Google search results (the snippet below the title)
- LinkedIn post previews
- Twitter/X card previews
- RSS reader summaries

Tips:
- 120-160 characters
- Include the main keyword naturally
- Make it compelling — this is your click-through pitch

---

## Sharing on Social Platforms

### LinkedIn

Every blog post URL produces a rich preview card on LinkedIn automatically (title + description + image pulled from OG tags). To share:

1. Copy the post URL: `https://kalonjilabs.com/blog/YYYY-MM-DD-slug/`
2. Paste it into a LinkedIn post — the card generates automatically
3. Or click the LinkedIn share button at the bottom of any blog post

If LinkedIn caches an old preview, use the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to refresh it.

### X / Twitter

Same approach — paste the URL or use the share button. Twitter reads the `twitter:card` meta tags. Use the [Twitter Card Validator](https://cards-dev.twitter.com/validator) to preview.

### Substack

Two integration options:

**Option A — Link to your post (recommended):**
In a Substack post, paste your blog URL. Substack renders it as an embedded card with your OG title, description, and image.

**Option B — Cross-post with a canonical link:**
Copy your post content into Substack, then set the canonical URL in Substack's SEO settings to `https://kalonjilabs.com/blog/your-post/`. This tells Google your site is the original source.

### RSS for syndication

Your RSS feed is at: `https://kalonjilabs.com/rss.xml`

You can submit this to:
- Substack (import RSS)
- Medium (import RSS)
- Any RSS reader (Feedly, Inoreader, etc.)
- LinkedIn newsletter (paste links from feed)

---

## Deploying

### The pipeline

```
your branch → merge to main → GitHub Actions builds → deploys to GitHub Pages
```

There is nothing else to configure. The workflow file at `.github/workflows/deploy.yml` handles everything.

### Step by step

```bash
# 1. Make sure your changes build
npm run build

# 2. Commit
git add .
git commit -m "feat: add new blog post"

# 3. Push to your branch
git push origin your-branch

# 4. Create a PR to main (or merge directly)
gh pr create --title "Add new blog post" --body "New post: Title"

# 5. Merge the PR — site deploys automatically
```

### Verify deployment

After merging, go to the **Actions** tab in GitHub to watch the build. Once green, your post is live.

---

## Project Structure

```
src/
├── content/
│   └── blog/          ← Blog posts (Markdown)
├── layouts/
│   └── Base.astro     ← Global layout (head, nav, footer, SEO meta)
├── pages/
│   ├── blog/
│   │   ├── index.astro     ← Blog listing page
│   │   ├── [id].astro      ← Individual blog post template
│   │   └── tags/[tag].astro
│   ├── rss.xml.ts     ← RSS feed generator
│   ├── index.astro    ← Home page
│   ├── about.astro
│   ├── projects.astro
│   └── research.astro
├── styles/
│   └── global.css     ← All site styles
└── content.config.ts  ← Blog schema (frontmatter validation)
public/
└── img/               ← Static images (cover photos, etc.)
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Preview production build | `npm run preview` |
| Deploy | Push/merge to `main` — automatic |
| RSS feed URL | `https://kalonjilabs.com/rss.xml` |
| Sitemap URL | `https://kalonjilabs.com/sitemap-index.xml` |
