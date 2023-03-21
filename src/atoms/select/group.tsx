import { forwardRef } from "react";
import { SelectGroupProps } from "./types";

const SelectGroup = forwardRef<HTMLOptGroupElement, SelectGroupProps>(({ children, ...props }, ref) => (
  <optgroup ref={ref} {...props}>
    {children}
  </optgroup>
));

SelectGroup.displayName = "BmeSelectGroup";

export default SelectGroup;
