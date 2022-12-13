import React from "react";
import classes from "./Footer.module.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__left}>
        <img
          src="https://i.scdn.co/image/ab67616d0000485137f65266754703fd20d29854"
          alt=""
        />
        <div className={classes.songInfo}>
          <h4>Yeah!!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className={classes.footer__center}>
        <ShuffleIcon className={classes.footer__icon} />
        <SkipPreviousIcon className={classes.footer__icon} />
        <PlayCircleOutlineIcon
          fontSize="large"
          className={classes.footer__icon}
        />
        <SkipNextIcon className={classes.footer__icon} />
        <RepeatIcon className={classes.footer__icon} />
      </div>
      <div className={classes.footer__right}>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs={4}>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
