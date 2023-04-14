/* eslint-disable no-magic-numbers */
import styled from "styled-components";
import { StyledSpinnerSvgCircleProps, StyledSpinnerSvgProps, StyledSpinnerWrapperProps } from "./types";

export const SpinnerWrapper = styled.div<StyledSpinnerWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

export const SpinnerSvg = styled.svg<StyledSpinnerSvgProps>`
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

export const SpinnerSvgCircle = styled.circle<StyledSpinnerSvgCircleProps>`
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
  stroke: ${({ theme, variant }) => (variant ? theme.colors[variant] : "var(--bme-color)")};
`;
