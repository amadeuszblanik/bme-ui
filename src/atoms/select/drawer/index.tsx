import React, { useState } from "react";
import styled from "styled-components";
import { DrawerProps, StyledDrawerItemIconProps, StyledDrawerItemProps } from "./types";
import { animations, boxShadow, margins, paddings } from "../../../mixins";
import Icon from "../../icon";
import { SelectItem } from "../types";

const StyledDrawerWrapper = styled.div`
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
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.radius}px;
  ${boxShadow("blue", "2")}
`;

const StyledSearchInput = styled.input`
  width: calc(100% - 16px);
  ${paddings("xs")}
  ${margins("xs|xs")}
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 0;

  &:hover,
  &:active,
  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.blue};
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
  ${paddings("xs|sm")};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme, selected }) => theme.colors[selected ? "gray5" : "background"]};
  border: none;
  border-radius: ${({ theme }) => theme.radius}px;
  cursor: pointer;
  appearance: none;
  ${animations(["background"])};

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.gray6};
  }

  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};
  }
`;

const StyledDrawerItemIcon = styled.div<StyledDrawerItemIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  ${({ multiple }) => multiple && margins("no|xs|no|no")}
  border: ${({ theme, multiple }) => (multiple ? `2px solid ${theme.colors.text}` : "none")};
  border-radius: ${({ theme }) => theme.radius}px;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  ${animations(["opacity"])};

  > * {
    opacity: ${({ selected }) => (selected ? "1" : "0")};
    ${animations(["opacity"])};
  }
`;

const Drawer: React.FunctionComponent<DrawerProps> = ({ list, selected, multiple, searchable, onClick }) => {
  const [search, setSearch] = useState("");

  const handleSearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  };

  const filteredList: SelectItem[] = searchable
    ? list.filter(({ label }) => label.toLowerCase().includes(search.toLowerCase()))
    : list;

  return (
    <StyledDrawerWrapper>
      {searchable && <StyledSearchInput value={search} onChange={handleSearch} />}
      <StyledDrawerItemsWrapper>
        {filteredList.map((item) => {
          const isSelected = selected.includes(item.key);

          return (
            <StyledDrawerItem key={item.key} selected={isSelected} onClick={() => onClick(item.key)} type="button">
              <StyledDrawerItemIcon visible={isSelected || multiple} selected={isSelected} multiple={multiple}>
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
