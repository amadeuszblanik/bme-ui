import { SVGProps } from "react";
const TransgenderOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <circle
      cx={256}
      cy={256}
      r={128}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="m448 352-96 96M176 80l-95.98 95.98M464 128V48h-80M48 128V48h80M464 48 346.5 165.5M48 48l117.49 117.49M464 464 346.65 346.37"
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
export default TransgenderOutline;
