import React from "react";
import styled from "styled-components";

import { TextComponentProps } from "./Text.types";
import { TextFontSize, TextFontWeight } from "./Text.variants";

const StyledText = styled.p<TextComponentProps>`
  color: ${({ variant, theme }) => variant ? theme.bme.palette[variant] : 'var(--bme-colour-text)'};
  font-size: ${({ size }) => TextFontSize[size]}px;
  font-family: ${({ theme, fontFamily }) => theme.bme.fonts[fontFamily]};
  font-weight: ${({ weight }) => TextFontWeight[weight]};
  text-align: ${({ align }) => align};
  ${({ italic }) => italic ? 'font-style: italic;' : ''}
`;

const Text: React.FunctionComponent<TextComponentProps> = ({ children, ...args }) => (
  <StyledText data-testid="text-component" {...args}>
    {children}
  </StyledText>
);

Text.defaultProps = {
  size: "m",
  fontFamily: "sansSerif",
  weight: "regular",
  align: "left",
}

export default Text;
