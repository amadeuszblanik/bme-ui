import React, { useState } from "react";
import styled from "styled-components";
import { DropdownProps, StyledDropdownListProps } from "./types";
import Button from "../button";
import { BmeBox, BmeButton, BmeIcon } from "../index";
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
  ${paddings("sm|md")}
  background: ${({ theme }) => theme.colors.background};
  border: solid 2px ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.radius}px;
`;

const Dropdown: React.FC<DropdownProps> = ({ children, variant, list, ...props }) => {
  variant = variant ?? "blue";

  const [isOpen, setIsOpen] = useState(false);

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
        <StyledDropdownList variant={variant}>
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
