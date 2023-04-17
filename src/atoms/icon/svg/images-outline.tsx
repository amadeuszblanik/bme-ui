import { SVGProps } from "react";
const ImagesOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <rect
      width={400}
      height={336}
      x={96}
      y={128}
      rx={45.99}
      ry={45.99}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <ellipse
      cx={372.92}
      cy={219.64}
      rx={30.77}
      ry={30.55}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
    <path
      d="M342.15 372.17 255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91"
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
export default ImagesOutline;
