import React, { useState } from "react";
// import * as React from "react"
import ChevronDown from "../icons/chevron-down.jsx";
import OutlineClose from "../icons/outline-close.jsx";
import Logo from "../icons/logo.tsx";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";
import menu from "../config/menu.json";
import NavLink from "./navlink.tsx";


const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [navlinksIndustries, setNavlinksIndustries] = useState(false);
  const [navlinksServices, setNavlinksServices] = useState(false);
  const [navlinksPulse, setNavlinksPulse] = useState(false);
  const [navlinksAbout, setNavlinksAbout] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  const linkStyle = "text-xl leading-6 font-jost text-primary-200";

  const selectedBackground = "#F2F2F2";
  const unselectedBackground = "#FFFFFF";  

  const menuClicked = (itemName:any) => {
    if(itemName === "industries") {
      if(navlinksServices) { 
        setNavlinksServices(false);
      }
      if(navlinksPulse) { 
        setNavlinksPulse(false);
      }
      if(navlinksAbout) { 
        setNavlinksAbout(false);
      }
      setNavlinksIndustries(!navlinksIndustries)
    }
    if(itemName === "services") {
      if(navlinksIndustries) { 
        setNavlinksIndustries(false);
      }
      if(navlinksPulse) { 
        setNavlinksPulse(false);
      }
      if(navlinksAbout) { 
        setNavlinksAbout(false);
      }
      setNavlinksServices(!navlinksServices)
    }
    if(itemName === "pulse") {
      if(navlinksIndustries) { 
        setNavlinksIndustries(false);
      }
      if(navlinksServices) { 
        setNavlinksServices(false);
      }
      if(navlinksAbout) { 
        setNavlinksAbout(false);
      }
      setNavlinksPulse(!navlinksPulse)
    }
    if(itemName === "about") {
      if(navlinksIndustries) { 
        setNavlinksIndustries(false);
      }
      if(navlinksPulse) { 
        setNavlinksPulse(false);
      }
      if(navlinksServices) { 
        setNavlinksServices(false);
      }
      setNavlinksAbout(!navlinksAbout)
    }
  }

  
  return (    
    <div>      
      <div className="max-w-[1200px] px-12 xl:px-0 m-auto w-full py-11 flex justify-between items-center">
        <a href="/">
          {" "}
          <Logo />
        </a>
        
        {/* Nav List for Desktop */}
        {matches && (
          <nav className="flex flex-row gap-6">
            <div className="navbar_link">
              <div className="col-span-12 navspacer"/>              
            </div>
            <div className={navlinksIndustries?"navbar_link_selected":"navbar_link"} onClick={() => menuClicked("industries")}>
              <div className="grid grid-cols-6 gap-1">                
                <div className="col-span-5"> 
                  Industries
                </div>
                <div className="col-span-1"> 
                {
                  navlinksIndustries ?
                  <OutlineClose />
                  :
                  <ChevronDown />
                }
                </div>
              </div>
            </div>        
            <div className={navlinksServices?"navbar_link_selected":"navbar_link"} onClick={() => menuClicked("services")}>
              <div className="grid grid-cols-6 gap-1">                
                <div className="col-span-5">
                  Services
                </div>
                <div className="col-span-1"> 
                {
                  navlinksServices ?
                  <OutlineClose />
                  :
                  <ChevronDown />
                }
                </div>
              </div>
            </div>
            <div className={navlinksPulse?"navbar_link_selected":"navbar_link"} onClick={() => menuClicked("pulse")}>
              <div className="grid grid-cols-6 gap-1">
                <div className="col-span-5">
                  Pulse
                </div>
                <div className="col-span-1"> 
                {
                  navlinksPulse ?
                  <OutlineClose  />
                  :
                  <ChevronDown   />
                }
                </div>
              </div>
            </div>
            <div className={navlinksAbout?"navbar_link_selected":"navbar_link"} onClick={() => menuClicked("about")}>
              <div className="grid grid-cols-6 gap-1">
                <div className="col-span-5">
                  About
                </div>
                <div className="col-span-1"> 
                {
                  navlinksAbout ?
                  <OutlineClose  />
                  :
                  <ChevronDown   />
                }
                </div>
              </div>
            </div>
          </nav>
        )}

        {!matches && (
          <div
            onClick={() => setToggled(!toggled)}
            className="space-y-1 cursor-pointer"
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 24 }}
              className="block h-0.5 w-6 bg-black"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16,
              }}
              className="block h-0.5 w-4 bg-black"
            ></motion.span>
          </div>
        )}

        {toggled && !matches && (
          <motion.nav
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center"
          >
            <a href="/industries" className={linkStyle}>
              Industries
            </a>          
            <a href="/services" className={linkStyle}>
              Services
            </a>
            <a href="/pulse" className={linkStyle}>
              Pulse
            </a>
            <a href="/about" className={linkStyle}>
              About
            </a>
          </motion.nav>
        )}
      </div>
      {navlinksIndustries && (
        <div className="navlinks_container" >
          <div className="navlinks_container_links">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <ul>
                  {menu.industries_groupone.map((item:any, index:any) => {
                    return (
                      <li key={index}>
                        <NavLink nav_item={item} />                        
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="col-span-1">
                <ul>
                  {menu.industries_grouptwo.map((item:any, index:any) => {
                    return (
                      <li key={index}>
                        <NavLink nav_item={item} />                        
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="col-span-1">
                <ul>
                  {menu.industries_groupthree.map((item:any, index:any) => {
                    return (
                      <li key={index}>
                        <NavLink nav_item={item} />                        
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {navlinksServices && (
        <div className="navlinks_container" >
          <div className="navlinks_container_links">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <ul>
                  {menu.services_groupone.map((item:any, index:any) => {
                    return (
                      <li key={index}>
                        <NavLink nav_item={item} />                        
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="col-span-1">
                <ul>
                  {menu.services_grouptwo.map((item:any, index:any) => {
                    return (
                      <li key={index}>
                        <NavLink nav_item={item} />                        
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="col-span-1">
                <ul>
                  {menu.services_groupthree.map((item:any, index:any) => {
                    return (
                      <li key={index}>
                        <NavLink nav_item={item} />                        
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {navlinksPulse && (
        <div className="navlinks_container" >
          <div className="navlinks_container_links">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <ul>
                  {menu.pulse_groupone.map((item:any, index:any) => {
                    return (
                      <li key={index}>
                        <NavLink nav_item={item} />                        
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="col-span-1">
                
              </div>
              <div className="col-span-1">
                
              </div>
            </div>
          </div>
        </div>
      )}
      {navlinksAbout && (
        <div className="navlinks_container" >
          <div className="navlinks_container_links">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <ul>
                  {menu.about_groupone.map((item:any, index:any) => {
                    return (
                      <li key={index}>
                        <NavLink nav_item={item} />                        
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="col-span-1">
                <ul>
                  {menu.about_grouptwo.map((item:any, index:any) => {
                    return (
                      <li key={index}>
                        <NavLink nav_item={item} />                        
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="col-span-1">
                <ul>
                  {menu.about_groupthree.map((item:any, index:any) => {
                    return (
                      <li key={index}>
                        <NavLink nav_item={item} />                        
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
};
 
export default Navbar;
