---
weight: 160
title: "Change default kernel"
description: "How to change which kernel your Linux system boots up by default."
icon: menu_book
date: 2026-06-08T16:58:36-07:00
lastmod: 2022-11-22T12:36:15+00:00
draft: false
tags: ["docs","userguides","endeavourOS","linux","kernel"]
images: []
---

_Note: This guide was originally published on [GitHub][gh] and is also available in [Confluence][pf]._

## Overview

[gh]: https://github.com/redzhift/mywiki/wiki/Change-default-kernel
[pf]: https://redzhift.atlassian.net/wiki/spaces/~jcho/pages/10649618/Change+default+kernel+at+boot

Your system can have multiple kernels (or installations) of the same Linux distro. This is typically from having different ISO images, such as EOS Mercury, Titan, and Ganymede. The newest kernel is usually booted by default, but can be adjusted to user preference.

To change the default kernel at system boot, you need to identify and adjust the kernel `ids` used in the `boot loader` config file.

{{< alert context="info" text="__Note__: This guide is for systems using the default `systemd-boot` UEFI boot manager in Endeavour OS." />}}

---

### Find kernel `id` with `bootctl`

1. Change to the root user with `sudo -s` and enter your password.

2. Check which kernel is currently set as default with:

      ```sh
       $ bootctl list
      ```

3. The terminal will display installed kernel information, indicating which kernel was `(selected)` at boot, and which one is set as `(default)`.

      ```sh
      # kernel currently booted and set as default 
         type: Boot Loader Specification Type 1 (.conf)      
        title: EndeavourOS (0.0.0-arch0-0)  (default) (selected) # current
           id: <current-default-id>-0.0.0-arch0-0>.conf
       source: ...
     sort-key: endeavouros-0.0.0-arch0.0
      version: 0.0.0-arch0.0
   machine-id: <current-default-id> # current default id
        linux: ...
      ```

      ```sh
      # kernel to set as default at boot
         type: Boot Loader Specification Type 1 (.conf) 
        title: EndeavourOS (0.0.0-arch0-0)
           id: <new-machine-id>-<version>-arch<#.#>.conf
       source: ...
     sort-key: endeavouros-0.0.0-arch0-0
      version: 0.0.0-arch0.0
   machine-id: <new-machine-id> # id to set as default
       ```

4. Copy the `machine-id` of the kernel you want to set as the default.

---

### Edit boot loader config

1. Enter `nano /efi/loader/loader.conf` in the terminal to edit the boot loader config.

![Terminal window showing the loader.conf file being edited with GNU nano editor][nano-efi-loader]

2. On the line containing `default`, replace the old `machine-id` with the updated `id`.

3. Add a wildcard/asterisk after the `id` (no space in between). This ensures the same kernel is booted regardless of release version, which can change after system updates.

      ```sh
        default <machine-id>* # add wildcard *
        timeout 20  # wait time (sec) before system boots default
        console-mode auto
        reboot-for-bitlocker 1
      ```

4. Double check the kernel `id` you entered is an __exact match__ with the one from `bootctl list`.

5. Press `Ctrl+X` to finish editing, then press `Y` to save the updated config.

[nano-efi-loader]: /images/nano-efi-loader-conf.png

---

### Verify and reboot

1. Run `bootctl list` again to verify the desired kernel has `(default)` by the kernel title.

     ```sh
         type: Boot Loader Specification Type 1 (.conf) 
        title: EndeavourOS (0.0.0-arch0-0)  (default) # new default
           id: <new-default-id>-0.0.0-arch0-0.conf
       source: ...
     ```

2. `Reboot` the system to check that the correct kernel boots by default.

---

## Additional information

__Useful resources__
- [EOS Boot Configuration wiki][bootconfig]
- [Arch Linux kernels][archkernel]

[bootconfig]: https://deepwiki.com/endeavouros-team/EndeavourOS-ISO/3-boot-configuration
[archkernel]: https://wiki.archlinux.org/title/Kernel

---

### Use `cat` to view boot config

While `bootctl list` provides detailed information on installed kernels, you can use `cat` to view the boot loader config file.

1. Enter `sudo cat /efi/loader/loader.conf` to display the boot loader config.

      ```sh
       $ sudo cat /efi/loader/loader.conf
       default <your-machine-id>*  # kernel id
       timeout 20
       console-mode auto
       reboot-for-bitlocker 1
      ```
---

<!-- EOF -->