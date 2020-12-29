import styled from 'styled-components';
import { sizeToPx } from '../../../Utils';
import { makeFlex, textColour, transition } from '../../../Mixins';
import { Palette } from '../../../Theme/Theme';

export const StyledSwitch = styled.input<{ required?: boolean }>`
    display: none;
    visibility: hidden;
    appearance: none;
`;

export const StyledCustomSwitch = styled.div<{ checked: boolean; variant: Palette }>`
    display: flex;
    ${makeFlex('row', 'center', 'center')}
    width: ${sizeToPx('l') * 2}px;
    height: ${sizeToPx('l')}px;
    border: solid 1px ${({ variant, theme }) => theme.bme.palette[variant]};
    background: ${({ checked, variant, theme }) => (checked ? theme.bme.palette[variant] : 'transparent')};
    border-radius: 1000px;
    ${transition(['background'])};
`;

export const StyledCustomSwitchIndicator = styled.div<{ checked: boolean; variant: Palette }>`
    display: inline-block;
    width: ${sizeToPx('m')}px;
    height: ${sizeToPx('m')}px;
    margin: ${({ checked }) => (checked ? `0 0 0 ${sizeToPx('m')}px` : `0 ${sizeToPx('m')}px 0 0`)};
    border-radius: 1000px;
    background: ${({ checked, variant, theme }) =>
        checked ? textColour(theme.bme.palette[variant], theme) : theme.bme.palette[variant]};
    ${transition(['margin', 'background'])};
`;

export const StyledLabel = styled.label`
    width: 100%;
`;
