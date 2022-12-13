import React from "react";
import classes from "./SidebarOption.module.css";

const SidebarOption = (props) => {
  return (
    <li className={classes["nav-item"]}>
      <a href="/#">
        {props.Icon && props.children} <span>{props.option}</span>
      </a>
    </li>
  );
};

export default SidebarOption;
