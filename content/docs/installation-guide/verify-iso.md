---
weight: 130
title: "Verify file integrity"
description: "How to ensure the installation files are safe to use."
icon: "album"
date: "2026-06-23T16:10:36-07:00"
lastmod: "2026-06-23T16:10:36-07:00"
draft: false
toc: true
tags: ["linux", "linux mint", "installation", "verification"]
---

{{< alert context="danger" text="__You MUST pass this verification step before installation. Otherwise, you run a significant risk of bricking your computer and/or compromising its security.__" />}}

Before using the installation file (`.iso`), we need to make sure that it is safe to use. A safe file is:

- From a __verified source__
- Is __not corrupted__
- Has __not been tampered with__

This verification process is done by comparing __checksums__.

{{< alert context="info" text="__Checksums__, or hashes, are the __digital fingerprint__ of a file. Any modification or inconsistency creates a different output than the expected hash." />}} 

---

## Check installation `.iso` checksum

Open the [emn178 SHA256 checksum tool][checksum-emn178].

1. Click on the __Input__ box and select the `linuxmint-22.3-cinnamon-64bit.iso` file.

2. Click the __Hash__ button. The hashing process may take a while.

3. __Copy__ the generated hash text string from the __Output__ box.

    ![The three steps of adding an input file, hashing, and copying the output string from the emn178 SHA256 checksum tool.][checksum-1]

---

## Compare with expected hash

 Open the [Toolsley hash comparison tool][checksum-toolsley]. to compare the output text with the expected hash.

1. __Paste__ the output from the `.iso` hash into the __first value__ field.

    ![The Toolsley checksum tool showing a matching result for the first and second value fields.][checksum-2]

2. __Open__ the `sha256sum.txt` file you downloaded.

3. __Copy and paste__ the expected hash into the __second value__ field. This is the string of text before whichever version you downloaded.

    {{< alert context="success" text="If the output and expected hash are an exact match, the __integrity check was successful__." />}} 

This process can also  be completed using other other hashing tools, such as the [Bitakit hash comparison tool][bitakit-hash].

---

## Failed integrity check

{{< table "table-striped-columns" >}}
| Double check that you are: |        | 
|----------------------------|--------|
| Using __SHA-256__ checksums | Not other types such as SHA-128, SHA-512, MD-5, etc.  These are different types of encryption and will yield different results. |
| Comparing with the __correct expected hash__ | This value varies depending on which version you downloaded (ex. __Cinnamon__ vs. __Mate__, or __v22.3__ vs. __22.1__). |
| Hashing a __complete download__ | `.iso` files are several gigabytes, and there is a possibility the download was interrupted. In this case, download the whole file again.|
{{< /table >}}

\
If the __actual__ and __expected__ hash outputs __do not match__:

1. Delete the existing `.iso` and `sha256sum.txt` files from your computer.

2. __Re-download__ the Linux Mint `.iso` and SHA256sum `.txt` files.

3. Go through the integrity verification steps again.

---

## Signature verification

The [official Linux Mint guide](mint-guide) goes through a more thorough verification process using a [downloaded GnuPG tool](gnupg), and also checks the signature authenticity of the `sha256sum.txt` file. In the interest of brevity, this guide only covers the hash comparison step.


<!-- links -->
[mint-guide]: https://linuxmint-installation-guide.readthedocs.io/en/latest/
[gnupg]: https://forums.linuxmint.com/viewtopic.php?f=42&t=291093

[sha256sum]: /images/sha256sum-text.png
[checksum-emn178]: https://emn178.github.io/online-tools/sha256_checksum.html
[checksum-toolsley]: https://www.toolsley.com/hash.html
[bitakit-hash]: https://www.bitakit.com/hash-compare/

<!-- images -->
[checksum-1]: /images/mint/checksum-1.png
[checksum-2]: /images/mint/checksum-2.png