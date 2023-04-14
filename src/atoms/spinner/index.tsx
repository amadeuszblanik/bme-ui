/* eslint-disable no-magic-numbers */
import React from "react";
import styled from "styled-components";
import {
  SpinnerProps,
  SpinnerSizes,
  StyledSpinnerWrapperProps,
  StyledSpinnerSvgCircleProps,
  StyledSpinnerSvgProps,
} from "./types";

const SIZE: Record<SpinnerSizes, number> = {
  small: 16,
  medium: 32,
  large: 42,
};

const getSize = (size: SpinnerSizes | undefined) => (size ? SIZE[size] : SIZE.medium);

const SpinnerWrapper = styled.div<StyledSpinnerWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const SpinnerSvg = styled.svg<StyledSpinnerSvgProps>`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: rotate 1.5s linear infinite;
`;

const SpinnerSvgCircle = styled.circle<StyledSpinnerSvgCircleProps>`
  @keyframes dash {
    0% {
      stroke-dashoffset: ${({ dashValue }) => dashValue};
    }
    50% {
      stroke-dashoffset: 0;
      stroke-dasharray: ${({ dashValue }) => dashValue};
    }
    100% {
      stroke-dashoffset: ${({ dashValue }) => -1 * dashValue};
    }
  }

  stroke-dasharray: ${({ dashValue }) => dashValue};
  stroke-dashoffset: ${({ dashValue }) => dashValue};
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
  stroke: ${({ theme, variant }) => theme.colors[variant]};
`;

const Spinner: React.FC<SpinnerProps> = ({ size, variant, strokeWidth }) => {
  const sizeValue = getSize(size);

  const cx = sizeValue * 0.5;
  const cy = sizeValue * 0.5;
  const r = sizeValue * 0.4;

  const circumference = 2 * Math.PI * r;
  const dashValue = circumference * 0.75;

  return (
    <SpinnerWrapper size={sizeValue}>
      <SpinnerSvg viewBox={`0 0 ${sizeValue} ${sizeValue}`} size={sizeValue}>
        <SpinnerSvgCircle
          cx={cx}
          cy={cy}
          r={r}
          strokeWidth={strokeWidth || sizeValue / 10}
          variant={variant || "text"}
          dashValue={dashValue}
        />
      </SpinnerSvg>
    </SpinnerWrapper>
  );
};

export default Spinner;
