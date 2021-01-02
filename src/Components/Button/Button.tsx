import React from 'react';
import styled from 'styled-components';
import { ButtonComponentProps, ButtonStyledComponentProps } from './Button.types';
import { hexToRGBA, makeFlex, spacing, textColour, transition } from '../../Mixins';

const StyledButton = styled.button<ButtonStyledComponentProps>`
    position: relative;

    display: inline-flex;
    ${makeFlex('row', 'center', 'center')}
    ${spacing('padding', { x: 'm', y: 's' })}
  overflow: hidden;
    cursor: pointer;

    color: ${({ theme, variant, outline }) =>
        !outline && variant ? `${textColour(theme.bme.palette[variant], theme)}` : 'var(--bme-colour-text)'};
    background: ${({ theme, variant, outline }) =>
        !outline && variant ? `${theme.bme.palette[variant]}` : 'transparent'};
    border: ${({ theme, variant, outline }) =>
        outline && variant ? `${theme.bme.palette[variant]} 2px solid` : 'none'};
    border-radius: ${({ rounded }) => (rounded ? 1000 : 5)}px;
    appearance: none;
    --webkit-appearance: none;

    ${({ theme, variant, outline }) =>
        !outline && variant ? `--bme-colour-text: ${textColour(theme.bme.palette[variant], theme)};` : ''};

    &::after,
    &&::before {
        position: absolute;
        top: 50%;
        left: 50%;

        display: block;
        width: 1000px;
        height: 1000px;
        max-width: 0;
        max-height: 0;
        content: '';
        transform: translate(-50%, -50%);

        border-radius: 1000px;
        background: ${({ theme }) => hexToRGBA(theme.bme.palette.dark, 0.11)};

        ${transition(['max-width', 'max-height'])};
    }

    &:hover {
        &::after {
            max-width: 1000px;
            max-height: 1000px;
        }
    }

    &:active {
        &::before {
            max-width: 1000px;
            max-height: 1000px;
        }
    }
`;

const Button: React.FunctionComponent<ButtonComponentProps> = ({
    children,
    onClick,
    ...styledComponentsProperties
}) => (
    <StyledButton onClick={onClick} {...styledComponentsProperties}>
        {children}
    </StyledButton>
);

export default Button;
