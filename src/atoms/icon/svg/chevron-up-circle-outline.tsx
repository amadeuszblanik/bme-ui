import { SVGProps } from "react";
const ChevronUpCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="m352 296-96-96-96 96"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
  </svg>
);
export default ChevronUpCircleOutline;
