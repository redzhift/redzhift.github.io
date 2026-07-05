---
weight: 330
title: "FAQs"
description: "FAQs"
icon: update
date: 2026-05-12T14:09:31-07:00
lastmod: 2026-05-12T14:09:31-07:00
draft: false
tags: ["docs","userguides","endeavourOS","linux","pacman"]
images: []
---

# FAQs
## Why do I get errors when I try to update?

Outdated package databases will cause errors when `pacman` tries to retrieve the latest package files. 

This can be prevented through regular [mirror maintenance][mirrors].

{{% details title="Error: failed to commit transaction (conflicting files)" open=false %}}

__Error: failed to commit transaction (conflicting files)__:

Running a `sudo pacman -Syu` update may fail and display the following errors:

```sh
 error: failed to commit transaction (conflicting files)
 <example>: /example exists in filesystem (owned by filesystem)
 <example>: /lib/systemd/system/example.service exists in filesystem
 ```

These issues can be resolved with manual intervention. Uninstall and remove the package from the system, then reinstall/update with these two commands:
```sh
 $ sudo pacman -Rdd <pkg>
 $ sudo pacman -Syu <pkg>
 ```

{{% /details %}}

---

[mirrors]: /docs/user-guides/system-maintenance/rerank-mirrors
[downgrade]: /docs/downgrade-to-specific-date/


## Are there mirror management alternatives?

Popular alternatives to mirror management are listed on the [Arch mirrors wiki][arch-mirrors]. Some programs can automate mirror management when configured properly.

{{% details title="Ghostmirror" open=false %}}

1. Checks that mirrors are __synchronized__.
   
2. Performs __download speed tests__ on top of the usual ping test.
   
3. Automates the process via `systemd`.

See: [`ghostmirror` (AUR)][ghostmirror-aur], [`ghostmirror` wiki][ghostmirror-wiki]

{{% /details %}}

[arch-mirrors]: https://wiki.archlinux.org/title/Mirrors
[arch-status]: https://archlinux.org/mirrors/status/
[reflector-aur]: https://archlinux.org/packages/?name=reflector
[reflector-wiki]: https://wiki.archlinux.org/title/Reflector
[ghostmirror-aur]: https://aur.archlinux.org/packages/ghostmirror/
[ghostmirror-wiki]: https://wiki.archlinux.org/title/Ghostmirror

---

## What is AUR?

The __Arch User Repository__ (known as __AUR__) is a large library of community user-produced packages for Arch Linux.

The community votes on popular packages to include in the official Arch `extra` repository. 

> [!WARNING]\
> AUR packages are community-maintained and __unofficial__. Check for any suspicious package dependencies, and check build files (i.e. `PKGBUILD`) for any malicious code BEFORE installation.

{{% details title="Download and install AUR packages" open=false %}}
{{% steps %}}
  
1. Clone the `git` repository listed on the package's AUR page:
   
   ```sh
    git clone https://aur.archlinux.org/<pkg>.git
   ```

2. Change into the package directory:

    ```sh
    cd <pkg>
    ```

3. Build and install the package with:
   
   ```sh
    makepkg -si
    # or
    pacman -U pkg-vers-1.0.1.pkg.tar.zst
   ```
{{% /steps %}}
{{% /details %}}