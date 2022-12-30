import React from "react";
import { ThemeColours } from "../../settings/theme";

export type IconName = "checkmark" | "lock-closed" | "lock-open" | "close-circle" | "mail" | "person" | "search";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconName;
  color?: ThemeColours;
  size?: number;
}

export interface StyledIconProps {
  color?: ThemeColours;
  size: number;
}
