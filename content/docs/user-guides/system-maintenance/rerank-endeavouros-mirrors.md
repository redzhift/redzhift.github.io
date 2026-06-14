---
weight: 230
title: "Re-rank EndeavourOS mirrors"
description: "Keep your EndeavourOS mirrorlist up-to-date by re-ranking mirrors."
icon: menu_book
date: 2026-06-12T18:00:22-07:00
lastmod: 2026-06-12T18:00:22-07:00
draft: false
tags: ["docs","userguides","endeavourOS","linux","eos-rankmirrors"]
images: []
---

_To rerank Arch mirrors, follow [this guide][rerank-arch]._

[rerank-arch]: /docs/rerank-arch-mirrors/

__Endeavour OS__ has its own distro-unique packages, which may be slightly modified versions of Arch packages.

1. Update the Endeavour OS `mirrorlist` with:
   
    ```sh
    $ eos-rankmirrors
    ```

{{< alert context="info" text="The `eos-rankmirrors` process only shows terminal output (no GUI tool)." />}}

2. The terminal may display errors/warnings as the system tests various mirrors for connectivity and speed. It may take a few minutes to find the requisite amount of mirrors.
   - By default, the  new `mirrorlist` lists 20 fastest mirrors, comparing them with the original list.

   [rank-mirrors-1]: /images/eos-rankmirrors-1.png
   ![`eos-rankmirrors` terminal output listing timed-out mirrors and the new mirrorlist.][rank-mirrors-1]

3. Confirm and save the changes, then refresh the system with:
   
    ```sh
    $ yay -Syyu
    ```

If you do __NOT__ wish to make the  `mirrorlist` changes, __stop__ the terminal process. By default, this shortcut is bound to `Ctrl+C` in the terminal.