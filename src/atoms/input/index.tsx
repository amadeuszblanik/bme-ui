import { forwardRef } from "react";
import styled from "styled-components";
import { InputProps, StyledInputProps, StyledInputWrapperProps } from "./types";
import { animations } from "../../mixins";
import { BmeInputMode } from "../../types";
import { ThemeColours } from "../../settings/theme";
import { BmeIcon } from "../index";
import { StyledPrefixIconProps } from "../input-depracated/types";

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

const PrefixIcon = ({
  type,
  iconSize,
  iconVariant,
}: {
  type: InputProps["type"];
  iconSize: number;
  iconVariant: ThemeColours;
}) => {
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

const ICON_SIZE = 24;
const EMPTY_ICON_PADDING_X = 0;
const ICON_PADDING_X = 8;

const inputTypeDefaultModes: { [key in "text" | "password" | "email" | "search"]: BmeInputMode } = {
  text: "text",
  password: "text",
  email: "email",
  search: "search",
};

const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  width: ${({ width }) => width || "100%"};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
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
  color: ${({ theme, disabled }) => (disabled ? theme.colors.gray5 : theme.colors.text)};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  background: ${({ theme }) => theme.colors.gray5};
  border: ${({ theme }) => theme.colors.gray5} solid 2px;
  border-radius: ${({ theme }) => theme.radius}px;
  cursor: text;
  appearance: none;
  ${animations(["width", "min-width", "max-width", "background-color", "color", "padding", "font-size"])};

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
    padding: ${({ paddingX, paddingY, fontSize, isPrefixIcon }) =>
      `${paddingY.desktop}px ${paddingX.desktop + ICON_SIZE}px ${paddingY.desktop}px ${
        paddingX.desktop + (isPrefixIcon ? fontSize.desktop + ICON_PADDING_X : EMPTY_ICON_PADDING_X)
      }px`};
    font-size: ${({ fontSize }) => fontSize.desktop}px;
  }
`;

const StyledPrefixIcon = styled.div<StyledPrefixIconProps>`
  position: absolute;
  top: 50%;
  left: ${({ paddingX }) => paddingX.mobile}px;
  padding: 0;
  transform: translateY(-50%);
  cursor: pointer;
  ${animations(["left"])};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    left: ${({ paddingX }) => paddingX.desktop}px;
  }
`;

const Component = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type, inputMode, size, onChange, width, minWidth, maxWidth, variant, ...props }, ref) => {
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

    const isPrefixIcon = PrefixIcon({ type, iconSize: ICON_SIZE, iconVariant: variant }) !== null;

    const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(value);
    };

    return (
      <StyledInputWrapper width={width} minWidth={minWidth} maxWidth={maxWidth}>
        {isPrefixIcon && (
          <StyledPrefixIcon paddingX={paddingX}>
            <PrefixIcon type={type} iconSize={fontSize.mobile} iconVariant="text" />
          </StyledPrefixIcon>
        )}
        <StyledInput
          ref={ref}
          name={name}
          id={name}
          {...props}
          onChange={handleChange}
          paddingX={paddingX}
          paddingY={paddingY}
          fontSize={fontSize}
          isPrefixIcon={isPrefixIcon}
          width={width}
          minWidth={minWidth}
          maxWidth={maxWidth}
          variant={variant}
          type={type}
          inputMode={inputMode || inputTypeDefaultModes[type || "text"]}
        />
      </StyledInputWrapper>
    );
  },
);

Component.displayName = "BmeInput";

export default Component;
