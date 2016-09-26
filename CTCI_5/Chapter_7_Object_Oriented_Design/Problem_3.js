/*
    Design a musical jukebox using object-oriented principles.
*/

// TODO: REVIEW CHAPTER AGAIN

const Queue = require('../Chapter_VII_Technical_Questions/Queue');
const assert = require('assert');

class CD {
    constructor(cd) {
        assert(typeof cd === 'object');
        this.cd = cd;
    }
    retrieveSongs() {
        return Object.keys(this.songs);
    }
}

class PlayList {
    constructor() {
        this.listOfSongs = new Queue();
    }
    playSong(Song) {
        // PLAY SONG
    }
}

class CDPlayer {
    constructor() {
        this.playList = new PlayList();
        this.cd = new CD();
    }
    playSong(Song) {
        this.playList.playSong(Song);
    }
    getPlayList() {
        return this.playlist;
    }
    setPlayList(newPlayList) {
        this.playlist = newPlayList;
    }
    getCD() {
        return this.cd;
    }
    setCD(newCD) {
        this.cd = newCD;
    }
}

class Display {
    constructor() {
        this.userFacingOptions = [];
    }
    chooseSinger() {

    }
}

class JukeBox {
    constructor(CurrentUser, CurrentCDCollection, CurrentSongSelector) {
        this.display = new Display();
        this.CDPlayer = new CDPlayer();
        this.user = CurrentUser;
        this.CDCollection = CurrentCDCollection;
        this.songSelector = CurrentSongSelector;
    }
    getCurrentSong() {
        return this.songSelector.getCurrentSong();
    }
    setUser(NewUser) {
        this.user = NewUser;
    }
}

module.exports = {
    chapterSevenProblemThreeBruteForceSolution: JukeBox,
};
