import { SVGProps } from "react";
const SnowOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M256 32v448M313.72 80A111.47 111.47 0 0 1 256 96a111.47 111.47 0 0 1-57.72-16M198.28 432a112.11 112.11 0 0 1 115.44 0M449.99 144 62.01 368M437.27 218a112.09 112.09 0 0 1-57.71-100M74.73 294a112.09 112.09 0 0 1 57.71 100M62.01 144l387.98 224M74.73 218a112.09 112.09 0 0 0 57.71-100M437.27 294a112.09 112.09 0 0 0-57.71 100"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
  </svg>
);
export default SnowOutline;