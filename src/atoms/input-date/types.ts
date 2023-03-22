import React from "react";
import { ThemeColours } from "../../types";

export interface InputDateProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  type?: "date" | "time" | "datetime-local";
  size?: "small" | "medium" | "large";
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
