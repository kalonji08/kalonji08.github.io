# Chirpy Starter

[![Gem Version](https://img.shields.io/gem/v/jekyll-theme-chirpy)][gem]&nbsp;
[![GitHub license](https://img.shields.io/github/license/cotes2020/chirpy-starter.svg?color=blue)][mit]

When installing the [**Chirpy**][chirpy] theme through [RubyGems.org][gem], Jekyll can only read files in the folders `_data`, `_layouts`, `_includes`, `_sass`, and `assets`, as well as a small part of options of the `_config.yml` file from the theme's gem. If you have ever installed this theme gem, you can use the command `bundle info --path jekyll-theme-chirpy` to locate these files.

The Jekyll team claims that this is to leave the ball in the user’s court, but this also results in users not being able to enjoy the out-of-the-box experience when using feature-rich themes.

To fully use all the features of **Chirpy**, you need to copy the other critical files from the theme's gem to your Jekyll site. The following is a list of targets:

```shell
.
├── _config.yml
├── _plugins
├── _tabs
└── index.html
```

To save you time, and also in case you lose some files while copying, we extract those files/configurations of the latest version of the **Chirpy** theme and the [CD][CD] workflow to here, so that you can start writing in minutes.

## Prerequisites

Follow the instructions in the [Jekyll Docs](https://jekyllrb.com/docs/installation/) to complete the installation of the basic environment. [Git](https://git-scm.com/) also needs to be installed.

## Installation

Sign in to GitHub and [**use this template**][use-template] to generate a brand new repository and name it `USERNAME.github.io`, where `USERNAME` represents your GitHub username.

Then clone it to your local machine and run:

```console
$ bundle
```

## Usage

Please see the [theme's docs](https://github.com/cotes2020/jekyll-theme-chirpy#documentation).

## License

This work is published under [MIT][mit] License.

[gem]: https://rubygems.org/gems/jekyll-theme-chirpy
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy/
[use-template]: https://github.com/cotes2020/chirpy-starter/generate
[CD]: https://en.wikipedia.org/wiki/Continuous_deployment
[mit]: https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE

## To run this locally use the following:

```bash
bundle exec jekyll serve
```

## Detailed Setup Instructions for a New Machine

### 1. Install Ruby and Other Prerequisites
Install Ruby and other necessary packages:
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

### 2. Set Up RubyGems Environment
Avoid installing RubyGems packages as the root user. Set up a gem installation directory for your user account:
```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### 3. Install Git
Install Git if it’s not already installed:
```bash
sudo apt-get install git
```

### 4. Clone the Repository
Clone your GitHub repository to your local machine:
```bash
git clone https://github.com/USERNAME/USERNAME.github.io.git
cd USERNAME.github.io
```

### 5. Install Jekyll and Bundler
Install Jekyll and Bundler gems:
```bash
gem install jekyll bundler
```

### 6. Install Project Dependencies
Install the dependencies specified in the `Gemfile`:
```bash
bundle install
```

### Troubleshoot
If you get trouble installing the correct verion consiider updating your Gemfile like this:

```
source "https://rubygems.org"

gem "jekyll", "~> 4.3.0"
gem "jekyll-theme-chirpy", "~> 6.5", ">= 6.5.5"
```

### 7. Serve Your Site Locally
Run the following command to serve your site locally:
```bash
bundle exec jekyll serve
```

This will start a local server at `http://localhost:4000`, where you can view your site.
