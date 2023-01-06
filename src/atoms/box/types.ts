import React from "react";
import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";

export type Direction = "row" | "column";
export type AlignX = "left" | "center" | "right" | "space-between";
export type AlignY = "top" | "center" | "bottom" | "space-between";

export interface BoxProps {
  children: React.ReactNode;
  inline?: boolean;
  alignX?: AlignX;
  alignY?: AlignY;
  direction?: Direction;
  wrap?: boolean;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  padding?: string;
  margin?: string;
  rounded?: boolean;
  border?: ThemeColours;
  background?: ThemeColours;
}

export interface StyledBoxProps extends StyledComponent {
  inline?: boolean;
  alignItems: string;
  justifyContent: string;
  direction: Direction;
  wrap: boolean;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  padding?: string;
  margin?: string;
  rounded?: boolean;
  border?: ThemeColours;
  background?: ThemeColours;
}
