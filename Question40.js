// Function to create an album object
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    // Add tracks to the album if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    // Add tracks to the album if provided
    if (tracks === undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Function calls to create three different albums
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12); // Including the number of tracks
var album3 = make_album("Artist3", "Album3");
// Print each return value to show album information
console.log(album1);
console.log(album2);
console.log(album3);
