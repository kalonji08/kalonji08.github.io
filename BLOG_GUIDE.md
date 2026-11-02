# Site Guide — kalonjilabs.com

## Tech Stack

| Layer          | Technology                                                    |
|----------------|---------------------------------------------------------------|
| Framework      | [Astro 7.x](https://astro.build) — static site generator     |
| Content        | Markdown (`.md`) with Astro Content Collections               |
| Styling        | Vanilla CSS with custom properties (`src/styles/global.css`)  |
| Fonts          | Playfair Display (headings) + Source Sans 3 (body) via Google Fonts |
| Syntax highlighting | Shiki (`github-light` theme)                            |
| Sitemap        | `@astrojs/sitemap` (auto-generated)                           |
| RSS            | `@astrojs/rss` (auto-generated)                               |
| MDX support    | `@astrojs/mdx`                                                |
| Hosting        | GitHub Pages (via GitHub Actions)                             |
| CI/CD          | `.github/workflows/deploy.yml` — builds on push to `main`    |
| Domain         | `kalonjilabs.com` (custom domain, `www` redirects to apex)   |
| Node version   | 22 (LTS, used in CI)                                         |

---

## Domains

- **https://kalonjilabs.com** — primary domain (served by GitHub Pages)
- **https://www.kalonjilabs.com** — redirects to the apex domain automatically
- **https://kalonji08.github.io** — redirects to kalonjilabs.com

The custom domain is configured via `public/CNAME` (contains `kalonjilabs.com`). Do not delete this file.

---

## Project Structure

```
.github/
└── workflows/
    └── deploy.yml          ← CI/CD pipeline (build + deploy to GitHub Pages)
src/
├── content/
│   └── blog/               ← Blog posts (Markdown files)
├── content.config.ts        ← Blog schema (frontmatter validation)
├── layouts/
│   └── Base.astro           ← Global layout (head, nav, footer, SEO meta, JSON-LD)
├── pages/
│   ├── index.astro          ← Home page
│   ├── about.astro          ← About page
│   ├── projects.astro       ← Projects page
│   ├── research.astro       ← Research page
│   ├── rss.xml.ts           ← RSS feed generator
│   └── blog/
│       ├── index.astro      ← Blog listing page
│       ├── [id].astro       ← Individual blog post template
│       └── tags/
│           └── [tag].astro  ← Tag filter pages
├── styles/
│   └── global.css           ← All site styles + CSS custom properties
public/
├── CNAME                    ← Custom domain config (do not delete)
├── robots.txt               ← Search engine crawl rules
├── favicon.svg              ← Site favicon
└── img/                     ← Static images (photos, cover images)
astro.config.mjs             ← Astro config (site URL, integrations)
tsconfig.json                ← TypeScript config
package.json                 ← Dependencies and scripts
```

**Important:** Every file in `src/` and `public/` must be committed to git. If a file only exists locally but isn't tracked, it won't exist in CI and the build will fail or produce incomplete output.

---

## Git Workflow

### Branch strategy

```
feature branch → PR to main → merge → auto-deploy
```

### Creating a branch

```bash
# Start from main
git checkout main
git pull origin main

# Create your branch
git checkout -b feat/my-change
```

Branch naming conventions:
- `feat/description` — new content or features
- `fix/description` — bug fixes
- `redesign/description` — design changes

### Making changes and pushing

```bash
# Preview locally
npm run dev

# Check everything builds
npm run build

# Stage and commit
git add .
git commit -m "feat: add new blog post about XYZ"

# Push your branch
git push -u origin feat/my-change
```

### Creating a PR and deploying

```bash
# Create a pull request
gh pr create --title "Add blog post: Title" --body "Description of changes"

# Merge the PR (this triggers deployment)
gh pr merge --squash
```

Or merge from the GitHub web UI.

### Manual deploy trigger

If you need to redeploy without a new commit:

```bash
gh workflow run deploy.yml
```

### Checking deploy status

```bash
# Quick status check
gh run list --limit 1

# If it failed, get the error
gh run view $(gh run list --limit 1 --json databaseId -q '.[0].databaseId') --log-failed
```

---

## Writing a New Blog Post

### 1. Create the file

```bash
# From a feature branch
touch src/content/blog/2026-11-02-my-post-slug.md
```

File naming: `YYYY-MM-DD-slug-in-lowercase.md`

### 2. Add frontmatter

```yaml
---
title: "Your Post Title"
description: "A concise 1-2 sentence summary for SEO and social previews."
date: 2026-11-02 09:00:00 +0200
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
image: "/img/your-cover-image.jpg"
---
```

| Field         | Required | Purpose |
|---------------|----------|---------|
| `title`       | Yes      | Page title, social card headline, RSS title |
| `description` | Yes      | Meta description, OG/Twitter preview, RSS summary. **Keep under 160 characters.** |
| `date`        | Yes      | Publish date (future dates are still built) |
| `categories`  | No       | Broad groupings (e.g. Bioinformatics, Life, Linux) |
| `tags`        | No       | Specific keywords — used in `article:tag` meta and JSON-LD |
| `image`       | No       | Cover image for social cards. Place in `public/img/`. 1200x630px recommended. |
| `hidden`      | No       | Set `true` to exclude from blog listing and RSS |

### 3. Write content

Standard Markdown: headings, bold, italic, links, images, code blocks, blockquotes, lists, tables.

### 4. Preview, commit, deploy

```bash
npm run dev                          # Preview at localhost:4321
npm run build                        # Verify production build
git add src/content/blog/            # Stage the new post
git commit -m "feat: add post: Title"
git push -u origin feat/new-post
gh pr create --title "New post: Title" --body "New blog post"
# Merge PR → auto-deploys
```

---

## Editing Pages

All pages are `.astro` files in `src/pages/`. Edit them directly:

| Page     | File                     |
|----------|--------------------------|
| Home     | `src/pages/index.astro`  |
| About    | `src/pages/about.astro`  |
| Research | `src/pages/research.astro` |
| Projects | `src/pages/projects.astro` |
| Blog listing | `src/pages/blog/index.astro` |

Astro files mix HTML with component syntax. The layout, nav, and footer come from `src/layouts/Base.astro`.

### Editing styles

All styles live in `src/styles/global.css`. Key CSS custom properties (defined in `:root`):

| Variable           | Current value      | Controls |
|--------------------|--------------------|----------|
| `--max-width`      | `1400px`           | Outer layout cap |
| `--content-width`  | `var(--max-width)` | Prose/content column width |
| `--gutter`         | `4vw`              | Side padding |
| `--color-bg`       | `#ffffff`          | Background |
| `--color-text`     | `#333333`          | Body text |
| `--color-heading`  | `#1a1a1a`          | Headings |
| `--font-heading`   | Playfair Display   | Heading font |
| `--font-body`      | Source Sans 3      | Body font |

### Adding a new page

1. Create `src/pages/my-page.astro`
2. Import and wrap content in the `Base` layout:

```astro
---
import Base from '../layouts/Base.astro';
---

<Base title="My Page" description="Page description for SEO.">
  <div class="section">
    <div class="section-narrow">
      <h1>My Page</h1>
      <p>Content here.</p>
    </div>
  </div>
</Base>
```

3. Add a nav link in `src/layouts/Base.astro` if needed.
4. **Commit the file** — untracked files don't deploy.

---

## SEO Features

### Automatic (already configured)

Every page gets:
- **Canonical URL** — prevents duplicate content
- **Open Graph tags** — title, description, image, site name
- **Twitter Card** — `summary_large_image`
- **RSS autodiscovery** — `<link rel="alternate" type="application/rss+xml">`
- **Sitemap** — auto-generated at `/sitemap-index.xml`
- **robots.txt** — allows all crawlers, points to sitemap
- **JSON-LD Person schema** — on all non-article pages, links your name to this site and your social profiles

Blog posts additionally get:
- **`og:type=article`** with `article:published_time`, `article:author`, `article:tag`
- **JSON-LD BlogPosting schema** — headline, description, author, date, keywords

### Writing SEO-friendly descriptions

The `description` field is the single most important SEO lever you control. It appears in:
- Google search results (the snippet below the title)
- LinkedIn / Twitter / Facebook post previews
- RSS reader summaries

Tips:
- 120–160 characters
- Include the main keyword naturally
- Make it compelling — this is your click-through pitch

---

## Sharing on Social Platforms

### LinkedIn

1. Copy the post URL: `https://kalonjilabs.com/blog/YYYY-MM-DD-slug/`
2. Paste into a LinkedIn post — the rich preview card generates automatically
3. Or use the LinkedIn share button at the bottom of any blog post

To refresh a cached preview: [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### X / Twitter

Paste the URL or use the share button. Preview with [Twitter Card Validator](https://cards-dev.twitter.com/validator).

### Substack

**Option A — Link (recommended):** Paste your blog URL in a Substack post. It renders as an embedded card.

**Option B — Cross-post:** Copy content to Substack, then set the canonical URL in Substack's SEO settings to your blog URL. Google treats your site as the original.

### RSS syndication

Feed URL: **https://kalonjilabs.com/rss.xml**

Submit to: Substack, Medium, Feedly, Inoreader, or any RSS reader.

### Copy link

Every blog post has a copy-link button. One click copies the full URL to clipboard.

---

## Quick Reference

| Task                        | Command / URL |
|-----------------------------|---------------|
| Start dev server            | `npm run dev` |
| Build for production        | `npm run build` |
| Preview production build    | `npm run preview` |
| Deploy                      | Push/merge to `main` — automatic |
| Manual redeploy             | `gh workflow run deploy.yml` |
| Check deploy status         | `gh run list --limit 1` |
| Get failed build logs       | `gh run view <ID> --log-failed` |
| RSS feed                    | https://kalonjilabs.com/rss.xml |
| Sitemap                     | https://kalonjilabs.com/sitemap-index.xml |
| LinkedIn Post Inspector     | https://www.linkedin.com/post-inspector/ |
| Twitter Card Validator      | https://cards-dev.twitter.com/validator |
