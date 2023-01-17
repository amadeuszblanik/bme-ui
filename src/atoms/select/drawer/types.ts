import { StyledComponent } from "../../../types/styled-component";
import { SelectItem } from "../types";

export interface DrawerProps {
  selected: string[];
  list: SelectItem[];
  onClick: (key: string) => void;
  multiple: boolean;
}

export interface StyledDrawerItemProps extends StyledComponent {
  selected: boolean;
}

export interface StyledDrawerItemIconProps extends StyledComponent {
  visible: boolean;
  selected: boolean;
  multiple: boolean;
}
