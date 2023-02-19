import { SelectItem } from "../types";

export interface DrawerProps {
  selected: string[];
  list: SelectItem[];
  onClick: (key: string) => void;
  multiple: boolean;
  searchable?: boolean;
}

export interface StyledDrawerItemProps {
  selected: boolean;
}

export interface StyledDrawerItemIconProps {
  visible: boolean;
  selected: boolean;
  multiple: boolean;
}
