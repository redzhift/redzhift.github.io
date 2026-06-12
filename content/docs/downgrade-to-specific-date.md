
+++
date = '2026-06-06T16:58:36-07:00'
draft = false
title = 'Downgrade to specific date'
+++

> Note: This guide was originally published on [GitHub][gh] and is also available in [Confluence][pf].

## Downgrade packages with `eos-shifttime`

The `eos-shifttime` application can revert system packages to their state at a specified date. This tool is useful for when recent updates cause issues with system or program functionalities.

1. Open a terminal window and run `eos-shifttime` with root permissions.

2. Select the date to revert to on the GUI window, then click **Revert**.

![A GUI window for the `eos-shifttime` tool displaying a monthly calendar. The selected date is January 2, 2026.][eos-shifttime]

3. **Reboot** to apply the changes.

> **IMPORTANT**
> 
> Using `eos-shifttime` does not revert AUR packages. The downgrade only applies to official Arch packages from the archive repositories.

## Set up shortcut

To set up `eos-shifttime` to conveniently run from the Welcome app, follow the steps in the [Adding own commands guide][set-command].

The full `eos-shifttime` script can also be viewed at `/usr/bin/eos-shifttime`. It was formerly known as the ["Easy Downgrade by Date"][downgrade-wiki] tool.

[downgrade-wiki]: https://discovery.endeavouros.com/pacman/easy-downgrade-by-date/2021/06/
[eos-shifttime]: /images/eos-shifttime.png
[set-command]: https://gitlab.com/endeavouros-filemirror/welcome/blob/main/Adding-own-commands.md
[gh]: https://github.com/redzhift/mywiki/wiki/Downgrade-to-specific-date
[pf]: https://redzhift.atlassian.net/wiki/spaces/~jcho/pages/10321937/Downgrade+package+to+specific+date

---

<!-- EOF -->

