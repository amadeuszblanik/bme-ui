import { SVGProps } from "react";
const BicycleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M388 288a76 76 0 1 0 76 76 76.24 76.24 0 0 0-76-76ZM124 288a76 76 0 1 0 76 76 76.24 76.24 0 0 0-76-76Z"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
    <path
      d="M256 360v-86l-64-42 80-88 40 72h56"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path d="M320 136a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 72a32 32 0 1 0-.2 64Z" />
  </svg>
);
export default BicycleOutline;
