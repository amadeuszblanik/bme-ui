import React from "react";

export type SegmentedPickerChildren = React.ReactElement<SegmentedPickerItemProps>;

export interface SegmentedPickerProps {
  value?: string | number;
  onChange?: (value: string | number) => void;
  children: SegmentedPickerChildren[] | SegmentedPickerChildren;
}

export interface SegmentedPickerItemProps {
  tag: string | number;
  selected?: boolean;
  onClick?: (value: string | number) => void;
  divider?: boolean;
  children: React.ReactNode | string;
}

export interface StyledSegmentedPickerItemProps {
  selected: boolean;
  divider?: boolean;
}
