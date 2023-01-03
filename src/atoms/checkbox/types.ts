import React from "react";
import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  value: boolean;
  label: string;
  onValue: (value: boolean) => void;
  size?: "small" | "medium" | "large";
  hint?: string;
  error?: string;
  valid?: string;
  disabled?: boolean;
  variant?: ThemeColours;
}

export interface StyledLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
  variant: ThemeColours;
  size: {
    mobile: number;
    desktop: number;
  };
  fontSize: {
    mobile: number;
    desktop: number;
  };
}

export interface StyledCheckboxProps extends StyledComponent {
  disabled: boolean;
  checked: boolean;
  variant: ThemeColours;
  size: {
    mobile: number;
    desktop: number;
  };
  fontSize: {
    mobile: number;
    desktop: number;
  };
}

export interface StyledCheckboxCheckmarkProps {
  checked: boolean;
}

export interface StyledHintProps extends StyledComponent {
  variant: ThemeColours;
  size: {
    mobile: number;
    desktop: number;
  };
  fontSize: {
    mobile: number;
    desktop: number;
  };
}
