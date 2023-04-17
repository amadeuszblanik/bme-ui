import { SVGProps } from "react";
const TabletLandscapeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <rect
      width={352}
      height={480}
      x={80}
      y={16}
      rx={48}
      ry={48}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
      transform="rotate(-90 256 256)"
    />
  </svg>
);
export default TabletLandscapeOutline;
