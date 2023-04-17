import { SVGProps } from "react";
const LogoWebComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="m179.9 388-76.16-132 76.16 132zM179.9 388h152.21l76.15-132-76.15-132H179.9l-76.16 132 76.16 132zM103.74 256l76.16-132-76.16 132z"
      style={{
        fill: "none",
      }}
    />
    <path d="M496 256 376 48H239.74l-43.84 76h136.21l76.15 132-76.15 132H195.9l43.84 76H376l120-208z" />
    <path d="m179.9 388-76.16-132 76.16-132 43.84-76H136L16 256l120 208h87.74l-43.84-76z" />
  </svg>
);
export default LogoWebComponent;