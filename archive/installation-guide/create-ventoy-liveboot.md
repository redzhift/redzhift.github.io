---
weight: 140
title: "Create Ventoy Liveboot"
description: "How to create a liveboot USB with Ventoy software."
icon: "usb"
date: "2026-06-23T16:10:55-07:00"
lastmod: "2026-06-23T16:10:55-07:00"
draft: false
toc: true
tags: ["linux", "linux mint", "installation", "liveboot", "usb"]
---

## Overview

A __liveboot USB__ contains a full operating system, which lets you use 'live session' without installing the OS first. 

A __live session__ is required to safely install Linux Mint.

> [!SUCCESS]\
> In this guide, __Ventoy__ software is used for a more streamlined liveboot experience. This tools lets you select from __multiple boot options__, so you can install multiple Linux distros to try out on one USB stick.
>
> Details in this guide are specific to users running __Windows OS__. For users on Linux or macOS, there is [official Ventoy documentation](ventoy-docs) available. 

---

## Verify Ventoy `.zip` file

The `ventoy-1.1.12-windows.zip` file should be [verified with the same method](verify-iso) used for the Linux Mint `.iso`.

The download link and online checksum tools are linked below:

- [Ventoy v1.1.12](ventoy)

- [SHA256 checksum tool (emn178)](checksum-emn178)

- [SHA256 checksum tool (Toolsley)](checksum-toolsley)

- [Bitakit hash comparison tool](bitakit-hash)

The __expected hash__ is found in the `sha256.txt` file:

```sh
 04620b546bcc5eeeb5971767595b3713ee3de71580a82449053c53a7cb32fcd9  ventoy-1.1.12-linux.tar.gz
 c1345277c8f3a8fcc213945687bcad5ff1d680b1d6b7b7a1cdf85f7d4a368406  ventoy-1.1.12-livecd.iso
 e70c505be08d99c55e506832f596c430a9c36f8d087f25542d3f6d332d9b6473  *ventoy-1.1.12-windows.zip
```


---

## Run `Ventoy2Disk.exe`

Once the __Ventoy__ files are verified:

1. __Insert__ the USB to use as the __liveboot USB__ into your computer.

2. __Run__ `Ventoy2Disk.exe` to start the program. This does not need to be run with admin privileges.

3. Select the USB from the list of device names and click __Install__.

> ![Ventoy2Disk installation window asking for user to select the USB device to use.][ventoy-img1]![Ventoy2Disk installation post-installation window showing Ventoy now on the USB device.][ventoy-img2]

_Images of the window interface before and after installation, from the [Ventoy website](ventoy-docs)._

 > [!WARNING]\
 > This process formats and deletes all contents on the selected USB device. Be sure to select the correct device!

---

## Copy .`iso` to USB device

1. Copy the Linux `.iso` file into the new __Ventoy USB device__.

2. This can be repeated for any other `.iso` file you want as a liveboot option.

    ![Ventoy USB device with multiple Linux distro .iso files][ventoy-img3]


<!-- links -->
[ventoy]: https://sourceforge.net/projects/ventoy/files/v1.1.12/
[ventoy-docs]: https://www.ventoy.net/en/doc_start.html

[checksum-emn178]: https://emn178.github.io/online-tools/sha256_checksum.html
[checksum-toolsley]: https://www.toolsley.com/hash.html
[bitakit-hash]: https://www.bitakit.com/hash-compare/

[verify-iso]: /docs/user-guides/install-linux-mint/verify-iso

<!-- images -->

[ventoy-img1]: /images/mint/ventoy-1.png
[ventoy-img2]: /images/mint/ventoy-2.png
[ventoy-img3]: /images/mint/ventoy-3.png