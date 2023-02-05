import React from "react";
import { ThemeColours } from "../../settings/theme";

export type Direction = "row" | "column";
export type AlignX = "left" | "center" | "right" | "space-between";
export type AlignY = "top" | "center" | "bottom" | "space-between";
export type Overflow = "visible" | "hidden" | "scroll" | "auto";

export interface BoxProps {
  innerRef?: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  position?: "relative" | "absolute" | "fixed";
  overflow?: Overflow;
  overflowX?: Overflow;
  overflowY?: Overflow;
  inline?: boolean;
  alignX?: AlignX;
  alignY?: AlignY;
  direction?: Direction;
  wrap?: true | "nowrap" | "wrap" | "wrap-reverse";
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
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  overflow?: Overflow;
  overflowX?: Overflow;
  overflowY?: Overflow;
  inline?: boolean;
  alignItems: string;
  justifyContent: string;
  direction: Direction;
  wrap: "nowrap" | "wrap" | "wrap-reverse";
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
