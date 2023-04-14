import { forwardRef } from "react";
import styled from "styled-components";
import { CheckboxProps, StyledCheckboxProps } from "./types";
import { animations, isDark } from "../../mixins";

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

const CHECKMARK_RELATIVE_SIZE = 0.66;

const StyledCheckbox = styled.input<StyledCheckboxProps>`
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  width: ${({ sizeInPx }) => sizeInPx.mobile}px;
  height: ${({ sizeInPx }) => sizeInPx.mobile}px;
  margin: 0;
  background: ${({ theme }) => theme.colors.background};
  border: 3px solid ${({ theme, variant }) => theme.colors[variant]};
  border-radius: ${({ theme, type }) => (type === "radio" ? `1000` : theme.radius)}px;
  ${animations(["background", "border"])};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  appearance: none;

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: ${({ sizeInPx }) => sizeInPx.mobile * CHECKMARK_RELATIVE_SIZE}px;
    height: ${({ sizeInPx }) => sizeInPx.mobile * CHECKMARK_RELATIVE_SIZE}px;
    background: ${({ theme, variant }) => (isDark(theme.colors[variant]) ? theme.colors.light : theme.colors.dark)};
    border-radius: 0;
    transform: translate(-50%, -50%) scale(0);
    ${animations(["border-radius", "transform"])};
    content: "";
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    border-color: 3px solid ${({ theme }) => theme.colors.gray};
  }

  &:checked {
    background: ${({ theme, variant }) => theme.colors[variant]};

    &:after {
      border-radius: ${({ theme, type }) => (type === "radio" ? `1000` : theme.radius)}px;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ sizeInPx }) => sizeInPx.desktop}px;
    height: ${({ sizeInPx }) => sizeInPx.desktop}px;

    &:after,
    &:before {
      width: ${({ sizeInPx }) => sizeInPx.desktop * CHECKMARK_RELATIVE_SIZE}px;
      height: ${({ sizeInPx }) => sizeInPx.desktop * CHECKMARK_RELATIVE_SIZE}px;
    }
  }
`;

const Component = forwardRef<HTMLInputElement, CheckboxProps>(({ size, variant, value, onChange, ...props }, ref) => {
  size = size ?? "medium";
  variant = variant ?? "blue";

  const sizeInPx = {
    mobile: VALUES.mobile[size].size,
    desktop: VALUES.desktop[size].size,
  };
  const fontSize = {
    mobile: VALUES.mobile[size].fontSize,
    desktop: VALUES.desktop[size].fontSize,
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked || false);
    }
  };

  return (
    <StyledCheckbox
      {...props}
      sizeInPx={sizeInPx}
      fontSize={fontSize}
      variant={variant || "blue"}
      checked={value}
      onChange={handleChange}
      ref={ref}
    />
  );
});

Component.displayName = "BmeCheckbox";

Component.defaultProps = {
  size: "medium",
  type: "checkbox",
};

export default Component;
