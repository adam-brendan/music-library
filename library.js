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




// var library = {
//     tracks: { t01: { id: "t01",
//                      name: "Code Monkey",
//                      artist: "Jonathan Coulton",
//                      album: "Thing a Week Three" },
//               t02: { id: "t02",
//                      name: "Model View Controller",
//                      artist: "James Dempsey",
//                      album: "WWDC 2003"},
//               t03: { id: "t03",
//                      name: "Four Thirty-Three",
//                      artist: "John Cage",
//                      album: "Woodstock 1952"}
//             },
//     playlists: { p01: { id: "p01",
//                         name: "Coding Music",
//                         tracks: ["t01", "t02"]
//                       },
//                  p02: { id: "p02",
//                         name: "Other Playlist",
//                         tracks: ["t03"]
//                       }
//                },
  
//     printPlaylists: function () {
//       for (var listKey in this.playlists) {
//         var playlistInfo = this.playlists[listKey];
//         var tracks = playlistInfo.tracks;
//         console.log(playlistInfo.id + ": " + playlistInfo.name + " - " + tracks.length + " tracks");
//       }
//     },
  
//     printTracks: function () {
//       for (var trackKey in this.tracks) {
//         var trackInfo = this.tracks[trackKey];
//         console.log(trackInfo.id + ": " + trackInfo.name + " by " + trackInfo.artist + " (" + trackInfo.album + ")")
//       }
//     },
  
//     printPlaylist: function (playlistId) {
//       if (this.playlists.hasOwnProperty(playlistId)) {
//         var playlistInfo = this.playlists[playlistId];
//         var trackId = playlistInfo.tracks;
//         console.log(playlistInfo.id + ": " + playlistInfo.name + " - " + trackId.length + " tracks");
//         for (var i = 0; i < trackId.length; i++) {
//           var trackObject = this.tracks[trackId[i]];
//           if (this.tracks.hasOwnProperty(trackId[i])) {
//             console.log(trackId[i] + ": " + trackObject.name + " by " + trackObject.artist + " (" + trackObject.album + ")")
//           }
//         }
//       } else {
//         console.log("Invalid input")
//       }
//     },
  
//     addTrackToPlaylist: function (trackId, playlistId) {
//       if (this.tracks.hasOwnProperty(trackId)) {
//         var trackInfo = this.tracks[trackId];
//         var tracks = trackInfo.id;
//         var playlistInfo = this.playlists[playlistId];
//         playlistInfo.tracks.push(tracks);
//         console.log("New track added:", playlistInfo.tracks);
//       } else {
//         console.log("Invalid input");
//       }
//     },
  
//     uid: function() {
//       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//     },
  
//     addTrack: function (name, artist, album) {
//       var newTrack = uid();
//       this.tracks[newTrack] = {
//         "id": newTrack,
//         "name": name,
//         "artist": artist,
//         "album": album
//       };
//       console.log(this.tracks);
//     },
  
  
//     addPlaylist: function (name) {
//       var newPlaylist = uid();
//       this.playlists[newPlaylist] = {
//         "id": newPlaylist,
//         "name": name,
//         "tracks": []
//       };
//       console.log(this.playlists);
//     }
//   }
//   console.log(library);