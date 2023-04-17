import { SVGProps } from "react";
const WatchOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <rect
      width={288}
      height={288}
      x={112}
      y={112}
      rx={64}
      ry={64}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M176 112V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v72M336 400v72a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-72"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
  </svg>
);
export default WatchOutline;