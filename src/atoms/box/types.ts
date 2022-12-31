import React from "react";
import { ThemeColours } from "../../settings/theme";

export type Direction = "row" | "column";
export type AlignX = "left" | "center" | "right";
export type AlignY = "top" | "center" | "bottom";

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

export interface StyledBoxProps {
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