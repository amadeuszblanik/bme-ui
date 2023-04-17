import { SVGProps } from "react";
const StarHalfOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160Z"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path d="M256 48v316L118 464l54-160-140-96h172l52-160z" />
  </svg>
);
export default StarHalfOutline;