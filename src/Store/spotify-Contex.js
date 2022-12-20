import React from "react";

const SpotifyContext = React.createContext({
  user: null,
  token: null,
  playlists: [],
  topPlaylist: [],
  currentPlaying: null,
  setToken: (token) => {},
  setUser: (user) => {},
  setPlaylists: (playlists) => {},
  setTopPlaylists: (topPlaylists) => {},
  setCurrentPlayingTrack: (item) => {},
});
export default SpotifyContext;
