import { ThemeColours } from "../../settings/theme";
import { ButtonProps } from "../button/types";

interface DropdownItem {
  label: string;
  onClick: () => void;
}

export interface DropdownProps extends ButtonProps {
  label: string;
  list: DropdownItem[];
}

export interface StyledDropdownListProps {
  // width?: string;
  // paddingX: {
  //   mobile: number;
  //   desktop: number;
  // };
  // paddingY: {
  //   mobile: number;
  //   desktop: number;
  // };
  variant: ThemeColours;
  // outline?: boolean;
  // fontSize: {
  //   mobile: number;
  //   desktop: number;
  // };
}
