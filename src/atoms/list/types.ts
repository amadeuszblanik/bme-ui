import React from "react";
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

export interface StyledListItemProps {
  clickable: boolean;
  actionsVisible: boolean;
}

export interface StyledListItemActionsProps {
  visible: boolean;
}

export type ListType = React.FC<ListProps> & { Item: React.FC<ListItemProps> };
