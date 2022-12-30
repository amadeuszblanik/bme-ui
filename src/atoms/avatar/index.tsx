import React, { useEffect } from "react";
import styled from "styled-components";
import { AvatarProps, StyledAvatarWrapperProps, StyledAvatarProps, StyledStatusProps } from "./types";
import { ThemeColours } from "../../settings/theme";
import { BmeIcon } from "../index";
import animationsMixin from "../../mixins/animations.mixin";

const VALUES = {
  mobile: {
    small: {
      size: 48,
      borderInner: 2,
      borderOuter: 4,
      statusBorderOuter: 2,
    },
    medium: {
      size: 48,
      borderInner: 2,
      borderOuter: 4,
      statusBorderOuter: 2,
    },
    large: {
      size: 64,
      borderInner: 2,
      borderOuter: 4,
      statusBorderOuter: 4,
    },
  },
  desktop: {
    small: {
      size: 48,
      borderInner: 2,
      borderOuter: 4,
      statusBorderOuter: 2,
    },
    medium: {
      size: 80,
      borderInner: 2,
      borderOuter: 4,
      statusBorderOuter: 3,
    },
    large: {
      size: 120,
      borderInner: 2,
      borderOuter: 4,
      statusBorderOuter: 4,
    },
  },
};

const VARIANT: ThemeColours = "blue";
const NO_BORDER_VALUE = 0;
const STATUS_SIZE_RATIO = 3.75;
const ERROR_ICON_RATIO = 0.66;

const StyledAvatarWrapper = styled.div<StyledAvatarWrapperProps>`
  position: relative;
  display: inline-flex;
  width: ${({ size, borderInner, borderOuter }) => size.mobile + borderInner.mobile + borderOuter.mobile}px;
  height: ${({ size, borderInner, borderOuter }) => size.mobile + borderInner.mobile + borderOuter.mobile}px;
  background: ${({ theme, variant }) => theme.colors[variant]};
  border-radius: ${({ theme, rounded, size }) => (rounded ? size.desktop : theme.radius)}px;
  ${animationsMixin(["width", "height", "border-radius", "background"])}

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ size, borderInner, borderOuter }) => size.desktop + borderInner.desktop + borderOuter.desktop}px;
    height: ${({ size, borderInner, borderOuter }) => size.desktop + borderInner.desktop + borderOuter.desktop}px;
  }
`;

const StyledAvatar = styled.div<StyledAvatarProps>`
  position: relative;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size, borderInner }) => size.mobile + borderInner.mobile}px;
  height: ${({ size, borderInner }) => size.mobile + borderInner.mobile}px;
  overflow: hidden;
  background: ${({ theme, variant }) => theme.colors[variant]};
  border: ${({ borderInner }) => borderInner.mobile}px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme, rounded, size }) => (rounded ? size.desktop : theme.radius)}px;
  transform: translate(-50%, -50%);
  ${animationsMixin(["width", "height", "border", "border-radius", "background"])}

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ size, borderInner }) => size.desktop + borderInner.desktop}px;
    height: ${({ size, borderInner }) => size.desktop + borderInner.desktop}px;
    border-width: ${({ borderInner }) => borderInner.desktop}px;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
`;

const StyledStatus = styled.i<StyledStatusProps>`
  position: absolute;
  right: 0;
  bottom: 0;
  width: ${({ size, borderOuter }) => (size.mobile + borderOuter.mobile) / STATUS_SIZE_RATIO}px;
  height: ${({ size, borderOuter }) => (size.mobile + borderOuter.mobile) / STATUS_SIZE_RATIO}px;
  background: ${({ theme, variant }) => theme.colors[variant]};
  border: ${({ borderOuter }) => borderOuter.mobile}px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ size }) => size.desktop}px;
  transform: ${({ rounded }) => (rounded ? "translate(0, 0)" : "translate(50%, 50%)")};
  ${animationsMixin(["transform", "background"])}

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ size, borderOuter }) => (size.desktop + borderOuter.desktop) / STATUS_SIZE_RATIO}px;
    height: ${({ size, borderOuter }) => (size.desktop + borderOuter.desktop) / STATUS_SIZE_RATIO}px;
    border-width: ${({ borderOuter }) => borderOuter.desktop}px;
  }
`;

const Avatar: React.FC<AvatarProps> = ({ src, size, variant, rounded, border, status }) => {
  size = size ?? "medium";
  variant = variant ?? VARIANT;

  const [isError, setIsError] = React.useState(false);

  const displayError = isError || !src;

  const sizeValue = {
    mobile: VALUES.mobile[size].size,
    desktop: VALUES.desktop[size].size,
  };

  const borderInner = {
    mobile: border ? VALUES.mobile[size].borderInner : NO_BORDER_VALUE,
    desktop: border ? VALUES.desktop[size].borderInner : NO_BORDER_VALUE,
  };

  const borderOuter = {
    mobile: border ? VALUES.mobile[size].borderOuter : NO_BORDER_VALUE,
    desktop: border ? VALUES.desktop[size].borderOuter : NO_BORDER_VALUE,
  };

  const statusBorderOuter = {
    mobile: VALUES.mobile[size].statusBorderOuter,
    desktop: VALUES.desktop[size].statusBorderOuter,
  };

  const handleImageError = () => {
    setIsError(true);
  };

  useEffect(() => {
    setIsError(false);
  }, [src]);

  return (
    <StyledAvatarWrapper
      size={sizeValue}
      variant={variant}
      rounded={rounded}
      borderInner={borderInner}
      borderOuter={borderOuter}
    >
      <StyledAvatar size={sizeValue} variant={variant} rounded={rounded} borderInner={borderInner}>
        {displayError ? (
          <BmeIcon name="person" size={sizeValue.mobile * ERROR_ICON_RATIO} />
        ) : (
          <StyledImage src={src} onError={handleImageError} />
        )}
      </StyledAvatar>
      {status && <StyledStatus size={sizeValue} borderOuter={statusBorderOuter} variant={status} rounded={rounded} />}
    </StyledAvatarWrapper>
  );
};

Avatar.defaultProps = {
  size: "medium",
};

export default Avatar;
