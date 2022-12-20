import React, { useContext } from "react";
import SpotifyContext from "../../Store/spotify-Contex";
import Header from "./Header";
import classes from "./body.module.css";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Body = ({ Spotify }) => {
  const spotifyCtx = useContext(SpotifyContext);

  const playSong = (id) => {
    Spotify.play({
      uris: [`spotify:track:${id}`],
    }).then((res) => {
      Spotify.getMyCurrentPlayingTrack().then((r) => {
        spotifyCtx.setCurrentPlayingTrack(r.item);
      });
    });
  };

  return (
    <div className={classes.body}>
      <Header />
      <div className={classes["body-top"]}>
        <div className={classes["body-top__left"]}>
          <img
            src="https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_LARGE-en.jpg"
            alt=""
          />
        </div>
        <div className={classes["body-top__right"]}>
          <h2>Playlist</h2>
          <h1>On Repeat</h1>
          <p>Songs you love right now</p>
        </div>
      </div>
      <div className={classes["body-bottom"]}>
        <div className={classes["body-bottom__icons"]}>
          <div className={classes["body-bottom__header"]}></div>
          <PlayCircleFilledIcon
            className={classes.body__shuffle}
            style={{ color: "#1ed760" }}
          />
          <FavoriteBorderIcon
            fontSize="large"
            style={{ color: "rgb(200,186,196)", marginRight: "24px" }}
          />
          <MoreHorizIcon
            fontSize="medium"
            style={{ color: "rgb(200,186,196)", fontSize: "32px" }}
          />
        </div>
        <div className={classes.body__songs}>
          {spotifyCtx.topPlaylist.map((track) => (
            <SongRow key={track.id} track={track} playSong={playSong} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
