import React from "react";
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
import { BarbellOutline } from "./svg/barbell-outline";
import { HeartOutline } from "./svg/heart-outline";
import { MedkitOutline } from "./svg/medkit-outline";
import { PeopleOutline } from "./svg/people-outline";
import { PawOutline } from "./svg/paw-outline";
import { AppsOutline } from "./svg/apps-outline";
import { BookOutline } from "./svg/book-outline";
import { ChevronDownOutline } from "./svg/chevron-down-outline";
import { ChevronForwardOutline } from "./svg/chevron-forward-outline";
import { ChevronUpOutline } from "./svg/chevron-up-outline";
import { CogOutline } from "./svg/cog-outline";
import { CloseOutline } from "./svg/close-outline";
import { MedicalOutline } from "./svg/medical-outline";
import { CreateOutline } from "./svg/create-outline";
import { WarningOutline } from "./svg/warning-outline";
import { CameraOutline } from "./svg/camera-outline";

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
    case "apps":
      IconToRender = AppsOutline;
      break;
    case "barbell":
      IconToRender = BarbellOutline;
      break;
    case "book":
      IconToRender = BookOutline;
      break;
    case "camera":
      IconToRender = CameraOutline;
      break;
    case "checkmark":
      IconToRender = CheckmarkOutline;
      break;
    case "chevron-down":
      IconToRender = ChevronDownOutline;
      break;
    case "chevron-forward":
      IconToRender = ChevronForwardOutline;
      break;
    case "chevron-up":
      IconToRender = ChevronUpOutline;
      break;
    case "close-circle":
      IconToRender = CloseCircleOutline;
      break;
    case "close":
      IconToRender = CloseOutline;
      break;
    case "cog":
      IconToRender = CogOutline;
      break;
    case "create":
      IconToRender = CreateOutline;
      break;
    case "grid":
      IconToRender = GridOutline;
      break;
    case "heart":
      IconToRender = HeartOutline;
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
    case "medical":
      IconToRender = MedicalOutline;
      break;
    case "medkit":
      IconToRender = MedkitOutline;
      break;
    case "menu":
      IconToRender = MenuOutline;
      break;
    case "paw":
      IconToRender = PawOutline;
      break;
    case "people":
      IconToRender = PeopleOutline;
      break;
    case "person":
      IconToRender = PersonOutline;
      break;
    case "search":
      IconToRender = SearchOutline;
      break;
    case "warning":
      IconToRender = WarningOutline;
      break;
  }

  return (
    <StyledIcon size={size ?? DEFAULT_ICON_SIZE} color={color}>
      {IconToRender}
    </StyledIcon>
  );
};

export default Icon;
