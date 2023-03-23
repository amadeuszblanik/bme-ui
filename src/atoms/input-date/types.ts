import React from "react";
import { ThemeColours } from "../../types";

export interface InputDateProps extends Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  value?: string | Date;
  type?: "date" | "time" | "datetime-local";
  size?: "small" | "medium" | "large";
  onChange?: (value: string) => void;
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
