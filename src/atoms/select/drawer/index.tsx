import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DrawerProps, StyledDrawerItemIconProps, StyledDrawerItemProps } from "./types";
import { StyledComponent } from "../../../types/styled-component";
import ThemeProviderContext from "../../../components/theme-provider/context";
import { animations, boxShadow, margins, paddings } from "../../../mixins";
import Icon from "../../icon";
import { SelectItem } from "../types";

const StyledDrawerWrapper = styled.div<StyledComponent>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 320px;
  overflow-y: scroll;
  background: ${({ bmeTheme }) => bmeTheme.colors.background};
  border: 2px solid ${({ bmeTheme }) => bmeTheme.colors.blue};
  border-radius: ${({ bmeTheme }) => bmeTheme.radius}px;
  ${({ bmeTheme }) => boxShadow(bmeTheme, "blue", "2")}
`;

const StyledSearchInput = styled.input<StyledComponent>`
  width: calc(100% - 16px);
  ${({ bmeTheme }) => paddings("xs", bmeTheme)}
  ${({ bmeTheme }) => margins("xs|xs", bmeTheme)}
  color: ${({ bmeTheme }) => bmeTheme.colors.text};
  background: ${({ bmeTheme }) => bmeTheme.colors.background};
  border: none;
  border-bottom: 2px solid ${({ bmeTheme }) => bmeTheme.colors.text};
  border-radius: 0;

  &:hover,
  &:active,
  &:focus {
    border-bottom-color: ${({ bmeTheme }) => bmeTheme.colors.blue};
    outline: none;
  }
`;

const StyledDrawerItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledDrawerItem = styled.button<StyledDrawerItemProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  ${({ bmeTheme }) => paddings("xs|sm", bmeTheme)};
  color: ${({ bmeTheme }) => bmeTheme.colors.text};
  background: ${({ bmeTheme, selected }) => bmeTheme.colors[selected ? "gray5" : "background"]};
  border: none;
  border-radius: ${({ bmeTheme }) => bmeTheme.radius}px;
  cursor: pointer;
  appearance: none;
  ${animations(["background"])};

  &:hover,
  &:active {
    background: ${({ bmeTheme }) => bmeTheme.colors.gray6};
  }

  :not(:last-child) {
    border-bottom: 1px solid ${({ bmeTheme }) => bmeTheme.colors.gray6};
  }
`;

const StyledDrawerItemIcon = styled.div<StyledDrawerItemIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  ${({ bmeTheme, multiple }) => multiple && margins("no|xs|no|no", bmeTheme)}
  border: ${({ bmeTheme, multiple }) => (multiple ? `2px solid ${bmeTheme.colors.text}` : "none")};
  border-radius: ${({ bmeTheme }) => bmeTheme.radius}px;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  ${animations(["opacity"])};

  > * {
    opacity: ${({ selected }) => (selected ? "1" : "0")};
    ${animations(["opacity"])};
  }
`;

const Drawer: React.FunctionComponent<DrawerProps> = ({ list, selected, multiple, searchable, onClick }) => {
  const { theme } = useContext(ThemeProviderContext);

  const [search, setSearch] = useState("");

  const handleSearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  };

  const filteredList: SelectItem[] = searchable
    ? list.filter(({ label }) => label.toLowerCase().includes(search.toLowerCase()))
    : list;

  return (
    <StyledDrawerWrapper bmeTheme={theme}>
      {searchable && <StyledSearchInput value={search} onChange={handleSearch} bmeTheme={theme} />}
      <StyledDrawerItemsWrapper>
        {filteredList.map((item) => {
          const isSelected = selected.includes(item.key);

          return (
            <StyledDrawerItem
              key={item.key}
              bmeTheme={theme}
              selected={isSelected}
              onClick={() => onClick(item.key)}
              type="button"
            >
              <StyledDrawerItemIcon
                visible={isSelected || multiple}
                selected={isSelected}
                multiple={multiple}
                bmeTheme={theme}
              >
                <Icon name="checkmark" />
              </StyledDrawerItemIcon>
              {item.label}
            </StyledDrawerItem>
          );
        })}
      </StyledDrawerItemsWrapper>
    </StyledDrawerWrapper>
  );
};

export default Drawer;
