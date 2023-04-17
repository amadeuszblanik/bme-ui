import { SVGProps } from "react";
const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="m112 268 144 144 144-144M256 392V100"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 48,
      }}
    />
  </svg>
);
export default ArrowDown;
