---
weight: 410
title: "Are there mirror management alternatives?"
description: ""
icon: menu_book
date: 2026-06-12T18:00:22-07:00
lastmod: 2026-06-12T18:00:22-07:00
draft: false
tags: ["docs","userguides","endeavourOS","linux","faqs"]
images: []
---

Popular alternatives to mirror management are listed on the [Arch mirrors wiki][arch-mirrors]. Some programs can automate mirror management when configured properly.

One such example is `ghostmirror`, which:

1. Checks that mirrors are __synchronized__.
   
2. Performs __download speed tests__ on top of the usual ping test.
   
3. Automates the process via `systemd`.

See: [`ghostmirror` (AUR)][ghostmirror-aur], [`ghostmirror` wiki][ghostmirror-wiki]

---

### How does `pacman` use mirrors?

When the user enters `sudo pacman -Syu` into a terminal, the `pacman` package manager begins the process to sync, refresh, and update the system.

  First, `pacman` attempts to connect and sync to Arch and EOS package databases. If successful:
  
  1. `pacman` searches for and detects new versions of packages/dependencies that are installed on your system.
   
  2. The terminal outputs a list of the updateable packages with a comparison of the old and new versions.
   
  3. `pacman` waits for user permission to proceed with the update. If proceeding, user is required to enter the system's root password.
   
  4. After initiating the package(s) update, `pacman` retrieves new package files from the mirror.
   
  5. If `pacman` successfully retrieves package files, it installs them then deletes old versions.

---

### What is the difference between `pacman -Syu` and `pacman -Syyu`?

The `-Syyu` option forces a refresh of all package databases, even if they appear to be up to date. This may sometimes be helpful when switching from broken to working mirrors.

However, it is not necessary to use "double" `pacman` commands in most circumstances. In the interest of keeping mirror bandwidth free for other users, they should only be used when necessary.

See: [Force `pacman` to refresh the package lists][force-refresh]

---

[force-refresh]:https://wiki.archlinux.org/title/Mirrors#Force_pacman_to_refresh_the_package_lists
[arch-mirrors]: https://wiki.archlinux.org/title/Mirrors
[arch-status]: https://archlinux.org/mirrors/status/
[reflector-aur]: https://archlinux.org/packages/?name=reflector
[reflector-wiki]: https://wiki.archlinux.org/title/Reflector
[ghostmirror-aur]: https://aur.archlinux.org/packages/ghostmirror/
[ghostmirror-wiki]: https://wiki.archlinux.org/title/Ghostmirror