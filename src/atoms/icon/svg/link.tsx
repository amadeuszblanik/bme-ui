import { SVGProps } from "react";
const Link = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M200.66 352H144a96 96 0 0 1 0-192h55.41M312.59 160H368a96 96 0 0 1 0 192h-56.66M169.07 256h175.86"
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
export default Link;
