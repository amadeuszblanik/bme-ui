// Make colour darker, darken by 10% by default
import { clamp } from "bme-utils";
import rgbToHex from "./rgb-to-hex";
import hexToRgb from "./hex-to-rgb";

const DEFAULT_DARKEN = 0.1;
const MIN_VALUE = 0;
const MAX_VALUE = 255;
const STARTING_VALUE = 1;

const utils = (colour: string, darken: number = DEFAULT_DARKEN): { rgb: string; hex: string } => {
  const rgb = colour.startsWith("#") ? hexToRgb(colour).toString : colour;

  const [r, g, b] = rgb
    .replace("rgb(", "")
    .replace(")", "")
    .split(",")
    .map((x) => parseInt(x, 10));

  const factor = STARTING_VALUE - darken;

  const rgbValue = `rgb(${clamp(Math.floor(factor * r), MIN_VALUE, MAX_VALUE)}, ${clamp(
    Math.floor(factor * g),
    MIN_VALUE,
    MAX_VALUE,
  )}, ${clamp(Math.floor(factor * b), MIN_VALUE, MAX_VALUE)})`;

  const hexValue = rgbToHex(rgbValue);

  return { rgb: rgbValue, hex: hexValue };
};
export default utils;
