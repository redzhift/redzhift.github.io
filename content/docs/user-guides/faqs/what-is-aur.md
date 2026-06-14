---
weight: 420
title: "What is the AUR?"
description: ""
icon: database
date: 2026-06-12T18:00:22-07:00
lastmod: 2026-06-12T18:00:22-07:00
draft: false
tags: ["docs","userguides","endeavourOS","linux","faqs"]
images: []
---

The __Arch User Repository__ (known as __AUR__) is a large library of community user-produced packages for Arch Linux.

Popular and well-maintained packages are voted on by the community to include in the official Arch `extra` repository. 

---

__To download and install AUR packages__:
  
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

{{< alert context="danger" text="__Warning!__ AUR packages are community-maintained and __unofficial__. Check for any suspicious package dependencies, and check build files (i.e. `PKGBUILD`) for any malicious code BEFORE installation." />}}

---