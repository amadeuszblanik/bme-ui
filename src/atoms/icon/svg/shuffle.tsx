import { SVGProps } from "react";
const Shuffle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="m400 304 48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0 0 66.56-35.62L256 256"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M64 160h85.19a80 80 0 0 1 66.56 35.62l80.5 120.76A80 80 0 0 0 362.81 352H416M416 160h-53.19a80 80 0 0 0-66.56 35.62L288 208"
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
export default Shuffle;
