import { SVGProps } from "react";
const BagAddOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M256 256v128M320 320H192M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16ZM160 176v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"
    />
  </svg>
);
export default BagAddOutline;
