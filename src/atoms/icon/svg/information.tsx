import { SVGProps } from "react";
const Information = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M196 220h64v172"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 40,
      }}
    />
    <path
      d="M187 396h138"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 40,
      }}
    />
    <path d="M256 160a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" />
  </svg>
);
export default Information;
