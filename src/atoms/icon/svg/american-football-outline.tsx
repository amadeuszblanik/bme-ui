import { SVGProps } from "react";
const AmericanFootballOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <ellipse
      cx={256}
      cy={256}
      rx={267.57}
      ry={173.44}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
      transform="rotate(-45 256 256.002)"
    />
    <path
      d="M334.04 177.96 177.96 334.04M278.3 278.3l-44.6-44.6M322.89 233.7l-44.59-44.59M456.68 211.4 300.6 55.32M211.4 456.68 55.32 300.6M233.7 322.89l-44.59-44.59"
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
export default AmericanFootballOutline;