import React from "react";
// import base_logo from "../assets/base_logo.png?url"
import base_logo from "../assets/base_logo.png?url"
import "../assets/main.css"

const Logo = () => {
  return (
    <img className="header_logo" src={base_logo} alt-text="Maven Technologies" />
  );
};

export default Logo;
