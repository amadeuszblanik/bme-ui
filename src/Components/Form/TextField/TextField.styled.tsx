import styled from 'styled-components';
import { TextFontSize } from '../../Text/Text.variants';
import { sizeToPx } from '../../../Utils';
import { hexToRGBA, spacing, transition } from '../../../Mixins';

export const StyledLabel = styled.label<{ for?: string; filled?: boolean }>`
    position: absolute;
    top: ${({ filled }) => (filled ? `${TextFontSize.s}px` : '50%')};
    left: ${sizeToPx('m')}px;
    transform: translateY(-50%);
    ${transition(['top', 'font-size'], 350)}
`;

export const StyledInput = styled.input`
    width: 100%;
    ${spacing('padding', { x: 'm', y: { top: 'l', bottom: 's' } })}
    color: var(--bme-colour-text);
    background: ${({ theme }) => hexToRGBA(theme.bme.palette.dark, 0)};
    border-radius: 5px;
    border: var(--bme-colour-text) 1px solid;

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
