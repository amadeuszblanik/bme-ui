import { ThemeColours } from "../../settings/theme";
import { ChildrenList } from "../../utils/children-to-list";

export interface SelectProps {
  size?: "small" | "medium" | "large";
  variant?: ThemeColours;
  native?: boolean;
  onChange?: (event: string | number) => void;
  value?: string | number;
  emptyValue?: string;
  search?: boolean;
  multiple?: boolean;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export interface SelectOptionProps {
  label: string;
  disabled?: boolean;
}

export interface SelectGroupProps {
  children?: React.ReactNode;
}

export type SelectComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<SelectProps> & React.RefAttributes<HTMLSelectElement>
> & {
  Option: any;
  Group: any;
};

export interface SelectDrawerProps {
  items: ChildrenList;
  onSelect: (key: string | number) => void;
  search?: boolean;
  multiple?: boolean;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  variant: ThemeColours;
}

// Styled

export interface StyledSelectProps {
  variant: ThemeColours;
  type?: "button";
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  paddingX: {
    mobile: number;
    desktop: number;
  };
  paddingY: {
    mobile: number;
    desktop: number;
  };
  fontSize: {
    mobile: number;
    desktop: number;
  };
}

export interface StyledSelectWrapperProps {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}

export interface StyledSelectDrawerProps {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  variant: ThemeColours;
}

export interface StyledSelectDrawerOptionProps {
  variant: ThemeColours;
  selected?: boolean;
  disabled?: boolean;
}

export interface StyledSelectDrawerOptionSelectedProps {
  variant: ThemeColours;
}

export interface StyledSelectDrawerSearchProps {
  variant: ThemeColours;
}
