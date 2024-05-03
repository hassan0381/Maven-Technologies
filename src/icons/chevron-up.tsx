export interface IconProps {
  color?: string;
  width?: string;
  height?: string;
}
const ChevronUp = (item:IconProps) => {
  return (
    <svg
      width={item.width || "20"}
      height={item.height || "20"}
      viewBox={"0 0 "+ item.height+" "+item.width || "0 0 20 20"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 15L12 9L18 15" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
        stroke={item.color || "#000000"}/>
    </svg>
  );
};

export default ChevronUp;


