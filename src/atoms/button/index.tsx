import React from "react";
import {ButtonProps} from "./types";
import styled from "styled-components";

const StyledButton = styled.button<ButtonProps>`
    background-color: ${props => props.variant === 'primary' ? 'blue' : 'red'};
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
