import { SVGProps } from "react";
const BasketballOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <circle
      cx={256}
      cy={256}
      r={192}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M432.94 255.05a192 192 0 0 1-176.31-180.7M255 433.61A192 192 0 0 0 74.29 256.69M120.24 120.24l271.52 271.52M120.24 391.76l271.52-271.52"
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
export default BasketballOutline;
