import React from "react";
import { ThemeColours } from "../../settings/theme";

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
  searchable?: boolean;
  native?: boolean;
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

export interface StyledLabelProps {
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

export interface StyledSelectProps {
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

export interface StyledHintProps {
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
