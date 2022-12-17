const RED_INDEX = 1;
const GREEN_INDEX = 2;
const BLUE_INDEX = 3;

const SHORT_HEX = 4;

const utils = (hex: string): { r: number; g: number; b: number; toString: string } => {
  const isShortHex = hex.length === SHORT_HEX;
  const hexRegex = isShortHex ? /#([0-9a-f])([0-9a-f])([0-9a-f])/i : /#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i;

  const result = hexRegex.exec(hex);

  if (!result) {
    throw new Error("Invalid hex string");
  }

  const r = parseInt(isShortHex ? `${result[RED_INDEX]}${result[RED_INDEX]}` : result[RED_INDEX], 16);
  const g = parseInt(isShortHex ? `${result[GREEN_INDEX]}${result[GREEN_INDEX]}` : result[GREEN_INDEX], 16);
  const b = parseInt(isShortHex ? `${result[BLUE_INDEX]}${result[BLUE_INDEX]}` : result[BLUE_INDEX], 16);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    throw new Error("Invalid hex string");
  }

  return { r, g, b, toString: `rgb(${r}, ${g}, ${b})` };
};
export default utils;
