import { SVGProps } from "react";
const BusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <rect
      width={352}
      height={192}
      x={80}
      y={112}
      rx={32}
      ry={32}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <rect
      width={352}
      height={128}
      x={80}
      y={304}
      rx={32}
      ry={32}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M400 112H112a32.09 32.09 0 0 1-32-32h0a32.09 32.09 0 0 1 32-32h288a32.09 32.09 0 0 1 32 32h0a32.09 32.09 0 0 1-32 32ZM144 432v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22ZM416 432v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22Z"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <circle
      cx={368}
      cy={368}
      r={16}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <circle
      cx={144}
      cy={368}
      r={16}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M256 112v192M80 80v288M432 80v288"
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
export default BusOutline;
