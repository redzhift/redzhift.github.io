---
weight: 150
title: "Install from live session"
description: "How to set up partitions and complete the Linux Mint installation."
icon: "deployed_code_update"
date: "2026-06-23T16:11:03-07:00"
lastmod: "2026-06-23T16:11:03-07:00"
draft: false
toc: true
tags: ["linux", "linux mint", "installation", "liveboot", "partitions"]
---

## Overview

With your __liveboot USB__ set up, you can prepare to boot into a __live session__ of Linux Mint.

First, you need to set your computer system to recognize that it should boot from a different device at startup (your __Ventoy__ device). This option is changed in your computer’s `BIOS MENU`.

---

{{< tabs tabTotal="2">}}

{{% tab tabName="Disable secure boot in BIOS" %}}
## Disable secure boot in `BIOS MENU`

1. Reboot your computer with the __Ventoy USB__ still inserted.

2. Before the computer can fully boot, enter the `BIOS MENU` by pressing the required special key.

3. Find the option for __Secure Boot__ and ensure it is __Disabled__.

4. Return to the previous `BIOS MENU` to change the default boot option.

{{% alert icon="" context="info" %}}
The `BIOS MENU` key varies between computer models. They are most frequently `F1`, `F2`, `F8`, `F10`, `F11`, `F12`, or `Delete`.
If you’re unsure about what key you need to press, you may need to restart a few times while trying out the listed options to enter your `BIOS MENU`.
{{% /alert %}}

{{% /tab %}}

{{% tab tabName="Change default boot order" %}}

## Change default boot order

You will need to change your computer’s default boot order so that __Ventoy__ shows up at boot. 

1. Select the USB device you installed __Ventoy__ onto from the available boot options list. This will show up as the specific model and make of the USB itself.

2. Save and exit the `BIOS MENU`. The computer should now restart and load the Ventoy liveboot option menu.

3. Select the Linux Mint `.iso` and press __Enter__ to boot up Linux Mint.
{{% /tab %}}

{{< /tabs >}}

---

## Boot up live session

In a live session, you can safely test out any programs and the desktop environment without impacting the OS installed on your computer. This is a good way to test out distros before installing them as well.

1. Double-click on the __Install Linux Mint__ application on the desktop (top left corner).
   
    ![The Linux Mint desktop from a live session with the installation helper in the top left corner.][install-1]
    
2. Select the options in each step as desired for your computer setup. It is recommended to install with an internet connection for access to all files.

    ![Linux Mint installation prompt to install multimedia codecs.][install-2]

---

## Set up partitions

A __standalone__ operating system means that there is no other OS installed on the computer. 

__Multi-booting__ is when there are 2 or more OSes installed. Setting up partitions differs slightly depending on this setup.

{{% alert icon="" context="info" %}}
Dualbooting is a setup recommended for users who need to access Windows/macOS-exclusive programs on occasion. This may also be helpful for new Linux users who want to ease into using Linux Mint.
{{% /alert %}}


1. To install Linux Mint as a __standalone__ OS, select the __Erase disk and install Linux Mint__ option.

2. For a __multi-boot__ setup, select __Something else__ to manually set up your partitions.

    ![Linux Mint installation prompt for either erasing the disk partitions or setting them up manually.][install-3]

3. Refer to the following official guides for a detailed explanation on setting up partitions.

    - [Partitioning](paritions)

    - [Multi-boot](multi-boot)

4. After setting up your partitions, click on __Install Now__. The installation process may take up to a couple hours. Wait until this finishes.

    ![Linux Mint installation process][install-4]

---

## Restart computer

1. When the installation is finished, select __Restart Now__.

    ![Linux Mint installation complete notice window][install-5]

2. Keep the __liveboot USB__ inserted until the system asks you to remove it. 

3. The system will now restart and boot up Linux Mint. Welcome to the mint containment breach!



---



<!-- links -->

[lifewire-article]: https://www.lifewire.com/change-the-boot-order-in-bios-2624528
[partitions]: https://linuxmint-installation-guide.readthedocs.io/en/latest/partitioning.html
[multi-boot]: https://linuxmint-installation-guide.readthedocs.io/en/latest/multiboot.html

<!-- images -->

[lifewire-bios]: https://www.lifewire.com/thmb/7WG5p4rmzh2dBxQa5ILYAsNfPig=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/boot-options-cd-first-599596b1845b340010bd4a99.png
[install-1]: /images/mint/install-1.png
[install-2]: /images/mint/install-2.png
[install-3]: /images/mint/install-3.png
[install-4]: /images/mint/install-4.png
[install-5]: /images/mint/install-5.png
