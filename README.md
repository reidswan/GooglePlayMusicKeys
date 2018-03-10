# GooglePlayMusicKeys
Firefox Extension to use shortcut keys to control Google Play Music playback.

# Shortcuts

Unfortunately not customizable, and with only one media key supported due to limitations in Firefox. 

### Play and Pause

- `Ctrl+Up`
- `Ctrl+Down`
- Play/Pause Media Key 

### Previous song
- `Ctrl+Left`

### Next song
- `Ctrl+Right`

## Customization

If you desperately want to change shortcuts, edit `commands.[command_name].suggested_key.default` in the `manifest.json` file where `[command_name]` is the name of the command you wish to change. If you want these changes to persist you have to get the extension resigned on addons.mozilla.org and then reinstall it. 

# Installation
In the latest versions of Firefox, navigate to about:addons; click the gear menu, choose 'Install Add-on from file...' and select the .xpi file included in the root of the repository. 

# Licence
Released to the public domain under the Unlicence. 

# Thanks to ...
twolfson's [google-music.js](https://github.com/twolfson/google-music.js) library. 
