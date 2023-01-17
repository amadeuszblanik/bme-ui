// Make transparent color
import { hexToRgb } from "./index";

const utils = (color: string, transparent: number): string => {
  if (color.startsWith("#")) {
    const { r, g, b } = hexToRgb(color);

    return `rgba(${r}, ${g}, ${b}, ${transparent})`;
  }

  const [r, g, b] = color;

  return `rgba(${r}, ${g}, ${b}, ${transparent})`;
};
export default utils;
