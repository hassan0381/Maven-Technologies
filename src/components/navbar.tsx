import React, { useState } from "react";
import ChevronDown from "../icons/chevronDown.tsx";
import ChevronUp from "../icons/chevronUp.tsx";
import Cross from "../icons/cross.tsx";
import Hamburger from "../icons/hamburger.tsx";
import Logo from "../icons/logo.tsx";
import useMediaQuery from "../utils/useMediaQuery.ts";
import menu from "../config/menu.json";
import NavLink from "./navlink.tsx";
import Button from "./button.tsx";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [navlinksIndustries, setNavlinksIndustries] = useState(false);
  const [navlinksServices, setNavlinksServices] = useState(false);
  const [navlinksPulse, setNavlinksPulse] = useState(false);
  const [navlinksAbout, setNavlinksAbout] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const menuClicked = (itemName: any) => {
    if (itemName === "industries") {
      if (navlinksServices) {
        setNavlinksServices(false);
      }
      if (navlinksPulse) {
        setNavlinksPulse(false);
      }
      if (navlinksAbout) {
        setNavlinksAbout(false);
      }
      setNavlinksIndustries(!navlinksIndustries);
    }
    if (itemName === "services") {
      if (navlinksIndustries) {
        setNavlinksIndustries(false);
      }
      if (navlinksPulse) {
        setNavlinksPulse(false);
      }
      if (navlinksAbout) {
        setNavlinksAbout(false);
      }
      setNavlinksServices(!navlinksServices);
    }
    if (itemName === "pulse") {
      if (navlinksIndustries) {
        setNavlinksIndustries(false);
      }
      if (navlinksServices) {
        setNavlinksServices(false);
      }
      if (navlinksAbout) {
        setNavlinksAbout(false);
      }
      setNavlinksPulse(!navlinksPulse);
    }
    if (itemName === "about") {
      if (navlinksIndustries) {
        setNavlinksIndustries(false);
      }
      if (navlinksPulse) {
        setNavlinksPulse(false);
      }
      if (navlinksServices) {
        setNavlinksServices(false);
      }
      setNavlinksAbout(!navlinksAbout);
    }
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="wrapper">
            <a href="/">
              <Logo />
            </a>

            {/* Nav List for Desktop */}
            {matches && (
              <nav className="navbar">
                <div
                  className={navlinksIndustries ? "link linkActive" : "link"}
                  onClick={() => menuClicked("industries")}
                >
                  <div className="">Industries</div>
                  {navlinksIndustries ? <ChevronUp /> : <ChevronDown />}
                  {navlinksIndustries && (
                    <div className="linkDropdown">
                      <ul>
                        {menu.industries.map((item: any, index: any) => {
                          return (
                            <li key={index}>
                              <NavLink nav_item={item} />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
                <div
                  className={navlinksServices ? "link linkActive" : "link"}
                  onClick={() => menuClicked("services")}
                >
                  <div className="">Services</div>
                  {navlinksServices ? <ChevronUp /> : <ChevronDown />}
                  {navlinksServices && (
                    <div className="linkDropdown">
                      <ul>
                        {menu?.services?.map((item: any, index: any) => {
                          return (
                            <li key={index}>
                              <NavLink nav_item={item} />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
                <div
                  className={navlinksPulse ? "link linkActive" : "link"}
                  onClick={() => menuClicked("pulse")}
                >
                  <div className="">Pulse</div>
                  {navlinksPulse ? <ChevronUp /> : <ChevronDown />}
                  {navlinksPulse && (
                    <div className="linkDropdown">
                      <ul>
                        {menu?.pulse?.map((item: any, index: any) => {
                          return (
                            <li key={index}>
                              <NavLink nav_item={item} />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
                <div
                  className={navlinksAbout ? "link linkActive" : "link"}
                  onClick={() => menuClicked("about")}
                >
                  <div className="">About</div>
                  {navlinksAbout ? <ChevronUp /> : <ChevronDown />}
                  {navlinksAbout && (
                    <div className="linkDropdown">
                      <ul>
                        {menu?.about?.map((item: any, index: any) => {
                          return (
                            <li key={index}>
                              <NavLink nav_item={item} />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </nav>
            )}

            <Button className="btn" text="Contact Us" href="/contact" />

            {toggled && !matches && (
              <div className="mobileNav">
                <nav className="navbar">
                  <div className="cross" onClick={() => setToggled(!toggled)}>
                    <Cross />
                  </div>
                  <div
                    className={navlinksIndustries ? "link linkActive" : "link"}
                    onClick={() => menuClicked("industries")}
                  >
                    <div className="">Industries</div>
                    {navlinksIndustries ? <ChevronUp /> : <ChevronDown />}
                    {navlinksIndustries && (
                      <div className="linkDropdown">
                        <ul>
                          {menu.industries.map((item: any, index: any) => {
                            return (
                              <li key={index}>
                                <NavLink nav_item={item} />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div
                    className={navlinksServices ? "link linkActive" : "link"}
                    onClick={() => menuClicked("services")}
                  >
                    <div className="">Services</div>
                    {navlinksServices ? <ChevronUp /> : <ChevronDown />}
                    {navlinksServices && (
                      <div className="linkDropdown">
                        <ul>
                          {menu?.services?.map((item: any, index: any) => {
                            return (
                              <li key={index}>
                                <NavLink nav_item={item} />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div
                    className={navlinksPulse ? "link linkActive" : "link"}
                    onClick={() => menuClicked("pulse")}
                  >
                    <div className="">Pulse</div>
                    {navlinksPulse ? <ChevronUp /> : <ChevronDown />}
                    {navlinksPulse && (
                      <div className="linkDropdown">
                        <ul>
                          {menu?.pulse?.map((item: any, index: any) => {
                            return (
                              <li key={index}>
                                <NavLink nav_item={item} />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div
                    className={navlinksAbout ? "link linkActive" : "link"}
                    onClick={() => menuClicked("about")}
                  >
                    <div className="">About</div>
                    {navlinksAbout ? <ChevronUp /> : <ChevronDown />}
                    {navlinksAbout && (
                      <div className="linkDropdown">
                        <ul>
                          {menu?.about?.map((item: any, index: any) => {
                            return (
                              <li key={index}>
                                <NavLink nav_item={item} />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </nav>
              </div>
            )}

            {!matches && (
              <div
                onClick={() => setToggled(!toggled)}
                className="cursor-pointer"
              >
                <Hamburger />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
