import { SVGProps } from "react";
const ChevronForwardCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256Z"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
    <path
      d="m216 352 96-96-96-96"
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
export default ChevronForwardCircleOutline;
