import { ThemeColours } from "../../settings/theme";
import { ChildrenList } from "../../utils/children-to-list";

export interface SelectProps {
  size?: "small" | "medium" | "large";
  variant?: ThemeColours;
  native?: boolean;
  onChange?: (event: string) => void;
  value?: string;
  emptyValue?: string;
  search?: boolean;
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
  onSelect: (key: string) => void;
  search?: boolean;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  variant: ThemeColours;
}

// Styled

export interface StyledSelectProps {
  variant: ThemeColours;
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

export interface StyledSelectDrawerSearchProps {
  variant: ThemeColours;
}
