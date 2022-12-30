import { ThemeColours } from "../../settings/theme";

export interface ProgressBarProps {
  value?: number;
  label?: string;
  variant?: ThemeColours;
  timeLeft?: string;
  error?: string;
  done?: string;
}

export interface StyledProgressBarValueProps {
  value?: number;
  variant: ThemeColours;
}

export interface StyledProgressBarLabelProps {
  variant: ThemeColours;
}
