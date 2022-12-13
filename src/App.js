import React from "react";

import { useEffect } from "react";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./Helper/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";

import { useContext } from "react";
import SpotifyContext from "./Store/spotify-Contex";

const Spotify = new SpotifyWebApi();

const App = () => {
  const spotifyCtx = useContext(SpotifyContext);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotifyCtx.setToken(_token);

      Spotify.setAccessToken(_token);

      Spotify.getMe().then((user) => {
        spotifyCtx.setUser(user);
      });

      Spotify.getUserPlaylists().then((playLists) => {
        spotifyCtx.setPlaylists(playLists);
        //console.log(spotifyCtx.playlists);
      });
    }
  }, [spotifyCtx]);

  return (
    <>
      {!spotifyCtx.token && <Login />}
      {spotifyCtx.token && <Player />}
    </>
  );
};

export default App;
