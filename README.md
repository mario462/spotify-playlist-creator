# Purpose
Currently, one of Spotify's limitations is that, being a premium user, you can only download music in the form of playlists. A direct consequence of this is that you cannot download an artis's most popular songs if you don't manually create a playlist first and add each of the tracks to the playlist also manually, one at a time.

The purpose of this project is to automatically create a playlist with an artist's most popular tracks in order to allow a premium user to easily download these tracks.

## Spotify Accounts Authentication

In order to generate playlists and communicate with Spotify API in general, an access token needs to be generated. This project contains the necessary code in order to achieve this, and was taken from the Github repository [Spotify Web API Auth Examples](https://github.com/spotify/web-api-auth-examples)

## Installation

This project run on Node.js. On [its website](http://www.nodejs.org/download/) you can find instructions on how to install it. You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.

Once installed, clone the repository and install its dependencies running:

    $ npm install

### Using your own credentials
You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. For the examples, we registered these Redirect URIs:

* http://localhost:8888 (needed for the implicit grant flow)
* http://localhost:8888/callback

Once you have created your app, replace the `client_id`, `redirect_uri` and `client_secret` in `get-access-token/app.js` with the ones you get from My Applications.

## Running the examples
In order to run the project, run the `app.js` file doing:

    $ node get-access-token/app.js

Then, open `http://localhost:8888` in a browser.

## Running playlist creator
Once you have the access token, replace the `access_token`, `playlist_name`, `artist_uri` and `user` in `playlist-creator/playlist-creator.js` with the proper values and run:

    $ node playlist-creator/playlist-creator.js
