import { SVGProps } from "react";
const InvertMode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <circle cx={256} cy={256} r={208} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} />
    <path d="M256 176v160a80 80 0 0 0 0-160ZM256 48v128a80 80 0 0 0 0 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48Z" />
  </svg>
);
export default InvertMode;
