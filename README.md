# Kalonji's Blog — kalonji08.github.io

A personal blog by **Kalonji A. Tshisekedi** (molecular biologist & data scientist), built with [Jekyll](https://jekyllrb.com/) and the [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy/) theme, deployed automatically to GitHub Pages.

Live site: [https://kalonji08.github.io](https://kalonji08.github.io)

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
   - [Linux (Ubuntu/Debian)](#linux-ubuntudebian)
   - [macOS](#macos)
   - [Windows](#windows)
3. [Run the site locally](#run-the-site-locally)
4. [Branch workflow: dev → PR → main](#branch-workflow-dev--pr--main)
5. [How to add a blog post](#how-to-add-a-blog-post)
6. [How to add or update a page](#how-to-add-or-update-a-page)
7. [How to add or update a project](#how-to-add-or-update-a-project)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

| Tool    | Purpose                        |
|---------|-------------------------------|
| Git     | Version control                |
| Ruby    | Jekyll runs on Ruby            |
| Bundler | Manages Ruby gem dependencies  |
| Jekyll  | Static site generator          |

---

## Installation

### Linux (Ubuntu/Debian)

1. **Install system dependencies:**
   ```bash
   sudo apt-get update
   sudo apt-get install -y ruby-full build-essential zlib1g-dev git
   ```

2. **Configure RubyGems to install in your home directory:**
   ```bash
   echo '# Ruby Gems' >> ~/.bashrc
   echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
   echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```

3. **Install Jekyll and Bundler:**
   ```bash
   gem install jekyll bundler
   ```

4. **Clone the repo and install dependencies:**
   ```bash
   git clone https://github.com/kalonji08/kalonji08.github.io.git
   cd kalonji08.github.io
   bundle install
   ```

---

### macOS

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Ruby via Homebrew** (macOS ships with an outdated Ruby):
   ```bash
   brew install ruby
   ```

3. **Add Homebrew Ruby to your PATH** (add to `~/.zshrc`):
   ```bash
   echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```
   > On Intel Macs the path may be `/usr/local/opt/ruby/bin` instead.

4. **Install Jekyll, Bundler, clone, and install:**
   ```bash
   gem install jekyll bundler
   git clone https://github.com/kalonji08/kalonji08.github.io.git
   cd kalonji08.github.io
   bundle install
   ```

---

### Windows

1. Download and run the latest **Ruby+Devkit** installer from [rubyinstaller.org](https://rubyinstaller.org/downloads/). Check "Add Ruby executables to your PATH" and run `ridk install` (choose option 3) at the end.

2. Open a new PowerShell and run:
   ```powershell
   gem install jekyll bundler
   git clone https://github.com/kalonji08/kalonji08.github.io.git
   cd kalonji08.github.io
   bundle install
   ```

---

## Run the site locally

```bash
bundle exec jekyll serve --livereload
```

Open [http://localhost:4000](http://localhost:4000). The site auto-refreshes when you save a file.

---

## Branch workflow: dev → PR → main

All changes go through `dev` first. Merging to `main` triggers automatic deployment to GitHub Pages.

```bash
# 1. Switch to dev and sync it with main
git checkout dev
git pull origin dev

# 2. Make your changes (new post, page edit, project update, etc.)

# 3. Commit and push to dev
git add <files>
git commit -m "describe your change"
git push origin dev

# 4. Open a Pull Request on GitHub: dev → main
#    GitHub Actions will build and deploy automatically on merge.
```

> **Never commit directly to `main`.**

---

## How to add a blog post

1. Switch to `dev` and sync (see workflow above).

2. Create a new file in `_posts/` using this exact naming format:
   ```
   _posts/YYYY-MM-DD-your-post-title.md
   ```
   Example: `_posts/2026-04-13-intro-to-metagenomics.md`

3. Add the required frontmatter at the top:
   ```markdown
   ---
   title: "Your Post Title"
   date: 2026-04-13 09:00:00 +0200
   categories: [Category]
   tags: [tag1, tag2, tag3]
   ---

   Your post content in Markdown goes here.
   ```

   **Frontmatter fields:**

   | Field        | Required | Notes                                              |
   |--------------|----------|----------------------------------------------------|
   | `title`      | Yes      | Shown as the post heading and in the post list     |
   | `date`       | Yes      | Must match the filename date. Use `+0200` for SAST |
   | `categories` | Yes      | 1–2 broad topics e.g. `[Bioinformatics, Tutorial]` |
   | `tags`       | No       | More specific labels e.g. `[Python, NGS, Linux]`   |
   | `image`      | No       | Add a preview image: `image: /assets/img/blogs/my-image.png` |
   | `pin`        | No       | Set `pin: true` to pin the post to the top         |

4. Preview locally with `bundle exec jekyll serve --livereload`.

5. Commit, push to `dev`, and open a PR to `main`.

---

## How to add or update a page

The site has several fixed pages (tabs) in `_tabs/`. Each is a Markdown file.

### Update an existing page

| Page        | File                  |
|-------------|-----------------------|
| About Me    | `_tabs/about.md`      |
| Projects    | `_tabs/projects.md`   |
| Photography | `_tabs/photography.md`|
| Archives    | `_tabs/archives.md`   |

Just edit the relevant file and commit on `dev`.

### Add a new page

1. Create a new file in `_tabs/`:
   ```
   _tabs/my-new-page.md
   ```

2. Add frontmatter:
   ```markdown
   ---
   layout: page
   icon: fas fa-star          # any Font Awesome icon
   order: 5                   # controls sidebar position (lower = higher up)
   title: "My New Page"
   ---

   Page content in Markdown.
   ```

3. The page will automatically appear in the sidebar navigation.

### Update the About page

Edit `_tabs/about.md`. Key sections: bio paragraph, Education, Skills, Certifications, Awards, Photo Gallery.

---

## How to add or update a project

Projects live in `_tabs/projects.md` as HTML card blocks inside the grid.

### Add a new project

Copy and paste this block inside the `<div class="proj-grid">` in `_tabs/projects.md`:

```html
<div class="proj-card">
  <div class="proj-meta"><span>YEAR</span><span>Stack · Language</span></div>
  <a class="proj-title" href="https://github.com/kalonji08/your-repo" target="_blank" rel="noopener">Project Name</a>
  <p class="proj-desc">One or two sentences describing what the project does and why it matters.</p>
  <div class="proj-tags">
    <a class="proj-tag" href="https://github.com/kalonji08/your-repo" target="_blank" rel="noopener">Repo</a>
    <a class="proj-tag" href="https://your-demo-url.com" target="_blank" rel="noopener">Demo</a>
    <a class="proj-tag" href="/posts/your-blog-post/" >Article</a>
  </div>
</div>
```

**Fields to fill in:**

| Field           | What to put                                              |
|-----------------|----------------------------------------------------------|
| `YEAR`          | Year the project was started or published                |
| `Stack · Language` | e.g. `Python · Nextflow` or `R · Shiny`             |
| `href` on title | GitHub repo URL or project homepage                      |
| `Project Name`  | Short, clear name                                        |
| `proj-desc`     | 1–2 sentence description                                 |
| Tag buttons     | Include only the ones that apply: Repo / Demo / Article  |

### Update an existing project

Find the relevant `<div class="proj-card">` block in `_tabs/projects.md` and edit the text or links directly.

### Remove a project

Delete the entire `<div class="proj-card"> ... </div>` block for that project.

---

## Troubleshooting

### `bundle install` fails with permission errors
Make sure you've set up your gem home directory as described in the installation steps. Never use `sudo gem install`.

### Wrong Ruby version
Check with `ruby -v`. Jekyll 4.x requires Ruby >= 2.7. Use `rbenv` or `rvm` to manage versions.

### Gemfile version conflicts
```ruby
source "https://rubygems.org"
gem "jekyll", "~> 4.3.0"
gem "jekyll-theme-chirpy", "~> 6.5", ">= 6.5.5"
```
Then run `bundle update`.

### Windows: `wdm` gem errors
Make sure you ran `ridk install` with option 3 (MSYS2 and MINGW) during Ruby setup.

---

## License

Published under the [MIT License](LICENSE).
