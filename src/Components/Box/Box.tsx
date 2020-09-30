import React from "react";
import styled from "styled-components";
import {BoxStyledComponentProps} from "./Box.types";
import {makeFlex, spacing, textColour} from "../../Mixins";
import {WIDTH_HEIGHT_VALUES} from "./Box.variants";

const StyledBox = styled.div<BoxStyledComponentProps>`
  display: ${({inline}) => inline ? 'inline-flex' : 'flex'};
  ${({width}) => WIDTH_HEIGHT_VALUES[width]
  ? `width: ${WIDTH_HEIGHT_VALUES[width]};`
  : ''}
  ${({height}) => WIDTH_HEIGHT_VALUES[height]
  ? `height: ${WIDTH_HEIGHT_VALUES[height]};`
  : ''}
  ${({direction, alignX, alignY}) => direction || alignX || alignY
  ? makeFlex(direction, alignX, alignY)
  : ''}
  ${({margin}) => margin ? spacing('margin', margin) : ''}
  ${({padding}) => padding ? spacing('padding', padding) : ''}
  ${({rounded}) => rounded ? `border-radius: ${rounded === "full" ? 1000 : 5}px;` : ''}
  ${({theme, background}) => background ? `color: ${textColour(theme.bme.palette[background], theme)};` : ''}
  ${({theme, background}) => background ? `background: ${theme.bme.palette[background]};` : ''}
`;

const Box: React.FunctionComponent<BoxStyledComponentProps> = ({children, ...styledComponentsProperties}) => (
  <StyledBox {...styledComponentsProperties}>
    {children}
  </StyledBox>
);

export default Box;
