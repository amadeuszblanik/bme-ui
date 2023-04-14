/* eslint-disable no-magic-numbers */
import React from "react";
import { SpinnerProps, SpinnerSizes } from "./types";
import { SpinnerSvg, SpinnerSvgCircle, SpinnerWrapper } from "./styled";

const SIZE: Record<SpinnerSizes, number> = {
  small: 16,
  medium: 32,
  large: 42,
};

const getSize = (size: SpinnerSizes | undefined) => (size ? SIZE[size] : SIZE.medium);

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
          variant={variant}
          fill="none"
          dashValue={dashValue}
        />
      </SpinnerSvg>
    </SpinnerWrapper>
  );
};

export default Spinner;
