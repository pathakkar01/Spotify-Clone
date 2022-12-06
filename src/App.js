import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./Helper/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import SpotifyContexProvider from "./Store/SoptifyContextProvider";
import { useContext } from "react";
import SpotifyContext from "./Store/spotify-Contex";

const Spotify = new SpotifyWebApi();

const App = () => {
  const spotifyCtx = useContext(SpotifyContext);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      Spotify.setAccessToken(_token);

      Spotify.getMe().then((user) => {
        console.log(user);
        spotifyCtx.setUser(user);
      });
    }

    console.log("Here is my tokens:", _token, hash);
  }, [spotifyCtx]);

  return (
    <>
      <SpotifyContexProvider>
        {!token && <Login />}
        {token && <Player />}
      </SpotifyContexProvider>
    </>
  );
};

export default App;
