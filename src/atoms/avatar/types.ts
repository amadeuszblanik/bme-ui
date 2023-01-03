import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";

export interface AvatarProps {
  src?: string;
  size?: "small" | "medium" | "large";
  variant?: ThemeColours;
  rounded?: boolean;
  border?: boolean;
  status?: ThemeColours;
}

export interface StyledAvatarWrapperProps extends StyledComponent {
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

export interface StyledAvatarProps extends StyledComponent {
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

export interface StyledStatusProps extends StyledComponent {
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
