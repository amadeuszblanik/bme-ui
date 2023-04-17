import { SVGProps } from "react";
const LinkOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M208 352h-64a96 96 0 0 1 0-192h64M304 160h64a96 96 0 0 1 0 192h-64M163.29 256h187.42"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 36,
      }}
    />
  </svg>
);
export default LinkOutline;
