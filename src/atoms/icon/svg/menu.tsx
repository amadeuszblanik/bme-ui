import { SVGProps } from "react";
const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M88 152h336M88 256h336M88 360h336"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 48,
      }}
    />
  </svg>
);
export default Menu;
