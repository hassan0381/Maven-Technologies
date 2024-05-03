import React, { useState } from "react";
// import * as React from "react"
import OutlineClose from "../icons/outline-close";
import ChevronDown from "../icons/chevron-down.jsx";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";
import type { Props } from "astro";
const expertise_table_colours = ["#7800ff","#8c2bfa", "#a14ffe", "#b679fb", "#d3acff"];

const CapabilitiesItem = (capability:any) => {
const [toggled, setToggled] = useState(false);
const matches = useMediaQuery("(min-width: 1280px)");
const expertise_table_colours = ["#7800ff","#8c2bfa", "#a14ffe", "#b679fb", "#d3acff"];
const buttonClicked = () => {
  setToggled(!toggled);  
}
// console.log(capability)
return (
  <div onClick={buttonClicked} className="grid grid-cols-12 gap-4" 
    style={{backgroundColor: expertise_table_colours[capability.indx], cursor:"pointer"}}>
    <div className="col-span-11 expertisepage_capabilitiesitem_heading">
      <p>{capability.heading}</p>
    </div>
    <div className="col-span-1 detailedpage_expertiseitem_arrow" >
      {toggled ? 
          <OutlineClose width="30" height="30" color="#FFFFFF" />
        :
          <ChevronDown width="20" height="20" color="#FFFFFF" />
        }        
    </div>
    {toggled && 
      <div className="col-span-12 expertisepage_capabilitiesitem_description">
        <p>{capability.content}</p>
    </div>}
  </div>);
}
 
export default CapabilitiesItem;


