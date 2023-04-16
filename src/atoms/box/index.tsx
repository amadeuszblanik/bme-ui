import React from "react";
import styled from "styled-components";
import { BoxProps, StyledBoxProps, AlignX, AlignY, Direction } from "./types";
import { animations, isDark, margins, paddings } from "../../mixins";

const DEFAULT_ALIGN_X: AlignX = "left";
const DEFAULT_ALIGN_Y: AlignY = "top";
const DEFAULT_DIRECTION: Direction = "row";
const DEFAULT_WRAP = "nowrap";

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
  ${({ position }) => position && `position: ${position};`}
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ width }) => `width: ${width}`};
  ${({ minWidth }) => `min-width: ${minWidth}`};
  ${({ maxWidth }) => `max-width: ${maxWidth}`};
  ${({ height }) => `height: ${height}`};
  ${({ minHeight }) => `min-height: ${minHeight}`};
  ${({ maxHeight }) => `max-height: ${maxHeight}`};
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  color: ${({ theme, background }) =>
    background ? (isDark(theme.colors[background]) ? theme.colors.light : theme.colors.dark) : theme.colors.text};
  background: ${({ theme, background }) => (background ? theme.colors[background] : "transparent")};
  border: ${({ theme, border }) => (border ? `2px solid ${theme.colors[border]}` : "none")};
  border-radius: ${({ theme, rounded }) => (rounded ? theme.radius : "0")}px;

  ${({ padding }) => paddings(padding)};
  ${({ margin }) => margins(margin)};
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

  ${({ theme, background }) => background && `--bme-background: ${theme.colors[background]}`};
  ${({ theme, background }) =>
    background && `--bme-text: ${isDark(theme.colors[background]) ? theme.colors.light : theme.colors.dark}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    border-width: 3px;
  }
`;

const Box: React.FC<BoxProps> = ({
  innerRef,
  position,
  overflow,
  overflowX,
  overflowY,
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
  const styledWrap = wrap === true ? "wrap" : wrap || DEFAULT_WRAP;

  const justifyContent = direction === "row" ? ALIGN_X_MAP[alignX] : ALIGN_Y_MAP[alignY];
  const alignItems = direction === "row" ? ALIGN_Y_MAP[alignY] : ALIGN_X_MAP[alignX];

  return (
    <StyledBox
      ref={innerRef}
      position={position}
      overflow={overflow}
      overflowX={overflowX}
      overflowY={overflowY}
      inline={inline}
      alignItems={alignItems}
      justifyContent={justifyContent}
      direction={direction}
      wrap={styledWrap}
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
    >
      {children}
    </StyledBox>
  );
};

export default Box;
