import { SVGProps } from "react";
const TrailSignOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M256 400v64M256 208v64M256 48v32M416 208H102.63a16 16 0 0 1-11.32-4.69L32 144l59.31-59.31A16 16 0 0 1 102.63 80H416a16 16 0 0 1 16 16v96a16 16 0 0 1-16 16ZM96 400h313.37a16 16 0 0 0 11.32-4.69L480 336l-59.31-59.31a16 16 0 0 0-11.32-4.69H96a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16Z"
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
export default TrailSignOutline;