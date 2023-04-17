import { SVGProps } from "react";
const FileTrayStackedOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M48 336v96a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48v-96"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M48 336h144M320 336h144M192 336a64 64 0 0 0 128 0"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M384 32H128c-26 0-43 14-48 40L48 192v96a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48v-96L432 72c-5-27-23-40-48-40Z"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M48 192h144M320 192h144M192 192a64 64 0 0 0 128 0"
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
export default FileTrayStackedOutline;
