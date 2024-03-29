import React from "react";
import { ThemeColours } from "../../settings/theme";

export interface CheckboxSharedProps extends Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  size?: "small" | "medium" | "large";
  valid?: string;
  disabled?: boolean;
  variant?: ThemeColours;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export interface CheckboxCheckboxProps extends CheckboxSharedProps {
  type?: "checkbox";
}

export interface CheckboxRadioProps extends CheckboxSharedProps {
  id: string;
  type?: "radio";
}

export type CheckboxProps = CheckboxCheckboxProps | CheckboxRadioProps;

export interface StyledCheckboxProps {
  type?: "checkbox" | "radio";
  variant: ThemeColours;
  sizeInPx: {
    mobile: number;
    desktop: number;
  };
  fontSize: {
    mobile: number;
    desktop: number;
  };
}

export interface StyledCheckboxIconProps {
  variant: ThemeColours;
  size: {
    mobile: number;
    desktop: number;
  };
}
