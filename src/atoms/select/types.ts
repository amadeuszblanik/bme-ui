import React from "react";
import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";

export interface SelectItem {
  key: string;
  label: string;
}

export interface SelectPropsShared extends React.HTMLAttributes<HTMLSelectElement> {
  name: string;
  list: SelectItem[];
  label: string;
  emptyLabel?: string;
  size?: "small" | "medium" | "large";
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  hint?: string;
  error?: string;
  valid?: string;
  disabled?: boolean;
  variant?: ThemeColours;
  children?: undefined | null;
}

export interface SelectPropsSingle extends SelectPropsShared {
  value: SelectItem | null;
  onValue: (value: SelectItem | null) => void;
  multiple?: false;
}

export interface SelectPropsMultiple extends SelectPropsShared {
  value: SelectItem[];
  onValue: (value: SelectItem[]) => void;
  multiple?: true;
}

export type SelectProps = SelectPropsSingle | SelectPropsMultiple;

export interface StyledLabelProps extends StyledComponent {
  isFilled: boolean;
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

export interface StyledFormControlProps {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}

export interface StyledSelectProps extends StyledComponent {
  isFilled: boolean;
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

export interface StyledClearProps {
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
