import React, { useState } from "react";
// import * as React from "react"
import ChevronRight from "../icons/chevron-right";

export interface NavItem {
  name?: string;
  url?: string;
}

const NavLink = (nav_item:any) => {
  const [toggled, setToggled] = useState(false);  
  const linkStyle = "text-xl leading-6 font-jost text-primary-200";  
  return (    
    <React.Fragment>
      <a href={nav_item.nav_item.url} className={linkStyle}>
        <div className="navlinkscontainer_link">
          <div className="grid grid-cols-10 gap-1">
            <div className="col-span-9">              
                {nav_item.nav_item.name}              
            </div>            
            <div className="col-span-1"> 
              <ChevronRight />
            </div>
          </div>
        </div>
      </a>

    </React.Fragment>    
  );
};
 
export default NavLink;
