import { SVGProps } from "react";
const MailUnreadOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M320 96H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h334.73a40 40 0 0 0 40-40V239"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="m112 160 144 112 87-65.67"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <circle cx={431.95} cy={128.05} r={47.95} />
    <path d="M432 192a63.95 63.95 0 1 1 63.95-63.95A64 64 0 0 1 432 192Zm0-95.9a32 32 0 1 0 31.95 32 32 32 0 0 0-31.95-32Z" />
  </svg>
);
export default MailUnreadOutline;
