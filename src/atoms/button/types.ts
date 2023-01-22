import React from "react";
import { ThemeColours } from "../../settings/theme";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ThemeColours;
  size?: "small" | "medium" | "large";
  width?: string;
  outline?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface StyledButtonProps {
  width?: string;
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
