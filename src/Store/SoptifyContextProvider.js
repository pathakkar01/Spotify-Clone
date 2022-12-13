import { useReducer } from "react";

import SpotifyContext from "./spotify-Contex";

const defaultContext = {
  user: null,
  token: null,
  playlists: [],
};

const soptifyReducer = (state, action) => {
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.user,
    };
  }
  if (action.type === "SET_Token") {
    return {
      ...state,
      token: action.token,
    };
  }
  if (action.type === "SET_PlayList") {
    console.log("Here", action.playlists);
    return {
      ...state,
      playlists: action.playlists,
    };
  }
  return defaultContext;
};

const SpotifyContexProvider = (props) => {
  const [spotifyState, dispatchSpotifyAction] = useReducer(
    soptifyReducer,
    defaultContext
  );

  const setUserHandler = (user) => {
    dispatchSpotifyAction({ type: "SET_USER", user: user });
  };
  const setTokenHandler = (token) => {
    dispatchSpotifyAction({ type: "SET_Token", token: token });
  };
  const setPlaylistsHandler = (playlists) => {
    console.log("Here", playlists);
    dispatchSpotifyAction({ type: "SET_PlayList", playlists: playlists });
  };

  const soptifyContext = {
    user: spotifyState.user,
    token: spotifyState.token,
    playlists: spotifyState.playlists,
    setUser: setUserHandler,
    setToken: setTokenHandler,
    setPlaylists: setPlaylistsHandler,
  };

  return (
    <SpotifyContext.Provider value={soptifyContext}>
      {props.children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContexProvider;
