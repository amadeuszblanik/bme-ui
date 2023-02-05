import React from "react";
import { InputProps } from "../input/types";
import { ThemeColours } from "../../settings/theme";

export type FormControllerChildren = React.ReactElement<InputProps>;

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
}

export interface StyledLabelProps {
  variant: ThemeColours;
}
