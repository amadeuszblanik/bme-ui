import { ThemeColours } from "../../settings/theme";

export interface AvatarProps {
  src?: string;
  size?: "small" | "medium" | "large";
  variant?: ThemeColours;
  rounded?: boolean;
  border?: boolean;
  status?: ThemeColours;
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
