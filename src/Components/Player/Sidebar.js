import React from "react";
import AppLogo from "../UI/AppLogo";
import HomeIcon from "../UI/HomeIcon";
import LibraryIcon from "../UI/LibraryIcon";
import SearchIcon from "../UI/SearchIcon";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
const Sidebar = () => {
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
          <LibraryIcon />
        </SidebarOption>
      </ul>
      <section>
        <div className="playLists-lable">Playlists</div>
      </section>
    </nav>
  );
};

export default Sidebar;
