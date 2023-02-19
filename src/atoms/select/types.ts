import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, SelectHTMLAttributes } from "react";
import Group from "./group";
import Option from "./option";
import { ThemeColours } from "../../settings/theme";

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  size?: "small" | "medium" | "large";
  variant?: ThemeColours;
}

export type SelectComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SelectProps> & RefAttributes<HTMLSelectElement>
> & {
  Group: typeof Group;
  Option: typeof Option;
};

export interface StyledSelectProps {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  variant: ThemeColours;
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
