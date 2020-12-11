import React, { useEffect, useState } from 'react';
import { BMEBox, BMEText } from '../../../index';
import { SelectComponentProps } from './Select.types';
import { StyledSelect } from '../TextField/TextField.styled';

const Select: React.FunctionComponent<SelectComponentProps> = ({
    name,
    options,
    value,
    label,
    helperText,
    errorText,
    onChange,
    required,
    valid,
}) => {
    const [stateValid, setStateValid] = useState(valid || true);
    const [stateValueHasChanged, setStateValueHasChanged] = useState(false);

    useEffect(() => {
        if (valid) {
            return;
        }

        setStateValid(valid);
    }, [valid]);

    const handleChange = ({ target: { value: targetValue } }: React.ChangeEvent<HTMLSelectElement>) => {
        setStateValueHasChanged(true);
        setStateValid(targetValue !== 'null');
        onChange(targetValue);
    };

    return (
        <BMEBox width="full" direction="column">
            <BMEBox width="full">
                <StyledSelect
                    as="select"
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    required={stateValueHasChanged ? required : false}
                >
                    <option value="null" selected>
                        {label}
                        {required ? '*' : ''}
                    </option>
                    {options.map(({ value: optionValue, content }) => (
                        <option key={optionValue} value={optionValue} selected={false}>
                            {content}
                        </option>
                    ))}
                </StyledSelect>
            </BMEBox>
            <BMEBox width="full" alignX="justify" padding={{ y: 's', x: 'm' }}>
                <BMEText size="xxs" variant={!stateValid ? 'required' : null}>
                    {!stateValid ? errorText : helperText}
                </BMEText>
            </BMEBox>
        </BMEBox>
    );
};

Select.defaultProps = {
    helperText: '&nbsp;',
    errorText: '&nbsp;',
};

export default Select;
