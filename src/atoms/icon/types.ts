import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";

export const IconNames: string[] = [
  "apps",
  "barbell",
  "book",
  "checkmark",
  "chevron-down",
  "chevron-forward",
  "close-circle",
  "close",
  "create",
  "grid",
  "heart",
  "lock-closed",
  "lock-open",
  "mail",
  "medical",
  "medkit",
  "menu",
  "paw",
  "people",
  "person",
  "search",
  "warning",
];

export type IconName = typeof IconNames[number];

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconName;
  color?: ThemeColours;
  size?: number;
}

export interface StyledIconProps extends StyledComponent {
  color?: ThemeColours;
  size: number;
}
