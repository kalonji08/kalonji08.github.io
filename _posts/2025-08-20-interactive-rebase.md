---
title: "How I fixed my messy git history with interactive rebase"
date: 2025-08-20 10:59:08 +1000
categories: [Software Development, Technology]
tags: [Git, Version Control, Tutorial, Git Rebase, Commit History, Programming, DevOps]
---

It’s a familiar story. You’ve finished your feature, you’re proud of your work, and you create a merge request (or pull request), ready for a swift review and merge. But then you look at the 'Files changed' tab and your heart sinks. Alongside your beautifully crafted code are changes from a colleague's feature, completely unrelated to your work. Your merge request is now blocked, and you've been asked to "clean up your commit history".

If you’ve ever felt a wave of panic at that request, you're not alone. I recently found myself in this exact situation. My branch, `feature/update-user-profile`, somehow contained commits that belonged to the `feature/new-dashboard` branch.

This is a common problem, but the solution is one of the most powerful tools in Git: **interactive rebase**. This guide will walk you through how I solved it, step-by-step, explaining each command along the way.

***

### How does this even happen?

Before we fix it, let's understand the cause. This issue almost always happens when you create a new branch while checked out on another feature branch, instead of the main branch (`master` or `main`).

Imagine the `master` branch is the main trunk of a tree. The correct way to work is to start your new branch from the trunk.

* **Correct way:** `master` -> `my-feature`

What often happens by mistake is we start a new branch from another branch, which is like growing a twig off another twig.

* **What happened to me:** `master` -> `feature/new-dashboard` -> `my-feature`

This means my branch contained all of its own commits *plus* all the commits from `feature/new-dashboard`. This is why my merge request was a mess.

To avoid this, always make sure you are on the main branch and that it's up to date before you create a new feature branch.

```bash
# 1. Go to the main branch
git checkout master

# 2. Get the latest updates
git pull

# 3. Now, create your new branch
git checkout -b my-new-feature
````

-----

### The solution: A step-by-step guide to interactive rebase

Our goal is to tell Git: "I want to rewrite the history of my branch. I want to start from the correct point on `master` and then apply *only* the commits that I actually wrote."

#### Step 1: Get the latest map with `git fetch`

First, we need to make sure our local Git repository knows about all the latest changes on the remote server (like GitHub or GitLab). We don't want to merge them in yet, just see them.

**What is `git fetch`?** Think of `git fetch` as downloading the latest version of a map. It doesn't move you to a new location; it just gives you the most up-to-date information about where all the roads and landmarks are.

```bash
$ git fetch origin
```

This command updates our "remote-tracking" branches, like `origin/master`.

#### Step 2: Find our common starting point with `git merge-base`

Next, we need to find the exact commit where our messy branch and `master` originally split. This is our anchor point for the rebase.

**What is `git merge-base`?** It's a command that finds the best common ancestor—or the most recent shared commit—between two branches. It’s like retracing your steps to find the last intersection you and a friend were both at before you went your separate ways.

```bash
# Make sure you are on your feature branch first
$ git checkout feature/update-user-profile

# Now find the common ancestor with the master branch
$ git merge-base feature/update-user-profile origin/master

# Git will print a long commit hash, like this:
f1cef39988570e20509b585eaee9c559e13f4a91
```

**Copy this hash\!** You'll need it for the next step.

#### Step 3: Rewrite history with `git rebase -i`

This is where the magic happens. We're going to start the interactive rebase.

**What is `git rebase`?** A rebase changes the base (the starting point) of your branch. Imagine the `master` branch is a book. Your feature branch is a new chapter you wrote on some loose pages. Rebasing is like taking your pages and attaching them to the end of the book as it exists *right now*.

The `-i` flag stands for **interactive**. This is the crucial part. It opens a text editor and gives you a list of all the commits on your branch, allowing you to act like a film director. You can cut scenes (drop commits), re-order them, or even combine them (squash).

Run the command using the hash you copied from the previous step:

```bash
$ git rebase -i f1cef39988570e20509b585eaee9c559e13f4a91
```

Your text editor will open with something like this:

```editor
pick 8935e7a feat: add new dashboard widgets  <-- Unwanted!
pick 623450c fix: correct dashboard spelling  <-- Unwanted!
pick f5a4554 feat: add user profile avatar   <-- My commit!
pick 3387175 style: update dashboard colours <-- Unwanted!
pick ec6fa2f fix: align profile fields      <-- My commit!

# Rebase ...
# Commands:
# p, pick = use commit
# d, drop = remove commit
# ...
```

All you have to do is **delete the lines for the commits you don't want**.

Your file should look like this when you're done:

```editor
pick f5a4554 feat: add user profile avatar
pick ec6fa2f fix: align profile fields
```

Now, **save the file and close the editor**. Git will instantly rewrite the history of your branch, applying only the commits you decided to keep.

#### Step 4: Update the remote with `git push --force`

Your local branch is now clean. But the remote branch on GitHub/GitLab still has the old, messy history. A regular `git push` will be rejected because your local history no longer matches the remote's history.

We need to tell the remote server: "My local history is the new source of truth. Overwrite what you have."

**What is `git push --force`?** It's an override command. It forces the remote branch to match your local branch exactly.

> **Warning:** This is a powerful and potentially destructive command. However, it is **safe to use here** because you are overwriting your *own* feature branch that nobody else is working on. **Never, ever force push to a shared branch like `master` or `main`.**

```bash
$ git push --force origin feature/update-user-profile
```

And that's it\! Refresh your merge request page. The unwanted files and commits will be gone, your history will be clean, and your request will be unblocked.

It might seem daunting at first, but learning to use interactive rebase is a huge step up in your Git skills. It gives you the confidence to fix mistakes and maintain a clean, professional commit history. Happy coding\!

```
```