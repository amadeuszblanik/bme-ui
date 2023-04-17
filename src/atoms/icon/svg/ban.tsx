import { SVGProps } from "react";
const Ban = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <circle cx={256} cy={256} r={200} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={48} />
    <path stroke="currentColor" strokeMiterlimit={10} strokeWidth={48} d="m114.58 114.58 282.84 282.84" />
  </svg>
);
export default Ban;
