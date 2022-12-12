import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";

const StyledButton = styled.button<ButtonProps>`
  padding: 8px 16px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  background-color: ${(props) => (props.variant === "primary" ? "blue" : "red")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

export default Button;
