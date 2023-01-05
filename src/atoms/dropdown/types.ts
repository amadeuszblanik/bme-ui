import React from "react";
import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";

export interface DropdownItem {
  key: string;
  label: string;
}

export interface DropdownProps extends React.HTMLAttributes<HTMLSelectElement> {
  name: string;
  value: DropdownItem | null;
  list: DropdownItem[];
  label: string;
  emptyLabel?: string;
  onValue: (value: DropdownItem | null) => void;
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
