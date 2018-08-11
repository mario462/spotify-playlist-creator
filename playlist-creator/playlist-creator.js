var SpotifyWebApi = require('spotify-web-api-node');

//YOU NEED TO SET THESE PARAMETERS ACCORDINGLY
var access_token = 'ACCESS_TOKEN' //YOUR ACCESS TOKEN GENERATED USING THE get-access-token PROJECT
var playlist_name = 'PLAYLIST_NAME' //THE NAME OF THE PLAYLIST TO BE CREATED
var artist_uri = 'ARTIST_URI' //THE ARTIST'S SPOTIFY URI
var user = 'USERNAME' //YOUR SPOTIFY USERNAME

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(access_token);

var parts = artist_uri.split(":")
var artist_identifier = parts[parts.length - 1]
// Get an artist's top tracks
spotifyApi.getArtistTopTracks(artist_identifier, 'US')
  .then(function(data) {
    console.log('Fetched top tracks for artist')
    var top_tracks_uris = []
    for (var i = 0; i < data.body.tracks.length; i++) {
        top_tracks_uris.push(data.body.tracks[i].uri)
    }
    // Create a private playlist
    spotifyApi.createPlaylist(user, playlist_name, { 'public' : true })
        .then(function(data) {
            console.log('Created playlist!');
            var playlist_uri = data.body.uri
            var parts = playlist_uri.split(":")
            var playlist_identifier = parts[parts.length - 1]
            // Add tracks to a playlist
            spotifyApi.addTracksToPlaylist(user, playlist_identifier, top_tracks_uris)
                .then(function(data) {
                    console.log('Added tracks to playlist!');
                }, function(err) {
                    console.log('Something went wrong!', err);
                });
        }, function(err) {
            console.log('Something went wrong!', err);
        });
    }, function(err) {
    console.log('Something went wrong!', err);
  });


