import { SVGProps } from "react";
const GiftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M256 104v56h56a56 56 0 1 0-56-56ZM256 104v56h-56a56 56 0 1 1 56-56Z"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
    <rect
      width={384}
      height={112}
      x={64}
      y={160}
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
      d="M416 272v144a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V272M256 160v304"
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
export default GiftOutline;
