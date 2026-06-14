---
weight: 420
title: "What is the AUR?"
description: ""
icon: menu_book
date: 2026-06-12T18:00:22-07:00
lastmod: 2026-06-12T18:00:22-07:00
draft: false
tags: ["docs","userguides","endeavourOS","linux","faqs"]
images: []
---

### What is the AUR?

The __Arch User Repository__, also known as __AUR__, is a large library of community user-produced packages for Arch Linux.

Popular and well-maintained packages are voted on by the community to include in the official Arch *extra* repository. 

---

### How do I download and install AUR packages?
  
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

> __Warning!__\
> AUR packages are community-maintained and __unofficial__. BEFORE installation, it is highly recommended to check build files (i.e. `PKGBUILD`) for any malicious code.
>
> You may unintentionally install malware if you do not verify suspicious files or package dependencies!

---