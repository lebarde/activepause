# Activepause
This is a 0ad mod that gives the `activepause` hotkey. This gives a new Pause method that permits to play during the pause (e.g. give orders to units, plan new constructions, attack, and so on).

## Installing
If you don't know how to install a mod, please refer **[the official wifi](http://trac.wildfiregames.com/wiki/GameDataPaths)**.
If you are on a Linux box, you probably have these two `mod/` directories:
- `~/.local/share/0ad/mods/` (personal mods);
- `/usr/share/games/0ad/mods` (root mods. Checked on a Debian system).

If you are on a Windows, it should probably be `C:\Documents and Settings\SeverusRogue\My Documents\My Games\0ad\mods\`

You can install it by several means:
### Separate mod
1) Clone this repository inside your `mod/` directory.
2) Download the ZIP file of this repository, place it in the `mod/` directory, and rename it `activepause.zip`

Whenever you'll start the game, you may pass the option `-mod=activepause` for 0ad / pyrogenesis to take that into account.
### In the official mod
A nice way is to place the content of this mod into the `mods/public/` directory. In this way you will not have to pass the `-mod=activepause` option.
## Activating the hotkey
In your `user.cfg` file, add the following line:

    hotkey.activepause = "P"

Enjoy!