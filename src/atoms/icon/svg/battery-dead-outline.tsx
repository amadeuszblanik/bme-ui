import { SVGProps } from "react";
const BatteryDeadOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <rect
      width={400}
      height={224}
      x={31}
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
    <path
      d="M479 218.67v74.66"
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
export default BatteryDeadOutline;
