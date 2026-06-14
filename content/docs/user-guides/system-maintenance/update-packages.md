---
weight: 210
title: "Update packages"
description: "Update your system packages with `pacman` and `yay`."
icon: update
date: 2026-05-12T14:09:31-07:00
lastmod: 2026-05-12T14:09:31-07:00
draft: false
tags: ["docs","userguides","endeavourOS","linux","pacman"]
images: []
---

There are 3 commands used to update __Endeavour OS__ systems:

{{< tabs tabTotal="3">}}
{{% tab tabName="pacman -Syu" %}}

`pacman` is the package manager used to install and update programs in Arch Linux. 

To perform a full system update and refresh, run:

```sh
$ sudo pacman -Syu
```

{{< alert context="info" text="Some commands require prepending `sudo` to them as they require `super user` (or root) permissions to run." />}}

__Example terminal output__

```sh
 [user@computer ~] $ sudo pacman -Syu
 [sudo password for user]: *
 
 :: Synchronizing package databases...
 endeavouros       17.0 KiB   3.17 KiB/s 00:05 [--------------] 100%
 core             117.4 KiB   23.3 KiB/s 00:05 [--------------] 100%
 extra              8.0 MiB   1447 KiB/s 00:06 [--------------] 100%
 multilib         125.4 KiB    416 KiB/s 00:00 [--------------] 100%

 :: Starting full system upgrade...
 resolving dependencies...
 looking for conflicting packages... 

 Package (2)           Old Version  New Version  Net Change  Download Size

 endeavouros/package-1    25.11-1   25.11.1-1     0.00 MiB    0.02 MiB
 endeavouros/package-2    12.5.2-2  12.5.3-1      0.02 MiB    3.20 MiB 

 Total Download Size:   3.21 MiB 
 Total Installed Size:  9.42 MiB
 Net Upgrade Size:      0.02 MiB
                                     # enter Y to confirm
 :: Proceed with installation? [Y/n]       # n to cancel
```

---

__Other `pacman` options__

| Command            | Description           | 
| ------------------ | --------------------- |
| `-S <pkg>`  | Installs the specific package. |
| `-Rs <pkg>` | Removes a package and also its dependencies to prevent orphan dependencies. |
| `-Ss <pkg>` | Searches for a specified package on the system. |
| `-Qi <pkg>` | Retrieve a list of the dependencies a package needs to run. |

See: [`pacman manpage`][pacman], [`pacman` wiki][pacman-wiki]

[pacman]: https://man.archlinux.org/man/pacman.8
[pacman-wiki]: https://wiki.archlinux.org/title/Pacman
[yay]: https://aur.archlinux.org/packages/yay

{{% /tab %}}
{{% tab tabName="yay" %}}

`yay`, or "yet another yogurt", is an __AUR helper__. 

To update the system's native and AUR packages, run:
```sh
$ yay
```

Like `pacman`, `yay` performs package manager tasks to download, install, update, or remove AUR packages. 
- It is recommended to run this command every 1 to 2 weeks.
- Keep an eye out for any AUR-related news to make certain of package statuses.

---

The terminal lists packages available to upgrade and may ask for the user to select. Select the options for each one, or hit `ENTER` to apply default options:

  1. Which package provider should be used (where to download files from)
  2. If any packages should be excluded from the upgrade
  3. If the Make dependencies should also be removed
  4. Etc.

{{< alert context="info" text="The __Arch User Repository__, also known as __AUR__, is a large library of community user-produced packages for Arch Linux." />}}


See: `yay` [(AUR)][aur], [`yay` commands list][yay-commands], [Arch User Repository (AUR)][aur], [AUR helpers][aur-helpers]

[yay-commands]: https://linuxcommandlibrary.com/man/yay
[aur]: https://aur.archlinux.org/
[aur-helpers]: https://wiki.archlinux.org/title/AUR_helpers

{{% /tab %}}
{{% tab tabName="eos-update" %}}

__EndeavourOS__ provides an update script that utilizes `pacman` and `yay` to run updates with additional options.

```sh
$ eos-update
```

In practice, `eos-update --aur` and `eos-update` perform the same tasks as `yay` and `pacman -Syu`, but provide an added layer of options. Some options may require more advanced setup.

Notably, running `eos-update` may be more helpful for users just needing a quick fix to the system, and/or for users who do not update the system frequently.

---

__`eos-update --help` output__
```sh
$ eos-update --help
  eos-update is a package updater for EndeavourOS and Arch.

  eos-update is implemented as a wrapper around commands pacman and optionally yay/paru.
  Essentially runs commands 'pacman -Syu' and optionally 'yay -Sua' or 'paru -Sua'.
 
  eos-update includes (by default) special help in the following situations:
  - A dangling pacman db lock file (/var/lib/pacman/db.lck).
  - Disk space availability for updates (with a configurable minimum space).
  - Keyring package updating before updating other packages.
  - Running the 'sync' command after update. 
 
  Optional help: 
  - Can clear package databases in case of constant problems with them.
  - Can reset keyrings in case of constant problems with them.
  - Can check the validity of the locally configured lists of mirrors.
  - Updates AUR packages (with option --helper, see Usage below).
  - Ad hoc check for Nvidia GPU driver vs. kernel updates (non-dkms only).
 ```

{{% /tab %}}
{{< /tabs >}}


---

