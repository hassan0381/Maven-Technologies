import ArrowSec from "../icons/arrow-sec.tsx";
import ArrowPri from "../icons/arrow-pri.tsx";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
  type?: "submit" | "button";
  href?: string;
  color: string;
}

const Button = (props: ButtonProps) => {
  const { variant = "primary", text = "Default Text", type = "button", href="/", color="#505050"} = props;

  // const defaultStyles =
  //   "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-white text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px]";
  const defaultStyles =
    "rounded-[5vmin] flex capitalize items-center justify-center gap-[1vmin] w-fit text-white text-base lg:text-lg leading-snug tracking-tight px-5 py-5";
  const bgClass = variant === "primary" ? "bg-primary-200" : "bg-primary-100";
  const bg_color = color === "#505050" ? "general_button" : "alternate_button";
  const className = `${defaultStyles} ${bg_color}`;

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
