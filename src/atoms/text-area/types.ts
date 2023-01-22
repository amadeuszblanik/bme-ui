import React from "react";
import { ThemeColours } from "../../settings/theme";
export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  value: string;
  label: string;
  onValue: (value: string) => void;
  size?: "small" | "medium" | "large";
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  hint?: string;
  error?: string;
  valid?: string;
  disabled?: boolean;
}

export interface StyledFormControlProps {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}

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

export interface StyledTextAreaProps {
  isFilled: boolean;
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

export interface StyledClearProps {
  isFilled: boolean;
  paddingX: {
    mobile: number;
    desktop: number;
  };
  paddingY: {
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
