import { SVGProps } from "react";
const ScanOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M336 448h56a56 56 0 0 0 56-56v-56M448 176v-56a56 56 0 0 0-56-56h-56M176 448h-56a56 56 0 0 1-56-56v-56M64 176v-56a56 56 0 0 1 56-56h56"
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
export default ScanOutline;
