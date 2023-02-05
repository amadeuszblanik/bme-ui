import React from "react";
import { ThemeColours } from "../../settings/theme";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  label: string;
  onValue: (value: string) => void;
  size?: "small" | "medium" | "large";
  hint?: string;
  error?: string;
  valid?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  type?: "text" | "password" | "email" | "search";
  disabled?: boolean;
}

export interface StyledFormControlProps {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}

export interface StyledPrefixIconProps {
  paddingX: {
    mobile: number;
    desktop: number;
  };
}

export interface StyledLabelProps {
  isFilled: boolean;
  isPrefixIcon: boolean;
  variant: ThemeColours;
  paddingX: {
    mobile: number;
    desktop: number;
  };
  fontSize: {
    mobile: number;
    desktop: number;
  };
}

export interface StyledInputProps {
  isFilled: boolean;
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

export interface StyledClearProps {
  isFilled: boolean;
  paddingX: {
    mobile: number;
    desktop: number;
  };
}

export interface StyledHintProps {
  variant: ThemeColours;
  paddingX: {
    mobile: number;
    desktop: number;
  };
  fontSize: {
    mobile: number;
    desktop: number;
  };
}
