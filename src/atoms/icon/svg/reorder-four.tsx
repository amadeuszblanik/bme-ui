import { SVGProps } from "react";
const ReorderFour = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M102 304h308M102 208h308M102 112h308M102 400h308"
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
export default ReorderFour;
