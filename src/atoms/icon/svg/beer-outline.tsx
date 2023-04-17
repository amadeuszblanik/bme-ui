import { SVGProps } from "react";
const BeerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M352 200v240a40.12 40.12 0 0 1-40 40H136a40.12 40.12 0 0 1-40-40V224"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M352 224h40a56.16 56.16 0 0 1 56 56v80a56.16 56.16 0 0 1-56 56h-40"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
    <path
      d="M224 256v160M288 256v160M160 256v160M320 112a48 48 0 0 1 0 96c-13.25 0-29.31-7.31-38-16H160c-8 22-27 32-48 32a48 48 0 0 1 0-96 47.91 47.91 0 0 1 26 9"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M91.86 132.43a40 40 0 1 1 60.46-52S160 91 160 96M145.83 64.71C163.22 44.89 187.57 32 216 32c52.38 0 94 42.84 94 95.21a95 95 0 0 1-1.67 17.79"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
  </svg>
);
export default BeerOutline;