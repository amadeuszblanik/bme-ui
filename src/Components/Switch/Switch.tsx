import React from 'react';
import { SwitchComponentProps } from './Switch.types';
import { StyledCustomSwitch, StyledCustomSwitchIndicator } from './Switch.styled';

const Switch: React.FunctionComponent<SwitchComponentProps> = ({ checked, variant, onClick }) => {
    const handleClick = () => {
        onClick(!checked);
    };

    return (
        <StyledCustomSwitch checked={checked} variant={variant} onClick={handleClick}>
            <StyledCustomSwitchIndicator checked={checked} variant={variant} />
        </StyledCustomSwitch>
    );
};
Switch.defaultProps = {
    checked: false,
    variant: 'primary',
};

export default Switch;
