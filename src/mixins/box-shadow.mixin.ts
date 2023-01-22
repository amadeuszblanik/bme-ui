import { css } from "styled-components";
import { ThemeColours } from "../settings/theme";
import { toRgba } from "../utils";

const DEFAULT_TRANSPARENCY = 0.2;

const LEVELS = {
  0: "0px 8px 17px 0px",
  1: "0px 8px 17px 5px",
  2: "0px 8px 17px 10px",
  3: "0px 8px 17px 15px",
  4: "0px 8px 17px 20px",
};

const mixin = (
  color: ThemeColours,
  level: "0" | "1" | "2" | "3" | "4" = "0",
  transparency: number = DEFAULT_TRANSPARENCY,
) => css`
  box-shadow: ${LEVELS[level]} ${({ theme }) => toRgba(theme.colors[color], transparency)};
`;

export default mixin;
