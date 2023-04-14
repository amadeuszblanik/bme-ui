import { ThemeColours } from "../../settings/theme";

export type SpinnerSizes = "small" | "medium" | "large";

export interface StyledSpinnerWrapperProps {
  size: number;
}

export interface StyledSpinnerSvgProps {
  size: number;
}

export interface StyledSpinnerSvgCircleProps {
  variant?: ThemeColours;
  dashValue: number;
  strokeWidth: number;
}

export interface SpinnerProps {
  size?: SpinnerSizes;
  variant?: ThemeColours;
  strokeWidth?: number;
}
