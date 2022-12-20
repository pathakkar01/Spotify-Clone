import React from "react";
import Sidebar from "./Sidebar";

import "./Player.css";
import Body from "./Body";
import Footer from "./Footer";

const Player = (props) => {
  return (
    <div className="player-container">
      <Sidebar />
      <Body Spotify={props.Spotify} />
      <Footer />
    </div>
  );
};

export default Player;
