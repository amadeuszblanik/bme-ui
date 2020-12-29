import React, { useState } from 'react';
import { BMEBox, BMESwitch, BMEText } from '../../../index';
import { SwitchComponentProps } from './Switch.types';
import { StyledLabel, StyledSwitch } from './Switch.styled';
import { renderLabel } from '../../../Utils';

const Switch: React.FunctionComponent<SwitchComponentProps> = ({ name, value, label, onChange, required, variant }) => {
    const [stateValueHasChanged, setStateValueHasChanged] = useState(false);

    const handleChange = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
        setStateValueHasChanged(true);
        onChange(checked);
    };

    return (
        <BMEBox width="full" padding={{ x: 'm' }}>
            <StyledLabel htmlFor={name}>
                <BMEBox width="full" alignX="justify">
                    <BMEText>{renderLabel(label, required)}</BMEText>
                    <BMESwitch checked={value} variant={variant} />
                </BMEBox>
            </StyledLabel>
            <StyledSwitch
                type="checkbox"
                id={name}
                name={name}
                checked={value}
                onChange={handleChange}
                required={stateValueHasChanged ? required : false}
            />
        </BMEBox>
    );
};

Switch.defaultProps = {
    variant: 'primary',
};

export default Switch;
