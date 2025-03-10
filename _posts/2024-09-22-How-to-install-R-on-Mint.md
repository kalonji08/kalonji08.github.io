---
title: "How to Install R 4.4 on Linux Mint"
date: 2024-09-22 08:33:08 +1000
categories: [Linux]
tags: [Linux]
---
For those using Linux Mint, getting the latest version of R can sometimes feel like a challenge, especially when dependencies aren’t fully met. R 4.4 comes with a host of updates and improvements, so upgrading to the latest version is definitely worth the effort. This guide will walk you through the steps required to install R 4.4 correctly on Linux Mint, addressing common issues along the way.

### Step 1: Add the CRAN Repository

The first step in installing R 4.4 is to add the CRAN repository. CRAN (Comprehensive R Archive Network) is where R and many of its packages are maintained. Since Linux Mint is based on Ubuntu, you will be using the Ubuntu repositories.

Open a terminal and run the following commands:

```bash
sudo apt update
sudo apt install --no-install-recommends software-properties-common dirmngr

```

Next, you will need to add the public key for the CRAN repository:

```bash
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys '95C0FAF38DB3CCAD0C080A7BDC78B2DDEABC47B7'

```

Now, add the CRAN repository for Ubuntu Focal (20.04) which is compatible with Linux Mint 20.x or 21.x:

```bash
sudo add-apt-repository 'deb <https://cloud.r-project.org/bin/linux/ubuntu> focal-cran40/'

```

### Step 2: Update Your Package List

After adding the repository, you’ll need to update your package list to ensure your system is aware of the new software sources:

```bash
sudo apt update

```

### Step 3: Install R 4.4

Now, you can proceed to install R 4.4. The following command will install both the base R system and the development package, which is useful if you plan to compile R packages:

```bash
sudo apt install r-base r-base-dev

```

### Step 4: Resolving Common Issues

At this stage, you may encounter issues with unmet dependencies, such as missing libraries like `libicu66` or `libtiff5`. These dependencies are often required by R but may not be available in the latest versions of Linux Mint.

### Fixing Broken Packages

If you encounter an error about broken packages, you can attempt to resolve it by running:

```bash
sudo apt --fix-broken install

```

This will try to automatically fix the issue by installing any missing dependencies.

### Manually Installing Dependencies

If the automatic fix doesn’t work, you may need to install the required libraries manually. You can do this by adding an Ubuntu 20.04 (Focal) repository temporarily, as this version of Ubuntu contains the missing dependencies.

First, add the Ubuntu Focal repository:

```bash
sudo add-apt-repository 'deb <http://archive.ubuntu.com/ubuntu> focal main universe'
sudo apt update

```

Now, install the required libraries:

```bash
sudo apt install libicu66 libtiff5

```

### Step 5: Finish Installing R

Once the dependencies are resolved, you can retry the R installation:

```bash
sudo apt install r-base

```

### Step 6: Clean Up

After successfully installing R, it’s a good idea to remove the temporary Ubuntu Focal repository to avoid potential conflicts during future updates:

```bash
sudo add-apt-repository --remove 'deb <http://archive.ubuntu.com/ubuntu> focal main universe'
sudo apt update

```

### Step 7: Verify the Installation

Finally, verify that R 4.4 has been installed by checking the version:

```bash
R --version

```

This should display information about R 4.4 if the installation was successful.