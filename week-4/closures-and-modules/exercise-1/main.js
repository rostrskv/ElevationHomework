"use strict";
const SongsManager = function () {
    const _songs = {};
    const _getId = url => url.split("=")[1];
    etUrl = id => "https://www.youtube.com/watch?v=" + id;
    return {
        addSong: (songName, url) => {
            _songs[songName] = _getId(url);
        },
        getSong: songName => _getUrl(_songs[songName])
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ