import React from "react";
import ArrowSec from "../icons/arrow-sec.tsx";
import ArrowPri from "../icons/arrow-pri.tsx";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  text?: string;
  className?: string;
  type?: "submit" | "button";
  href?: string;
  color?: string;
}

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    text = "Default Text",
    type = "button",
    href = "/",
    className = "",
  } = props;

  return (
    <a href={href}>
      <button className={className} type={type}>
        {text}
        {variant === "primary" ? <ArrowSec /> : <ArrowPri />}
      </button>
    </a>
  );
};

export default Button;
