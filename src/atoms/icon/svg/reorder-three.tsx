import { SVGProps } from "react";
const ReorderThree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M102 256h308M102 176h308M102 336h308"
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
export default ReorderThree;
