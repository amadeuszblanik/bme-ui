import React from "react";
import styled from "styled-components";

import { BadgeComponentProps } from "./Badge.types";
import {spacing, textColour} from "../../Mixins";

const StyledBadge = styled.span<BadgeComponentProps>`
  display: inline-block;
  ${spacing('padding', { x: "m", y: "xs" })}
  ${spacing('margin', { x: "xs", y: "xxs" })}
  color: ${({theme, variant, outline}) => !outline && variant ? `${textColour(theme.bme.palette[variant], theme)}` : 'var(--bme-colour-text)'};
  background: ${({theme, variant, outline}) => !outline && variant ? `${theme.bme.palette[variant]}` : 'transparent'};
  border: ${({theme, variant, outline}) => outline && variant ?`${theme.bme.palette[variant]} 2px solid` : 'none'};
  border-radius: ${({ rounded }) => rounded ? 1000 : 5}px;
  
  font-family: ${({ theme }) => theme.bme.fonts.mono};
  font-style: italic;
`;

const Badge: React.FunctionComponent<BadgeComponentProps> = ({ children, ...args }) => (
  <StyledBadge {...args}>
    {children}
  </StyledBadge>
);

Badge.defaultProps = {
  variant: "dark",
}

export default Badge;
