import { ThemeColours } from "../../settings/theme";

export const IconNames = [
  "apps",
  "barbell",
  "book",
  "camera",
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
  | "camera"
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

export interface IconProps {
  name: IconName;
  color?: ThemeColours;
  size?: number;
}

export interface StyledIconProps {
  color?: ThemeColours;
  size: number;
}
