import React, { useContext } from "react";
import styled from "styled-components";
import { BoxProps, StyledBoxProps, AlignX, AlignY, Direction } from "./types";
import { animations, isDark, margins, paddings } from "../../mixins";
import ThemeProviderContext from "../../components/theme-provider/context";

const DEFAULT_ALIGN_X: AlignX = "left";
const DEFAULT_ALIGN_Y: AlignY = "top";
const DEFAULT_DIRECTION: Direction = "row";
const DEFAULT_WRAP = false;

const ALIGN_X_MAP: { [key in AlignX]: string } = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  "space-between": "space-between",
};

const ALIGN_Y_MAP: { [key in AlignY]: string } = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end",
  "space-between": "space-between",
};

const StyledBox = styled.div<StyledBoxProps>`
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ width }) => `width: ${width}`};
  ${({ minWidth }) => `min-width: ${minWidth}`};
  ${({ maxWidth }) => `max-width: ${maxWidth}`};
  ${({ height }) => `height: ${height}`};
  ${({ minHeight }) => `min-height: ${minHeight}`};
  ${({ maxHeight }) => `max-height: ${maxHeight}`};
  color: ${({ bmeTheme, background }) =>
    background
      ? isDark(bmeTheme.colors[background])
        ? bmeTheme.colors.light
        : bmeTheme.colors.dark
      : bmeTheme.colors.text};
  background: ${({ bmeTheme, background }) => (background ? bmeTheme.colors[background] : "transparent")};
  border: ${({ bmeTheme, border }) => (border ? `2px solid ${bmeTheme.colors[border]}` : "none")};
  border-radius: ${({ bmeTheme, rounded }) => (rounded ? bmeTheme.radius : "0")}px;

  ${({ padding, bmeTheme }) => paddings(padding, bmeTheme)};
  ${({ margin, bmeTheme }) => margins(margin, bmeTheme)};
  ${animations([
    "color",
    "background",
    "border",
    "border-radius",
    "height",
    "min-height",
    "max-height",
    "margin",
    "padding",
    "width",
    "min-width",
    "max-width",
  ])};

  --bme-background: ${({ bmeTheme, background }) => (background ? bmeTheme.colors[background] : "transparent")};
  --bme-color: ${({ bmeTheme, background }) =>
    background
      ? isDark(bmeTheme.colors[background])
        ? bmeTheme.colors.light
        : bmeTheme.colors.dark
      : bmeTheme.colors.text};

  @media (min-width: ${({ bmeTheme }) => bmeTheme.breakpoints.desktop}px) {
    border-width: 3px;
  }
`;

const Avatar: React.FC<BoxProps> = ({
  inline,
  alignX,
  alignY,
  direction,
  wrap,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  padding,
  margin,
  rounded,
  border,
  background,
  children,
}) => {
  alignX = alignX || DEFAULT_ALIGN_X;
  alignY = alignY || DEFAULT_ALIGN_Y;
  direction = direction || DEFAULT_DIRECTION;
  wrap = wrap || DEFAULT_WRAP;

  const { theme } = useContext(ThemeProviderContext);

  const justifyContent = direction === "row" ? ALIGN_X_MAP[alignX] : ALIGN_Y_MAP[alignY];
  const alignItems = direction === "row" ? ALIGN_Y_MAP[alignY] : ALIGN_X_MAP[alignX];

  return (
    <StyledBox
      inline={inline}
      alignItems={alignItems}
      justifyContent={justifyContent}
      direction={direction}
      wrap={wrap}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      padding={padding}
      margin={margin}
      rounded={rounded}
      border={border}
      background={background}
      bmeTheme={theme}
    >
      {children}
    </StyledBox>
  );
};

export default Avatar;
