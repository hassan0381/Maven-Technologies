export interface IconProps {
  color?: string;
  width?: string;
  height?: string;
}
const ChevronRight = (item:IconProps) => {
  return (
    <svg
    width={item.width || "20"}
    height={item.height || "20"}
    viewBox={"0 0 "+ item.height+" "+item.width || "0 0 20 20"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"
        stroke={item.color || "#000000"}/>
    </svg>
  );
};

export default ChevronRight;
