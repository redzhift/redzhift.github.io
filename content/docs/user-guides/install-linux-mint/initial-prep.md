---
weight: 120
title: "Initial Prep"
description: "A checklist of tools and files needed for installation."
icon: "checklist"
date: "2026-06-23T15:58:58-07:00"
lastmod: "2026-06-23T15:58:58-07:00"
draft: false
toc: true
tags: ["linux", "linux mint", "installation", "verification"]
---

{{% alert icon=" " context="success" %}}
It is recommended to have:
- USB drive (3.0, at least 8 GB)
- External HDD or SSD device
- PC specs (RAM size, GPU model)

{{% /alert %}}

First, back up your files onto an __external HDD/SSD__. This setup lets you access and recover the files separately if needed.

## Download files

You can download from any mirror listed on the download sites. 

`.iso` downloads may take several minutes. Make sure that the download finishes completely before attempting verification.
 - [Ventoy v1.1.12 tool](ventoy) `.zip`

 - [Linux Mint](mint-22.3-zena) `.iso`

 - [Linux Mint SHA256sum](mint-zena-sha256) `.txt`
   1. __Right click__ the text on the page.
   2. __Save page as__ a `sha256sum.txt` file to the same directory as the `.iso`
   
 ![The save as window dialogue after right-clicking the SHA256sum text][sha256sum]

---

## Online tools

The following online tools are used to verify the integrity of files, ensuring the files are safe to install.

- [SHA256 checksum tool (emn178)](checksum-emn178)

- [SHA256 checksum tool (Toolsley)](checksum-toolsley)

- [Bitakit hash comparison tool](bitakit-hash)


{{< alert context="success" text="The official Linux Mint guide goes through the verification process using [downloadable software (GnuPG)](gnupug). This guide instead utilizes online tools." />}}




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
[sha256sum]: /images/sha256sum.png