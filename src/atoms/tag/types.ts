import { ThemeColours } from "../../settings/theme";
import { IconName } from "../icon/types";

export interface TagProps {
  label: string;
  size?: "small" | "medium" | "large";
  variant?: ThemeColours;
  icon?: IconName;
  onRemove?: () => void;
}

export interface StyledTagProps {
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

export interface StyledIconProps {
  fontSize: {
    mobile: number;
    desktop: number;
  };
}
