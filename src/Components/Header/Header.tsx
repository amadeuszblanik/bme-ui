import React from "react";
import styled from "styled-components";

import { HeaderComponentProps } from "./Header.types";
import { HeaderFontSize } from "./Header.variants";
import {TextFontWeight} from "../Text/Text.variants";

const StyledHeader = styled.header<HeaderComponentProps>`
  width: 100%;
  font-size: ${({ size }) => HeaderFontSize[size]}px;
  font-family: ${({ theme, fontFamily }) => theme.bme.fonts[fontFamily]};
  font-weight: ${TextFontWeight.bold};
  text-align: ${({ align }) => align};
  font-style: italic;
`;

const StyledAccent = styled.span`
  background: ${({ theme }) => `linear-gradient(45deg, ${theme.bme.palette.primary}, ${theme.bme.palette.secondary}, ${theme.bme.palette.tertiary})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
`;

const Header: React.FunctionComponent<HeaderComponentProps> = ({ children, ...args }) => (
  <StyledHeader {...args}>
    <StyledAccent>#</StyledAccent>
    {children}
  </StyledHeader>
);

Header.defaultProps = {
  size: "m",
  fontFamily: "mono",
  align: "left",
}

export default Header;
