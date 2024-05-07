import React, { useState } from "react";
import Envelope from "../icons/envelope.tsx";
import Phone from "../icons/phone.tsx";
import useMediaQuery from "../utils/useMediaQuery.ts";

import "../assets/main.css";

const NavTop = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const linkStyle = "text-m leading-6 font-jost text-primary-200";
  return (
    <>
      <div className="topNav">
        <div className="container">
          <div className="mainWrapper">
            <div className="left">
              <div className="email">
                <Envelope />
                <a href="mailto:hello@workwithmavens.io">
                  hello@workwithmavens.io
                </a>
              </div>
              <div className="email">
                <Phone />
                <a href="tel:1300 440 275">1300 440 275</a>
              </div>
            </div>
            <nav className="flex nav">
              {matches && (
                <>
                  <a href="/careers" className="link">
                    Careers
                  </a>
                  <a href="/pulse" className="link">
                    News
                  </a>
                  <a href="/events" className="link">
                    Events
                  </a>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavTop;
