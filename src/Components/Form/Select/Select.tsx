import React from 'react';
import { SelectComponentProps } from './Select.types';
import { StyledSelect } from './Select.styled';
import { renderLabel } from '../../../Utils';

const Select: React.FunctionComponent<SelectComponentProps> = ({ name, options, value, label, onChange, required }) => {
    const handleChange = ({ target: { value: targetValue } }: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(targetValue);
    };

    return (
        <StyledSelect as="select" id={name} name={name} value={value} onChange={handleChange}>
            <option value="null" selected disabled>
                {renderLabel(label, required)}
            </option>
            {options.map(({ value: optionValue, content }) => (
                <option key={optionValue} value={optionValue} selected={false}>
                    {content}
                </option>
            ))}
        </StyledSelect>
    );
};

export default Select;
