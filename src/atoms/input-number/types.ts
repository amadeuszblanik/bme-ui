import React from "react";
import { ThemeColours } from "../../types";

export interface InputNumberProps extends Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  value?: number;
  size?: "small" | "medium" | "large";
  inputMode?: "text" | "decimal" | "numeric" | "tel";
  pattern?: string;
  onChange?: (value: number) => void;
  variant?: ThemeColours;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  disabled?: boolean;
}

// styled

export interface StyledInputProps {
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
