---
weight: 405
title: "Why do I get errors when I try to update?"
description: ""
icon: error
date: 2026-06-12T18:00:22-07:00
lastmod: 2026-06-12T18:00:22-07:00
draft: false
tags: ["docs","userguides","endeavourOS","linux","faqs"]
images: []
---

Outdated package databases will cause errors when `pacman` tries to retrieve the latest package files. 

This can be prevented through regular mirror maintenance.

See: [Update mirrors guide][mirrors]



---

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

---

[mirrors]: /docs/user-guides/system-maintenance/rerank-arch-mirrors/
[downgrade]: /docs/downgrade-to-specific-date/