import React, { useState } from 'react';
import { BMEBox, BMEText } from '../../../index';
import { TextFieldComponentProps } from './TextField.types';
import { StyledInput, StyledLabel } from './TextField.styled';

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
