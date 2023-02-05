import React from "react";
import { BmeInputMode } from "../../types";
import { ThemeColours } from "../../settings/theme";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: "text" | "password" | "email" | "search";
  inputMode?: BmeInputMode;
  size?: "small" | "medium" | "large";
  variant?: ThemeColours;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  disabled?: boolean;
}

export interface StyledInputWrapperProps {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}

export interface StyledInputProps {
  isPrefixIcon: boolean;
  variant: ThemeColours;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  paddingX: {
    mobile: number;
    desktop: number;
  };
  paddingY: {
    mobile: number;
    desktop: number;
  };
  fontSize: {
    mobile: number;
    desktop: number;
  };
}

export interface StyledPrefixIconProps {
  paddingX: {
    mobile: number;
    desktop: number;
  };
}
