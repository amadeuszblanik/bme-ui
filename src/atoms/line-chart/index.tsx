import styled from "styled-components";
import { clamp } from "bme-utils";
import { useContext } from "react";
import { useScreenSize } from "../../hooks";
import { getIndexes, toPercentage } from "../../utils";
import { pipeDate, pipeNumber } from "../../pipes";
import ProgressBar from "../progress-bar";
import { StyledComponent } from "../../types/styled-component";
import ThemeProviderContext from "../../components/theme-provider/context";

const CHART_RATIO = 0.5625;

interface LineChartItem {
  x: number | Date;
  y: number;
}

interface Props {
  data: LineChartItem[];
  width?: number;
  loading?: boolean;
}

interface ChartPlaceholderProps {
  ratio: number;
}

const StyledChartPlaceholder = styled.div<ChartPlaceholderProps>`
  position: relative;
  width: 100%;
  padding-bottom: ${({ ratio }) => toPercentage(ratio)}%;
`;

const StyledChartWrapper = styled.svg<StyledComponent>`
  width: 100%;
  height: 100%;
  background: ${({ bmeTheme }) => bmeTheme.colors.background};
  border: ${({ bmeTheme }) => bmeTheme.colors.gray5} 1px solid;
`;

const StyledChartPoint = styled.circle<StyledComponent>`
  fill: ${({ bmeTheme }) => bmeTheme.colors.background};
  stroke: ${({ bmeTheme }) => bmeTheme.colors.blue};
  stroke-width: 2;
`;

const StyledChartLine = styled.line<StyledComponent>`
  stroke: ${({ bmeTheme }) => bmeTheme.colors.blue};
  stroke-width: 2;
`;

const StyledChartLabel = styled.text<StyledComponent>`
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  fill: ${({ bmeTheme }) => bmeTheme.colors.gray2};
`;

const StyledChartLabelLine = styled.line<StyledComponent>`
  stroke: ${({ bmeTheme }) => bmeTheme.colors.gray5};
  stroke-width: 2;
  stroke-dasharray: 5, 5;
`;

const BOTH_PADDING_MULTIPLIER = 2;
const X_Y_2_INDEX_DIFFERENCE = 1;

const LABELS_Y_TO_SHOW_MOBILE = 4;
const LABELS_X_TO_SHOW_MOBILE = 3;

const LABELS_Y_TO_SHOW_DESKTOP = 4;
const LABELS_X_TO_SHOW_DESKTOP = 5;

const DESKTOP_BREAKPOINT = 900;

const MINIMUM_DATA_REQUIRED = 3;

const Component = ({ data, width: componentWidth, loading }: Props) => {
  const { theme } = useContext(ThemeProviderContext);

  const { width: screenWidth } = useScreenSize();

  const dataIndexes = getIndexes(data);
  const width = componentWidth ?? screenWidth;
  const height = width * CHART_RATIO;

  if (loading) {
    return (
      <StyledChartPlaceholder ratio={CHART_RATIO}>
        <ProgressBar />
      </StyledChartPlaceholder>
    );
  }

  if (data.length < MINIMUM_DATA_REQUIRED) {
    return <></>;
  }

  const labelYWidth = 50;
  const labelXHeight = 8;

  const isDesktop = screenWidth >= DESKTOP_BREAKPOINT;
  const labelsYToShow = isDesktop ? LABELS_Y_TO_SHOW_DESKTOP : LABELS_Y_TO_SHOW_MOBILE;
  const labelsXToShow = isDesktop ? LABELS_X_TO_SHOW_DESKTOP : LABELS_X_TO_SHOW_MOBILE;

  const dataChart = data.map((item) => ({
    ...item,
    x: Number(item.x),
  }));

  const minXValue = Math.min(...dataChart.map((item) => item.x));
  const maxXValue = Math.max(...dataChart.map((item) => item.x));
  const rangeX = maxXValue - minXValue;

  const minYValue = Math.min(...dataChart.map((item) => item.y));
  const maxYValue = Math.max(...dataChart.map((item) => item.y));
  const rangeY = maxYValue - minYValue;

  const paddingX = 32;
  const paddingY = 32;
  const paddingLabelX = 16;
  const paddingLabelY = 16;
  const availableWidth = width - paddingX * BOTH_PADDING_MULTIPLIER - labelYWidth;
  const availableHeight = height - paddingY * BOTH_PADDING_MULTIPLIER - labelXHeight;

  const labelsY = Array(labelsYToShow)
    .fill(null)
    .map((_, index) => {
      const value = minYValue + (rangeY / labelsYToShow) * index;

      return {
        value: clamp(value, minYValue, maxYValue),
        label: pipeNumber(value),
      };
    });
  labelsY.push({
    value: maxYValue,
    label: pipeNumber(maxYValue),
  });
  const labelsX = Array(labelsXToShow)
    .fill(null)
    .map((_, index) => {
      const value = clamp(minXValue + (rangeX / labelsXToShow) * index, minXValue, maxXValue);
      const label = pipeDate(new Date(value), { month: "short", day: "numeric", year: "2-digit" });

      return { value, label };
    })
    .reverse();
  const labelsXIndexes = getIndexes(labelsX);

  const calculatePointX = (index: number) => (index / dataIndexes) * availableWidth + paddingX;

  const calculatePointY = (index: number) => {
    const value = dataChart[index].y;

    return availableHeight - ((value - minYValue) / rangeY) * availableHeight + paddingY;
  };

  const calculateLineX1 = (index: number) => calculatePointX(index);

  const calculateLineX2 = (index: number) => calculatePointX(index + X_Y_2_INDEX_DIFFERENCE);

  const calculateLineY1 = (index: number) => calculatePointY(index);

  const calculateLineY2 = (index: number) => calculatePointY(index + X_Y_2_INDEX_DIFFERENCE);

  const calculateLabelYX = () => width - paddingY - labelYWidth + paddingLabelX;

  const calculateLabelYY = (index: number) => {
    const value = labelsY[index].value;

    return availableHeight - ((value - minYValue) / rangeY) * availableHeight + paddingY;
  };

  const calculateLabelLineYY = () => availableWidth + paddingX;

  const calculateLabelXX = (index: number) => (index / labelsXIndexes) * availableWidth + paddingX;

  const calculateLabelXY = () => height - paddingLabelY;

  const calculateLabelLineXY = () => availableHeight + paddingY;

  return (
    <StyledChartWrapper viewBox={`0 0 ${width} ${height}`} bmeTheme={theme}>
      <g>
        {labelsY.map((label, index) => (
          <g key={index}>
            <StyledChartLabel x={calculateLabelYX()} y={calculateLabelYY(index)} bmeTheme={theme}>
              {label.label}
            </StyledChartLabel>
            <StyledChartLabelLine
              x1={0}
              x2={calculateLabelLineYY()}
              y1={calculateLabelYY(index)}
              y2={calculateLabelYY(index)}
              bmeTheme={theme}
            />
          </g>
        ))}
        {labelsX.map((label, index) => (
          <g key={index}>
            <StyledChartLabel x={calculateLabelXX(index)} y={calculateLabelXY()} bmeTheme={theme}>
              {label.label}
            </StyledChartLabel>
            <StyledChartLabelLine
              x1={calculateLabelXX(index)}
              x2={calculateLabelXX(index)}
              y1={0}
              y2={calculateLabelLineXY()}
              bmeTheme={theme}
            />
          </g>
        ))}
        {dataChart.map((item, index) => (
          <g key={index}>
            {index < dataIndexes && (
              <StyledChartLine
                x1={calculateLineX1(index)}
                x2={calculateLineX2(index)}
                y1={calculateLineY1(index)}
                y2={calculateLineY2(index)}
                bmeTheme={theme}
              />
            )}
            <StyledChartPoint cx={calculatePointX(index)} cy={calculatePointY(index)} r={4} bmeTheme={theme} />
          </g>
        ))}
      </g>
    </StyledChartWrapper>
  );
};

export default Component;
