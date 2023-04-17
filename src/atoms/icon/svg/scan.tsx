import { SVGProps } from "react";
const Scan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M342 444h46a56 56 0 0 0 56-56v-46M444 170v-46a56 56 0 0 0-56-56h-46M170 444h-46a56 56 0 0 1-56-56v-46M68 170v-46a56 56 0 0 1 56-56h46"
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
export default Scan;
