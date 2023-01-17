import styled from "styled-components";
import { StyledFormControlProps, StyledHintProps, StyledLabelProps, StyledSelectProps } from "../types";
import { animations } from "../../../mixins";
import { StyledClearProps } from "../../input/types";
import { ICON_PADDING_X, ICON_SIZE, LABEL_PADDING_X } from "../settings";

export const StyledFormControl = styled.div<StyledFormControlProps>`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  ${({ width }) => width && `width: ${width};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${animations(["width", "min-width", "max-width"])}
`;

export const StyledFormControlInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  position: absolute;
  top: ${({ isFilled }) => (isFilled ? "0" : "50%")};
  left: ${({ paddingX }) => paddingX.mobile - LABEL_PADDING_X}px;
  padding: 0 ${LABEL_PADDING_X}px 0 ${({ isFilled, fontSize }) => (!isFilled ? fontSize.mobile : LABEL_PADDING_X)}px;
  color: ${({ bmeTheme, variant, isFilled }) => (isFilled ? bmeTheme.colors[variant] : bmeTheme.colors.gray)};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  background: ${({ bmeTheme, isFilled }) => (isFilled ? bmeTheme.colors.background : "transparent")};
  transform: translateY(-50%);
  ${animations(["top", "left", "padding", "font-size", "background"])};

  @media (min-width: ${({ bmeTheme }) => bmeTheme.breakpoints.desktop}px) {
    left: ${({ paddingX }) => paddingX.desktop - LABEL_PADDING_X}px;
    padding: 0 ${LABEL_PADDING_X}px 0
      ${({ isFilled, fontSize }) =>
        !isFilled ? fontSize.desktop + ICON_PADDING_X + LABEL_PADDING_X : LABEL_PADDING_X}px;
    font-size: ${({ fontSize }) => fontSize.desktop}px;
  }
`;

export const StyledSelect = styled.select<StyledSelectProps>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-width: 240px;
  padding: ${({ paddingX, paddingY }) =>
    `${paddingY.mobile}px ${ICON_PADDING_X + ICON_SIZE + ICON_PADDING_X}px ${paddingY.mobile}px ${paddingX.mobile}px;`};
  overflow: hidden;
  color: ${({ bmeTheme, disabled }) => (disabled ? bmeTheme.colors.gray5 : bmeTheme.colors.text)};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: ${({ bmeTheme }) => bmeTheme.colors.gray5};
  border: ${({ bmeTheme }) => bmeTheme.colors.gray5} solid 2px;
  border-radius: ${({ bmeTheme }) => bmeTheme.radius}px;
  appearance: none;

  ${({ bmeTheme, variant, isFilled, disabled }) =>
    isFilled &&
    `background: transparent;
      border: ${disabled ? bmeTheme.colors.gray : bmeTheme.colors[variant]} solid 2px;
      outline: none;`}
`;

export const StyledClear = styled.button<StyledClearProps>`
  position: absolute;
  top: 50%;
  right: ${({ paddingX }) => paddingX.mobile}px;
  padding: 0;
  background: ${({ bmeTheme }) => bmeTheme.colors.background};
  border: none;
  border-radius: ${ICON_SIZE}px;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: ${({ isFilled }) => (isFilled ? "1" : "0")};
  appearance: none;
  ${animations(["right", "opacity"])};

  @media (min-width: ${({ bmeTheme }) => bmeTheme.breakpoints.desktop}px) {
    right: ${({ paddingX }) => paddingX.desktop}px;
  }
`;

export const StyledHint = styled.div<StyledHintProps>`
  padding: ${({ paddingX }) => `4px ${paddingX.mobile}px 0`};
  color: ${({ bmeTheme, variant }) => bmeTheme.colors[variant]};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
`;