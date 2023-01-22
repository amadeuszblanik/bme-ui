import React from "react";
import styled from "styled-components";
import {
  ProgressBarProps,
  StyledProgressBarLabelProps,
  StyledProgressBarValueProps,
  StyledProgressBarWrapperProps,
} from "./types";
import { ThemeColours } from "../../settings/theme";
import { formatPercentage } from "../../utils";
import { animations } from "../../mixins";

const VARIANT: ThemeColours = "blue";
const PROGRESS_VALUE_MULTIPLIER = 100;
const DONE_VALUE = 1;

const StyledProgressBarWrapper = styled.div<StyledProgressBarWrapperProps>`
  width: ${({ width }) => width || "100%"};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${animations(["width", "min-width", "max-width"])}
`;

const StyledProgressBarTimeLeft = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 13px;
  line-height: 20px;
  text-align: right;
`;

const StyledProgressBar = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gray5};
  border-radius: ${({ theme }) => theme.radius}px;
`;

const StyledProgressBarValue = styled.i<StyledProgressBarValueProps>`
  @keyframes progress-bar-animation {
    0%,
    100% {
      left: 0;
    }

    50% {
      left: calc(100% - 32px);
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: ${({ value }) => (value !== undefined ? `${value}%` : "32px")};
  height: 8px;
  background: ${({ theme, variant }) => theme.colors[variant]};
  border-radius: ${({ theme }) => theme.radius}px;
  ${({ value }) => value === undefined && `animation: progress-bar-animation 2s infinite`};
  ${animations(["width", "background"])};
`;

const StyledProgressBarLabel = styled.p<StyledProgressBarLabelProps>`
  margin: 8px 0 0;
  padding: 0;
  color: ${({ theme, variant }) => theme.colors[variant]};
  font-size: 16px;
  text-align: center;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  variant,
  width,
  minWidth,
  maxWidth,
  timeLeft,
  error,
  done,
}) => {
  value = done || error ? DONE_VALUE : value;
  variant = variant ?? VARIANT;

  const labelVariant = error ? "red" : done ? "green" : "text";
  const dynamicVariant = error ? "red" : done ? "green" : variant;
  const labelToRender = label ? label.replace("$0", value ? formatPercentage(value) : "…") : undefined;

  return (
    <StyledProgressBarWrapper width={width} minWidth={minWidth} maxWidth={maxWidth}>
      {timeLeft && <StyledProgressBarTimeLeft>{timeLeft}</StyledProgressBarTimeLeft>}
      <StyledProgressBar>
        <StyledProgressBarValue
          value={value !== undefined ? value * PROGRESS_VALUE_MULTIPLIER : undefined}
          variant={dynamicVariant}
        ></StyledProgressBarValue>
      </StyledProgressBar>
      {labelToRender && (
        <StyledProgressBarLabel variant={labelVariant}>{error || done || labelToRender}</StyledProgressBarLabel>
      )}
    </StyledProgressBarWrapper>
  );
};

ProgressBar.defaultProps = {};

export default ProgressBar;
