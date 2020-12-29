import React, { useState } from 'react';
import { BMEBox, BMEText } from '../../../index';
import { TextFieldComponentProps } from './TextField.types';
import { StyledInput, StyledLabel } from './TextField.styled';
import { isEmpty, renderLabel } from '../../../Utils';

const TextField: React.FunctionComponent<TextFieldComponentProps> = ({ name, value, label, onChange, required }) => {
    const [filled, setFilled] = useState(!isEmpty(value));

    const handleChange = ({ target: { value: targetValue } }: React.ChangeEvent<HTMLInputElement>) => {
        setFilled(!isEmpty(targetValue));
        onChange(targetValue);
    };

    const handleFocus = () => {
        setFilled(true);
    };

    const handleBlur = ({ target: { value: targetValue } }: React.ChangeEvent<HTMLInputElement>) => {
        setFilled(!isEmpty(targetValue));
    };

    return (
        <BMEBox width="full">
            <StyledLabel for={name} filled={filled}>
                <BMEText size={filled ? 'xxs' : 'm'}>{renderLabel(label, required)}</BMEText>
            </StyledLabel>
            <StyledInput
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </BMEBox>
    );
};

export default TextField;
