import React, { useContext } from "react";
import styled from "styled-components";
import { ButtonProps, StyledButtonProps } from "./types";
import { animations, isDark } from "../../mixins";
import { darkenColor } from "../../utils";
import ThemeProviderContext from "../../components/theme-provider/context";

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
  ${({ width }) => (width ? `width: ${width};` : "")}
  padding: ${({ paddingX, paddingY }) => `${paddingY.mobile}px ${paddingX.mobile}px`};
  color: ${({ bmeTheme, variant, outline, disabled }) =>
    outline
      ? disabled
        ? bmeTheme.colors.light
        : bmeTheme.colors[variant]
      : isDark(bmeTheme.colors[variant])
      ? bmeTheme.colors.light
      : bmeTheme.colors.dark};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  background: ${({ bmeTheme, variant, outline }) => (outline ? `transparent` : bmeTheme.colors[variant])};
  border: ${({ bmeTheme, variant, disabled }) => (disabled ? bmeTheme.colors.gray : bmeTheme.colors[variant])} solid 2px;
  border-radius: var(--bme-button-radius, ${({ bmeTheme }) => bmeTheme.radius}px);
  cursor: pointer;
  appearance: none;
  ${animations(["background-color", "color", "padding", "font-size"])};

  &:not([disabled]) {
    &:hover,
    &:active {
      color: ${({ bmeTheme, variant }) =>
        isDark(darkenColor(bmeTheme.colors[variant]).hex) ? bmeTheme.colors.light : bmeTheme.colors.dark};
      background: ${({ bmeTheme, variant }) => darkenColor(bmeTheme.colors[variant]).hex};
    }

    &:focus {
      position: relative;
      outline: none;

      &:after {
        position: absolute;
        top: -4px;
        right: -4px;
        bottom: -4px;
        left: -4px;
        border: ${({ bmeTheme, variant }) => bmeTheme.colors[variant]} solid 2px;
        border-radius: var(--bme-button-radius, ${({ bmeTheme }) => bmeTheme.radius}px);
        content: "";
      }
    }
  }

  &:disabled,
  &[disabled] {
    background: ${({ bmeTheme }) => bmeTheme.colors.gray} !important;
    cursor: not-allowed;
  }

  @media (min-width: ${({ bmeTheme }) => bmeTheme.breakpoints.desktop}px) {
    padding: ${({ paddingX, paddingY }) => `${paddingY.desktop}px ${paddingX.desktop}px`};
    font-size: ${({ fontSize }) => fontSize.desktop}px;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, size, width, variant, type, ...props }) => {
  size = size ?? "medium";
  variant = variant ?? "blue";

  const { theme } = useContext(ThemeProviderContext);

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
    <StyledButton
      {...props}
      width={width}
      paddingX={paddingX}
      paddingY={paddingY}
      variant={variant}
      fontSize={fontSize}
      bmeTheme={theme}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "blue",
  size: "medium",
  type: "button",
};

export default Button;
