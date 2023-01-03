import { ThemeColours } from "../../settings/theme";
import { IconName } from "../icon/types";
import { StyledComponent } from "../../types/styled-component";

export interface TagProps {
  label: string;
  size?: "small" | "medium" | "large";
  variant?: ThemeColours;
  icon?: IconName;
  onRemove?: () => void;
}

export interface StyledTagProps extends StyledComponent {
  variant: ThemeColours;
  paddingX: {
    mobile: number;
    desktop: number;
  };
  paddingY: {
    mobile: number;
    desktop: number;
  };
  fontSize: {
    mobile: number;
    desktop: number;
  };
}

export interface StyledIconProps extends StyledComponent {
  fontSize: {
    mobile: number;
    desktop: number;
  };
}
