export interface IconProps {
  color?: string;
  width?: string;
  height?: string;
}
const OutlineClose = (item:IconProps) => {
  return (
    <svg
      width={item.width || "20"}
      height={item.height || "20"}
      viewBox={"0 0 "+ item.height+" "+item.width || "0 0 20 20"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">      
      <path
        d="M9 9L24 24"
        stroke={item.color || "#000000"}/>
      <path
        d="M8.49512 23.4586L24.5049 9.54144"
        stroke={item.color || "#000000"}/>
    </svg>
  );
};

export default OutlineClose;
