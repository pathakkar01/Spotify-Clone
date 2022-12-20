import React from "react";
import { useContext } from "react";

import SpotifyContext from "../../Store/spotify-Contex";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./Header.module.css";

const Header = () => {
  const spotifyCtx = useContext(SpotifyContext);

  return (
    <div className={classes["header"]}>
      <header>
        <button className={classes["back-btn"]}>
          <ArrowBackIosIcon />
        </button>
        <div className={classes["search-bar"]}>
          <SearchIcon />
          <input type="text" placeholder="What do you want to listen to?" />
        </div>

        {spotifyCtx.user && (
          <button className={classes["profile-btn"]}>
            <figure>
              <img src={spotifyCtx.user.images[0].url} alt="" />
            </figure>
            {spotifyCtx.user.display_name}
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              className="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              fill="white"
            >
              <path d="M14 6l-6 6-6-6h12z"></path>
            </svg>
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;
