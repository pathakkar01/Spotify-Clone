import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Player.css";
import Footer from "./Footer";

const Player = () => {
  return (
    <div className="player-container">
      <Sidebar />
      <Header />
      <Footer />
    </div>
  );
};

export default Player;
