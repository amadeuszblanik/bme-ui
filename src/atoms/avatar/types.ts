import React from "react";
import { ThemeColours } from "../../settings/theme";
import { IconName } from "../icon/types";

export interface AvatarProps {
  src?: string;
  size?: "small" | "medium" | "large";
  variant?: ThemeColours;
  rounded?: boolean;
  border?: boolean;
  status?: ThemeColours;
  children?: React.ReactNode;
}

export interface AvatarActionProps {
  icon: IconName;
  onClick: () => void;
}

export interface StyledAvatarWrapperProps {
  size: {
    mobile: number;
    desktop: number;
  };
  borderInner: {
    mobile: number;
    desktop: number;
  };
  borderOuter: {
    mobile: number;
    desktop: number;
  };
  variant: ThemeColours;
  rounded?: boolean;
}

export interface StyledAvatarProps {
  size: {
    mobile: number;
    desktop: number;
  };
  borderInner: {
    mobile: number;
    desktop: number;
  };
  variant: ThemeColours;
  rounded?: boolean;
}

export interface StyledStatusProps {
  size: {
    mobile: number;
    desktop: number;
  };
  borderOuter: {
    mobile: number;
    desktop: number;
  };
  variant: ThemeColours;
  rounded?: boolean;
}

export interface StyledAvatarActionProps {
  visible: boolean;
  rounded?: boolean;
  size: {
    mobile: number;
    desktop: number;
  };
}
