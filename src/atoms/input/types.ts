import React from "react";
import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
  onValue: (value: string) => void;
  size?: "small" | "medium" | "large";
  hint?: string;
  error?: string;
  valid?: string;
  type?: "text" | "password" | "email" | "search";
  disabled?: boolean;
}

export interface StyledPrefixIconProps extends StyledComponent {
  paddingX: {
    mobile: number;
    desktop: number;
  };
}

export interface StyledLabelProps extends StyledComponent {
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

export interface StyledInputProps extends StyledComponent {
  isFilled: boolean;
  isPrefixIcon: boolean;
  variant: ThemeColours;
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

export interface StyledClearProps extends StyledComponent {
  isFilled: boolean;
  paddingX: {
    mobile: number;
    desktop: number;
  };
}

export interface StyledHintProps extends StyledComponent {
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
