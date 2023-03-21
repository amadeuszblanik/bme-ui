import { forwardRef } from "react";
import { SelectOptionProps } from "./types";

const SelectOption = forwardRef<HTMLOptionElement, SelectOptionProps>(({ children, ...props }, ref) => (
  <option ref={ref} {...props}>
    {children}
  </option>
));

SelectOption.displayName = "BmeSelectOption";

export default SelectOption;
