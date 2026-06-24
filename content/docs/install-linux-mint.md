---
weight: 30
title: "Install Linux Mint"
description: ""
icon: "browser_updated"
date: "2026-06-23T16:44:12-07:00"
lastmod: "2026-06-23T16:44:12-07:00"
draft: false
toc: true
tags: ["linux", "linux mint", "installation", "verification"]
---

This is a guide to installing __Linux Mint__ on your computer using a __Ventoy liveboot USB__. 

1. Initial prep & backup
2. Download files
3. Verify files
4. Set up Ventoy
5. Run installation

{{% alert icon="" context="success" %}}

[__Linux Mint__](mint) is a free, open-source operating system designed to work "out of the box." It is a popular alternative for those accustomed to traditional desktop OSes like Windows, offering a seamless transition and easy access to the apps that most people need.
- It is completely free to install and use.
- You can "dual boot", or install Linux Mint alongside your computer's existing OS.

{{% /alert %}}

The official [__Linux Mint Installation instructions__][mint-guide] are referenced throughout this guide. Official documentation and additional beginner-friendly guides are maintained by Linux Mint’s active community. 

Here are some places to go if you run into specific issues or need help with troubleshooting:

- [Installation guide (PDF)][pdf-guide]

- [Official Linux Mint documentation][mint-docs]

- [Linux Mint forums][mint-forums]

{{< alert context="light" text="Browse [DistroWatch](distrowatch) for a comprehensive look at all the Linux distros out there. <br><br> Should you wish to select a different one to install, note that installation may vary between the different major 'branches' of Linux." />}}

---

## Initial prep

1. Back up files
2. Download files
3. 

{{% alert icon=" " context="success" %}}
It is recommended to have:
- PC spec information (RAM size, GPU model)
- External HDD or SDD device
- USB drive (3.0, at least 8 GB)

Back up your files onto an __external HDD or SDD__. This setup lets you access the files again in case something goes awry.
{{% /alert %}}

<!-- triple tab content conaining backup tips, files to download, and online tools to use later -->


---

## Verify ISO
To create a __liveboot USB__, you first need to __verify__ the `.iso` (installation file) you intend to liveboot.

{{< alert context="danger" text="__You MUST pass this verification step before installation. Otherwise, you run a significant risk of bricking your computer and/or compromising its security.__" />}}

### Check `.iso` hash

1. Download `linuxmint-22.3-cinnamon-64bit.iso` and `sha256sum.txt` to the same directory.

2. Open the [online SHA256 file checksum tool][checksum-emn178].

3. Click on the __Input__ box and select `linuxmint-22.3-cinnamon-64bit.iso`.

4. Click __Hash__.

5. Once it finishes hashing, copy the text string from the __Output__ box.


### Compare hashes

1. Open this online hash comparison tool to compare the output text with the expected hash.

2. Paste the output from the previous step into the first value field.

  - Copy/paste the expected hash from sha256sum.txt into the second value field. This is the string of text before *linuxmint-22.3-cinnamon-64bit.iso.

image-20260520-190957.png

3. If the output and expected hash are an exact match, the integrity check was successful.


### Verify with another tool

Check the hash for linuxmint-22.3-cinnamon-64bit.iso again, using a different online hash tool.

Compare the output with the expected hash again, using the hash comparison tool.


This additional layer of verification is an alternative to the verification process from the official Linux Mint Installation Guide.

The official guide goes through a more thorough verification process using a downloaded GnuPG tool, and also checks the signature authenticity of the sha256sum.txt file.

### Failed integrity check
Delete the existing .iso and sha256sum.txt files from your computer.

Re-download the Linux Mint Cinnamon .iso and SHA256 sum .txt files

    You can try downloading from a different mirror. Typically, those in the same country will download more quickly.

Go through the integrity verification steps once more.

---




---

## Run installation




<!-- links -->
[mint]: https://www.linuxmint.com/
[mint-22.3-zena]: https://linuxmint.com/edition.php?id=326
[mint-zena-sha256]: https://mirrors.edge.kernel.org/linuxmint/stable/22.3/sha256sum.txt

[pdf-guide]: https://linuxmint-installation-guide.readthedocs.io/_/downloads/en/latest/pdf/
[mint-guide]: https://linuxmint-installation-guide.readthedocs.io/en/latest/
[mint-forums]: https://forums.linuxmint.com/
[mint-docs]: https://www.linuxmint.com/documentation.php

[distrowatch]: https://distrowatch.com/dwres.php?resource=major
[ventoy]: https://sourceforge.net/projects/ventoy/files/v1.1.12/
[gnupg]: https://forums.linuxmint.com/viewtopic.php?f=42&t=291093

[checksum-emn178]: https://emn178.github.io/online-tools/sha256_checksum.html
[checksum-toolsley]: https://www.toolsley.com/hash.html
[bitakit-hash]: https://www.bitakit.com/hash-compare/


<!-- images -->
[sha256sum]: /images/sha256sum-text.png