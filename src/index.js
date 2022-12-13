import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SpotifyContexProvider from "./Store/SoptifyContextProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SpotifyContexProvider>
    <App />
  </SpotifyContexProvider>
);
