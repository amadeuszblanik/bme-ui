import { SVGProps } from "react";
const UnlinkOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={36}
      d="M208 352h-64a96 96 0 0 1 0-192h64M304 160h64a96 96 0 0 1 0 192h-64"
    />
  </svg>
);
export default UnlinkOutline;
