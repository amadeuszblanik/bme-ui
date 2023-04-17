import { SVGProps } from "react";
const CashOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <rect
      width={448}
      height={256}
      x={32}
      y={80}
      rx={16}
      ry={16}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
      transform="rotate(180 256 208)"
    />
    <path
      d="M64 384h384M96 432h320"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <circle
      cx={256}
      cy={208}
      r={80}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M480 160a80 80 0 0 1-80-80M32 160a80 80 0 0 0 80-80M480 256a80 80 0 0 0-80 80M32 256a80 80 0 0 1 80 80"
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
export default CashOutline;
