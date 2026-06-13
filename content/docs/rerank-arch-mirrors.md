+++
date = '2026-06-12T18:00:22-07:00'
draft = false
title = "Rerank Arch mirrors"
tags = ["docs","userguide","endeavourOS","linux","mirrors"]
+++

_To rerank EndeavourOS mirrors, follow [this guide][rerank-eos]._

[rerank-eos]: /docs/rerank-endeavouros-mirrors/

- [Overview](#overview)
- [Common issues: outdated mirrors](#common-issues-outdated-mirrors)

__Mirrors__ are servers located around the world that store copies of software packages. 

When upgrading packages, your EndeavourOS system utilizes multiple mirrors, which are noted in a `mirrorlist`. 

A well-maintained `mirrorlist` ensures the `pacman` package manager can access the most up-to-date package files when performing system updates. Outdated mirrors can prevent `pacman` from updating applications, including __core packages__.

> __Important!__\
> It is recommended to re-rank mirrors at least every 1-2 months.

<!---------------------------------------------------------->

### Re-rank Arch mirrors

Arch packages are updated on a frequent and unscheduled rolling-release basis. Your Arch `mirrorlist` configuration should be updated regularly so your system can access up-to-date package databases.


1. Update the Arch `mirrorlist` by running the command:

    ```sh
    $ reflector-simple
    ```

2. By default, `reflector-simple` selects the __20 fastest__ mirrors based on your set location. You can adjust these preferences in the GUI tool.
 
    [reflector-simple-1]: /images/reflector-simple-1.png
    ![A GUI Preference menu that displays after running `reflector-simple`, displaying settings such as region, filter by options, and amount.][reflector-simple-1]

> The `reflector-simple` GUI tool allows easy customization of mirror locations, the number of mirrors stored, and ranking priority (latest, fastest, etc.)

3. Hit __OK__ to confirm the selection and run the process. It is normal to see warnings as `reflector` tests various mirrors for connectivity speed and age.

4. The system will notify you once the new Arch `mirrorlist` has been generated. __Save__ to apply the configuration changes.
   
   [reflector-simple-2]: /images/reflector-simple-2.png
   ![New mirrorlist output from `reflector-simple` listing 20 U.S. mirrors ranked by speed.][reflector-simple-2]

5. __Refresh the system__ to sync the newly obtained mirrors with the Arch package databases:
   
    ```sh
    $ yay -Syyu
    ```

> __Caution!__\
>  Do not run `yay` with root permissions (`sudo`), or it may cause accidental (and potentially fatal) system changes. AUR helpers do not require root permissions to manage packages.

---

## Common issues: outdated mirrors

When `pacman` receives a command to update packages and refresh the system, it attempts to connect to the package databases stored in mirrors. Outdated mirrors can prevent `pacman` from updating your system to the newest packages. 

Common error or warning messages include:

| Terminal message       | Issue                   |
|----------------------- | ----------------------- |
| `GPGME error: No data` | Files from the package database are outdated or corrupt | 
| `failed to synchronize all databases (invalid or corrupted database (PGP signature))` | Outdated mirrors - not in sync with package databases |
| `failed retrieving file 'package-version.pkg' from arch.mirror.mx : The requested URL returned error: 404` | Mirror cannot be reached, or package files are not available | 
| `failed to commit transaction (failed to retrieve some files)` | Mirror cannot be reached, or package files are not available |
| `warning: too many errors from arch.mirror.mx, skipping for the remainder of this transaction` | Slow/unstable mirror connection (timed out) or network issues | 

If `pacman` runs into these errors during a system update, be sure to [re-rank mirrors](#re-rank-mirrors) before another update attempt.

> [!WARNING]\
> If these errors/warnings persist despite re-reranking mirrors, this may indicate __outdated AUR packages__ and require updating with `yay`.
>
> See: [System updates with `pacman` and `yay`][pacman-yay]

[pacman-yay]: ../system-maintenance/system-updates-with-pacman-and-yay.md#yay

---

