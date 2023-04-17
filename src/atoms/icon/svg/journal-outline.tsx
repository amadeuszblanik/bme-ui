import { SVGProps } from "react";
const JournalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <rect
      width={320}
      height={416}
      x={96}
      y={48}
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
      d="M320 48v416"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 60,
      }}
    />
  </svg>
);
export default JournalOutline;
