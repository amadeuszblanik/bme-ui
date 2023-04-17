import { SVGProps } from "react";
const AlbumsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <rect
      width={384}
      height={256}
      x={64}
      y={176}
      rx={28.87}
      ry={28.87}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M144 80h224M112 128h288"
      style={{
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
  </svg>
);
export default AlbumsOutline;
