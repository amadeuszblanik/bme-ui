import React from "react";
import styled from "styled-components";
import {
  CheckboxProps,
  StyledHintProps,
  StyledCheckboxProps,
  StyledLabelProps,
  StyledCheckboxCheckmarkProps,
} from "./types";
import { ThemeColours } from "../../settings/theme";
import { animations } from "../../mixins";
import { BmeIcon } from "../index";

const VALUES = {
  mobile: {
    small: {
      size: 24,
      fontSize: 16,
    },
    medium: {
      size: 32,
      fontSize: 16,
    },
    large: {
      size: 32,
      fontSize: 16,
    },
  },
  desktop: {
    small: {
      size: 24,
      fontSize: 16,
    },
    medium: {
      size: 32,
      fontSize: 16,
    },
    large: {
      size: 40,
      fontSize: 16,
    },
  },
};

const VARIANT: ThemeColours = "blue";
const CHECKMARK_RELATIVE_SIZE = 0.66;

const StyledFormControl = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

const StyledFormControlInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const StyledLabel = styled.label<StyledLabelProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const StyledNativeCheckbox = styled.input`
  display: none;
`;

const StyledCheckbox = styled.button<StyledCheckboxProps>`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size.mobile}px;
  height: ${({ size }) => size.mobile}px;
  margin-right: 8px;
  background: ${({ theme, variant, disabled, checked }) =>
    disabled ? theme.colors.gray : checked ? theme.colors[variant] : theme.colors.background};
  border: 3px solid ${({ theme, variant, disabled }) => (disabled ? theme.colors.gray : theme.colors[variant])};
  border-radius: ${({ theme }) => theme.radius}px;
  ${animations(["background", "border"])};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ size }) => size.desktop}px;
    height: ${({ size }) => size.desktop}px;
  }
`;

const StyledCheckboxCheckmark = styled.div<StyledCheckboxCheckmarkProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ checked }) => (checked ? "1" : "0")};
  ${animations(["opacity"])};
`;

const StyledHint = styled.div<StyledHintProps>`
  padding: 4px 0 0;
  color: ${({ theme, variant }) => theme.colors[variant]};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
`;

const Input: React.FC<CheckboxProps> = ({
  name,
  value,
  label,
  onValue,
  hint,
  error,
  valid,
  size,
  disabled,
  variant,
  ...props
}) => {
  size = size ?? "medium";

  const variantDynamic = disabled ? "gray" : error ? "red" : valid ? "green" : variant ?? VARIANT;
  const hintVariant: ThemeColours = error ? "red" : valid ? "green" : "gray";
  const hintMessage = error || valid || hint;

  const sizeInPx = {
    mobile: VALUES.mobile[size].size,
    desktop: VALUES.desktop[size].size,
  };
  const fontSize = {
    mobile: VALUES.mobile[size].fontSize,
    desktop: VALUES.desktop[size].fontSize,
  };

  return (
    <StyledFormControl>
      <StyledNativeCheckbox
        {...props}
        id={name}
        name={name}
        disabled={disabled}
        checked={value}
        onChange={({ target: { checked } }) => onValue(!checked)}
        type="checkbox"
      />
      <StyledFormControlInput>
        <StyledCheckbox
          disabled={disabled ?? false}
          checked={value}
          size={sizeInPx}
          variant={variantDynamic}
          fontSize={fontSize}
          type="button"
        >
          <StyledCheckboxCheckmark checked={value} onClick={() => onValue(!value)}>
            <BmeIcon name="checkmark" size={sizeInPx.mobile * CHECKMARK_RELATIVE_SIZE} color="light" />
          </StyledCheckboxCheckmark>
        </StyledCheckbox>
        <StyledLabel
          disabled={disabled}
          size={sizeInPx}
          variant={variantDynamic}
          fontSize={fontSize}
          htmlFor={name}
          onClick={() => onValue(!value)}
        >
          {label}
        </StyledLabel>
      </StyledFormControlInput>
      {!disabled && (
        <StyledHint variant={hintVariant} size={sizeInPx} fontSize={fontSize}>
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
