import React from "react";
import styled from "styled-components";
import { SegmentedPickerItemProps, StyledSegmentedPickerItemProps } from "./types";
import { animations, background, buttonReset, paddings } from "../../mixins";

const RADIUS_MULTIPLIER = 2;

const StyledSegmentedPickerItem = styled.button<StyledSegmentedPickerItemProps>`
  ${buttonReset()}
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${paddings("xs|sm")}
  border-radius: ${({ theme }) => theme.radius}px;
  ${({ selected }) => background(selected ? "gray2" : "gray5")}
  ${animations(["background"], "150ms")}
  
  &:not(:last-child) {
    &:after {
      position: absolute;
      top: 50%;
      right: 0;
      display: ${({ divider }) => (divider ? "block" : "none")};
      width: 1px;
      height: ${({ theme }) => `calc(100% - ${theme.radius * RADIUS_MULTIPLIER}px)`};
      background: ${({ theme }) => theme.colors.gray3};
      transform: translateY(-50%);
      content: "";
    }
  }

  &:hover {
    ${background("gray2")}
  }

  &:active {
    ${background("gray")}
  }
`;

const Compontent: React.FC<SegmentedPickerItemProps> = ({ tag, onClick, selected, divider, children }) => {
  const handleClick = () => {
    onClick?.(tag);
  };

  return (
    <StyledSegmentedPickerItem onClick={handleClick} selected={selected || false} divider={divider}>
      {children}
    </StyledSegmentedPickerItem>
  );
};

export default Compontent;
