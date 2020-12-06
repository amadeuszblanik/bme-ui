import React, { useState } from 'react';
import styled from 'styled-components';
import { BMEBox, BMEText } from '../../../index';
import { hexToRGBA, spacing, transition } from '../../../Mixins';
import { TextFontSize } from '../../Text/Text.variants';
import { sizeToPx } from '../../../Utils';
import { TextFieldComponentProps } from './TextField.types';

const StyledLabel = styled.label<{ filled?: boolean; required?: boolean }>`
    position: absolute;
    top: ${({ filled }) => (filled ? `${TextFontSize.s}px` : '50%')};
    left: ${sizeToPx('m')}px;

    color: ${({ required, theme }) => (!required ? theme.bme.palette.required : 'var(--bme-colour-text)')};

    transform: translateY(-50%);
    ${transition(['top', 'font-size'], 350)}
`;

const StyledInput = styled.input<{ required?: boolean }>`
    width: 100%;
    ${spacing('padding', { x: 'm', y: { top: 'l', bottom: 's' } })}
    color: ${({ required, theme }) => (!required ? theme.bme.palette.required : 'var(--bme-colour-text)')};
    background: ${({ theme }) => hexToRGBA(theme.bme.palette.dark, 0)};
    border-radius: 5px;
    border: ${({ required, theme }) => (!required ? theme.bme.palette.required : 'var(--bme-colour-text)')} 1px solid;

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

const TextField: React.FunctionComponent<TextFieldComponentProps> = ({
    name,
    value,
    label,
    characterLimit,
    helperText,
    errorText,
    onChange,
    required,
    valid,
}) => {
    const [valueHasChanged, setValueHasChanged] = useState(false);
    const filled = value && value.length > 0;
    const characterLimitEnabled = Boolean(characterLimit);
    const requiredValid = valid || (required && valueHasChanged ? filled : true);

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        setValueHasChanged(true);

        if (characterLimitEnabled && value.length > characterLimit) {
            onChange(value.substring(0, characterLimit));
            return;
        }

        onChange(value);
    };

    return (
        <BMEBox width="full" direction="column">
            <BMEBox width="full">
                <StyledLabel for={name} filled={filled} required={requiredValid || valid}>
                    <BMEText size={filled ? 'xxs' : 'm'}>
                        {label}
                        {required ? '*' : ''}
                    </BMEText>
                </StyledLabel>
                <StyledInput id={name} name={name} value={value} onChange={handleChange} required={requiredValid} />
            </BMEBox>
            <BMEBox width="full" alignX="justify" padding={{ y: 's', x: 'm' }}>
                <BMEText size="xxs" variant={!requiredValid ? 'required' : null}>
                    {!requiredValid ? errorText : helperText}
                </BMEText>
                {characterLimitEnabled && (
                    <BMEText size="xxs">
                        {value.length} / {characterLimit!}
                    </BMEText>
                )}
            </BMEBox>
        </BMEBox>
    );
};

TextField.defaultProps = {
    helperText: '&nbsp;',
    errorText: '&nbsp;',
};

export default TextField;
