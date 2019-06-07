class Library {
    constructor(libName, creator) {
        this.name = libName;
        this.creator = creator;
        this.playlists = [];
    }
    addPlaylist(playlistName) {
        this.playlists.push(playlistName);
    }
}

class Playlist {
    constructor(playlistName) {
        this.name = playlistName;
        this.tracks = [];
    }

    addTracks(track) {
        this.tracks.push(track);
    }

    overallRating() {
        let overallRating = null;
        this.tracks.map(track => {
            overallRating += track.rating;
        })
        overallRating /= this.tracks.length;
        return (`${overallRating} / 5`);

    }

    totalDuration() {
        let totalDuration = 0;
        this.tracks.map(track => {
            totalDuration += track.duration;
        })
        return (`${totalDuration} seconds`);
    }
}

class Track {
    constructor(title, rating, duration) {
        this.title = title;
        this.rating = rating;
        this.duration = duration;
    }
}

const adamsLibrary = new Library("Adam's Library", "Adam");
console.log("Library created:", adamsLibrary);

const chillTracks = new Playlist("Chill Tracks");

const track01 = new Track("Kind of Blue", 5, 180);
console.log("New track:", track01);

chillTracks.addTracks(track01);
console.log("chillTracks:", chillTracks);

console.log(chillTracks.overallRating());
console.log(chillTracks.totalDuration());

adamsLibrary.addPlaylist(chillTracks);
console.log("adamsLibrary:", adamsLibrary);