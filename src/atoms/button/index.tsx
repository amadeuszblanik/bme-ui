import React from "react";
import styled from "styled-components";
import { ButtonProps, StyledButtonProps } from "./types";
import { animations, isDark } from "../../mixins";
import { darkenColor } from "../../utils";

const VALUES = {
  mobile: {
    small: {
      paddingX: 16,
      paddingY: 8,
      fontSize: 14,
    },
    medium: {
      paddingX: 24,
      paddingY: 8,
      fontSize: 14,
    },
    large: {
      paddingX: 40,
      paddingY: 16,
      fontSize: 16,
    },
  },
  desktop: {
    small: {
      paddingX: 24,
      paddingY: 8,
      fontSize: 16,
    },
    medium: {
      paddingX: 40,
      paddingY: 16,
      fontSize: 16,
    },
    large: {
      paddingX: 64,
      paddingY: 16,
      fontSize: 20,
    },
  },
};

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ paddingX, paddingY }) => `${paddingY.mobile}px ${paddingX.mobile}px`};
  color: ${({ theme, variant, outline, disabled }) =>
    outline
      ? disabled
        ? theme.colors.light
        : theme.colors[variant]
      : isDark(theme.colors[variant])
      ? theme.colors.light
      : theme.colors.dark};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  background: ${({ theme, variant, outline }) => (outline ? `transparent` : theme.colors[variant])};
  border: ${({ theme, variant, disabled }) => (disabled ? theme.colors.gray : theme.colors[variant])} solid 2px;
  border-radius: ${({ theme }) => theme.radius}px;
  cursor: pointer;
  appearance: none;
  ${animations(["background-color", "color", "padding", "font-size"])};

  &:not([disabled]) {
    &:hover,
    &:active {
      color: ${({ theme, variant }) =>
        isDark(darkenColor(theme.colors[variant]).hex) ? theme.colors.light : theme.colors.dark};
      background: ${({ theme, variant }) => darkenColor(theme.colors[variant]).hex};
    }

    &:focus {
      position: relative;
      outline: none;
      // border: ${({ theme, variant }) => theme.colors[variant]} solid 2px;
      // outline: none;

      &:after {
        position: absolute;
        top: -4px;
        right: -4px;
        bottom: -4px;
        left: -4px;
        border: ${({ theme, variant }) => theme.colors[variant]} solid 2px;
        border-radius: ${({ theme }) => theme.radius}px;
        content: "";
      }
    }
  }

  &:disabled,
  &[disabled] {
    background: ${({ theme }) => theme.colors.gray} !important;
    cursor: not-allowed;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ paddingX, paddingY }) => `${paddingY.desktop}px ${paddingX.desktop}px`};
    font-size: ${({ fontSize }) => fontSize.desktop}px;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, size, variant, ...props }) => {
  size = size ?? "medium";
  variant = variant ?? "blue";

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

  return (
    <StyledButton paddingX={paddingX} paddingY={paddingY} variant={variant} fontSize={fontSize} {...props}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "blue",
  size: "medium",
};

export default Button;