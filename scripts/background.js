const PLAY_PAUSE = "toggle_play_pause";
const NEXT = "skip_next";
const PREV = "skip_prev";
const NONE = "none";

const validCommands = [PLAY_PAUSE, NEXT, PREV];

/**
 * Return a canonical constant representing the correct command
 * @param {string} command: the name of the triggered command 
 */
function matchCommand(command) {
    // hacky solution because there can be only one key combination per command
    for (let i of validCommands) {
        if (command.startsWith(i)) return i;
    }
    return NONE;
}

/**
 * Send a message to the GPM_message_handler script to perform the given command
 * @param {string} command: the command to run
 */
function executeGoogleMusicCommand(command) {
    if (validCommands.indexOf(command) > -1) {
        browser.tabs.query({url: "*://play.google.com/music/listen*"})    
        .then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, { 
                command: command 
            })
        });
    }
}

// register listeners
browser.browserAction.onClicked.addListener((e) => {
    executeGoogleMusicCommand(PLAY_PAUSE)
});

browser.commands.onCommand.addListener((command) => {
    executeGoogleMusicCommand(matchCommand(command));
});