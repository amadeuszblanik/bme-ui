// RGB TO HEX

const RGB_RADIX = 16;
const RGB_SLICE = 1;
const RGB_PAD_START = 2;

const RGB_MIN = 0;
const RGB_MAX = 255;

const utils = (rgb: string): string => {
  const value = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  if (!value) {
    throw new Error("Invalid rgb string");
  }

  const values = value.slice(RGB_SLICE);
  const rgbConverted = values.map((x) => parseInt(x, 10));

  if (rgbConverted.some((x) => x < RGB_MIN) || rgbConverted.some((x) => x > RGB_MAX)) {
    throw new Error("Invalid rgb string");
  }

  const hex = rgbConverted.map((x) => x.toString(RGB_RADIX).padStart(RGB_PAD_START, "0"));

  return `#${hex.join("")}`;
};
export default utils;
