import { css } from "styled-components";
import { ThemeColours } from "../types";
import { isDark } from "./index";

const mixin = (variant: ThemeColours, withText = false) => css`
  ${withText &&
  css`
    color: ${({ theme }) => (isDark(theme.colors[variant]) ? theme.colors.light : theme.colors.dark)};
    --bme-text: ${({ theme }) => (isDark(theme.colors[variant]) ? theme.colors.light : theme.colors.dark)};
  `}
  background-color: ${({ theme }) => theme.colors[variant]};
  --bme-background: ${({ theme }) => theme.colors[variant]};
`;

export default mixin;
