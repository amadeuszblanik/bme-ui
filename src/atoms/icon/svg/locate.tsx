import { SVGProps } from "react";
const Locate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M256 96V56M256 456v-40M256 112a144 144 0 1 0 144 144 144 144 0 0 0-144-144ZM416 256h40M56 256h40"
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
export default Locate;
