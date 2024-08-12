---
title: "How to Install SSPACE Basic on Linux: A Step-by-Step Guide"
date: 2024-07-08 08:32:08 +1000
categories: [Bioinformatics]
tags: [NGS assembly, genomes, Github]
---
SSPACE Basic is a scaffolding tool used in bioinformatics to improve the contiguity of genome assemblies. It links contigs from fragmented genome assemblies using paired-end and mate-pair sequencing data, providing a more complete and accurate genome sequence.

In this tutorial, we will guide you through the process of installing SSPACE Basic on a Linux system.

### Prerequisites

Before you start, ensure you have the following:

- A Linux system
- Basic knowledge of the command line
- Internet connection

### Step 1: Download SSPACE Basic

First, download the SSPACE Basic tarball from the official website or repository. Use the `wget` command to download it directly to your system.

```bash
wget <http://bioinfo.genomics.org.cn/SSPACE/SSPACE_Basic_v2.0.tar.gz>

```

### Step 2: Extract the Tarball

Once the download is complete, extract the contents of the tarball using the `tar` command.

```bash
tar -xvzf SSPACE_Basic_v2.0.tar.gz

```

### Step 3: Navigate to the SSPACE Directory

Change your directory to the extracted SSPACE folder.

```bash
cd SSPACE_Basic_v2.0

```

### Step 4: Check and Install Dependencies

SSPACE Basic requires Perl and specific Perl modules. Check if Perl is installed on your system:

```bash
perl -v

```

If Perl is not installed, you can install it using your package manager. For example, on Ubuntu, run:

```bash
sudo apt-get update
sudo apt-get install perl

```

SSPACE Basic might require additional Perl modules such as `Getopt::Long` and `File::Basename`. Install them using `cpan`:

```bash
sudo cpan Getopt::Long
sudo cpan File::Basename

```

Alternatively, you can use your package manager:

```bash
sudo apt-get install libgetopt-long-descriptive-perl
sudo apt-get install libfile-basename-perl

```

### Step 5: Running SSPACE Basic

With all dependencies installed, you can now run SSPACE Basic. Use the following command format:

```bash
perl SSPACE_Basic.pl -l libraries.txt -s scaffolds.fasta -x 1

```

- `l` specifies the file with the libraries information.
- `s` specifies the input scaffolds file.
- `x` specifies the number of threads to use (optional).

### Example of libraries.txt File

The `libraries.txt` file should contain information about your paired-end and mate-pair libraries in the following format:

```
library1.fasta insert_size standard_deviation orientation
library2.fasta insert_size standard_deviation orientation

```

### Troubleshooting Tips

If you encounter any issues during installation or while running SSPACE Basic, check the following:

- Ensure Perl and required modules are correctly installed.
- Verify the paths to your input files are correct.
- Make sure the `libraries.txt` file is properly formatted.

### Conclusion

By following these steps, you should have successfully installed SSPACE Basic on your Linux system. This tool will significantly enhance your genome assembly projects by linking contigs and improving assembly continuity. Happy scaffolding!

---

Feel free to customise this tutorial according to your preferences or additional details specific to your setup. Let me know if there's anything more you'd like to add!

## add to PATH

To call the SSPACE Basic script from anywhere on your PC, you can add its directory to your system's PATH environment variable. Here’s how you can do it:

### Step 1: Open Your Shell Configuration File

Depending on the shell you are using, you will need to edit a different configuration file. For most systems, this will be either `~/.bashrc` (for Bash) or `~/.zshrc` (for Zsh).

Open the file in your preferred text editor. For example, using `nano` for Bash:

```bash
nano ~/.bashrc

```

Or for Zsh:

```bash
nano ~/.zshrc

```

### Step 2: Add SSPACE Directory to PATH

Add the following line to the end of the file, which adds your SSPACE Basic directory to the PATH environment variable:

```bash
export PATH=$PATH:/mnt/hdd2/sspace_basic-2.1.1

```

### Step 3: Source the Configuration File

After editing the file, you need to source it to apply the changes. For Bash, run:

```bash
source ~/.bashrc

```

For Zsh, run:

```bash
source ~/.zshrc

```

### Step 4: Verify the PATH Update

To ensure that the SSPACE Basic directory is now in your PATH, you can echo the PATH variable and check:

```bash
echo $PATH

```

You should see `/mnt/hdd2/sspace_basic-2.1.1` included in the list of directories.

### Step 5: Test the Script

Now you should be able to call the SSPACE Basic script from anywhere in your terminal. Simply run:

```bash
SSPACE_Basic.pl -h

```

This should display the help message for SSPACE Basic, confirming that the script is accessible from anywhere on your PC.

### Optional: Create an Alias (If Needed)

If you prefer to use a shorter command to call the script, you can create an alias. Add the following line to your shell configuration file (`~/.bashrc` or `~/.zshrc`):

```bash
alias sspace='perl /mnt/hdd2/sspace_basic-2.1.1/SSPACE_Basic.pl'

```

Then source the configuration file again:

```bash
source ~/.bashrc   # For Bash
source ~/.zshrc    # For Zsh

```

Now, you can simply use `sspace` to run the SSPACE Basic script:

```bash
sspace -h

```

This will also display the help message, confirming that the alias is set up correctly.

That's it! You can now call the SSPACE Basic script from any location on your PC. Let me know if you need any further assistance.