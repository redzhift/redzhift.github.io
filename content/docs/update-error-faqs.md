+++
date = '2026-03-12T18:36:43-07:00'
draft = true
title = "EndeavourOS Newbie FAQs"
tags = ["docs","userguide","endeavourOS","linux","pacman","mirrors","faqs"]
+++

[force-refresh]:https://wiki.archlinux.org/title/Mirrors#Force_pacman_to_refresh_the_package_lists
[arch-mirrors]: https://wiki.archlinux.org/title/Mirrors
[arch-status]: https://archlinux.org/mirrors/status/
[reflector-aur]: https://archlinux.org/packages/?name=reflector
[reflector-wiki]: https://wiki.archlinux.org/title/Reflector

## Why am I getting errors when I try to update?

Some update errors are caused by issues with mirrors and mirrorlist configurations. These issues can be fixed by re-ranking mirrors.

> __Important!__\
> Outdated package databases will cause errors when `pacman` tries to retrieve the latest package files. This can be fixed through regular mirror maintenance.
> 
> See: [Update mirrors guide][Update-mirrors]

[mirrors]: /docs/update-mirrors/

---

## Can I undo or revert updates?
The `eos-shifttime` tool allows users to revert system packages to versions of specified dates.

To learn more about using `eos-shifttime`, refer to:

- [User guide: Downgrade to a specific date][downgrade]

[downgrade]: /docs/downgrade-to-specific-date/

---

## Error: failed to commit transaction (conflicting files)
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

---

## What is the difference between `pacman -Syu` and `pacman -Syyu`?
The `-Syyu` option forces a refresh of all package databases, even if they appear to be up to date. This may sometimes be helpful when switching from broken to working mirrors.

However, it is not necessary to use "double" `pacman` commands in most circumstances. In the interest of keeping mirror bandwidth free for other users, they should only be used when necessary.

> __Note__\
> See: [Force `pacman` to refresh the package lists][force-refresh]

---

## How does `pacman` use mirrors?

When the user enters `sudo pacman -Syu` into a terminal, the `pacman` package manager begins the process to sync (`-S`), refresh (`-y`), and update (`-u`) the system.

  First, `pacman` attempts to connect and sync to Arch and EOS package databases. If successful:
  
  1. `pacman` searches for and detects new versions of packages/dependencies that are installed on your system.
   
  2. The terminal outputs a list of the updateable packages with a comparison of the old and new versions.
   
  3. `pacman` waits for user permission to proceed with the update. If proceeding, user is required to enter the system's root password.
   
  4. After initiating the package(s) update, `pacman` retrieves new package files from the mirror.
   
  5. If `pacman` successfully retrieves package files, it installs them then deletes old versions.

---

## How do I use `reflector` instead of `reflector-simple`?

Endeavour OS uses `reflector-simple`, which provides a GUI tool for `reflector` options. The same effect can be achieved with just a terminal command.
  
To update to and save the __latest 20 mirrors__ sorted by __speed__, enter:

```sh
$ reflector --latest 20 --sort rate --save /etc/pacman.d/mirrorlist
```

This process will:

 1. Retrieve the latest mirrorlist from the [Arch mirror status page][arch-mirrors].

 2. Filter/rank the mirrors by speed (until it has found 20, or a user-specified amount).

 3. Saves and overwrites the current `/etc/pacman.d/mirrorlist` config file.

> __Note__\
> Refer to the [`reflector manpage`][reflector-manpage] documentation for usage details.

[reflector-manpage]: https://man.archlinux.org/man/reflector.1

---

## Are there mirror management alternatives?

Popular alternatives to mirror management are listed on the [Arch mirrors wiki][arch-mirrors]. Some programs can automate mirror management when configured properly.

One such example is `ghostmirror`, which:

1. Checks that mirrors are __synchronized__.
   
2. Performs __download speed tests__ on top of the usual ping test.
   
3. Automates the process via `systemd`.

> __Note__\
> See: [`ghostmirror` (AUR)][ghostmirror-aur], [`ghostmirror` wiki][ghostmirror-wiki]

[ghostmirror-aur]: https://aur.archlinux.org/packages/ghostmirror/
[ghostmirror-wiki]: https://wiki.archlinux.org/title/Ghostmirror

---

## What is the AUR?

The __Arch User Repository__, also known as __AUR__, is a large library of community user-produced packages for Arch Linux.

Popular and well-maintained packages are voted on by the community to include in the official Arch *extra* repository. 

---

## How do I download and install AUR packages?

To download and install an AUR package:
  
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

### What is GPGME?

__GnuPG__ and __GPGME__ are two tools are used to safely encrypt/decrypt the package files that `pacman` retrieves from package databases. If mirrors cannot access package databases (or are out of sync), you may see `GPGME` or `PGP` related errors.

- The [GPGME][gpgme] (or GnuPG Made Easy) library provides applications easier access to GnuPG functions.

- [GnuPG][gnupg] is a command-line interface (CLI) tool and universal crypto engine. It is often used as the __crypto backend__ for applications.

[gpgme]: https://www.gnupg.org/software/gpgme/index.html
[gnupg]: https://www.gnupg.org/documentation/index.html
