// Constructor: creates a new playlist with a name, an empty songs array,
// and no current song. "this" refers to the new object being created.
function Playlist(name) {
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}
 
// Adds a song to the end of the songs array.
// "this" refers to the playlist instance calling the method.
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);
};
 
// Sets currentSong to the first song and logs it, if any songs exist.
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
  }
};
 
// Removes the first song and plays the next one.
// shift() removes the first item and shifts the rest up by one index.
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};
 
// Logs the playlist name and all song titles as a readable string.
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};
 
// Improvement idea: skipSong() and playFirst() only log messages when
// something goes wrong (like an empty playlist). Returning true/false
// instead would let calling code actually react to failures, not just
// see a console message.
 
// New method: removes a song by title using filter(), a higher-order
// function. If the removed song was playing, currentSong updates to
// whatever is now first (or null if the playlist is empty).
Playlist.prototype.removeSong = function(songTitle) {
  const wasCurrentSong = this.currentSong === songTitle;
 
  this.songs = this.songs.filter(song => song !== songTitle);
 
  if (wasCurrentSong) {
    this.currentSong = this.songs.length > 0 ? this.songs[0] : null;
  }
 
  console.log(`Removed "${songTitle}". Current song is now:`, this.currentSong);
};
 
let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
 
myMix.removeSong("Evening Jazz");
myMix.listSongs();
 
