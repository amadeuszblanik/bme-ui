import React from "react";
import { InputProps } from "../input/types";
import { ThemeColours } from "../../settings/theme";
import { CheckboxProps } from "../checkbox/types";

export type FormControllerChildren = React.ReactElement<InputProps | CheckboxProps>;

export interface FormControllerProps {
  name: string;
  label?: string;
  hint?: string;
  error?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  disabled?: boolean;
  variant?: ThemeColours;
  children: FormControllerChildren;
  labelPosition?: "top" | "right" | "left";
}

export interface StyledLabelProps {
  variant: ThemeColours;
}
