import { SVGProps } from "react";
const MedkitOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <rect
      width={448}
      height={352}
      x={32}
      y={112}
      rx={48}
      ry={48}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M144 112V80a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32M256 208v160M336 288H176"
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
export default MedkitOutline;
