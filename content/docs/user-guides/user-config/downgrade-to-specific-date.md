---
weight: 155
title: "Downgrade with eos-shifttime"
description: "Downgrade your Arch packages by using the eos-shifttime utility tool."
icon: clock_arrow_down
date: 2026-05-13T14:09:31-07:00
lastmod: 2026-05-12T14:09:31-07:00
draft: false
tags: ["docs","userguides","endeavourOS","linux","eos-shifttime"]
images: []
---

The `eos-shifttime` application can revert system packages to their state at a specified date. 

This tool is useful for when recent updates cause issues with system or program functionalities.

1. Open a terminal window and run `eos-shifttime` with root permissions.

2. Select the date to revert to on the GUI window, then click __Revert__.

3. __Reboot__ to apply the changes.

![A GUI window for the `eos-shifttime` tool displaying a monthly calendar. The selected date is January 2, 2026.][eos-shifttime]

{{< alert context="warning" text="Using `eos-shifttime` does not revert AUR packages. The downgrade only applies to official Arch packages from the archive repositories." />}}


---

__Set up a downgrade shortcut__

To set up `eos-shifttime` to conveniently run from the Welcome app, follow the steps in the [Adding own commands guide][set-command].

The full `eos-shifttime` script can also be viewed at `/usr/bin/eos-shifttime`. It was formerly known as the ["Easy Downgrade by Date"][downgrade-wiki] tool.

[downgrade-wiki]: https://discovery.endeavouros.com/pacman/easy-downgrade-by-date/2021/06/
[eos-shifttime]: /images/eos-shifttime.png
[set-command]: https://gitlab.com/endeavouros-filemirror/welcome/blob/main/Adding-own-commands.md
[gh]: https://github.com/redzhift/mywiki/wiki/Downgrade-to-specific-date
[pf]: https://redzhift.atlassian.net/wiki/spaces/~jcho/pages/10321937/Downgrade+package+to+specific+date

---

<!-- EOF -->

