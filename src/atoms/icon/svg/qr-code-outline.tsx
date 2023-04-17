import { SVGProps } from "react";
const QrCodeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <rect width={80} height={80} x={336} y={336} rx={8} ry={8} />
    <rect width={64} height={64} x={272} y={272} rx={8} ry={8} />
    <rect width={64} height={64} x={416} y={416} rx={8} ry={8} />
    <rect width={48} height={48} x={432} y={272} rx={8} ry={8} />
    <rect width={48} height={48} x={272} y={432} rx={8} ry={8} />
    <rect width={80} height={80} x={336} y={96} rx={8} ry={8} />
    <rect
      width={176}
      height={176}
      x={288}
      y={48}
      rx={16}
      ry={16}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <rect width={80} height={80} x={96} y={96} rx={8} ry={8} />
    <rect
      width={176}
      height={176}
      x={48}
      y={48}
      rx={16}
      ry={16}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <rect width={80} height={80} x={96} y={336} rx={8} ry={8} />
    <rect
      width={176}
      height={176}
      x={48}
      y={288}
      rx={16}
      ry={16}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
  </svg>
);
export default QrCodeOutline;
