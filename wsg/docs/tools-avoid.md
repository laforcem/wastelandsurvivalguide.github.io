﻿# Tools to Avoid

In this section we will go over some popular mod managers and mod tools that shouldn't be used for
Fallout New Vegas or Tale of Two Wastelands, an explanation of the issue(s), and what to use instead.

## Mod Managers to Avoid

### Vortex

Vortex features a convoluted and inconvenient conflict management system that simply isn't compatible
with how the modding community shares load orders. For example, imagine that we have been instructed 
to apply the following load order:

```txt showLineNumbers
FalloutNV.esp
Mod1.esp
Mod2.esp
Mod3.esp
```

In Mod Organizer 2, this is as easy as it gets - simply drag the files into the desired order.
Vortex, on the other hand, provides no  straightforward way to do this. Instead it relies an on overly
complex and frequently confusing system of "rules" which need to be paintakingly created one-at-a-time.

This conflict management system is cumbersome and inconvenient enough to be a dealbreaker when it comes 
to the kind of workflow we are aiming for, where we have granular control over our game and the order in
which it loads content. Additionally, Vortex doesn't track generated files, and is slower than MO2.

![Vortex moment](https://cdn.discordapp.com/attachments/267355049666019329/1084050657574658068/unknown.jpg)
_This mind-bending web of nightmares is what Vortex considers conflict resolution_

### Nexus Mod Manager/Fallout Mod Manager

Outdated/abandoned, NMM/FOMM have no virtual file system or even dynamic movement of mods with loose files.

### Mod Organizer 1

There is no reason to use Mod Organizer 1 over Mod Organizer 2.

## Modding Tools to Avoid

### LOOT

LOOT relies on a masterlist being maintained by humans, and nobody maintains that list for Fallout New Vegas, let alone for TTW. Consequently there is no underlying logic when you use LOOT on TTW - your mods will essentially be randomized. LOOT is greyed-out
when MO2 is in TTW mode, for good reason!

### Wrye Bash/Flash and Mator Smash

These programs are fully automated and will never be fully accurate. They will solve things that they
may see as conflicts, but it reality they are intentional overwrites. They will also often miss critical conflicts.

### zEdit/zClean

Neither have any real advantages over [xEdit](https://www.nexusmods.com/newvegas/mods/34703), and lack some essential
features/support than xEdit has.

### Merge Plugins Standalone/zMerge

Automated merging can potentially cause major breakage in mods, especially heavily-scripted ones.

### Ordenador/DDSopt

Breaks many textures by needlessly converting/adding/resizing alpha channels, cubemaps, and mipmaps. Use
[BSArch Pro](https://www.nexusmods.com/fallout4/mods/63243) instead.

### New Vegas Configator

Outdated and possibly dangerous. You won't need any INI tweaks other than the ones in the guide.