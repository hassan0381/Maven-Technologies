import React, { useState } from "react";
import useMediaQuery from "../utils/useMediaQuery.ts";

import "../assets/main.css";


const NavTop = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const linkStyle = "text-m leading-6 font-jost text-primary-200";
  return (    
    <div className="topnav_container">              
      {matches && (
        <nav className="flex flex-row gap-6">
          <p>|</p>
          <a href="/careers" className={linkStyle}>
            Careers
          </a>
          <p>|</p>          
          <a href="/pulse" className={linkStyle}>
            News
          </a>
          <p>|</p>          
          <a href="/events" className={linkStyle}>
            Events
          </a>
          <p>|</p>
        </nav>
      )}      
    </div>
  );
};

export default NavTop;
