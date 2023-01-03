import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";

export type IconName = "checkmark" | "lock-closed" | "lock-open" | "close-circle" | "mail" | "person" | "search";
export const IconNames: string[] = [
  "checkmark",
  "close-circle",
  "grid",
  "lock-closed",
  "lock-open",
  "mail",
  "menu",
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
