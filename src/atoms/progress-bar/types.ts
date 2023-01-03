import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";

export interface ProgressBarProps {
  value?: number;
  label?: string;
  variant?: ThemeColours;
  timeLeft?: string;
  error?: string;
  done?: string;
}

export interface StyledProgressBarValueProps extends StyledComponent {
  value?: number;
  variant: ThemeColours;
}

export interface StyledProgressBarLabelProps extends StyledComponent {
  variant: ThemeColours;
}
