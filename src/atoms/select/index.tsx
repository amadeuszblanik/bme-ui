import { ChangeEvent, forwardRef, useState } from "react";
import { SelectComponent, SelectProps } from "./types";
import SelectOption from "./option";
import SelectGroup from "./group";
import { StyledSelect, StyledSelectWrapper } from "./styled";
import { VALUES } from "./settings";
import Drawer from "./drawer";
import { childrenToList } from "../../utils";

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { size, variant, native, onChange, value, search, width, minWidth, maxWidth, disabled, children, ...props },
    ref,
  ) => {
    size = size ?? "medium";
    variant = variant ?? "blue";

    const paddingX = {
      mobile: VALUES.mobile[size].paddingX,
      desktop: VALUES.desktop[size].paddingX,
    };
    const paddingY = {
      mobile: VALUES.mobile[size].paddingY,
      desktop: VALUES.desktop[size].paddingY,
    };
    const fontSize = {
      mobile: VALUES.mobile[size].fontSize,
      desktop: VALUES.desktop[size].fontSize,
    };

    const items = childrenToList(children);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerSelect = (key: string) => {
      onChange?.(key);
      setIsDrawerOpen(false);
    };

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value);
    };

    const handleClick = () => {
      setIsDrawerOpen(true);
    };

    return (
      <StyledSelectWrapper>
        <StyledSelect
          as={native ? "select" : "button"}
          ref={ref}
          fontSize={fontSize}
          paddingX={paddingX}
          paddingY={paddingY}
          variant={variant}
          {...props}
          onChange={handleChange}
          onClick={handleClick}
          disabled={disabled}
          width={width}
          minWidth={minWidth}
          maxWidth={maxWidth}
        >
          {native ? children : value || "--"}
        </StyledSelect>
        {isDrawerOpen && !native && (
          <Drawer
            items={items}
            onSelect={handleDrawerSelect}
            search={search || true}
            variant={variant}
            width={width}
            minWidth={minWidth}
            maxWidth={maxWidth}
          />
        )}
      </StyledSelectWrapper>
    );
  },
) as SelectComponent;

Select.displayName = "BmeSelect";
Select.Option = SelectOption;
Select.Group = SelectGroup;

export default Select;
