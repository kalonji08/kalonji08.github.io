---
title: "How to Create and Publish a Quarto Book on GitHub"
date: 2024-06-04 08:32:08 +1000
categories: [Tech How-to]
tags: [Quarto, R, gh-pages, Tech How-To, Github]
---
Quarto is designed to be versatile, supporting multiple environments beyond just R. In this tutorial, we'll explore how to use Visual Studio Code (VS Code) to create and publish a Quarto book. This method should work similarly across different operating systems.

## Prerequisites

Before you begin, ensure you have:

- A GitHub account.
- VS Code installed.
- Quarto installed on your machine.

This tutorial is conducted on Ubuntu, but the process should be similar on other operating systems.

## Creating Your Quarto Book

1. **Open VS Code** and press `Ctrl + P` to open the command palette.
2. Execute the **Quarto: Create Project** command and select **Book Project**. You will be prompted to select a parent directory and name your book project directory.
    
    More information on creating a Quarto book can be found in the [official Quarto documentation](https://quarto.org/docs/books/).
    

## Setting Up GitHub

1. Go to GitHub and create a new repository. Name it after your Quarto book and set it to public.
2. Link your local Quarto book project to your GitHub repository by executing the following commands in your terminal:
    
    ```bash
    echo "# Your-Quarto-Book-Title" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin <https://github.com/yourusername/your-quartobook.git>
    git push -u origin main
    
    ```
    
3. Create a branch called `gh-pages` from your GitHub repository.
4. In your repository settings on GitHub, select **Pages** from the left menu, set the source to deploy from the `gh-pages` branch.
    
    Check the Actions menu on GitHub; it should start processing.
    

## Publishing Your Book

1. In VS Code, navigate to your project directory and create a `.github/workflows` directory. Inside this, create a `publish.yml` file by running `touch publish.yml` in your terminal.
2. Add the following GitHub Action configuration to `publish.yml` to automate the publishing process:
    
    ```yaml
    on:
      workflow_dispatch:
      push:
        branches: main
    
    name: Quarto Publish
    
    jobs:
      build-deploy:
        runs-on: ubuntu-latest
        permissions:
          contents: write
        steps:
          - name: Check out repository
            uses: actions/checkout@v4
          - name: Set up Quarto
            uses: quarto-dev/quarto-actions/setup@v2
          - name: Render and Publish
            uses: quarto-dev/quarto-actions/publish@v2
            with:
              target: gh-pages
            env:
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    
    ```
    
    This action will run whenever you push to the main branch or manually trigger it from the Actions tab. It renders your content and publishes it to GitHub Pages.
    
3. **Freeze Computations** by adding the following to your `_quarto.yml` to ensure that R, Python, and Julia code is executed locally:
    
    ```yaml
    execute:
      freeze: auto
    
    ```
    
4. Locally run `quarto publish gh-pages` to generate the necessary `_publish.yml` configuration.
5. Stage, commit, and push all changes to GitHub. Check your repository's GitHub Pages section to confirm the publication status.
6. Populate your book with content, and it should now be available at the GitHub Pages URL assigned to your repository.

This guide should help you successfully create and publish a Quarto book using VS Code and GitHub.