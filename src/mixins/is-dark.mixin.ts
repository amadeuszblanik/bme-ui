/* eslint-disable no-magic-numbers */
import { hexToRgb } from "../utils";

const mixin = (color: string): boolean => {
  const { r, g, b } = hexToRgb(color);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq < 150;
};

export default mixin;
