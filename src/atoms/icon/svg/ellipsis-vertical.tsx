import { SVGProps } from "react";
const EllipsisVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <circle cx={256} cy={256} r={48} />
    <circle cx={256} cy={416} r={48} />
    <circle cx={256} cy={96} r={48} />
  </svg>
);
export default EllipsisVertical;
