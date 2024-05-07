import React, { useState } from "react";
// import * as React from "react"
import ChevronRight from "../icons/chevronRight";

export interface NavItem {
  name?: string;
  url?: string;
}

const NavLink = (nav_item: any) => {
  const [toggled, setToggled] = useState(false);
  const linkStyle = "text-xl leading-6 font-jost text-primary-200";
  return (
    <>
      <a href={nav_item.nav_item.url} className="link">
        {nav_item.nav_item.name}
      </a>
    </>
  );
};

export default NavLink;
