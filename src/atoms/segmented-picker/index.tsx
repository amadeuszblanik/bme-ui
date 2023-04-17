import React from "react";
import styled from "styled-components";
import { SegmentedPickerProps, SegmentedPickerItemProps, SegmentedPickerChildren } from "./types";
import Item from "./item";
import { background, paddings } from "../../mixins";

const NEXT_CHILD_INDEX_DIFFERENCE = 1;

const StyledSegmentedPicker = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${paddings("xs3")}
  border-radius: ${({ theme }) => theme.radius}px;
  ${background("gray5")}
`;

const Component: React.FC<SegmentedPickerProps> & { Item: React.FC<SegmentedPickerItemProps> } = ({
  value,
  onChange,
  children,
}) => {
  const childrenArray = React.Children.toArray(children) as SegmentedPickerChildren[];

  const cloneChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const nextChild = childrenArray[index + NEXT_CHILD_INDEX_DIFFERENCE];

      const isSelected = value === child.props.tag;
      const isNextSelected = nextChild?.props.tag === value;

      const handleClick = () => {
        onChange?.(child.props.tag);
        child.props.onClick?.(child.props.tag);
      };

      return React.cloneElement(child as SegmentedPickerChildren, {
        selected: isSelected,
        onClick: handleClick,
        divider: !isSelected && !isNextSelected,
      });
    }

    return child;
  });

  return <StyledSegmentedPicker>{cloneChildren}</StyledSegmentedPicker>;
};

Component.Item = Item;

export default Component;
