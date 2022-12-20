import { useReducer } from "react";

import SpotifyContext from "./spotify-Contex";

const defaultContext = {
  user: null,
  token: null,
  playlists: [],
  topPlaylist: [],
  currPlaying: null,
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
    return {
      ...state,
      playlists: action.playlists,
    };
  }
  if (action.type === "SET_TopPlayList") {
    return {
      ...state,
      topPlaylist: action.topPlaylist,
    };
  }
  if (action.type === "SET_CurrentPlaying") {
    return {
      ...state,
      currPlaying: action.currPlaying,
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
    dispatchSpotifyAction({ type: "SET_PlayList", playlists: playlists });
  };
  const setTopPlaylistsHandler = (topPlaylist) => {
    dispatchSpotifyAction({
      type: "SET_TopPlayList",
      topPlaylist: topPlaylist,
    });
  };
  const setCurrentPlayingTrackHandler = (currPlaying) => {
    dispatchSpotifyAction({
      type: "SET_CurrentPlaying",
      currPlaying: currPlaying,
    });
  };

  const soptifyContext = {
    user: spotifyState.user,
    token: spotifyState.token,
    playlists: spotifyState.playlists,
    topPlaylist: spotifyState.topPlaylist,
    currentPlaying: spotifyState.currPlaying,
    setUser: setUserHandler,
    setToken: setTokenHandler,
    setPlaylists: setPlaylistsHandler,
    setTopPlaylist: setTopPlaylistsHandler,
    setCurrentPlayingTrack: setCurrentPlayingTrackHandler,
  };

  return (
    <SpotifyContext.Provider value={soptifyContext}>
      {props.children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContexProvider;
