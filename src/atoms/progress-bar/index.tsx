import React, { useContext } from "react";
import styled from "styled-components";
import {
  ProgressBarProps,
  StyledProgressBarLabelProps,
  StyledProgressBarValueProps,
  StyledProgressBarWrapperProps,
} from "./types";
import { ThemeColours } from "../../settings/theme";
import { formatPercentage } from "../../utils";
import { StyledComponent } from "../../types/styled-component";
import ThemeProviderContext from "../../components/theme-provider/context";
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

const StyledProgressBarTimeLeft = styled.div<StyledComponent>`
  color: ${({ bmeTheme }) => bmeTheme.colors.gray};
  font-size: 13px;
  line-height: 20px;
  text-align: right;
`;

const StyledProgressBar = styled.div<StyledComponent>`
  position: relative;
  display: flex;
  width: 100%;
  height: 8px;
  overflow: hidden;
  background: ${({ bmeTheme }) => bmeTheme.colors.gray5};
  border-radius: ${({ bmeTheme }) => bmeTheme.radius}px;
`;

const StyledProgressBarValue = styled.i<StyledProgressBarValueProps>`
  @keyframes progress-bar-animation {
    0%,
    100% {
      left: 0;
    }

    50% {
      left: 100%;
      left: calc(100% - 32px);
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: ${({ value }) => (value !== undefined ? `${value}%` : "32px")};
  height: 8px;
  background: ${({ bmeTheme, variant }) => bmeTheme.colors[variant]};
  border-radius: ${({ bmeTheme }) => bmeTheme.radius}px;
  ${({ value }) => value === undefined && `animation: progress-bar-animation 2s infinite`};
  ${animations(["width", "background"])};
`;

const StyledProgressBarLabel = styled.p<StyledProgressBarLabelProps>`
  margin: 8px 0 0;
  padding: 0;
  color: ${({ bmeTheme, variant }) => bmeTheme.colors[variant]};
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
  value = done ? DONE_VALUE : value ?? error ? DONE_VALUE : value;
  variant = variant ?? VARIANT;

  const { theme } = useContext(ThemeProviderContext);

  const labelVariant = error ? "red" : done ? "green" : "text";
  const dynamicVariant = error ? "red" : done ? "green" : variant;
  const labelToRender = label ? label.replace("$0", value ? formatPercentage(value) : "…") : undefined;

  return (
    <StyledProgressBarWrapper width={width} minWidth={minWidth} maxWidth={maxWidth}>
      {timeLeft && <StyledProgressBarTimeLeft bmeTheme={theme}>{timeLeft}</StyledProgressBarTimeLeft>}
      <StyledProgressBar bmeTheme={theme}>
        <StyledProgressBarValue
          value={value !== undefined ? value * PROGRESS_VALUE_MULTIPLIER : undefined}
          variant={dynamicVariant}
          bmeTheme={theme}
        ></StyledProgressBarValue>
      </StyledProgressBar>
      {labelToRender && (
        <StyledProgressBarLabel variant={labelVariant} bmeTheme={theme}>
          {error || done || labelToRender}
        </StyledProgressBarLabel>
      )}
    </StyledProgressBarWrapper>
  );
};

ProgressBar.defaultProps = {};

export default ProgressBar;
