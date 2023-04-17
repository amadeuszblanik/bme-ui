import { SVGProps } from "react";
const ReorderTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M118 304h276M118 208h276"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 44,
      }}
    />
  </svg>
);
export default ReorderTwo;
