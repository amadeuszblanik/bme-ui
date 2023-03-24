import React from "react";
import styled from "styled-components";
import { ThemeColours } from "../../settings/theme";

export type TextVariants =
  | "LargeTitle"
  | "Title1"
  | "Title2"
  | "Title3"
  | "Headline"
  | "Body"
  | "Callout"
  | "Subhead"
  | "Footnote"
  | "Caption1"
  | "Caption2";
export type TextWeights =
  | "Thin"
  | "UltraLight"
  | "Light"
  | "Regular"
  | "Medium"
  | "SemiBold"
  | "Bold"
  | "Heavy"
  | "Black";

export type TextAlignment = "left" | "center" | "right";
export type FontStyle = "normal" | "italic";
export type LineFormat = "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | "break-spaces";

export interface StyledTextProps {
  sizeMobile: number;
  sizeDesktop: number;
  weight: number;
  textTransform?: string;
  lineHeight?: string;
  letterSpacing?: string;
  color?: ThemeColours;
  fontStyle?: FontStyle;
  lineFormat?: LineFormat;
  noBottomMargin?: boolean;
  align?: TextAlignment;
  ellipsis?: boolean;
}

const StyledText = styled.p<StyledTextProps>`
  margin: 0 0 ${({ noBottomMargin }) => (noBottomMargin ? "0" : "4px")};
  color: ${({ theme, color }) => (color ? theme.colors[color] : "var(--color-text)")};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ sizeMobile }) => sizeMobile}px;
  font-style: ${({ fontStyle }) => fontStyle};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  white-space: ${({ lineFormat }) => lineFormat || "normal"};
  text-align: ${({ align }) => align || "inherit"};
  text-transform: ${({ textTransform }) => textTransform};
  --placeholder-height: ${({ sizeMobile }) => sizeMobile}px;
  --placeholder-offset-y: 3px;

  ${({ ellipsis }) =>
    ellipsis &&
    `overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: ${({ sizeDesktop }) => sizeDesktop}px;
    --placeholder-height: ${({ sizeDesktop }) => sizeDesktop}px;
  }
`;

const weightSize: { [key in TextWeights]: number } = {
  Thin: 100,
  UltraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  Heavy: 800,
  Black: 900,
};

const variantSize: {
  [key in TextVariants]: {
    mobile: {
      standard: number;
      leading: number;
    };
    desktop: {
      standard: number;
      leading: number;
    };
  };
} = {
  LargeTitle: {
    mobile: { standard: 34, leading: 41 },
    desktop: { standard: 34, leading: 41 },
  },
  Title1: {
    mobile: { standard: 28, leading: 34 },
    desktop: { standard: 28, leading: 34 },
  },
  Title2: {
    mobile: { standard: 22, leading: 28 },
    desktop: { standard: 22, leading: 28 },
  },
  Title3: {
    mobile: { standard: 20, leading: 25 },
    desktop: { standard: 20, leading: 25 },
  },
  Headline: {
    mobile: { standard: 17, leading: 22 },
    desktop: { standard: 17, leading: 22 },
  },
  Body: {
    mobile: { standard: 15, leading: 19 },
    desktop: { standard: 17, leading: 22 },
  },
  Callout: {
    mobile: { standard: 14, leading: 21 },
    desktop: { standard: 16, leading: 21 },
  },
  Subhead: {
    mobile: { standard: 15, leading: 19 },
    desktop: { standard: 15, leading: 19 },
  },
  Footnote: {
    mobile: { standard: 13, leading: 18 },
    desktop: { standard: 13, leading: 18 },
  },
  Caption1: {
    mobile: { standard: 12, leading: 16 },
    desktop: { standard: 12, leading: 16 },
  },
  Caption2: {
    mobile: { standard: 11, leading: 13 },
    desktop: { standard: 11, leading: 13 },
  },
};

export interface Props {
  children: React.ReactNode;
  variant?: TextVariants;
  weight?: TextWeights;
  leading?: boolean;
  noBottomMargin?: boolean;
  color?: ThemeColours;
  fontStyle?: FontStyle;
  lineHeight?: string;
  letterSpacing?: string;
  lineFormat?: LineFormat;
  uppercase?: boolean;
  align?: TextAlignment;
  ellipsis?: boolean;
}

const Component: React.FunctionComponent<Props> = ({
  children,
  variant,
  leading,
  weight,
  color,
  uppercase,
  fontStyle,
  ellipsis,
  ...props
}) => {
  const size = variantSize[variant || "Body"];

  return (
    <StyledText
      sizeMobile={size.mobile[leading ? "leading" : "standard"]}
      sizeDesktop={size.desktop[leading ? "leading" : "standard"]}
      weight={weightSize[weight || "Regular"]}
      color={color}
      fontStyle={fontStyle || "normal"}
      textTransform={uppercase ? "uppercase" : undefined}
      ellipsis={ellipsis}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Component;
