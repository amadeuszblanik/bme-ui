import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";

export type IconName = "checkmark" | "lock-closed" | "lock-open" | "close-circle" | "mail" | "person" | "search";
export const IconNames: string[] = [
  "barbell",
  "checkmark",
  "close-circle",
  "grid",
  "heart",
  "lock-closed",
  "lock-open",
  "mail",
  "medkit",
  "menu",
  "paw",
  "people",
  "person",
  "search",
];

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: typeof IconNames[number];
  color?: ThemeColours;
  size?: number;
}

export interface StyledIconProps extends StyledComponent {
  color?: ThemeColours;
  size: number;
}
