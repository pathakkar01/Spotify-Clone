import React from "react";

const SidebarOption = (props) => {
  return (
    <li className="nav-item">
      <a href="/#">
        {props.Icon && props.children} <span>{props.option}</span>
      </a>
    </li>
  );
};

export default SidebarOption;
