import styled from "styled-components";
import React, { useContext } from "react";
import { ThemeColours } from "../../settings/theme";
import { StyledComponent } from "../../types/styled-component";
import ThemeProviderContext from "../../components/theme-provider/context";

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

export interface StyledTextProps extends StyledComponent {
  size: number;
  weight: string;
  color?: ThemeColours;
  noBottomMargin?: boolean;
  textTransform?: string;
  align?: TextAlignment;
}

const StyledText = styled.p<StyledTextProps>`
  margin-bottom: ${({ noBottomMargin }) => (noBottomMargin ? "0" : "4px")};
  color: ${({ bmeTheme, color }) => (color ? bmeTheme.colors[color] : "var(--color-text)")};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
  text-align: ${({ align }) => align || "inherit"};
  text-transform: ${({ textTransform }) => textTransform};
  --placeholder-height: ${({ size }) => size}px;
  --placeholder-offset-y: 3px;
`;

const variantSize: {
  [key in TextVariants]: { standard: number; leading: number };
} = {
  LargeTitle: { standard: 34, leading: 41 },
  Title1: { standard: 28, leading: 34 },
  Title2: { standard: 22, leading: 28 },
  Title3: { standard: 20, leading: 25 },
  Headline: { standard: 17, leading: 22 },
  Body: { standard: 17, leading: 22 },
  Callout: { standard: 16, leading: 21 },
  Subhead: { standard: 15, leading: 20 },
  Footnote: { standard: 13, leading: 18 },
  Caption1: { standard: 12, leading: 16 },
  Caption2: { standard: 11, leading: 13 },
};

export interface Props {
  children: React.ReactNode;
  variant?: TextVariants;
  weight?: TextWeights;
  leading?: boolean;
  noBottomMargin?: boolean;
  color?: ThemeColours;
  uppercase?: boolean;
  align?: TextAlignment;
}

const Component: React.FunctionComponent<Props> = ({
  children,
  variant,
  leading,
  weight,
  color,
  uppercase,
  ...props
}) => {
  const size = variantSize[variant || "Body"][leading ? "leading" : "standard"];

  const { theme } = useContext(ThemeProviderContext);

  return (
    <StyledText
      size={size}
      weight={weight || "regular"}
      color={color}
      textTransform={uppercase ? "uppercase" : undefined}
      bmeTheme={theme}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Component;
