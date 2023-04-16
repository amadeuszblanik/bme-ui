import { css } from "styled-components";

const mixin = () => css`
  color: ${({ theme }) => `var(--bme-text, ${theme.colors.text})`};
  background-color: transparent;
  border: none;
  border-radius: 0;
  cursor: pointer;
  appearance: none;
`;

export default mixin;
