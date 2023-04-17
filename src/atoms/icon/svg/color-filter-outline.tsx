import { SVGProps } from "react";
const ColorFilterOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <circle
      cx={256}
      cy={184}
      r={120}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <circle
      cx={344}
      cy={328}
      r={120}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <circle
      cx={168}
      cy={328}
      r={120}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
  </svg>
);
export default ColorFilterOutline;
