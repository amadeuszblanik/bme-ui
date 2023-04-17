import { SVGProps } from "react";
const ChevronExpandOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m136 208 120-104 120 104M136 304l120 104 120-104"
    />
  </svg>
);
export default ChevronExpandOutline;
