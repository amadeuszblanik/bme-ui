import React from "react";
import styled from "styled-components";
import { IconProps, StyledIconProps } from "./types";
import IconRender from "./render";

const DEFAULT_ICON_SIZE = 24;

const StyledIcon = styled.i<StyledIconProps>`
  display: flex;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  ${({ theme, color }) => color && `color: ${theme.colors[color]}`};

  circle,
  path,
  rect {
    &:not([fill="none"]) {
      fill: currentColor;
    }

    &:not([stroke="none"]) {
      stroke: currentColor;
    }
  }
`;

const Icon: React.FC<IconProps> = ({ name, size, color }) => (
  <StyledIcon size={size ?? DEFAULT_ICON_SIZE} color={color}>
    {IconRender(name)?.({}) || <>?</>}
  </StyledIcon>
);

export default Icon;
