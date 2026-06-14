---
weight: 220
title: "Re-rank mirrors"
description: "Re-rank mirrors every 1-2 months to keep your mirrorlist up to date."
icon: cloud_sync
date: 2026-06-12T18:00:22-07:00
lastmod: 2026-06-12T18:00:22-07:00
draft: false
tags: ["docs","userguides","endeavourOS","linux","reflector"]
image: ""
---

[rerank-eos]: /docs/user-guides/rerank-endeavouros-mirrors/

__Mirrors__ are servers located around the world that store copies of software packages. When upgrading packages, your EndeavourOS system utilizes multiple mirrors, which are noted in a `mirrorlist`. 

A well-maintained `mirrorlist` ensures the `pacman` package manager can access up-to-date package files when performing system updates. Outdated mirrors can prevent `pacman` from updating __core packages__.

---


{{< tabs tabTotal="3">}}
{{% tab tabName="Re-rank Arch mirrors" %}}

Update the Arch `mirrorlist` by running:

```sh
$ reflector-simple
```

1. Adjust your preferences in the `reflector-simple` GUI tool. You can choose the number of mirrors to store in your mirrorlist, the country of origin, and ranks based on speed or age.
    -  By default, `reflector-simple` selects the __20 fastest__ mirrors based on your location.

   [reflector-1]: /images/reflector-simple-1.png
   ![`reflector-simple` graphical tool showing options such as mirror location and ranking priority.][reflector-1]

2. Hit __OK__ to confirm the selection and run the process. It is normal to see warnings as `reflector` tests various mirrors for connectivity speed and age.

    [reflector-3]: /images/reflector-simple-3.png
   ![`eos-rankmirrors` terminal output listing timed-out mirrors and the new mirrorlist.][reflector-3]

3. The system will notify you once the new Arch `mirrorlist` has been generated. __Save__ to apply the configuration changes.

4. __Refresh the system__ to sync the newly obtained mirrors with the Arch package databases:
   
    ```sh
    $ yay -Syyu
    ```

{{% /tab %}}
{{% tab tabName="Re-rank EndeavourOS mirrors" %}}

__Endeavour OS__ has its own distro-unique packages, which may be slightly modified versions of Arch packages.

Update the Endeavour OS `mirrorlist` with:
   
 ```sh
$ eos-rankmirrors
 ```

1. The terminal may display errors/warnings as the system tests various mirrors for connectivity and speed. It may take a few minutes to find the requisite amount of mirrors.

   - By default, the  new `mirrorlist` lists 20 fastest mirrors, comparing them with the original list.

   [rank-mirrors-1]: /images/eos-rankmirrors-1.png
   ![`eos-rankmirrors` terminal output listing timed-out mirrors and the new mirrorlist.][rank-mirrors-1]

2. Confirm and save the changes, then refresh the system with:
   
    ```sh
    $ yay -Syyu
    ```

If you do __NOT__ wish to make the  `mirrorlist` changes, __stop__ the terminal process. By default, this shortcut is bound to `Ctrl+C` in the terminal.

{{< alert context="info" text="The `eos-rankmirrors` process only shows terminal output (no GUI tool)." />}}

{{% /tab %}}
{{% tab tabName="Common issues" %}}

__Common issues: outdated mirrors__

When `pacman` receives a command to update packages and refresh the system, it attempts to connect to the package databases stored in mirrors. Outdated mirrors can prevent `pacman` from updating your system to the newest packages. 

{{< table >}}
| Error message | Probable cause | 
|---------------|----------------|
| `GPGME error: No data` | Files from the package database are outdated or corrupt | 
| `failed to synchronize all databases` | Outdated mirrors - not in sync with the most recent package databases | 
| `The requested URL returned error: 404` | Mirror cannot be reached - most likely outdated and expired. | 
| `failed to commit transaction` | Mirror cannot be reached, or package files are not available . | 
| `too many errors from arch.mirror.mx` | Slow/unstable mirror connection (timed out) or network issues. |
{{< /table >}}

---

If `pacman` runs into these errors during a system update, be sure to [rerank mirrors](#update-mirrorlist) before another update attempt.

If these errors/warnings persist despite re-ranking mirrors, this may indicate __outdated packages__ and require updating with `pacman` and `yay`.

See: __[Update with `pacman` guide][pacman]__

[pacman]: /docs/user-guides/system-maintenance/update-pacman

---

{{% /tab %}}
{{< /tabs >}}


{{< alert context="danger" text="Do not run `yay` with root permissions (`sudo`), or it may cause accidental (and potentially fatal) system changes. AUR helpers do not require root permissions to manage packages." />}}


---


