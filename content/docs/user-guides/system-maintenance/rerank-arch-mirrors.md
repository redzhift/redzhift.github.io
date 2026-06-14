---
weight: 220
title: "Re-rank Arch mirrors"
description: "Keep your Arch mirrorlist up-to-date by re-ranking mirrors."
icon: menu_book
date: 2026-06-12T18:00:22-07:00
lastmod: 2026-06-12T18:00:22-07:00
draft: false
tags: ["docs","userguides","endeavourOS","linux","reflector"]
image: ""
---

_To re-rank EndeavourOS mirrors, follow [this guide][rerank-eos]._

[rerank-eos]: /docs/user-guides/rerank-endeavouros-mirrors/

## Overview

__Mirrors__ are servers located around the world that store copies of software packages. When upgrading packages, your EndeavourOS system utilizes multiple mirrors, which are noted in a `mirrorlist`. 

A well-maintained `mirrorlist` ensures the `pacman` package manager can access up-to-date package files when performing system updates. Outdated mirrors can prevent `pacman` from updating __core packages__.

{{< alert context="warning" text="It is recommended to re-rank mirrors at least every 1-2 months to maintain an up-to-date mirrorlist." />}}

---

### Update mirrorlist

1. Update the Arch `mirrorlist` by running:

    ```sh
    $ reflector-simple
    ```

2. By default, `reflector-simple` selects the __20 fastest__ mirrors based on your location. You can adjust these preferences in the GUI tool.
 
    [reflector-simple-1]: "/assets/images/reflector-simple-1.png"
    ![A GUI Preference menu that displays after running `reflector-simple`, displaying settings such as region, filter by options, and amount.][reflector-simple-1]

   - The `reflector-simple` GUI tool allows easy customization of mirror locations, the number of mirrors stored, and ranking priority (latest, fastest, etc.)

3. Hit __OK__ to confirm the selection and run the process. It is normal to see warnings as `reflector` tests various mirrors for connectivity speed and age.

4. The system will notify you once the new Arch `mirrorlist` has been generated. __Save__ to apply the configuration changes.
   
   [reflector-simple-2]: "/assets/images/reflector-simple-2.png"
   ![New mirrorlist output from `reflector-simple` listing 20 U.S. mirrors ranked by speed.][reflector-simple-2]

5. __Refresh the system__ to sync the newly obtained mirrors with the Arch package databases:
   
    ```sh
    $ yay -Syyu
    ```

{{< alert context="danger" text="Do not run `yay` with root permissions (`sudo`), or it may cause accidental (and potentially fatal) system changes. AUR helpers do not require root permissions to manage packages." />}}

---

## Common issues: outdated mirrors

When `pacman` receives a command to update packages and refresh the system, it attempts to connect to the package databases stored in mirrors. Outdated mirrors can prevent `pacman` from updating your system to the newest packages. 

---

Common error or warning messages include:

- `GPGME error: No data` - Files from the package database are outdated or corrupt

- `failed to synchronize all databases` - Outdated mirrors - not in sync with package databases

- `The requested URL returned error: 404` -  Mirror cannot be reached

- `failed to commit transaction` - Mirror cannot be reached, or package files are not available 

- `too many errors from arch.mirror.mx` - Slow/unstable mirror connection (timed out) or network issues 


If `pacman` runs into these errors during a system update, be sure to [rerank mirrors](#update-mirrorlist) before another update attempt.

{{< alert context="warning" text="If these errors/warnings persist despite re-ranking mirrors, this may indicate __outdated packages__ and require updating with `pacman` and `yay`." />}}

>
See: __[Update with `pacman` guide][pacman]__

[pacman]: /docs/user-guides/system-maintenance/update-pacman

---

