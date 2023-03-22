import React from "react";
import styled from "styled-components";
import { isEmpty } from "bme-utils";
import {
  InputDateProps,
  StyledClearProps,
  StyledFormControlProps,
  StyledHintProps,
  StyledInputProps,
  StyledLabelProps,
} from "./types";
import { animations, isDark } from "../../mixins";
import { BmeIcon } from "../index";
import { ThemeColours } from "../../settings/theme";

const VALUES = {
  mobile: {
    small: {
      paddingX: 8,
      paddingY: 16,
      fontSize: 16,
    },
    medium: {
      paddingX: 16,
      paddingY: 16,
      fontSize: 16,
    },
    large: {
      paddingX: 16,
      paddingY: 16,
      fontSize: 16,
    },
  },
  desktop: {
    small: {
      paddingX: 8,
      paddingY: 16,
      fontSize: 16,
    },
    medium: {
      paddingX: 16,
      paddingY: 16,
      fontSize: 16,
    },
    large: {
      paddingX: 20,
      paddingY: 16,
      fontSize: 16,
    },
  },
};

const ICON_SIZE = 24;
const LABEL_PADDING_X = 8;
const VARIANT: ThemeColours = "blue";

const StyledFormControl = styled.div<StyledFormControlProps>`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  ${({ width }) => width && `width: ${width};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${animations(["width", "min-width", "max-width"])}
`;

const StyledFormControlInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledLabel = styled.label<StyledLabelProps>`
  position: absolute;
  top: ${({ isFilled }) => (isFilled ? "0" : "50%")};
  left: ${({ paddingX }) => paddingX.mobile - LABEL_PADDING_X}px;
  display: inline-flex;
  width: ${({ isFilled, paddingX }) => (isFilled ? "auto" : `calc(100% - ${paddingX.mobile - LABEL_PADDING_X}px)`)};
  padding: 0 ${LABEL_PADDING_X}px 0 ${LABEL_PADDING_X}px;
  color: ${({ theme, variant, isFilled }) => (isFilled ? theme.colors[variant] : theme.colors.gray)};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  background: ${({ theme, isFilled }) => (isFilled ? theme.colors.background : theme.colors.gray5)};
  transform: translateY(-50%);
  cursor: text;
  ${animations(["top", "left", "width", "padding", "font-size", "background"])};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    left: ${({ paddingX }) => paddingX.desktop - LABEL_PADDING_X}px;
    width: ${({ isFilled, paddingX }) => (isFilled ? "auto" : `calc(100% - ${paddingX.desktop - LABEL_PADDING_X}px)`)};
    padding: 0 ${LABEL_PADDING_X}px 0 ${LABEL_PADDING_X}px;
    font-size: ${({ fontSize }) => fontSize.desktop}px;
  }
`;

const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "100%"};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  padding: ${({ paddingX, paddingY }) =>
    `${paddingY.mobile}px ${paddingX.mobile + ICON_SIZE}px ${paddingY.mobile}px ${paddingX.mobile}px`};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.gray5 : theme.colors.text)};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  background: ${({ theme }) => theme.colors.gray5};
  border: ${({ theme }) => theme.colors.gray5} solid 2px;
  border-radius: ${({ theme }) => theme.radius}px;
  cursor: text;
  appearance: none;
  ${animations(["width", "min-width", "max-width", "background-color", "color", "padding", "font-size"])};

  ${({ theme }) =>
    isDark(theme.colors.gray5) &&
    `
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  `}

  ${({ theme, variant, isFilled, disabled }) =>
    isFilled &&
    `background: transparent;
      border: ${disabled ? theme.colors.gray : theme.colors[variant]} solid 2px;
      outline: none;`}

  &:not([disabled]) {
    &:active,
    &:focus {
      background: transparent;
      border: ${({ theme, variant, disabled }) => (disabled ? theme.colors.gray : theme.colors[variant])} solid 2px;
      outline: none;
    }
  }

  &:disabled,
  &[disabled] {
    background: ${({ theme }) => theme.colors.gray3} !important;
    border: ${({ theme }) => theme.colors.gray3} solid 2px;
    cursor: not-allowed;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ paddingX, paddingY }) =>
      `${paddingY.desktop}px ${paddingX.desktop + ICON_SIZE}px ${paddingY.desktop}px ${paddingX.desktop}px`};
    font-size: ${({ fontSize }) => fontSize.desktop}px;
  }
`;

const StyledClear = styled.button<StyledClearProps>`
  position: absolute;
  top: 50%;
  right: ${({ paddingX }) => paddingX.mobile}px;
  padding: 0;
  background: transparent;
  border: none;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: ${({ isFilled }) => (isFilled ? "1" : "0")};
  appearance: none;
  ${animations(["right", "opacity"])};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    right: ${({ paddingX }) => paddingX.desktop}px;
  }
`;

const StyledHint = styled.div<StyledHintProps>`
  padding: ${({ paddingX }) => `4px ${paddingX.mobile}px 0`};
  color: ${({ theme, variant }) => theme.colors[variant]};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
`;

const Input: React.FC<InputDateProps> = ({
  name,
  value,
  label,
  placeholder,
  onValue,
  hint,
  error,
  valid,
  size,
  width,
  minWidth,
  maxWidth,
  type,
  disabled,
  ...props
}) => {
  size = size ?? "medium";

  const inputType = type || "date";
  const variant = disabled ? "gray" : error ? "red" : valid ? "green" : VARIANT;
  const hintVariant: ThemeColours = error ? "red" : valid ? "green" : "gray";
  const hintMessage = error || valid || hint;

  const paddingX = {
    mobile: VALUES.mobile[size].paddingX,
    desktop: VALUES.desktop[size].paddingX,
  };
  const paddingY = {
    mobile: VALUES.mobile[size].paddingY,
    desktop: VALUES.desktop[size].paddingY,
  };
  const fontSize = {
    mobile: VALUES.mobile[size].fontSize,
    desktop: VALUES.desktop[size].fontSize,
  };

  const [isFocused, setIsFocused] = React.useState(false);
  const isFilled =
    (isFocused || !isEmpty(placeholder) || !isEmpty(value) || !isEmpty(error) || !isEmpty(valid)) && !disabled;

  return (
    <StyledFormControl width={width} minWidth={minWidth} maxWidth={maxWidth}>
      <StyledFormControlInput>
        <StyledLabel htmlFor={name} isFilled={isFilled} variant={variant} paddingX={paddingX} fontSize={fontSize}>
          {label}
        </StyledLabel>
        <StyledInput
          {...props}
          id={name}
          name={name}
          isFilled={isFilled}
          variant={variant}
          paddingX={paddingX}
          paddingY={paddingY}
          fontSize={fontSize}
          placeholder={placeholder}
          disabled={disabled}
          type={inputType}
          width={width}
          minWidth={minWidth}
          maxWidth={maxWidth}
          value={disabled ? "" : value}
          onChange={(event) => onValue(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {!disabled && (
          <StyledClear isFilled={!isEmpty(value)} paddingX={paddingX} onClick={() => onValue("")} type="button">
            <BmeIcon name="close-circle" size={ICON_SIZE} color={variant} />
          </StyledClear>
        )}
      </StyledFormControlInput>
      {!disabled && (
        <StyledHint variant={hintVariant} paddingX={paddingX} fontSize={fontSize}>
          {hintMessage}
        </StyledHint>
      )}
    </StyledFormControl>
  );
};

Input.defaultProps = {
  size: "medium",
};

export default Input;
