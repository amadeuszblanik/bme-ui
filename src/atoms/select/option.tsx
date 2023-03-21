import { forwardRef } from "react";
import { SelectOptionProps } from "./types";

const SelectOption = forwardRef<HTMLOptionElement, SelectOptionProps>(({ label, ...props }, ref) => (
  <option ref={ref} {...props}>
    {label}
  </option>
));

SelectOption.displayName = "BmeSelectOption";

export default SelectOption;
