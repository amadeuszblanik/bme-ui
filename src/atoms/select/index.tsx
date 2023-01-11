import React, { useContext } from "react";
import styled from "styled-components";
import { isEmpty } from "bme-utils";
import { SelectProps, StyledSelectProps, StyledHintProps, StyledLabelProps, StyledFormControlProps } from "./types";
import { ThemeColours } from "../../settings/theme";
import { animations } from "../../mixins";
import { StyledClearProps } from "../input/types";
import { BmeIcon } from "../index";
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
  align-items: center;
  justify-content: flex-start;
`;

const StyledLabel = styled.label<StyledLabelProps>`
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

const StyledSelect = styled.select<StyledSelectProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 240px;
  padding: ${({ paddingX, paddingY }) => `${paddingY.mobile}px ${paddingX.mobile}px;`};
  color: ${({ bmeTheme, disabled }) => (disabled ? bmeTheme.colors.gray5 : bmeTheme.colors.text)};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
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

const Input: React.FC<SelectProps> = ({
  name,
  value,
  label,
  emptyLabel,
  onValue,
  list,
  hint,
  error,
  valid,
  size,
  width,
  minWidth,
  maxWidth,
  disabled,
  variant,
}) => {
  size = size ?? "medium";

  const { theme } = useContext(ThemeProviderContext);

  const variantDynamic = disabled ? "gray" : error ? "red" : valid ? "green" : variant ?? VARIANT;
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
  const selectedValueKey = value?.key;
  const isFilled = (isFocused || !!selectedValueKey || !isEmpty(error) || !isEmpty(valid)) && !disabled;

  return (
    <StyledFormControl width={width} minWidth={minWidth} maxWidth={maxWidth}>
      <StyledFormControlInput>
        <StyledLabel
          htmlFor={name}
          isFilled={isFilled}
          variant={variantDynamic}
          paddingX={paddingX}
          fontSize={fontSize}
          bmeTheme={theme}
        >
          {label}
        </StyledLabel>
        <StyledSelect
          id={name}
          name={name}
          fontSize={fontSize}
          isFilled={isFilled}
          paddingX={paddingX}
          paddingY={paddingY}
          variant={variantDynamic}
          onChange={(e) => onValue(list.find((item) => item.key === e.target.value) || null)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          bmeTheme={theme}
        >
          <option disabled selected={!selectedValueKey}>
            {emptyLabel || ""}
          </option>
          {list.map(({ key, label: itemLabel }) => (
            <option key={key} value={key} selected={selectedValueKey === key}>
              {itemLabel}
            </option>
          ))}
        </StyledSelect>
        {!disabled && (
          <StyledClear
            isFilled={!!selectedValueKey}
            paddingX={paddingX}
            onClick={() => onValue(null)}
            bmeTheme={theme}
            type="button"
          >
            <BmeIcon name="close-circle" size={ICON_SIZE} color={variantDynamic} />
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
