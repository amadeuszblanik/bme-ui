import React from "react";
import styled from "styled-components";
import { IconProps, StyledIconProps } from "./types";
import { CloseCircleOutline } from "./svg/close-circle-outline";
import { SearchOutline } from "./svg/search-outline";
import { MailOutline } from "./svg/mail-outline";
import { LockClosedOutline } from "./svg/lock-closed-outline";
import { LockOpenOutline } from "./svg/lock-open-outline";

const DEFAULT_ICON_SIZE = 24;

const StyledIcon = styled.i<StyledIconProps>`
  display: flex;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  ${({ theme, color }) => color && `color: ${theme.colors[color]}`};
`;

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  let IconToRender = <>⍰</>;

  switch (name) {
    case "lock-closed":
      IconToRender = LockClosedOutline;
      break;
    case "lock-open":
      IconToRender = LockOpenOutline;
      break;
    case "close-circle":
      IconToRender = CloseCircleOutline;
      break;
    case "mail":
      IconToRender = MailOutline;
      break;
    case "search":
      IconToRender = SearchOutline;
      break;
  }

  return (
    <StyledIcon size={size ?? DEFAULT_ICON_SIZE} color={color}>
      {IconToRender}
    </StyledIcon>
  );
};

export default Icon;
