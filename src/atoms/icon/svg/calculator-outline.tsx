import { SVGProps } from "react";
const CalculatorOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <rect
      width={288}
      height={416}
      x={112}
      y={48}
      rx={32}
      ry={32}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M160.01 112H352v64H160.01z"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <circle cx={168} cy={248} r={24} />
    <circle cx={256} cy={248} r={24} />
    <circle cx={344} cy={248} r={24} />
    <circle cx={168} cy={328} r={24} />
    <circle cx={256} cy={328} r={24} />
    <circle cx={168} cy={408} r={24} />
    <circle cx={256} cy={408} r={24} />
    <rect width={48} height={128} x={320} y={304} rx={24} ry={24} />
  </svg>
);
export default CalculatorOutline;
