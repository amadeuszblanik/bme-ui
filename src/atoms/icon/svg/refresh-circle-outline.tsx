import { SVGProps } from "react";
const RefreshCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M288 193s12.18-6-32-6a80 80 0 1 0 80 80"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 28,
      }}
    />
    <path
      d="m256 149 40 40-40 40"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 28,
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
export default RefreshCircleOutline;
