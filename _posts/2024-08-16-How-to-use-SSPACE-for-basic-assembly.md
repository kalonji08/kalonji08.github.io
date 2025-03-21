---
title: "How to Run SSPACE Basic for Genome Assembly Scaffolding"
date: 2024-08-16 08:32:08 +1000
categories: [Bioinformatics]
tags: [NGS assembly, genomes, Github]
---

SSPACE Basic is a powerful tool used in bioinformatics to improve the contiguity of genome assemblies by scaffolding contigs using paired-end and mate-pair sequencing data. This guide will walk you through the steps to correctly run SSPACE Basic on a Linux system, from installation to execution, using detailed code examples.

### Prerequisites

Before starting, ensure you have:

- A Linux system
- Basic knowledge of the command line
- Internet connection for downloading the tool
- Installed Perl and necessary Perl modules

### Step 1: Download and Install SSPACE Basic

1. **Download SSPACE Basic**:
    
    ```bash
    wget <http://bioinfo.genomics.org.cn/SSPACE/SSPACE_Basic_v2.0.tar.gz>
    
    ```
    
2. **Extract the Tarball**:
    
    ```bash
    tar -xvzf SSPACE_Basic_v2.0.tar.gz
    
    ```
    
3. **Navigate to the SSPACE Directory**:
    
    ```bash
    cd SSPACE_Basic_v2.0
    
    ```
    
4. **Ensure Dependencies**:
Make sure Perl is installed and the necessary modules are available:
    
    ```bash
    perl -v
    sudo cpan Getopt::Long
    sudo cpan File::Basename
    
    ```
    

### Step 2: Add SSPACE Basic to Your PATH

To run the SSPACE Basic script from anywhere, add its directory to your system's PATH environment variable.

1. **Open Your Shell Configuration File**:
For Bash:
    
    ```bash
    nano ~/.bashrc
    
    ```
    
    For Zsh:
    
    ```bash
    nano ~/.zshrc
    
    ```
    
2. **Add the SSPACE Directory to PATH**:
    
    ```bash
    export PATH=$PATH:/path/to/SSPACE_Basic_v2.0
    
    ```
    
3. **Source the Configuration File**:
For Bash:
    
    ```bash
    source ~/.bashrc
    
    ```
    
    For Zsh:
    
    ```bash
    source ~/.zshrc
    
    ```
    

### Step 3: Prepare Input Files

1. **Scaffolds File**:
Ensure your scaffolds file is in FASTA format. Example:
    
    ```
    /path/to/your/balance_SC.fasta
    
    ```
    
2. **Libraries File**:
Create a `libraries.txt` file containing information about your paired-end reads:
    
    ```
    lib1 /path/to/unmapped_SCOMGI1_1.fastq /path/to/unmapped_SCOMGI1_2.fastq 500 0.05 FR
    
    ```
    

### Step 4: Running SSPACE Basic

Navigate to the directory containing your files and run the command:

```bash
cd /path/to/your/files/
perl /path/to/SSPACE_Basic_v2.0/SSPACE_Basic.pl -l libraries.txt -s balance_SC.fasta -x 1 -T 16 -b SCoutput_folder

```

### Detailed Command Breakdown

- `l libraries.txt`: Specifies the file with library information.
- `s balance_SC.fasta`: Specifies the input scaffolds file.
- `x 1`: Indicates to extend the contigs.
- `T 16`: Specifies the number of threads to use.
- `b SCoutput_folder`: Base name for your output files, effectively specifying the output directory.

### Example Directory Structure

Ensure your directory structure looks like this:

```
/path/to/your/files/
  ├── balance_SC.fasta
  ├── unmapped_SCOMGI1_1.fastq
  ├── unmapped_SCOMGI1_2.fastq
  └── libraries.txt

```

### Example Libraries File

Here’s an example `libraries.txt` file with one library:

```
lib1 /path/to/unmapped_SCOMGI1_1.fastq /path/to/unmapped_SCOMGI1_2.fastq 500 0.05 FR

```

### Troubleshooting

1. **Invalid File Paths**:
Ensure all file paths are correct and accessible.
2. **Permissions**:
Make sure files have the appropriate read permissions:
    
    ```bash
    chmod +r /path/to/your/files/*
    
    ```
    
3. **Check Standard Deviation Proportion**:
Ensure the standard deviation is a fraction between 0.00 and 1.00.

By following these steps, you can effectively use SSPACE Basic to scaffold your genome assemblies, improving the contiguity and quality of your genome sequence. This guide provides a detailed walkthrough to ensure you can run SSPACE Basic successfully, from installation to execution. Happy scaffolding!

