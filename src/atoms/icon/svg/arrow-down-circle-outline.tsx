import { SVGProps } from "react";
const ArrowDownCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M176 262.62 256 342l80-79.38M256 330.97V170"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
  </svg>
);
export default ArrowDownCircleOutline;