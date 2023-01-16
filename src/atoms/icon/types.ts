import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";

export const IconNames = [
  "apps",
  "barbell",
  "book",
  "checkmark",
  "chevron-down",
  "chevron-forward",
  "chevron-up",
  "close-circle",
  "close",
  "cog",
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

export type IconName =
  | "apps"
  | "barbell"
  | "book"
  | "checkmark"
  | "chevron-down"
  | "chevron-forward"
  | "chevron-up"
  | "close-circle"
  | "close"
  | "cog"
  | "create"
  | "grid"
  | "heart"
  | "lock-closed"
  | "lock-open"
  | "mail"
  | "medical"
  | "medkit"
  | "menu"
  | "paw"
  | "people"
  | "person"
  | "search"
  | "warning";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconName;
  color?: ThemeColours;
  size?: number;
}

export interface StyledIconProps extends StyledComponent {
  color?: ThemeColours;
  size: number;
}
