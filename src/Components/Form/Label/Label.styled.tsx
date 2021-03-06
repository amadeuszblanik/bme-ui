import styled from 'styled-components';
import { hexToRGBA, spacing, transition } from '../../../Mixins';
import { TextFontSize } from '../../Text/Text.variants';

export const StyledSelect = styled.select<{ required?: boolean }>`
    width: 100%;
    ${spacing('padding', { x: 'm', y: { top: 'm', bottom: 'm' } })}
    color: ${({ required, theme }) => (required ? theme.bme.palette.required : 'var(--bme-colour-text)')};
    background: ${({ theme }) => hexToRGBA(theme.bme.palette.dark, 0)};
    border-radius: 5px;
    border: ${({ required, theme }) => (required ? theme.bme.palette.required : 'var(--bme-colour-text)')} 1px solid;

    font-size: ${TextFontSize.m}px;

    appearance: none;
    ${transition(['background'], 350)}

    &:hover, &:active {
        background: ${({ theme }) => hexToRGBA(theme.bme.palette.dark, 0.13)};
    }

    &:focus {
        border-color: ${({ theme }) => theme.bme.palette.focus};
        outline: none;
    }
`;
