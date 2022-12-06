import { useReducer } from "react";

import SpotifyContext from "./spotify-Contex";

const defaultContext = {
  user: null,
};

const soptifyReducer = (state, action) => {
  if (action.type === "SET_USER") {
    console.log(action.type.user);
    return {
      ...state,
      user: action.user,
    };
  }
  return defaultContext;
};

const SpotifyContexProvider = ({ children }) => {
  const [spotifyState, dispatchSpotifyAction] = useReducer(
    soptifyReducer,
    defaultContext
  );

  const setUserHandler = (user) => {
    dispatchSpotifyAction({ type: "SET_USER", user: user });
  };

  const soptifyContext = {
    user: spotifyState.user,

    setUser: setUserHandler,
  };
  console.log(children, soptifyContext);
  return (
    <SpotifyContext.Provider value={soptifyContext}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContexProvider;
