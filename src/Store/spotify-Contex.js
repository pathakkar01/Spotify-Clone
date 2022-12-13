import React from "react";

const SpotifyContext = React.createContext({
  user: null,
  token: null,
  playlists: [],
  setToken: (token) => {},
  setUser: (user) => {},
  setPlaylists: (playlists) => {},
});
export default SpotifyContext;
