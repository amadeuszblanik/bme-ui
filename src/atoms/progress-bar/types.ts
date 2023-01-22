import { ThemeColours } from "../../settings/theme";

export interface ProgressBarProps {
  value?: number;
  label?: string;
  variant?: ThemeColours;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  timeLeft?: string;
  error?: string;
  done?: string;
}

export interface StyledProgressBarWrapperProps {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}

export interface StyledProgressBarValueProps {
  value?: number;
  variant: ThemeColours;
}

export interface StyledProgressBarLabelProps {
  variant: ThemeColours;
}
