import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DropdownProps, StyledDropdownListProps } from "./types";
import Button from "../button";
import { BmeBox, BmeButton, BmeIcon } from "../index";
import ThemeProviderContext from "../../components/theme-provider/context";
import { paddings } from "../../mixins";

const StyledDropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledDropdownList = styled.div<StyledDropdownListProps>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ bmeTheme }) => paddings("sm|md", bmeTheme)}
  background: ${({ bmeTheme }) => bmeTheme.colors.background};
  border: solid 2px ${({ bmeTheme }) => bmeTheme.colors.gray2};
  border-radius: ${({ bmeTheme }) => bmeTheme.radius}px;
`;

const Dropdown: React.FC<DropdownProps> = ({ children, variant, list, ...props }) => {
  variant = variant ?? "blue";

  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useContext(ThemeProviderContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledDropdownWrapper>
      <Button variant={variant} {...props} onClick={handleToggle}>
        <BmeBox alignX="space-between">
          {children && <BmeBox margin="no|md|no|no">{children}</BmeBox>}
          <BmeBox>
            <BmeIcon name={isOpen ? "chevron-up" : "chevron-down"} />
          </BmeBox>
        </BmeBox>
      </Button>
      {isOpen && (
        <StyledDropdownList bmeTheme={theme} variant={variant}>
          {list.map((item, index) => (
            <BmeButton key={index} onClick={item.onClick} {...props} size="small" variant="background">
              {item.label}
            </BmeButton>
          ))}
        </StyledDropdownList>
      )}
    </StyledDropdownWrapper>
  );
};

Dropdown.defaultProps = {
  variant: "blue",
  size: "medium",
  type: "button",
};

export default Dropdown;
