import React from "react";
import { StyledComponent } from "../../types/styled-component";
import { ButtonProps } from "../button/types";

export interface ListProps {
  label?: string;
  children: React.ReactNode;
  emptyMessage?: string | React.ReactNode;
}

export interface ListItemProps {
  children: string | React.ReactNode;
  actions?: ButtonProps[];
  onClick?: () => void;
}

export interface StyledListItemProps extends StyledComponent {
  clickable: boolean;
  actionsVisible: boolean;
}

export interface StyledListItemActionsProps extends StyledComponent {
  visible: boolean;
}

export type ListType = React.FC<ListProps> & { Item: React.FC<ListItemProps> };
