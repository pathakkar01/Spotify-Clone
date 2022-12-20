import React from "react";
import classes from "./SongRow.module.css";

const SongRow = (props) => {
  const track = props.track;
  const trackDuration = Math.round((track.duration_ms / 1000 / 60) * 100) / 100;
  console.log(track);
  return (
    <div className={classes.songRow} onClick={() => props.playSong(track.id)}>
      <div className={classes.songRow__info}>
        <img
          src={track.album.images[0].url}
          alt=""
          className={classes.songRow__albumIcon}
        />
        <div className={classes.songRow__infoDetails}>
          <h1>{track.name}</h1>
          <p>{track.artists[0].name}</p>
        </div>
      </div>
      <div className={classes.songRow__album}>{track.album.name}</div>
      <div className={classes.songRow__duration}>{trackDuration}</div>
    </div>
  );
};

export default SongRow;
