(() => {
    if (window.hasRunGPMMessageHandler) {
        return;
    }
    window.hasRunGPMMessageHandler = true;
    
    window.googleMusic = new GoogleMusic(window);
    const PLAY_PAUSE = "toggle_play_pause";
    const NEXT = "skip_next";
    const PREV = "skip_prev";

    browser.runtime.onMessage.addListener((message) => {
        switch (message.command) {
            case PLAY_PAUSE:
                window.googleMusic.playback.playPause();
                break;
            case NEXT:
                window.googleMusic.playback.forward();
                break;
            case PREV:
                window.googleMusic.playback.rewind();
                break;
        }
    });
})();