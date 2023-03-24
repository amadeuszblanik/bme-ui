import { ChangeEvent, forwardRef, useEffect, useState } from "react";
import { SelectComponent, SelectProps } from "./types";
import SelectOption from "./option";
import SelectGroup from "./group";
import { StyledSelect, StyledSelectWrapper } from "./styled";
import { VALUES } from "./settings";
import Drawer from "./drawer";
import { childrenToList } from "../../utils";
import { useClickOutside } from "../../hooks";
import Text from "../text";

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size,
      variant,
      native,
      onChange,
      value,
      emptyValue,
      searchable,
      multiple,
      width,
      minWidth,
      maxWidth,
      disabled,
      children,
      ...props
    },
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

    const [selectedValue, setSelectedValue] = useState(value);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const wrapperRef = useClickOutside<HTMLDivElement>(() => {
      setIsDrawerOpen(false);
    });

    useEffect(() => {
      let nextValue = value;

      items.forEach((item) => {
        if (item.type === "option" && item.key === value) {
          nextValue = item.label;
        } else if (item.type === "group") {
          item.options.forEach((option) => {
            if (option.key === value) {
              nextValue = option.label;
            }
          });
        }
      });

      setSelectedValue(nextValue);
    }, [value, items]);

    const handleDrawerSelect = (key: string | number) => {
      onChange?.(key);
    };

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value);
    };

    const handleClick = () => {
      setIsDrawerOpen(true);
    };

    return (
      <StyledSelectWrapper ref={wrapperRef}>
        <StyledSelect
          {...props}
          as={native ? "select" : "button"}
          type={!native ? "button" : undefined}
          ref={ref}
          fontSize={fontSize}
          paddingX={paddingX}
          paddingY={paddingY}
          variant={variant}
          multiple={multiple}
          onChange={handleChange}
          onClick={handleClick}
          disabled={disabled}
          width={width}
          minWidth={minWidth}
          maxWidth={maxWidth}
        >
          {native ? (
            children
          ) : (
            <Text lineFormat="nowrap" ellipsis noBottomMargin>
              {selectedValue || emptyValue || "——"}
            </Text>
          )}
        </StyledSelect>
        {isDrawerOpen && (
          <Drawer
            items={items}
            onSelect={handleDrawerSelect}
            searchable={searchable}
            multiple={multiple}
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
