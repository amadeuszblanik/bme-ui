import React from "react";
import { ThemeColours } from "../../settings/theme";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: ThemeColours;
  size?: "small" | "medium" | "large";
  outline?: boolean;
}

export interface StyledButtonProps {
  paddingX: {
    mobile: number;
    desktop: number;
  };
  paddingY: {
    mobile: number;
    desktop: number;
  };
  variant: ThemeColours;
  outline?: boolean;
  fontSize: {
    mobile: number;
    desktop: number;
  };
}
