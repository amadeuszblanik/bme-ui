import { SVGProps } from "react";
const ArrowForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="m268 112 144 144-144 144M392 256H100"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 48,
      }}
    />
  </svg>
);
export default ArrowForward;
