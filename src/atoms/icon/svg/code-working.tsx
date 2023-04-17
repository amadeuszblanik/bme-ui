import { SVGProps } from "react";
const CodeWorking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <circle
      cx={256}
      cy={256}
      r={26}
      style={{
        stroke: "currentColor",
        strokeMiterlimit: 10,
        strokeWidth: 10,
      }}
    />
    <circle
      cx={346}
      cy={256}
      r={26}
      style={{
        stroke: "currentColor",
        strokeMiterlimit: 10,
        strokeWidth: 10,
      }}
    />
    <circle
      cx={166}
      cy={256}
      r={26}
      style={{
        stroke: "currentColor",
        strokeMiterlimit: 10,
        strokeWidth: 10,
      }}
    />
    <path
      d="M160 368 32 256l128-112M352 368l128-112-128-112"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 42,
      }}
    />
  </svg>
);
export default CodeWorking;
