import React, { useContext } from "react";
import AppLogo from "../UI/AppLogo";
import SpotifyContext from "../../Store/spotify-Contex";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import "./Sidebar.css";
const Sidebar = () => {
  const spotifyCtx = useContext(SpotifyContext);

  return (
    <nav className="sidebar">
      <div className="logo">
        <AppLogo />
      </div>
      <ul>
        <SidebarOption Icon={true} option="Home">
          <HomeIcon />
        </SidebarOption>
        <SidebarOption Icon={true} option="Search">
          <SearchIcon />
        </SidebarOption>
        <SidebarOption Icon={true} option="Library">
          <LibraryMusicIcon />
        </SidebarOption>
      </ul>
      <section>
        <div className="playLists-lable">Playlists</div>
        <ul className="playlists">
          {spotifyCtx.playlists?.items?.map((playlist) => {
            return <SidebarOption option={playlist.name}></SidebarOption>;
          })}

          <SidebarOption option="Rock"></SidebarOption>
          <SidebarOption option="Hip Hop2"></SidebarOption>
        </ul>
      </section>
    </nav>
  );
};

export default Sidebar;
