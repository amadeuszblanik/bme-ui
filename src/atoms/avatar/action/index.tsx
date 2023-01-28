import React from "react";
import styled from "styled-components";
import { AvatarActionProps } from "../types";
import Icon from "../../icon";

const StyledAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: none;
  cursor: pointer;
`;

const Component: React.FC<AvatarActionProps> = ({ icon, onClick }) => (
  <StyledAction onClick={onClick}>
    <Icon name={icon} />
  </StyledAction>
);

export default Component;
