import { SVGProps } from "react";
const PrismOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M229.73 45.88 37.53 327.79a31.79 31.79 0 0 0 11.31 46L241 476.26a31.77 31.77 0 0 0 29.92 0l192.2-102.51a31.79 31.79 0 0 0 11.31-46L282.27 45.88a31.8 31.8 0 0 0-52.54 0ZM256 32v448"
    />
  </svg>
);
export default PrismOutline;