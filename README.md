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
4. [How to add a new blog post](#how-to-add-a-new-blog-post)
5. [How to update the site](#how-to-update-the-site)
6. [Branch workflow: dev → PR → main](#branch-workflow-dev--pr--main)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

You need the following tools installed regardless of your OS:

| Tool    | Purpose                        |
|---------|-------------------------------|
| Git     | Version control                |
| Ruby    | Jekyll runs on Ruby            |
| Bundler | Manages Ruby gem dependencies  |
| Jekyll  | Static site generator          |

---

## Installation

### Linux (Ubuntu/Debian)

1. **Update package list and install system dependencies:**
   ```bash
   sudo apt-get update
   sudo apt-get install -y ruby-full build-essential zlib1g-dev git
   ```

2. **Configure RubyGems to install gems in your home directory (avoids needing sudo):**
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

4. **Clone the repository:**
   ```bash
   git clone https://github.com/kalonji08/kalonji08.github.io.git
   cd kalonji08.github.io
   ```

5. **Install project dependencies:**
   ```bash
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

3. **Add Homebrew Ruby to your PATH** (add to `~/.zshrc` or `~/.bash_profile`):
   ```bash
   echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```
   > On Intel Macs, the path may be `/usr/local/opt/ruby/bin` instead.

4. **Install Jekyll and Bundler:**
   ```bash
   gem install jekyll bundler
   ```

5. **Clone the repository:**
   ```bash
   git clone https://github.com/kalonji08/kalonji08.github.io.git
   cd kalonji08.github.io
   ```

6. **Install project dependencies:**
   ```bash
   bundle install
   ```

---

### Windows

1. **Install Ruby with DevKit** via [RubyInstaller](https://rubyinstaller.org/downloads/):
   - Download the latest **Ruby+Devkit** installer (e.g., `Ruby 3.2.x (x64)`).
   - Run the installer and check **"Add Ruby executables to your PATH"**.
   - At the end of the installation, run the `ridk install` step and choose option `3` (MSYS2 and MINGW).

2. **Open a new Command Prompt or PowerShell** and install Jekyll and Bundler:
   ```powershell
   gem install jekyll bundler
   ```

3. **Install Git** from [https://git-scm.com/download/win](https://git-scm.com/download/win) if not already installed.

4. **Clone the repository:**
   ```powershell
   git clone https://github.com/kalonji08/kalonji08.github.io.git
   cd kalonji08.github.io
   ```

5. **Install project dependencies:**
   ```powershell
   bundle install
   ```

---

## Run the site locally

From the project root, run:

```bash
bundle exec jekyll serve
```

Then open your browser at [http://localhost:4000](http://localhost:4000).

To enable live reload (auto-refreshes when files change):

```bash
bundle exec jekyll serve --livereload
```

---

## How to add a new blog post

1. **Always work on the `dev` branch** (see [Branch workflow](#branch-workflow-dev--pr--main) below).

2. **Create a new file** in the `_posts/` directory. The filename must follow this format:

   ```
   YYYY-MM-DD-your-post-title.md
   ```

   Example: `_posts/2026-04-13-my-new-post.md`

3. **Add the required frontmatter** at the top of the file:

   ```markdown
   ---
   title: "Your Post Title"
   date: 2026-04-13 09:00:00 +1000
   categories: [Category]
   tags: [tag1, tag2]
   ---

   Your post content goes here, written in Markdown.
   ```

   - `categories`: Shown in the sidebar and archives. Use 1–2 broad categories.
   - `tags`: More granular labels. Use lowercase, space-separated.

4. **Preview locally:**
   ```bash
   bundle exec jekyll serve
   ```

5. **Commit, push to `dev`, then open a PR to `main`** (see workflow below).

---

## How to update the site

### Update site configuration

Edit `_config.yml` in the project root. Common fields:

| Field       | What it controls                        |
|-------------|----------------------------------------|
| `title`     | Site name shown in the header           |
| `tagline`   | Subtitle under your name               |
| `avatar`    | Path to your profile picture            |
| `timezone`  | Used for post dates                     |

After editing `_config.yml`, restart the local server for changes to take effect (Ctrl+C, then re-run `bundle exec jekyll serve`).

### Update the About page

Edit `_tabs/about.md`.

### Add or update images

Place images in `assets/img/` and reference them in posts as:

```markdown
![Alt text](/assets/img/your-image.png)
```

---

## Branch workflow: dev → PR → main

This blog uses a **dev → main** branching strategy. All changes go through `dev` first, then a Pull Request merges them into `main`, which triggers automatic deployment to GitHub Pages.

### Step-by-step

1. **Make sure you're on `dev` and it's up to date:**
   ```bash
   git checkout dev
   git pull origin dev
   git merge origin/main   # sync any changes from main that aren't in dev yet
   ```

2. **Make your changes** (new post, config edit, etc.).

3. **Stage and commit:**
   ```bash
   git add _posts/2026-04-13-my-new-post.md
   git commit -m "add post: my new post title"
   ```

4. **Push to `dev`:**
   ```bash
   git push origin dev
   ```

5. **Open a Pull Request on GitHub:**
   - Go to [https://github.com/kalonji08/kalonji08.github.io](https://github.com/kalonji08/kalonji08.github.io)
   - Click **"Compare & pull request"** for your `dev` branch
   - Set base branch to `main`
   - Add a title and description, then click **"Create pull request"**

6. **Merge the PR** — GitHub Actions will automatically build and deploy the site to GitHub Pages within a few minutes.

> **Never commit directly to `main`.** Always go through `dev` and a PR.

---

## Troubleshooting

### `bundle install` fails with permission errors (Linux/macOS)

Make sure you've set up your gem home directory as described in the installation steps. Never use `sudo gem install`.

### Wrong Ruby version

Check your version with `ruby -v`. Jekyll 4.x requires Ruby >= 2.7. Use `rbenv` or `rvm` to manage multiple Ruby versions if needed.

### Gemfile version conflicts

If you see dependency errors, try updating your `Gemfile` to pin exact versions:

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.3.0"
gem "jekyll-theme-chirpy", "~> 6.5", ">= 6.5.5"
```

Then run:
```bash
bundle update
```

### Windows: `wdm` gem errors

The `wdm` gem is required for file watching on Windows. If it fails, make sure you installed the Ruby DevKit correctly and ran `ridk install`.

### Site deploys but looks broken

Run the HTML proofer locally to catch broken links:
```bash
bundle exec htmlproofer _site --disable-external
```

---

## License

This work is published under the [MIT License](LICENSE).
