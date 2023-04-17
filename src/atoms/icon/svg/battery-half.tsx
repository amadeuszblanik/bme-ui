import { SVGProps } from "react";
const BatteryHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <rect
      width={400}
      height={224}
      x={32}
      y={144}
      rx={45.7}
      ry={45.7}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
    <rect
      width={154.31}
      height={114.13}
      x={85.69}
      y={198.93}
      rx={4}
      ry={4}
      style={{
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
    <path
      d="M480 218.67v74.66"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
  </svg>
);
export default BatteryHalf;
