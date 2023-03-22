import { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "bme-utils";
import {
  StyledSelectDrawer,
  StyledSelectDrawerGroup,
  StyledSelectDrawerGroupLabel,
  StyledSelectDrawerOption,
  StyledSelectDrawerOptionSelected,
  StyledSelectDrawerSearch,
} from "./styled";
import { SelectDrawerProps } from "./types";
import { ChildrenList } from "../../utils/children-to-list";

const Drawer = ({ items, onSelect, searchable, width, minWidth, maxWidth, variant }: SelectDrawerProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<ChildrenList>(items);

  useEffect(() => {
    if (!isEmpty(searchValue)) {
      const nextFilteredItems: ChildrenList = [];

      items.forEach((item) => {
        if (item.type === "option") {
          if (
            String(item.label).toLowerCase().includes(searchValue.toLowerCase()) ||
            String(item.key).toLowerCase().includes(searchValue.toLowerCase())
          ) {
            nextFilteredItems.push(item as any);
          }
        } else if (item.type === "group") {
          const options = item.options.filter(
            (option) =>
              String(option.label).toLowerCase().includes(searchValue.toLowerCase()) ||
              String(option.key).toLowerCase().includes(searchValue.toLowerCase()),
          );

          if (!isEmpty(options)) {
            nextFilteredItems.push({ ...item, options } as any);
          }
        }
      });

      setFilteredItems(nextFilteredItems);
    } else {
      setFilteredItems(items);
    }
  }, [searchValue, items]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <StyledSelectDrawer variant={variant} width={width} minWidth={minWidth} maxWidth={maxWidth}>
      {searchable && <StyledSelectDrawerSearch variant={variant} value={searchValue} onChange={handleChange} />}
      {filteredItems.map((item, index) => {
        if (item.type === "option") {
          return (
            <StyledSelectDrawerOption
              key={index}
              onClick={() => onSelect(item.key)}
              variant={variant}
              selected={item.selected}
              disabled={item.disabled}
              type="button"
            >
              {item.selected && <StyledSelectDrawerOptionSelected variant={variant} />}
              {item.label}
            </StyledSelectDrawerOption>
          );
        } else if (item.type === "group") {
          return (
            <StyledSelectDrawerGroup key={index}>
              <StyledSelectDrawerGroupLabel>{item.label}</StyledSelectDrawerGroupLabel>
              {item.options.map((option) => (
                <StyledSelectDrawerOption
                  key={option.key}
                  onClick={() => onSelect(option.key)}
                  variant={variant}
                  selected={option.selected}
                  disabled={option.disabled}
                  type="button"
                >
                  {option.selected && <StyledSelectDrawerOptionSelected variant={variant} />}
                  {option.label}
                </StyledSelectDrawerOption>
              ))}
            </StyledSelectDrawerGroup>
          );
        }

        return <></>;
      })}
    </StyledSelectDrawer>
  );
};

Drawer.displayName = "BmeSelectDrawer";

export default Drawer;
