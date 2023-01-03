import React, { useContext } from "react";
import styled from "styled-components";
import { TagProps, StyledTagProps, StyledIconProps } from "./types";
import { ThemeColours } from "../../settings/theme";
import { BmeIcon } from "../index";
import { animations, isDark } from "../../mixins";
import ThemeProviderContext from "../../components/theme-provider/context";

const VALUES = {
  mobile: {
    small: {
      paddingX: 16,
      paddingY: 8,
      fontSize: 12,
    },
    medium: {
      paddingX: 16,
      paddingY: 8,
      fontSize: 13,
    },
    large: {
      paddingX: 16,
      paddingY: 8,
      fontSize: 14,
    },
  },
  desktop: {
    small: {
      paddingX: 16,
      paddingY: 8,
      fontSize: 12,
    },
    medium: {
      paddingX: 16,
      paddingY: 8,
      fontSize: 16,
    },
    large: {
      paddingX: 16,
      paddingY: 8,
      fontSize: 20,
    },
  },
};

const VARIANT: ThemeColours = "blue";

const StyledTag = styled.div<StyledTagProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: ${({ paddingY, paddingX }) => `${paddingY.mobile}px ${paddingX.mobile}px`};
  color: ${({ bmeTheme, variant }) =>
    isDark(bmeTheme.colors[variant]) ? bmeTheme.colors.light : bmeTheme.colors.dark};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  text-align: center;
  background: ${({ bmeTheme, variant }) => bmeTheme.colors[variant]};
  border-radius: ${({ paddingX }) => paddingX.desktop}px;
  ${animations(["padding", "color", "font-size", "background"])};

  @media (min-width: ${({ bmeTheme }) => bmeTheme.breakpoints.desktop}px) {
    padding: ${({ paddingY, paddingX }) => `${paddingY.desktop}px ${paddingX.desktop}px`};
    font-size: ${({ fontSize }) => fontSize.desktop}px;
  }
`;

const StyledIcon = styled.div<StyledIconProps>`
  display: inline-flex;
  padding: 0 8px 0 0;
  color: inherit;
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  ${animations(["font-size"])};

  @media (min-width: ${({ bmeTheme }) => bmeTheme.breakpoints.desktop}px) {
    font-size: ${({ fontSize }) => fontSize.desktop}px;
  }
`;

const StyledRemoveButton = styled.button`
  padding: 0 0 0 8px;
  color: inherit;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  appearance: none;
`;

const Tag: React.FC<TagProps> = ({ label, size, variant, icon, onRemove }) => {
  size = size ?? "medium";
  variant = variant ?? VARIANT;

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
    <StyledTag variant={variant} paddingX={paddingX} paddingY={paddingY} fontSize={fontSize} bmeTheme={theme}>
      {icon && (
        <StyledIcon fontSize={fontSize} bmeTheme={theme}>
          <BmeIcon name={icon} />
        </StyledIcon>
      )}
      {label}
      {onRemove && (
        <StyledRemoveButton onClick={onRemove}>
          <BmeIcon name="close-circle" />
        </StyledRemoveButton>
      )}
    </StyledTag>
  );
};

Tag.defaultProps = {
  size: "medium",
};

export default Tag;
