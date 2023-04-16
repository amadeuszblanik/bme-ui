import { css } from "styled-components";
import { ThemeColours } from "../types";

const mixin = (variant: ThemeColours) => css`
  color: ${({ theme }) => theme.colors[variant]};
  --bme-text: ${({ theme }) => theme.colors[variant]};
`;

export default mixin;
