var relearn_searchindex = [
  {
    "breadcrumb": "Jin's Portfolio",
    "content": "Well met! 🛰️✨ My name is Jin.\nMy full portfolio is available in Confluence while construction here is underway. Cheers!\n🧠 Currently learning… Full stack fundamentals via The Odin Project (now: JavaScript)\nHow to build Hugo static sites\nAtlassian tools (Confluence, Jira, Trello)\n🔧 Currently working on… Static site portfolio (Hugo)\nHTML/CSS review\nSam-Il (삼일) - 3rd dan black belt pattern in ITF Taekwondo\n📫 Reach me at… redzhift@tuta.io\nor\nlinkedin.com/in/redzhift",
    "description": "Well met! 🛰️✨ My name is Jin.\nMy full portfolio is available in Confluence while construction here is underway. Cheers!\n🧠 Currently learning… Full stack fundamentals via The Odin Project (now: JavaScript)\nHow to build Hugo static sites\nAtlassian tools (Confluence, Jira, Trello)\n🔧 Currently working on… Static site portfolio (Hugo)",
    "tags": [],
    "title": "About",
    "uri": "/about/index.html"
  },
  {
    "breadcrumb": "Jin's Portfolio \u003e Endeavour OS Guides",
    "content": "Contents Find kernel id with bootctl Edit boot loader config Verify and reboot Additional information Overview Your system can have multiple kernels (or installations) of the same Linux distro. This is typically from having different ISO images, such as EOS Mercury, Titan, and Ganymede. The newest kernel is usually booted by default, but can be adjusted to user preference.\nTo change the default kernel at system boot, you need to identify and adjust the kernel ids used in the boot loader config file.\nThis guide is for systems using the default systemd-boot UEFI boot manager in Endeavour OS.\n1. Find kernel id with bootctl Change to the root user with sudo -s and enter your password.\nCheck which kernel is currently set as default with:\n$ bootctl list The terminal will display installed kernel information, indicating which kernel was (selected) at boot, and which one is set as (default).\n# kernel currently booted and set as default type: Boot Loader Specification Type 1 (.conf) title: EndeavourOS (6.19.11-arch1-1) (default) (selected) # current id: 1fcde8d015be4360aa122975ea19eca2-6.19.11-arch1-1.conf source: ... sort-key: endeavouros-6.19.11-arch1-1 version: 6.19.11-arch1-1 machine-id: 1fcde8d015be4360aa122975ea19eca2 # current default id linux: ... initrd: ... options: ... # kernel to set as default at boot type: Boot Loader Specification Type 1 (.conf) title: EndeavourOS (6.19.12-arch1-1) id: af2ba735c1714a3ebdd24c10355d5b20-6.19.12-arch1-1.conf source: ... sort-key: endeavouros-6.19.12-arch1-1 version: 6.19.12-arch1-1 machine-id: af2ba735c1714a3ebdd24c10355d5b20 # id to set as default ``` Copy the machine-id of the kernel you want to set as the default. In this example:\nCurrent id: 1fcde8d015be4360aa122975ea19eca2 New id: af2ba735c1714a3ebdd24c10355d5b20 2. Edit boot loader config Enter nano /efi/loader/loader.conf to edit the boot loader config in the terminal.\nOn the line containing default, replace the old machine-id with the updated id.\nAdd a wildcard/asterisk after the id (no space in between). This ensures the same kernel is booted regardless of release version, which can change after system updates.\ndefault af2ba735c1714a3ebdd24c10355d5b20* # add wildcard * timeout 20 # wait time (sec) before system boots default console-mode auto reboot-for-bitlocker 1 Double check the kernel id you entered is an exact match with the one from bootctl list.\nPress Ctrl+X to finish editing, then press Y to save the updated config.\n3. Verify and reboot Run bootctl list again to verify the desired kernel has (default) by the kernel title.\ntype: Boot Loader Specification Type 1 (.conf) title: EndeavourOS (6.19.12-arch1-1) (default) # new default id: af2ba735c1714a3ebdd24c10355d5b20-6.19.12-arch1-1.conf source: ... Reboot the system to check that the correct kernel boots by default.\n4. Additional information Useful resources:\nEOS Boot Configuration wiki Arch Linux kernels Use ls to find kernel id A list of the installed kernels can also be viewed with the ls command. This does not indicate which kernel is set to default, but has a much simpler terminal output.\nEnter ls /efi/loader/entries/ to display a list of the kernel entries.\n$ sudo ls /efi/loader/entries/ 1fcde8d015be4360aa122975ea19eca2-6.18.21-1-lts.conf\t1fcde8d015be4360aa122975ea19eca2-6.19.11-arch1-1-fallback.conf 1fcde8d015be4360aa122975ea19eca2-6.18.21-1-lts-fallback.conf af2ba735c1714a3ebdd24c10355d5b20-6.19.12-arch1-1.conf 1fcde8d015be4360aa122975ea19eca2-6.19.11-arch1-1.conf\taf2ba735c1714a3ebdd24c10355d5b20-6.19.12-arch1-1-fallback.conf The kernel id is the identifying string in front of the version number.\n# kernel id # version number af2ba735c1714a3ebdd24c10355d5b20-6.19.12-arch1-1.conf 1fcde8d015be4360aa122975ea19eca2-6.19.11-arch1-1.conf\tEnter ls -l /efi/loader/entries/ to list all kernel entries with last updated dates.\n$ sudo ls -l /efi/loader/entries/ total 24 -rw-r----- 1 root root 534 Apr 6 03:23 1fcde8d015be4360aa122975ea19eca2-6.18.21-1-lts.conf -rw-r----- 1 root root 565 Apr 6 03:23 1fcde8d015be4360aa122975ea19eca2-6.18.21-1-lts-fallback.conf -rw-r----- 1 root root 542 Apr 6 03:23 1fcde8d015be4360aa122975ea19eca2-6.19.11-arch1-1.conf -rw-r----- 1 root root 573 Apr 6 03:23 1fcde8d015be4360aa122975ea19eca2-6.19.11-arch1-1-fallback.conf -rw-r----- 1 root root 542 Apr 20 18:18 af2ba735c1714a3ebdd24c10355d5b20-6.19.12-arch1-1.conf -rw-r----- 1 root root 573 Apr 20 18:18 af2ba735c1714a3ebdd24c10355d5b20-6.19.12-arch1-1-fallback.conf In most cases, the (selected) kernel is likely the last updated file. In this case, it would be the entry accessed on Apr 20 18:18.\nWhile the ls -l does not provide exact details like bootctl list. The simplified output is useful as a quick overview of the kernels installed on your system.\nUse cat to view boot config While bootctl list provides detailed information on installed kernels, you can use cat to view the boot loader config file.\nEnter sudo cat /efi/loader/loader.conf to display the boot loader config.\n$ sudo cat /efi/loader/loader.conf default af2ba735c1714a3ebdd24c10355d5b20* # kernel id timeout 20 console-mode auto reboot-for-bitlocker 1",
    "description": "Contents Find kernel id with bootctl Edit boot loader config Verify and reboot Additional information Overview Your system can have multiple kernels (or installations) of the same Linux distro. This is typically from having different ISO images, such as EOS Mercury, Titan, and Ganymede. The newest kernel is usually booted by default, but can be adjusted to user preference.",
    "tags": [],
    "title": "Change default kernel",
    "uri": "/endeavour-os-guide/change-default-kernel/index.html"
  },
  {
    "breadcrumb": "Jin's Portfolio \u003e Endeavour OS Guides",
    "content": "Downgrade to specific date The eos-shifttime application can revert system packages to their state at a specified date. This tool is useful for when recent updates cause issues with system or program functionalities.\nOpen a terminal window and run eos-shifttime with root permissions.\nSelect the date to revert to on the GUI window, then click Revert.\nReboot to apply the changes. Using eos-shifttime does not revert AUR packages. The downgrade only applies to official Arch packages from the archive repositories.\nTo set up eos-shifttime to conveniently run from the Welcome app, follow the steps in the Adding own commands guide.\nThe full eos-shifttime script can also be viewed at /usr/bin/eos-shifttime. It was formerly known as the “Easy Downgrade by Date” tool.",
    "description": "Downgrade to specific date The eos-shifttime application can revert system packages to their state at a specified date. This tool is useful for when recent updates cause issues with system or program functionalities.\nOpen a terminal window and run eos-shifttime with root permissions.\nSelect the date to revert to on the GUI window, then click Revert.",
    "tags": [],
    "title": "Downgrade to specific date",
    "uri": "/endeavour-os-guide/downgrade-to-specific-date/index.html"
  },
  {
    "breadcrumb": "Jin's Portfolio",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Endeavour OS Guides",
    "uri": "/endeavour-os-guide/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Jin's Portfolio",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Jin's Portfolio",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Posts",
    "uri": "/posts/index.html"
  },
  {
    "breadcrumb": "Jin's Portfolio \u003e Posts",
    "content": "Introduction This is bold text, and this is emphasized text.\nVisit my portfolio here!",
    "description": "Introduction This is bold text, and this is emphasized text.\nVisit my portfolio here!",
    "tags": [],
    "title": "Test Post",
    "uri": "/posts/test-post/index.html"
  },
  {
    "breadcrumb": "Jin's Portfolio",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Jin's Portfolio",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
