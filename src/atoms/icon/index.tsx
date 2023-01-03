import React, { useContext } from "react";
import styled from "styled-components";
import { IconProps, StyledIconProps } from "./types";
import { CloseCircleOutline } from "./svg/close-circle-outline";
import { SearchOutline } from "./svg/search-outline";
import { MailOutline } from "./svg/mail-outline";
import { LockClosedOutline } from "./svg/lock-closed-outline";
import { LockOpenOutline } from "./svg/lock-open-outline";
import { CheckmarkOutline } from "./svg/checkmark-outline";
import { PersonOutline } from "./svg/person-outline";
import { GridOutline } from "./svg/grid-outline";
import { MenuOutline } from "./svg/menu-outline";
import ThemeProviderContext from "../../components/theme-provider/context";

const DEFAULT_ICON_SIZE = 24;

const StyledIcon = styled.i<StyledIconProps>`
  display: flex;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  ${({ bmeTheme, color }) => color && `color: ${bmeTheme.colors[color]}`};
`;

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  let IconToRender = <>⍰</>;

  const { theme } = useContext(ThemeProviderContext);

  switch (name) {
    case "checkmark":
      IconToRender = CheckmarkOutline;
      break;
    case "grid":
      IconToRender = GridOutline;
      break;
    case "close-circle":
      IconToRender = CloseCircleOutline;
      break;
    case "lock-closed":
      IconToRender = LockClosedOutline;
      break;
    case "lock-open":
      IconToRender = LockOpenOutline;
      break;
    case "mail":
      IconToRender = MailOutline;
      break;
    case "menu":
      IconToRender = MenuOutline;
      break;
    case "person":
      IconToRender = PersonOutline;
      break;
    case "search":
      IconToRender = SearchOutline;
      break;
  }

  return (
    <StyledIcon size={size ?? DEFAULT_ICON_SIZE} color={color} bmeTheme={theme}>
      {IconToRender}
    </StyledIcon>
  );
};

export default Icon;
