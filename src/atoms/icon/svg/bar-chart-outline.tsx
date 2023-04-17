import { SVGProps } from "react";
const BarChartOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M32 32v432a16 16 0 0 0 16 16h432"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <rect
      width={80}
      height={192}
      x={96}
      y={224}
      rx={20}
      ry={20}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <rect
      width={80}
      height={240}
      x={240}
      y={176}
      rx={20}
      ry={20}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <rect
      width={80}
      height={304}
      x={383.64}
      y={112}
      rx={20}
      ry={20}
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
export default BarChartOutline;