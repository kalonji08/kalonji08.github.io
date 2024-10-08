---
title: "How to Install Pilon 1.24 on Linux"
date: 2024-07-08 08:32:08 +1000
categories: [Bioinformatics]
tags: [NGS assembly, genomes, Github]
---
**Pilon** is a bioinformatics software tool used for improving draft genome assemblies. It corrects bases, fixes misassemblies, and fills gaps by aligning sequencing reads to the draft genome. Pilon is particularly useful for refining assemblies from second-generation sequencing technologies like Illumina, making them more accurate and contiguous.

### Prerequisites

Before installing Pilon, ensure that you have the following prerequisites:

1. **Java Runtime Environment (JRE) version 11 or greater**: Pilon requires Java to run.
2. **SBT (Scala Build Tool)**: Needed to compile Pilon from source.

### Step-by-Step Installation Guide

### Step 1: Install Java

First, ensure you have Java installed. You can check if Java is installed by running:

```bash
java -version

```

If Java is not installed, you can install it using:

```bash
sudo apt update
sudo apt install openjdk-11-jdk

```

### Step 2: Install SBT

Add the SBT repository and install SBT:

```bash
echo "deb <https://repo.scala-sbt.org/scalasbt/debian> all main" | sudo tee /etc/apt/sources.list.d/sbt.list
echo "deb <https://repo.scala-sbt.org/scalasbt/debian> /" | sudo tee /etc/apt/sources.list.d/sbt_old.list
curl -sL "<https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xC99A6EFAE10A2942>" | sudo apt-key add
sudo apt-get update
sudo apt-get install sbt

```

If you encounter issues with the key server, you can manually download and install SBT as follows:

1. **Download the SBT package:**
    
    ```bash
    wget <https://github.com/sbt/sbt/releases/download/v1.5.5/sbt-1.5.5.tgz>
    
    ```
    
2. **Extract the package:**
    
    ```bash
    tar xzf sbt-1.5.5.tgz
    
    ```
    
3. **Move the extracted files to a suitable location:**
    
    ```bash
    sudo mv sbt /usr/local/sbt
    
    ```
    
4. **Add SBT to your PATH:**
    
    ```bash
    echo 'export PATH=/usr/local/sbt/bin:$PATH' >> ~/.bashrc
    source ~/.bashrc
    
    ```
    

Verify the SBT installation:

```bash
sbt sbtVersion

```

### Step 3: Download Pilon

Download the Pilon 1.24 source code from the official repository:

```bash
wget <https://github.com/broadinstitute/pilon/releases/download/v1.24/pilon-1.24.jar> -P ~/Downloads

```

Extract the downloaded files:

```bash
cd ~/Downloads
mkdir pilon-1.24
mv pilon-1.24.jar pilon-1.24/

```

### Step 4: Prepare the Build Environment

Create the necessary directory for the symbolic link:

```bash
mkdir -p ~/lib/pilon

```

### Step 5: Build Pilon

Navigate to the Pilon directory and run the build script:

```bash
cd ~/Downloads/pilon-1.24
./build.sh

```

This script will compile Pilon using SBT, fetch all necessary dependencies, and create a symbolic link to the compiled jar file in `~/lib/pilon/pilon-dev.jar`.

### Step 6: Verify the Installation

Run the following command to verify that Pilon is installed correctly:

```bash
java -jar ~/lib/pilon/pilon-dev.jar --help

```

This should display the help message for Pilon, indicating that it is ready for use.

### Using Pilon

To use Pilon for your genome assembly improvement tasks, you can run the following command, replacing `genome.fasta`, `frags.bam`, `jumps.bam`, and `unpaired.bam` with your actual file paths:

```bash
java -jar ~/lib/pilon/pilon-dev.jar --genome genome.fasta --frags frags.bam --jumps jumps.bam --unpaired unpaired.bam --output pilon_output

```

By following these steps, you should be able to successfully install and use Pilon 1.24 on your Linux system. If you encounter any issues, refer to the official [Pilon documentation](https://github.com/broadinstitute/pilon) for additional guidance.