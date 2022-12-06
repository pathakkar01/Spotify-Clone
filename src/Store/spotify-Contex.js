import React from "react";

const SpotifyContext = React.createContext({
  user: null,
  setUser: () => {},
});
export default SpotifyContext;
