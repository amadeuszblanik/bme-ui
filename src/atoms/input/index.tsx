import React, { useContext } from "react";
import styled from "styled-components";
import { isEmpty } from "bme-utils";
import {
  InputProps,
  StyledClearProps,
  StyledFormControlProps,
  StyledHintProps,
  StyledInputProps,
  StyledLabelProps,
  StyledPrefixIconProps,
} from "./types";
import { animations } from "../../mixins";
import { BmeIcon } from "../index";
import { ThemeColours } from "../../settings/theme";
import ThemeProviderContext from "../../components/theme-provider/context";

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
const EMPTY_ICON_PADDING_X = 0;
const ICON_PADDING_X = 8;
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

const StyledPrefixIcon = styled.div<StyledPrefixIconProps>`
  position: absolute;
  top: 50%;
  left: ${({ paddingX }) => paddingX.mobile}px;
  padding: 0;
  transform: translateY(-50%);
  cursor: pointer;
  ${animations(["left"])};

  @media (min-width: ${({ bmeTheme }) => bmeTheme.breakpoints.desktop}px) {
    left: ${({ paddingX }) => paddingX.desktop}px;
  }
`;

const StyledLabel = styled.label<StyledLabelProps>`
  position: absolute;
  top: ${({ isFilled }) => (isFilled ? "0" : "50%")};
  left: ${({ paddingX }) => paddingX.mobile - LABEL_PADDING_X}px;
  padding: 0 ${LABEL_PADDING_X}px 0
    ${({ isFilled, isPrefixIcon, fontSize }) =>
      !isFilled && isPrefixIcon ? fontSize.mobile + ICON_PADDING_X + LABEL_PADDING_X : LABEL_PADDING_X}px;
  color: ${({ bmeTheme, variant, isFilled }) => (isFilled ? bmeTheme.colors[variant] : bmeTheme.colors.gray)};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  background: ${({ bmeTheme, isFilled }) => (isFilled ? bmeTheme.colors.background : "transparent")};
  transform: translateY(-50%);
  cursor: text;
  ${animations(["top", "left", "padding", "font-size", "background"])};

  @media (min-width: ${({ bmeTheme }) => bmeTheme.breakpoints.desktop}px) {
    left: ${({ paddingX }) => paddingX.desktop - LABEL_PADDING_X}px;
    padding: 0 ${LABEL_PADDING_X}px 0
      ${({ isFilled, isPrefixIcon, fontSize }) =>
        !isFilled && isPrefixIcon ? fontSize.desktop + ICON_PADDING_X + LABEL_PADDING_X : LABEL_PADDING_X}px;
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
  padding: ${({ paddingX, paddingY, fontSize, isPrefixIcon }) =>
    `${paddingY.mobile}px ${paddingX.mobile + ICON_SIZE}px ${paddingY.mobile}px ${
      paddingX.mobile + (isPrefixIcon ? fontSize.mobile + ICON_PADDING_X : EMPTY_ICON_PADDING_X)
    }px`};
  color: ${({ bmeTheme, disabled }) => (disabled ? bmeTheme.colors.gray5 : bmeTheme.colors.text)};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  background: ${({ bmeTheme }) => bmeTheme.colors.gray5};
  border: ${({ bmeTheme }) => bmeTheme.colors.gray5} solid 2px;
  border-radius: ${({ bmeTheme }) => bmeTheme.radius}px;
  cursor: text;
  appearance: none;
  ${animations(["width", "min-width", "max-width", "background-color", "color", "padding", "font-size"])};

  ${({ bmeTheme, variant, isFilled, disabled }) =>
    isFilled &&
    `background: transparent;
      border: ${disabled ? bmeTheme.colors.gray : bmeTheme.colors[variant]} solid 2px;
      outline: none;`}

  &:not([disabled]) {
    &:active,
    &:focus {
      background: transparent;
      border: ${({ bmeTheme, variant, disabled }) => (disabled ? bmeTheme.colors.gray : bmeTheme.colors[variant])} solid
        2px;
      outline: none;
    }
  }

  &:disabled,
  &[disabled] {
    background: ${({ bmeTheme }) => bmeTheme.colors.gray3} !important;
    border: ${({ bmeTheme }) => bmeTheme.colors.gray3} solid 2px;
    cursor: not-allowed;
  }

  @media (min-width: ${({ bmeTheme }) => bmeTheme.breakpoints.desktop}px) {
    padding: ${({ paddingX, paddingY, fontSize, isPrefixIcon }) =>
      `${paddingY.desktop}px ${paddingX.desktop + ICON_SIZE}px ${paddingY.desktop}px ${
        paddingX.desktop + (isPrefixIcon ? fontSize.desktop + ICON_PADDING_X : EMPTY_ICON_PADDING_X)
      }px`};
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

  @media (min-width: ${({ bmeTheme }) => bmeTheme.breakpoints.desktop}px) {
    right: ${({ paddingX }) => paddingX.desktop}px;
  }
`;

const StyledHint = styled.div<StyledHintProps>`
  padding: ${({ paddingX }) => `4px ${paddingX.mobile}px 0`};
  color: ${({ bmeTheme, variant }) => bmeTheme.colors[variant]};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
`;

const Input: React.FC<InputProps> = ({
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

  const { theme } = useContext(ThemeProviderContext);

  const inputType = type === "search" ? "text" : type;
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

  const PrefixIcon = ({ iconSize, iconVariant }: { iconSize: number; iconVariant: ThemeColours }) => {
    switch (type) {
      case "email":
        return <BmeIcon name="mail" size={iconSize} color={iconVariant} />;
      case "password":
        return <BmeIcon name="lock-open" size={iconSize} color={iconVariant} />;
      case "search":
        return <BmeIcon name="search" size={iconSize} color={iconVariant} />;
      default:
        return null;
    }
  };
  const isPrefixIcon = PrefixIcon({ iconSize: ICON_SIZE, iconVariant: VARIANT }) !== null;

  return (
    <StyledFormControl width={width} minWidth={minWidth} maxWidth={maxWidth}>
      <StyledFormControlInput>
        {isPrefixIcon && (
          <StyledPrefixIcon paddingX={paddingX} bmeTheme={theme}>
            <PrefixIcon iconSize={fontSize.mobile} iconVariant={variant} />
          </StyledPrefixIcon>
        )}
        <StyledLabel
          htmlFor={name}
          isFilled={isFilled}
          isPrefixIcon={isPrefixIcon}
          variant={variant}
          paddingX={paddingX}
          fontSize={fontSize}
          bmeTheme={theme}
        >
          {label}
        </StyledLabel>
        <StyledInput
          {...props}
          id={name}
          name={name}
          isFilled={isFilled}
          isPrefixIcon={isPrefixIcon}
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
          bmeTheme={theme}
        />
        {!disabled && (
          <StyledClear
            isFilled={!isEmpty(value)}
            paddingX={paddingX}
            onClick={() => onValue("")}
            bmeTheme={theme}
            type="button"
          >
            <BmeIcon name="close-circle" size={ICON_SIZE} color={variant} />
          </StyledClear>
        )}
      </StyledFormControlInput>
      {!disabled && (
        <StyledHint variant={hintVariant} paddingX={paddingX} fontSize={fontSize} bmeTheme={theme}>
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
