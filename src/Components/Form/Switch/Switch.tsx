import React, { useEffect, useState } from 'react';
import { BMEBox, BMEText } from '../../../index';
import { SwitchComponentProps } from './Switch.types';
import { StyledCustomSwitch, StyledCustomSwitchIndicator, StyledLabel, StyledSwitch } from './Switch.styled';

const Switch: React.FunctionComponent<SwitchComponentProps> = ({
    name,
    value,
    label,
    helperText,
    errorText,
    onChange,
    required,
    valid,
    variant,
}) => {
    const [stateValid, setStateValid] = useState(valid || true);
    const [stateValueHasChanged, setStateValueHasChanged] = useState(false);

    useEffect(() => {
        if (valid) {
            return;
        }

        setStateValid(valid);
    }, [valid]);

    const handleChange = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
        setStateValueHasChanged(true);
        setStateValid(Boolean(checked));
        onChange(checked);
    };

    return (
        <BMEBox width="full" direction="column">
            <BMEBox width="full">
                <StyledLabel htmlFor={name}>
                    <BMEBox width="full" alignX="justify">
                        <BMEText>{label}</BMEText>
                        <StyledCustomSwitch checked={value} variant={variant}>
                            <StyledCustomSwitchIndicator checked={value} variant={variant} />
                        </StyledCustomSwitch>
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
            <BMEBox width="full" alignX="justify" padding={{ y: 's', x: 'm' }}>
                <BMEText size="xxs" variant={!stateValid ? 'required' : null}>
                    {!stateValid ? errorText : helperText}
                </BMEText>
            </BMEBox>
        </BMEBox>
    );
};

Switch.defaultProps = {
    helperText: '&nbsp;',
    errorText: '&nbsp;',
    variant: 'primary',
};

export default Switch;
