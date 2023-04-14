import { useTheme } from "styled-components";
import { blendColors, toHex, toRgb } from "bme-utils";
import { ThemeColours } from "../settings/theme";

const DEFAULT_FACTOR = 0.5;

const mixin = (variant: ThemeColours, factor: number = DEFAULT_FACTOR): string => {
  const theme = useTheme();

  const color = toRgb(theme.colors[variant]);
  const gray = toRgb(theme.colors.gray5);

  if (!color || !gray) {
    throw new Error("Invalid color");
  }

  const { r, g, b } = blendColors(color, gray, factor);

  return toHex(r, g, b);
};

export default mixin;
